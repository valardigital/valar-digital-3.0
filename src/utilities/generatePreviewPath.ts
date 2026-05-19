import type { PayloadRequest, CollectionSlug } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug | 'caseStudy' | 'tools', string>> = {
  blog: '/blog',
  caseStudy: '/case-studies',
  tools: '/tools',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug, req }: Props) => {
  const prefix = collectionPrefixMap[collection] || ''
  const path = `${prefix}/${slug}`

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`
  return url
}

