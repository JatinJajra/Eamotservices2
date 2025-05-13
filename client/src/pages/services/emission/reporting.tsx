import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, BarChart, Shield, ArrowRight,
  Package, Truck, Clock, CheckCircle, Search,
  Settings, Wrench, Clipboard, BookCheck,
  Calendar, ClipboardCheck, BookOpen, LineChart,
  Database, Globe, FileLock2, FileCheck, BarChart4,
  FileBarChart, FileInput, ChevronRight, FileSpreadsheet,
  FolderArchive, PieChart, Download, Share2, ClipboardList
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ComplianceReportingPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  
  // Document showcase state
  const [activeDocument, setActiveDocument] = useState(0);
  
  // Sample reports/documents for the interactive document viewer
  const reportDocuments = [
    {
      title: "Emission Compliance Certificate",
      icon: <DocumentCheck className="h-10 w-10" />,
      date: "May 10, 2025",
      description: "Official certification document for regulatory compliance",
      color: "purple",
      badges: ["Official", "Compliance", "Certified"]
    },
    {
      title: "Quarterly Performance Analysis",
      icon: <FileBarChart className="h-10 w-10" />,
      date: "April 15, 2025",
      description: "Quarterly analysis of emission control system performance",
      color: "blue",
      badges: ["Quarterly", "Analytics", "Performance"]
    },
    {
      title: "Environmental Impact Statement",
      icon: <Globe className="h-10 w-10" />,
      date: "March 22, 2025",
      description: "Detailed assessment of environmental impact and mitigation measures",
      color: "green",
      badges: ["Environmental", "Impact", "Assessment"]
    },
    {
      title: "Regulatory Compliance Checklist",
      icon: <ClipboardCheck className="h-10 w-10" />,
      date: "February 8, 2025",
      description: "Comprehensive checklist of all regulatory requirements",
      color: "orange",
      badges: ["Checklist", "Regulatory", "Requirements"]
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Document/Report Theme */}
      <section 
        ref={heroRef}
        className="relative py-20 md:py-28 overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #312e81 0%, #4338ca 100%)"
        }}
      >
        {/* Document-themed background elements */}
        <div className="absolute inset-0 z-0">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-paper-texture opacity-5"></div>
          <style dangerouslySetInnerHTML={{ __html: `
            .bg-paper-texture {
              background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            }
          `}} />
          
          {/* Document outlines in background */}
          <div className="absolute inset-0 flex flex-wrap justify-around items-center pointer-events-none">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-24 h-32 sm:w-32 sm:h-44 bg-white/5 rounded border border-white/10 shadow-lg"
                style={{ 
                  transform: `rotate(${-5 + Math.random() * 10}deg)`,
                  position: 'absolute',
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  zIndex: 0
                }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [i % 2 === 0 ? -3 : 3, i % 2 === 0 ? 3 : -3, i % 2 === 0 ? -3 : 3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.7
                }}
              />
            ))}
          </div>
          
          {/* Floating document icons */}
          <div className="absolute inset-0">
            {[
              { icon: <FileText className="h-6 w-6 text-indigo-200/40" />, top: '15%', left: '10%' },
              { icon: <FileBarChart className="h-6 w-6 text-indigo-200/40" />, top: '70%', left: '80%' },
              { icon: <FileCheck className="h-6 w-6 text-indigo-200/40" />, top: '30%', left: '85%' },
              { icon: <FileSpreadsheet className="h-6 w-6 text-indigo-200/40" />, top: '80%', left: '15%' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: item.top, left: item.left }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Main content with document showcase */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <div className="h-2 w-2 rounded-full bg-indigo-300 mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Regulatory Excellence</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Compliance <span className="text-indigo-300">Reporting</span> Services
                </h1>
                
                <p className="text-lg text-indigo-100 mb-8 max-w-lg">
                  Comprehensive documentation and reporting services to ensure your emission control systems meet all regulatory requirements with precision and clarity.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    size="lg"
                  >
                    View Sample Reports
                  </Button>
                </div>
                
                {/* Report stats */}
                <div className="grid grid-cols-3 gap-4 mt-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-xs text-indigo-200">Compliance Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">24h</div>
                    <div className="text-xs text-indigo-200">Turnaround Time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-xs text-indigo-200">Report Types</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Interactive document showcase */}
            <div className="lg:col-span-7">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Document selector */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-xl">
                  {/* Document tabs */}
                  <div className="grid grid-cols-4 border-b border-white/20">
                    {reportDocuments.map((doc, index) => (
                      <button
                        key={index}
                        className={`py-3 px-2 text-xs md:text-sm text-center transition-colors ${
                          activeDocument === index
                            ? 'bg-indigo-700/50 border-b-2 border-indigo-400'
                            : 'hover:bg-white/5'
                        }`}
                        onClick={() => setActiveDocument(index)}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`text-${reportDocuments[index].color}-400`}>
                            {reportDocuments[index].icon}
                          </div>
                          <div className="mt-1 font-medium truncate max-w-full">{doc.title}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Document viewer */}
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeDocument}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 p-4 rounded-lg bg-${reportDocuments[activeDocument].color}-500/20`}>
                            {reportDocuments[activeDocument].icon}
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="text-xl font-bold mb-2">{reportDocuments[activeDocument].title}</h3>
                              <div className="text-sm text-indigo-200">{reportDocuments[activeDocument].date}</div>
                            </div>
                            
                            <p className="text-indigo-100 mb-4">{reportDocuments[activeDocument].description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {reportDocuments[activeDocument].badges.map((badge, i) => (
                                <span key={i} className="px-2 py-1 text-xs rounded-full bg-indigo-700/50 border border-indigo-500/50">
                                  {badge}
                                </span>
                              ))}
                            </div>
                            
                            {/* Document preview */}
                            <div className="border border-white/20 rounded-lg p-4 bg-white/5 mb-4">
                              <div className="flex justify-between items-center mb-3">
                                <div className="text-sm font-semibold">Document Preview</div>
                                <div className="text-xs text-indigo-200">EAMOT-{2025}-{activeDocument + 1000}</div>
                              </div>
                              
                              {/* Document content preview with dummy lines */}
                              <div className="space-y-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div key={i} className="h-3 bg-white/10 rounded" style={{ width: `${60 + Math.random() * 40}%` }}></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-3">
                              <Button variant="outline" size="sm" className="border-indigo-400/50 text-indigo-200">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="outline" size="sm" className="border-indigo-400/50 text-indigo-200">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Document stack effect */}
                <div className="absolute -bottom-3 -left-3 right-3 h-3 bg-indigo-950/60 blur-sm rounded"></div>
                <div className="absolute -bottom-6 -left-6 right-6 h-6 bg-indigo-950/40 blur-md rounded"></div>
              </motion.div>
            </div>
          </div>
        </div>
      >
        {/* Animated floating data elements */}
        <div className="absolute inset-0" aria-hidden="true">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-20"
              style={{
                width: `${Math.random() * 100 + 30}px`,
                height: `${Math.random() * 100 + 30}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationIterationCount: 'infinite',
                animationName: i % 2 === 0 ? 'float-up' : 'float-down',
                animationTimingFunction: 'ease-in-out',
                backgroundColor: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '10%' : '0%'
              }}
            />
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes float-up {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          @keyframes float-down {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
        `}} />
        
        {/* Data grid background */}
        <div className="absolute inset-0 bg-data-grid opacity-10"></div>
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-data-grid {
            background-image: 
              radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}} />
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
                <FileText className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Compliance <span className="text-accent">Reporting</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Comprehensive emission compliance reporting services ensuring accurate documentation,
              timely submissions, and full adherence to regulatory requirements.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#contact">Request Reporting Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#services">Explore Reporting Options</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Service Features with Interactive Layout */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-white relative"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        
        {/* Subtle data flow background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="6,3" />
            <path d="M0,20 L100,50" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="6,3" />
            <path d="M0,40 L100,70" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="6,3" />
            <path d="M0,60 L100,90" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="6,3" />
            <path d="M0,80 L100,30" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="6,3" />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Comprehensive Reporting Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Expert <span className="text-primary">Compliance Documentation</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our specialized compliance reporting services ensure your emission data is accurately
              documented, properly formatted, and submitted on time to regulatory authorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
                title: "Data Management",
                description: "Advanced systems for collecting, validating, organizing, and securely storing all emission monitoring data.",
                benefits: ["Secure storage", "Automated collection", "Data integrity"]
              },
              {
                icon: <BookOpen className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Regulatory Expertise",
                description: "In-depth knowledge of reporting requirements across all major regulatory frameworks and jurisdictions.",
                benefits: ["Current standards", "Jurisdiction expertise", "Requirement mapping"]
              },
              {
                icon: <LineChart className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                title: "Advanced Analytics",
                description: "Sophisticated data analysis to identify trends, anomalies, and potential compliance issues before reporting.",
                benefits: ["Predictive analysis", "Pattern recognition", "Early warnings"]
              },
              {
                icon: <ClipboardCheck className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Documentation Preparation",
                description: "Comprehensive preparation of all required reports, certifications, and supporting documentation.",
                benefits: ["Standardized formats", "Complete documentation", "Expert review"]
              },
              {
                icon: <Calendar className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
                title: "Submission Management",
                description: "Timely filing of all reports with proper tracking, confirmation, and regulatory authority follow-up.",
                benefits: ["Deadline tracking", "Submission confirmation", "Regulatory liaison"]
              },
              {
                icon: <Shield className="h-14 w-14 text-white" />,
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                title: "Compliance Assurance",
                description: "Thorough verification processes ensuring all submissions meet or exceed regulatory requirements.",
                benefits: ["Multi-level review", "Validation checks", "Continuous monitoring"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center">
                      <div className="bg-indigo-600/80 backdrop-blur-sm p-3 rounded-lg mr-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#contact" className="text-indigo-600 font-medium flex items-center hover:underline">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
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
              Specialized Reporting Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our <span className="text-primary">Reporting Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our range of specialized compliance reporting services designed for different regulatory requirements.
            </p>
          </div>
          
          <Tabs defaultValue="periodic" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger value="periodic" className="px-6 py-3 rounded-lg">Periodic Reporting</TabsTrigger>
              <TabsTrigger value="incident" className="px-6 py-3 rounded-lg">Incident Reporting</TabsTrigger>
              <TabsTrigger value="audit" className="px-6 py-3 rounded-lg">Audit & Verification</TabsTrigger>
            </TabsList>
            
            <TabsContent value="periodic" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Periodic Reporting</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Comprehensive management of all regularly scheduled emission compliance reports
                        required by regulatory authorities, from monthly summaries to annual certifications.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Key Advantages</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Never Miss a Deadline</span>
                                <p className="text-sm text-gray-400">Automated tracking of all reporting schedules</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Format Compliance</span>
                                <p className="text-sm text-gray-400">Reports in exact required formats and structures</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Data Integrity</span>
                                <p className="text-sm text-gray-400">Rigorous verification before submission</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Periodic Reporting Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Report Types</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Monthly emissions summaries</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Quarterly compliance reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Semi-annual monitoring reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Annual compliance certifications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Emissions inventory reports</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Data Management</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Automated data collection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data validation and verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Gap analysis and correction</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Statistical analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data archiving and retrieval</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Reporting Formats</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Electronic submissions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">XML/JSON formatted data</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Agency-specific portals</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Certified documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Secure digital signatures</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Regulatory Frameworks</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">CPCB/SPCB requirements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Environmental clearance conditions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Factory Act compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Industrial emission standards</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">International frameworks</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Deadline-Proof Process</h4>
                        </div>
                        <p className="text-gray-600">
                          Our periodic reporting service includes a multi-stage verification and notification system
                          with automated reminders, early preparation schedules, and pre-submission reviews to
                          ensure all reports are filed accurately and well before regulatory deadlines.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="incident" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <Clipboard className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Incident Reporting</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Expert management of emission exceedance reporting, violation notifications, and
                        other non-routine regulatory communications required during exceptional events.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Incident Reporting Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Rapid Response</span>
                                <p className="text-sm text-gray-400">Immediate handling of reporting requirements</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Risk Mitigation</span>
                                <p className="text-sm text-gray-400">Strategic approach to minimize consequences</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Corrective Documentation</span>
                                <p className="text-sm text-gray-400">Comprehensive action plan development</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Incident Reporting Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Exceedance Reporting</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Immediate notification documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Exceedance analysis reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Root cause documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Corrective action reporting</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Follow-up compliance verification</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Malfunction Reporting</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Equipment failure documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Monitoring system downtime reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Data gap justification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Alternate monitoring plans</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Return to compliance documentation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Corrective Actions</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Corrective action plans</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Implementation documentation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Effectiveness verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Preventive measure reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Long-term compliance strategies</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Regulatory Communication</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Authority notification letters</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Response to violations</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Variance requests</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Compliance schedule proposals</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Settlement documentation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Strategic Response Protocol</h4>
                        </div>
                        <p className="text-gray-600">
                          Our incident reporting services include a strategic response protocol that 
                          balances full regulatory transparency with careful documentation to minimize
                          potential consequences while maintaining complete compliance with all reporting obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="audit" className="mt-0">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                          <ClipboardCheck className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Audit & Verification</h3>
                      </div>
                      
                      <p className="mb-6 text-gray-300">
                        Comprehensive services for emission reporting audits, data verification, and
                        third-party validation to ensure accuracy, completeness, and regulatory trust.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Audit Benefits</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Independent Verification</span>
                                <p className="text-sm text-gray-400">Third-party validation adds credibility</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Error Prevention</span>
                                <p className="text-sm text-gray-400">Multi-level review eliminates mistakes</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1" />
                              <div>
                                <span className="font-medium">Regulatory Confidence</span>
                                <p className="text-sm text-gray-400">Builds trust with authorities</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Verification Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Data Verification</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Source data validation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Calculation methodology review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Statistical analysis</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Anomaly detection</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Uncertainty assessment</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Documentation Audit</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Completeness verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Format and structure review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Regulatory requirement alignment</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Supporting evidence verification</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Certification criteria confirmation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Third-Party Validation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Independent expert review</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Accredited verification services</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Verification statements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Assurance reports</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Gap identification</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary border-b border-gray-200 pb-2 mb-3">Continuous Improvement</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Process assessment</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Procedure optimization</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Quality management system</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Staff training recommendations</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700">Best practice implementation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="flex items-center mb-2">
                          <FileLock2 className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-bold text-gray-800">Verification Standards</h4>
                        </div>
                        <p className="text-gray-600">
                          Our verification services follow internationally recognized standards for 
                          environmental data verification, including ISO 14064-3, ISAE 3000, and 
                          regulatory-specific verification protocols to ensure the highest level of 
                          data integrity and reporting confidence.
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
      
      {/* Reporting Process */}
      <section 
        ref={processRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Reporting Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              How Our <span className="text-primary">Compliance Reporting Works</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures accurate, complete, and timely reporting for full regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Data Collection",
                description: "Comprehensive gathering of emissions data from monitoring systems, testing results, and operational records."
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Data Analysis",
                description: "Thorough verification, validation, and analysis of all data for accuracy, completeness, and regulatory compliance."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Report Preparation",
                description: "Expert development of all required reports in proper formats with supporting documentation and certifications."
              },
              {
                icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
                title: "Quality Verification",
                description: "Multi-level review and quality assurance checks to ensure accuracy, completeness, and regulatory compliance."
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Submission & Follow-up",
                description: "Timely filing with regulatory authorities, tracking of submissions, and management of agency communications."
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
              Request Reporting Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Contact Our <span className="text-primary">Reporting Team</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to request emission compliance reporting services for your facility.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Reporting Request Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Required Information</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Facility information and location</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Regulatory framework and jurisdiction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Reporting type and frequency</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                          <span>Equipment/emission source details</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Service Options</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3" />
                          <span>Periodic reporting management</span>
                        </div>
                        <div className="flex items-center">
                          <Clipboard className="h-5 w-5 mr-3" />
                          <span>Incident/exceedance reporting</span>
                        </div>
                        <div className="flex items-center">
                          <ClipboardCheck className="h-5 w-5 mr-3" />
                          <span>Audit and verification services</span>
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
                      <label htmlFor="facilityDetails" className="block text-sm font-medium text-gray-700 mb-1">Facility/Equipment Details *</label>
                      <input
                        type="text"
                        id="facilityDetails"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Facility location, equipment type, emission sources"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="regulatoryFramework" className="block text-sm font-medium text-gray-700 mb-1">Regulatory Framework *</label>
                      <input
                        type="text"
                        id="regulatoryFramework"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Applicable regulations and jurisdiction"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reportingRequirements" className="block text-sm font-medium text-gray-700 mb-1">Reporting Requirements & Details *</label>
                      <textarea
                        id="reportingRequirements"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        placeholder="Please describe your reporting requirements, frequency, challenges, and any specific compliance needs..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                        <select
                          id="serviceType"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="periodicReporting">Periodic Reporting</option>
                          <option value="incidentReporting">Incident Reporting</option>
                          <option value="verification">Audit & Verification</option>
                          <option value="comprehensive">Comprehensive Solution</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Reporting Frequency *</label>
                        <select
                          id="frequency"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20"
                        >
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="semiannual">Semi-annual</option>
                          <option value="annual">Annual</option>
                          <option value="incident">As-needed (incidents only)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white">
                        Submit Reporting Request
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