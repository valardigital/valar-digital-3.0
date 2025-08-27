import type { Access } from 'payload'

export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true // Authenticated users can see everything
  }

  // Non-authenticated users only see published content
  return {
    _status: {
      equals: 'published',
    },
  }
} 