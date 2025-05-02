import { useEffect } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircuitEnergyLoader } from "@/components/ui/energy-loader";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function BlogPostPage() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug;
  
  // If no slug is provided, redirect to blog page
  useEffect(() => {
    if (!slug) {
      setLocation("/blog");
    }
  }, [slug, setLocation]);
  
  // Fetch the blog post
  const { 
    data: blogPost, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: [`/api/blog/post/${slug}`],
    queryFn: () => getBlogPostBySlug(slug || ""),
    enabled: !!slug
  });
  
  // Fetch all posts for navigation
  const { data: allPosts = [] } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: getAllBlogPosts
  });
  
  // Find the current post index to determine next and previous posts
  const currentIndex = allPosts.findIndex(post => post.slug === slug);
  
  // Get next and previous posts
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  
  // If loading, show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <CircuitEnergyLoader color="primary" size="lg" text="Loading article..." />
      </div>
    );
  }
  
  // If error or no post found, show error
  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[30vh] md:h-[50vh] bg-gradient-to-br from-primary to-primary-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          {blogPost.featuredImage && (
            <img 
              src={blogPost.featuredImage.url} 
              alt={blogPost.featuredImage.title || blogPost.title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg -mt-20 p-6 md:p-10">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-accent text-white">{blogPost.category}</Badge>
                {blogPost.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-8 gap-3 md:gap-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  <span>{blogPost.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {/* For actual implementation, render rich text content from Contentful */}
              <p className="lead">{blogPost.excerpt}</p>
              
              {/* Render content based on the rich text format from Contentful */}
              {/* This is a placeholder, you'll need to use a rich text renderer for actual content */}
              <div dangerouslySetInnerHTML={{ __html: blogPost.content ? 
                "Content from Contentful would be rendered here using a rich text renderer" : 
                '<p>This is a sample blog post. The actual content would be pulled from Contentful CMS.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.</p><h2>Energy Management Benefits</h2><p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p><ul><li>Reduced energy consumption</li><li>Lower operational costs</li><li>Improved system reliability</li><li>Sustainable business practices</li></ul><p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p><h2>IoT Implementation</h2><p>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>' 
              }} />
            </div>
            
            {/* Tags and Share Section */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700 font-medium">Tags:</span>
                  {blogPost.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Share:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                      <Twitter className="h-4 w-4 text-blue-400" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                      <Linkedin className="h-4 w-4 text-blue-700" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                      <Share2 className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Author Section */}
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src="https://www.eamot.com/assets/img/logo/logo-eamot.png" 
                    alt={blogPost.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{blogPost.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Expert in energy management and IoT solutions at EAMOT. Passionate about helping businesses optimize their power systems and reduce energy costs through innovative technology.
                  </p>
                  <div className="flex justify-center md:justify-start space-x-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      All Articles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Post Navigation */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {previousPost && (
                <Button 
                  variant="outline" 
                  className="justify-start group"
                  onClick={() => setLocation(`/blog/${previousPost.slug}`)}
                >
                  <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 mb-1">Previous</div>
                    <div className="line-clamp-1 font-medium">{previousPost.title}</div>
                  </div>
                </Button>
              )}
              
              {nextPost && (
                <Button 
                  variant="outline" 
                  className="justify-end md:ml-auto group"
                  onClick={() => setLocation(`/blog/${nextPost.slug}`)}
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Next</div>
                    <div className="line-clamp-1 font-medium">{nextPost.title}</div>
                  </div>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Comments Section (Placeholder) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Comments (0)</h2>
            
            <div className="bg-white rounded-lg border p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea 
                  rows={6} 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              
              <Button className="bg-primary hover:bg-primary-700">
                Post Comment
              </Button>
            </div>
            
            <div className="text-center text-gray-500">
              <p>Be the first to comment on this article</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allPosts
                .filter(post => 
                  post.id !== blogPost.id && 
                  (post.category === blogPost.category || 
                   post.tags.some(tag => blogPost.tags.includes(tag)))
                )
                .slice(0, 3)
                .map(post => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setLocation(`/blog/${post.slug}`)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage.url} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <Badge className="mb-3 bg-accent text-white">{post.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link href="/blog">
                  View All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}