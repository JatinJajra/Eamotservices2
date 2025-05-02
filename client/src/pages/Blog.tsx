import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { 
  BlogPost, 
  getAllBlogPosts, 
  getFeaturedBlogPosts, 
  getAllCategories 
} from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CircuitEnergyLoader } from "@/components/ui/energy-loader";
import { Search, Clock, User, Tag, Bookmark, Calendar, Filter } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [, setLocation] = useLocation();
  
  // Fetch blog posts
  const { 
    data: blogPosts = [], 
    isLoading: isLoadingPosts,
    error: postsError
  } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: getAllBlogPosts
  });

  // Fetch featured blog posts
  const { 
    data: featuredPosts = [], 
    isLoading: isLoadingFeatured
  } = useQuery({
    queryKey: ['/api/blog/featured'],
    queryFn: () => getFeaturedBlogPosts(3)
  });
  
  // Fetch categories
  const { 
    data: categories = [], 
    isLoading: isLoadingCategories
  } = useQuery({
    queryKey: ['/api/blog/categories'],
    queryFn: getAllCategories
  });

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // When a user selects a category, update the filter
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Toggle off if already selected
    } else {
      setSelectedCategory(category);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Navigate to individual blog post
  const navigateToBlogPost = (slug: string) => {
    setLocation(`/blog/${slug}`);
  };

  if (postsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog Posts</h2>
          <p className="text-gray-600 mb-6">We're having trouble connecting to our content management system.</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
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
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-primary-800/50"></div>
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-montserrat leading-tight">
              EAMOT Blog
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Insights and Updates on Energy Management, IoT Solutions, and Power System Maintenance
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-12 py-6 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Featured Posts */}
      {isLoadingFeatured ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <CircuitEnergyLoader color="primary" size="lg" text="Loading featured content..." />
            </div>
          </div>
        </section>
      ) : featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Articles</h2>
              <p className="text-gray-600">Our most popular and informative content</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigateToBlogPost(post.slug)}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.featuredImage.url} 
                      alt={post.featuredImage.title || post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-white">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-gray-700">{post.author}</span>
                    </div>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Main Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Bookmark className="h-5 w-5 mr-2 text-primary" />
                    Categories
                  </h3>
                  
                  {isLoadingCategories ? (
                    <div className="flex justify-center py-4">
                      <CircuitEnergyLoader color="primary" size="sm" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div 
                          key={category} 
                          onClick={() => handleCategoryClick(category)}
                          className={`py-2 px-3 rounded-md cursor-pointer flex items-center justify-between transition-colors ${
                            selectedCategory === category 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <span>{category}</span>
                          <Badge variant="outline" className={selectedCategory === category ? 'bg-white/20 border-white/10' : ''}>
                            {blogPosts.filter(post => post.category === category).length}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Recent Posts
                  </h3>
                  
                  {isLoadingPosts ? (
                    <div className="flex justify-center py-4">
                      <CircuitEnergyLoader color="primary" size="sm" />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogPosts.slice(0, 5).map(post => (
                        <div 
                          key={post.id} 
                          className="flex items-start space-x-3 cursor-pointer group"
                          onClick={() => navigateToBlogPost(post.slug)}
                        >
                          <div className="w-16 h-16 flex-shrink-0">
                            <img 
                              src={post.featuredImage.url} 
                              alt={post.title} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="text-xs text-gray-500 mt-1 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Tags Cloud */}
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-primary" />
                    Popular Tags
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {/* Get unique tags from all posts and show the most common ones */}
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags)))
                      .slice(0, 12)
                      .map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Filter Controls */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">All Articles</h2>
                  <p className="text-gray-600">Discover our latest insights and updates</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="mr-3 text-gray-700">Filter:</span>
                  <div className="flex space-x-2">
                    <Button 
                      variant={selectedCategory === null ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </Button>
                    {categories.slice(0, 3).map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              {isLoadingPosts ? (
                <div className="flex justify-center py-16">
                  <CircuitEnergyLoader color="primary" size="lg" text="Loading blog posts..." />
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchTerm 
                        ? `No articles matching "${searchTerm}" were found.` 
                        : "No articles in this category yet."}
                    </p>
                    <Button onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                    }}>
                      Clear Filters
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <Card 
                      key={post.id} 
                      className={`overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group ${
                        index === 0 ? 'md:col-span-2' : ''
                      }`}
                      onClick={() => navigateToBlogPost(post.slug)}
                    >
                      <div className={`grid ${
                        index === 0 
                          ? 'md:grid-cols-2' 
                          : 'grid-cols-1'
                      }`}>
                        <div className={`relative ${index === 0 ? 'h-full' : 'h-48'} overflow-hidden`}>
                          <img 
                            src={post.featuredImage.url} 
                            alt={post.featuredImage.title || post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent text-white">{post.category}</Badge>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className={`${
                            index === 0 ? 'text-2xl' : 'text-xl'
                          } font-semibold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-2`}>
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <Button variant="link" className="text-primary p-0 h-auto mt-3">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
              
              {filteredPosts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <Button size="lg">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Updated with EAMOT</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest updates, articles, and insights on energy management and IoT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-grow" />
              <Button className="bg-primary hover:bg-primary-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}