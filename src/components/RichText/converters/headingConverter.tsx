import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'


export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({node, nodesToJSX}) => {
    // Compute a stable id from plain text, but render full JSX children
    const plain = (node.children || [])
      .map((c: any) => (typeof c?.text === 'string' ? c.text : ''))
      .join('')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

    const children = nodesToJSX({ nodes: node.children })
    const Tag = node.tag

    if (node.tag === 'h2') {
      return <h2 id={plain}>{children}</h2>
    }
    return <Tag>{children}</Tag>
  }
}