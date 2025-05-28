import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const features = [
  {
    id: 1,
    title: "IoT and AMC Services",
    number: "01",
    description: "IoT for real-time monitoring; AMC for regular maintenance, optimal performance.",
    icon: "fas fa-network-wired",
    items: [
      "IoT-enabled monitoring solutions for diesel generators",
      "Energy auditing and consulting services",
      "Predictive maintenance services",
      "AMC & Allied Services"
    ]
  },
  {
    id: 2,
    title: "Consulting Services",
    number: "02",
    description: "Expert advice for optimizing energy use and reducing operational costs.",
    icon: "fas fa-lightbulb",
    items: [
      "Energy auditing and consulting services",
      "Energy optimization and cost savings",
      "Sustainable energy solutions"
    ]
  },
  {
    id: 3,
    title: "Sustainable Energy Solutions",
    number: "03",
    description: "Providing efficient, eco-friendly energy options for a sustainable future.",
    icon: "fas fa-leaf",
    items: [
      "Retro Fit Control Devices",
      "Dual Fuel Kits",
      "Lithium-ion battery generators",
      "Customized energy management solutions"
    ]
  }
];

export default function FeaturesSection() {
  const { ref: titleRef, inView: titleInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
            <span className="font-semibold">Your trusted Energy Partner</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
            Service We Provide
          </h2>
        </motion.div>
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          ref={featuresRef}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              index={index}
              inView={featuresInView}
            />
          ))}
        </div>
        
        {/* <motion.div 
          className="mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl overflow-hidden shadow-xl"
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-8 lg:p-12 col-span-3">
              <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-4">
                Focused on Decarbonisation, Carbon Footprint for your organisation or evaluation Sustainable Alternatives?
              </h4>
              
              <Button asChild className="mt-4 bg-white hover:bg-gray-100 text-primary">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <div className="col-span-2 hidden lg:block relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1513395682721-5ca0f09cb7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable Energy" 
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div> */}
        
        <motion.div 
  className="mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl overflow-hidden shadow-xl"
  ref={ctaRef}
  initial={{ opacity: 0, y: 30 }}
  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.7 }}
>
  <div className="p-8 lg:p-12">
    <h4 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-4">
      Focused on Decarbonisation, Carbon Footprint for your organisation or evaluation Sustainable Alternatives?
    </h4>

    <Button asChild className="mt-4 bg-white hover:bg-gray-100 text-primary">
      <a href="#contact">Get In Touch</a>
    </Button>
  </div>
</motion.div>

      </div>
    </section>
  );
}

interface FeatureProps {
  feature: {
    id: number;
    title: string;
    number: string;
    description: string;
    icon: string;
    items: string[];
  };
  index: number;
  inView: boolean;
}

function FeatureCard({ feature, index, inView }: FeatureProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-primary-200 transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
        <i className={`${feature.icon} text-3xl`}></i>
      </div>
      
      <div className="flex items-baseline mb-4">
        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mr-3">{feature.title}</h3>
        <span className="bg-primary text-white px-2 py-1 rounded text-xs font-semibold">{feature.number}</span>
      </div>
      
      <p className="text-gray-600 mb-6">
        {feature.description}
      </p>
      
      <ul className="space-y-3 mb-6">
        {feature.items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
