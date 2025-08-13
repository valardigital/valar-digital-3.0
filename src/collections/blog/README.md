# Blog Collection

This folder contains the enhanced blog collection for the Payload CMS setup with proper tabs structure, organized SEO management, and utility-based slug field that auto-fills from title and shows in sidebar.

## Blog Collection

Main blog post collection with the following fields:

### Core Fields
- **title**: Blog post title (required) - slug updates automatically as you type
- **slug**: URL-friendly version of title (auto-generated and visible in sidebar) - *Using slugField utility*

### Content Tab
All content-related fields are organized in the "Content" tab:
- **featuredImage**: Featured image (relation to Media collection)
- **excerpt**: Brief summary (max 200 characters)
- **content**: Rich text content using Lexical editor

### SEO Tab
All SEO-related fields are organized in the "SEO" tab:
- **title**: Meta title for search results (recommended: 50-60 characters)
- **description**: Meta description for search results (max 160 characters)
- **image**: Meta image for search results and social sharing (recommended: 1200x630px)
- **keywords**: Array of relevant keywords for search engines
- **canonicalUrl**: Preferred URL for this page

### Sidebar Fields
- **slug**: Auto-generated URL-friendly slug (updates live as you type title)
- **author**: Author (relation to Users collection) - **READ ONLY, auto-filled with current user**
- **publishedAt**: Publication date with date and time picker
- **status**: Draft, Published, or Archived

### Slug Field (Utility-based)
- **Auto-generation**: Automatically creates URL-friendly slugs from titles
- **Live updates**: Updates in real-time as you type in the title field
- **Sidebar visibility**: Located in the sidebar for easy access
- **Validation**: Ensures unique slugs across all blog posts

## Features

- **Utility-based slug field**: Uses `slugField()` utility for consistent slug handling
- **Live slug updates**: Slug field updates automatically as you type in title
- **Sidebar slug field**: Slug is visible in the sidebar for easy reference
- **Auto-author assignment**: Author is automatically set to the currently logged-in user
- **Tabbed interface**: Clean separation between content and SEO fields
- **Better visualization**: Organized field grouping for improved workflow
- **Media integration**: Featured images and meta images
- **Status management**: Draft, published, and archived states
- **Rich text editing**: Lexical editor for content creation

## Admin Interface Structure

### Main Fields
- **Title**: Blog post title at the top (triggers live slug updates)

### Content Tab
- **Featured Image**: Image upload field
- **Excerpt**: Brief summary field
- **Content**: Rich text editor

### SEO Tab
- **Meta Title**: Search result title
- **Meta Description**: Search result description
- **Meta Image**: Search and social sharing image
- **Keywords**: SEO keywords array
- **Canonical URL**: Preferred page URL

### Sidebar
- **Slug**: Auto-generated URL (updates live from title)
- **Author**: Auto-filled user relationship
- **Published At**: Date and time picker
- **Status**: Publication status selector

### Slug Field (Utility-based)
- **Auto-generation**: Automatically creates URL-friendly slugs from titles
- **Live updates**: Updates in real-time as you type
- **Sidebar location**: Easy access in the sidebar
- **Validation**: Ensures unique slugs across all blog posts

## Usage

The blog collection is automatically registered in the Payload CMS admin panel. You can:
1. Create and manage blog posts with live-updating slugs
2. See slug updates in real-time as you type the title
3. Access the slug field easily in the sidebar
4. Manage content in the dedicated Content tab
5. Configure SEO settings in the dedicated SEO tab
6. Upload and manage featured images and meta images
7. Set publication dates and status
8. Author field is automatically populated (read-only)

## Admin Panel

Access the admin panel at `/admin` to manage:
- Blog posts with tabbed interface and live slug updates
- Content and SEO in separate organized tabs
- Slug field visible in sidebar for easy reference
- Media uploads
- User management (showing names instead of emails)

## Auto-fill Behavior

- **Title to Slug**: Slug updates live as you type in the title field
- **Author**: Automatically set to the currently logged-in user when creating a new blog post
- **Slug**: Automatically generated from the title and visible in sidebar
- **Status**: Defaults to "Draft" for new posts
- **Tabbed organization**: Content and SEO fields in dedicated tabs for better workflow

## Slug Field Utility

The slug field uses a dedicated utility function (`slugField()`) that provides:
- **Consistent behavior**: Same slug logic across all collections
- **Live updates**: Updates automatically as title changes
- **Sidebar visibility**: Easy access in the sidebar
- **Validation**: Ensures uniqueness and proper formatting
- **Real-time feedback**: See slug changes as you type 