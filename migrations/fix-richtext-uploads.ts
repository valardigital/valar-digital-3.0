import { getPayload } from 'payload'
import configPromise from '@payload-config'

type RichText = any

function isUrlLike(value: unknown): boolean {
  return typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/'))
}

function normalizeNode(node: any): any {
  if (!node || typeof node !== 'object') return node

  // BlocksFeature stores blocks as nodes of type 'block' with fields
  if (node.type === 'block' && node?.fields && typeof node.fields === 'object') {
    const fields = node.fields as any
    // Common upload field names we used across blocks
    for (const key of ['image', 'mainImage', 'featuredImage']) {
      const val = fields[key]
      // If a URL string was persisted incorrectly, clear it so Payload accepts the document
      if (isUrlLike(val)) {
        fields[key] = undefined
      }
      // If a populated object without id was persisted, clear it as well
      if (val && typeof val === 'object' && !('id' in val) && !('_id' in val)) {
        fields[key] = undefined
      }
    }

    // Arrays that may contain items with images
    for (const arrKey of ['items', 'insights', 'details']) {
      const arr = fields[arrKey]
      if (Array.isArray(arr)) {
        fields[arrKey] = arr.map((it: any) => {
          if (it && typeof it === 'object') {
            if (isUrlLike(it.image)) it.image = undefined
            if (it.image && typeof it.image === 'object' && !('id' in it.image) && !('_id' in it.image)) {
              it.image = undefined
            }
          }
          return it
        })
      }
    }
  }

  if (Array.isArray(node.children)) node.children = node.children.map(normalizeNode)
  if (node.fields && typeof node.fields === 'object') {
    for (const key of Object.keys(node.fields)) {
      const val = (node.fields as any)[key]
      if (Array.isArray(val)) (node.fields as any)[key] = val.map((v: any) => normalizeNode(v))
      else if (val && typeof val === 'object') (node.fields as any)[key] = normalizeNode(val)
    }
  }
  return node
}

export default async function fixRichtextUploads() {
  const payload = await getPayload({ config: configPromise })

  // Collections to process
  const collections = ['caseStudy', 'blog'] as const

  for (const collection of collections) {
    const cursor = await payload.find({ collection, limit: 100, depth: 0, page: 1 })
    const totalPages = cursor.totalPages || 1
    for (let page = 1; page <= totalPages; page++) {
      const res = page === 1 ? cursor : await payload.find({ collection, limit: 100, depth: 0, page })
      for (const doc of res.docs as any[]) {
        const content: RichText | undefined = doc?.content
        if (content && typeof content === 'object' && content.root && Array.isArray(content.root.children)) {
          const original = JSON.stringify(content)
          content.root.children = content.root.children.map(normalizeNode)
          const updated = JSON.stringify(content)
          if (original !== updated) {
            await payload.update({ collection, id: doc.id, data: { content }, depth: 0 })
            console.log(`Normalized richText uploads in ${collection} ${doc.id}`)
          }
        }
      }
    }
  }
}

