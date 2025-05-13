import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, CircuitBoard, Zap, Shield, 
  Package, Truck, Clock, CheckCircle, Search,
  Settings, Wrench, BarChart, AlertTriangle,
  FileText, Clipboard, Ruler, PieChart
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function RECDIntegrationPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.1 });
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
                On-field <span className="text-accent">RECD Integration</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Professional field integration services for Real-time Emission Control Devices (RECD), 
              ensuring seamless installation, configuration, and compliance with regulatory standards.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request Integration Service</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#services">Explore Integration Options</a>
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
              Comprehensive RECD Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              End-to-End <span className="text-primary">Field Integration</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized field integration services ensure your RECD systems are properly installed, 
              calibrated, and fully compliant with all regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-12 w-12 text-primary" />,
                title: "Expert Integration Teams",
                description: "Certified field technicians with specialized training in emission control systems and regulatory compliance requirements."
              },
              {
                icon: <Ruler className="h-12 w-12 text-primary" />,
                title: "Precision Installation",
                description: "Accurate placement and connection of all RECD components according to manufacturer specifications and regulatory guidelines."
              },
              {
                icon: <CircuitBoard className="h-12 w-12 text-primary" />,
                title: "System Configuration",
                description: "Professional configuration and programming of all RECD components to ensure proper data acquisition and reporting."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Compliance Verification",
                description: "Thorough testing and validation to ensure the integrated system meets all regulatory requirements and standards."
              },
              {
                icon: <PieChart className="h-12 w-12 text-primary" />,
                title: "Documentation & Reporting",
                description: "Comprehensive documentation of the installation, configuration, and compliance testing for regulatory submissions."
              },
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Post-Integration Support",
                description: "Ongoing technical assistance and troubleshooting after system integration to ensure continuous operation."
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
      
      {/* Services Categories */}
      <section 
        id="services"
        ref={servicesRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Specialized Integration Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our <span className="text-primary">Integration Offerings</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of specialized RECD integration services designed for complete compliance and reliability.
            </p>
          </div>
          
          <Tabs defaultValue="newInstallation" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="newInstallation" className="px-6 py-3 rounded-lg">New Installations</TabsTrigger>
              <TabsTrigger value="systemUpgrades" className="px-6 py-3 rounded-lg">System Upgrades</TabsTrigger>
              <TabsTrigger value="troubleshooting" className="px-6 py-3 rounded-lg">Remediation Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="newInstallation" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <CircuitBoard className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">New System Installation</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Complete integration services for new RECD installations, from site assessment 
                        to final compliance verification and reporting.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Key Advantages</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Turnkey Solution</span>
                                <p className="text-sm text-gray-400">End-to-end installation and setup</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">First-Time Compliance</span>
                                <p className="text-sm text-gray-400">Ensuring immediate regulatory approval</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Expert Engineering</span>
                                <p className="text-sm text-gray-400">Optimized system design and installation</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">New Installation Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Site Assessment</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment evaluation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Installation point selection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power and connectivity review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Environmental condition analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance requirement analysis</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Hardware Installation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Sensor mounting and placement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Control unit installation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power and signal wiring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Communication infrastructure</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Enclosure and protection systems</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">System Configuration</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Control unit programming</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Sensor calibration</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Communication setup</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data reporting configuration</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Alarm and notification settings</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Testing & Validation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System functionality testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Accuracy verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data transmission testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance parameter verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System stress testing</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Compliance Documentation</h4>
                        </div>
                        <p className="text-gray-600">
                          Our installation service includes comprehensive documentation of the entire process, 
                          including calibration certificates, testing results, and regulatory compliance verification 
                          for submission to authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="systemUpgrades" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">System Upgrades</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Professional upgrade services for existing RECD systems to enhance performance, 
                        meet new regulatory requirements, or replace obsolete components.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Upgrade Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Minimal Downtime</span>
                                <p className="text-sm text-gray-400">Efficient upgrade process with reduced interruption</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Backward Compatibility</span>
                                <p className="text-sm text-gray-400">Integration with existing infrastructure</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Performance Enhancement</span>
                                <p className="text-sm text-gray-400">Improved accuracy and reliability</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Upgrade Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Sensor Upgrades</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">High-precision sensor replacement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Extended range measurement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Additional parameter monitoring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Enhanced durability options</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Self-cleaning/maintenance systems</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Control System Enhancements</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Processing unit upgrades</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Memory expansion</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Advanced analytics implementation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">User interface improvements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Redundancy system integration</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Communication Upgrades</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Wireless connectivity addition</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Cellular/satellite integration</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Protocol conversion modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Enhanced cybersecurity features</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Remote access capabilities</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Regulatory Compliance Updates</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">New parameter monitoring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Increased sampling frequency</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Enhanced reporting capabilities</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Standards certification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Tamper-proof data systems</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Scheduled Upgrade Process</h4>
                        </div>
                        <p className="text-gray-600">
                          Our upgrade services are scheduled during planned maintenance windows to minimize 
                          operational disruption, with comprehensive pre-planning and rapid deployment to 
                          ensure minimal system downtime.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="troubleshooting" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Wrench className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Remediation Services</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Specialized services to address non-compliant or malfunctioning RECD systems, 
                        resolving issues and restoring proper operation and regulatory compliance.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Remediation Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Rapid Resolution</span>
                                <p className="text-sm text-gray-400">Quick return to compliant operation</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Root Cause Analysis</span>
                                <p className="text-sm text-gray-400">Comprehensive problem identification</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Preventative Measures</span>
                                <p className="text-sm text-gray-400">Solutions to prevent recurrence</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Remediation Solutions</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Diagnostic Services</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Comprehensive system inspection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Sensor verification testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Control system diagnostics</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Communication path analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data integrity verification</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">System Correction</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Component replacement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Sensor repositioning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Software/firmware updates</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Wiring and connection repair</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System reconfiguration</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Compliance Recovery</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory gap analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance parameter adjustment</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Reporting system correction</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Verification testing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory documentation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Preventative Services</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">System vulnerability assessment</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Maintenance protocol development</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Staff training programs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Automated monitoring setup</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Backup system implementation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Emergency Response</h4>
                        </div>
                        <p className="text-gray-600">
                          Our remediation team is available 24/7 for emergency response to critical RECD system 
                          failures, with rapid deployment capabilities to minimize non-compliance periods and 
                          potential regulatory consequences.
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
      
      {/* Integration Process */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Integration Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              How Our <span className="text-primary">Field Integration Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures proper installation, configuration, and compliance of your RECD system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "Site Assessment",
                description: "Comprehensive evaluation of installation location, equipment compatibility, power requirements, and environmental conditions."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Integration Planning",
                description: "Detailed planning of installation approach, component placement, wiring routes, and system architecture design."
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary" />,
                title: "Field Installation",
                description: "Professional installation of all hardware components, sensors, control systems, and communication infrastructure."
              },
              {
                icon: <Settings className="h-10 w-10 text-primary" />,
                title: "Configuration & Calibration",
                description: "System programming, sensor calibration, communication setup, and parameter configuration for regulatory compliance."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Testing & Verification",
                description: "Comprehensive testing of all components, data validation, compliance verification, and final system certification."
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
              Request Integration Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">Integration Team</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request field integration services for your RECD system.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Integration Request Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Required Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>RECD system details and manufacturer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Installation location information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Regulatory framework/requirements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Project timeline and constraints</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Emergency Services</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>24/7 emergency integration hotline</span>
                        </div>
                        <div className="flex items-center">
                          <Truck className="h-5 w-5 mr-3" />
                          <span>Rapid deployment field teams</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 mr-3" />
                          <span>Compliance verification specialists</span>
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
                      <label htmlFor="systemDetails" className="block text-sm font-medium text-gray-700 mb-1">RECD System Details *</label>
                      <input
                        type="text"
                        id="systemDetails"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Manufacturer, model, and system components"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Installation Location *</label>
                      <input
                        type="text"
                        id="location"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Site address and specific location details"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Details & Requirements *</label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe your integration needs, regulatory requirements, timeline constraints, and any specific challenges..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select
                          id="serviceType"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="newInstallation">New System Installation</option>
                          <option value="systemUpgrade">System Upgrade/Enhancement</option>
                          <option value="remediation">Remediation/Troubleshooting</option>
                          <option value="consultation">Technical Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Preferred Timeline *</label>
                        <select
                          id="timeline"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="immediate">Immediate (Emergency)</option>
                          <option value="2weeks">Within 2 Weeks</option>
                          <option value="month">Within a Month</option>
                          <option value="quarter">This Quarter</option>
                          <option value="planning">Future Planning</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white">
                        Submit Integration Request
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