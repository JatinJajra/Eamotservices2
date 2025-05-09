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
      
      {/* Dark energy-themed background for the entire hero section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-950"></div>
        
        {/* Power grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="energyGrid" patternUnits="userSpaceOnUse" width="60" height="60">
              <path d="M10,0 L10,60 M0,10 L60,10 M20,0 L20,60 M0,20 L60,20 M30,0 L30,60 M0,30 L60,30 M40,0 L40,60 M0,40 L60,40 M50,0 L50,60 M0,50 L60,50" 
                stroke="cyan" strokeWidth="0.5" opacity="0.2" />
              <circle cx="10" cy="10" r="1" fill="cyan" opacity="0.5" />
              <circle cx="20" cy="20" r="1" fill="cyan" opacity="0.5" />
              <circle cx="30" cy="30" r="1" fill="cyan" opacity="0.5" />
              <circle cx="40" cy="40" r="1" fill="cyan" opacity="0.5" />
              <circle cx="50" cy="50" r="1" fill="cyan" opacity="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#energyGrid)" />
          </svg>
        </div>
        
        {/* Energy pulses and flows */}
        <motion.div 
          className="absolute left-0 top-1/4 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          animate={{ 
            opacity: [0, 0.7, 0],
            x: [-100, window.innerWidth + 100]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
        <motion.div 
          className="absolute right-0 top-2/3 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          animate={{ 
            opacity: [0, 0.7, 0],
            x: [window.innerWidth + 100, -100]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            delay: 2,
            repeatDelay: 3
          }}
        />
        
        {/* Glow effects */}
        <motion.div 
          className="absolute top-1/3 left-1/4 h-64 w-64 bg-cyan-500/10 blur-3xl rounded-full"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 h-96 w-96 bg-accent/10 blur-3xl rounded-full"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ 
            duration: 10,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative pt-8 md:pt-12 pl-0 lg:pl-6"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat leading-tight mb-6 text-white">
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
            
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-lg leading-relaxed">
              Delivering IoT-powered solutions to optimize energy consumption, reduce operational costs, and enable sustainable business practices through real-time monitoring and predictive maintenance.
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
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Energy Dashboard Animation Container */}
            <div className="relative w-[140%] -mr-[40%] mt-6 mb-12">
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
              
              {/* Smart grid lines that pulse across the dashboard */}
              <div className="absolute inset-0 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                  {/* Horizontal power line */}
                  <motion.line 
                    x1="0" y1="300" x2="800" y2="300" 
                    stroke="rgba(0,200,255,0.3)" 
                    strokeWidth="1"
                    strokeDasharray="10,15"
                    animate={{
                      strokeDashoffset: [0, -50]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Diagonal power line */}
                  <motion.line 
                    x1="0" y1="0" x2="800" y2="600" 
                    stroke="rgba(0,200,255,0.2)" 
                    strokeWidth="1"
                    strokeDasharray="8,20"
                    animate={{
                      strokeDashoffset: [0, -50]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Vertical power line */}
                  <motion.line 
                    x1="400" y1="0" x2="400" y2="600" 
                    stroke="rgba(0,200,255,0.25)" 
                    strokeWidth="1"
                    strokeDasharray="5,15"
                    animate={{
                      strokeDashoffset: [0, -40]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
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
