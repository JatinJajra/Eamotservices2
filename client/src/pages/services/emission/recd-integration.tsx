import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Shield, BarChart, 
  CircuitBoard, 
  Cpu,
  Check,
  ArrowRight,
  AreaChart,
  BarChart3,
  ArrowDownToLine,
  CheckCircle,
  Settings,
  ListChecks,
  Gauge,
  LineChart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/Popup/ContectModal";

export default function RECDIntegrationPage() {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useIntersectionObserver({ threshold: 0.1 });

  const benefits = [
    {
      title: "Reduce Emissions by 75%",
      description: "Our RECD integration enables a significant reduction in harmful emissions, helping you exceed environmental standards and reduce your carbon footprint.",
      icon: <AreaChart className="h-12 w-12 text-blue-400" />,
      stats: "75% Reduction"
    },
    {
      title: "Boost Efficiency by 30%",
      description: "Integration optimizes your existing systems, improving fuel efficiency and reducing operational costs while extending equipment lifespan.",
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
      stats: "30% Improvement"
    },
    {
      title: "100% Compliance Assurance",
      description: "Stay ahead of regulatory requirements with fully compliant emission control systems that include comprehensive documentation and certification.",
      icon: <CheckCircle className="h-12 w-12 text-blue-400" />,
      stats: "100% Compliance"
    },
    {
      title: "ROI Within 18 Months",
      description: "Advanced efficiency gains and reduced maintenance costs mean your investment pays for itself, typically within just 18 months of integration.",
      icon: <LineChart className="h-12 w-12 text-blue-400" />,
      stats: "18-Month ROI"
    }
  ];

  const processSteps = [
    {
      title: "Site Assessment",
      description: "Comprehensive evaluation of your current systems and infrastructure to determine integration requirements and optimize implementation strategy.",
      icon: <ListChecks className="h-8 w-8 text-white" />
    },
    {
      title: "Custom Engineering",
      description: "Our engineers design a tailored RECD integration solution that perfectly matches your specific equipment models, operational patterns, and compliance needs.",
      icon: <Settings className="h-8 w-8 text-white" />
    },
    {
      title: "Professional Installation",
      description: "Expert technicians handle the installation with minimal disruption to your operations, ensuring perfect placement and connection to existing systems.",
      icon: <ArrowDownToLine className="h-8 w-8 text-white" />
    },
    {
      title: "Calibration & Testing",
      description: "Precise calibration and extensive testing to ensure optimal performance, efficiency, and complete compliance with all regulatory requirements.",
      icon: <Gauge className="h-8 w-8 text-white" />
    }
  ];

  return (
    <div className="bg-[#071128] min-h-screen text-white">
      {/* Hero Section with solid background */}
                                   <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <section 
        ref={heroRef}
        className="bg-[#0a1a3a] text-white py-16 md:py-24 relative overflow-hidden"
      >
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4F91FB" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated glowing orbs */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-blue-700/20 blur-3xl"
          animate={{ 
            x: [50, 150, 50], 
            y: [50, 100, 50],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', right: '5%' }}
        />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
          animate={{ 
            x: [-50, -150, -50], 
            y: [150, 100, 150],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '5%', left: '10%' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Hero header */}
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-700 text-white"
              >
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Advanced Emission Control</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                RECD <span className="text-blue-400">Integration</span> Services
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white mb-8 leading-relaxed"
              >
                Seamlessly integrate next-generation Retrofit Emission Control Devices with your existing systems for enhanced performance, substantial emissions reduction, and full regulatory compliance.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  onClick={openModal}
                >
                  Get Started
                </Button>
                {/* <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  Learn More
                </Button> */}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-6 mt-8"
              >
                {/* Key highlights */}
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600/20 p-2 rounded-full">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-200">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600/20 p-2 rounded-full">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-200">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600/20 p-2 rounded-full">
                    <Check className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-200">5-Year Warranty</span>
                </div>
              </motion.div>
            </div>
            
            {/* Hero image/visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 relative"
            >
              {/* Styled tech illustration */}
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0c2150] to-[#071128] border border-blue-900/50 shadow-2xl">
                {/* Circuit SVG pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-30" width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke="#4F91FB" strokeWidth="2">
                    <path d="M50,150 L200,150 L200,350 L350,350 L350,200 L500,200 L500,450 L650,450 L650,100" />
                    <circle cx="50" cy="150" r="8" fill="#0D47A1" />
                    <circle cx="200" cy="150" r="8" fill="#0D47A1" />
                    <circle cx="200" cy="350" r="8" fill="#0D47A1" />
                    <circle cx="350" cy="350" r="8" fill="#0D47A1" />
                    <circle cx="350" cy="200" r="8" fill="#0D47A1" />
                    <circle cx="500" cy="200" r="8" fill="#0D47A1" />
                    <circle cx="500" cy="450" r="8" fill="#0D47A1" />
                    <circle cx="650" cy="450" r="8" fill="#0D47A1" />
                    <circle cx="650" cy="100" r="8" fill="#0D47A1" />
                    
                    <path d="M120,250 L120,400 L280,400 L280,300 L400,300" strokeDasharray="5,5" />
                    <circle cx="120" cy="250" r="6" fill="#2196F3" />
                    <circle cx="120" cy="400" r="6" fill="#2196F3" />
                    <circle cx="280" cy="400" r="6" fill="#2196F3" />
                    <circle cx="280" cy="300" r="6" fill="#2196F3" />
                    <circle cx="400" cy="300" r="6" fill="#2196F3" />
                  </g>
                </svg>
                
                {/* RECD System Components Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 relative">
                    {/* Central component */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-lg border-4 border-blue-500"
                      animate={{ boxShadow: ['0 0 10px #4F91FB', '0 0 20px #4F91FB', '0 0 10px #4F91FB'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-center">
                        <Shield className="h-10 w-10 mx-auto mb-1 text-white" />
                        <div className="text-xs font-bold">RECD Core</div>
                      </div>
                    </motion.div>
                    
                    {/* Surrounding components */}
                    {[0, 1, 2, 3].map((i) => {
                      const angle = (i * Math.PI / 2) + Math.PI / 4;
                      const x = Math.cos(angle) * 90;
                      const y = Math.sin(angle) * 90;
                      const icons = [
                        <Cpu className="h-6 w-6 text-white" />,
                        <CircuitBoard className="h-6 w-6 text-white" />,
                        <BarChart className="h-6 w-6 text-white" />,
                        <Settings className="h-6 w-6 text-white" />
                      ];
                      const labels = ['Processor', 'Sensors', 'Analytics', 'Control'];
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-16 h-16 bg-blue-800 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg"
                          style={{ 
                            left: `calc(50% + ${x}px - 32px)`, 
                            top: `calc(50% + ${y}px - 32px)` 
                          }}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: ['0 0 5px #4F91FB', '0 0 10px #4F91FB', '0 0 5px #4F91FB']
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.5
                          }}
                        >
                          <div className="text-center">
                            {icons[i]}
                            <div className="text-xs mt-1">{labels[i]}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Connection lines */}
                    {[0, 1, 2, 3].map((i) => {
                      const angle = (i * Math.PI / 2) + Math.PI / 4;
                      const x1 = Math.cos(angle) * 42;
                      const y1 = Math.sin(angle) * 42;
                      const x2 = Math.cos(angle) * 82;
                      const y2 = Math.sin(angle) * 82;
                      
                      return (
                        <svg key={i} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                          <motion.line
                            x1={x1 + 144} y1={y1 + 144} 
                            x2={x2 + 144} y2={y2 + 144}
                            stroke="#4F91FB"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            animate={{ 
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.5
                            }}
                          />
                        </svg>
                      );
                    })}
                  </div>
                </div>
                
                {/* Data flow animation */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-blue-400"
                      initial={{ 
                        left: `${20 + Math.random() * 60}%`, 
                        top: '100%',
                        opacity: 0 
                      }}
                      animate={{ 
                        top: '-5%',
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 3, 
                        repeat: Infinity,
                        delay: i * 2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section 
        ref={benefitsRef}
        className="py-20 bg-[#071128]"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900 text-blue-200 hover:bg-blue-800">MEASURABLE RESULTS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quantifiable Benefits of RECD Integration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our integration services deliver measurable improvements across emission reduction, 
              system efficiency, compliance, and return on investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0c2150] rounded-xl p-6 border border-blue-900/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-3 bg-blue-800/50 rounded-bl-xl">
                  <div className="text-xl font-bold text-blue-300">{benefit.stats}</div>
                </div>
                
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
                
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section
        ref={featuresRef}
        className="py-20 bg-[#0a1a3a]"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900 text-blue-200 hover:bg-blue-800">ADVANCED TECHNOLOGY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive RECD System Components</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every component of our RECD integration system is engineered for maximum efficiency,
              reliability, and environmental performance.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-[#071128]">
              <TabsTrigger value="overview" className="text-sm md:text-base">System Overview</TabsTrigger>
              <TabsTrigger value="control" className="text-sm md:text-base">Control Module</TabsTrigger>
              <TabsTrigger value="catalyst" className="text-sm md:text-base">Catalyst Systems</TabsTrigger>
              <TabsTrigger value="monitoring" className="text-sm md:text-base">Monitoring Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={featuresInView ? { opacity: 1 } : {}}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              >
                <Card className="bg-[#0c2150] border-blue-900/50 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Emission Control Module</h3>
                      <p className="text-gray-300">The central brain of the RECD system, processing sensor data and adjusting parameters in real-time to minimize emissions while maintaining optimal performance.</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Self-learning algorithms for continuous optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Millisecond response time to operational changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Military-grade reliability with redundant systems</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#0c2150] border-blue-900/50 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                        <Cpu className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Catalyst Chamber</h3>
                      <p className="text-gray-300">Advanced catalytic chamber utilizing precious metals to facilitate chemical reactions that convert NOx, CO, and hydrocarbons into nitrogen, carbon dioxide, and water.</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Proprietary catalyst formulation for 2x standard lifespan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Ultra-high surface area design for maximum contact</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Temperature-resistant coating prevents degradation</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#0c2150] border-blue-900/50 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                        <CircuitBoard className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Sensor Array</h3>
                      <p className="text-gray-300">Sophisticated network of temperature, pressure, and composition sensors that continuously monitor exhaust gas conditions and feed data to the control module.</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Wide-spectrum gas analyzers with ppb sensitivity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white"> Self-calibrating sensors maintain accuracy over time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Extreme environment rating for reliable operation</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#0c2150] border-blue-900/50 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                        <BarChart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Data Analysis System</h3>
                      <p className="text-gray-300">Powerful software suite that provides real-time analytics, historical performance trends, and regulatory compliance reporting capabilities.</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Cloud-based dashboard accessible from any device</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Predictive maintenance alerts prevent downtime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white">Automated compliance report generation for audits</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="control">
              <div className="bg-[#0c2150] rounded-xl p-8 border border-blue-900/50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Advanced Control Module Technology</h3>
                    <p className="text-gray-300 mb-6">
                      Our proprietary control module is the brain of the RECD system, featuring neural network algorithms 
                      that continuously optimize emission reduction while balancing performance and efficiency.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Real-time Processing</span>
                          <p className="text-gray-300 text-sm">Millisecond response times to changing operational conditions</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Adaptive Learning</span>
                          <p className="text-gray-300 text-sm">Self-improving algorithms optimize for your specific equipment</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Triple Redundancy</span>
                          <p className="text-gray-300 text-sm">Fail-safe systems ensure continuous operation even during component failures</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative h-80 w-full rounded-xl overflow-hidden bg-[#071128] border border-blue-900/30">
                      {/* Control module visual representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 relative">
                          <div className="absolute inset-0 bg-blue-800/30 rounded-lg border border-blue-700/50 flex items-center justify-center">
                            <Shield className="h-16 w-16 text-blue-400" />
                          </div>
                          
                          {/* Animated signals radiating outward */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute inset-0 border-2 border-blue-500/50 rounded-lg"
                              animate={{
                                scale: [1, 1.5, 1.5],
                                opacity: [0.1, 0.5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.6,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Data flow visualization */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(5)].map((_, i) => {
                          const y1 = 40 + i * 40;
                          const delay = i * 0.2;
                          
                          return (
                            <motion.path
                              key={i}
                              d={`M0,${y1} H400`}
                              stroke="rgba(59,130,246,0.3)"
                              strokeWidth="1"
                              fill="none"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ 
                                pathLength: 1, 
                                opacity: [0, 0.5, 0]
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                delay: delay,
                                ease: "linear"
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="catalyst">
              <div className="bg-[#0c2150] rounded-xl p-8 border border-blue-900/50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="relative h-80 w-full rounded-xl overflow-hidden bg-[#071128] border border-blue-900/30">
                      {/* Catalyst chamber visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Honeycomb structure */}
                        <div className="relative w-56 h-56">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                              <pattern id="honeycomb" width="10" height="17.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                                <path d="M5,0 L10,8.7 L5,17.4 L0,8.7 Z" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <circle cx="50" cy="50" r="40" fill="url(#honeycomb)" />
                          </svg>
                          
                          {/* Animated glow */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              boxShadow: [
                                '0 0 10px rgba(59,130,246,0.3)', 
                                '0 0 30px rgba(59,130,246,0.5)', 
                                '0 0 10px rgba(59,130,246,0.3)'
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>
                      </div>
                      
                      {/* Particle effect */}
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-1 w-1 rounded-full bg-red-500/70"
                          initial={{ 
                            x: -10, 
                            y: 40 + Math.random() * 200,
                            opacity: 0 
                          }}
                          animate={{ 
                            x: 410,
                            opacity: [0, 1, 1, 0],
                            backgroundColor: ['rgba(239,68,68,0.7)', 'rgba(59,130,246,0.7)']
                          }}
                          transition={{ 
                            duration: 3 + Math.random() * 2, 
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Next-Gen Catalyst Technology</h3>
                    <p className="text-gray-300 mb-6">
                      Our catalytic systems utilize advanced nano-structured precious metal formulations that increase 
                      surface area by 300%, dramatically improving conversion efficiency and reducing cold-start emissions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Nano-structured Substrate</span>
                          <p className="text-gray-300 text-sm">Maximizes surface area for optimal pollutant conversion</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Rapid Light-off Technology</span>
                          <p className="text-gray-300 text-sm">Reaches operating temperature 65% faster than standard catalysts</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Self-Regenerating Coating</span>
                          <p className="text-gray-300 text-sm">Proprietary materials resist fouling and maintain performance over time</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="monitoring">
              <div className="bg-[#0c2150] rounded-xl p-8 border border-blue-900/50">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Comprehensive Monitoring Solutions</h3>
                    <p className="text-gray-300 mb-6">
                      Our integrated monitoring system provides continuous real-time visibility into emission levels, 
                      system performance, and compliance status through intuitive dashboards and detailed analytics.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Multi-Point Sensing</span>
                          <p className="text-gray-300 text-sm">Strategic sensor placement captures complete system performance data</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Cloud Analytics Platform</span>
                          <p className="text-gray-300 text-sm">Secure, accessible dashboard with customizable reporting</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-blue-700 p-2 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">Predictive Diagnostics</span>
                          <p className="text-gray-300 text-sm">AI-driven system identifies potential issues before they affect performance</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative h-80 w-full rounded-xl overflow-hidden bg-[#071128] border border-blue-900/30">
                      {/* Dashboard visualization */}
                      <div className="absolute inset-0 p-4">
                        <div className="h-full w-full rounded-lg bg-[#051020] p-4 border border-blue-900/20">
                          {/* Chart mockup */}
                          <div className="mb-4">
                            <div className="h-4 w-32 bg-blue-900/50 rounded-full mb-2" />
                            <div className="h-24 w-full bg-[#071128] rounded-lg overflow-hidden relative">
                              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                                <motion.path
                                  d="M0,35 C10,20 20,25 30,15 C40,5 50,15 60,25 C70,30 80,15 90,10 L90,40 L0,40 Z"
                                  fill="rgba(59,130,246,0.2)"
                                  stroke="#3B82F6"
                                  strokeWidth="1"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 1 }}
                                />
                              </svg>
                              
                              {/* Moving dot on line */}
                              <motion.div
                                className="absolute h-2 w-2 rounded-full bg-blue-500"
                                animate={{
                                  left: ['0%', '100%'],
                                  top: ['88%', '50%', '25%', '62%', '25%'],
                                  opacity: [0, 1, 1, 1, 0]
                                }}
                                transition={{
                                  duration: 10,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Metrics mockup */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="bg-[#071128] p-3 rounded-lg border border-blue-900/20">
                                <div className="h-3 w-16 bg-blue-900/50 rounded-full mb-2" />
                                <div className="h-5 w-12 bg-blue-900/30 rounded-md" />
                              </div>
                            ))}
                          </div>
                          
                          {/* Table mockup */}
                          <div className="bg-[#071128] rounded-lg overflow-hidden border border-blue-900/20">
                            <div className="h-6 bg-blue-900/30 px-3 flex items-center">
                              <div className="h-2 w-24 bg-blue-900/50 rounded-full" />
                            </div>
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-6 px-3 flex items-center">
                                <div className="h-2 w-full bg-blue-900/20 rounded-full" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Integration Process Section */}
      <section 
        ref={processRef}
        className="py-20 bg-[#071128] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900 text-blue-200 hover:bg-blue-800">SEAMLESS IMPLEMENTATION</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Integration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven, structured approach to ensure flawless integration with minimal 
              disruption to your operations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-[27px] top-10 bottom-10 w-1 bg-blue-600/30 rounded-full md:left-1/2 md:-ml-0.5" />
              
              {/* Process steps */}
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative mb-12"
                >
                  <div className={`flex flex-col md:items-center md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Step number */}
                    <div className="absolute left-0 flex items-center justify-center w-14 h-14 bg-blue-700 rounded-full border-4 border-[#071128] z-10 md:left-1/2 md:-ml-7">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Step content */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}>
                      <div className="bg-[#0c2150] p-6 rounded-xl border border-blue-900/50 shadow-lg">
                        <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-[#0c2150] p-8 rounded-xl border border-blue-900/50 mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Emission Control Systems?</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={openModal}>
                  Request Integration Service
                </Button>
                {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Download Compatibility Guide
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials/Trusted By Section */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-[#0a1a3a]"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-900 text-blue-200 hover:bg-blue-800">SUCCESS STORIES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients have achieved through RECD integration services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "",
                quote: "Reduced our emissions by 82% while actually improving operational efficiency. The ROI was realized within 14 months.",
                industry: "Manufacturing",
                result: "82% Emission Reduction"
              },
              {
                company: "",
                quote: "EAMOT's RECD integration was seamless and caused zero downtime. Our compliance team now has complete confidence in our reports.",
                industry: "Energy",
                result: "Zero Implementation Downtime"
              },
              {
                company: "",
                quote: "The ability to monitor our emissions in real-time has transformed our operations and helped us meet international regulations with ease.",
                industry: "Maritime",
                result: "Full Regulatory Compliance"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0c2150] rounded-xl p-6 border border-blue-900/50 shadow-lg"
              >
                <div className="mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg mb-6 italic text-gray-200">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-white">{testimonial.company}</p>
                  <p className="text-sm text-gray-400">Industry: {testimonial.industry}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-sm font-medium">
                    {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-medium mb-8">Join hundreds of companies that have successfully integrated RECD technology</p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
              onClick={openModal}
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
