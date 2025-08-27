import { getClientSideURL } from './getURL'

export const getMediaUrl = (url: string | null | undefined): string => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = getClientSideURL()
  return `${base}${url}`
}

