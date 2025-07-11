import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LineChart, BarChart4, Activity, CloudUpload, FileText, Shield, 
  Brain, AlertCircle, Clock, TrendingUp, BarChart, Award, 
  CheckCircle, ArrowUpRight, Zap, Server, BellRing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

const RECDMonitoringPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: demoRef, inView: demoInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
  
  // Simulated real-time dashboard data
  const [emissionsLevel, setEmissionsLevel] = useState(38);
  const [complianceScore, setComplianceScore] = useState(98.7);
  const [alertLevel, setAlertLevel] = useState("normal");
  const [predictionHours, setPredictionHours] = useState(67);
  
  // Simulated data changes for the demo dashboard
  useEffect(() => {
    if (demoInView) {
      const interval = setInterval(() => {
        // Random emissions level changes
        setEmissionsLevel(prev => {
          const newValue = prev + (Math.random() * 6 - 3);
          return Math.max(25, Math.min(65, newValue));
        });
        
        // Random compliance score changes
        setComplianceScore(prev => {
          const newValue = prev + (Math.random() * 0.6 - 0.3);
          return Math.max(95, Math.min(99.9, newValue));
        });
        
        // Random prediction hours changes
        setPredictionHours(prev => {
          const newValue = prev + (Math.random() * 4 - 2);
          return Math.max(48, Math.min(72, newValue));
        });
        
        // Occasionally change alert level
        if (Math.random() > 0.9) {
          const options = ["normal", "warning", "critical"];
          setAlertLevel(options[Math.floor(Math.random() * options.length)]);
        }
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [demoInView]);
  
  // Alert color based on status
  const getAlertColor = () => {
    switch (alertLevel) {
      case "warning": return "text-amber-400";
      case "critical": return "text-red-500";
      default: return "text-green-500";
    }
  };
  
  // Emissions level indicator color
  const getEmissionsIndicator = () => {
    if (emissionsLevel > 55) return "text-red-500";
    if (emissionsLevel > 45) return "text-amber-400";
    return "text-green-500";
  };
  
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with Particle Animation */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90 z-10"></div>
          <img
            src="/images/recd-monitoring.jpg"
            alt="Emission Monitoring"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        
        {/* Animated particle background */}
        <div className="absolute inset-0 z-5 opacity-30">
          <svg width="100%" height="100%" className="absolute">
            <defs>
              <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(79, 129, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(79, 129, 255, 0)" />
              </radialGradient>
            </defs>
            
            {/* Animated circles */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="2"
                fill="url(#dotGradient)"
                initial={{ opacity: Math.random() * 0.5 + 0.3 }}
                animate={{ 
                  opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.3],
                  scale: [1, Math.random() * 1.5 + 1, 1]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
            
            {/* Connecting lines */}
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="rgba(79, 129, 255, 0.2)"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  pathLength: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 4 + 3,
                  delay: Math.random() * 2,
                  repeat: Infinity
                }}
              />
            ))}
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 flex min-h-[90vh] items-center relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-600/20 text-blue-400"
            >
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Emission Intelligence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Next-Generation <span className="text-blue-500">Emission</span> Intelligence System
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Forget everything you know about emission monitoring. Our revolutionary system transforms your 
              emission data into a strategic business asset that reduces costs, prevents penalties, enhances 
              ESG ratings, and provides legal protection against regulatory actions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore the Platform
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-black hover:bg-white/10"  onClick={() => {
    const section = document.getElementById("live-emission-monitoring");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                View Demo Dashboard
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Interactive Demo Dashboard */}
      <motion.section
        ref={demoRef}
        initial={{ opacity: 0, y: 40 }}
        animate={demoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={demoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Experience Real-Time Emission Intelligence
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={demoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our advanced monitoring platform provides unprecedented visibility and predictive capabilities
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={demoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-xl"
          >
            <div className="flex justify-between items-center mb-6" id="live-emission-monitoring">
              <h3 className="text-xl font-bold">Live Emission Monitoring Dashboard</h3>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                <span className="text-xs text-green-400">LIVE DATA</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Emissions Level Card */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Current Emissions Level</div>
                    <div className="flex items-baseline">
                      <span className={`text-3xl font-bold ${getEmissionsIndicator()}`}>{Math.round(emissionsLevel)}</span>
                      <span className="text-sm ml-1 text-slate-400">mg/Nm³</span>
                    </div>
                  </div>
                  <Activity className="h-5 w-5 text-blue-500" />
                </div>
                
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      emissionsLevel > 55 ? "bg-red-500" : 
                      emissionsLevel > 45 ? "bg-amber-400" : 
                      "bg-green-500"
                    }`}
                    style={{ width: `${(emissionsLevel / 100) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>0</span>
                  <span>Regulatory Limit: 60</span>
                  <span>100</span>
                </div>
              </div>
              
              {/* Compliance Score Card */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Compliance Score</div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-green-500">{complianceScore.toFixed(1)}</span>
                      <span className="text-sm ml-1 text-slate-400">%</span>
                    </div>
                  </div>
                  <Shield className="h-5 w-5 text-blue-500" />
                </div>
                
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${complianceScore}%` }}
                  ></div>
                </div>
                
                <div className="mt-2 text-xs text-slate-400">
                  <span>Historical compliance rating based on continuous data analysis</span>
                </div>
              </div>
              
              {/* Predictive Alert Card */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">System Status</div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${
                        alertLevel === "critical" ? "bg-red-500" : 
                        alertLevel === "warning" ? "bg-amber-400" : 
                        "bg-green-500"
                      } animate-pulse mr-2`}></div>
                      <span className={`font-bold ${getAlertColor()} capitalize`}>{alertLevel}</span>
                    </div>
                  </div>
                  <AlertCircle className="h-5 w-5 text-blue-500" />
                </div>
                
                <div className="mt-3 flex items-center">
                  <Clock className="h-4 w-4 text-blue-400 mr-2" />
                  <div className="text-sm">
                    <span className="text-slate-300">Predictive Window: </span>
                    <span className="font-medium">{Math.round(predictionHours)} hours</span>
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-slate-400">
                  {alertLevel === "critical" ? "Critical emission threshold predicted - immediate action required" : 
                   alertLevel === "warning" ? "Potential compliance risk detected - monitoring recommended" : 
                   "All parameters within optimal ranges - no action required"}
                </div>
              </div>
            </div>
            
            {/* Emissions Chart */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Emissions Trend Analysis</h4>
                <div className="flex gap-3">
                  <span className="text-xs text-blue-400 flex items-center">
                    <div className="w-3 h-1 bg-blue-400 mr-1"></div>
                    NOx
                  </span>
                  <span className="text-xs text-green-400 flex items-center">
                    <div className="w-3 h-1 bg-green-400 mr-1"></div>
                    CO
                  </span>
                  <span className="text-xs text-amber-400 flex items-center">
                    <div className="w-3 h-1 bg-amber-400 mr-1"></div>
                    PM
                  </span>
                </div>
              </div>
              
              <div className="h-48 relative w-full overflow-hidden">
                {/* Simplified chart visualization */}
                <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
                  {/* NOx Line */}
                  <path 
                    d="M0,150 C50,120 100,170 150,140 C200,110 250,160 300,130 C350,100 400,150 450,120 C500,90 550,140 600,110 C650,80 700,130 750,100 C800,70 850,120 900,90 C950,60 1000,110 1000,80" 
                    fill="none" 
                    stroke="#60a5fa" 
                    strokeWidth="2"
                  />
                  
                  {/* CO Line */}
                  <path 
                    d="M0,180 C50,190 100,170 150,180 C200,190 250,170 300,180 C350,190 400,170 450,180 C500,190 550,170 600,180 C650,190 700,170 750,180 C800,190 850,170 900,180 C950,190 1000,170 1000,180" 
                    fill="none" 
                    stroke="#4ade80" 
                    strokeWidth="2"
                  />
                  
                  {/* PM Line */}
                  <path 
                    d="M0,220 C50,200 100,240 150,220 C200,200 250,240 300,220 C350,200 400,240 450,220 C500,200 550,240 600,220 C650,200 700,240 750,220 C800,200 850,240 900,220 C950,200 1000,240 1000,220" 
                    fill="none" 
                    stroke="#fbbf24" 
                    strokeWidth="2"
                  />
                  
                  {/* Threshold Line */}
                  <line 
                    x1="0" 
                    y1="60" 
                    x2="1000" 
                    y2="60" 
                    stroke="#ef4444" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                  />
                </svg>
                
                <div className="absolute top-0 right-0 bg-slate-900/80 text-xs px-2 py-1 rounded">
                  Regulatory Threshold
                </div>
                
                <div className="absolute left-0 bottom-0 right-0 flex justify-between text-xs text-slate-400 px-2">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Row Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Predictive AI Insights */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-semibold">AI Insights</h4>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-900/50 rounded p-1 mr-2 mt-0.5">
                      <TrendingUp className="h-3 w-3 text-blue-400" />
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-white font-medium">NOx trend analysis:</span> Gradual upward pattern detected. Consider combustion adjustment in 36 hours.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-900/50 rounded p-1 mr-2 mt-0.5">
                      <Clock className="h-3 w-3 text-green-400" />
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-white font-medium">Preventive maintenance:</span> Catalyst efficiency projected to decrease below optimal threshold in 18 days.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-900/50 rounded p-1 mr-2 mt-0.5">
                      <Zap className="h-3 w-3 text-amber-400" />
                    </div>
                    <div className="text-sm text-slate-300">
                      <span className="text-white font-medium">Efficiency optimization:</span> Current fuel-air ratio suggests potential 3.2% efficiency improvement opportunity.
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Compliance Events */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-semibold">Recent Compliance Events</h4>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-900/50 rounded p-1 mr-2 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    </div>
                    <div className="text-sm">
                      <div className="text-slate-300">
                        <span className="text-white font-medium">CPCB Q2 Report:</span> Successfully submitted and acknowledged
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">2 days ago</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-900/50 rounded p-1 mr-2 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    </div>
                    <div className="text-sm">
                      <div className="text-slate-300">
                        <span className="text-white font-medium">Regulatory Inspection:</span> Passed with zero deficiencies
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">1 week ago</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/50 rounded p-1 mr-2 mt-0.5">
                      <BellRing className="h-3 w-3 text-blue-400" />
                    </div>
                    <div className="text-sm">
                      <div className="text-slate-300">
                        <span className="text-white font-medium">System Upgrade:</span> Firmware updated to version 4.2.7
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">2 weeks ago</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Features Section with Interactive Tabs */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              PREMIUM CAPABILITIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Advanced Intelligence Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our revolutionary platform includes capabilities not available in conventional monitoring systems
            </motion.p>
          </div>
          
          <Tabs defaultValue="monitoring" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-transparent">
              <TabsTrigger value="monitoring" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Ultra-Precise Monitoring
              </TabsTrigger>
              <TabsTrigger value="prediction" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Predictive Intelligence
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-base">
                Compliance Security
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="monitoring" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Ultra-Precise Emission Intelligence</h3>
                  <p className="text-slate-300 mb-6">
                    Our proprietary sensor array measures 18 emission parameters at 10x the resolution of standard systems, 
                    detecting microscopic changes invisible to conventional monitoring equipment.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Measures 18 distinct emission parameters simultaneously",
                      "10x higher resolution than conventional systems",
                      "Detects microscopic changes in emission composition",
                      "Proprietary calibration algorithms for maximum accuracy",
                      "Self-diagnostic capabilities to ensure measurement integrity"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-blue-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Sensor Technology
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img 
                    src="/images/precision-monitoring.jpg" 
                    alt="Precision Monitoring" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-blue-400 font-semibold">High-Resolution Sensing</span>
                    </div>
                    <p className="text-white text-sm">Our proprietary sensor array capturing microscopic emission variations</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prediction" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img 
                    src="/images/predictive-intelligence.jpg" 
                    alt="Predictive Intelligence" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-green-400 font-semibold">AI-Powered Prediction</span>
                    </div>
                    <p className="text-white text-sm">Our AI engine predicting compliance risks before they occur</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-white">Predictive Compliance Technology</h3>
                  <p className="text-slate-300 mb-6">
                    Our AI-powered analytics engine predicts compliance risks up to 72 hours in advance, 
                    giving you unprecedented time to implement corrective actions before violations occur.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "72-hour advance warning of potential compliance issues",
                      "Machine learning algorithms trained on millions of emission data points",
                      "Multi-variable correlation analysis for root cause identification",
                      "Customized corrective action recommendations",
                      "Continuous learning and adaptation to your specific operational patterns"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-green-900 flex items-center justify-center">
                            <Brain className="h-3 w-3 text-green-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">
                    View Prediction Capabilities
                  </Button> */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Bulletproof Compliance Security</h3>
                  <p className="text-slate-300 mb-6">
                    Our revolutionary blockchain verification system creates immutable emission records with 
                    128-bit encryption that makes data tampering mathematically impossible.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "128-bit encrypted blockchain verification of all emission data",
                      "Military-grade documentation system for legal defensibility",
                      "100% acceptance rate across 8,000+ regulatory submissions",
                      "Proprietary transmission protocol with built-in validation",
                      "Comprehensive audit trail with tamper-evident sealing"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center">
                            <Shield className="h-3 w-3 text-purple-400" />
                          </div>
                        </div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">
                    Explore Security Features
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                  <img 
                    src="/images/compliance-security.jpg" 
                    alt="Compliance Security" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-500 rounded-full w-3 h-3 animate-pulse"></div>
                      <span className="text-purple-400 font-semibold">Blockchain Security</span>
                    </div>
                    <p className="text-white text-sm">Our immutable record system protecting your compliance data</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      
      {/* Business Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              STRATEGIC ADVANTAGES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Beyond Compliance: Business Benefits
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our emission intelligence transforms regulatory requirements into strategic business advantages
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Eliminate Regulatory Penalties",
                description: "Our clients have maintained 99.97% uptime of their compliance systems, resulting in zero regulatory penalties across 12,500+ operational months.",
                icon: <Shield className="h-10 w-10 text-blue-500" />,
                metric: "99.97%",
                metricLabel: "Compliance Uptime"
              },
              {
                title: "Enhanced ESG Ratings",
                description: "Organizations implementing our system have seen average ESG rating increases of 12-18 points, unlocking preferential financing worth 0.3-0.75% reductions in capital costs.",
                icon: <Award className="h-10 w-10 text-green-500" />,
                metric: "12-18pt",
                metricLabel: "ESG Rating Increase"
              },
              {
                title: "Reduced Operating Expenses",
                description: "Our emission intelligence identifies combustion optimization opportunities that have reduced our clients' fuel consumption by 7-12%, delivering ROI in as little as 4 months.",
                icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
                metric: "7-12%",
                metricLabel: "Cost Reduction"
              },
              {
                title: "Reclaim Staff Hours",
                description: "Our automated compliance system eliminates 320+ hours of manual record-keeping and reporting annually per site, freeing your technical staff to focus on core operations.",
                icon: <Clock className="h-10 w-10 text-purple-500" />,
                metric: "320+",
                metricLabel: "Hours Saved Annually"
              },
              {
                title: "Extended Equipment Life",
                description: "Clients using our predictive emissions intelligence have extended generator overhaul intervals by 23% while maintaining compliance, significantly reducing capital expenditure cycles.",
                icon: <Activity className="h-10 w-10 text-pink-500" />,
                metric: "23%",
                metricLabel: "Lifespan Extension"
              },
              {
                title: "Regulatory Insurance",
                description: "Our system is the only one in India that qualifies for regulatory compliance insurance, providing financial protection against business interruption due to compliance issues.",
                icon: <FileText className="h-10 w-10 text-red-500" />,
                metric: "100%",
                metricLabel: "Financial Protection"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-600/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{benefit.metric}</div>
                    <div className="text-sm text-slate-400">{benefit.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
                <div className="mt-6">
                  {/* <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal text-sm flex items-center">
                    Learn more <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Statistics Section */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-blue-900/20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "99.97%", label: "Compliance Uptime" },
              { value: "72hr", label: "Advance Warning" },
              { value: "2,500+", label: "Protected Facilities" },
              { value: "0", label: "Regulatory Penalties" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 -mb-20 -ml-20"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-white"
            >
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">STOP RISKING YOUR BUSINESS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Stop Risking Regulatory Penalties and Shutdowns
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Join the 2,500+ facilities that have achieved perfect compliance records while saving millions 
              in operational costs and avoiding business interruptions through our advanced emission intelligence platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" onClick={openModal} asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="#">Secure Your Compliance Future</a>
              </Button>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4"
            >
              {[
                { value: "2,500+", label: "Protected Facilities" },
                { value: "₹0", label: "Penalty Risk" },
                { value: "99.997%", label: "Compliance Rate" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-white/80 text-sm">{metric.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RECDMonitoringPage;