type Props = {
  data?: string | null
}

/** Safely parse CMS JSON-LD and render a script tag for search engines. */
export function JsonLd({ data }: Props) {
  if (!data?.trim()) return null

  let json: unknown
  try {
    json = JSON.parse(data)
  } catch {
    console.error('Invalid JSON-LD in CMS; skipping structured data script.')
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
