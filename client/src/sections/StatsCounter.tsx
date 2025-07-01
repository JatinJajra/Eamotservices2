import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const stats = [
  { id: 1, value: 150, label: "Happy Clients", suffix: "+" },
  { id: 2, value: 200, label: "Projects Completed", suffix: "+" },
  { id: 3, value: 25, label: "Years Experience", suffix: "+" },
  { id: 4, value: 1400, label: "AMC Clients Served", suffix: "+" }
];

export default function StatsCounter() {
  const { ref, inView } = useIntersectionObserver({ 
    threshold: 0.5, 
    triggerOnce: true 
  });

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" ref={ref}>
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              inView={inView}
              delay={index * 0.1}
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
  inView: boolean;
  delay: number;
}

function StatItem({ value, label, suffix, inView, delay }: StatItemProps) {
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
    >
      <div className="text-4xl md:text-5xl font-bold font-montserrat mb-2">
        <span className="counter-value">{count}</span><span>{suffix}</span>
      </div>
      <p className="text-primary-200">{label}</p>
    </motion.div>
  );
}
