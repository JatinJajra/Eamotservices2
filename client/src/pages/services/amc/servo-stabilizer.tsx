import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, Gauge, Clock, Calendar, Shield, CheckCircle, 
  AlertTriangle, Settings, Activity, FileCheck, BarChart, FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Custom component for AMC plan features
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

export default function ServoStabilizerAmcPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: overviewRef, inView: overviewInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: plansRef, inView: plansInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [voltageProgress, setVoltageProgress] = useState(0);
  
  React.useEffect(() => {
    if (overviewInView) {
      const timer = setTimeout(() => setVoltageProgress(98), 500);
      return () => clearTimeout(timer);
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
                <Zap className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Servo Stabilizer <span className="text-accent">AMC Services</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Comprehensive maintenance contracts for voltage stabilizers that ensure consistent 
              power quality, equipment protection, and optimal operational efficiency.
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
                <span className="font-semibold">Professional Stabilizer Maintenance</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Protect Your Equipment With <span className="text-primary">Voltage Stability</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our Servo Stabilizer Annual Maintenance Contracts (AMC) provide comprehensive care for your 
                voltage regulation systems, ensuring they deliver consistent, clean power to protect your 
                valuable equipment and maintain operational efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Precision Calibration</span> - Regular servicing and calibration to ensure accurate voltage regulation within defined parameters.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Component Maintenance</span> - Thorough inspection and maintenance of all critical components, including servomotors, control circuits, and variac.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Preventive Servicing</span> - Scheduled maintenance to identify and address potential issues before they cause equipment damage.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Emergency Support</span> - Priority response for emergency situations to minimize downtime and equipment risk.
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
              className="bg-gray-50 p-6 rounded-xl shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Stabilizer Performance</h3>
                  <p className="text-gray-500 text-sm">Regular maintenance ensures optimal voltage regulation</p>
                </div>
                <div className="bg-primary-50 p-3 rounded-full">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              {/* Animated voltage gauge */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <div className="text-sm">Input: 160-280V</div>
                  <div className="text-sm">Output: 220V ±1%</div>
                </div>
                
                <div className="relative h-12 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="absolute inset-0 flex">
                    <div className="bg-red-500 flex-1"></div>
                    <div className="bg-yellow-500 flex-1"></div>
                    <div className="bg-green-500 w-[5%]"></div>
                    <div className="bg-yellow-500 flex-1"></div>
                    <div className="bg-red-500 flex-1"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gray-200 opacity-70"></div>
                  
                  {/* Voltage indicator */}
                  <div 
                    className="absolute h-full w-3 bg-white border-2 border-gray-800 transition-all duration-1000"
                    style={{ left: `${voltageProgress}%` }}
                  ></div>
                  
                  {/* Normal range indicator */}
                  <div className="absolute h-full w-[10%] border-2 border-dashed border-green-600 left-[45%]"></div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>160V</span>
                  <span>200V</span>
                  <span>220V</span>
                  <span>240V</span>
                  <span>280V</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold text-gray-800">Service Frequency</h4>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4<span className="text-sm font-normal text-gray-500">/year</span></div>
                  <p className="text-sm text-gray-500 mt-1">Quarterly maintenance visits</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Activity className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-bold text-gray-800">Regulation Accuracy</h4>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">±1<span className="text-sm font-normal text-gray-500">%</span></div>
                  <p className="text-sm text-gray-500 mt-1">Maintained precision</p>
                </div>
              </div>
              
              <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-3" />
                <p className="text-sm text-gray-600">Regular maintenance can extend stabilizer life by up to 40%</p>
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
              Tailored Maintenance Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Choose Your <span className="text-primary">Servo Stabilizer AMC</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Select from our range of comprehensive maintenance plans designed to meet your specific needs and ensure optimal stabilizer performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                description: "Essential maintenance for standard stabilizers in non-critical applications",
                price: "₹15,000",
                unit: "per year / per stabilizer",
                color: "bg-gray-600",
                featured: false,
                features: [
                  { included: true, text: "Bi-annual service visits" },
                  { included: true, text: "Basic calibration" },
                  { included: true, text: "Visual inspections" },
                  { included: true, text: "Emergency support (8 hours)" },
                  { included: false, text: "Priority response" },
                  { included: false, text: "Performance monitoring" },
                  { included: false, text: "Component replacement discounts" },
                  { included: false, text: "Parts and labor included" }
                ]
              },
              {
                name: "Standard",
                description: "Comprehensive maintenance for business-critical stabilizers",
                price: "₹30,000",
                unit: "per year / per stabilizer",
                color: "bg-primary",
                featured: true,
                features: [
                  { included: true, text: "Quarterly service visits" },
                  { included: true, text: "Precision calibration" },
                  { included: true, text: "Thermal imaging" },
                  { included: true, text: "Priority emergency response (4 hours)" },
                  { included: true, text: "Basic performance monitoring" },
                  { included: true, text: "15% component replacement discount" },
                  { included: false, text: "Advanced load testing" },
                  { included: false, text: "Parts and labor included" }
                ]
              },
              {
                name: "Premium",
                description: "Complete coverage for mission-critical stabilizers",
                price: "₹45,000",
                unit: "per year / per stabilizer",
                color: "bg-accent",
                featured: false,
                features: [
                  { included: true, text: "Monthly service visits" },
                  { included: true, text: "Advanced precision calibration" },
                  { included: true, text: "Thermal imaging & power quality analysis" },
                  { included: true, text: "Guaranteed emergency response (2 hours)" },
                  { included: true, text: "Continuous performance monitoring" },
                  { included: true, text: "30% component replacement discount" },
                  { included: true, text: "Quarterly load testing" },
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
                    Select {plan.name} Plan
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Industrial Multi-Unit Plans</h3>
            <p className="text-gray-600 mb-4">
              For facilities with multiple stabilizers or industrial installations, we offer specially 
              designed maintenance programs with volume discounts and integrated servicing schedules.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-800">Volume Discounting</h4>
                  <p className="text-sm text-gray-600">
                    Progressive discounts starting at 5 units, increasing with the number of stabilizers covered.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-800">Integrated Scheduling</h4>
                  <p className="text-sm text-gray-600">
                    Coordinated maintenance visits to minimize operational disruption and optimize technician time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-800">Customized Reporting</h4>
                  <p className="text-sm text-gray-600">
                    Consolidated condition reporting across all units for simplified asset management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-gray-800">Dedicated Account Manager</h4>
                  <p className="text-sm text-gray-600">
                    Single point of contact for all service coordination and communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline" className="mx-auto">
                <a href="#contact">Request Multi-Unit Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Maintenance Services */}
      <section 
        ref={servicesRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our <span className="text-primary">Maintenance Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our methodical approach to servo stabilizer maintenance that ensures optimal 
              performance and extends equipment lifespan.
            </p>
          </div>
          
          <Tabs defaultValue="preventive" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="preventive" className="px-6 py-2">
                Preventive Maintenance
              </TabsTrigger>
              <TabsTrigger value="calibration" className="px-6 py-2">
                Precision Calibration
              </TabsTrigger>
              <TabsTrigger value="emergency" className="px-6 py-2">
                Emergency Services
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Preventive Maintenance</h3>
                        <p className="text-gray-600 mb-6">
                          Our structured preventive maintenance visits follow a comprehensive checklist to ensure 
                          every component of your servo stabilizer is thoroughly inspected and maintained.
                        </p>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Mechanical System Inspection</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Servomotor condition check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Carbon brush examination</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Variac inspection</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Roller mechanism check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Cooling system verification</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Lubrication assessment</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Electrical Systems Check</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Control circuit inspection</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Transformer connections check</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Relay operation verification</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Buck/boost circuit testing</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Sensing circuit validation</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Wiring insulation testing</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Performance Testing</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Voltage regulation accuracy</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Response time measurement</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Efficiency calculation</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Load handling capability</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Protection system functionality</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">Indicator & display verification</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Preventive Maintenance Benefits</h3>
                        
                        <div className="space-y-6 mb-8">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <Clock className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Extended Stabilizer Life</h4>
                              <p className="text-sm text-gray-300">
                                Regular maintenance can extend servo stabilizer lifespan by up to 40%, 
                                maximizing your investment and reducing replacement costs.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <Shield className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Equipment Protection</h4>
                              <p className="text-sm text-gray-300">
                                Well-maintained stabilizers provide reliable voltage regulation, 
                                protecting sensitive equipment from damage caused by voltage fluctuations.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1 mr-4">
                              <Settings className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Optimal Performance</h4>
                              <p className="text-sm text-gray-300">
                                Regular calibration and adjustment ensures your servo stabilizer 
                                operates at peak efficiency, delivering precise voltage regulation.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-3">Maintenance Report</h4>
                          <p className="text-sm">
                            After each preventive maintenance visit, we provide detailed documentation including:
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center text-sm">
                              <FileCheck className="h-3 w-3 text-primary mr-2" />
                              <span>Completed service checklist</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <FileCheck className="h-3 w-3 text-primary mr-2" />
                              <span>Performance measurements</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <FileCheck className="h-3 w-3 text-primary mr-2" />
                              <span>Component condition assessment</span>
                            </li>
                            <li className="flex items-center text-sm">
                              <FileCheck className="h-3 w-3 text-primary mr-2" />
                              <span>Recommendations for optimization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="calibration" className="mt-0">
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Precision Calibration Services</h3>
                        <p className="text-gray-600 mb-6">
                          Our precision calibration services ensure your servo stabilizer delivers 
                          accurate voltage regulation within the specified parameters, protecting 
                          your equipment and optimizing performance.
                        </p>
                        
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Reference Voltage Calibration</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Output Voltage Setting</span>
                                  <p className="text-sm text-gray-600">
                                    Precise adjustment of reference voltage to ensure the output maintains the required level (typically 220V/230V/240V ±1%).
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Sensing Circuit Calibration</span>
                                  <p className="text-sm text-gray-600">
                                    Fine-tuning of voltage sensing circuits to ensure accurate detection of input and output voltages.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Control System Calibration</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Motor Control Circuit</span>
                                  <p className="text-sm text-gray-600">
                                    Adjustment of servomotor control parameters for optimal response and positioning accuracy.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Proportional Controller Tuning</span>
                                  <p className="text-sm text-gray-600">
                                    Fine-tuning of proportional control parameters to minimize overshoot and ensure stable voltage regulation.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Protection System Calibration</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Over/Under Voltage Cutoff</span>
                                  <p className="text-sm text-gray-600">
                                    Setting of protection thresholds to ensure the system disconnects when input voltage exceeds safe operating range.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                                <div>
                                  <span className="font-medium text-gray-800">Time Delay Settings</span>
                                  <p className="text-sm text-gray-600">
                                    Calibration of time delay relays to prevent nuisance tripping during momentary fluctuations.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Calibration Equipment & Standards</h3>
                        
                        <div className="space-y-4 mb-8">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">High-Precision Instruments</h4>
                            <p className="text-sm">
                              Our technicians use laboratory-grade calibration equipment to ensure 
                              the highest level of accuracy:
                            </p>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Digital power analyzers (±0.1% accuracy)</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Precision reference voltage sources</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Calibrated oscilloscopes</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Harmonic analyzers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="mt-6">
                            <h4 className="font-bold mb-3">Calibration Performance Metrics</h4>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Voltage accuracy</span>
                                  <span className="text-sm">±1.0%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Response time</span>
                                  <span className="text-sm">&lt;100ms</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">Correction range</span>
                                  <span className="text-sm">±30%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full">
                                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Calibration Certificate</h4>
                            <p className="text-sm">
                              After each calibration service, we provide:
                            </p>
                            <div className="mt-4 bg-white/5 p-3 rounded-md border border-white/10">
                              <div className="flex items-center">
                                <FileText className="h-10 w-10 text-primary mr-3" />
                                <div>
                                  <h5 className="font-bold">Detailed Calibration Certificate</h5>
                                  <p className="text-xs text-gray-300">
                                    Includes pre and post-calibration measurements, reference standards used, 
                                    calibration date, and technician certification information.
                                  </p>
                                </div>
                              </div>
                            </div>
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
                          When stabilizer issues threaten your operations, our emergency response services 
                          ensure rapid resolution to minimize downtime and protect your equipment.
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
                                  <td className="py-2 text-sm">Basic</td>
                                  <td className="py-2 text-sm text-center">1 hour</td>
                                  <td className="py-2 text-sm text-center">8 hours</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                  <td className="py-2 text-sm">Standard</td>
                                  <td className="py-2 text-sm text-center">30 minutes</td>
                                  <td className="py-2 text-sm text-center">4 hours</td>
                                </tr>
                                <tr>
                                  <td className="py-2 text-sm">Premium</td>
                                  <td className="py-2 text-sm text-center">15 minutes</td>
                                  <td className="py-2 text-sm text-center">2 hours</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Emergency Resolution Process</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">1</div>
                                <div>
                                  <span className="font-medium text-gray-800">Immediate Diagnostics</span>
                                  <p className="text-sm text-gray-600">
                                    Expert phone support to diagnose issues and provide guidance for potential immediate actions.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">2</div>
                                <div>
                                  <span className="font-medium text-gray-800">Priority On-Site Service</span>
                                  <p className="text-sm text-gray-600">
                                    Rapid dispatch of technicians with appropriate parts and equipment to your location.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">3</div>
                                <div>
                                  <span className="font-medium text-gray-800">Expedited Repair</span>
                                  <p className="text-sm text-gray-600">
                                    Swift troubleshooting and repair to restore stabilizer functionality with minimal downtime.
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-1 mr-3">4</div>
                                <div>
                                  <span className="font-medium text-gray-800">Temporary Solutions</span>
                                  <p className="text-sm text-gray-600">
                                    When necessary, arrangement of temporary equipment to maintain operations during extended repairs.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <div className="flex items-center mb-2">
                              <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-bold text-gray-800">Common Emergency Issues</h4>
                            </div>
                            <ul className="space-y-1">
                              <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Servomotor failures</span>
                              </li>
                              <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Control circuit malfunctions</span>
                              </li>
                              <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Variac contact problems</span>
                              </li>
                              <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Carbon brush failure</span>
                              </li>
                              <li className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Protection system tripping</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Emergency Response Performance</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">97%</div>
                            <div className="text-sm">First-visit resolution rate</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">1.8hr</div>
                            <div className="text-sm">Average response time</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm">Support availability</div>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg text-center">
                            <div className="text-4xl font-bold text-primary mb-1">100%</div>
                            <div className="text-sm">Service level compliance</div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Critical Parts Inventory</h4>
                            <p className="text-sm">
                              We maintain a comprehensive inventory of critical stabilizer components, 
                              ensuring fast repair times during emergencies:
                            </p>
                            <ul className="mt-2 space-y-1">
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Servomotors and carbon brushes</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Control circuit boards</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Power transistors and ICs</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                <span>Relays and contactors</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Client Testimonial</h4>
                            <p className="text-sm italic">
                              "When our production line servo stabilizer failed during a critical manufacturing run, 
                              EAMOT's response was exceptional. Their technician arrived within 2 hours and had the 
                              system back online quickly, preventing what could have been a costly production stoppage."
                            </p>
                            <p className="text-sm font-medium mt-2">
                              - Operations Manager, Pharmaceutical Manufacturing
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
                Protect Your Equipment With Expert Stabilizer Maintenance
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our Servo Stabilizer AMC services can help you 
                maintain reliable voltage regulation and protect your valuable equipment.
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