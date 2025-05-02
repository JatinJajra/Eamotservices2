import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    id: 1,
    image: "https://www.eamot.com/assets/img/services/1.jpg",
    title: "Diesel Generator",
    description: "Routine inspection, oil change, filter replacement, performance test for reliability.",
    link: "#"
  },
  {
    id: 2,
    image: "https://www.eamot.com/assets/img/services/2.jpg",
    title: "Stabilizer",
    description: "Testing, calibrating, and maintaining stabilizer components for reliable voltage regulation.",
    link: "#"
  },
  {
    id: 3,
    image: "https://www.eamot.com/assets/img/services/3.jpg",
    title: "UPS",
    description: "Inspecting, testing, and replacing batteries, ensuring efficiency and reliability.",
    link: "#"
  },
  {
    id: 4,
    image: "https://www.eamot.com/assets/img/services/4.jpg",
    title: "Lithium ION Inverter",
    description: "Monitoring health, ensuring proper charging, and replacing when necessary.",
    link: "#"
  },
  {
    id: 5,
    image: "https://www.eamot.com/assets/img/services/5.jpg",
    title: "Retro Fit Diesel Generator",
    description: "Inspecting, cleaning, and recalibrating for optimal emission reduction performance.",
    link: "#"
  },
  {
    id: 6,
    image: "https://www.eamot.com/assets/img/services/solutions.jpg",
    title: "Duel Fuel Kit",
    description: "Enabling diesel generators to efficiently operate on dual fuel sources.",
    link: "#"
  }
];

export default function ServicesSection() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
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
            Our Core Services
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in providing cutting-edge technology solutions that help businesses and organizations monitor and manage their energy usage more efficiently and effectively.
          </p>
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
      className="service-card bg-white rounded-xl shadow-md overflow-hidden"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
          <a href={service.link} className="hover:text-primary transition duration-300">{service.title}</a>
        </h3>
        
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        
        <a href={service.link} className="text-primary hover:text-primary-600 font-medium flex items-center transition duration-300">
          <span>All Services</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
}
