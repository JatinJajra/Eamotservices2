import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  ClipboardList,
  Wrench,
  Gauge,
  BookOpen,
  Shield,
  Move,
  Map,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BarChart4,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactModal from "@/components/Popup/ContectModal";
import { CheckCircle, Users } from "lucide-react";


const DGInstallationPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const installationSteps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "Site Assessment",
      description:
        "Comprehensive evaluation of installation location with detailed planning for foundation, ventilation, and exhaust systems.",
      color: "bg-blue-50",
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Layout Planning",
      description:
        "Detailed planning of generator placement, cable routing, exhaust path, and access considerations for optimal operation.",
      color: "bg-green-50",
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Transportation",
      description:
        "Specialized equipment transport with professional handling to ensure safe delivery to your site.",
      color: "bg-amber-50",
    },
    {
      icon: <Move className="h-8 w-8 text-primary" />,
      title: "Positioning",
      description:
        "Precise placement using advanced equipment to properly situate your generator in the designated location.",
      color: "bg-indigo-50",
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Installation",
      description:
        "Expert installation by certified technicians with specialized experience in diesel generator systems.",
      color: "bg-red-50",
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Commissioning",
      description:
        "Comprehensive performance testing including load testing, emissions verification, and operational parameter confirmation.",
      color: "bg-purple-50",
    },
  ];
  const phaseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};
const progressBarVariants = {
  initial: { width: 0 },
  animate: { width: "62%", transition: { duration: 1 } },
};


  const shiftingConsiderations = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "When to Relocate Your Generator",
      items: [
        "Facility expansion or renovation projects",
        "Organizational relocation to new premises",
        "Optimizing generator placement for improved efficiency",
        "Noise or emission regulation compliance requirements",
        "Enhanced access for maintenance and servicing",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      title: "Shifting Challenges",
      items: [
        "Weight and dimension constraints during transport",
        "Potential for internal component damage if improperly moved",
        "Electrical and mechanical reconnection complexities",
        "Regulatory approvals for new installation location",
        "Minimizing operational downtime during transition",
      ],
    },
  ];

  const successMetrics = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Fast Turnaround",
      value: "24-48 hrs",
      description:
        "Average installation completion time for standard deployments",
      extraText: "Depends on scope of work and location",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Safety Record",
      value: "100%",
      description: "Perfect safety record across all installation projects",
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: "First-time Success",
      value: "98.5%",
      description: "Rate of installations completed without callbacks",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 bottom-0 text-white/10" width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="none">
            <path d="M0,0 L0,800 C200,700 400,800 600,750 C700,725 800,700 800,600 L800,0 L0,0 Z" fill="currentColor" />
          </svg>
          <svg className="absolute right-0 top-0 text-white/5" width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="none">
            <path d="M800,0 L800,800 L0,800 L0,700 C100,650 300,700 400,650 C550,580 650,550 800,450 L800,0 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              DG Installation & Shifting
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl opacity-90 mb-8 max-w-2xl"
            >
              Professional installation, commissioning, and relocation services to ensure your power generation equipment delivers optimal performance and reliability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#" onClick={openModal} >Schedule Installation Service</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24 overflow-hidden">
        {/* Background SVGs */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute left-0 bottom-0 text-white/10"
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L0,800 C200,700 400,800 600,750 C700,725 800,700 800,600 L800,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="absolute right-0 top-0 text-white/5"
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            preserveAspectRatio="none"
          >
            <path
              d="M800,0 L800,800 L0,800 L0,700 C100,650 300,700 400,650 C550,580 650,550 800,450 L800,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl flex flex-col justify-center mt-5 pt-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                DG Installation & Shifting
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-2xl"
              >
                Professional installation, commissioning, and relocation
                services to ensure your power generation equipment delivers
                optimal performance and reliability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="#" onClick={openModal}>
                    Schedule Installation Service
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Custom Visual */}
            <div className="w-full lg:w-1/2">
    <div className="lg:flex justify-center">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full h-full p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-1">
              Installation Progress
            </h3>
            <p className="text-sm text-gray-400">Project #DG-2024-089</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Overall Progress</span>
              <span className="text-lg font-bold text-primary">62%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-primary to-blue-400 h-3 rounded-full"
                variants={progressBarVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </div>

          {/* Project Phases */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Project Phases
            </h4>
            <div className="space-y-2">
              {/* Completed Phases */}
              {[
                { name: "Site Survey", days: "2 days" },
                { name: "Foundation Work", days: "5 days" },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={phaseVariants}
                  className="flex items-center justify-between p-2 rounded bg-green-900/30 border-l-2 border-green-400"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-300">{phase.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{phase.days}</span>
                </motion.div>
              ))}

              {/* Active Phase */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-between p-2 rounded bg-primary/20 border-l-2 border-primary"
              >
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary">Equipment Install</span>
                </div>
                <span className="text-xs text-gray-500">3 days</span>
              </motion.div>

              {/* Pending Phases */}
              {[
                { name: "Testing & Commissioning", days: "2 days" },
                { name: "Documentation", days: "1 day" },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  custom={i + 3}
                  initial="hidden"
                  animate="visible"
                  variants={phaseVariants}
                  className="flex items-center justify-between p-2 rounded bg-gray-700/30 border-l-2 border-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-gray-600" />
                    <span className="text-sm text-gray-400">{phase.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{phase.days}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/30 rounded p-3 border border-primary/30"
            >
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-gray-400">Active Team</span>
              </div>
              <div className="text-lg font-bold text-blue-400">7 members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-black/30 rounded p-3 border border-primary/30"
            >
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="text-xs text-gray-400">Est. Complete</span>
              </div>
              <div className="text-lg font-bold text-orange-400">4 days</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Installation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive installation methodology to ensure your
              diesel generator is properly installed, commissioned, and ready
              for reliable operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section for Installation vs Shifting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Installation & Shifting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you need a new generator installed or an existing one
              relocated, our expert team ensures a smooth and efficient process.
            </p>
          </div>

          <Tabs defaultValue="installation" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="installation">New Installation</TabsTrigger>
              <TabsTrigger value="shifting">Generator Shifting</TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      New Installation Services
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Our comprehensive installation service covers every aspect
                      of setting up your new diesel generator system:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Foundation preparation and civil work coordination
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Weather protection and acoustic treatment
                          implementation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Fuel system setup and initial filling
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Electrical integration with building power systems
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Exhaust system installation with emission compliance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Complete testing and commissioning procedures
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Loading / Unloading
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Earthings</span>
                      </li>{" "}
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Changeover Switch</span>
                      </li>{" "}
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Cabling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Electrical Inspectorate Approval{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                      alt="Diesel Generator Installation"
                      className="rounded-xl shadow-lg object-cover h-full"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                      <p className="text-primary font-bold text-sm">
                        Factory-Certified Installation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shifting" className="mt-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Generator Shifting Solutions
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Our specialized relocation service ensures your generator
                      is moved safely and efficiently:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Comprehensive pre-installation inspection and
                          assessment at both existing and new locations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Ensuring safety of the DG set through secure
                          placement, enclosure planning, and compliance with
                          safety standards
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Specialized transportation with proper securing and
                          protection
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Re-installation at the new location with all necessary
                          adjustments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Post-relocation testing and verification of
                          performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          Updated documentation and regulatory compliance
                          certification
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 gap-6">
                      {shiftingConsiderations.map((consideration, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 shadow-md"
                        >
                          <div className="flex items-center mb-3">
                            {consideration.icon}
                            <h4 className="text-lg font-semibold ml-2">
                              {consideration.title}
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {consideration.items.map((item, i) => (
                              <li
                                key={i}
                                className="text-gray-700 text-sm flex items-start"
                              >
                                <span className="text-primary mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Our Performance Metrics
            </h2>
            <p className="max-w-2xl mx-auto opacity-90 text-gray-700">
              We take pride in our installation and shifting service quality,
              measured by these key performance indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-5 mx-auto">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">
                  {metric.title}
                </h3>
                <div className="text-3xl font-bold text-accent mb-3">
                  {metric.value}
                </div>
                <p className=" text-sm text-gray-700">{metric.description}</p>
                <p className=" text-sm text-gray-700">
                  <small className="text-gray-700">
                    <sup>*</sup>
                    {metric?.extraText}
                  </small>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Ready for Professional DG Installation?
                </h2>
                <p className="text-gray-700 mb-6 md:mb-0">
                  Contact our installation team to discuss your diesel generator
                  installation or relocation requirements. We'll provide a
                  detailed assessment and timeline.
                </p>
              </div>
              <div className="text-center md:text-right">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="#" onClick={openModal}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DGInstallationPage;
