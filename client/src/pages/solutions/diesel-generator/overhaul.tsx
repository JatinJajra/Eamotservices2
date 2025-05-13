import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  BarChart3, 
  BarChart4, 
  Settings, 
  Timer,
  PieChart,
  Battery,
  Gauge,
  Zap,
  ArrowDownCircle,
  BarChart,
  Radio,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DGOverhaulPage: React.FC = () => {
  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = React.useState(0);
    const countRef = React.useRef(0);
    const [inView, setInView] = React.useState(false);
    
    React.useEffect(() => {
      if (!inView) return;
      
      const startTime = Date.now();
      const endValue = end;
      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        countRef.current = Math.floor(progress * endValue);
        setCount(countRef.current);
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [end, duration, inView]);
    
    return [count, setInView] as const;
  };

  // Performance metrics data
  const performanceMetrics = [
    { 
      label: 'Fuel Efficiency',
      initialValue: 65,
      overhauledValue: 85,
      unit: '%',
      icon: <Gauge className="h-5 w-5" />,
      color: 'text-amber-500'
    },
    { 
      label: 'Power Output',
      initialValue: 78,
      overhauledValue: 98,
      unit: '%',
      icon: <Zap className="h-5 w-5" />,
      color: 'text-blue-500'
    },
    { 
      label: 'Response Time',
      initialValue: 60,
      overhauledValue: 95,
      unit: '%',
      icon: <Timer className="h-5 w-5" />,
      color: 'text-green-500'
    },
    { 
      label: 'Emissions Control',
      initialValue: 55,
      overhauledValue: 90,
      unit: '%',
      icon: <ArrowDownCircle className="h-5 w-5" />,
      color: 'text-red-500'
    },
    { 
      label: 'Battery Health',
      initialValue: 65,
      overhauledValue: 100,
      unit: '%',
      icon: <Battery className="h-5 w-5" />,
      color: 'text-purple-500'
    }
  ];
  
  // Overhaul phases
  const overhaulPhases = [
    {
      phase: "1",
      title: "Inspection & Diagnostics",
      description: "Comprehensive multi-point inspection to identify all issues affecting generator performance and reliability.",
      tasks: [
        "Load bank testing to verify real output capacity",
        "Compression and leakage testing on all cylinders",
        "Electrical system diagnostics with advanced equipment",
        "Oil sample analysis for contamination detection",
        "Exhaust emission testing and measurement"
      ],
      image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "from-blue-50 to-blue-100"
    },
    {
      phase: "2",
      title: "Component Restoration",
      description: "Factory-grade rebuilding of critical engine and alternator components to restore original performance specifications.",
      tasks: [
        "Cylinder head reconditioning or replacement",
        "Piston rings and bearing replacement",
        "Fuel injection system overhaul and calibration",
        "Governor servicing and control system tuning",
        "Alternator rewinding or replacement when needed"
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      color: "from-amber-50 to-amber-100"
    },
    {
      phase: "3",
      title: "System Integration",
      description: "Reassembly and integration of all components with precise calibration and adjustment for optimal operation.",
      tasks: [
        "Precise engine timing and valve clearance adjustments",
        "Cooling system pressure testing and optimization",
        "Control panel reconfiguration and software updates",
        "Exhaust system restoration with emissions compliance",
        "Complete fluid replacement with premium lubricants"
      ],
      image: "https://images.unsplash.com/photo-1582628151997-96bf810a1a66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      color: "from-green-50 to-green-100"
    },
    {
      phase: "4",
      title: "Testing & Certification",
      description: "Rigorous multi-stage testing to ensure all parameters meet or exceed original factory specifications.",
      tasks: [
        "No-load and full-load runtime testing",
        "Emissions certification to regulatory standards",
        "Automatic transfer switch operation verification",
        "Noise level and vibration measurement",
        "Documentation and certification of all work performed"
      ],
      image: "https://images.unsplash.com/photo-1581092921461-39b10c61b97a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-purple-50 to-purple-100"
    }
  ];

  // Common components needing repair/replacement
  const commonRepairComponents = [
    { 
      name: "Fuel Injection System", 
      percentage: 75,
      icon: <Gauge className="h-5 w-5 text-amber-500" />
    },
    { 
      name: "Cooling System", 
      percentage: 68,
      icon: <RotateCcw className="h-5 w-5 text-blue-500" />
    },
    { 
      name: "Alternator & Electrical", 
      percentage: 63,
      icon: <Zap className="h-5 w-5 text-red-500" />
    },
    { 
      name: "Starter Motor", 
      percentage: 59,
      icon: <Radio className="h-5 w-5 text-green-500" />
    },
    { 
      name: "Engine Bearings", 
      percentage: 54,
      icon: <Settings className="h-5 w-5 text-purple-500" />
    }
  ];

  // ROI calculation data  
  const roiStats = [
    { label: 'Average Overhaul Cost', value: '₹3-5 Lakh', icon: <BarChart3 className="h-5 w-5 text-primary" /> },
    { label: 'Extended Lifespan', value: '5-7 Years', icon: <Timer className="h-5 w-5 text-primary" /> },
    { label: 'Efficiency Improvement', value: '15-25%', icon: <BarChart4 className="h-5 w-5 text-primary" /> },
    { label: 'Downtime Reduction', value: '70-85%', icon: <PieChart className="h-5 w-5 text-primary" /> }
  ];

  return (
    <>
      {/* Hero Section with Animated Chart */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
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
                DG Overhaul & Repairs
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8"
              >
                Comprehensive restoration of aging or underperforming generator systems to extend operational lifespan and restore peak performance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Schedule Overhaul Assessment</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">Performance Improvement After Overhaul</h3>
                <div className="space-y-6">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className={`${metric.color}`}>{metric.icon}</span>
                          <span>{metric.label}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="opacity-70">{metric.initialValue}{metric.unit}</span>
                          <span className="text-accent">→</span>
                          <span className="font-bold">{metric.overhauledValue}{metric.unit}</span>
                        </div>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300/30">
                          <motion.div
                            initial={{ width: `${metric.initialValue}%` }}
                            animate={{ width: `${metric.overhauledValue}%` }}
                            transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline of Overhaul Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Overhaul Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive overhaul process restores your diesel generator to like-new condition through these systematic phases
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {overhaulPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-7 gap-8 mb-14 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`col-span-3 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative h-full">
                    <div className="relative z-10 overflow-hidden rounded-xl h-full shadow-xl">
                      <img 
                        src={phase.image} 
                        alt={phase.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary-900/30"></div>
                      <div className="absolute top-4 left-4 bg-white text-primary-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {phase.phase}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`col-span-4 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`h-full bg-gradient-to-br ${phase.color} p-6 rounded-xl shadow-md`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{phase.title}</h3>
                    <p className="text-gray-700 mb-4">{phase.description}</p>
                    
                    <div className="space-y-2">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Repair Components Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Common Repair Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based on our extensive experience, these are the most common generator components requiring repair or replacement during overhauls
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {commonRepairComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="mr-3">{component.icon}</div>
                    <h3 className="font-medium text-gray-800">{component.name}</h3>
                  </div>
                  <span className="text-primary font-semibold">{component.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${component.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
            <p>* Percentages represent frequency of component repair/replacement across our historical overhaul projects</p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Return on Investment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the financial benefits of generator overhaul versus replacement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {roiStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</h3>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 bg-primary-800 text-white p-6 flex items-center justify-center md:w-64">
                <div className="text-center">
                  <Wrench className="h-12 w-12 mx-auto mb-3 text-accent" />
                  <h3 className="text-xl font-bold">Cost Comparison</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">The bottom line</div>
                <h2 className="mt-1 text-xl font-semibold text-gray-800">Overhaul vs. New Generator</h2>
                <p className="mt-4 text-gray-600">
                  A complete generator overhaul typically costs 30-40% of a new generator purchase, while restoring 90-95% of original performance and extending lifespan by 5-7 years. This provides a significantly better return on investment compared to replacement, especially for generators less than 15 years old.
                </p>
                <div className="mt-6 flex items-center text-gray-700">
                  <BarChart className="h-5 w-5 text-primary mr-2" />
                  <span>Average breakeven period for overhaul investment: 12-18 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Generator Performance?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Contact our overhaul specialists to discuss your generator restoration requirements and schedule an assessment. Extend the life of your investment with our expert services.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">Schedule Overhaul Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DGOverhaulPage;