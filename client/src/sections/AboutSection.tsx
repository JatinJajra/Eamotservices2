import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Zap, Battery, PieChart, BarChart4, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      
      {/* Animated floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{ 
            top: '10%', 
            left: '5%', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))',
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="h-6 w-6 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ 
            top: '35%', 
            right: '8%', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))',
            width: '70px',
            height: '70px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Battery className="h-7 w-7 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ 
            bottom: '15%', 
            left: '10%', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))',
            width: '65px',
            height: '65px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PieChart className="h-6 w-6 text-primary" />
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ 
            bottom: '30%', 
            right: '20%', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1))',
            width: '55px',
            height: '55px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -6, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BarChart4 className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
              
              {/* Image with interactive hover effect */}
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-20"
                >
                  <img 
                    src="assets/img/home/2.jpg" 
                    alt="EAMOT Team" 
                    className="w-full rounded-lg transform transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
                </motion.div>
                
                {/* Floating data points */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </motion.div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Zap className="h-6 w-6 text-accent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4" variants={itemVariants}>
              <span className="font-semibold">Your Trusted Partner In Advanced Energy Management</span>
            </motion.div>
            
            <motion.h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800" variants={itemVariants}>
              Powered by IoT, Backed by <span className="text-primary">Experience</span>.
            </motion.h2>
            
            <motion.div className="space-y-5 mb-8" variants={itemVariants}>
              <div className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm border-l-4 border-primary">
                <div className="mr-4 bg-primary/10 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold mb-1">Expert Solutions</h4>
                  <p className="text-gray-700">
                    Our team of experts is dedicated to providing innovative and customized solutions that help our clients optimize their energy usage and reduce costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm border-l-4 border-accent">
                <div className="mr-4 bg-accent/10 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold mb-1">Advanced Technology</h4>
                  <p className="text-gray-700">
                    We leverage the latest technologies, including IoT and AI, to provide real-time data and predictive analytics that enable smarter energy management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                <div className="mr-4 bg-blue-500/10 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold mb-1">Sustainable Impact</h4>
                  <p className="text-gray-700">
                    Our solutions not only reduce operational costs but also help businesses lower their carbon footprint and meet sustainability goals through optimized energy consumption.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
