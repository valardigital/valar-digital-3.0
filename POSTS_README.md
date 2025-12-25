# Posts Page Documentation

## Overview
This project now includes a new Posts page that displays blog content from the Payload CMS blog collection. The posts page is designed to show real blog data when available, and includes a demo mode for testing purposes.

## Features

### 1. Posts Listing Page (`/posts`)
- **URL**: `/posts`
- **Purpose**: Displays all blog posts from the Payload CMS blog collection
- **Features**:
  - Responsive grid layout
  - Post status indicators (published, draft, archived)
  - Publication dates
  - Author information
  - Featured images (when available)
  - Excerpt previews
  - Links to individual post pages

### 2. Individual Post Page (`/posts/[slug]`)
- **URL**: `/posts/[slug]` (e.g., `/posts/my-blog-post`)
- **Purpose**: Displays individual blog post content
- **Features**:
  - Full post content display using Payload's RichText component
  - Post metadata (title, excerpt, author, date)
  - Featured image display
  - Navigation back to posts listing
  - Proper rich text rendering with support for blocks and formatting

### 3. Navigation Integration
- Added "Posts" link to both desktop and mobile navigation
- Positioned after "Blogs" in the navigation menu

## How It Works

### Data Fetching
The posts page fetches data from the Payload CMS API endpoint `/api/blog`. This endpoint returns blog posts from your blog collection.

### Fallback Mode
When no posts exist or when there's an API error, the page displays a demo post to show how the layout will look with real content.

### Error Handling
- Graceful fallback to demo content
- Loading states during API calls
- User-friendly error messages

## Setup Requirements

### 1. Payload CMS Configuration
Ensure your blog collection is properly configured in `payload.config.ts`:
```typescript
import { Blog } from './src/collections/blog'

export default buildConfig({
  collections: [Users, Media, Blog],
  // ... other config
})
```

### 2. Blog Collection Fields
The posts page expects the following fields from your blog collection:
- `title` (string)
- `excerpt` (string)
- `content` (rich text)
- `featuredImage` (media upload)
- `author` (relationship to users)
- `publishedAt` (date)
- `status` (select: draft, published, archived)
- `slug` (string)

### 3. API Endpoints
The posts page uses these API endpoints:
- `GET /api/blog` - Fetch all blog posts
- `GET /api/blog?where[slug][equals]=[slug]` - Fetch post by slug

## Usage

### For Developers
1. **Adding New Posts**: Use the Payload CMS admin panel to create new blog posts
2. **Customizing Layout**: Modify the components in `src/app/(frontend)/posts/`
3. **Styling**: Update CSS classes in the components to match your design system

### For Content Creators
1. **Creating Posts**: Access the Payload CMS admin panel
2. **Content Management**: Use the rich text editor for post content
3. **Media Uploads**: Add featured images through the media collection
4. **Publishing**: Set post status to "published" to make it visible

## File Structure
```
src/app/(frontend)/posts/
├── page.tsx              # Main posts listing page
└── [slug]/
    └── page.tsx          # Individual post page

src/app/(frontend)/components/layout/
└── header.tsx            # Navigation with Posts link
```

## Testing

### Demo Mode
When no real posts exist, the page shows a demo post to demonstrate the layout and functionality.

### Creating Test Posts
1. Start your development server
2. Access the Payload CMS admin panel
3. Navigate to the Blog collection
4. Create a new blog post with:
   - Title
   - Excerpt
   - Content
   - Featured image (optional)
   - Status: "published"
5. Save the post
6. Visit `/posts` to see your post

## Customization

### Styling
The posts page uses Tailwind CSS classes. You can customize:
- Colors and spacing
- Grid layouts
- Typography
- Component shadows and hover effects

### Layout
- Modify the grid columns for different screen sizes
- Adjust the featured image dimensions
- Change the post card layout

### Content Display
- Rich text content is automatically rendered using Payload's RichText component
- Supports all Payload CMS rich text features including blocks and formatting
- Modify the excerpt length
- Adjust date formatting
- Customize the content wrapper styling

## Troubleshooting

### Common Issues

1. **No Posts Displaying**
   - Check if the blog collection is properly configured
   - Verify API endpoints are working
   - Ensure posts have "published" status

2. **API Errors**
   - Check browser console for error messages
   - Verify Payload CMS is running
   - Check database connection

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS class conflicts
   - Verify responsive breakpoints

### Debug Mode
The page includes console logging for debugging API calls and data fetching.

## Future Enhancements

Potential improvements for the posts system:
- Pagination for large numbers of posts
- Search and filtering capabilities
- Category and tag organization
- Related posts suggestions
- Social sharing buttons
- Comment system integration
- SEO optimization features 