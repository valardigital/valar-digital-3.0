import { getClientSideURL } from './getURL'

export const getMediaUrl = (url: string | null | undefined): string => {
  if (!url || typeof url !== 'string') return ''

  // If absolute URL, normalize to relative when same-origin to satisfy next/image without extra whitelisting
  try {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      const parsed = new URL(url)
      let currentBase = ''
      try {
        currentBase = getClientSideURL()
      } catch {}
      // Also compare with configured site hostname for SSR scenarios
      const envSiteHostname = process.env.NEXT_PUBLIC_SITE_HOSTNAME
      if (envSiteHostname && parsed.hostname === envSiteHostname) {
        return `${parsed.pathname}${parsed.search}`
      }
      if (currentBase) {
        const current = new URL(currentBase)
        if (current.hostname === parsed.hostname) {
          // Same origin → return relative path for Next/Image
          return `${parsed.pathname}${parsed.search}`
        }
      }
      // Different origin → return as-is
      return url
    }
  } catch {
    // Fallback to returning original on URL parse error
    return url
  }

  // Already relative path
  return url
}

