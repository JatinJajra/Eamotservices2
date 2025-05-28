import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, BellRing, Smartphone, Gauge, Activity, Cloud, 
  Zap, Wifi, AlertCircle, BarChart3, ArrowRight, Brain, Shield,
  Server, ChevronRight, CheckCircle, Eye, PieChart, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ServoMonitoringPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: demoRef, inView: demoInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featureRef, inView: featureInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: dashboardRef, inView: dashboardInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitRef, inView: benefitInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  // Simulated monitoring data for the interactive demo
  const [voltage, setVoltage] = useState(225);
  const [lineNoise, setLineNoise] = useState(1.4);
  const [waveform, setWaveform] = useState("normal");
  const [alertStatus, setAlertStatus] = useState("stable");

  // Simulate dynamic data changes
  useEffect(() => {
    if (demoInView) {
      const interval = setInterval(() => {
        setVoltage(prev => {
          const newValue = prev + (Math.random() * 6 - 3);
          return Math.max(180, Math.min(270, newValue));
        });
        setLineNoise(prev => {
          const newValue = prev + (Math.random() * 0.4 - 0.2);
          return Math.max(0.8, Math.min(3.5, newValue));
        });
        
        // Occasionally change waveform and alert status
        if (Math.random() > 0.85) {
          const options = ["normal", "distorted", "fluctuating"];
          setWaveform(options[Math.floor(Math.random() * options.length)]);
        }
        
        if (Math.random() > 0.92) {
          const options = ["stable", "warning", "alert"];
          setAlertStatus(options[Math.floor(Math.random() * options.length)]);
        }
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [demoInView]);

  // Alert color based on status
  const getAlertColor = () => {
    switch (alertStatus) {
      case "warning": return "text-yellow-500";
      case "alert": return "text-red-500";
      default: return "text-green-500";
    }
  };

  // Voltage indicator color
  const getVoltageIndicator = () => {
    if (voltage < 200 || voltage > 250) return "text-red-500";
    if (voltage < 210 || voltage > 240) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section with Dynamic Graphics */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center py-16"
      >
        {/* Background circuit pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 50 35 M 50 65 L 50 100 M 0 50 L 35 50 M 65 50 L 100 50" 
                        stroke="white" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="5" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
        </div>
        
        {/* Animated data waves */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 opacity-20">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
            <path 
              d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,106.7C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient1)"
            >
              <animate attributeName="d" 
                values="
                M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,106.7C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,144C96,160,192,192,288,170.7C384,149,480,75,576,74.7C672,75,768,149,864,181.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,106.7C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                dur="20s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,200,255,0.4)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0.4)" />
              </linearGradient>
            </defs>
          </svg>
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
            <path 
              d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,106.7C672,85,768,107,864,128C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#gradient2)"
            >
              <animate attributeName="d" 
                values="
                M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,106.7C672,85,768,107,864,128C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,85.3C96,75,192,53,288,80C384,107,480,181,576,186.7C672,192,768,128,864,101.3C960,75,1056,85,1152,117.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,106.7C672,85,768,107,864,128C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                dur="15s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(60,60,255,0.3)" />
                <stop offset="100%" stopColor="rgba(79, 209, 197, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/20 text-primary">
                <Wifi className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">AI-Powered Monitoring Technology</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Remote <span className="text-primary">Voltage</span> Monitoring System
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your power management strategy with our revolutionary AI-driven monitoring platform. 
                Gain unprecedented visibility into voltage conditions with microsecond precision, predictive 
                analytics, and actionable intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Schedule a Demo
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  View Technical Specs
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg"
            >
              <div className="mb-4 flex justify-between items-center">
                <h3 className="font-bold text-lg">Live Monitoring Dashboard</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="text-xs text-green-400">LIVE DEMO</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/70 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Input Voltage</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{Math.round(voltage)}</span>
                    <span className="text-sm ml-1">V</span>
                  </div>
                  <div className={`text-xs mt-2 ${getVoltageIndicator()}`}>
                    {voltage < 200 || voltage > 250 ? "Critical" : 
                     voltage < 210 || voltage > 240 ? "Warning" : "Optimal"}
                  </div>
                </div>
                
                <div className="bg-gray-900/70 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Line Noise</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{lineNoise.toFixed(1)}</span>
                    <span className="text-sm ml-1">dB</span>
                  </div>
                  <div className={`text-xs mt-2 ${lineNoise > 2.5 ? "text-red-500" : lineNoise > 1.8 ? "text-yellow-500" : "text-green-500"}`}>
                    {lineNoise > 2.5 ? "High" : lineNoise > 1.8 ? "Moderate" : "Low"}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/70 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Waveform Quality</span>
                  <span className="text-sm font-medium capitalize">{waveform}</span>
                </div>
                <div className="h-16 flex items-center justify-center overflow-hidden">
                  {waveform === "normal" && (
                    <svg viewBox="0 0 200 50" className="w-full h-full text-blue-400">
                      <path d="M0,25 Q25,25 37.5,5 Q50,25 62.5,45 Q75,25 87.5,5 Q100,25 112.5,45 Q125,25 137.5,5 Q150,25 162.5,45 Q175,25 187.5,5 Q200,25 200,25" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" />
                    </svg>
                  )}
                  {waveform === "distorted" && (
                    <svg viewBox="0 0 200 50" className="w-full h-full text-yellow-400">
                      <path d="M0,25 Q25,25 37.5,10 Q45,30 50,15 Q60,5 70,25 Q80,35 90,20 Q100,5 110,25 Q120,45 130,15 Q140,35 150,25 Q160,15 180,35 Q190,15 200,25" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" />
                    </svg>
                  )}
                  {waveform === "fluctuating" && (
                    <svg viewBox="0 0 200 50" className="w-full h-full text-red-400">
                      <path d="M0,25 Q10,5 20,30 Q30,5 40,45 Q50,10 60,25 Q70,40 80,5 Q90,30 100,15 Q110,40 120,5 Q130,20 140,45 Q150,10 160,30 Q170,5 180,20 Q190,45 200,25" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-900/70 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">System Status</span>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${alertStatus === "stable" ? "bg-green-500" : alertStatus === "warning" ? "bg-yellow-500" : "bg-red-500"} animate-pulse mr-2`}></div>
                    <span className={`text-xs font-medium capitalize ${getAlertColor()}`}>{alertStatus}</span>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  {alertStatus === "stable" && "All systems operating within normal parameters."}
                  {alertStatus === "warning" && "Minor voltage fluctuations detected - monitoring."}
                  {alertStatus === "alert" && "Critical voltage event detected - corrective action required!"}
                </div>
              </div>
              
              <div className="text-center">
                <Button className="w-full bg-primary/20 hover:bg-primary/30 text-primary">
                  View Full Dashboard
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Live Demo Section */}
      <motion.section
        ref={demoRef}
        initial={{ opacity: 0, y: 40 }}
        animate={demoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={demoInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              REAL-TIME INTELLIGENCE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={demoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              How Our AI-Powered Monitoring Works
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={demoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Experience unmatched visibility and control with our next-generation voltage monitoring system
            </motion.p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="/images/monitoring-dashboard.jpg" 
                alt="Monitoring Dashboard Interface" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full w-20 h-20 bg-primary/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-primary/40 transition-colors">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <div className="ml-1 w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  icon: <Gauge className="h-6 w-6 text-primary" />,
                  title: "Real-Time Monitoring",
                  description: "Microsecond precision with 24/7 continuous visibility"
                },
                {
                  icon: <Brain className="h-6 w-6 text-primary" />,
                  title: "Predictive Analysis",
                  description: "AI algorithms detect patterns and predict issues before they occur"
                },
                {
                  icon: <BellRing className="h-6 w-6 text-primary" />,
                  title: "Multi-Channel Alerts",
                  description: "Intelligent notifications across all your preferred devices"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={demoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Feature Comparison */}
      <motion.section
        ref={featureRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featureInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featureInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              ADVANCED CAPABILITIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Key Features & Capabilities
            </motion.h2>
          </div>
          
          <Tabs defaultValue="monitoring" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-transparent">
              <TabsTrigger value="monitoring" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Precision Monitoring
              </TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Intelligent Analysis
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Security & Control
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="monitoring" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">High-Resolution Voltage Monitoring</h3>
                  <ul className="space-y-4">
                    {[
                      "Advanced sensors capture voltage data at 0.5-second intervals",
                      "2,000% more detailed insights than standard monitoring systems",
                      "Complete voltage profile analysis with microsecond precision",
                      "Custom alert thresholds tailored to your equipment specifications",
                      "Integrated temperature and load monitoring capabilities"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    View Technical Specifications
                  </Button>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-700">
                  <img 
                    src="/images/voltage-monitoring.jpg" 
                    alt="High-Resolution Voltage Monitoring" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2">Real-Time Precision</h4>
                    <p className="text-gray-300">Our advanced monitoring hardware provides unmatched voltage visibility</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl border border-gray-700">
                  <img 
                    src="/images/predictive-analytics.jpg" 
                    alt="Predictive Analytics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2">Predictive Intelligence</h4>
                    <p className="text-gray-300">AI-powered algorithms identify patterns and predict voltage events</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6">Advanced Performance Analytics</h3>
                  <ul className="space-y-4">
                    {[
                      "Machine learning algorithms identify voltage fluctuation patterns",
                      "Predict future grid disturbances up to 24 hours in advance",
                      "Detailed metrics on correction frequency and response time",
                      "Actionable insights for optimization and maintenance",
                      "Historical trend analysis with customizable reporting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <BarChart3 className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    Explore Analytics Features
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Enterprise-Grade Security & Control</h3>
                  <ul className="space-y-4">
                    {[
                      "Military-grade encryption for all voltage data",
                      "Redundant cloud infrastructure with 10-year data retention",
                      "Multi-device cross-platform control interface",
                      "Role-based access control with detailed audit logs",
                      "Seamless integration with existing BMS and SCADA systems"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Shield className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    View Security Standards
                  </Button>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-700">
                  <img 
                    src="/images/secure-cloud-platform.jpg" 
                    alt="Secure Cloud Platform" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2">Complete Data Security</h4>
                    <p className="text-gray-300">Enterprise-grade infrastructure protects your critical monitoring data</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      
      {/* Dashboard Features Grid */}
      <motion.section
        ref={dashboardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={dashboardInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              POWERFUL CAPABILITIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Comprehensive Monitoring Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our intelligent monitoring platform includes everything you need for complete voltage visibility
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Gauge className="h-6 w-6 text-primary" />,
                title: '24/7 High-Resolution Monitoring',
                description: 'Advanced sensors capture voltage data at 0.5-second intervals, providing 2,000% more detailed insights than standard monitoring systems.'
              },
              {
                icon: <BellRing className="h-6 w-6 text-primary" />,
                title: 'Multi-Channel Intelligent Alerts',
                description: 'AI-powered alert system delivers instant notifications via SMS, email, app, and voice calls, with smart escalation protocols.'
              },
              {
                icon: <Activity className="h-6 w-6 text-primary" />,
                title: 'Advanced Performance Analytics',
                description: 'Our proprietary analytics engine provides detailed metrics on correction frequency, response time, and stabilization efficiency.'
              },
              {
                icon: <LineChart className="h-6 w-6 text-primary" />,
                title: 'Predictive Grid Quality Analysis',
                description: 'Machine learning algorithms identify voltage patterns and predict future grid disturbances up to 24 hours in advance.'
              },
              {
                icon: <Cloud className="h-6 w-6 text-primary" />,
                title: 'Secure Cloud Platform',
                description: 'Your voltage data is protected by military-grade encryption and stored on our redundant cloud infrastructure with 10-year retention.'
              },
              {
                icon: <Smartphone className="h-6 w-6 text-primary" />,
                title: 'Cross-Platform Control Interface',
                description: 'Our intuitive dashboard works seamlessly across all devices, allowing you to monitor and control your stabilizer from anywhere.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:bg-gray-800/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                <div className="mt-6">
                  <a href="#" className="text-primary flex items-center text-sm hover:text-primary/80 transition-colors">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Performance Metrics */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-primary/20 to-primary/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Eye className="h-6 w-6" />, value: "99.7%", label: "Equipment Protection" },
              { icon: <AlertCircle className="h-6 w-6" />, value: "83%", label: "Faster Detection" },
              { icon: <Zap className="h-6 w-6" />, value: "62%", label: "Extended Lifespan" },
              { icon: <PieChart className="h-6 w-6" />, value: "47%", label: "Reduced Costs" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section */}
      <motion.section
        ref={benefitRef}
        initial={{ opacity: 0, y: 40 }}
        animate={benefitInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={benefitInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              PROVEN RESULTS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Transform Your Power Management
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Organizations that implement our voltage monitoring technology experience dramatic improvements
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {[
              {
                title: 'Prevent Equipment Damage',
                description: '99.7% reduction in voltage-related equipment damage after implementing our monitoring system, saving hundreds of thousands in potential losses.',
                icon: <Shield className="h-10 w-10 text-primary" />,
                image: "/images/equipment-protection.jpg"
              },
              {
                title: 'Detect Issues Faster',
                description: 'Advanced early detection system identifies potential stabilizer issues or grid abnormalities 83% faster than traditional methods, often before they manifest.',
                icon: <AlertCircle className="h-10 w-10 text-primary" />,
                image: "/images/issue-detection.jpg"
              },
              {
                title: 'Transform Grid Management',
                description: 'Gain unprecedented insights into your location-specific voltage profiles, helping you implement targeted power quality improvements.',
                icon: <Server className="h-10 w-10 text-primary" />,
                image: "/images/grid-management.jpg"
              },
              {
                title: 'Extend Equipment Lifespan',
                description: 'Clients report a 62% average increase in sensitive equipment lifespan through optimized stabilizer settings based on our detailed performance analytics.',
                icon: <Zap className="h-10 w-10 text-primary" />,
                image: "/images/equipment-lifespan.jpg"
              },
              {
                title: 'Reduce Maintenance Costs',
                description: 'Our data-driven maintenance scheduling eliminates unnecessary service visits and prevents major failures, reducing total stabilizer maintenance costs by up to 47%.',
                icon: <Settings className="h-10 w-10 text-primary" />,
                image: "/images/reduced-maintenance.jpg"
              },
              {
                title: 'Bulletproof Compliance',
                description: 'Our comprehensive historical records provide irrefutable evidence for warranty claims, utility disputes, or insurance requirements with tamper-proof certification.',
                icon: <Shield className="h-10 w-10 text-primary" />,
                image: "/images/compliance-documentation.jpg"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="flex flex-col h-full"
              >
                <div className="rounded-xl overflow-hidden mb-6 aspect-video">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
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
        className="py-20 bg-gradient-to-r from-primary/90 to-primary-dark relative overflow-hidden"
      >
        {/* Abstract graphic elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuitLines" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="50" cy="50" r="5" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuitLines)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-white"
            >
              <Eye className="h-5 w-5" />
              <span className="font-medium">STOP FLYING BLIND</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Stop Flying Blind With Your Power Quality
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Over 95% of equipment damage occurs due to undetected voltage issues. Our intelligent monitoring 
              system identifies dangerous conditions before they cause catastrophic failures.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="/contact">Activate Intelligent Power Monitoring</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServoMonitoringPage;