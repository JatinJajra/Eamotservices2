import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Wrench, Clock, AlertTriangle, FileCheck, CheckSquare, Calendar,
  ArrowRight, CheckCircle, Gauge, Activity, Shield, Zap, DollarSign,
  BarChart, Award, Settings, Percent, ChevronRight, BarChart4, Aperture,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

const DFKMaintenancePage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: metricsRef, inView: metricsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: planRef, inView: planInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: comparisonRef, inView: comparisonInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
   const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  // Animated counter for percentage
  const [count, setCount] = useState(0);
  
  // Plan selector state
  const [selectedPlan, setSelectedPlan] = useState("premium");
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                          <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with Animated Efficiency Graph */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95 z-10"></div>
          <img
            src="/images/dfk-maintenance.jpg"
            alt="DFK Maintenance"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        
        {/* Animated efficiency graph */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Our maintenance line (stays high) */}
            <motion.path
              d="M0,20 C10,19 20,18 30,19 C40,20 50,18 60,17 C70,16 80,19 90,18 L100,17 L100,100 L0,100 Z"
              fill="url(#gradient-green)"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.8 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.path
              d="M0,20 C10,19 20,18 30,19 C40,20 50,18 60,17 C70,16 80,19 90,18 L100,17"
              fill="none"
              stroke="#4ade80"
              strokeWidth="0.5"
              strokeDasharray="220"
              strokeDashoffset="220"
              initial={{ strokeDashoffset: 220 }}
              animate={heroInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Standard maintenance line (degrades) */}
            <motion.path
              d="M0,20 C10,25 20,30 30,35 C40,40 50,45 60,50 C70,55 80,57 90,60 L100,65 L100,100 L0,100 Z"
              fill="url(#gradient-red)"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 0.8 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            />
            
            <motion.path
              d="M0,20 C10,25 20,30 30,35 C40,40 50,45 60,50 C70,55 80,57 90,60 L100,65"
              fill="none"
              stroke="#ef4444"
              strokeWidth="0.5"
              strokeDasharray="220"
              strokeDashoffset="220"
              initial={{ strokeDashoffset: 220 }}
              animate={heroInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 2, delay: 0.8 }}
            />
            
            {/* Annotations */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <text x="50" y="15" fontSize="3" fill="#4ade80" textAnchor="middle">Our Maintenance (95-97% efficiency)</text>
              <text x="50" y="63" fontSize="3" fill="#ef4444" textAnchor="middle">Standard Maintenance (≈20% degradation)</text>
            </motion.g>
          </svg>
          
          {/* Floating service icons */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 shadow-lg p-4"
              style={{
                top: `${15 + Math.random() * 35}%`,
                left: `${10 + Math.random() * 80}%`,
                width: `${120 + Math.random() * 60}px`,
                height: `${90 + Math.random() * 40}px`,
                transform: `rotate(${-5 + Math.random() * 10}deg)`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 0.7, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-center h-full">
                {[<Wrench className="h-6 w-6 text-green-400" />, 
                  <CheckSquare className="h-6 w-6 text-green-400" />, 
                  <Gauge className="h-6 w-6 text-green-400" />, 
                  <Activity className="h-6 w-6 text-green-400" />, 
                  <Shield className="h-6 w-6 text-green-400" />][i]}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 pt-32 pb-20 flex min-h-[90vh] items-center relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-green-600/20 text-green-400"
            >
              <CheckSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Guaranteed Performance Retention</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Lifetime <span className="text-green-500">Performance</span> Guarantee
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Standard maintenance programs allow up to 20% efficiency degradation within the first year. 
              Our proprietary system is the only solution that guarantees 94-97% of your initial substitution 
              rates throughout the entire system lifecycle.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-green-600 hover:bg-green-700 text-white">
                Lock In Your Performance Guarantee
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-black hover:bg-white/10"  onClick={() => {
    const section = document.getElementById("Performance-Protection-Plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}>
                View Maintenance Plans
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Animated Performance Metrics */}
      <motion.section
        ref={metricsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.2"/>
              </pattern>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Gauge className="h-8 w-8 text-green-500" />, label: "Efficiency Retention", value: "94-97%", highlight: true },
              { icon: <Clock className="h-8 w-8 text-blue-500" />, label: "Service Lifespan Extension", value: "5-7 Years" },
              { icon: <CheckCircle className="h-8 w-8 text-purple-500" />, label: "Uptime Guarantee", value: "99.8%" },
              { icon: <DollarSign className="h-8 w-8 text-amber-500" />, label: "Annual Cost Savings", value: "₹7.8L+" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={metricsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className={`bg-slate-800/70 backdrop-blur-sm border ${metric.highlight ? 'border-green-700' : 'border-slate-700'} rounded-xl p-6 text-center`}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-slate-900/80 flex items-center justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Maintenance Plan Comparison */}
      <motion.section
        ref={planRef}
        initial={{ opacity: 0, y: 40 }}
        animate={planInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900"
        id="Performance-Protection-Plans"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={planInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-500 font-medium"
            >
              TAILORED MAINTENANCE SOLUTIONS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={planInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Performance Protection Plans
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={planInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Choose the right maintenance solution for your dual fuel system
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential",
                description: "Basic maintenance coverage for your dual fuel system",
                price: "₹85,000",
                frequency: "annually",
                color: "border-blue-600/40",
                highlight: "bg-blue-900/20",
                icon: <Settings className="h-8 w-8 text-blue-500" />,
                features: [
                  { name: "Preventive Maintenance Visits", value: "4 per year" },
                  { name: "Remote System Monitoring", value: "Basic" },
                  { name: "Emergency Response Time", value: "24 Hours" },
                  { name: "Efficiency Retention", value: "90-92%" },
                  { name: "Parts & Labor Coverage", value: "Standard" },
                  { name: "System Health Reports", value: "Quarterly" }
                ]
              },
              {
                name: "Premium",
                description: "Enhanced protection with advanced optimization",
                price: "₹1,25,000",
                frequency: "annually",
                color: "border-green-600/40",
                highlight: "bg-green-900/20",
                icon: <Award className="h-8 w-8 text-green-500" />,
                features: [
                  { name: "Preventive Maintenance Visits", value: "4 per year" },
                  { name: "Remote System Monitoring", value: "Advanced" },
                  { name: "Emergency Response Time", value: "12 Hours" },
                  { name: "Efficiency Retention", value: "94-97%" },
                  { name: "Parts & Labor Coverage", value: "Premium" },
                  { name: "System Health Reports", value: "Monthly" }
                ]
              },
              {
                name: "Enterprise",
                description: "Complete protection with guaranteed performance",
                price: "₹1,95,000",
                frequency: "annually",
                color: "border-purple-600/40",
                highlight: "bg-purple-900/20",
                icon: <Shield className="h-8 w-8 text-purple-500" />,
                features: [
                  { name: "Preventive Maintenance Visits", value: "6 per year" },
                  { name: "Remote System Monitoring", value: "24/7 Premium" },
                  { name: "Emergency Response Time", value: "6 Hours" },
                  { name: "Efficiency Retention", value: "97%+ Guaranteed" },
                  { name: "Parts & Labor Coverage", value: "Comprehensive" },
                  { name: "System Health Reports", value: "Weekly" }
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={planInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`bg-slate-800 border ${selectedPlan === plan.name.toLowerCase() ? plan.color : 'border-slate-700'} rounded-xl overflow-hidden flex flex-col h-full`}
                onClick={() => setSelectedPlan(plan.name.toLowerCase())}
              >
                <div className={`p-6 ${selectedPlan === plan.name.toLowerCase() ? plan.highlight : ''}`}>
                  <div className="w-16 h-16 rounded-lg bg-slate-900/50 flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                  <div className="mt-4">
                    {/* <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-slate-400 text-sm ml-1">{plan.frequency}</span> */}
                  </div>
                </div>
                
                <div className="p-6 border-t border-slate-700 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-slate-400">{feature.name}</span>
                        <span className="font-medium text-white">{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 border-t border-slate-700">
                  <Button 
                    className={selectedPlan === plan.name.toLowerCase() ? 
                      `w-full ${index === 0 ? 'bg-blue-600 hover:bg-blue-700' : index === 1 ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} text-white` : 
                      "w-full bg-slate-700 hover:bg-slate-600 text-white"
                    }
                  >
                    {selectedPlan === plan.name.toLowerCase() ? 
                      "Selected Plan" : 
                      "Choose This Plan"
                    }
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={planInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 mb-4">Need a custom maintenance solution for your specific requirements?</p>
            <Button variant="outline" onClick={openModal} className="border-slate-600 hover:border-green-500 text-black">
              Contact Us for Custom Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Comparison with Competitors Section */}
      <motion.section
        ref={comparisonRef}
        initial={{ opacity: 0, y: 40 }}
        animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={comparisonInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-500 font-medium"
            >
              THE DIFFERENCE IS CLEAR
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Why Our Maintenance is Superior
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Compare our maintenance solution with standard offerings
            </motion.p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900">
                  <th className="p-4 text-left text-sm font-medium text-slate-300">Feature</th>
                  <th className="p-4 text-center text-sm font-medium text-green-400">
                    <div className="flex flex-col items-center">
                      <Shield className="h-5 w-5 mb-1" />
                      <span>Our Maintenance</span>
                    </div>
                  </th>
                  <th className="p-4 text-center text-sm font-medium text-slate-400">
                    <div className="flex flex-col items-center">
                      <AlertTriangle className="h-5 w-5 mb-1" />
                      <span>Standard Maintenance</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Efficiency Retention", ours: "94-97%", standard: "80-85%" },
                  { feature: "Preventive Parameters Monitored", ours: "86 points", standard: "12-18 points" },
                  { feature: "First-Time Fix Rate", ours: "99.6%", standard: "68%" },
                  { feature: "Technician Training", ours: "240+ hours specialized", standard: "40-60 hours general" },
                  { feature: "System Parameter Calibration", ours: "28 parameters", standard: "8-10 parameters" },
                  { feature: "Failure Prediction", ours: "18-21 days advance", standard: "Reactive only" },
                  { feature: "Emergency Response Time", ours: "4 hours (metro)", standard: "24-48 hours" },
                  { feature: "Documentation Standards", ours: "Regulatory-grade", standard: "Basic records" }
                ].map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-slate-800" : "bg-slate-800/50"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
                  >
                    <td className="p-4 text-sm text-left font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-sm">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="font-medium text-green-400">{row.ours}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-sm text-slate-400">{row.standard}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-green-900/20 border border-green-800/30 rounded-xl p-6 mt-12 max-w-3xl mx-auto"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <Percent className="h-10 w-10 text-green-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">Performance Guarantee</h3>
                <p className="text-slate-300">
                  We're so confident in our maintenance program that we offer a written guarantee: 
                  If your system's efficiency drops below 94% at any point during your maintenance 
                  contract, we'll provide remediation services at no additional cost.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Features in Cards */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-500 font-medium"
            >
              ADVANCED CAPABILITIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Our Maintenance Excellence
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Explore the unique features that set our maintenance program apart
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Calendar className="h-6 w-6 text-green-500" />,
                title: "Profit-Protection Maintenance Protocol",
                description: "Our proprietary 86-point preventive maintenance system specifically targets the 7 critical failure points of dual fuel systems that standard maintenance programs miss entirely."
              },
              {
                icon: <Wrench className="h-6 w-6 text-green-500" />,
                title: "Dual Fuel Master Technicians",
                description: "Our elite maintenance specialists complete 240+ hours of dual fuel-specific training and maintain a 99.6% first-time fix rate, dramatically higher than the industry average of 68%."
              },
              {
                icon: <CheckSquare className="h-6 w-6 text-green-500" />,
                title: "Dynamic Micro-Calibration System",
                description: "Our advanced recalibration process optimizes 28 separate system parameters that maintain 98.7% of your initial substitution rates throughout the entire service life of your system."
              },
              {
                icon: <AlertTriangle className="h-6 w-6 text-green-500" />,
                title: "Remote Predictive Diagnostics",
                description: "Our industry-exclusive remote diagnostics platform identifies 93% of potential failures 18-21 days before they affect performance, preventing costly emergency repairs and downtime."
              },
              {
                icon: <Clock className="h-6 w-6 text-green-500" />,
                title: "Triple-Redundant Response Network",
                description: "Our unique service delivery model guarantees 4-hour emergency response in all metro areas and 12-hour response nationwide with performance-based SLAs backed by financial guarantees."
              },
              {
                icon: <FileCheck className="h-6 w-6 text-green-500" />,
                title: "Regulatory-Grade Documentation Suite",
                description: "Our comprehensive digital maintenance platform produces legally-defensible maintenance records that have successfully defended clients in 100% of warranty disputes and regulatory audits."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-green-600/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-green-900/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Maintenance Process Timeline */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 40 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={processInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-500 font-medium"
            >
              OUR METHODOLOGY
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Premium Maintenance Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our comprehensive approach to keeping your systems operating at peak performance
            </motion.p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700"></div>
            
            {[
              {
                title: "Initial Assessment",
                description: "Our master technicians conduct a 92-point system assessment to establish baseline performance metrics and identify optimization opportunities specific to your installation.",
                icon: <Gauge className="h-6 w-6 text-white" />,
                position: "left",
                color: "bg-blue-600"
              },
              {
                title: "Preventive Maintenance Schedule",
                description: "We create a customized maintenance schedule based on your system's specific needs, operational patterns, and environmental factors to maximize performance retention.",
                icon: <Calendar className="h-6 w-6 text-white" />,
                position: "right",
                color: "bg-green-600"
              },
              {
                title: "Remote Monitoring Setup",
                description: "Our IoT-enabled sensors are installed to continuously monitor 28 critical performance parameters in real-time, sending data to our AI predictive analytics platform.",
                icon: <BarChart4 className="h-6 w-6 text-white" />,
                position: "left",
                color: "bg-purple-600"
              },
              {
                title: "Regular Performance Optimization",
                description: "During scheduled maintenance visits, our technicians perform dynamic micro-calibration to maintain 94-97% of your initial substitution rates and fuel efficiency.",
                icon: <Settings className="h-6 w-6 text-white" />,
                position: "right",
                color: "bg-amber-600"
              },
              {
                title: "Predictive Intervention",
                description: "Our AI system identifies potential issues 18-21 days before they affect performance, allowing us to proactively address them during scheduled maintenance.",
                icon: <Brain className="h-6 w-6 text-white" />,
                position: "left",
                color: "bg-red-600"
              },
              {
                title: "Documentation & Reporting",
                description: "Comprehensive regulatory-grade documentation is maintained for all service activities, with detailed performance reports provided according to your service plan.",
                icon: <FileCheck className="h-6 w-6 text-white" />,
                position: "right",
                color: "bg-teal-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.position === "left" ? -20 : 20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`relative mb-12 ${step.position === "left" ? "md:ml-0 md:mr-auto md:pr-12" : "md:ml-auto md:mr-0 md:pl-12"} md:w-1/2 w-full pl-10 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className={`absolute ${step.position === "left" ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"} left-0 top-3 transform -translate-y-1/2 w-8 h-8 rounded-full ${step.color} flex items-center justify-center z-10`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <div className="text-xl font-bold mb-3">{step.title}</div>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Business Benefits */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={processInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-green-500 font-medium"
                >
                  BUSINESS IMPACT
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mt-2 mb-6"
                >
                  Tangible Benefits
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-slate-300 mb-6"
                >
                  Our maintenance program delivers measurable business advantages beyond just keeping equipment running
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-4"
                >
                  {[
                    { 
                      title: "Maintain 94-97% of Initial Substitution Rates", 
                      description: "While competitors' systems typically lose 15-20% efficiency after 12 months" 
                    },
                    { 
                      title: "Add 5-7 Years to Generator Lifespan", 
                      description: "Through precision care of critical components and combustion dynamics" 
                    },
                    { 
                      title: "99.8% Unplanned Downtime Prevention", 
                      description: "Translating to 36+ more production days annually versus industry average" 
                    }
                  ].map((benefit, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-900 flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-white">{benefit.title}</h3>
                        <p className="text-slate-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    View Client Success Stories <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6">Financial Impact Calculator</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Annual Operating Cost Savings</span>
                      <span className="font-bold text-green-400">₹7.8L+</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Extended Equipment Life Value</span>
                      <span className="font-bold text-blue-400">₹38L+</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Avoided Downtime Value</span>
                      <span className="font-bold text-purple-400">₹22L+</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Insurance Premium Reduction</span>
                      <span className="font-bold text-amber-400">₹4.6L+</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-300">Total 5-Year Financial Impact</span>
                    <span className="text-2xl font-bold text-white">₹98L+</span>
                  </div>
                  <p className="text-xs text-slate-400">Based on a 2 MW dual fuel generator installation with typical usage patterns</p>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-slate-600 text-white">
                    Get Your Custom ROI Analysis
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section> */}
      
       <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-green-500 font-medium"
              >
                BUSINESS IMPACT
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white"
              >
                Tangible Benefits
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-slate-300 mb-6"
              >
                Our maintenance program delivers measurable business advantages beyond just keeping equipment running
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  {
                    title: "Maintain 94-97% of Initial Substitution Rates",
                    description: "While competitors' systems typically lose 15-20% efficiency after 12 months"
                  },
                  {
                    title: "Add 5-7 Years to Generator Lifespan",
                    description: "Through precision care of critical components and combustion dynamics"
                  },
                  {
                    title: "99.8% Unplanned Downtime Prevention",
                    description: "Translating to 36+ more production days annually versus industry average"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-900 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-white">{benefit.title}</h3>
                      <p className="text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                {/* <Button className="bg-green-600 hover:bg-green-700 text-white">
                  View Client Success Stories <ChevronRight className="ml-2 h-4 w-4" />
                </Button> */}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Financial Impact Calculator</h3>

              <div className="space-y-6">
                {[
                  {
                    label: "Annual Operating Cost Savings",
                    value: "₹7.8L+",
                    color: "green",
                    percent: "75%"
                  },
                  {
                    label: "Extended Equipment Life Value",
                    value: "₹38L+",
                    color: "blue",
                    percent: "85%"
                  },
                  {
                    label: "Avoided Downtime Value",
                    value: "₹22L+",
                    color: "purple",
                    percent: "65%"
                  },
                  {
                    label: "Insurance Premium Reduction",
                    value: "₹4.6L+",
                    color: "amber",
                    percent: "40%"
                  }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">{item.label}</span>
                      <span className={`font-bold text-${item.color}-400`}>{item.value}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full bg-${item.color}-500`} style={{ width: item.percent }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-300">Total 5-Year Financial Impact</span>
                  <span className="text-2xl font-bold text-white">₹98L+</span>
                </div>
                <p className="text-xs text-slate-400">
                  Based on a 2 MW dual fuel generator installation with typical usage patterns
                </p>
              </div>

              <div className="mt-6">
                <Button variant="outline" onClick={openModal} className="w-full border-slate-600 text-black">
                  Get Your Custom ROI Analysis
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
      {/* CTA Section */}
        {/* <motion.section
      ref={ctaRef}
      initial={{ opacity: 0, y: 40 }}
      animate={ctaInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -mt-24 -mr-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 -mb-20 -ml-20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
        

          

        
       

      
        </div>
      </div>
    </motion.section>
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 -mb-20 -ml-20"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-white bg-white/10 px-4 py-1 rounded-full"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="font-medium text-sm">DON'T LOSE YOUR FUEL SAVINGS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Stop Losing ₹12-18 Lakhs in Degraded Performance
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              The longer you wait, the more your system efficiency declines. Join the 300+ organizations 
              that maintain peak performance year after year through our industry-leading maintenance program.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" onClick={openModal} asChild className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="#">Lock In Your Performance Guarantee</a>
              </Button>
            </motion.div>
            
        
          </div>
        </div>
      </motion.section> */}

      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -mt-24 -mr-24"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 -mb-20 -ml-20"></div>
    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 mb-6 text-white bg-white/10 px-4 py-1 rounded-full">
        <AlertTriangle className="h-4 w-4" />
        <span className="font-medium text-sm">DON'T LOSE YOUR FUEL SAVINGS</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Stop Losing ₹12-18 Lakhs in Degraded Performance
      </h2>

      <p className="text-xl text-white/90 mb-10">
        The longer you wait, the more your system efficiency declines. Join the 300+ organizations
        that maintain peak performance year after year through our industry-leading maintenance program.
      </p>

      <div>
        <Button
          size="lg"
          onClick={openModal}
          asChild
          className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 text-lg"
        >
          <a href="#">Lock In Your Performance Guarantee</a>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};
export default DFKMaintenancePage;