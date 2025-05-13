import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Engine, Wrench, BarChart, Settings, Clock, Activity, 
  AlertTriangle, Shield, CheckSquare, Zap, Calendar, FileCheck
} from "lucide-react";

export default function DieselGeneratorPage() {
  const [activeTab, setActiveTab] = useState("maintenance");
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: overviewRef, inView: overviewInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: approachRef, inView: approachInView } = useIntersectionObserver({ threshold: 0.2 });
  
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
        className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: heroInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4"
              >
                <Engine className="text-white h-8 w-8" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
                Diesel Generator <span className="text-accent">Services</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Professional diesel generator maintenance services for optimal performance, reliability, and longevity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#contact">Get A Quote</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Service Overview */}
      <section 
        ref={overviewRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: overviewInView ? 1 : 0, x: overviewInView ? 0 : -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Diesel Generator Experts</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Comprehensive Diesel Generator <span className="text-primary">Solutions</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our team of skilled technicians provides comprehensive maintenance services for all types of diesel generators. We ensure your generator is operating at peak performance levels, minimizing downtime and maximizing efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Routine inspections to identify potential issues before they cause problems
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Regular oil changes and filter replacements to maintain optimal performance
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Comprehensive performance testing to ensure reliability during power outages
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Expert repairs and part replacements when issues are identified
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#contact">Schedule Maintenance</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: overviewInView ? 1 : 0, scale: overviewInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://www.eamot.com/assets/img/services/1.jpg" 
                  alt="Diesel Generator Maintenance" 
                  className="rounded-lg shadow-lg w-full"
                />
                
                {/* Animated elements */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: overviewInView ? 1 : 0, y: overviewInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                      <Settings className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Expert Service</h4>
                      <p className="text-gray-600 text-sm">By certified technicians</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: overviewInView ? 1 : 0, x: overviewInView ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <Activity className="text-primary h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Tabs Section */}
      <section 
        id="services"
        ref={servicesRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Comprehensive <span className="text-primary">Generator Services</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a wide range of services to ensure your diesel generators operate efficiently and reliably whenever you need them.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="maintenance" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-transparent">
                <TabsTrigger 
                  value="maintenance" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'maintenance' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <Wrench className="w-5 h-5 mr-2 inline-block" />
                  Preventive Maintenance
                </TabsTrigger>
                <TabsTrigger 
                  value="repair" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'repair' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <Settings className="w-5 h-5 mr-2 inline-block" />
                  Repair Services
                </TabsTrigger>
                <TabsTrigger 
                  value="performance" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'performance' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <BarChart className="w-5 h-5 mr-2 inline-block" />
                  Performance Testing
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="maintenance" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <Wrench className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">Preventive Maintenance</h3>
                        <p className="text-gray-600 mb-6">
                          Regular scheduled maintenance to prevent breakdowns and ensure optimal performance of your diesel generators.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Oil and Filter Changes</span>
                              <p className="text-gray-600 text-sm">Regular oil analysis and timely changes to protect engine components</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Fuel System Inspection</span>
                              <p className="text-gray-600 text-sm">Thorough checks of fuel lines, filters, and injection systems</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Battery Maintenance</span>
                              <p className="text-gray-600 text-sm">Battery testing, cleaning, and proper charging to ensure reliable starts</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Cooling System Service</span>
                              <p className="text-gray-600 text-sm">Inspection and maintenance of radiators, hoses, and coolant</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Schedule Maintenance
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/service/service-04.jpg" 
                          alt="Preventive Maintenance" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Maintenance Plans</h4>
                            <p className="mb-4">Customized maintenance schedules based on your specific needs</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">Basic</h5>
                                <p className="text-sm">Quarterly service visits</p>
                              </div>
                              <div className="bg-primary/70 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">Premium</h5>
                                <p className="text-sm">Monthly service visits</p>
                              </div>
                              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">Enterprise</h5>
                                <p className="text-sm">Weekly inspections</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="repair" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <Settings className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">Repair Services</h3>
                        <p className="text-gray-600 mb-6">
                          Expert diagnostics and repairs to fix issues quickly and minimize downtime for your diesel generators.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Advanced Diagnostics</span>
                              <p className="text-gray-600 text-sm">Pinpoint exact issues with computerized diagnostic tools</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Component Replacement</span>
                              <p className="text-gray-600 text-sm">Quality OEM parts for all generator models and brands</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Emergency Services</span>
                              <p className="text-gray-600 text-sm">24/7 emergency repair services for critical power needs</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Engine Overhauls</span>
                              <p className="text-gray-600 text-sm">Complete engine rebuilds and major system overhauls</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Request Repair Service
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/gallery/service-03.jpg" 
                          alt="Repair Services" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Emergency Response</h4>
                            <p className="mb-4">Fast response times for urgent generator repairs</p>
                            
                            <div className="flex justify-center items-center gap-8 mt-6">
                              <div className="text-center">
                                <div className="text-3xl font-bold mb-1">2hr</div>
                                <div className="text-sm">Average response time</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold mb-1">24/7</div>
                                <div className="text-sm">On-call technicians</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold mb-1">100%</div>
                                <div className="text-sm">Service guarantee</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <BarChart className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">Performance Testing</h3>
                        <p className="text-gray-600 mb-6">
                          Comprehensive testing to ensure your generator will perform when needed and operate at peak efficiency.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Load Bank Testing</span>
                              <p className="text-gray-600 text-sm">Simulate real-world loads to verify generator capacity</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Performance Analysis</span>
                              <p className="text-gray-600 text-sm">Detailed analysis of output, efficiency, and fuel consumption</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Emissions Testing</span>
                              <p className="text-gray-600 text-sm">Verify compliance with environmental regulations</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Transfer Switch Testing</span>
                              <p className="text-gray-600 text-sm">Ensure proper operation of automatic transfer switches</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Schedule Testing
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/service/service-02.jpg" 
                          alt="Performance Testing" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Performance Metrics</h4>
                            <p className="mb-4">Comprehensive analysis of your generator's performance</p>
                            
                            <div className="grid grid-cols-2 gap-4 mt-6">
                              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-left">
                                <h5 className="text-lg font-semibold mb-2">Efficiency Analysis</h5>
                                <ul className="space-y-1 text-sm">
                                  <li>• Fuel consumption rates</li>
                                  <li>• Power output verification</li>
                                  <li>• Heat rate calculation</li>
                                </ul>
                              </div>
                              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-left">
                                <h5 className="text-lg font-semibold mb-2">Reliability Testing</h5>
                                <ul className="space-y-1 text-sm">
                                  <li>• Start-up response time</li>
                                  <li>• Extended run verification</li>
                                  <li>• Load acceptance rate</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section 
        ref={approachRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: approachInView ? 1 : 0, y: approachInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Methodology</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              How We <span className="text-primary">Deliver Excellence</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our methodical approach ensures your diesel generators receive the highest quality service.
            </p>
          </motion.div>
          
          <div className="flex flex-col max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: approachInView ? 1 : 0, x: approachInView ? 0 : -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-6 flex"
              >
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Comprehensive Assessment</h3>
                  </div>
                  <p className="text-gray-600 ml-16">
                    We begin with a thorough inspection of your diesel generator system to identify current and potential issues.
                  </p>
                </div>
              </motion.div>
              
              <div className="hidden md:block md:col-span-6"></div>
              
              {/* Step 2 */}
              <div className="hidden md:block md:col-span-6"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: approachInView ? 1 : 0, x: approachInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-6 flex"
              >
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Customized Service Plan</h3>
                  </div>
                  <p className="text-gray-600 ml-16">
                    We develop a tailored service plan based on your generator's condition, usage patterns, and your specific requirements.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: approachInView ? 1 : 0, x: approachInView ? 0 : -50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:col-span-6 flex"
              >
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Expert Service Execution</h3>
                  </div>
                  <p className="text-gray-600 ml-16">
                    Our certified technicians perform all maintenance and repairs using advanced tools and genuine parts.
                  </p>
                </div>
              </motion.div>
              
              <div className="hidden md:block md:col-span-6"></div>
              
              {/* Step 4 */}
              <div className="hidden md:block md:col-span-6"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: approachInView ? 1 : 0, x: approachInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="md:col-span-6 flex"
              >
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Performance Verification</h3>
                  </div>
                  <p className="text-gray-600 ml-16">
                    After service completion, we conduct thorough testing to ensure your generator performs to specifications.
                  </p>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: approachInView ? 1 : 0, y: approachInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="md:col-span-12 flex justify-center"
              >
                <div className="bg-primary-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md">
                  <div className="flex items-start mb-4 justify-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Ongoing Support & Monitoring</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    We provide continuous support with detailed reports, scheduled follow-ups, and remote monitoring options.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                Ready to Ensure Your Generator's Reliability?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us today to schedule a consultation with our diesel generator experts. We'll help you develop a maintenance plan that fits your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                  <a href="#contact">Schedule Consultation</a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                  <a href="tel:8970001110">Call Now: 897 000 111 02</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}