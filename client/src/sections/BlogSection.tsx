import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const blogPosts = [
  {
    id: 1,
    image: "https://www.eamot.com/assets/img/services/1.jpg",
    date: { day: "17", month: "June" },
    category: "Diesel Generator",
    author: "Admin",
    title: "Maximizing Efficiency: The Future of Diesel Generators in Power Production",
    excerpt: "Exploring advancements and efficiency optimization in modern diesel generators. …"
  },
  {
    id: 2,
    image: "https://www.eamot.com/assets/img/services/4.jpg",
    date: { day: "19", month: "July" },
    category: "Sustainable",
    author: "Admin",
    title: "Understanding the Benefits of Regular Maintenance for Diesel Generators",
    excerpt: "Unpacking the crucial role of routine maintenance for generators…"
  },
  {
    id: 3,
    image: "https://www.eamot.com/assets/img/services/5.jpg",
    date: { day: "23", month: "July" },
    category: "RECD",
    author: "Admin",
    title: "How Dual Fuel Kits are Revolutionizing Diesel Generators",
    excerpt: "Highlighting the transformation of diesel generators with dual fuel technology. …"
  }
];

export default function BlogSection() {
  const { ref: titleRef, inView: titleInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { ref: blogRef, inView: blogInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Blogs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800">
              Our <span className="text-primary">Blog</span> & Insights
            </h2>
          </div>
          
          <Button asChild className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white">
            <a href="#">More News</a>
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={blogRef}>
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id}
              post={post}
              index={index}
              inView={blogInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: {
    id: number;
    image: string;
    date: { day: string; month: string };
    category: string;
    author: string;
    title: string;
    excerpt: string;
  };
  index: number;
  inView: boolean;
}

function BlogCard({ post, index, inView }: BlogCardProps) {
  return (
    <motion.div 
      className="blog-card rounded-xl overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <motion.img 
          src={post.image} 
          alt="Blog Post" 
          className="w-full h-60 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-center rounded-lg overflow-hidden">
          <div className="px-3 py-1 font-semibold">{post.date.day}</div>
          <div className="px-3 py-1 bg-primary-700 text-xs">{post.date.month}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <a href="#" className="hover:text-primary transition duration-300">{post.category}</a>
          <span className="mx-2">/</span>
          <span>By <a href="#" className="font-medium hover:text-primary transition duration-300">{post.author}</a></span>
        </div>
        
        <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
          <a href="#" className="hover:text-primary transition duration-300">{post.title}</a>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <a href="#" className="text-primary hover:text-primary-600 font-medium flex items-center transition duration-300">
          <span>Read More</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
}
