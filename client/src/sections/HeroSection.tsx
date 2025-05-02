import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            <img src="https://www.eamot.com/assets/img/home/1.jpg" alt="Energy Management System" className="rounded-lg shadow-2xl" />
            
            {/* Floating feature cards */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-white text-primary p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="flex items-center">
                <i className="fas fa-brain text-2xl mr-3"></i>
                <span className="font-semibold">Smart Energy Solutions</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 -right-6 bg-white text-primary p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-2xl mr-3"></i>
                <span className="font-semibold">Trusted AMC</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 left-20 bg-white text-primary p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="flex items-center">
                <i className="fas fa-map-marked-alt text-2xl mr-3"></i>
                <span className="font-semibold">PAN India Partners</span>
              </div>
            </motion.div>
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
