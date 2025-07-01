import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Battery, BatteryCharging, Zap, Shield, 
  Package, Truck, Clock, CheckCircle, Search,
  Settings, Wrench, BarChart, AlertTriangle, 
  FileText, Calendar
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function UPSModulesPage() {
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
      {/* Hero Section */}
      {/* <section 
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
                <BatteryCharging className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                UPS Modules & <span className="text-accent">Batteries</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              High-quality UPS replacement modules, batteries, and components with expert sourcing
              and technical support for all major UPS systems.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request UPS Parts Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#parts">Browse UPS Components</a>
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
  className="bg-[#154679] text-white py-20 md:py-28 relative overflow-hidden"
>
  <div className="absolute top-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
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
          <BatteryCharging className="h-8 w-8" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
          UPS Modules & <span className="text-accent">Batteries</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        High-quality UPS replacement modules, batteries, and components with expert sourcing
        and technical support for all major UPS systems.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="#" onClick={openModal}>Request UPS Parts Quote</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
          <a href="#parts">Browse UPS Components</a>
        </Button>
      </div>
    </div>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
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
              Comprehensive UPS Component Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Complete UPS <span className="text-primary">Sourcing Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our UPS parts services include modules, batteries, and component sourcing with 
              technical support for all major UPS brands and models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Battery className="h-12 w-12 text-primary" />,
                title: "Battery Replacement Solutions",
                description: "High-quality replacement batteries for all UPS sizes with proper specifications, installation support, and disposal of old batteries."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Power Modules & Components",
                description: "Genuine UPS power modules, circuit boards, and critical components for all major UPS brands including APC, Eaton, Vertiv, and more."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Quality Assurance",
                description: "All UPS components come with warranty protection and comprehensive testing to ensure reliability and compatibility."
              },
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Installation Services",
                description: "Expert technicians available for on-site installation and replacement of UPS components with minimal downtime."
              },
              {
                icon: <BarChart className="h-12 w-12 text-primary" />,
                title: "UPS Health Assessment",
                description: "Comprehensive UPS system health checks and component life assessment to prevent unexpected failures."
              },
              {
                icon: <Truck className="h-12 w-12 text-primary" />,
                title: "Expedited Delivery",
                description: "Priority shipping options for emergency UPS component replacements to minimize critical system downtime."
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
              Comprehensive UPS Parts Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              UPS <span className="text-primary">Components & Batteries</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our extensive range of UPS components for all major brands and models.
            </p>
          </div>
          
          <Tabs defaultValue="batteries" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="batteries" className="px-6 py-3 rounded-lg">Batteries</TabsTrigger>
              <TabsTrigger value="modules" className="px-6 py-3 rounded-lg">Power Modules</TabsTrigger>
              <TabsTrigger value="components" className="px-6 py-3 rounded-lg">Control Components</TabsTrigger>
            </TabsList>
            
            <TabsContent value="batteries" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Battery className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">UPS Batteries</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We Provide high-quality replacement batteries for all UPS brands and models, 
                        with proper specifications and enhanced service life.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Battery Service Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Extended Runtime Options</span>
                                <p className="text-sm text-gray-400">Customized battery solutions for extended backup times</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Recycling Program</span>
                                <p className="text-sm text-gray-400">Environmentally responsible disposal of old batteries</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Factory-Fresh Stock</span>
                                <p className="text-sm text-gray-400">All batteries supplied with recent manufacturing dates</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Battery Options</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">VRLA & AGM Batteries</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Small UPS batteries (7-12AH)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Medium capacity (18-100AH)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Large capacity (120-200AH)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Front terminal batteries</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">External battery cabinets</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Lithium-Ion Options</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">LiFePO4 replacement batteries</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Li-Ion battery modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery management systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Smart battery monitoring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Extended cycle life solutions</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Accessories & Connectivity</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery cables and connectors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery monitoring systems</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Temperature sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Junction boxes and fuse kits</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery cabinet ventilation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Specialized Solutions</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">High-temperature batteries</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Long-life design (10+ year)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">High-rate discharge batteries</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">OEM replacement packs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Custom battery configurations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="modules" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Power Modules</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We source genuine power modules for modular UPS systems from all major manufacturers, 
                        ensuring perfect compatibility and system integrity.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Module Replacement Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Hot-swappable Solutions</span>
                                <p className="text-sm text-gray-400">Replace modules without system downtime</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Capacity Upgrades</span>
                                <p className="text-sm text-gray-400">Add power capacity with additional modules</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">N+X Redundancy</span>
                                <p className="text-sm text-gray-400">Enhance system reliability with additional modules</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">UPS Module Options</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Power Modules by Brand</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">APC/Schneider Electric</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Eaton/Powerware</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Vertiv/Emerson/Liebert</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">ABB/GE</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Delta, Riello, Socomec</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Module Categories</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power modules (1-50kVA)</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Control modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Bypass modules</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Communication cards</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">I/O modules</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Wrench className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Module Replacement Services</h4>
                        </div>
                        <p className="text-gray-600">
                          Our technicians can perform on-site module replacement with proper configuration and testing to 
                          ensure seamless integration with your existing UPS system.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Settings className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Control Components</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        We source all internal UPS components including circuit boards, fans, capacitors,
                        transformers and other critical parts for repair and maintenance.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Component Solutions</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Obsolescence Management</span>
                                <p className="text-sm text-gray-400">Parts for legacy and discontinued UPS models</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Cost-effective Repairs</span>
                                <p className="text-sm text-gray-400">Component-level repair vs. full replacement</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Preventive Maintenance</span>
                                <p className="text-sm text-gray-400">Scheduled replacement of aging components</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">UPS Control Components</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Circuit Boards & Electronics</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Main control PCBs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Display/interface boards</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power supply boards</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Rectifier/inverter control boards</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Communication cards and interfaces</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Power Components</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Capacitors and capacitor kits</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Power transistors and SCRs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Transformers and inductors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Relays and contactors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Fuses and circuit breakers</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Mechanical Components</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Cooling fans and assemblies</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Display panels and bezels</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Chassis components</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Cable harnesses and connectors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Terminal blocks and covers</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Sensors & Monitoring</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Temperature sensors</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Current transformers</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Voltage sensing circuits</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Battery monitoring components</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Environmental monitoring accessories</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Component Compatibility</h4>
                        </div>
                        <p className="text-gray-600">
                          Our technical team can verify component compatibility with your specific UPS model and serial number
                          to ensure the correct parts are identified and supplied.
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
              How Our <span className="text-primary">Parts Service Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you receive the right UPS components with minimal hassle and downtime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "Identification",
                description: "Provide your UPS model, serial number, or component details. Our technical team will help identify exact part requirements if needed."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Quotation",
                description: "Receive a comprehensive quote including part numbers, pricing, availability, and delivery timeframes with multiple options when available."
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Fulfillment",
                description: "After approval, we source and ship your components with express delivery options for urgent requirements."
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary" />,
                title: "Installation Support",
                description: "Optional professional installation services or technical guidance for proper component replacement and system restoration."
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
              Request UPS Components
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">Parts Specialists</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request a quote or information about our UPS components and services.
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
                          <span>UPS make and model number</span>
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
                          <span>Urgency level and delivery requirements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Contact Methods</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>Rapid response time</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-5 w-5 mr-3" />
                          <span>Next-day delivery options available</span>
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
                      <label htmlFor="upsModel" className="block text-sm font-medium text-gray-700 mb-1">UPS Model & Serial Number *</label>
                      <input
                        type="text"
                        id="upsModel"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="e.g., APC Smart-UPS 3000VA, SN: SURT3000XLI/1234567890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="partDetails" className="block text-sm font-medium text-gray-700 mb-1">Parts Required / Issue Description *</label>
                      <textarea
                        id="partDetails"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe the parts you need or the issue you're experiencing with your UPS..."
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
                        <option value="emergency">Emergency (Same day/Next day)</option>
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