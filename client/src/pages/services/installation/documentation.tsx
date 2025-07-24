import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, FileCheck, Book, Files, ClipboardCheck, 
  FileVideo, FolderCheck, BookOpen, Database, Folder, User, Check
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function DocumentationHandoverPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: samplesRef, inView: samplesInView } = useIntersectionObserver({ threshold: 0.1 });
  
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
                <FileText className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Documentation & <span className="text-accent">Handover</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Comprehensive documentation services and structured handover processes for seamless knowledge transfer and operational excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Discuss Your Requirements</a>
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
          <FileText className="h-8 w-8" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
          Documentation & <span className="text-accent">Handover</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Comprehensive documentation services and structured handover processes for seamless knowledge transfer and operational excellence.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="#" onClick={openModal}>Discuss Your Requirements</a>
        </Button>
        {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
          <a href="#process">View Our Process</a>
        </Button> */}
      </div>
    </div>
  </motion.div>

  {/* Bottom Decorative Pattern */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
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
              Comprehensive Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Complete <span className="text-primary">Documentation Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide thorough, well-structured documentation and formal handover procedures that ensure 
              your team has all the information needed for efficient system operation and maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="h-12 w-12 text-primary" />,
                title: "System Documentation",
                description: "Comprehensive documentation of all installed systems, including specifications, configurations, and as-built drawings."
              },
              {
                icon: <Book className="h-12 w-12 text-primary" />,
                title: "Operation Manuals",
                description: "Detailed operation manuals with step-by-step procedures for normal operation, emergency procedures, and troubleshooting guides."
              },
              {
                icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
                title: "Maintenance Documentation",
                description: "Structured maintenance schedules, procedures, and recommended practices to ensure optimal system performance."
              },
              {
                icon: <FileVideo className="h-12 w-12 text-primary" />,
                title: "Training Resources",
                description: "Interactive training materials including videos, demonstrations, and hands-on exercises for your operational staff."
              },
              {
                icon: <Database className="h-12 w-12 text-primary" />,
                title: "Digital Documentation Portal",
                description: "Secure online portal for accessing all system documentation, manuals, and training materials from any device."
              },
              {
                icon: <FolderCheck className="h-12 w-12 text-primary" />,
                title: "Regulatory Compliance Files",
                description: "Complete documentation of compliance with relevant standards, codes, and regulations for audit purposes."
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
      
      {/* Documentation & Handover Process */}
      <section 
        id="process"
        ref={processRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Structured Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our Documentation & <span className="text-primary">Handover Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to documentation and handover ensures a comprehensive transfer of knowledge and operational responsibility.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Files className="h-8 w-8 text-white" />,
                  title: "Documentation Preparation",
                  description: "Comprehensive compilation of all system information, manuals, drawings, test reports, and regulatory compliance documents.",
                  steps: [
                    "System specifications and data sheets",
                    "As-built drawings and schematics",
                    "Test reports and commissioning data",
                    "Regulatory compliance certificates",
                    "Warranty documentation"
                  ]
                },
                {
                  icon: <User className="h-8 w-8 text-white" />,
                  title: "Training & Knowledge Transfer",
                  description: "Structured training sessions to ensure your team fully understands how to operate and maintain the installed systems.",
                  steps: [
                    "Operational procedures training",
                    "Maintenance requirements overview",
                    "Emergency procedures demonstration",
                    "Troubleshooting methodology",
                    "Hands-on practical sessions"
                  ]
                },
                {
                  icon: <FolderCheck className="h-8 w-8 text-white" />,
                  title: "Formal Handover Process",
                  description: "Structured handover meetings and processes to formally transfer responsibility and verify knowledge transfer.",
                  steps: [
                    "System walkthrough and demonstration",
                    "Q&A sessions with technical experts",
                    "Handover checklist completion",
                    "Sign-off and acceptance",
                    "Post-handover support arrangement"
                  ]
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-primary p-4 flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{process.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{process.description}</p>
                    
                    <ul className="space-y-2">
                      {process.steps.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Follow-up Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 bg-primary/5 border border-primary/20 p-6 rounded-xl"
            >
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="bg-primary/10 p-3 rounded-full mb-4 md:mb-0 md:mr-5">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Post-Handover Support</h3>
                  <p className="text-gray-600">
                    Our commitment doesn't end with handover. We provide ongoing support to ensure your team 
                    is comfortable with all aspects of system operation and maintenance. This includes follow-up 
                    training sessions, technical support, and regular check-ins to address any questions or concerns.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Documentation Samples */}
      <section 
        ref={samplesRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Documentation Examples
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Sample <span className="text-primary">Documentation Packages</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore examples of the comprehensive documentation packages we provide for various power systems.
            </p>
          </div>
          
          <Tabs defaultValue="generator" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="generator" className="px-6 py-2">Generator Systems</TabsTrigger>
              <TabsTrigger value="ups" className="px-6 py-2">UPS Systems</TabsTrigger>
              <TabsTrigger value="synchronization" className="px-6 py-2">Synchronization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: samplesInView ? 1 : 0, y: samplesInView ? 0 : 30 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Generator Documentation Package</h3>
                        <p className="text-gray-600 mb-6">
                          Our generator documentation packages include all necessary information for operation, maintenance, and troubleshooting of your diesel generator systems.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">System Specifications & Drawings</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Generator specifications and data sheets</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">As-built electrical schematics</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Installation layout and piping diagrams</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Control system architecture diagrams</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Operation & Maintenance</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Startup and shutdown procedures</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Maintenance schedules and procedures</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Troubleshooting guides and fault codes</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Emergency operation protocols</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Testing & Compliance</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Commissioning test reports</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Load bank test results</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Emissions compliance certificates</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Warranty documentation</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Documentation Format Options</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                              <Folder className="h-6 w-6 text-primary mr-2" />
                              <h4 className="font-bold">Printed Binders</h4>
                            </div>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Organized section dividers</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Laminated quick-reference guides</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Full-size drawings and diagrams</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                              <Database className="h-6 w-6 text-primary mr-2" />
                              <h4 className="font-bold">Digital Portal</h4>
                            </div>
                            <ul className="space-y-1 text-sm">
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Searchable document database</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Interactive system diagrams</span>
                              </li>
                              <li className="flex items-center">
                                <Check className="h-3 w-3 text-primary mr-1" />
                                <span>Video demonstrations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/20 rounded-lg">
                          <h4 className="font-bold mb-2">Client Testimonial</h4>
                          <p className="text-sm italic">
                            "The documentation package provided by EAMOT was exceptional. The detailed manuals and training 
                            resources have been invaluable for our maintenance team. The digital portal especially has made 
                            accessing information incredibly efficient."
                          </p>
                          <div className="mt-2 text-sm font-medium">
                            - Operations Director, Major Data Center
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="ups" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: samplesInView ? 1 : 0, y: samplesInView ? 0 : 30 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">UPS Documentation Package</h3>
                        <p className="text-gray-600 mb-6">
                          Comprehensive documentation for UPS systems, including operation guides, maintenance procedures, and battery management protocols.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">System Specifications</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">UPS system technical specifications</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Battery bank configuration details</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Power distribution schematics</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Network integration diagrams</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Operation & Monitoring</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Control panel operation guide</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Status indicator interpretation</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Remote monitoring setup</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Alarm response procedures</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Maintenance & Testing</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <ClipboardCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Battery maintenance schedule</span>
                              </li>
                              <li className="flex items-start">
                                <ClipboardCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">System test procedures</span>
                              </li>
                              <li className="flex items-start">
                                <ClipboardCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Firmware update process</span>
                              </li>
                              <li className="flex items-start">
                                <ClipboardCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">End-of-life replacement guidance</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Training Resources Included</h3>
                        
                        <div className="space-y-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <FileVideo className="h-6 w-6 text-primary mr-2" />
                              <h4 className="font-bold">Video Tutorials</h4>
                            </div>
                            <p className="text-sm">
                              Comprehensive video guides for system operation, maintenance procedures, and troubleshooting common issues. Available in your documentation portal.
                            </p>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <User className="h-6 w-6 text-primary mr-2" />
                              <h4 className="font-bold">Hands-On Training Sessions</h4>
                            </div>
                            <p className="text-sm">
                              On-site training with our technical specialists to ensure your team is fully comfortable with all aspects of UPS operation and maintenance.
                            </p>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Book className="h-6 w-6 text-primary mr-2" />
                              <h4 className="font-bold">Quick Reference Guides</h4>
                            </div>
                            <p className="text-sm">
                              Laminated quick-reference guides for essential procedures and emergency responses, designed for posting near equipment.
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/20 rounded-lg">
                          <h4 className="font-bold mb-2">Documentation Benefits</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Reduced training time for new staff</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Faster troubleshooting during issues</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Consistent maintenance quality</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Regulatory compliance support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="synchronization" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: samplesInView ? 1 : 0, y: samplesInView ? 0 : 30 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Synchronization System Documentation</h3>
                        <p className="text-gray-600 mb-6">
                          Specialized documentation for generator synchronization systems, including parallel operation, 
                          load sharing, and automatic transfer equipment.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">System Architecture</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Synchronization controller specifications</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Interface schematics and connection diagrams</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Communication network architecture</span>
                              </li>
                              <li className="flex items-start">
                                <FileText className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Control logic diagrams</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Operation Procedures</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Startup and synchronization sequence</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Load sharing management</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Normal shutdown procedures</span>
                              </li>
                              <li className="flex items-start">
                                <Book className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Emergency operating procedures</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Testing & Verification</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Synchronization parameter test results</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Load transfer test documentation</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Failover scenario test results</span>
                              </li>
                              <li className="flex items-start">
                                <FileCheck className="h-4 w-4 text-primary mt-1 mr-2" />
                                <span className="text-gray-700">Load balancing verification reports</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-white p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Technical Documentation Samples</h3>
                        
                        <div className="space-y-4 mb-auto">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-3">
                                <span className="text-white font-bold">1</span>
                              </div>
                              <h4 className="font-bold">Comprehensive System Overview</h4>
                            </div>
                            <img 
                              src="assets/img/service/service-04.jpg" 
                              alt="System Overview Diagram"
                              className="w-full h-32 object-cover rounded-md mt-2"
                            />
                            <p className="text-xs mt-2">
                              Detailed system architecture diagram showing interconnections between generators, 
                              synchronization controllers, load sharing modules, and distribution systems.
                            </p>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-3">
                                <span className="text-white font-bold">2</span>
                              </div>
                              <h4 className="font-bold">Controller Configuration Guide</h4>
                            </div>
                            <p className="text-sm">
                              Detailed step-by-step procedures for configuring synchronization controllers, 
                              including parameter explanations, optimal settings, and troubleshooting guidance.
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="bg-gray-800 p-2 rounded text-xs">
                                <span className="font-bold block">Voltage Parameters:</span>
                                Nominal: 400V ±1%<br />
                                Sync Window: ±5%
                              </div>
                              <div className="bg-gray-800 p-2 rounded text-xs">
                                <span className="font-bold block">Frequency Parameters:</span>
                                Nominal: 50Hz ±0.1Hz<br />
                                Sync Window: ±0.2Hz
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/20 rounded-lg">
                          <h4 className="font-bold mb-2">Expert Technical Support</h4>
                          <p className="text-sm">
                            In addition to comprehensive documentation, our synchronization system packages include:
                          </p>
                          <ul className="space-y-1 text-sm mt-2">
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>90 days of priority technical support</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Remote system monitoring during initial operation</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-3 w-3 text-primary mr-2" />
                              <span>Follow-up consultation after 30 days of operation</span>
                            </li>
                          </ul>
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
                Ensure Complete Knowledge Transfer for Your Power Systems
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us to discuss your documentation and handover requirements. Our expert team will 
                ensure you have all the information and training needed for successful system operation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="#" onClick={openModal}>Discuss Your Requirements</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
                  <a href="tel:08041663297">Call Us: 080-41663297</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}