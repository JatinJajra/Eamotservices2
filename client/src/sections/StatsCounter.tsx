import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Users, CheckCircle, Clock, Zap, 
  TrendingUp, BarChart, PieChart, BatteryCharging
} from "lucide-react";

const stats = [
  { 
    id: 1, 
    value: 150, 
    label: "Happy Clients", 
    suffix: "+",
    icon: <Users className="w-7 h-7" />,
    color: "from-blue-600 to-blue-400",
    bgGlow: "bg-blue-400/30"
  },
  { 
    id: 2, 
    value: 200, 
    label: "Projects Completed", 
    suffix: "+",
    icon: <CheckCircle className="w-7 h-7" />,
    color: "from-green-600 to-green-400",
    bgGlow: "bg-green-400/30"
  },
  { 
    id: 3, 
    value: 15, 
    label: "Years Experience", 
    suffix: "+",
    icon: <Clock className="w-7 h-7" />,
    color: "from-purple-600 to-purple-400",
    bgGlow: "bg-purple-400/30"
  },
  { 
    id: 4, 
    value: 25, 
    label: "Energy Savings", 
    suffix: "%",
    icon: <Zap className="w-7 h-7" />,
    color: "from-amber-600 to-amber-400",
    bgGlow: "bg-amber-400/30"
  }
];

export default function StatsCounter() {
  const { ref, inView } = useIntersectionObserver({ 
    threshold: 0.3, 
    triggerOnce: true 
  });
  
  const containerRef = useIntersectionObserver({ threshold: 0.1 }).ref;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800 z-0"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 via-primary-800/60 to-primary-900/60"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}} />
        
        {/* Floating graph icons */}
        <motion.div
          className="absolute z-0"
          style={{ 
            top: '15%', 
            left: '5%',
            opacity: 0.15
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TrendingUp className="h-32 w-32 text-white" />
        </motion.div>
        
        <motion.div
          className="absolute z-0"
          style={{ 
            bottom: '10%', 
            right: '5%',
            opacity: 0.15
          }}
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BarChart className="h-40 w-40 text-white" />
        </motion.div>
        
        <motion.div
          className="absolute z-0"
          style={{ 
            top: '20%', 
            right: '15%',
            opacity: 0.1
          }}
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <PieChart className="h-24 w-24 text-white" />
        </motion.div>
      </div>
      
      {/* Energy Data Flow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stats.map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            style={{
              top: `${20 + (index * 15)}%`,
              left: 0,
              right: 0,
              width: '100%'
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { 
              opacity: [0, 0.7, 0],
              x: [-100, window.innerWidth + 100],
            } : {}}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Impact <span className="text-accent">By the Numbers</span>
          </motion.h2>
          <motion.p 
            className="text-primary-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With innovative energy solutions and dedicated service, we've helped businesses optimize energy usage, reduce costs, and promote sustainability.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
              inView={inView}
              delay={index * 0.15}
              color={stat.color}
              bgGlow={stat.bgGlow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  value: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
  inView: boolean;
  delay: number;
  color: string;
  bgGlow: string;
}

function StatItem({ value, label, suffix, icon, inView, delay, color, bgGlow }: StatItemProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const increment = value / totalFrames;
      
      let currentFrame = 0;
      const counter = setInterval(() => {
        currentFrame++;
        const newCount = Math.min(Math.round(currentFrame * increment), value);
        setCount(newCount);
        
        if (currentFrame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Card with glass effect */}
      <motion.div 
        className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 overflow-hidden border border-white/10"
        whileHover={{ 
          y: -5, 
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          borderColor: "rgba(255,255,255,0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow */}
        <motion.div
          className={`absolute -bottom-10 -left-10 w-40 h-40 ${bgGlow} blur-3xl rounded-full opacity-30 z-0`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Icon with gradient border */}
        <div className="mb-4 relative z-10">
          <motion.div 
            className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${color}`}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1, rotateY: [0, 10, 0, -10, 0] } : {}}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.2,
              rotateY: {
                duration: 2,
                delay: delay + 0.7,
                repeat: Infinity,
                repeatDelay: 1
              }
            }}
          >
            {icon}
          </motion.div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 text-center">
          <motion.div 
            className="text-4xl md:text-5xl font-bold font-montserrat mb-2 text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.3 }}
          >
            <motion.span 
              className="inline-block"
              animate={
                inView ? { 
                  scale: [1, 1.2, 1],
                  color: ["#ffffff", "#fcfcfc", "#ffffff"] 
                } : {}
              }
              transition={{ 
                duration: 0.3, 
                delay: delay + 1,
                repeat: 1,
                repeatDelay: 0.2
              }}
            >
              {count}
            </motion.span>
            <motion.span 
              className="inline-block text-accent"
              animate={
                inView ? { 
                  y: [0, -5, 0],
                  opacity: [1, 0.8, 1]
                } : {}
              }
              transition={{ 
                duration: 0.5, 
                delay: delay + 1.2,
                repeat: 1
              }}
            >
              {suffix}
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-primary-200"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
          >
            {label}
          </motion.p>
        </div>
        
        {/* Accent line at bottom */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
}
