import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, BarChart4, Cpu, Server, Wrench, Shield, 
  Clock, ArrowRight, CheckCircle, Gauge, Activity, Calendar,
  Zap, BarChart, FileCheck, ClipboardCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactModal from '@/components/Popup/ContectModal';

const RECDIntegrationPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: comparisonRef, inView: comparisonInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: metricsRef, inView: metricsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with 3D Elements */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden"
      >
        {/* Background layer with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80 z-10"></div>
          <img
            src="/images/recd-installation.jpg"
            alt="RECD Installation"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
        </div>
        
        {/* 3D floating elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -15 }}
            animate={heroInView ? { opacity: 0.6, y: 0, rotate: -5 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute w-64 h-48 bg-blue-500/10 backdrop-blur-sm rounded-lg border border-blue-500/30 top-[20%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-4">
              <div className="h-3 w-24 bg-blue-400/30 rounded-full mb-3"></div>
              <div className="h-2 w-48 bg-blue-400/20 rounded-full mb-2"></div>
              <div className="h-2 w-40 bg-blue-400/20 rounded-full mb-2"></div>
              <div className="h-2 w-32 bg-blue-400/20 rounded-full"></div>
              <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Server className="h-4 w-4 text-blue-300" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 10 }}
            animate={heroInView ? { opacity: 0.6, y: 0, rotate: 5 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute w-56 h-40 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/30 top-[60%] left-[65%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-4">
              <div className="h-3 w-16 bg-green-400/30 rounded-full mb-3"></div>
              <div className="h-12 w-full bg-green-400/10 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-green-300" />
              </div>
              <div className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Cpu className="h-4 w-4 text-green-300" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 5 }}
            animate={heroInView ? { opacity: 0.6, y: 0, rotate: -3 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute w-48 h-36 bg-purple-500/10 backdrop-blur-sm rounded-lg border border-purple-500/30 top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="h-3 w-16 bg-purple-400/30 rounded-full"></div>
                <Shield className="h-4 w-4 text-purple-300" />
              </div>
              <div className="h-2 w-32 bg-purple-400/20 rounded-full mb-2"></div>
              <div className="h-2 w-24 bg-purple-400/20 rounded-full mb-2"></div>
              <div className="h-6 w-full mt-4 bg-purple-400/10 rounded-md"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 flex min-h-[90vh] items-center relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-600/20 text-blue-400"
            >
              <Settings className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Zero-Downtime Implementation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Seamless RECD <span className="text-blue-500">Installation</span> & Integration
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Transform your regulatory compliance journey with our revolutionary installation approach. 
              Unlike traditional integrators that compromise generator performance, our proprietary methodology 
              delivers fully certified emission control with enhanced performance and zero operational disruption.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule Zero-Downtime Implementation
              </Button>
              {/* <Button variant="outline" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Our Methodology
              </Button> */}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Key Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Revolutionary Benefits
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Unlike traditional RECD implementations, our approach delivers significant advantages
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Downtime",
                description: "100% generator availability throughout the entire implementation process",
                icon: <Clock className="h-10 w-10 text-blue-500" />,
                image: "/images/zero-downtime.jpg",
                color: "from-blue-900/40 to-blue-800/20"
              },
              {
                title: "Performance Boost",
                description: "2-4% improved fuel efficiency while achieving full emission compliance",
                icon: <Gauge className="h-10 w-10 text-green-500" />,
                image: "/images/improved-performance.jpg",
                color: "from-green-900/40 to-green-800/20"
              },
              {
                title: "Extended Equipment Life",
                description: "15-20% longer generator operational life through optimized integration",
                icon: <Zap className="h-10 w-10 text-purple-500" />,
                image: "/images/extended-life.jpg",
                color: "from-purple-900/40 to-purple-800/20"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className={`relative rounded-xl overflow-hidden group`}
              >
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 bg-gradient-to-b ${benefit.color} mix-blend-multiply`}></div>
                  {/* <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  /> */}
                </div>
                
                <div className="relative z-10 p-6 flex flex-col h-80">
                  <div className="mt-auto">
                    <div className="w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-sm flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Benefits <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Implementation Process */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 40 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              OUR METHODOLOGY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              8-Phase Implementation Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our proprietary methodology ensures flawless implementation with zero disruption
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Site Assessment",
                description: "Comprehensive analysis of your facility and equipment",
                icon: <FileCheck className="h-6 w-6 text-blue-500" />,
                delay: 0.5
              },
              {
                number: "02",
                title: "Custom Engineering",
                description: "Tailored design optimized for your specific requirements",
                icon: <Settings className="h-6 w-6 text-blue-500" />,
                delay: 0.6
              },
              {
                number: "03",
                title: "Phased Installation",
                description: "Zero-downtime implementation with continuous operation",
                icon: <Wrench className="h-6 w-6 text-blue-500" />,
                delay: 0.7
              },
              {
                number: "04",
                title: "Precision Calibration",
                description: "Performance optimization for maximum efficiency",
                icon: <Gauge className="h-6 w-6 text-blue-500" />,
                delay: 0.8
              },
              {
                number: "05",
                title: "Monitoring Integration",
                description: "Seamless connection with data acquisition systems",
                icon: <BarChart className="h-6 w-6 text-blue-500" />,
                delay: 0.9
              },
              {
                number: "06",
                title: "Compliance Testing",
                description: "78-point protocol exceeding regulatory requirements",
                icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
                delay: 1.0
              },
              {
                number: "07",
                title: "Documentation",
                description: "Comprehensive audit-ready compliance package",
                icon: <FileCheck className="h-6 w-6 text-blue-500" />,
                delay: 1.1
              },
              {
                number: "08",
                title: "Certification",
                description: "100% guaranteed regulatory approval and validation",
                icon: <Shield className="h-6 w-6 text-blue-500" />,
                delay: 1.2
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: phase.delay }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute -top-2 -left-2 text-7xl font-bold text-slate-700 opacity-40 select-none">
                  {phase.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4">
                    {phase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-slate-400">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Comparison Tab Section */}
      <motion.section
        ref={comparisonRef}
        initial={{ opacity: 0, y: 40 }}
        animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              See the Difference
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              How our implementation approach compares to traditional methods
            </motion.p>
          </div>
          
          <Tabs defaultValue="downtime" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-transparent">
              <TabsTrigger value="downtime" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Operational Impact
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Performance Effect
              </TabsTrigger>
              <TabsTrigger value="compliance" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Compliance Guarantee
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="downtime" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Zero Operational Impact</h3>
                  <p className="text-slate-300 mb-6">
                    While traditional installations require complete generator shutdown for 3-5 days, our revolutionary 
                    phased implementation maintains 100% generator availability throughout the entire process.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Zero production or revenue losses during installation",
                      "No need for temporary power arrangements",
                      "Seamless implementation with no operational disruption",
                      "Proprietary parallel installation methodology",
                      "Maintain critical systems throughout the process"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-blue-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                    Read Zero-Downtime Case Study
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                  {/* <img 
                    src="/images/zero-operational-impact.jpg" 
                    alt="Zero Operational Impact" 
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-blue-400 font-semibold">Zero-Downtime Implementation</span>
                    </div>
                    <p className="text-white text-sm">Continuous operations during RECD installation process</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img 
                    src="/images/performance-enhancement.jpg" 
                    alt="Performance Enhancement" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-green-400 font-semibold">Performance Enhancement</span>
                    </div>
                    <p className="text-white text-sm">Improved efficiency with RECD integration</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-white">Performance Enhancement</h3>
                  <p className="text-slate-300 mb-6">
                    Unlike standard installations that reduce generator efficiency by 3-8%, our advanced 
                    integration actually improves fuel efficiency by 2-4% while achieving full emission compliance.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Proprietary backpressure reduction technology",
                      "Advanced combustion optimization algorithms",
                      "Precision-engineered flow dynamics",
                      "Thermal management system integration",
                      "Continuous performance monitoring and adjustment"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-green-900 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">
                    View Performance Data
                  </Button> */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="compliance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Bulletproof Compliance</h3>
                  <p className="text-slate-300 mb-6">
                    We offer the industry's only written guarantee of continuous regulatory compliance, 
                    backed by our 24/7 monitoring and rapid response protocols.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "100% approval guarantee for all regulatory submissions",
                      "Comprehensive 78-point testing protocol",
                      "Continuous compliance monitoring with alerts",
                      "Documentation package exceeding regulatory requirements",
                      "Single-source accountability for all compliance matters"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center">
                            <Shield className="h-3 w-3 text-purple-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">
                    Download Compliance Guarantee
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img 
                    src="/images/compliance-guarantee.jpg" 
                    alt="Compliance Guarantee" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-purple-400 font-semibold">Compliance Guaranteed</span>
                    </div>
                    <p className="text-white text-sm">Industry's only written compliance guarantee</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      
      {/* Features Grid */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              PREMIUM CAPABILITIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Advanced Integration Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our comprehensive approach includes advanced capabilities not available from other providers
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="h-6 w-6 text-blue-500" />,
                title: 'Turn-key RECD Implementation',
                description: 'Our specialized technicians handle every aspect of installation using our proprietary 8-phase methodology that ensures flawless implementation with zero generator downtime.'
              },
              {
                icon: <BarChart4 className="h-6 w-6 text-blue-500" />,
                title: 'Comprehensive Monitoring Integration',
                description: 'We seamlessly connect all emission sensors with our state-of-the-art data acquisition systems, providing real-time visibility and advanced analytics through a unified dashboard.'
              },
              {
                icon: <Cpu className="h-6 w-6 text-blue-500" />,
                title: 'Precision Control System Optimization',
                description: 'Our engineers meticulously calibrate your system using proprietary algorithms that deliver maximum emission reduction while enhancing generator performance by up to 4%.'
              },
              {
                icon: <Server className="h-6 w-6 text-blue-500" />,
                title: 'Military-Grade Data Transmission',
                description: 'Our secure, triple-redundant communication infrastructure ensures 99.99% uptime for PCB data transmission with end-to-end encryption and automatic failover systems.'
              },
              {
                icon: <Wrench className="h-6 w-6 text-blue-500" />,
                title: 'Rigorous Compliance Verification',
                description: 'Our 78-point testing protocol exceeds regulatory requirements by 200%, ensuring your system not only meets current standards but anticipates future regulatory changes.'
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-500" />,
                title: 'Guaranteed Certification Success',
                description: 'Our certification management includes a 100% approval guarantee - we handle all documentation, inspections, and regulatory interactions until your system is fully certified.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 h-full hover:border-blue-600/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 group-hover:bg-blue-900/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Performance Metrics */}
      <motion.section
        ref={metricsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-blue-600/20 to-blue-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Generator Availability" },
              { value: "+4%", label: "Efficiency Improvement" },
              { value: "500+", label: "Successful Implementations" },
              { value: "0", label: "Regulatory Penalties" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={metricsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
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
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 -mb-20 -ml-20"></div>
          <svg width="100%" height="100%" className="absolute inset-0 opacity-50">
            <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="5" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Eliminate Compliance Headaches Forever
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Join the 500+ organizations that have achieved guaranteed regulatory compliance without 
              sacrificing performance or productivity through our unique implementation approach.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="#" onClick={openModal}>Schedule Your Zero-Downtime Implementation</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RECDIntegrationPage;