import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, CircuitBoard, Zap, Shield, 
  Package, Truck, Clock, CheckCircle, Search,
  Settings, Wrench, BarChart, AlertTriangle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function RECDSparesPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: partsRef, inView: partsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 md:py-28 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <span className="bg-white/20 p-3 rounded-lg mr-4">
                <CircuitBoard className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                RECD <span className="text-accent">Spare Parts</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Genuine and OEM-compatible replacement parts for all Real-time Emission Control Devices (RECD),
              ensuring compliance with emission standards and optimal performance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request RECD Parts Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#parts">Browse RECD Components</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Service Features */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive RECD Parts Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Complete RECD <span className="text-primary">Sourcing Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized RECD parts services include all components for emission control devices,
              ensuring regulatory compliance and optimal system performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-12 w-12 text-primary" />,
                title: "Control Unit Components",
                description: "Processor modules, memory units, interface circuits, and other electronic components for RECD control systems."
              },
              {
                icon: <CircuitBoard className="h-12 w-12 text-primary" />,
                title: "Sensor Replacements",
                description: "High-quality gas analyzers, NOx sensors, particulate matter sensors, and other monitoring components."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Compliance Guarantee",
                description: "Components that meet or exceed regulatory requirements for emission control and monitoring accuracy."
              },
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Technical Advisors",
                description: "Specialist technicians to help identify the exact parts required, preventing costly ordering mistakes."
              },
              {
                icon: <Package className="h-12 w-12 text-primary" />,
                title: "Inventory Management",
                description: "RECD parts inventory management solutions, including critical spares lists and scheduled replenishment."
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Installation & Calibration",
                description: "Professional installation services with proper calibration to ensure accurate emissions reporting."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white w-20 h-20 rounded-lg shadow-md flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Parts Categories */}
      <section 
        id="parts"
        ref={partsRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive RECD Parts Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              RECD <span className="text-primary">Component Categories</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our extensive range of Real-time Emission Control Device parts for all major systems.
            </p>
          </div>
          
          <Tabs defaultValue="sensors" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="sensors" className="px-6 py-3 rounded-lg">Sensors & Analyzers</TabsTrigger>
              <TabsTrigger value="controllers" className="px-6 py-3 rounded-lg">Control Systems</TabsTrigger>
              <TabsTrigger value="communication" className="px-6 py-3 rounded-lg">Communication</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sensors" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Cpu className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Sensors & Analyzers</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We source high-quality sensor components for all RECD systems, ensuring accurate 
                        emissions monitoring and regulatory compliance.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Sensor Solutions</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Precision Calibration</span>
                                <p className="text-sm text-gray-400">All sensors supplied with calibration certificates</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Extended Warranty</span>
                                <p className="text-sm text-gray-400">Up to 24-month warranty on select sensor components</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Compliance Support</span>
                                <p className="text-sm text-gray-400">Documentation for regulatory submissions</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Sensor Components</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Gas Analysis Sensors</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">NOx sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">CO/CO2 analyzers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">O2 sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">HC/NMHC analyzers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Multi-gas analyzers</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Particulate Matter Monitoring</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">PM2.5 sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">PM10 analyzers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Opacity meters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Particle counters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Filter systems</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Flow & Pressure Sensors</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Mass flow meters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Pressure transducers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Differential pressure sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Venturi flow meters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Ultrasonic flow meters</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Environmental Sensors</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Temperature sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Humidity sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Ambient pressure sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Wind speed/direction</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Weather stations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="controllers" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Settings className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Control Systems</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We supply advanced control system components for all RECD installations,
                        ensuring reliable data acquisition and regulatory reporting.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Control System Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Pre-programmed Options</span>
                                <p className="text-sm text-gray-400">Controllers with pre-loaded calibration data</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Legacy Support</span>
                                <p className="text-sm text-gray-400">Components for older RECD systems</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Configuration Services</span>
                                <p className="text-sm text-gray-400">Professional setup and programming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Control System Components</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Main Control Units</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">CEMS controllers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data acquisition systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">PLC controllers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Industrial computers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">HMI panels</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">I/O Components</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Analog input modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Digital I/O modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Signal conditioners</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Relay modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Terminal blocks</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Power Components</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power supplies</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">UPS backup systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Surge protectors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Voltage regulators</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery backup systems</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Enclosures & Infrastructure</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">IP-rated enclosures</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Climate control systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Mounting hardware</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Cable management</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Earthing equipment</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Wrench className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Programming & Configuration Services</h4>
                        </div>
                        <p className="text-gray-600">
                          Our technical team can pre-configure control systems with your specific parameters and 
                          provide on-site commissioning services for seamless integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="communication" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Communication Systems</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We provide reliable communication components for connecting RECD systems
                        to regulatory agencies and remote monitoring platforms.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Communication Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Secure Data Transfer</span>
                                <p className="text-sm text-gray-400">Encrypted communication protocols</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Redundant Systems</span>
                                <p className="text-sm text-gray-400">Backup communication paths</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Integration Support</span>
                                <p className="text-sm text-gray-400">Protocol converters and gateways</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Communication Components</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Network Equipment</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Industrial routers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Ethernet switches</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Cellular modems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Firewall appliances</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">VPN hardware</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Interface Modules</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Serial converters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Modbus gateways</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Protocol converters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">OPC servers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data loggers</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Wireless Components</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Wi-Fi access points</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">RF transmitters/receivers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Bluetooth modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">LoRa/LoRaWAN devices</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Satellite modems</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Cabling & Connectivity</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Industrial Ethernet cables</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Fiber optic components</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">IP-rated connectors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Lightning protection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Junction boxes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Compatibility Note</h4>
                        </div>
                        <p className="text-gray-600">
                          Our technical team will verify compatibility with your existing RECD system and regulatory 
                          requirements to ensure proper data transmission and compliance.
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
      
      {/* Service Process */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Simplified Procurement Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              How Our <span className="text-primary">RECD Parts Service Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you receive the right RECD components with minimal hassle and downtime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "Identification",
                description: "Provide your RECD model, serial number, or component details. Our technical team will help identify exact part requirements if needed."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Verification",
                description: "We confirm compatibility with your specific RECD system and regulatory requirements to ensure proper functioning and compliance."
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Fulfillment",
                description: "After approval, we source and ship your components with express delivery options for urgent requirements."
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary" />,
                title: "Installation",
                description: "Optional professional installation services including recalibration and verification to ensure regulatory compliance."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%-24px)] w-full h-0.5 bg-primary/30 z-0"></div>
                )}
                <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
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
              Request RECD Components
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">RECD Parts Specialists</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request a quote or information about our RECD components and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Parts Request Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Required Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>RECD make and model number</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Serial number (if available)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Specific part details or issue description</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Regulatory requirements and deadlines</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Contact Methods</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>Rapid response technical support</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-5 w-5 mr-3" />
                          <span>Priority shipping for compliance deadlines</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 mr-3" />
                          <span>Compliance documentation provided</span>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
                      <label htmlFor="modelInfo" className="block text-sm font-medium text-gray-700 mb-1">RECD Model & Serial Number *</label>
                      <input
                        type="text"
                        id="modelInfo"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="e.g., CEMS-1000, SN: 202345-ABC"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="partDetails" className="block text-sm font-medium text-gray-700 mb-1">Parts Required / Issue Description *</label>
                      <textarea
                        id="partDetails"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe the RECD components you need or any specific regulatory requirements..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
                      <select
                        id="urgency"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                      >
                        <option value="standard">Standard (3-5 business days)</option>
                        <option value="priority">Priority (1-2 business days)</option>
                        <option value="compliance">Compliance Deadline (Urgent)</option>
                        <option value="planned">Planned (Future scheduled date)</option>
                      </select>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white">
                        Submit Parts Request
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