import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Battery, Zap, Clock, Calendar, Shield, CheckCircle, 
  AlertTriangle, Settings, Activity, FileCheck, BarChart, User
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const PlanFeature = ({ included, feature }: { included: boolean; feature: string }) => (
  <div className="flex items-center py-2">
    {included ? (
      <CheckCircle className="text-green-500 h-5 w-5 mr-3 flex-shrink-0" />
    ) : (
      <div className="h-5 w-5 mr-3 flex-shrink-0 rounded-full border-2 border-gray-300" />
    )}
    <span className={included ? "text-gray-800" : "text-gray-400"}>{feature}</span>
  </div>
);

export default function UPSAmcPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: overviewRef, inView: overviewInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: plansRef, inView: plansInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [batteryProgress, setBatteryProgress] = useState(0);
  const [reliabilityProgress, setReliabilityProgress] = useState(0);
  
  React.useEffect(() => {
    if (overviewInView) {
      const batteryTimer = setTimeout(() => setBatteryProgress(85), 500);
      const reliabilityTimer = setTimeout(() => setReliabilityProgress(99.8), 800);
      return () => {
        clearTimeout(batteryTimer);
        clearTimeout(reliabilityTimer);
      };
    }
  }, [overviewInView]);

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
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
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
                <Battery className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                UPS <span className="text-accent">Annual Maintenance</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Comprehensive UPS maintenance contracts designed to maximize system reliability, 
              extend equipment lifespan, and ensure continuous protection for your critical operations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#plans">View AMC Plans</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#contact">Request Consultation</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
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
                <span className="font-semibold">Comprehensive UPS Maintenance</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Protect Your Critical <span className="text-primary">Power Infrastructure</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our UPS Annual Maintenance Contracts (AMC) provide comprehensive care for your 
                uninterruptible power supply systems, ensuring they remain in optimal condition 
                to protect your critical operations from power disruptions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Preventive Maintenance</span> - Regular scheduled inspections and service to prevent failures and extend equipment life.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Battery Management</span> - Comprehensive battery testing, maintenance, and replacement services to prevent power failures.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Emergency Response</span> - Priority emergency service with guaranteed response times to minimize downtime.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Performance Analysis</span> - Regular system testing and analysis to identify potential issues before they cause problems.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <a href="#plans">Explore Maintenance Plans</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: overviewInView ? 1 : 0, x: overviewInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-xl">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">UPS System Health</h3>
                    <p className="text-gray-500 text-sm">Regular maintenance ensures optimal performance</p>
                  </div>
                  <div className="bg-primary-50 p-3 rounded-full">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Battery Health</span>
                      <span className="text-sm font-medium">{batteryProgress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${batteryProgress > 70 ? 'bg-green-500' : batteryProgress > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                        style={{ width: `${batteryProgress}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Critical</span>
                      <span>Warning</span>
                      <span>Optimal</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">System Reliability</span>
                      <span className="text-sm font-medium">{reliabilityProgress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: `${reliabilityProgress}%` }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-bold text-gray-800">Preventive Visits</h4>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">4<span className="text-sm font-normal text-gray-500">/year</span></div>
                    <p className="text-sm text-gray-500 mt-1">Quarterly scheduled maintenance</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center mb-3">
                      <Clock className="h-6 w-6 text-primary mr-3" />
                      <h4 className="font-bold text-gray-800">Response Time</h4>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">2<span className="text-sm font-normal text-gray-500">hours</span></div>
                    <p className="text-sm text-gray-500 mt-1">Guaranteed for emergencies</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <p className="text-sm text-gray-600">Our AMC customers experience 99.999% uptime for protected systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AMC Plans Section */}
      <section 
        id="plans"
        ref={plansRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Flexible Maintenance Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Choose the Right <span className="text-primary">UPS Maintenance Plan</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a range of maintenance plans tailored to your specific requirements, 
              ensuring your UPS systems receive the appropriate level of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                description: "Basic preventive maintenance for standard UPS systems",
                price: "₹25,000",
                unit: "per year / per UPS",
                color: "bg-gray-600",
                featured: false,
                features: [
                  { included: true, text: "Bi-annual preventive maintenance visits" },
                  { included: true, text: "Basic battery testing" },
                  { included: true, text: "Visual inspections" },
                  { included: true, text: "Emergency response (8 hours)" },
                  { included: false, text: "Priority emergency response" },
                  { included: false, text: "Remote monitoring" },
                  { included: false, text: "Battery replacement discounts" },
                  { included: false, text: "Parts and labor included" }
                ]
              },
              {
                name: "Professional",
                description: "Comprehensive care for business-critical UPS systems",
                price: "₹45,000",
                unit: "per year / per UPS",
                color: "bg-primary",
                featured: true,
                features: [
                  { included: true, text: "Quarterly preventive maintenance visits" },
                  { included: true, text: "Advanced battery testing & analysis" },
                  { included: true, text: "Thermal scanning" },
                  { included: true, text: "Priority emergency response (4 hours)" },
                  { included: true, text: "Basic remote monitoring" },
                  { included: true, text: "10% battery replacement discount" },
                  { included: false, text: "Load bank testing" },
                  { included: false, text: "Parts and labor included" }
                ]
              },
              {
                name: "Enterprise",
                description: "Ultimate protection for mission-critical infrastructure",
                price: "₹75,000",
                unit: "per year / per UPS",
                color: "bg-accent",
                featured: false,
                features: [
                  { included: true, text: "Monthly preventive maintenance visits" },
                  { included: true, text: "Comprehensive battery testing & analysis" },
                  { included: true, text: "Thermal scanning & power quality analysis" },
                  { included: true, text: "Guaranteed emergency response (2 hours)" },
                  { included: true, text: "24/7 remote monitoring & alerts" },
                  { included: true, text: "25% battery replacement discount" },
                  { included: true, text: "Annual load bank testing" },
                  { included: true, text: "Parts and labor included" }
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: plansInView ? 1 : 0, y: plansInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.featured ? 'ring-2 ring-primary' : ''}`}
              >
                <div className={`${plan.color} text-white p-6`}>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="opacity-90 text-sm">{plan.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-500">{plan.unit}</div>
                  </div>
                  
                  <div className="space-y-1 mb-8">
                    {plan.features.map((feature, i) => (
                      <PlanFeature key={i} included={feature.included} feature={feature.text} />
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                  >
                    Choose {plan.name} Plan
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Custom Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              For organizations with complex UPS infrastructure or specialized requirements, 
              we offer custom-tailored maintenance programs designed to meet your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center bg-primary/5 px-3 py-2 rounded-lg">
                <Settings className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Multi-site coverage</span>
              </div>
              <div className="flex items-center bg-primary/5 px-3 py-2 rounded-lg">
                <User className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Dedicated technicians</span>
              </div>
              <div className="flex items-center bg-primary/5 px-3 py-2 rounded-lg">
                <BarChart className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Custom reporting</span>
              </div>
              <div className="flex items-center bg-primary/5 px-3 py-2 rounded-lg">
                <FileCheck className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-700">Compliance documentation</span>
              </div>
              <Button asChild variant="outline" className="ml-auto">
                <a href="#contact">Request Custom Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Maintenance Process */}
      <section 
        ref={benefitsRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our <span className="text-primary">UPS Maintenance Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our systematic approach to UPS maintenance that ensures thorough care and optimal performance.
            </p>
          </div>
          
          <Tabs defaultValue="preventive" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="preventive" className="px-6 py-2">
                Preventive Maintenance
              </TabsTrigger>
              <TabsTrigger value="battery" className="px-6 py-2">
                Battery Management
              </TabsTrigger>
              <TabsTrigger value="emergency" className="px-6 py-2">
                Emergency Response
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="preventive" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Preventive Maintenance Visits</h3>
                        <p className="text-gray-600 mb-6">
                          Our structured preventive maintenance visits follow a comprehensive checklist to ensure every 
                          aspect of your UPS system is thoroughly inspected, tested, and optimized.
                        </p>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Visual & Mechanical Inspection</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Physical condition inspection</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Air filter examination</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Ventilation system check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Internal component inspection</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Dust & debris removal</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Cable & connection check</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Electrical Systems Check</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Input/output voltage measurement</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Phase balance verification</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">DC bus voltage check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Inverter output verification</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Control logic function test</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Power supply check</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Functional Testing</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Transfer test (no-break)</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Bypass system verification</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Alarm functions test</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Display & control panel check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Communication interfaces test</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Event log review & analysis</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Maintenance Benefits</h3>
                        
                        <div className="space-y-6 mb-8">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <Zap className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Extended UPS Lifespan</h4>
                              <p className="text-sm text-gray-300">
                                Regular maintenance can extend UPS system life by 30-50% compared to 
                                unmaintained systems, maximizing your investment.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <AlertTriangle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Reduced Failure Risk</h4>
                              <p className="text-sm text-gray-300">
                                Proactive maintenance identifies and addresses potential issues before 
                                they cause system failures, reducing downtime risk by up to 90%.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <BarChart className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Optimized Performance</h4>
                              <p className="text-sm text-gray-300">
                                Regular calibration and adjustment ensures your UPS system operates at 
                                peak efficiency, improving performance and reducing energy costs.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-3">Detailed Documentation</h4>
                          <p className="text-sm">
                            After each preventive maintenance visit, we provide comprehensive 
                            documentation including:
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-primary mr-2" />
                              <span>Completed maintenance checklist</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-primary mr-2" />
                              <span>System performance measurements</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-primary mr-2" />
                              <span>Identified issues and recommendations</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-primary mr-2" />
                              <span>Future maintenance schedule</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="battery" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Battery Management Services</h3>
                        <p className="text-gray-600 mb-6">
                          Battery failure is the most common cause of UPS system downtime. Our comprehensive 
                          battery management services help prevent battery-related failures and extend battery lifespan.
                        </p>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Battery Testing & Inspection</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Individual Cell Testing</span>
                                  <p className="text-sm text-gray-600">
                                    Measurement of voltage, impedance, and temperature for each battery to identify weak cells.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Load Testing</span>
                                  <p className="text-sm text-gray-600">
                                    Verification of battery string capacity and runtime under load conditions.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Connection Inspection</span>
                                  <p className="text-sm text-gray-600">
                                    Check and torque of all battery connections to prevent resistance and heat buildup.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Preventive Battery Maintenance</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Terminal Cleaning</span>
                                  <p className="text-sm text-gray-600">
                                    Cleaning of battery terminals to prevent corrosion and ensure good connections.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Environmental Assessment</span>
                                  <p className="text-sm text-gray-600">
                                    Evaluation of battery environment to ensure optimal temperature and ventilation.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Charger Performance Check</span>
                                  <p className="text-sm text-gray-600">
                                    Verification of charging system to ensure proper charging parameters.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <div className="flex items-center mb-2">
                              <BarChart className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-bold text-gray-800">Battery Health Analysis</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              We provide detailed battery health analysis after each inspection, including:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-3 w-3 text-primary mr-1" />
                                <span className="text-xs text-gray-600">Remaining battery life estimate</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-3 w-3 text-primary mr-1" />
                                <span className="text-xs text-gray-600">Performance trend analysis</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-3 w-3 text-primary mr-1" />
                                <span className="text-xs text-gray-600">Recommended replacement timeline</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-3 w-3 text-primary mr-1" />
                                <span className="text-xs text-gray-600">Risk assessment report</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Battery Performance Optimization</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <div className="flex justify-between items-end mb-1">
                              <span className="text-sm">Without AMC</span>
                              <span className="text-sm">40% reduction in lifespan</span>
                            </div>
                            <div className="h-3 w-full bg-gray-700 rounded-full">
                              <div className="h-3 bg-red-500 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-end mb-1">
                              <span className="text-sm">Basic Maintenance</span>
                              <span className="text-sm">Standard lifespan</span>
                            </div>
                            <div className="h-3 w-full bg-gray-700 rounded-full">
                              <div className="h-3 bg-yellow-500 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-end mb-1">
                              <span className="text-sm">EAMOT AMC</span>
                              <span className="text-sm">30% extended lifespan</span>
                            </div>
                            <div className="h-3 w-full bg-gray-700 rounded-full">
                              <div className="h-3 bg-green-500 rounded-full" style={{ width: '130%' }}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Battery Replacement Services</h4>
                            <p className="text-sm">
                              When battery replacement is needed, our AMC includes preferential 
                              scheduling and discounted pricing for replacement services:
                            </p>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Genuine manufacturer-approved batteries</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Expert installation with minimal downtime</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Proper disposal of old batteries</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>New battery validation testing</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Remote Battery Monitoring</h4>
                            <p className="text-sm">
                              For enhanced protection, our Professional and Enterprise plans include 
                              remote battery monitoring options:
                            </p>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>24/7 battery parameter monitoring</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Automatic alerts for battery issues</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Trend analysis and predictive reporting</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="emergency" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Response Services</h3>
                        <p className="text-gray-600 mb-6">
                          When unexpected issues arise, our emergency response services ensure rapid resolution 
                          to minimize downtime and protect your critical operations.
                        </p>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Guaranteed Response Times</h4>
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="text-left py-2 text-sm font-medium">AMC Plan</th>
                                  <th className="text-center py-2 text-sm font-medium">Phone Support</th>
                                  <th className="text-center py-2 text-sm font-medium">On-Site Response</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-200">
                                  <td className="py-2 text-sm">Essential</td>
                                  <td className="py-2 text-sm text-center">1 hour</td>
                                  <td className="py-2 text-sm text-center">8 hours</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                  <td className="py-2 text-sm">Professional</td>
                                  <td className="py-2 text-sm text-center">30 minutes</td>
                                  <td className="py-2 text-sm text-center">4 hours</td>
                                </tr>
                                <tr>
                                  <td className="py-2 text-sm">Enterprise</td>
                                  <td className="py-2 text-sm text-center">15 minutes</td>
                                  <td className="py-2 text-sm text-center">2 hours</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Emergency Response Process</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">1</div>
                                <div>
                                  <span className="font-medium text-gray-800">Initial Assessment</span>
                                  <p className="text-sm text-gray-600">
                                    Immediate phone support to diagnose the issue and provide guidance for potential quick resolution.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">2</div>
                                <div>
                                  <span className="font-medium text-gray-800">On-Site Response</span>
                                  <p className="text-sm text-gray-600">
                                    Dispatching the nearest qualified technician to your location within the guaranteed response time.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">3</div>
                                <div>
                                  <span className="font-medium text-gray-800">Rapid Resolution</span>
                                  <p className="text-sm text-gray-600">
                                    Our technicians carry common replacement parts and have priority access to our parts inventory.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">4</div>
                                <div>
                                  <span className="font-medium text-gray-800">Follow-Up Analysis</span>
                                  <p className="text-sm text-gray-600">
                                    Comprehensive report on the cause of failure and recommendations to prevent future occurrences.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <div className="flex items-center mb-2">
                              <Shield className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-bold text-gray-800">Emergency Spares Program</h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              Enterprise-level AMC customers benefit from our Emergency Spares Program, 
                              which includes on-site storage of critical spare parts for immediate use during emergencies.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Emergency Response Statistics</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">98.7%</div>
                            <div className="text-sm">First-visit resolution rate</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">1.5hr</div>
                            <div className="text-sm">Average response time</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm">Support availability</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm">Response time compliance</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Common Emergency Issues</h4>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Battery failures</span>
                                  <span className="text-sm">48%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-red-500 rounded-full" style={{ width: '48%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Capacitor issues</span>
                                  <span className="text-sm">21%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '21%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Fan/cooling problems</span>
                                  <span className="text-sm">15%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Control board failures</span>
                                  <span className="text-sm">9%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-purple-500 rounded-full" style={{ width: '9%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Other issues</span>
                                  <span className="text-sm">7%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-gray-500 rounded-full" style={{ width: '7%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Client Testimonial</h4>
                            <p className="text-sm italic">
                              "When our data center UPS system failed during a critical operation, 
                              EAMOT's response was exceptional. Their technician arrived within 
                              90 minutes and had us back online in under two hours. Their AMC 
                              service has proven invaluable to our operation."
                            </p>
                            <p className="text-sm font-medium mt-2">
                              - IT Director, Financial Services Company
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
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
                Protect Your Critical Power Infrastructure
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our UPS Annual Maintenance Contracts can help you 
                maintain reliable power protection for your critical business operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="#contact">Request AMC Quote</a>
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