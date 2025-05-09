import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import energyDashboardImage from "../assets/energy-dashboard.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Energy Management needs with <span className="text-accent">Insights</span>, <span className="text-accent">Data</span> & <span className="text-accent">Service</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              We specialize in providing cutting-edge technology solutions that help businesses and organizations monitor and manage their energy usage more efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#services">Our Services</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Energy Dashboard Image with Animated Elements */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl bg-[#091528] p-2">
              {/* Main Dashboard Image */}
              <motion.img 
                src={energyDashboardImage} 
                alt="Energy Management Dashboard" 
                className="w-full z-10 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full w-2/3 h-2/3 mx-auto my-auto"
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.8, 1, 0.8] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </div>
            
            {/* Animated Icons - we'll place these around the dashboard */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-primary/90 text-cyan-300 p-3 rounded-full shadow-lg shadow-cyan-500/30"
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)",
                  "0 0 16px 4px rgba(45, 212, 191, 0.4)",
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <i className="fas fa-bolt text-xl"></i>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 -right-6 bg-primary/90 text-cyan-300 p-3 rounded-full shadow-lg shadow-cyan-500/30"
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)",
                  "0 0 16px 4px rgba(45, 212, 191, 0.4)",
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)"
                ]
              }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <i className="fas fa-cog text-xl"></i>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 left-1/4 bg-primary/90 text-cyan-300 p-3 rounded-full shadow-lg shadow-cyan-500/30"
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)",
                  "0 0 16px 4px rgba(45, 212, 191, 0.4)",
                  "0 0 8px 2px rgba(45, 212, 191, 0.3)"
                ]
              }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-network-wired text-xl"></i>
              </motion.div>
            </motion.div>
            
            {/* Connection Lines - Pulsing effects */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle 
                cx="10%" 
                cy="10%" 
                r="4" 
                fill="#2dd4bf"
                animate={{ opacity: [0, 1, 0], r: [2, 4, 2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.circle 
                cx="90%" 
                cy="25%" 
                r="4" 
                fill="#2dd4bf"
                animate={{ opacity: [0, 1, 0], r: [2, 4, 2] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
              />
              <motion.circle 
                cx="25%" 
                cy="90%" 
                r="4" 
                fill="#2dd4bf"
                animate={{ opacity: [0, 1, 0], r: [2, 4, 2] }}
                transition={{ duration: 3, delay: 2, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
      </div>
    </section>
  );
}
