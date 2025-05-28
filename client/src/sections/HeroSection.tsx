import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import energyDashboardImage from "../assets/energy-dashboard.png";
import { Brain, Zap, BarChart, Cpu, LineChart, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HeroSection() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section 
      ref={heroRef}
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden min-h-[90vh]"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95 z-10"></div>
        <img
          src="https://www.eamot.com/assets/img/home/2.jpg"
          alt="Energy Management"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
      
      {/* Data visualization elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Stylized energy data visualization */}
          <motion.path
            d="M0,80 C10,70 15,90 20,75 C25,60 30,65 35,55 C40,45 45,55 50,40 C55,25 60,30 65,20 C70,10 75,25 80,15 C85,5 90,15 95,10 L100,10 L100,100 L0,100 Z"
            fill="url(#gradient-primary)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={heroInView ? { opacity: 0.7, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating data points */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg bg-gradient-to-br from-primary/20 to-primary-700/10 backdrop-blur-sm border border-primary/20 shadow-lg"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + i * 12}%`,
              width: `${80 + i * 10}px`,
              height: `${60 + i * 5}px`,
              transform: `rotate(${-5 + i * 2}deg)`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
          >
            <div className="p-3">
              <div className="h-2 w-12 bg-primary/30 rounded-full mb-2"></div>
              <div className="h-6 w-full rounded bg-primary/10 flex items-center justify-center">
                {i % 3 === 0 ? 
                  <Zap className="h-3 w-3 text-primary" /> : 
                  i % 3 === 1 ?
                  <BarChart className="h-3 w-3 text-primary" /> :
                  <Cpu className="h-3 w-3 text-primary" />
                }
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Grid background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* 3D Energy Models */}
      <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
        {/* 3D Floating elements */}
        <motion.div
          className="absolute h-24 w-24 md:h-32 md:w-32 top-[25%] right-[10%]"
          initial={{ opacity: 0 }}
          animate={heroInView ? { 
            opacity: 1,
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          } : { opacity: 0 }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path 
              d="M40,95 L100,20 L160,95 L100,170 Z" 
              fill="url(#blueGradient)" 
              stroke="#0ea5e9" 
              strokeWidth="2"
              fillOpacity="0.3"
              strokeOpacity="0.8"
            />
            <path 
              d="M100,20 L100,170" 
              stroke="#0ea5e9" 
              strokeWidth="2"
              strokeOpacity="0.6"
              strokeDasharray="5,5"
            />
            <path 
              d="M40,95 L160,95" 
              stroke="#0ea5e9" 
              strokeWidth="2"
              strokeOpacity="0.6"
              strokeDasharray="5,5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute h-28 w-28 md:h-40 md:w-40 bottom-[15%] right-[25%]"
          initial={{ opacity: 0 }}
          animate={heroInView ? { 
            opacity: 1,
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          } : { opacity: 0 }}
          transition={{ 
            duration: 7, 
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle 
              cx="100" 
              cy="100" 
              r="70" 
              fill="url(#purpleGradient)" 
              fillOpacity="0.2" 
              stroke="#c084fc" 
              strokeWidth="2"
              strokeOpacity="0.6"
            />
            <circle 
              cx="100" 
              cy="100" 
              r="50" 
              fill="none" 
              stroke="#c084fc" 
              strokeWidth="2"
              strokeOpacity="0.4"
              strokeDasharray="5,5"
            />
            <circle 
              cx="100" 
              cy="100" 
              r="30" 
              fill="none" 
              stroke="#c084fc" 
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeDasharray="2,2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute h-32 w-32 md:h-48 md:w-48 top-[40%] right-[30%]"
          initial={{ opacity: 0 }}
          animate={heroInView ? { 
            opacity: 1,
            y: [0, 10, 0],
            rotate: [0, 3, 0]
          } : { opacity: 0 }}
          transition={{ 
            duration: 8, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <rect 
              x="50" 
              y="50" 
              width="100" 
              height="100" 
              rx="10"
              fill="url(#cyanGradient)" 
              fillOpacity="0.2" 
              stroke="#22d3ee" 
              strokeWidth="2"
              strokeOpacity="0.6"
            />
            <rect 
              x="70" 
              y="70" 
              width="60" 
              height="60" 
              rx="5"
              fill="none" 
              stroke="#22d3ee" 
              strokeWidth="2"
              strokeOpacity="0.4"
              strokeDasharray="5,5"
            />
            <path 
              d="M50,100 L150,100 M100,50 L100,150" 
              stroke="#22d3ee" 
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeDasharray="2,2"
            />
          </svg>
        </motion.div>

        {/* Energy Flow lines */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${20 + (i * 25)}%`,
              left: 0,
              right: 0,
              width: '100%'
            }}
            animate={{ 
              x: [-100, window.innerWidth + 100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 0.7,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}

        {/* Pulsing dots */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              height: `${4 + i * 2}px`,
              width: `${4 + i * 2}px`,
              top: `${10 + Math.random() * 80}%`,
              right: `${10 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 flex min-h-[90vh] items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-600/20 text-blue-400"
          >
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Energy Intelligence</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Next-Gen <span className="text-blue-500">Energy</span> Management
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 mb-8 leading-relaxed"
          >
            Delivering IoT-powered solutions to optimize energy consumption, reduce operational costs, 
            and enable sustainable business practices through real-time monitoring and predictive maintenance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#services">Explore Our Services</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-4"
          >
            {[
              { value: "40%", label: "Energy Savings" },
              { value: "24/7", label: "Real-time Monitoring" },
              { value: "350+", label: "Client Implementations" }
            ].map((stat, index) => (
              <div key={index} className="text-center px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#e2e8f0" opacity="0.1"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f1f5f9" opacity="0.075"></path>
        </svg>
      </div>
    </section>
  );
}