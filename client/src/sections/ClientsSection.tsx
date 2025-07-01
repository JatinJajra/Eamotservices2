import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const clients = [
  { id: 1, logo: "assets/img/brand/11.jpg", alt: "Client Logo" },
  { id: 2, logo: "assets/img/brand/12.jpg", alt: "Client Logo" },
  { id: 3, logo: "assets/img/brand/13.jpg", alt: "Client Logo" },
  { id: 4, logo: "assets/img/brand/14.jpg", alt: "Client Logo" },
  { id: 5, logo: "assets/img/brand/16.png", alt: "Client Logo" },
  { id: 6, logo: "assets/img/brand/17.png", alt: "Client Logo" }
];

export default function ClientsSection() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 text-gray-800">
            <span className="text-primary">Reliable Energy</span> Solutions for Banks, FMCG, and Government
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div 
              key={client.id} 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.img 
                src={client.logo} 
                alt={client.alt} 
                className="h-16  hover:grayscale-0 transition duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
