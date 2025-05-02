import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

// Regular client for fetching content
export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

// Management client for creating/updating content
export const contentfulManagementClient = createManagementClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN as string,
});

// Blog post types 
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: any; // Rich text content
  featuredImage: {
    url: string;
    title: string;
    description: string;
  };
  category: string;
  tags: string[];
}

// Format Contentful response into our BlogPost type
export function formatBlogPostResponse(item: any): BlogPost {
  const fields = item.fields;
  
  return {
    id: item.sys.id,
    title: fields.title || '',
    slug: fields.slug || '',
    date: fields.publishDate || item.sys.createdAt,
    author: fields.author?.fields?.name || 'EAMOT Team',
    excerpt: fields.excerpt || '',
    content: fields.content || null,
    featuredImage: fields.featuredImage?.fields 
      ? {
          url: `https:${fields.featuredImage.fields.file.url}`,
          title: fields.featuredImage.fields.title || '',
          description: fields.featuredImage.fields.description || '',
        }
      : {
          url: 'https://www.eamot.com/assets/img/logo/logo-eamot.png',
          title: 'EAMOT Default Image',
          description: 'Default image for blog posts',
        },
    category: fields.category || 'General',
    tags: fields.tags || [],
  };
}

// Fetch all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
    });
    
    return response.items.map(formatBlogPostResponse);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (response.items.length === 0) {
      return null;
    }
    
    return formatBlogPostResponse(response.items[0]);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.category': category,
      order: '-sys.createdAt',
    });
    
    return response.items.map(formatBlogPostResponse);
  } catch (error) {
    console.error(`Error fetching blog posts for category ${category}:`, error);
    return [];
  }
}

// Fetch featured blog posts
export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      order: '-sys.createdAt',
      limit,
    });
    
    return response.items.map(formatBlogPostResponse);
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      select: 'fields.category',
    });
    
    const categories = response.items
      .map(item => item.fields.category as string)
      .filter(Boolean);
    
    // Remove duplicates
    return [...new Set(categories)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Get all tags
export async function getAllTags(): Promise<string[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      select: 'fields.tags',
    });
    
    const tags = response.items
      .flatMap(item => (item.fields.tags as string[]) || [])
      .filter(Boolean);
    
    // Remove duplicates
    return [...new Set(tags)];
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}