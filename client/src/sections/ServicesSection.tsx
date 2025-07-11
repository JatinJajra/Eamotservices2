import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ArrowRight, Zap, CircuitBoard, Wrench, Battery, Gauge, Fuel } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    image: "assets/img/services/1.jpg",
    title: "Diesel Generator",
    description: "Routine inspection, oil change, filter replacement, performance test for reliability.",
    link: "/services/diesel-generator",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-blue-500 to-blue-700",
    bgGlow: "bg-blue-400"
  },
  {
    id: 2,
    image: "assets/img/services/2.jpg",
    title: "Stabilizer",
    description: "Testing, calibrating, and maintaining stabilizer components for reliable voltage regulation.",
    link: "/services/stabilizer",
    icon: <Gauge className="w-6 h-6" />,
    color: "from-green-500 to-green-700",
    bgGlow: "bg-green-400"
  },
  {
    id: 3,
    image: "assets/img/services/3.jpg",
    title: "UPS",
    description: "Inspecting, testing, and replacing batteries, ensuring efficiency and reliability.",
    link: "/services/ups",
    icon: <Battery className="w-6 h-6" />,
    color: "from-purple-500 to-purple-700",
    bgGlow: "bg-purple-400"
  },
  {
    id: 4,
    image: "assets/img/services/4.jpg",
    title: "Lithium ION Inverter",
    description: "Monitoring health, ensuring proper charging, and replacing when necessary.",
    link: "/services/lithium-ion-inverter",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-amber-700",
    bgGlow: "bg-amber-400"
  },
  {
    id: 5,
    image: "assets/img/services/5.jpg",
    title: "Retro Fit Diesel Generator",
    description: "Inspecting, cleaning, and recalibrating for optimal emission reduction performance.",
    link: "#",
    icon: <CircuitBoard className="w-6 h-6" />,
    color: "from-red-500 to-red-700",
    bgGlow: "bg-red-400"
  },
  {
    id: 6,
    image: "assets/img/services/solutions.jpg",
    title: "Dual Fuel Kit",
    description: "Enabling diesel generators to efficiently operate on dual fuel sources.",
    link: "/services/dual-fuel-kit",
    icon: <Fuel className="w-6 h-6" />,
    color: "from-teal-500 to-teal-700",
    bgGlow: "bg-teal-400"
  }
];

export default function ServicesSection() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50 z-0"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern z-0"></div>
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}} />
      
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
            <span className="font-semibold">What We Do Best</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
            Our Core <span className="text-primary">Services</span>
          </h2>
          
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialize in providing cutting-edge technology solutions that help businesses and organizations monitor and manage their energy usage more efficiently and effectively.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceProps {
  service: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    color: string;
    bgGlow: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceProps) {
  const { ref, inView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <motion.div 
      className="service-card bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
    >
      {/* Card top with image and gradient overlay */}
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70`}></div>
        
        {/* Floating icon */}
        <motion.div
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          whileHover={{ 
            y: -3, 
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
            rotate: 10 
          }}
        >
          {service.icon}
        </motion.div>
      </div>
      
      {/* Card body with glow effect */}
      <div className="p-6 relative overflow-hidden">
        {/* Background glow */}
        <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${service.bgGlow} rounded-full blur-xl opacity-20`}></div>
        
        {/* Title with animated underline */}
        <div className="relative mb-3">
          <h3 className="text-xl font-bold font-montserrat text-gray-800 inline-block">
            <a href={service.link} className="hover:text-primary transition duration-300">{service.title}</a>
          </h3>
          <motion.div 
            className={`h-[2px] bg-gradient-to-r ${service.color}`}
            initial={{ width: 0 }}
            animate={inView ? { width: "40%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
          />
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 relative z-10">
          {service.description}
        </p>
        
        {/* Call to action button */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={service.link} className="text-primary hover:text-primary-600 font-medium flex items-center transition duration-300 group">
            <span>Explore Service</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
