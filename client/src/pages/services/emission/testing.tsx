import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, CircuitBoard, BarChart, Shield, ArrowRight,
  Package, Truck, Clock, CheckCircle, Search,
  Settings, Wrench, FileText, Clipboard, AlertTriangle,
  Calendar, Microscope, ClipboardCheck, BookOpen, 
  BarChart4, Activity, LineChart, Beaker, FlaskConical
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function EmissionTestingPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  
  // State for interactive elements
  const [activeParameter, setActiveParameter] = useState(0);
  
  // Test parameters with mock data
  const testParameters = [
    { 
      name: "Nitrogen Oxides (NOx)", 
      icon: <Beaker className="w-6 h-6" />,
      limit: "0.4 g/kWh",
      typical: "0.2-0.6 g/kWh",
      importance: "Critical air pollutant regulated under emission standards",
      color: "from-red-500 to-red-700"
    },
    { 
      name: "Carbon Monoxide (CO)", 
      icon: <FlaskConical className="w-6 h-6" />,
      limit: "3.5 g/kWh",
      typical: "1.5-5.0 g/kWh",
      importance: "Toxic gas formed by incomplete combustion",
      color: "from-amber-500 to-amber-700" 
    },
    { 
      name: "Particulate Matter (PM)", 
      icon: <Microscope className="w-6 h-6" />,
      limit: "0.02 g/kWh",
      typical: "0.01-0.05 g/kWh",
      importance: "Fine particles that cause respiratory issues",
      color: "from-gray-500 to-gray-700"
    },
    { 
      name: "Hydrocarbons (HC)", 
      icon: <Activity className="w-6 h-6" />,
      limit: "0.19 g/kWh",
      typical: "0.10-0.30 g/kWh",
      importance: "Volatile organic compounds that contribute to smog",
      color: "from-green-500 to-green-700"
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Laboratory Styled Interface */}
                                         <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <section 
        ref={heroRef}
        // className="relative py-20 md:py-28 overflow-hidden text-white"
          className="relative py-20 md:py-28 overflow-hidden text-white)]"

        // style={{
        //   background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)"
        // }}
   style={{
    backgroundImage: 'linear-gradient(135deg, #001F3F 0%, #000C1F 100%)'
  }}
  
      >
        {/* Laboratory-themed background elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Chemical formula background elements */}
          <div className="absolute inset-0 opacity-5 flex flex-wrap justify-around content-around">
            {["CO", "NO₂", "HC", "CO₂", "NOₓ", "O₃", "PM₂.₅"].map((formula, i) => (
              <div 
                key={i}
                className="text-white text-3xl sm:text-5xl font-mono opacity-30"
                style={{ transform: `rotate(${Math.random() * 20 - 10}deg)` }}
              >
                {formula}
              </div>
            ))}
          </div>
          
          {/* Animated measuring lines */}
          <div className="absolute inset-y-0 right-10 flex items-center">
            <div className="h-3/4 w-[2px] bg-white/10 rounded relative">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-0 w-2 h-[2px] bg-white/40"
                  style={{ top: `${i * 10}%` }}
                />
              ))}
              <motion.div 
                className="absolute w-3 h-3 rounded-full bg-green-300 shadow-lg shadow-green-300/50 -left-[5px]"
                animate={{ 
                  top: ['5%', '80%', '30%', '60%', '5%'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-10 flex items-center">
            <div className="h-3/4 w-[2px] bg-white/10 rounded relative">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-0 w-2 h-[2px] bg-white/40"
                  style={{ top: `${i * 10}%` }}
                />
              ))}
              <motion.div 
                className="absolute w-3 h-3 rounded-full bg-yellow-300 shadow-lg shadow-yellow-300/50 -left-[5px]"
                animate={{ 
                  top: ['70%', '20%', '50%', '10%', '70%'],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Laboratory header graphics */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Precision Testing Services</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Emission <span className="text-green-300">Testing</span> Laboratory
                </h1>
                
                <p className="text-lg md:text-xl text-green-100 mb-8 max-w-lg">
                  Our state-of-the-art facility provides comprehensive emissions testing with advanced analytics to ensure regulatory compliance and environmental responsibility.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    Schedule Testing
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-black "
                    size="lg"
                  >
                    View Test Parameters
                  </Button>
                </div>
                
                {/* Lab certification badges */}
                <div className="flex mt-8 gap-4">
                  <motion.div 
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CheckCircle className="h-8 w-8 text-green-300" />
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ClipboardCheck className="h-8 w-8 text-green-300" />
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Shield className="h-8 w-8 text-green-300" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Interactive lab dashboard visualization */}
            <div className="md:w-1/2">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="mb-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="text-sm font-mono">EAMOT-LAB-3000</div>
                </div>
                
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-white/20 text-white">Emission Parameters Analysis</h3>
                
                {/* Parameter tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 text-white">
                  {testParameters.map((param, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                        activeParameter === index
                          ? `bg-gradient-to-r ${param.color} text-white`
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      onClick={() => setActiveParameter(index)}
                    >
                      <div className="flex items-center gap-2">
                        {param.icon}
                        <span className="font-medium text-sm">{param.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Active parameter data */}
                <div className="bg-white/5 rounded-lg p-4 mb-4 text-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-green-200 mb-1">Regulatory Limit</div>
                      <div className="text-lg font-mono">{testParameters[activeParameter].limit}</div>
                    </div>
                    <div>
                      <div className="text-xs text-green-200 mb-1">Typical Range</div>
                      <div className="text-lg font-mono">{testParameters[activeParameter].typical}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-xs text-green-200 mb-1">Environmental Impact</div>
                    <div className="text-sm">{testParameters[activeParameter].importance}</div>
                  </div>
                </div>
                
                {/* Data visualization */}
                <div className="h-32 relative">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-green-500/30"></div>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute bottom-0 w-px h-full bg-green-500/20"
                      style={{ left: `${i * 11}%` }}
                    ></div>
                  ))}
                  
                  {/* Animated data line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path 
                      d="M0,80 C20,70 40,90 60,75 C80,60 100,65 120,55 C140,45 160,55 180,40 C200,25 220,30 240,20 C260,10 280,25 300,15"
                      stroke="url(#lineGradient)" 
                      strokeWidth="2" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2 }}
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Data points */}
                  {[75, 55, 40, 20, 15].map((y, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                      style={{ 
                        bottom: `${y}%`, 
                        left: `${i * 25}%`,
                      }}
                      initial={{ scale: 0 }}
                      animate={heroInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + (i * 0.1) }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Animated particle elements */}
        <div className="absolute inset-0" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${Math.random() * 150 + 10}px`,
                height: `${Math.random() * 150 + 10}px`,
                backgroundColor: `rgba(255, 255, 255, 0.15)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationIterationCount: 'infinite',
                animationName: i % 2 === 0 ? 'float-up' : 'float-down',
                animationTimingFunction: 'ease-in-out',
              }}
            />
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes float-up {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          @keyframes float-down {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
        `}} />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          }
        `}} />
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mt-5 pt-5">
            <div className="mb-6 inline-flex items-center justify-center">
              <span className="bg-white/20 p-3 rounded-lg mr-4">
                <Microscope className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-gray-200">
                Emission <span className="text-accent">Testing Coordination</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto text-gray-200">
              Comprehensive emission testing coordination services, ensuring regulatory compliance
              through accurate testing, documentation, and certification processes.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#" onClick={openModal}>Request Testing Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
                <a href="#services">Explore Testing Options</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Service Features with Interactive Elements */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-white relative"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Testing Coordination
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              End-to-End <span className="text-primary">Testing Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized emission testing coordination services ensure your equipment meets
              all regulatory requirements through accurate testing and proper documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1912&q=80",
                title: "Regulatory Expertise",
                description: "In-depth knowledge of emission testing requirements across international, national, and local regulatory frameworks.",
                benefits: ["Cross-jurisdictional knowledge", "Up-to-date standards", "Compliance expertise"]
              },
              {
                icon: <Microscope className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
                title: "Accredited Testing Partners",
                description: "Coordination with certified testing laboratories and authorized agencies recognized by regulatory authorities.",
                benefits: ["Recognized certification bodies", "Qualified technicians", "Calibrated equipment"]
              },
              {
                icon: <Calendar className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Scheduling & Logistics",
                description: "Efficient planning and management of testing schedules, equipment preparation, and on-site coordination.",
                benefits: ["Minimal downtime", "Optimized schedules", "Coordinated logistics"]
              },
              {
                icon: <ClipboardCheck className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Pre-Testing Assessment",
                description: "Thorough evaluation of equipment condition and testing readiness to ensure successful certification outcomes.",
                benefits: ["Risk identification", "System optimization", "Higher pass rates"]
              },
              {
                icon: <FileText className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Documentation Management",
                description: "Comprehensive handling of all testing documentation, reports, and certification application processes.",
                benefits: ["Complete record keeping", "Electronic archiving", "Audit-ready files"]
              },
              {
                icon: <Shield className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                title: "Compliance Assurance",
                description: "Expert verification of testing results against regulatory standards to ensure full compliance is achieved.",
                benefits: ["Verified conformity", "Legal protection", "Operational confidence"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center">
                      <div className="bg-green-600/80 backdrop-blur-sm p-3 rounded-lg mr-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#contact" className="text-green-600 font-medium flex items-center hover:underline">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Categories */}
      <section 
        id="services"
        ref={servicesRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Specialized Testing Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our <span className="text-primary">Testing Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of specialized emission testing coordination services designed for different equipment and requirements.
            </p>
          </div>
          
          <Tabs defaultValue="initial" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="initial" className="px-6 py-3 rounded-lg">Initial Certification</TabsTrigger>
              <TabsTrigger value="periodic" className="px-6 py-3 rounded-lg">Periodic Testing</TabsTrigger>
              <TabsTrigger value="compliance" className="px-6 py-3 rounded-lg">Compliance Recovery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="initial" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <ClipboardCheck className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Initial Certification</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Complete coordination of initial emission certification testing for new equipment
                        or first-time compliance requirements across various regulatory frameworks.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Key Advantages</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Streamlined Process</span>
                                <p className="text-sm text-gray-400">Efficient management of all certification steps</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">First-Time Success</span>
                                <p className="text-sm text-gray-400">Thorough preparation ensures passing results</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Documentation Expertise</span>
                                <p className="text-sm text-gray-400">Complete and accurate submission packages</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Initial Certification Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Pre-Testing Assessment</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory requirement analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment compliance review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Testing protocol development</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Documentation preparation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Risk assessment and mitigation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Testing Coordination</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Testing laboratory selection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Schedule management</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment preparation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">On-site test supervision</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Real-time issue resolution</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Certification Processing</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Results verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Certification application</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory authority liaison</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Documentation submission</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Certification follow-up</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Equipment Types</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Diesel generators</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Industrial engines</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power plants</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Manufacturing facilities</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Process equipment</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Certification Guarantee</h4>
                        </div>
                        <p className="text-gray-600">
                          Our coordination services include a comprehensive pre-testing assessment to identify
                          and address potential compliance issues before official testing, ensuring successful
                          certification outcomes and minimizing the risk of costly retesting.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="periodic" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Periodic Testing</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Comprehensive coordination of required periodic emission testing for ongoing regulatory
                        compliance, ensuring timely certification renewal and continuous operation.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Periodic Testing Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Continuous Compliance</span>
                                <p className="text-sm text-gray-400">Maintain regulatory standing without interruption</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Proactive Management</span>
                                <p className="text-sm text-gray-400">Scheduled testing before compliance deadlines</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Operational Continuity</span>
                                <p className="text-sm text-gray-400">Minimized disruption to business operations</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Periodic Testing Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Compliance Calendar</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Testing schedule management</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory deadline tracking</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Automatic reminder system</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Testing window optimization</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Multi-facility coordination</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Pre-Test Readiness</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment performance review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Maintenance scheduling</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Historical data analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System optimization</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Mock testing protocols</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Testing Management</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Testing agency coordination</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">On-site supervision</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Operational adjustment during testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Real-time results monitoring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Immediate corrective action</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Documentation & Renewal</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Results documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Certification renewal applications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory authority submission</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Historical record maintenance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance trend analysis</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Efficient Testing Scheduling</h4>
                        </div>
                        <p className="text-gray-600">
                          Our periodic testing service includes strategic scheduling to minimize operational 
                          disruption, coordinating testing activities during planned maintenance windows or
                          off-peak operation periods whenever possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="compliance" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Wrench className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Compliance Recovery</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Specialized services for addressing failed emission tests, regulatory
                        violations, or lapsed certifications with expedited solutions to restore compliance.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Recovery Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Rapid Resolution</span>
                                <p className="text-sm text-gray-400">Expedited path to compliance restoration</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Penalty Mitigation</span>
                                <p className="text-sm text-gray-400">Strategic approach to minimize regulatory consequences</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Root Cause Solutions</span>
                                <p className="text-sm text-gray-400">Addressing underlying compliance issues</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Compliance Recovery Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Violation Assessment</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance gap analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Failure cause determination</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory impact evaluation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Documentation review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Historical compliance analysis</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Corrective Action</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment optimization</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System modifications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Component replacement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Operational protocol updates</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Maintenance implementation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Expedited Testing</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Priority testing scheduling</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Specialized testing protocols</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Focused parameter testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Pre-test performance verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">On-site expert supervision</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Regulatory Engagement</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Authority communication</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance plan submission</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Variance/extension requests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Penalty negotiation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Settlement agreement facilitation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Urgent Response Protocol</h4>
                        </div>
                        <p className="text-gray-600">
                          Our compliance recovery team operates under an expedited response protocol,
                          initiating assessment and corrective action planning within 24 hours of engagement
                          to minimize the duration of non-compliance and associated operational impacts.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testing Process */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Testing Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              How Our <span className="text-primary">Testing Coordination Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures proper testing, accurate results, and timely certification of your equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Requirement Analysis",
                description: "Comprehensive assessment of regulatory requirements, equipment specifications, and compliance parameters."
              },
              {
                icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
                title: "Pre-Testing Preparation",
                description: "Equipment optimization, testing protocol development, and comprehensive documentation preparation."
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary" />,
                title: "Testing Coordination",
                description: "Laboratory selection, scheduling, on-site supervision, and real-time monitoring during testing procedures."
              },
              {
                icon: <Microscope className="h-10 w-10 text-primary" />,
                title: "Results Verification",
                description: "Thorough analysis of testing data, comparison against regulatory limits, and compliance determination."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Certification Processing",
                description: "Results documentation, certification application, regulatory submission, and approval follow-up."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="relative"
              >
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%-24px)] w-full h-0.5 bg-primary/30 z-0"></div>
                )}
                <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border-4 border-white shadow-md">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Request Testing Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">Testing Team</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request emission testing coordination services for your equipment.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Testing Request Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Required Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Equipment details and specifications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Regulatory framework/jurisdiction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Testing requirements and parameters</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Timeline and location information</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Priority Services</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>Expedited testing coordination</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 mr-3" />
                          <span>Non-compliance recovery</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3" />
                          <span>Deadline-critical testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="equipmentDetails" className="block text-sm font-medium text-gray-700 mb-1">Equipment Details *</label>
                      <input
                        type="text"
                        id="equipmentDetails"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Type, model, and specifications"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="regulatoryFramework" className="block text-sm font-medium text-gray-700 mb-1">Regulatory Framework *</label>
                      <input
                        type="text"
                        id="regulatoryFramework"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Applicable regulations and jurisdiction"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="testingRequirements" className="block text-sm font-medium text-gray-700 mb-1">Testing Requirements & Details *</label>
                      <textarea
                        id="testingRequirements"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe the testing requirements, parameters, specific compliance needs, and any challenges..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select
                          id="serviceType"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="initialCertification">Initial Certification</option>
                          <option value="periodicTesting">Periodic/Renewal Testing</option>
                          <option value="complianceRecovery">Compliance Recovery</option>
                          <option value="consultation">Technical Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Timeline *</label>
                        <select
                          id="timeline"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="immediate">Immediate (Urgent)</option>
                          <option value="month">Within 1 Month</option>
                          <option value="quarter">This Quarter</option>
                          <option value="planning">Future Planning</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white">
                        Submit Testing Request
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}