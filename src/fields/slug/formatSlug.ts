import type { FieldHook } from 'payload'

export const formatSlug = (val: string): string => {
  if (!val || typeof val !== 'string') return ''
  
  return val
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    // If we have a slug value, format it
    if (typeof value === 'string' && value.trim()) {
      return formatSlug(value)
    }

    // For create operations or when slug is empty, generate from fallback field
    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string' && fallbackData.trim()) {
        return formatSlug(fallbackData)
      }
    }

    return value || ''
  }
