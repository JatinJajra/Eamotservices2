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
            className="relative p-8 rounded-xl bg-gradient-to-br from-primary-700/50 to-transparent backdrop-blur-sm border border-white/10"
          >
            {/* Background glow for text area */}
            <motion.div 
              className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full -z-10"
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Energy Management with <motion.span 
                className="text-accent inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(246, 190, 18, 0.3)", 
                    "0 0 15px rgba(246, 190, 18, 0.5)", 
                    "0 0 5px rgba(246, 190, 18, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Insights
              </motion.span>, <motion.span 
                className="text-accent inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(246, 190, 18, 0.3)", 
                    "0 0 15px rgba(246, 190, 18, 0.5)", 
                    "0 0 5px rgba(246, 190, 18, 0.3)"
                  ]
                }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              >
                Data
              </motion.span> & <motion.span 
                className="text-accent inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(246, 190, 18, 0.3)", 
                    "0 0 15px rgba(246, 190, 18, 0.5)", 
                    "0 0 5px rgba(246, 190, 18, 0.3)"
                  ]
                }}
                transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
              >
                Service
              </motion.span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              We specialize in providing cutting-edge IoT technology solutions that help businesses optimize energy usage, reduce costs, and implement sustainable practices with real-time monitoring and predictive maintenance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto shadow-lg shadow-accent/20">
                  <a href="#services">Our Services</a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Energy Dashboard Animation Container */}
            <div className="relative w-full lg:w-120 xl:w-140 mx-auto mt-6 mb-12">
              {/* Background glow effects */}
              <motion.div 
                className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"
                style={{ width: '80%', height: '80%', top: '10%', left: '10%' }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.95, 1.05, 0.95] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              {/* Circuit board pattern background */}
              <div className="absolute inset-0 opacity-20 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M10,10 L50,10 L50,50 L90,50 M50,50 L50,90 M10,50 L30,50 M70,10 L70,30" 
                      stroke="cyan" strokeWidth="1" fill="none" />
                    <circle cx="10" cy="10" r="2" fill="cyan" />
                    <circle cx="50" cy="10" r="2" fill="cyan" />
                    <circle cx="90" cy="50" r="2" fill="cyan" />
                    <circle cx="50" cy="50" r="2" fill="cyan" />
                    <circle cx="50" cy="90" r="2" fill="cyan" />
                    <circle cx="10" cy="50" r="2" fill="cyan" />
                    <circle cx="70" cy="10" r="2" fill="cyan" />
                    <circle cx="70" cy="30" r="2" fill="cyan" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                </svg>
              </div>
              
              {/* Main Dashboard Image with animations */}
              <div className="relative z-10 rounded-xl shadow-[0_0_40px_rgba(0,200,255,0.3)] bg-[#091528]/95 p-4 overflow-visible">
                {/* Main dashboard image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20"
                >
                  <img 
                    src={energyDashboardImage} 
                    alt="Energy Management Dashboard" 
                    className="w-full rounded-lg"
                  />
                  
                  {/* Animated elements overlaid on the image */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {/* Pulse animations over the icons in the image */}
                    <motion.div 
                      className="absolute rounded-full bg-cyan-400/30"
                      style={{ width: '12%', height: '12%', left: '15%', top: '26%' }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute rounded-full bg-cyan-400/30"
                      style={{ width: '12%', height: '12%', left: '85%', top: '25%' }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute rounded-full bg-cyan-400/30"
                      style={{ width: '12%', height: '12%', left: '40%', top: '77%' }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, delay: 1, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute rounded-full bg-cyan-400/30"
                      style={{ width: '12%', height: '12%', left: '85%', top: '75%' }}
                      animate={{ 
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                    />

                    {/* Lightning bolt in the center that pulses and flickers */}
                    <motion.div 
                      className="absolute"
                      style={{ width: '10%', height: '10%', left: '46%', top: '40%' }}
                      animate={{ 
                        opacity: [0.7, 1, 0.7, 1, 0.7],
                        scale: [1, 1.1, 1, 1.1, 1],
                        filter: ['drop-shadow(0 0 5px #0ff)', 'drop-shadow(0 0 10px #0ff)', 'drop-shadow(0 0 5px #0ff)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" fill="#0ff" />
                      </svg>
                    </motion.div>

                    {/* Animated line paths connecting the circles */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M120,160 C200,200 300,180 380,160" 
                        stroke="rgba(0,255,255,0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.path 
                        d="M500,150 C440,210 400,260 380,350" 
                        stroke="rgba(0,255,255,0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                      />
                      <motion.path 
                        d="M280,300 C330,350 430,360 500,400" 
                        stroke="rgba(0,255,255,0.6)" 
                        strokeWidth="2" 
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity }}
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Floating button components */}
              <motion.div 
                className="absolute -top-8 -left-8 bg-primary/90 text-cyan-300 p-4 rounded-full shadow-[0_0_15px_rgba(0,200,255,0.5)] z-30"
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 0 15px rgba(0,200,255,0.3)",
                    "0 0 25px rgba(0,200,255,0.6)",
                    "0 0 15px rgba(0,200,255,0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <i className="fas fa-bolt text-2xl"></i>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 -right-8 bg-primary/90 text-cyan-300 p-4 rounded-full shadow-[0_0_15px_rgba(0,200,255,0.5)] z-30"
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 0 15px rgba(0,200,255,0.3)",
                    "0 0 25px rgba(0,200,255,0.6)",
                    "0 0 15px rgba(0,200,255,0.3)"
                  ]
                }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <i className="fas fa-cog text-2xl"></i>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 left-1/3 bg-primary/90 text-cyan-300 p-4 rounded-full shadow-[0_0_15px_rgba(0,200,255,0.5)] z-30"
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 0 15px rgba(0,200,255,0.3)",
                    "0 0 25px rgba(0,200,255,0.6)",
                    "0 0 15px rgba(0,200,255,0.3)"
                  ]
                }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="fas fa-network-wired text-2xl"></i>
                </motion.div>
              </motion.div>
            </div>
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
