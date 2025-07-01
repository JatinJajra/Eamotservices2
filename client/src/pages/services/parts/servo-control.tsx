import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, Cog, Truck, Search, 
  FileText, Clock, CheckCircle, Calendar, Shield, 
  Package, Layers, Wrench, Zap, BarChart4, LineChart
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function ServoControlPage() {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
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
      {/* Hero Section with Geometric Background */}
      {/* <section 
        ref={heroRef}
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full" 
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.15)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                backdropFilter: 'blur(10px)'
              }}
            />
          ))}
        </div>
        
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
                <Cog className="h-8 w-8 text-white" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                Servo Control <span className="text-accent">Components</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Precision servo stabilizer components and control systems for optimal voltage regulation,
              ensuring reliable power quality and equipment protection.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request Components Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#parts">Browse Component Catalog</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section> */}
                                <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <section 
  ref={heroRef}
  className="py-20 md:py-28 relative overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #154679 0%, #1e3a8a 100%)"
  }}
>
  {/* Geometric patterns */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    {Array.from({ length: 10 }).map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full" 
        style={{
          width: `${Math.random() * 300 + 50}px`,
          height: `${Math.random() * 300 + 50}px`,
          backgroundColor: `rgba(255, 255, 255, 0.08)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          backdropFilter: 'blur(10px)'
        }}
      />
    ))}
  </div>

  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full opacity-20" />
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
          <Cog className="h-8 w-8 text-white" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
          Servo Control <span className="text-accent">Components</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Precision servo stabilizer components and control systems for optimal voltage regulation,
        ensuring reliable power quality and equipment protection.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="#" onClick={openModal}>Request Components Quote</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
          <a href="#parts">Browse Component Catalog</a>
        </Button>
      </div>
    </div>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full opacity-20" />
  </div>
</section>

      
      {/* Service Features with Animated Indicators */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Servo Component Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Complete Servo Control <span className="text-primary">Sourcing Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized servo components services include sourcing precision control systems, 
              voltage regulators, motors, and control boards for optimal performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="h-12 w-12 text-primary" />,
                title: "Precision Voltage Controllers",
                description: "Advanced voltage regulation components with high-precision sensing and rapid response capabilities for strict voltage control."
              },
              {
                icon: <LineChart className="h-12 w-12 text-primary" />,
                title: "Digital Control Systems",
                description: "State-of-the-art digital controllers with advanced algorithms for optimal servo performance and voltage stability."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Power Transformers",
                description: "High-quality variable transformers engineered for durability, efficiency, and precise voltage transformation."
              },
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Technical Support",
                description: "Expert technical guidance for component selection, compatibility verification, and installation assistance."
              },
              {
                icon: <Package className="h-12 w-12 text-primary" />,
                title: "Inventory Solutions",
                description: "Component inventory management and critical spares planning for preventive maintenance and rapid response."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Quality Assurance",
                description: "Stringent quality testing and certification for all servo components ensuring reliability and performance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"></div>
                  <div className="bg-white w-20 h-20 rounded-lg shadow-md flex items-center justify-center mb-6 relative z-10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Animated indicator */}
                <div className="mt-6 h-1 bg-gray-200 rounded">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: featuresInView ? '100%' : 0 }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className="h-full bg-primary rounded"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Parts Categories with Interactive Tabs */}
      <section 
        id="parts"
        ref={partsRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Component Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Servo <span className="text-primary">Component Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of spare parts for servo stabilizers, available upon request. Share your specific requirement, and our team will provide details on compatibility and pricing tailored to your model.

            </p>
          </div>
          
            {/* <Tabs defaultValue="controllers" className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-transparent">
                <TabsTrigger value="controllers" className="px-6 py-3 rounded-lg">Control Systems</TabsTrigger>
                <TabsTrigger value="power" className="px-6 py-3 rounded-lg">Power Components</TabsTrigger>
                <TabsTrigger value="motors" className="px-6 py-3 rounded-lg">Motors & Drives</TabsTrigger>
              </TabsList>
              
              <TabsContent value="controllers" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Cog className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">Control Systems</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          Advanced control systems form the intelligence center of servo stabilizers, 
                          providing precise voltage sensing, calculations, and corrective actions.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Controller Benefits</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Rapid Response</span>
                                  <p className="text-sm text-gray-400">Millisecond correction of voltage fluctuations</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Advanced Algorithms</span>
                                  <p className="text-sm text-gray-400">Sophisticated control logic for stability</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Self-Diagnostics</span>
                                  <p className="text-sm text-gray-400">Built-in monitoring and error detection</p>
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
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Microcontroller Units</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">PIC microcontrollers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">ARM-based processors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">DSP controllers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">FPGA solutions</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Programmable logic controllers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Sensing Circuits</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Voltage sensing modules</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Current transformers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">High-precision transducers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Opto-isolators</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Analog-to-digital converters</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Display & Interface</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">LCD modules</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">LED indicator panels</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Touchscreen interfaces</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Control keypads</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Remote monitoring interfaces</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Communication</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">RS485/RS232 modules</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Ethernet interfaces</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Modbus RTU/TCP controllers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">IoT connectivity modules</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Wireless communication options</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                          <div className="flex items-center mb-2">
                            <Wrench className="h-5 w-5 text-primary mr-2" />
                            <h4 className="font-bold text-gray-800">Advanced Control Features</h4>
                          </div>
                          <p className="text-gray-600">
                            Our modern control systems offer advanced features like harmonic correction, power factor 
                            improvement, and adaptive response capabilities to address complex power quality challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="power" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">Power Components</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          High-quality power handling components form the backbone of servo stabilizers, 
                          managing voltage transformation and current regulation with precision.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Power Component Advantages</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">High Efficiency</span>
                                  <p className="text-sm text-gray-400">Minimal power loss during regulation</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Thermal Management</span>
                                  <p className="text-sm text-gray-400">Advanced cooling for continuous operation</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Overload Protection</span>
                                  <p className="text-sm text-gray-400">Robust design for unexpected conditions</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Power System Components</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Variable Transformers</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Toroidal transformers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Variac autotransformers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Buck-boost transformers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Multi-tap transformers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">IGBT-based transformers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Power Switching</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">IGBT modules</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">SCR assemblies</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">MOSFET power switches</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Solid-state relays</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Contactors and switches</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Protection Components</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Circuit breakers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Surge protectors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Overcurrent protection</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Thermal protection devices</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">EMI/RFI filters</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Power Supply & Regulation</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Control power supplies</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Voltage regulators</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Filter capacitors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Cooling systems</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Heat sinks and thermal management</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                          <div className="flex items-center mb-2">
                            <Shield className="h-5 w-5 text-primary mr-2" />
                            <h4 className="font-bold text-gray-800">Reliability Engineering</h4>
                          </div>
                          <p className="text-gray-600">
                            Our power components undergo rigorous reliability engineering, with each component 
                            designed for 24/7 continuous operation and tested for extreme conditions to ensure
                            long-term performance in critical applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="motors" className="mt-0">
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Settings className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">Motors & Drives</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          Precision servo motors and drive systems provide the mechanical action required
                          for variable transformer adjustment and voltage regulation.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Motor System Advantages</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Precision Positioning</span>
                                  <p className="text-sm text-gray-400">Micro-step control for exact voltage adjustment</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Rapid Response</span>
                                  <p className="text-sm text-gray-400">Quick reaction to voltage fluctuations</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Durability</span>
                                  <p className="text-sm text-gray-400">Long service life under continuous operation</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Motor & Drive Components</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Servo Motors</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">AC servo motors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">DC servo motors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Brushless servo motors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">High-torque motors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Stepper motors</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Motor Drives</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Servo drives</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">PWM controllers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Stepper drivers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Motor control boards</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Integrated motor controllers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Mechanical Components</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Gears and gearboxes</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Couplings and adapters</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Mounting brackets and hardware</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Linear actuators</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Limit switches and sensors</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Feedback Systems</h4>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Encoders</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Resolvers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Position sensors</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Tachometers</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">Hall effect sensors</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                          <div className="flex items-center mb-2">
                            <BarChart4 className="h-5 w-5 text-primary mr-2" />
                            <h4 className="font-bold text-gray-800">Performance Optimization</h4>
                          </div>
                          <p className="text-gray-600">
                            Our motor systems are pre-matched and optimized for specific servo stabilizer applications, 
                            ensuring perfect compatibility between motor, drive, and mechanical components for maximum
                            performance and system longevity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs> */}
        </div>
      </section>
      
      {/* Service Process with Visual Timeline */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Streamlined Procurement Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              How Our <span className="text-primary">Component Service Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our simplified process ensures you receive the right servo components with minimal hassle and downtime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "Component Identification",
                description: "Provide your servo model, serial number, or specific component details. Our technical team will help identify exact part requirements."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Quotation & Selection",
                description: "Receive detailed options with specifications, pricing, availability, and delivery timeframes for you to make an informed decision."
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Procurement & Delivery",
                description: "After approval, we source and deliver your components with express options available for urgent requirements."
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary" />,
                title: "Technical Support",
                description: "Receive installation guidance, compatibility verification, and ongoing technical support for your components."
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
                  <div className="hidden md:block absolute top-16 left-[calc(100%-24px)] w-full h-1 bg-gradient-to-r from-primary/80 to-primary/20 z-0"></div>
                )}
                <div className="bg-white rounded-xl shadow-lg p-8 relative z-10 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border-4 border-white shadow-md">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section with Gradient Background */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Request Servo Components
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">Component Specialists</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request a quote or information about our servo stabilizer components.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Component Request Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Required Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Servo stabilizer make and model</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Serial number (if available)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Specific component details or issue</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Urgency level and delivery requirements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Contact Methods</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>Technical support hotline</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-5 w-5 mr-3" />
                          <span>Express delivery options</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3" />
                          <span>Scheduled maintenance planning</span>
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
                      <label htmlFor="servoModel" className="block text-sm font-medium text-gray-700 mb-1">Servo Model & Details *</label>
                      <input
                        type="text"
                        id="servoModel"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="e.g., Model XYZ-1000, 50kVA, Single-Phase"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="componentDetails" className="block text-sm font-medium text-gray-700 mb-1">Component Requirements *</label>
                      <textarea
                        id="componentDetails"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe the components you need or the issue you're experiencing with your servo stabilizer..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
                        <select
                          id="urgency"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="standard">Standard (3-5 business days)</option>
                          <option value="priority">Priority (1-2 business days)</option>
                          <option value="emergency">Emergency (Same day/Next day)</option>
                          <option value="planned">Planned (Future scheduled date)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="componentType" className="block text-sm font-medium text-gray-700 mb-1">Component Type</label>
                        <select
                          id="componentType"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="controller">Control System</option>
                          <option value="power">Power Components</option>
                          <option value="motor">Motors & Drives</option>
                          <option value="multiple">Multiple Components</option>
                          <option value="unknown">Not Sure (Need Technical Assistance)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white">
                        Submit Component Request
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