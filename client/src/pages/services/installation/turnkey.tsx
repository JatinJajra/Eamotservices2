import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, HardDrive, Building, Settings, CheckCircle, Clock, FileText, 
  Users, BarChart, AlertTriangle, Zap, Shield
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function TurnkeyInstallationPage() {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useIntersectionObserver({ threshold: 0.1 });
  
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
                <Building className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Turnkey Installation <span className="text-accent">Projects</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              End-to-end power system installation services from expert technicians, 
              ensuring seamless implementation with minimal disruption to your operations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request Installation Quote</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#process">View Our Process</a>
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
  {/* Top Decorative Pattern */}
  <div className="absolute top-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img
      src="assets/img/hero/nav-parrten-top.png"
      alt=""
      className="w-full"
    />
  </div>

  {/* Animated Content */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="container mx-auto px-4 relative z-10"
  >
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-6 inline-flex items-center justify-center">
        <span className="bg-white/20 p-3 rounded-lg mr-4">
          <Building className="h-8 w-8" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
          Turnkey Installation <span className="text-accent">Projects</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        End-to-end power system installation services from expert technicians, 
        ensuring seamless implementation with minimal disruption to your operations.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="#" onClick={openModal}>Request Installation Quote</a>
        </Button>
        {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
          <a href="#process">View Our Process</a>
        </Button> */}
      </div>
    </div>
  </motion.div>

  {/* Bottom Decorative Pattern */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img
      src="assets/img/hero/nav-parrten-botoom.png"
      alt=""
      className="w-full"
    />
  </div>
</section>

      
      {/* Key Features */}
      <section 
        ref={featuresRef} 
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Complete Installation Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our Turnkey <span className="text-primary">Installation Approach</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your power system installation project, from initial assessment to 
              final commissioning and handover, ensuring a smooth and efficient process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-12 w-12 text-primary" />,
                title: "Single Point Responsibility",
                description: "We manage all aspects of your installation project, including permits, coordination with contractors, equipment procurement, and commissioning."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Expert Project Management",
                description: "Our experienced project managers coordinate all installation activities, ensuring timely execution and adherence to quality standards."
              },
              {
                icon: <FileText className="h-12 w-12 text-primary" />,
                title: "Comprehensive Documentation",
                description: "Complete system documentation, including test reports, compliance certificates, and operation manuals for future reference."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-primary" />,
                title: "Quality Assurance",
                description: "Rigorous quality checks at every stage of installation to ensure compliance with industry standards and manufacturer specifications."
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Custom-Engineered Solutions",
                description: "Tailored installation plans designed specifically for your facility's infrastructure, space constraints, and power requirements."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Minimal Disruption",
                description: "Strategic installation scheduling and implementation to minimize impact on your ongoing operations and business activities."
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
      
      {/* Installation Process */}
      <section 
        id="process"
        ref={processRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Turnkey Installation <span className="text-primary">Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures efficient, high-quality installations with minimal disruption to your operations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[2.5rem] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary-100"></div>
              
              {/* Process Steps */}
              {[
                {
                  title: "Site Assessment & Requirements Analysis",
                  description: "Our team conducts a comprehensive assessment of your site, including electrical capacity, space constraints, and structural considerations to determine the optimal installation approach.",
                  icon: <Building className="h-6 w-6 text-white" />
                },
                {
                  title: "Detailed Project Planning",
                  description: "We develop a detailed project plan, including timeline, resource allocation, equipment specifications, and safety procedures customized to your specific requirements.",
                  icon: <FileText className="h-6 w-6 text-white" />
                },
                {
                  title: "Permits & Regulatory Compliance",
                  description: "We handle all necessary permits, regulatory compliance documentation, and approvals required for the installation, ensuring adherence to local codes and standards.",
                  icon: <FileText className="h-6 w-6 text-white" />
                },
                {
                  title: "Equipment Procurement & Logistics",
                  description: "Sourcing of all equipment and materials needed for the installation, coordinating deliveries, and ensuring proper storage before installation begins.",
                  icon: <Wrench className="h-6 w-6 text-white" />
                },
                {
                  title: "Infrastructure Preparation",
                  description: "Preparation of the installation site, including any necessary civil works, electrical infrastructure modifications, and safety measures.",
                  icon: <HardDrive className="h-6 w-6 text-white" />
                },
                {
                  title: "Installation & Integration",
                  description: "Expert installation of power systems by our certified technicians, followed by integration with existing infrastructure and auxiliary systems.",
                  icon: <Settings className="h-6 w-6 text-white" />
                },
                {
                  title: "Testing & Commissioning",
                  description: "Comprehensive testing of all installed systems, including load testing, safety checks, and performance verification to ensure everything functions as specified.",
                  icon: <AlertTriangle className="h-6 w-6 text-white" />
                },
                {
                  title: "Training & Handover",
                  description: "Thorough training for your staff on system operation and maintenance, along with complete documentation handover and demonstration of all features.",
                  icon: <Users className="h-6 w-6 text-white" />
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex items-start mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}></div>
                  
                  {/* Process step content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-16 md:pl-0`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Step number circle */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Projects */}
      <section 
        ref={projectsRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Recent Turnkey <span className="text-primary">Installation Projects</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our recent turnkey installation projects across various industries and power system requirements.
            </p>
          </div>
          
          <Tabs defaultValue="commercial" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="commercial" className="px-6 py-3 rounded-lg">Commercial</TabsTrigger>
              <TabsTrigger value="industrial" className="px-6 py-3 rounded-lg">Industrial</TabsTrigger>
              <TabsTrigger value="healthcare" className="px-6 py-3 rounded-lg">Healthcare</TabsTrigger>
              <TabsTrigger value="data-center" className="px-6 py-3 rounded-lg">Data Centers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.1 * item }}
                  >
                    <Card className="overflow-hidden shadow-lg h-full">
                      <img 
                        src={`assets/img/gallery/0${item + 2}.jpg`}
                        alt={`Commercial Project ${item}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {["Office Complex Backup Power", "Commercial Mall UPS System", "Corporate HQ Power Infrastructure"][item - 1]}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {["Complete installation of redundant backup generator systems for a 12-story office complex.", 
                            "Installation of centralized UPS system with distributed power management for a shopping mall.", 
                            "End-to-end power system installation including generators, UPS, and monitoring systems."][item - 1]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            ["Generator", "UPS", "Monitoring"], 
                            ["UPS", "Power Distribution", "Battery Backup"], 
                            ["Generator", "UPS", "Synchronization", "Monitoring"]
                          ][item - 1].map((tag, i) => (
                            <span key={i} className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <Clock className="inline-block h-4 w-4 mr-1" />
                            {["3 weeks", "4 weeks", "6 weeks"][item - 1]}
                          </span>
                          <span>
                            <Building className="inline-block h-4 w-4 mr-1" />
                            {["Bengaluru", "Mumbai", "Chennai"][item - 1]}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="industrial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.1 * item }}
                  >
                    <Card className="overflow-hidden shadow-lg h-full">
                      <img 
                        src={`assets/img/service/service-0${item + 1}.jpg`}
                        alt={`Industrial Project ${item}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {["Manufacturing Plant Power", "Pharmaceutical Facility", "Automotive Production Line"][item - 1]}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {["Installation of high-capacity generators and power stabilization systems for continuous manufacturing operations.", 
                            "Critical power infrastructure setup with multiple redundancy layers for pharmaceutical production.", 
                            "Precision power system installation for sensitive automotive assembly line equipment."][item - 1]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            ["High-capacity Generator", "Stabilizer", "Remote Monitoring"], 
                            ["Critical Power", "Redundancy", "UPS"], 
                            ["Precision Power", "Voltage Regulation", "Generator"]
                          ][item - 1].map((tag, i) => (
                            <span key={i} className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <Clock className="inline-block h-4 w-4 mr-1" />
                            {["8 weeks", "10 weeks", "6 weeks"][item - 1]}
                          </span>
                          <span>
                            <Building className="inline-block h-4 w-4 mr-1" />
                            {["Pune", "Hyderabad", "Ahmedabad"][item - 1]}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="healthcare" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.1 * item }}
                  >
                    <Card className="overflow-hidden shadow-lg h-full">
                      <img 
                        src={`assets/img/gallery/0${item}.jpg`}
                        alt={`Healthcare Project ${item}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {["Multi-specialty Hospital", "Diagnostic Center", "Emergency Care Facility"][item - 1]}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {["Comprehensive power system installation for a 500-bed hospital with critical care facilities.", 
                            "Specialized power infrastructure for sensitive diagnostic equipment with zero-interruption capability.", 
                            "Rapid deployment of emergency power systems for a new urgent care facility."][item - 1]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            ["Critical Power", "Redundant Systems", "Auto-transfer"], 
                            ["Clean Power", "Voltage Regulation", "Battery Backup"], 
                            ["Rapid Deployment", "Emergency Power", "Seamless Transition"]
                          ][item - 1].map((tag, i) => (
                            <span key={i} className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <Clock className="inline-block h-4 w-4 mr-1" />
                            {["12 weeks", "6 weeks", "3 weeks"][item - 1]}
                          </span>
                          <span>
                            <Building className="inline-block h-4 w-4 mr-1" />
                            {["Delhi", "Kolkata", "Coimbatore"][item - 1]}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="data-center" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.1 * item }}
                  >
                    <Card className="overflow-hidden shadow-lg h-full">
                      <img 
                        src={`assets/img/service/service-0${item + 4}.jpg`}
                        alt={`Data Center Project ${item}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {["Cloud Provider Facility", "Financial Data Center", "Edge Computing Center"][item - 1]}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {["Installation of N+1 redundant power infrastructure for a major cloud service provider.", 
                            "Ultra-reliable power system deployment for a banking sector data center with multi-layer redundancy.", 
                            "Compact but robust power installation for distributed edge computing facilities."][item - 1]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {[
                            ["N+1 Redundancy", "Generator Arrays", "Modular UPS"], 
                            ["Financial-grade", "Triple Redundancy", "Instant Switchover"], 
                            ["Compact Design", "High Efficiency", "Remote Management"]
                          ][item - 1].map((tag, i) => (
                            <span key={i} className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <Clock className="inline-block h-4 w-4 mr-1" />
                            {["16 weeks", "20 weeks", "8 weeks"][item - 1]}
                          </span>
                          <span>
                            <Building className="inline-block h-4 w-4 mr-1" />
                            {["Mumbai", "Bengaluru", "Chennai"][item - 1]}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
                Ready to Start Your Turnkey Installation Project?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact our expert team to discuss your specific requirements and how our turnkey installation 
                services can provide a seamless, efficient solution for your power system needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="#" onClick={openModal}>Request Project Consultation</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
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