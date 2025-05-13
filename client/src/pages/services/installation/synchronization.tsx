import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Gauge, Zap, BarChart, Settings, Activity, CheckCircle, 
  RefreshCw, Shield, FileText, Clock, AlertTriangle, Check
} from "lucide-react";

export default function SynchronizationPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: overviewRef, inView: overviewInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: testingRef, inView: testingInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  
  React.useEffect(() => {
    if (testingInView) {
      const timer = setInterval(() => {
        setLoadProgress(oldProgress => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          return Math.min(oldProgress + 2, 100);
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [testingInView]);
  
  React.useEffect(() => {
    let timeout;
    if (testingInView) {
      timeout = setTimeout(() => {
        setCurrentStep(s => (s % 4) + 1);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [testingInView, currentStep]);

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
                <RefreshCw className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Synchronization & <span className="text-accent">Load Testing</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Expert generator synchronization and comprehensive load testing services to 
              ensure your power systems perform reliably when you need them most.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request Service</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#testing">View Load Testing</a>
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
                <span className="font-semibold">Comprehensive Services</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Generator Synchronization & <span className="text-primary">Load Testing</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our expert technicians provide specialized services for complex multi-generator setups and comprehensive load testing to verify system performance under real-world conditions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Generator Synchronization</span> - Expert configuration and commissioning of parallel generator systems for optimized load sharing and redundancy.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Resistive Load Bank Testing</span> - Verify generator capacity and performance using precision resistive load banks under controlled conditions.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Reactive Load Testing</span> - Comprehensive testing with inductive and capacitive loads to simulate real-world power factor conditions.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Transfer Switch Testing</span> - Verification of automatic transfer switches for seamless transition between power sources.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <a href="#contact">Schedule Testing</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: overviewInView ? 1 : 0, x: overviewInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://www.eamot.com/assets/img/service/service-04.jpg" 
                alt="Generator Synchronization" 
                className="rounded-lg shadow-lg w-full"
              />
              
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-black/50 p-8 w-full h-full flex flex-col items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 max-w-md">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
                      <Gauge className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Load Testing</h3>
                      <p className="text-sm opacity-90">Verify capacity & performance</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
                      <RefreshCw className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Synchronization</h3>
                      <p className="text-sm opacity-90">Parallel operation setup</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
                      <Activity className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Performance</h3>
                      <p className="text-sm opacity-90">System efficiency</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center">
                      <Shield className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Reliability</h3>
                      <p className="text-sm opacity-90">Enhanced redundancy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section 
        ref={benefitsRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our synchronization and load testing services deliver significant advantages for your 
              power infrastructure, ensuring optimal performance when you need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Enhanced Reliability",
                description: "Parallel operation increases system reliability through redundancy, ensuring continuous power even if one generator fails."
              },
              {
                icon: <Activity className="h-12 w-12 text-primary" />,
                title: "Improved System Stability",
                description: "Proper synchronization ensures voltage and frequency stability, protecting sensitive equipment from power fluctuations."
              },
              {
                icon: <BarChart className="h-12 w-12 text-primary" />,
                title: "Increased Capacity",
                description: "Synchronized generators provide greater combined capacity to handle peak loads without overloading individual units."
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Optimized Load Sharing",
                description: "Equal distribution of load across multiple generators improves efficiency and extends equipment lifespan."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Seamless Power Transition",
                description: "Tested transfer switches ensure uninterrupted power supply during utility outages with minimal transition time."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-primary" />,
                title: "Verified Performance",
                description: "Comprehensive load testing confirms your power system will perform as expected under real-world conditions."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-lg shadow-sm flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Load Testing Process */}
      <section 
        id="testing"
        ref={testingRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Testing Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Comprehensive <span className="text-primary">Load Testing Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured approach to load testing ensures thorough evaluation and verification of your power system's capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: testingInView ? 1 : 0, y: testingInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              <Tabs defaultValue="resistive" className="w-full">
                <TabsList className="w-full flex justify-center mb-8">
                  <TabsTrigger value="resistive" className="px-6 py-2">
                    Resistive Load Testing
                  </TabsTrigger>
                  <TabsTrigger value="reactive" className="px-6 py-2">
                    Reactive Load Testing
                  </TabsTrigger>
                  <TabsTrigger value="transfer" className="px-6 py-2">
                    Transfer Testing
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="resistive" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-4">Resistive Load Bank Testing</h3>
                      <p className="text-gray-600 mb-6">
                        Resistive load testing verifies your generator's ability to handle various load levels, ensuring it can deliver rated power output when needed.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Testing Load Level</span>
                            <span className="text-sm font-medium">{loadProgress}%</span>
                          </div>
                          <Progress value={loadProgress} className="h-2" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Parameters Monitored:</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">Voltage stability</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">Frequency regulation</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">Oil pressure & temperature</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">Coolant temperature</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                <span className="text-sm">Fuel consumption rate</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">Test Sequence:</h4>
                            <ol className="space-y-2">
                              <li className={`flex items-center ${currentStep >= 1 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                                <span className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                  1
                                </span>
                                <span className="text-sm">25% of rated load (15 minutes)</span>
                              </li>
                              <li className={`flex items-center ${currentStep >= 2 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                                <span className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                  2
                                </span>
                                <span className="text-sm">50% of rated load (30 minutes)</span>
                              </li>
                              <li className={`flex items-center ${currentStep >= 3 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                                <span className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center text-xs ${currentStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                  3
                                </span>
                                <span className="text-sm">75% of rated load (45 minutes)</span>
                              </li>
                              <li className={`flex items-center ${currentStep >= 4 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                                <span className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center text-xs ${currentStep >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                  4
                                </span>
                                <span className="text-sm">100% of rated load (60 minutes)</span>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reactive" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-4">Reactive Load Testing</h3>
                      <p className="text-gray-600 mb-6">
                        Reactive load testing evaluates generator performance with loads having different power factors, simulating real-world equipment behavior with inductive and capacitive components.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Key Parameters Tested:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Power Factor Response</span>
                                <p className="text-xs text-gray-500">Performance with varying power factors (0.8 to unity)</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Voltage Regulation</span>
                                <p className="text-xs text-gray-500">Maintaining stable voltage under varying reactive loads</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Excitation System Performance</span>
                                <p className="text-xs text-gray-500">Response of alternator's excitation systems</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Applications:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Motor-Heavy Environments</span>
                                <p className="text-xs text-gray-500">Facilities with numerous motors, pumps, HVAC systems</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Data Centers</span>
                                <p className="text-xs text-gray-500">Mixed IT loads with UPS systems and cooling</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium text-sm">Industrial Facilities</span>
                                <p className="text-xs text-gray-500">Manufacturing with varied electrical equipment</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="transfer" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-4">Transfer Switch Testing</h3>
                      <p className="text-gray-600 mb-6">
                        Verifies proper operation of automatic transfer switches (ATS) to ensure seamless transition between power sources during outages or scheduled maintenance.
                      </p>
                      
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-3">Testing Procedure:</h4>
                        <ol className="space-y-3">
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center mr-2 mt-1">1</span>
                            <div>
                              <span className="font-medium">Source Verification</span>
                              <p className="text-sm text-gray-600">Confirm proper voltage, phase rotation and frequency from both sources</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center mr-2 mt-1">2</span>
                            <div>
                              <span className="font-medium">Normal-to-Emergency Transfer</span>
                              <p className="text-sm text-gray-600">Simulate utility power loss and verify proper transfer to generator power</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center mr-2 mt-1">3</span>
                            <div>
                              <span className="font-medium">Emergency-to-Normal Transfer</span>
                              <p className="text-sm text-gray-600">Test return to utility power after restoration with appropriate time delays</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center mr-2 mt-1">4</span>
                            <div>
                              <span className="font-medium">Full Load Transfer Testing</span>
                              <p className="text-sm text-gray-600">Perform transfers under full load conditions to verify equipment performance</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                        <div>
                          <h4 className="font-medium">Key Metrics Verified:</h4>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2">
                            <span className="text-sm flex items-center">
                              <Clock className="h-3 w-3 text-primary mr-1" /> Transfer time
                            </span>
                            <span className="text-sm flex items-center">
                              <Activity className="h-3 w-3 text-primary mr-1" /> Voltage dips
                            </span>
                            <span className="text-sm flex items-center">
                              <Check className="h-3 w-3 text-primary mr-1" /> Proper sequencing
                            </span>
                            <span className="text-sm flex items-center">
                              <AlertTriangle className="h-3 w-3 text-primary mr-1" /> Alarm functions
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">99.9%</div>
                          <div className="text-xs text-gray-500">Reliability Target</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: testingInView ? 1 : 0, y: testingInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-900 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Load Testing Benefits</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Verified Performance</span>
                      <span className="text-sm">98%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Issue Detection</span>
                      <span className="text-sm">95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">System Reliability</span>
                      <span className="text-sm">99%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Manufacturer Compliance</span>
                      <span className="text-sm">100%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h4 className="font-bold text-lg">Comprehensive Reports</h4>
                        <p className="text-sm text-gray-300">Detailed documentation of all test results and recommendations</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Shield className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h4 className="font-bold text-lg">Warranty Protection</h4>
                        <p className="text-sm text-gray-300">Maintain manufacturer warranty requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                Ensure Your Power System's Performance and Reliability
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact our expert team to schedule synchronization and load testing services for your generators.
                Verify your system's performance before you need to rely on it.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="#contact">Schedule Testing Service</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="tel:8970001110">Call Us: 897 000 111 02</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}