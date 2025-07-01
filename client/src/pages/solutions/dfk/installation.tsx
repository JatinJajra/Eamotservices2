import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wrench, Gauge, Cpu, FileCheck, Users, Settings, 
  Flame, BarChart, DollarSign, Percent, Clock, BadgeCheck,
  Award, ShieldCheck, BarChart3, CheckCircle, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";
import { useInView } from "react-intersection-observer"; // make sure this is imported


// Custom component for animated percentage counter
const PercentageCounter = ({ value, label, color, delay, inView }: { 
  value: number, 
  label: string, 
  color: string, 
  delay: number, 
  inView: boolean 
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(value / (duration / 16)); // 16ms per frame
      
      const updateValue = () => {
        start += increment;
        if (start < value) {
          setDisplayValue(start);
          timeout = setTimeout(updateValue, 16);
        } else {
          setDisplayValue(value);
        }
      };
      
      timeout = setTimeout(updateValue, delay * 1000);
    }
    
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);
  
  return (
    <div className={`text-center p-6 rounded-xl ${color}`}>
      <div className="text-5xl font-bold mb-2 flex items-center justify-center">
        <span>{displayValue}</span>
        <span className="text-4xl">%</span>
      </div>
      <div className="text-sm font-medium text-white/80">{label}</div>
    </div>
  );
};

const DFKInstallationPage: React.FC = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: metricsRef, inView: metricsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: teamRef, inView: teamInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: resultsRef, inView: resultsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
  
  return (

    <div className="bg-gray-900 text-white">
                          <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/dual-fuel-conversion.mp4" type="video/mp4" />
              {/* Fallback image */}
              <img
                src="/images/dfk-installation.jpg"
                alt="Dual Fuel Conversion"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/20 text-primary"
            >
              <Flame className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Industry-Leading Conversion Technology</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Precision <span className="text-primary">Dual Fuel</span> Conversion
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8"
            >
              Unlock the full potential of your generators with our industry-leading dual fuel conversion service. 
              While standard installations achieve only 30-40% diesel substitution, our proprietary calibration 
              methodology consistently delivers 50-65% substitution rates with enhanced reliability.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-primary hover:bg-primary/90 text-white">
                Calculate Your Fuel Savings
              </Button>
              <Button variant="outline" size="lg" className="text-black border-white hover:bg-white/70"  onClick={() => {
    const section = document.getElementById("installation-process");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                View Conversion Process
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Animated indicator arrow */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={heroInView ? { opacity: [0, 1, 0], y: [0, 10, 0] } : {}}
          transition={{ 
            duration: 2, 
            delay: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity
              }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>
      
      {/* Key Metrics Section */}
      <motion.section
        ref={metricsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Superior Performance Metrics
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our implementation delivers measurable results that significantly outperform industry standards
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                value: 65, 
                label: "Maximum Diesel Substitution", 
                icon: <Percent className="h-14 w-14 text-primary/70" />,
                color: "bg-gradient-to-br from-blue-900/60 to-blue-700/40",
                delay: 0.4
              },
              { 
                value: 34, 
                label: "Guaranteed Cost Reduction", 
                icon: <DollarSign className="h-14 w-14 text-primary/70" />,
                color: "bg-gradient-to-br from-green-900/60 to-green-700/40",
                delay: 0.7
              },
              { 
                value: 25, 
                label: "Generator Lifespan Extension", 
                icon: <Clock className="h-14 w-14 text-primary/70" />,
                color: "bg-gradient-to-br from-purple-900/60 to-purple-700/40",
                delay: 1.0
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                className="relative overflow-hidden rounded-xl border border-gray-700"
              >
                <div className="absolute top-4 right-4 opacity-50">
                  {metric.icon}
                </div>
                
                <PercentageCounter
                  value={metric.value}
                  label={metric.label}
                  color={metric.color}
                  delay={metric.delay}
                  inView={metricsInView}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">Industry-Leading Performance</h3>
                <p className="text-gray-300">
                  Our proprietary calibration technology consistently outperforms standard dual fuel conversions by
                  maximizing substitution rates while maintaining optimal engine performance and reliability.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="h-48 bg-gray-900 rounded-lg p-4 relative overflow-hidden">
                  {/* Fuel savings comparison chart (simplified visual) */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="flex-1 flex items-end">
                      <div className="w-full h-[40%] bg-gray-600 rounded-t-sm relative">
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-sm">
                          <span className="font-semibold">Standard</span>
                          <span>30-40%</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-8"></div>
                    <div className="flex-1 flex items-end">
                      <div className="w-full h-[65%] bg-primary/70 rounded-t-sm relative">
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-sm">
                          <span className="font-semibold">EAMOT</span>
                          <span>50-65%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400">
                    Diesel Substitution Rate Comparison
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Installation Process Section */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 40 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-800"
        id="installation-process"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              OUR METHODOLOGY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              The Precision Conversion Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto "
            >
              Our comprehensive approach ensures the highest performance and reliability
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 md:transform md:-translate-x-1/2"></div>
            
            {[
              {
                title: "Feasibility Study & Engine Assessment",
                description: "Detailed evaluation of DG make, model, and operating conditions to ensure compatibility.",
                image: "/images/dfk-assessment.jpg",
                icon: <ClipboardCheck className="h-6 w-6 text-primary" />
              },
              {
                title: "Custom Kit Design & Selection",
                description: "Tailored dual-fuel kit (DFK) configured for optimal PNG + Diesel blending ratio. ",
                image: "/images/dfk-installation-process.jpg",
                icon: <Wrench className="h-6 w-6 text-primary" />
              },
              {
                title: "High-Precision Gas Train Installation",
                description: "Includes pressure regulators, flame arrestors, solenoid valves, and safety sensors.",
                image: "/images/dfk-optimization.jpg",
                icon: <Settings className="h-6 w-6 text-primary" />
              },
              {
                title: "Seamless Integration with DG Controls",
                description: "Non-invasive setup without altering engine internals or primary diesel system. ",
                image: "/images/dfk-testing.jpg",
                icon: <Gauge className="h-6 w-6 text-primary" />
              },
              {
                title: "Load-Based Calibration",
                description: "Fine-tuning gas-diesel ratio based on actual load patterns for best performance and fuel savings. ",
                image: "/images/dfk-integration.jpg",
                icon: <Cpu className="h-6 w-6 text-primary" />
              },
              {
                title: "Multi-Layer Safety System",
                description: "Real-time gas leak detection, auto-cutoff, and emergency shutdown interlocks.",
                image: "/images/dfk-training.jpg",
                icon: <Users className="h-6 w-6 text-primary" />
              },
              //   {
              //   title: "Compliance & Commissioning",
              //   description: "Verified by qualified technicians with documentation support for statutory compliance.",
              //   image: "/images/dfk-training.jpg",
              //   icon: <Users className="h-6 w-6 text-primary" />
              // }
              // ,
              //   {
              //   title: "Performance Testing & Handover",
              //   description: "Final emission and fuel efficiency tests conducted before system handover. ",
              //   image: "/images/dfk-training.jpg",
              //   icon: <Users className="h-6 w-6 text-primary" />
              // }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-gray-900 border-2 border-primary rounded-full flex items-center justify-center md:transform md:-translate-x-1/2 z-10">
                  {step.icon}
                </div>
                
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-2rem)]">
                  <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Expert Team Section */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0, y: 40 }}
        animate={teamInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden"
              >
                <img 
                  src="/images/dfk-expert-team.jpg" 
                  alt="Expert DFK Installation Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary rounded-full w-3 h-3 animate-pulse"></div>
                    <span className="text-primary font-semibold">Elite Installation Team</span>
                  </div>
                  <p className="text-white">Our specialized technicians have completed 450+ successful conversions with a perfect safety record</p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary font-medium"
              >
                MASTER TECHNICIANS
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mt-2 mb-6"
              >
                Unmatched Expertise & Experience
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-300 mb-8"
              >
                Our Elite DFK Installation Team consists of factory-certified specialists with an average of 8+ years
                dedicated to dual fuel conversion technology. We've completed 450+ successful installations across
                every major generator brand and model, maintaining a perfect safety record.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    stat: "8+",
                    label: "Years Average Experience",
                    description: "Specialized in dual fuel technology"
                  },
                  {
                    stat: "450+",
                    label: "Successful Conversions",
                    description: "Across all generator brands and models"
                  },
                  {
                    stat: "100%",
                    label: "Safety Record",
                    description: "Zero incidents across all installations"
                  },
                  {
                    stat: "24/7",
                    label: "Expert Support",
                    description: "Continuous assistance post-installation"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{item.stat}</div>
                    <div className="font-medium mb-1">{item.label}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Results & Benefits Section */}
      <motion.section
        ref={resultsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={resultsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={resultsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              PROVEN RESULTS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Transformative Benefits
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our precision implementation delivers measurable advantages beyond simple fuel savings
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {[
              {
                title: "Up to 60% Diesel Reduction",
                description: "lowering operating costs significantly.",
                icon: <BarChart className="h-8 w-8 text-primary" />,
                color: "bg-blue-900/20 border-blue-600/30"
              },
              {
                title: "Cleaner Emissions",
                description: "aligning with green building and sustainability goals.",
                icon: <Clock className="h-8 w-8 text-primary" />,
                color: "bg-green-900/20 border-green-600/30"
              },
              {
                title: "Faster ROI",
                description: "typically within 12–18 months depending on usage.",
                icon: <Gauge className="h-8 w-8 text-primary" />,
                color: "bg-purple-900/20 border-purple-600/30"
              },
              {
                title: "No Engine Modification",
                description: "retaining OEM warranty and serviceability.",
                icon: <DollarSign className="h-8 w-8 text-primary" />,
                color: "bg-amber-900/20 border-amber-600/30"
              },
              {
                title: "Zero Downtime for Residents",
                description: "installation done with minimal disruption.",
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                color: "bg-red-900/20 border-red-600/30"
              },
              {
                title: "Full Statutory Compliance",
                description: "Clients report 96% operator confidence scores following our training program, enabling your staff to maximize system benefits from the first day of independent operation.with CPCB, PNGRB, and fire safety norms.",
                icon: <BadgeCheck className="h-8 w-8 text-primary" />,
                color: "bg-cyan-900/20 border-cyan-600/30"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`${benefit.color} rounded-xl p-6 border`}
              >
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary font-medium"
              >
                SUCCESS STORIES
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mt-2 mb-6"
              >
                What Our Clients Say
              </motion.h2>
            </div>
            
            {[
              {
                quote: "The level of expertise EAMOT's installation team brought to our dual fuel conversion was exceptional. They achieved a 62% substitution rate on our generators - far beyond what we thought possible. The ROI has already exceeded our projections by 40%.",
                author: "Rajiv Sharma",
                position: "Chief Engineer",
                company: "Suntech Manufacturing",
                delay: 0.4
              },
              {
                quote: "I was skeptical about achieving the promised fuel savings, but EAMOT's precision implementation has delivered exactly as promised - a 58% average substitution rate with zero operational disruption during installation. Their 72-hour testing protocol is the most thorough I've seen.",
                author: "Ananya Patel",
                position: "Operations Director",
                company: "Reliance Data Centers",
                delay: 0.7
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className="mb-12 last:mb-0"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 relative">
                  <div className="absolute top-6 left-6 text-6xl text-primary opacity-20">"</div>
                  <p className="text-gray-300 relative z-10 mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {testimonial.author.charAt(0)}{testimonial.author.split(' ')[1].charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 -mb-20 -ml-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Cut Your Fuel Costs by 34% 
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Join the 450+ organizations currently saving millions through our advanced dual fuel conversion technology. 
              We're so confident in our results that we guarantee at least 34% fuel cost reduction in the first year.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" onClick={openModal} asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="#">Calculate Your Fuel Savings</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4"
            >
              {[
                { value: "450+", label: "Installations" },
                { value: "34%", label: "Minimum Savings" },
                { value: "100%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DFKInstallationPage;