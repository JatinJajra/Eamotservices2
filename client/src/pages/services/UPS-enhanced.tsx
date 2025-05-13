import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Battery, Wrench, BatteryCharging, Settings, AlertTriangle, Shield, 
  Zap, CheckSquare, Activity, BarChart, FileCheck, LucideIcon
} from "lucide-react";

// Feature icon component
interface FeatureIconProps {
  Icon: LucideIcon;
  title: string;
  value: number;
  animated?: boolean;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, title, value, animated = true }) => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animated]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2 relative">
        <Icon className="w-8 h-8 text-primary" />
        <svg className="absolute -top-1 -right-1 -bottom-1 -left-1 h-[calc(100%+8px)] w-[calc(100%+8px)]">
          <circle
            className="text-primary/20"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
          />
          <circle
            className="text-primary"
            strokeWidth="2"
            strokeDasharray={188.5}
            strokeDashoffset={188.5 - (188.5 * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default function UPSPage() {
  const [activeTab, setActiveTab] = useState("battery");
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: overviewRef, inView: overviewInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: comparisonRef, inView: comparisonInView } = useIntersectionObserver({ threshold: 0.2 });
  
  const batteryHealth = 85;
  const [batteryProgress, setBatteryProgress] = useState(0);
  
  React.useEffect(() => {
    if (overviewInView) {
      const timer = setTimeout(() => {
        setBatteryProgress(batteryHealth);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [overviewInView, batteryHealth]);

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
                <Battery className="text-white h-8 w-8" />
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
                UPS <span className="text-accent">Systems & Services</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Comprehensive UPS solutions for uninterrupted power supply and maximum system reliability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#contact">Request UPS Service</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#services">View UPS Solutions</a>
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
                <span className="font-semibold">UPS System Specialists</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Comprehensive UPS <span className="text-primary">Solutions</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our expert technicians provide complete UPS maintenance and repair services to ensure your critical systems never lose power. We help maximize the life and reliability of your UPS systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Regular inspections and testing to ensure optimal UPS performance
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Battery testing, maintenance and replacement to prevent power failures
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    System upgrades and capacity planning for growing power needs
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Emergency repair services to minimize downtime during critical failures
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#contact">Schedule UPS Service</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: overviewInView ? 1 : 0, scale: overviewInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">UPS System Health</h3>
                    <p className="text-gray-600 text-sm mb-4">Real-time monitoring ensures optimal performance</p>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Battery Health</span>
                          <span className="text-sm font-medium text-gray-700">{batteryProgress}%</span>
                        </div>
                        <Progress value={batteryProgress} className="h-2 w-full" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">System Efficiency</span>
                          <span className="text-sm font-medium text-gray-700">92%</span>
                        </div>
                        <Progress value={92} className="h-2 w-full" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Load Capacity</span>
                          <span className="text-sm font-medium text-gray-700">64%</span>
                        </div>
                        <Progress value={64} className="h-2 w-full" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-40 h-40 border-8 border-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary-50 rounded-full flex items-center justify-center">
                        <Battery className="h-16 w-16 text-primary" />
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full">
                        <svg className="w-full h-full" viewBox="0 0 160 160">
                          <circle
                            className="text-primary"
                            strokeWidth="8"
                            strokeDasharray={472}
                            strokeDashoffset={472 - (472 * batteryProgress) / 100}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="75"
                            cx="80"
                            cy="80"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <FeatureIcon Icon={Battery} title="Battery" value={85} />
                  <FeatureIcon Icon={Zap} title="Power" value={96} />
                  <FeatureIcon Icon={Activity} title="Performance" value={90} />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: overviewInView ? 1 : 0, y: overviewInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                      <Shield className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">100% Reliability</h4>
                      <p className="text-gray-600 text-sm">Zero downtime solutions</p>
                    </div>
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
              <span className="font-semibold">Our UPS Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Comprehensive <span className="text-primary">UPS Solutions</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end UPS services to ensure your critical systems always have the power they need.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs defaultValue="battery" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-transparent">
                <TabsTrigger 
                  value="battery" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'battery' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <BatteryCharging className="w-5 h-5 mr-2 inline-block" />
                  Battery Management
                </TabsTrigger>
                <TabsTrigger 
                  value="maintenance" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'maintenance' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <Wrench className="w-5 h-5 mr-2 inline-block" />
                  UPS Maintenance
                </TabsTrigger>
                <TabsTrigger 
                  value="emergency" 
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'emergency' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                >
                  <AlertTriangle className="w-5 h-5 mr-2 inline-block" />
                  Emergency Services
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="battery" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <BatteryCharging className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">Battery Management</h3>
                        <p className="text-gray-600 mb-6">
                          Expert battery maintenance and replacement services to ensure power when you need it. Our comprehensive battery services extend the life of your UPS system.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Battery Testing & Monitoring</span>
                              <p className="text-gray-600 text-sm">Regular load testing and advanced monitoring techniques</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Battery Replacement</span>
                              <p className="text-gray-600 text-sm">Expert replacement with OEM batteries for all UPS brands</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Battery Recycling</span>
                              <p className="text-gray-600 text-sm">Environmentally responsible disposal and recycling services</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Battery Life Extension</span>
                              <p className="text-gray-600 text-sm">Optimizing charging parameters and environment control</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Schedule Battery Service
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/service/service-01.jpg" 
                          alt="Battery Management" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Battery Technologies</h4>
                            <p className="mb-4">We service and supply all UPS battery types</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                              <div className="bg-primary/20 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">VRLA</h5>
                                <p className="text-sm">Valve Regulated Lead Acid batteries</p>
                                <div className="mt-3 text-center">
                                  <span className="text-2xl font-bold">3-5</span>
                                  <span className="text-xs block">year lifespan</span>
                                </div>
                              </div>
                              <div className="bg-accent/30 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">Lithium-Ion</h5>
                                <p className="text-sm">Advanced Li-ion battery technology</p>
                                <div className="mt-3 text-center">
                                  <span className="text-2xl font-bold">8-10</span>
                                  <span className="text-xs block">year lifespan</span>
                                </div>
                              </div>
                              <div className="bg-primary/20 p-4 rounded-lg backdrop-blur-sm">
                                <h5 className="text-lg font-semibold mb-2">Wet Cell</h5>
                                <p className="text-sm">Traditional flooded batteries</p>
                                <div className="mt-3 text-center">
                                  <span className="text-2xl font-bold">4-6</span>
                                  <span className="text-xs block">year lifespan</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="maintenance" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <Wrench className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">UPS Maintenance</h3>
                        <p className="text-gray-600 mb-6">
                          Scheduled maintenance services to extend UPS life and ensure reliability for your critical power systems.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Preventive Maintenance</span>
                              <p className="text-gray-600 text-sm">Regular scheduled inspections and service to prevent failures</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">System Cleaning</span>
                              <p className="text-gray-600 text-sm">Removal of dust and debris that can cause overheating</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Firmware Updates</span>
                              <p className="text-gray-600 text-sm">Installing the latest firmware to improve functionality</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Component Inspection</span>
                              <p className="text-gray-600 text-sm">Checking capacitors, fans, and other critical parts for wear</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Schedule Maintenance
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/services/3.jpg" 
                          alt="UPS Maintenance" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Maintenance Plans</h4>
                            <p className="mb-4">Customized maintenance plans for every need</p>
                            
                            <div className="mt-6">
                              <div className="flex items-center justify-between mb-6">
                                <div className="text-left flex-1">
                                  <h5 className="font-medium">Basic Plan</h5>
                                  <p className="text-sm opacity-75">Bi-annual service</p>
                                </div>
                                <div className="w-1/2 bg-white/20 h-2 rounded-full">
                                  <div className="bg-white h-2 rounded-full w-1/3"></div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between mb-6">
                                <div className="text-left flex-1">
                                  <h5 className="font-medium">Enhanced Plan</h5>
                                  <p className="text-sm opacity-75">Quarterly service</p>
                                </div>
                                <div className="w-1/2 bg-white/20 h-2 rounded-full">
                                  <div className="bg-white h-2 rounded-full w-2/3"></div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="text-left flex-1">
                                  <h5 className="font-medium">Premium Plan</h5>
                                  <p className="text-sm opacity-75">Monthly service</p>
                                </div>
                                <div className="w-1/2 bg-white/20 h-2 rounded-full">
                                  <div className="bg-white h-2 rounded-full w-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="emergency" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="bg-white p-8">
                        <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-6">
                          <AlertTriangle className="h-8 w-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-4">Emergency Services</h3>
                        <p className="text-gray-600 mb-6">
                          Fast response for UPS emergencies to minimize critical system downtime when you need help most.
                        </p>
                        
                        <ul className="space-y-4 mb-6">
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">24/7 Emergency Support</span>
                              <p className="text-gray-600 text-sm">Round-the-clock technical assistance for critical situations</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Rapid On-site Response</span>
                              <p className="text-gray-600 text-sm">Fast dispatch of technicians to your location</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Temporary UPS Solutions</span>
                              <p className="text-gray-600 text-sm">Rental equipment to bridge outages during repairs</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                            <div>
                              <span className="text-gray-800 font-medium">Priority Parts Delivery</span>
                              <p className="text-gray-600 text-sm">Expedited shipping of critical components</p>
                            </div>
                          </li>
                        </ul>
                        
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Emergency Service Hotline
                        </Button>
                      </div>
                      <div className="relative">
                        <img 
                          src="https://www.eamot.com/assets/img/gallery/03.jpg" 
                          alt="Emergency Services" 
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                          <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2">Emergency Response</h4>
                            <p className="mb-4">When seconds count, we respond immediately</p>
                            
                            <div className="grid grid-cols-1 gap-6 mt-6">
                              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm flex items-center justify-between">
                                <div className="text-left">
                                  <h5 className="text-lg font-semibold">Average Response Time</h5>
                                  <p className="text-sm">From call to on-site arrival</p>
                                </div>
                                <div className="text-3xl font-bold text-accent">2hr</div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                                  <div className="text-3xl font-bold text-accent">24/7</div>
                                  <p className="text-sm">Support Availability</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                                  <div className="text-3xl font-bold text-accent">95%</div>
                                  <p className="text-sm">First-Visit Resolution</p>
                                </div>
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
      
      {/* System Comparison Section */}
      <section 
        ref={comparisonRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: comparisonInView ? 1 : 0, y: comparisonInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">UPS Comparison</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Find the Right <span className="text-primary">UPS Solution</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Compare different UPS technologies to find the best fit for your specific needs and requirements.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: comparisonInView ? 1 : 0, y: comparisonInView ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <div className="grid grid-cols-4 bg-gray-100 text-gray-800 font-semibold">
              <div className="p-4 border-r border-gray-200">UPS Type</div>
              <div className="p-4 border-r border-gray-200 text-center">Standby UPS</div>
              <div className="p-4 border-r border-gray-200 text-center">Line Interactive</div>
              <div className="p-4 text-center">Online Double Conversion</div>
            </div>
            
            <div className="grid grid-cols-4 bg-white">
              <div className="p-4 border-t border-r border-gray-200 bg-gray-50 font-medium">
                Initial Cost
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="text-green-500 font-medium mb-1">Low</div>
                <div className="text-xs text-gray-500">Most affordable option</div>
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="text-yellow-500 font-medium mb-1">Medium</div>
                <div className="text-xs text-gray-500">Moderate investment</div>
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <div className="text-red-500 font-medium mb-1">High</div>
                <div className="text-xs text-gray-500">Premium solution</div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 bg-white">
              <div className="p-4 border-t border-r border-gray-200 bg-gray-50 font-medium">
                Power Protection
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="text-yellow-500 font-medium mb-1">Basic</div>
                <div className="text-xs text-gray-500">Protects against outages</div>
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="text-green-500 font-medium mb-1">Good</div>
                <div className="text-xs text-gray-500">Handles most power issues</div>
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <div className="text-green-500 font-medium mb-1">Excellent</div>
                <div className="text-xs text-gray-500">Complete isolation</div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 bg-white">
              <div className="p-4 border-t border-r border-gray-200 bg-gray-50 font-medium">
                Ideal For
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="font-medium mb-1">Home Use</div>
                <div className="text-xs text-gray-500">PCs, gaming, home office</div>
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <div className="font-medium mb-1">Small Business</div>
                <div className="text-xs text-gray-500">Workstations, small servers</div>
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <div className="font-medium mb-1">Critical Equipment</div>
                <div className="text-xs text-gray-500">Data centers, healthcare</div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 bg-white">
              <div className="p-4 border-t border-r border-gray-200 bg-gray-50 font-medium">
                Our Services
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <CheckSquare className="h-5 w-5 mx-auto text-green-500 mb-1" />
                <div className="text-xs text-gray-500">Full support available</div>
              </div>
              <div className="p-4 border-t border-r border-gray-200 text-center">
                <CheckSquare className="h-5 w-5 mx-auto text-green-500 mb-1" />
                <div className="text-xs text-gray-500">Full support available</div>
              </div>
              <div className="p-4 border-t border-gray-200 text-center">
                <CheckSquare className="h-5 w-5 mx-auto text-green-500 mb-1" />
                <div className="text-xs text-gray-500">Full support available</div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-10 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Schedule UPS Consultation
            </Button>
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
                Ready to Ensure Uninterrupted Power for Your Critical Systems?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your UPS needs and learn how our maintenance services can protect your business from costly downtime.
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