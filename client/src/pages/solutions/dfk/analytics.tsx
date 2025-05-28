import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart4, PieChart, TrendingUp, DollarSign, FileText, Calculator,
  Brain, ChevronRight, Lightbulb, Zap, ArrowRight, Award, CheckCircle,
  BarChart, ArrowUpCircle, ArrowDown, AlertCircle, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const DFKAnalyticsPage: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: calculatorRef, inView: calculatorInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: insightsRef, inView: insightsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
  
  // Interactive calculator state
  const [fuelConsumption, setFuelConsumption] = useState(1200);
  const [fuelPrice, setFuelPrice] = useState(85);
  const [operatingHours, setOperatingHours] = useState(12);
  const [currentEfficiency, setCurrentEfficiency] = useState(35);
  
  // Calculate savings
  const calculateMonthlySavings = () => {
    const dailyConsumption = fuelConsumption * operatingHours;
    const dailyCost = dailyConsumption * fuelPrice / 1000; // Convert to liters
    const monthlyCost = dailyCost * 30;
    const standardSavings = monthlyCost * 0.15; // Standard savings at 15%
    const enhancedSavings = monthlyCost * 0.25; // Enhanced savings with our analytics at 25%
    const additionalSavings = enhancedSavings - standardSavings;
    
    return {
      monthly: Math.round(monthlyCost),
      standardSavings: Math.round(standardSavings),
      enhancedSavings: Math.round(enhancedSavings),
      additionalSavings: Math.round(additionalSavings),
      annual: Math.round(additionalSavings * 12)
    };
  };
  
  const savings = calculateMonthlySavings();
  
  // Custom slider component
  interface SliderProps {
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
    step: number;
    label: string;
    unit: string;
  }

  const Slider: React.FC<SliderProps> = ({ value, setValue, min, max, step, label, unit }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-slate-300">{label}</label>
          <span className="text-sm font-semibold text-blue-400">{value} {unit}</span>
        </div>
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-slate-400">{min} {unit}</span>
          <span className="text-xs text-slate-400">{max} {unit}</span>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95 z-10"></div>
          <img
            src="/images/dfk-analytics.jpg"
            alt="Fuel Analytics"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
        
        {/* Data visualization elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Stylized fuel data visualization */}
            <motion.path
              d="M0,80 C10,70 15,90 20,75 C25,60 30,65 35,55 C40,45 45,55 50,40 C55,25 60,30 65,20 C70,10 75,25 80,15 C85,5 90,15 95,10 L100,10 L100,100 L0,100 Z"
              fill="url(#gradient-blue)"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={heroInView ? { opacity: 0.7, pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating data points */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 shadow-lg"
              style={{
                top: `${20 + Math.random() * 50}%`,
                left: `${20 + Math.random() * 60}%`,
                width: `${80 + Math.random() * 120}px`,
                height: `${60 + Math.random() * 40}px`,
                transform: `rotate(${-5 + Math.random() * 10}deg)`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 0.7, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            >
              <div className="p-3">
                <div className="h-2 w-12 bg-blue-400/30 rounded-full mb-2"></div>
                <div className="h-6 w-full rounded bg-blue-400/10 flex items-center justify-center">
                  {i % 2 === 0 ? 
                    <TrendingUp className="h-3 w-3 text-blue-400" /> : 
                    <BarChart className="h-3 w-3 text-blue-400" />
                  }
                </div>
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
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-blue-600/20 text-blue-400"
            >
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Fuel Intelligence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Profit-Maximizing <span className="text-blue-500">Fuel</span> Intelligence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Standard analytics merely track your fuel usage. Our advanced intelligence platform actively 
              maximizes your savings through continuous AI-driven optimization. While others miss up to 40% 
              of potential savings, our system delivers an additional 12-18% cost reduction.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Calculate Your Savings Potential
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10">
                Explore the Platform
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                { value: "99.9%", label: "Measurement Accuracy" },
                { value: "12-18%", label: "Additional Savings" },
                { value: "350+", label: "Client Implementations" }
              ].map((stat, index) => (
                <div key={index} className="text-center px-4 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Interactive Savings Calculator */}
      <motion.section
        ref={calculatorRef}
        initial={{ opacity: 0, y: 40 }}
        animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={calculatorInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              INTERACTIVE TOOL
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Calculate Your Hidden Savings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Discover how much additional fuel savings you're missing with standard analytics
            </motion.p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-xl p-8 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={calculatorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Input Controls */}
              <div>
                <h3 className="text-xl font-bold mb-6">Generator Information</h3>
                
                <Slider 
                  value={fuelConsumption} 
                  setValue={setFuelConsumption} 
                  min={500} 
                  max={5000} 
                  step={100} 
                  label="Fuel Consumption Rate" 
                  unit="L/hr" 
                />
                
                <Slider 
                  value={fuelPrice} 
                  setValue={setFuelPrice} 
                  min={60} 
                  max={110} 
                  step={1} 
                  label="Diesel Price" 
                  unit="₹/L" 
                />
                
                <Slider 
                  value={operatingHours} 
                  setValue={setOperatingHours} 
                  min={4} 
                  max={24} 
                  step={1} 
                  label="Daily Operating Hours" 
                  unit="hours" 
                />
                
                <Slider 
                  value={currentEfficiency} 
                  setValue={setCurrentEfficiency} 
                  min={20} 
                  max={50} 
                  step={1} 
                  label="Current Efficiency Rating" 
                  unit="%" 
                />
                
                <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-100">
                      Our analysis shows that most organizations are missing up to 40% of potential fuel 
                      savings due to limitations in standard monitoring systems and analytics capabilities.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Results Display */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-6">Your Potential Savings</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-400">Monthly Fuel Cost</span>
                      <span className="text-lg font-bold">₹{savings.monthly.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-400">Standard Analytics Savings</span>
                      <span className="text-lg font-bold">₹{savings.standardSavings.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400" style={{ width: `${(savings.standardSavings / savings.monthly) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <span className="text-sm text-slate-400">Our AI-Powered Savings</span>
                        <div className="ml-2 px-2 py-0.5 text-xs bg-blue-900/50 text-blue-400 rounded-full">+12-18%</div>
                      </div>
                      <span className="text-lg font-bold text-blue-400">₹{savings.enhancedSavings.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${(savings.enhancedSavings / savings.monthly) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-medium">Additional Monthly Savings</span>
                      <div className="flex items-center">
                        <ArrowUpCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-xl font-bold text-green-500">₹{savings.additionalSavings.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-900/20 border border-green-800/30 rounded-lg">
                      <span className="text-sm text-slate-300">Annual Additional Savings</span>
                      <div className="text-3xl font-bold text-green-400 mt-1">₹{savings.annual.toLocaleString()}</div>
                      <span className="text-xs text-slate-400 mt-1">Beyond what standard analytics provide</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Your Detailed Savings Analysis
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* AI Insights Visual Section */}
      <motion.section
        ref={insightsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={insightsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={insightsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              INTELLIGENT OPTIMIZATION
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={insightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              How Our AI Maximizes Your Savings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={insightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Visualization of how our AI identifies optimization opportunities that standard systems miss
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={insightsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-slate-800 rounded-xl border border-slate-700 p-6 relative overflow-hidden">
                {/* Chart visualization */}
                <div className="absolute inset-0 flex items-end p-6">
                  <svg width="100%" height="70%" viewBox="0 0 100 50" preserveAspectRatio="none">
                    {/* Standard analytics line */}
                    <path 
                      d="M0,35 C10,33 20,30 30,31 C40,32 50,28 60,30 C70,32 80,29 90,31 C95,32 100,30 100,29" 
                      stroke="#94a3b8" 
                      strokeWidth="1.5" 
                      fill="none" 
                    />
                    
                    {/* Our analytics line */}
                    <path 
                      d="M0,35 C10,33 20,25 30,23 C40,21 50,18 60,20 C70,22 80,17 90,14 C95,12 100,13 100,12" 
                      stroke="#3b82f6" 
                      strokeWidth="2" 
                      fill="none" 
                    />
                    
                    {/* Highlighted opportunity areas */}
                    <circle cx="30" cy="23" r="1.5" fill="#3b82f6" />
                    <circle cx="60" cy="20" r="1.5" fill="#3b82f6" />
                    <circle cx="90" cy="14" r="1.5" fill="#3b82f6" />
                    
                    {/* Savings area */}
                    <path 
                      d="M0,35 C10,33 20,25 30,23 C40,21 50,18 60,20 C70,22 80,17 90,14 C95,12 100,13 100,12 L100,35 L0,35 Z" 
                      fill="url(#savings-gradient)" 
                      opacity="0.3" 
                    />
                    
                    <defs>
                      <linearGradient id="savings-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Chart overlay elements */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold">Fuel Efficiency Optimization</h3>
                    <div className="text-xs text-slate-400">Last 30 Days</div>
                  </div>
                  
                  <div className="flex items-center mt-auto mr-6">
                    <div className="flex items-center mr-4">
                      <div className="h-1 w-4 bg-slate-400 mr-1.5"></div>
                      <span className="text-xs text-slate-400">Standard Analytics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-1 w-4 bg-blue-500 mr-1.5"></div>
                      <span className="text-xs text-blue-400">Our AI Optimization</span>
                    </div>
                  </div>
                </div>
                
                {/* Opportunity markers */}
                <div className="absolute top-[35%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={insightsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          1
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={insightsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                          2
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute top-[25%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={insightsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                          3
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Insight descriptions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={insightsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 relative">
                <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Micro-Pattern Recognition</h3>
                <p className="text-slate-300 text-sm">
                  Our AI detects microscopic inefficiency patterns in fuel consumption that standard 
                  analytics miss. By identifying and correcting these patterns, we deliver an average 
                  of 5-7% additional savings.
                </p>
                <div className="mt-3 flex items-center text-blue-400 text-sm">
                  <Brain className="h-4 w-4 mr-1" />
                  <span>42+ operational variables analyzed</span>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 relative">
                <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Load-Adaptive Optimization</h3>
                <p className="text-slate-300 text-sm">
                  While standard systems use fixed calibration points, our AI continuously adapts to 
                  changing load conditions throughout the day, dynamically adjusting substitution rates 
                  for optimal performance at every operating point.
                </p>
                <div className="mt-3 flex items-center text-green-400 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>8-14% higher substitution rates</span>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 relative">
                <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Predictive Forecasting</h3>
                <p className="text-slate-300 text-sm">
                  Our digital twin technology simulates operational scenarios 30 days forward, allowing 
                  proactive optimizations based on anticipated changes in load, ambient conditions, and 
                  fuel prices before they occur.
                </p>
                <div className="mt-3 flex items-center text-purple-400 text-sm">
                  <Calculator className="h-4 w-4 mr-1" />
                  <span>7.6 months faster ROI achievement</span>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore All AI Capabilities <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
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
              Advanced Analytics Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our platform includes sophisticated capabilities not available in standard monitoring systems
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <BarChart4 className="h-6 w-6 text-blue-500" />,
                title: "High-Precision Fuel Intelligence",
                description: "Our proprietary sensing technology measures fuel consumption with 99.9% accuracy at 15-second intervals, providing 64x more measurement points than standard systems for unmatched visibility."
              },
              {
                icon: <Brain className="h-6 w-6 text-blue-500" />,
                title: "AI-Powered Optimization Engine",
                description: "Our advanced machine learning algorithms analyze 42+ operational variables to continuously fine-tune your substitution rates, typically increasing savings by an additional 12-18% post-installation."
              },
              {
                icon: <DollarSign className="h-6 w-6 text-blue-500" />,
                title: "Multi-Dimensional Financial Analysis",
                description: "Our comprehensive financial dashboard integrates real-time fuel pricing data with operational metrics to calculate true TCO impact, tax implications, and carbon credit monetization opportunities."
              },
              {
                icon: <PieChart className="h-6 w-6 text-blue-500" />,
                title: "Certified Emissions Verification",
                description: "Our EPA-recognized measurement methodology provides legally defensible emissions reduction data suitable for carbon credit programs, ESG reporting, and regulatory compliance documentation."
              },
              {
                icon: <Calculator className="h-6 w-6 text-blue-500" />,
                title: "Predictive Efficiency Modeling",
                description: "Our unique digital twin technology simulates operational scenarios 30 days forward to identify optimal settings for changing load conditions and fuel prices before they occur."
              },
              {
                icon: <FileText className="h-6 w-6 text-blue-500" />,
                title: "Executive Intelligence Suite",
                description: "Our customizable reporting platform includes 22 pre-built visualization templates specifically designed for different stakeholders from operations teams to C-suite executives."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-600/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Benefits Section with Animated Values */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-500 font-medium"
            >
              BOTTOM-LINE IMPACT
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              Business Benefits Beyond Savings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Our fuel intelligence platform delivers multiple strategic advantages to your organization
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Find Hidden Savings Worth ₹15-28L Annually",
                description: "Our clients discover an average of ₹15-28 lakhs in additional annual savings that standard monitoring systems miss through our micro-optimization algorithms and operational pattern analysis.",
                icon: <DollarSign className="h-10 w-10 text-green-500" />,
                color: "from-green-900/30 to-green-900/5",
                value: "₹15-28L",
                label: "Annual Additional Savings"
              },
              {
                title: "Increase Substitution Rates by 8-14%",
                description: "Organizations using our analytics platform achieve substitution rates 8-14% higher than those using standard monitoring systems through continuous AI-driven calibration enhancement.",
                icon: <ArrowUpCircle className="h-10 w-10 text-blue-500" />,
                color: "from-blue-900/30 to-blue-900/5",
                value: "8-14%",
                label: "Higher Substitution Rates"
              },
              {
                title: "Accelerate Payback by 7.6 Months",
                description: "Our data shows that clients using our analytics platform reach ROI breakeven 7.6 months faster on average than those with basic monitoring due to optimization-driven efficiency gains.",
                icon: <Clock className="h-10 w-10 text-amber-500" />,
                color: "from-amber-900/30 to-amber-900/5",
                value: "7.6",
                label: "Months Faster ROI"
              },
              {
                title: "5-8% Higher ESG Scores",
                description: "Clients leveraging our certified emissions reporting have achieved 5-8% higher ESG ratings from major evaluation bodies, unlocking preferential financing rates and corporate partnership opportunities.",
                icon: <Award className="h-10 w-10 text-purple-500" />,
                color: "from-purple-900/30 to-purple-900/5",
                value: "5-8%",
                label: "ESG Rating Improvement"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`relative rounded-xl overflow-hidden group`}
              >
                <div className="absolute inset-0 z-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color}`}></div>
                </div>
                
                <div className="relative z-10 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 rounded-lg bg-slate-900/70 backdrop-blur-sm flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{benefit.value}</div>
                      <div className="text-sm text-slate-300">{benefit.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm">{benefit.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700/30">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                      <span className="text-slate-300">
                        {index === 0 ? "Verified across 350+ client implementations" :
                         index === 1 ? "Continuously improves over time with AI learning" :
                         index === 2 ? "Accelerates capital recovery and future investments" :
                         "Documented improvement in sustainability reports"}
                      </span>
                    </div>
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
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
          
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-white bg-white/10 px-4 py-1 rounded-full"
            >
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium text-sm">STOP LEAVING MONEY ON THE TABLE</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Unlock ₹15-28 Lakhs in Hidden Annual Savings
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Join the 350+ organizations experiencing unprecedented fuel cost reductions through our 
              intelligent optimization platform. The longer you wait, the more savings opportunities 
              you're missing every day.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="/contact">Calculate Your Hidden Savings Potential</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 text-center"
            >
              <div className="flex items-center justify-center text-white/90">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>No commitment required • Free detailed analysis • ROI guarantee</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DFKAnalyticsPage;