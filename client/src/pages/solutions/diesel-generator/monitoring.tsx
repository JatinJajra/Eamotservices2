import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  BellRing,
  LineChart,
  BarChart,
  Cloud,
  Smartphone,
  Cpu,
  Wifi,
  Timer,
  Settings,
  ZapOff,
  Bookmark,
  BarChart4,
  RefreshCw,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactModal from "@/components/Popup/ContectModal";
import { AlertTriangle } from "lucide-react"; 


const DGMonitoringPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Key Monitoring Capabilities
  const monitoringParams = [
    { name: "Voltage Monitoring", active: true },
    { name: "Current Flow Analytics", active: true },
    { name: "Frequency Tracking", active: true },
    { name: "Engine Temperature", active: true },
    { name: "Oil Pressure Monitoring", active: true },
    { name: "Coolant Temperature", active: true },
    { name: "Fuel Level Tracking", active: true },
    { name: "Runtime Logging", active: true },
    { name: "Load Percentage", active: true },
    { name: "Battery Voltage", active: true },
    { name: "Emissions Data", active: true },
    { name: "Alarms & Alerts", active: true },
    { name: "Transfer Switch Status", active: true },
    { name: "Start/Stop Cycles", active: true },
    { name: "Maintenance Scheduling", active: true },
  ];

  // Business Benefits
  const businessBenefits = [
    {
      title: "Cost Reduction",
      percentage: "30%",
      description:
        "Average reduction in operational and maintenance costs through preventive maintenance and fuel optimization",
      icon: <BarChart4 className="h-6 w-6 text-emerald-500" />,
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      title: "Downtime Prevention",
      percentage: "85%",
      description:
        "Reduction in unplanned downtime events through proactive alerting and predictive fault detection",
      icon: <ZapOff className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-50 border-amber-200",
    },
    {
      title: "Efficiency Improvement",
      percentage: "25%",
      description:
        "Improved generator fuel efficiency through data-driven load management and optimization",
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Environmental Impact",
      percentage: "20%",
      description:
        "Reduction in carbon emissions through optimized generator operations and reduced idle time",
      icon: <Globe className="h-6 w-6 text-green-500" />,
      color: "bg-green-50 border-green-200",
    },
  ];

  // Platform Features
  const platformFeatures = [
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: "Real-time Performance Monitoring",
      description:
        "Continuous monitoring of critical generator parameters including voltage, frequency, temperature, and fuel levels.",
      color: "bg-blue-50",
    },
    {
      icon: <BellRing className="h-10 w-10 text-primary" />,
      title: "Proactive Alerting System",
      description:
        "Configurable alerts for parameter deviations with multi-channel notifications for immediate response to issues.",
      color: "bg-amber-50",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Fuel Consumption Analytics",
      description:
        "Advanced fuel usage tracking with efficiency analysis, consumption trends, and optimization recommendations.",
      color: "bg-green-50",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Emissions Tracking",
      description:
        "Emissions performance monitoring with compliance reporting and environmental impact assessment capabilities.",
      color: "bg-red-50",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud-based Management",
      description:
        "Secure cloud platform for generator data storage, analysis, and management with comprehensive reporting features.",
      color: "bg-purple-50",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Control Interface",
      description:
        "Responsive mobile application with remote monitoring and control capabilities for anywhere management access.",
      color: "bg-indigo-50",
    },
  ];

  // System Architecture Components
  const architectureComponents = [
    {
      name: "IoT Sensors",
      description:
        "Advanced sensors gathering real-time data from all critical generator components",
      icon: <Cpu />,
      color: "text-blue-500",
    },
    {
      name: "Edge Gateway",
      description:
        "Local processing unit for data aggregation and first-level analysis",
      icon: <Wifi />,
      color: "text-purple-500",
    },
    {
      name: "Cloud Platform",
      description:
        "Secure cloud infrastructure for data storage, processing, and visualization",
      icon: <Cloud />,
      color: "text-green-500",
    },
    {
      name: "Analytics Engine",
      description:
        "AI-powered analytics for predictive maintenance and performance optimization",
      icon: <BarChart />,
      color: "text-amber-500",
    },
    {
      name: "Alert System",
      description:
        "Multi-channel notification system for real-time alerting and escalation",
      icon: <BellRing />,
      color: "text-red-500",
    },
    {
      name: "Mobile Application",
      description:
        "Cross-platform mobile app for remote monitoring and control capabilities",
      icon: <Smartphone />,
      color: "text-indigo-500",
    },
  ];

  // Case Studies
  // const caseStudies = [
  //   {
  //     industry: 'Healthcare',
  //     facility: 'Leading Financial Services Group with PAN India Operations',
  //     challenge: 'Critical backup power reliability for life-saving equipment',
  //     solution: 'Implemented IoT monitoring across 5 diesel generators with 24/7 alerting',
  //     results: [
  //       '98.7% reduction in backup power failures',
  //       '43% decrease in maintenance costs',
  //       '27% improvement in generator lifespan',
  //       'Seamless regulatory compliance reporting'
  //     ]
  //   },
  //   {
  //     industry: 'BFSI',
  //     facility: 'Major Banking & Financial Institution',
  //     challenge: 'Ensuring continuous power for critical financial transactions and data security',
  //     solution: 'Comprehensive IoT monitoring solution for 8 high-capacity generator systems with redundancy',
  //     results: [
  //       '99.999% power availability for critical systems',
  //       '38% reduction in operational costs',
  //       '45% improvement in maintenance efficiency',
  //       'Enhanced regulatory compliance reporting'
  //     ]
  //   },
  //   {
  //     industry: 'Manufacturing',
  //     facility: 'Automotive Production Plant',
  //     challenge: 'Preventing costly production shutdowns from power interruptions',
  //     solution: 'Full integration of generator monitoring with factory management systems',
  //     results: [
  //       '38% reduction in production disruptions',
  //       '29% decrease in generator maintenance expenses',
  //       '41% improvement in power transition times',
  //       'Enhanced environmental compliance reporting'
  //     ]
  //   }
  // ];

  const caseStudies = [
    {
      tabValue: "fuel-optimization",
      title: "Fuel Optimization & Compliance Visibility",
      facility: "Leading Financial Services Group with PAN India Operations",
      challenge: `Inefficient generator operations leading to excess fuel usage

No structured data for DG rating selection or ESG reporting

Lack of centralized visibility across multiple sites`,
      solution: `Deployed our IoT-enabled Diesel Generator Management System (DGMS) across branches nationwide

Delivered real-time fuel consumption, generator health, and emission insights

Created IPMVP-aligned reports for performance verification`,
      results: [
        "29% optimization in fuel usage",
        "15% decrease in fuel consumption",
        "100% generator compliance visibility",
        "30% reduction in downtime",
        "Robust carbon reporting for ESG",
      ],
    },
    {
      tabValue: "predictive-maintenance",
      title: "Maintenance Transformation with Predictive Analytics",
      facility: "Financial Enterprise Operating in 566 Cities",
      challenge: `High breakdown frequency and poor maintenance coordination

No transparency in spare parts usage or service timelines

Delays in response time during generator failures`,
      solution: `Introduced predictive analytics through our Intelligent Field Service App

Enabled real-time alerts, automated maintenance schedules, and part-tracking

Provided 4–6 hour response SLA across Tier 1–3 cities`,
      results: [
        "25% improvement in uptime",
        "30% boost in maintenance efficiency",
        "90% predictive failure alerts achieved",
        "15% cost reduction through optimized service delivery",
      ],
    },
    {
      tabValue: "energy-efficiency",
      title: "Energy Efficiency & Electrical Health Monitoring",
      facility: "National Branch Network Across India",
      challenge: `High power factor penalties in 80% of branches

33% additional energy usage beyond office hours

Unmonitored fire risk due to poor electrical health`,
      solution: `Implemented EMS with real-time anomaly detection and power analytics

Enabled automated power factor correction and consumption alerts

Delivered dashboards for electrical safety and operational control`,
      results: [
        "12% reduction in overall energy usage",
        "25% gain in operational efficiency",
        "40% improvement in power factor",
        "90% accuracy in fire hazard detection",
      ],
    },
  ];

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Hero Section with Interactive Demo */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circuit board pattern background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="circuit-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0,10 L 10,10 M 10,0 L 10,20 M 0,0 L 20,20 M 20,0 L 0,20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="0" cy="0" r="1" fill="currentColor" />
              <circle cx="0" cy="20" r="1" fill="currentColor" />
              <circle cx="20" cy="0" r="1" fill="currentColor" />
              <circle cx="20" cy="20" r="1" fill="currentColor" />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>

          {/* Data flow animation lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-primary-300/20 h-0.5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 5}%`,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 100, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                IoT-based DG Monitoring
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Advanced real-time monitoring and analytics solution that
                transforms your diesel generators into smart, connected assets
                for enhanced reliability, efficiency, and performance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  onClick={openModal}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="#">Get IoT Monitoring</Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/product-demo">View Live Demo</Link>
                </Button> */}
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    Real-time Monitoring Parameters
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-400">
                      Live Data
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {monitoringParams.map((param, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex justify-center mb-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            param.active ? "bg-green-400" : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <p className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {param.name}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span>15/15 parameters active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" />
                    <span>Last update: Just now</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual System Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Intelligent Monitoring Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our IoT monitoring system features a comprehensive end-to-end
              architecture designed for reliability, security, and scalability
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* The architecture diagram */}
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {architectureComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-5 border border-gray-200 shadow-sm relative z-10"
                  >
                    <div className={`${component.color} mb-4`}>
                      {component.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{component.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {component.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Connection lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#CBD5E1" />
                    </marker>
                  </defs>
                  <line
                    x1="25%"
                    y1="50%"
                    x2="50%"
                    y2="25%"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4"
                    markerEnd="url(#arrowhead)"
                  />
                  <line
                    x1="50%"
                    y1="25%"
                    x2="75%"
                    y2="50%"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4"
                    markerEnd="url(#arrowhead)"
                  />
                  <line
                    x1="25%"
                    y1="50%"
                    x2="50%"
                    y2="75%"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4"
                    markerEnd="url(#arrowhead)"
                  />
                  <line
                    x1="50%"
                    y1="75%"
                    x2="75%"
                    y2="50%"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    strokeDasharray="4"
                    markerEnd="url(#arrowhead)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Monitoring Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our IoT-based monitoring platform provides powerful features to
              maximize generator performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformFeatures.map((feature, index) => (
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
                      className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Business Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our IoT monitoring solution delivers measurable business benefits
              through improved reliability, efficiency, and cost optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl border p-6 ${benefit.color}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    {benefit.icon}
                  </div>
                  <span className="text-3xl font-bold">
                    {benefit.percentage}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how organizations across industries have transformed their
              generator operations with our IoT monitoring solution
            </p>
          </div>

          {/* <Tabs defaultValue="healthcare" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="datacenter">Data Center</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            </TabsList>
            
            {caseStudies.map((study, index) => (
              <TabsContent key={index} value={study.industry.toLowerCase()} className="mt-8">
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 shadow-md">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-primary mb-2">{study.industry}: {study.facility}</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Results Achieved</h4>
                      <div className="space-y-3">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-start">
                            <div className="bg-accent/10 text-accent p-1 rounded-full mr-3 mt-0.5">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-gray-700">{result}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-primary-100">
                        <Button asChild variant="link" onClick={openModal} className="p-0 h-auto text-primary">
                          <Link href="#">Request full case study</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}

          </Tabs> */}
          <Tabs defaultValue="fuel-optimization" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fuel-optimization">
                Fuel Optimization
              </TabsTrigger>
              <TabsTrigger value="predictive-maintenance">
                Predictive Maintenance
              </TabsTrigger>
              <TabsTrigger value="energy-efficiency">
                Energy Efficiency
              </TabsTrigger>
            </TabsList>

            {caseStudies.map((study, index) => (
              <TabsContent key={index} value={study.tabValue} className="mt-8">
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 shadow-md">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {study.title}
                      </h3>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          The Challenge
                        </h4>
                        {/* <p className="text-gray-700 whitespace-pre-line">
                          {study.challenge}
                        </p> */}
 

<ul className="text-gray-700 space-y-2">
  {study.challenge
    .split('\n')
    .filter(line => line.trim() !== "") // skip blank lines
    .map((line, index) => (
      <li key={index} className="flex items-start gap-2">
        <AlertTriangle className="text-red-500 w-5 h-5 mt-1" />
        <span>{line}</span>
      </li>
    ))}
</ul>

                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          Our Solution
                        </h4>
                        
                        {/* <p className="text-gray-700 whitespace-pre-line">
                          {study.solution}
                          
                        </p> */}
                      <ul className="space-y-2">
  {study.solution
    .split("\n")
    .filter(point => point.trim() !== "") // removes empty lines
    .map((point, i) => (
      <li key={i} className="flex items-start">
        <div className="bg-accent/10 text-accent p-1 rounded-full mr-3 mt-1">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-gray-700">{point}</p>
      </li>
  ))}
</ul>

                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Results Achieved
                      </h4>
                      <div className="space-y-3">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-start">
                            <div className="bg-accent/10 text-accent p-1 rounded-full mr-3 mt-0.5">
                              <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-700">{result}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-primary-100">
                        <Button
                          asChild
                          variant="link"
                          onClick={openModal}
                          className="p-0 h-auto text-primary"
                        >
                          <Link href="#">Request full case study</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Optimize Your Generator Performance?
            </h2>
            <p className="opacity-90 mb-8">
              Contact our monitoring specialists to discuss implementing
              advanced IoT monitoring for your diesel generators. Transform your
              power infrastructure with smart, connected technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                onClick={openModal}
                className="bg-white text-primary hover:bg-white/70"
              >
                <Link href="#">Get IoT Monitoring</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white/70"
              >
                {/* <Link href="/energy-calculator text-primary">
                  Calculate ROI
                </Link> */}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DGMonitoringPage;
