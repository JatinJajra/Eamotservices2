import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <img src="https://www.eamot.com/assets/img/home/2.jpg" alt="EAMOT Team" className="rounded-lg shadow-lg w-full" />
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
            
            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-secondary">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-gray-700">
                  Our team of experts is dedicated to providing innovative and customized solutions that help our clients optimize their energy usage and reduce costs.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-secondary">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
                <p className="text-gray-700">
                  We leverage the latest technologies, including IoT and AI, to provide real-time data and predictive analytics that enable smarter energy management.
                </p>
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
