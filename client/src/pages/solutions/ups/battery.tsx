import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Battery, 
  Timer, 
  ShoppingCart, 
  Clock, 
  FileCheck,
  Lightbulb,
  ArrowRight,
  Cpu,
  BarChart,
  Server,
  PlugZap,
  AlertCircle,
  CheckCircle,
  Disc,
  Building2,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface BatteryOption {
  type: string;
  description: string;
  advantages: string[];
  considerations: string[];
  applications: string[];
  lifespan: string;
  icon: LucideIcon;
  color: string;
}

const UPSBatteryPage: React.FC = () => {
  // State for the battery sizing calculator
  const [upsCapacity, setUpsCapacity] = useState<string>('10');
  const [desiredRuntime, setDesiredRuntime] = useState<string>('30');
  const [loadPercentage, setLoadPercentage] = useState<number>(70);
  const [calculatedSize, setCalculatedSize] = useState<string>('');

  // Function to calculate basic battery size (simplified)
  const calculateBatterySize = () => {
    const kva = parseFloat(upsCapacity);
    const runtime = parseFloat(desiredRuntime);
    const load = loadPercentage / 100;
    
    if (isNaN(kva) || isNaN(runtime) || kva <= 0 || runtime <= 0) {
      setCalculatedSize('Please enter valid values');
      return;
    }
    
    // Very simplified calculation - this is just for demonstration
    // Real calculations would be much more complex with various factors
    const batteryCapacity = Math.round(kva * 0.8 * runtime * load / 0.9);
    
    setCalculatedSize(`~${batteryCapacity} Ah @ 12V`);
  };

  // Battery solution features
  const batteryFeatures = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: 'Precise Battery Sizing',
      description: 'Advanced load calculations and runtime analysis to determine optimal battery capacity for your specific UPS requirements.',
      color: 'bg-blue-50'
    },
    {
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: 'Technology Selection',
      description: 'Expert evaluation of battery technologies (VRLA, Li-ion, etc.) based on your space, budget, lifecycle, and performance needs.',
      color: 'bg-green-50'
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: 'Runtime Optimization',
      description: 'Precise calculation of battery configurations to achieve desired runtime while balancing cost and space considerations.',
      color: 'bg-amber-50'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: 'Quality Battery Sourcing',
      description: 'Procurement of high-quality batteries from reputable manufacturers with optimal price-performance characteristics.',
      color: 'bg-indigo-50'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Lifecycle Planning',
      description: 'Comprehensive battery lifecycle analysis with replacement scheduling recommendations for budgeting and continuity planning.',
      color: 'bg-purple-50'
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: 'Installation & Testing',
      description: 'Professional installation services with thorough testing and validation of battery performance under various load conditions.',
      color: 'bg-red-50'
    }
  ];

  // Battery technology comparison
  const batteryOptions: BatteryOption[] = [
    {
      type: 'VRLA (Valve Regulated Lead Acid)',
      description: 'Maintenance-free sealed lead-acid batteries with excellent reliability and balanced cost.',
      advantages: [
        'Cost-effective initial investment',
        'Proven technology with established reliability',
        'Wide availability and support',
        'Good tolerance to various operating conditions'
      ],
      considerations: [
        'Heavier than lithium-ion alternatives',
        '3-5 year typical lifespan',
        'Temperature sensitive performance',
        'Larger footprint than newer technologies'
      ],
      applications: [
        'Small to medium businesses',
        'IT server rooms',
        'Budget-conscious deployments',
        'Moderate runtime requirements'
      ],
      lifespan: '3-5 years',
      icon: Battery,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      type: 'Lithium-Ion',
      description: 'Advanced battery technology offering longer lifespan, smaller footprint, and superior performance.',
      advantages: [
        'Significantly longer service life (8-10 years)',
        'Smaller footprint and lighter weight',
        'Better performance in high-temperature environments',
        'Enhanced monitoring and management capabilities'
      ],
      considerations: [
        'Higher initial investment',
        'Specialized installation and handling',
        'Requires advanced management systems',
        'Temperature monitoring important'
      ],
      applications: [
        'Data centers and critical facilities',
        'Space-constrained installations',
        'Long-term cost optimization focus',
        'Environments with higher ambient temperatures'
      ],
      lifespan: '8-10 years',
      icon: Lightbulb,
      color: 'bg-amber-50 border-amber-200'
    },
    {
      type: 'Nickel-Cadmium',
      description: 'Robust industrial battery solution for extreme operating conditions and specialized applications.',
      advantages: [
        'Extremely long service life (15-20 years)',
        'Excellent performance in extreme temperatures',
        'Highly abuse-resistant',
        'Very stable performance over lifetime'
      ],
      considerations: [
        'Highest initial cost',
        'Environmental considerations for disposal',
        'Requires maintenance in some configurations',
        'Larger space requirements'
      ],
      applications: [
        'Industrial applications',
        'Extreme environmental conditions',
        'Oil & gas facilities',
        'Transportation and infrastructure'
      ],
      lifespan: '15-20 years',
      icon: Building2,
      color: 'bg-green-50 border-green-200'
    }
  ];

  // Common application scenarios
  const applicationScenarios = [
    {
      type: 'Data Center',
      icon: <Server className="h-6 w-6 text-primary" />,
      description: 'High-capacity UPS systems supporting critical data infrastructure',
      requirements: [
        'Extended runtime during power transitions',
        'N+1 or 2N redundancy configurations',
        'High-temperature operating environments',
        'Space efficiency and high energy density'
      ],
      recommendation: 'Lithium-ion batteries with redundant strings and advanced monitoring'
    },
    {
      type: 'Healthcare',
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      description: 'Critical power for life-supporting equipment and healthcare systems',
      requirements: [
        'Absolute reliability for life-critical applications',
        'Extended runtime for emergency scenarios',
        'Frequent testing without degradation',
        'Minimal maintenance requirements'
      ],
      recommendation: 'High-quality VRLA or Lithium-ion with extended warranty and regular testing'
    },
    {
      type: 'Manufacturing',
      icon: <Cpu className="h-6 w-6 text-amber-500" />,
      description: 'Protection for sensitive production equipment and control systems',
      requirements: [
        'Protection against voltage fluctuations',
        'Support for high inrush currents',
        'Resilience in industrial environments',
        'Cost-effective lifecycle management'
      ],
      recommendation: 'Industrial VRLA batteries with enhanced monitoring and surge protection'
    },
    {
      type: 'Small Office',
      icon: <Building2 className="h-6 w-6 text-blue-500" />,
      description: 'Essential protection for small business IT and communication systems',
      requirements: [
        'Reliable protection for servers and network',
        'Moderate runtime needs (10-30 minutes)',
        'Budget-conscious solutions',
        'Simple maintenance requirements'
      ],
      recommendation: 'Standard VRLA batteries with appropriate sizing for critical loads'
    }
  ];

  // Battery sizing process steps
  const sizingProcess = [
    {
      step: '1',
      title: 'Load Assessment',
      description: 'Comprehensive analysis of all equipment connected to the UPS including current draw and startup requirements.',
      icon: <PlugZap className="h-6 w-6 text-primary" />
    },
    {
      step: '2',
      title: 'Runtime Requirements',
      description: 'Determination of required backup time based on business needs, generator startup time, and critical operations.',
      icon: <Timer className="h-6 w-6 text-primary" />
    },
    {
      step: '3',
      title: 'Space & Environment',
      description: 'Evaluation of installation space, ambient temperature conditions, ventilation, and physical constraints.',
      icon: <Building2 className="h-6 w-6 text-primary" />
    },
    {
      step: '4',
      title: 'Technology Selection',
      description: 'Selection of appropriate battery technology based on all requirements, constraints, and budget considerations.',
      icon: <Disc className="h-6 w-6 text-primary" />
    },
    {
      step: '5',
      title: 'Configuration Design',
      description: 'Detailed specification of battery quantity, connection configuration, and management systems.',
      icon: <Cpu className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <pattern id="battery-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                <rect width="2" height="20" fill="currentColor" x="0" y="0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#battery-pattern)" />
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
                UPS Battery Sizing & Supply
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Expert battery solutions that ensure your UPS systems have the optimal power storage to meet runtime requirements, space constraints, and budget considerations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Start Battery Consultation</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Battery Size Estimator</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="ups-capacity" className="text-gray-700">UPS Capacity (kVA)</Label>
                      <Input
                        id="ups-capacity"
                        type="number"
                        value={upsCapacity}
                        onChange={(e) => setUpsCapacity(e.target.value)}
                        min="1"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="runtime" className="text-gray-700">Desired Runtime (minutes)</Label>
                      <Input
                        id="runtime"
                        type="number"
                        value={desiredRuntime}
                        onChange={(e) => setDesiredRuntime(e.target.value)}
                        min="5"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="load-percentage" className="text-gray-700">Load Percentage</Label>
                        <span className="text-sm text-gray-500">{loadPercentage}%</span>
                      </div>
                      <Slider
                        id="load-percentage"
                        value={[loadPercentage]}
                        min={10}
                        max={100}
                        step={5}
                        onValueChange={(value) => setLoadPercentage(value[0])}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateBatterySize}
                      className="mt-2 bg-primary"
                    >
                      Calculate
                    </Button>
                    
                    {calculatedSize && (
                      <div className="bg-primary-50 p-4 rounded-lg mt-4">
                        <p className="text-gray-800 font-semibold">Estimated Battery Capacity Required:</p>
                        <p className="text-2xl font-bold text-primary mt-1">{calculatedSize}</p>
                        <p className="text-xs text-gray-500 mt-2">Note: This is a simplified estimate. Contact us for a detailed analysis based on your specific requirements.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Solution Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Battery Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our battery sizing and supply service covers all aspects of UPS power storage to ensure optimal performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {batteryFeatures.map((feature, index) => (
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
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Technology Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Battery Technology Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help you select the optimal battery technology based on your unique requirements and constraints
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="vrla" className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-8">
                <TabsTrigger value="vrla">VRLA</TabsTrigger>
                <TabsTrigger value="lithium">Lithium-Ion</TabsTrigger>
                <TabsTrigger value="nicad">Nickel-Cadmium</TabsTrigger>
              </TabsList>
              
              {batteryOptions.map((option, index) => (
                <TabsContent key={index} value={option.type.split(' ')[0].toLowerCase()} className="mt-6">
                  <Card className={`border-2 ${option.color.split(' ')[1]} shadow-lg`}>
                    <CardHeader className={option.color.split(' ')[0]}>
                      <div className="flex items-center gap-3">
                        <option.icon className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-2xl">{option.type}</CardTitle>
                          <CardDescription className="text-gray-700">{option.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center mb-3 text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Advantages
                          </h3>
                          <ul className="space-y-2">
                            {option.advantages.map((adv, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span className="text-gray-700">{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold flex items-center mb-3 text-amber-600">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            Considerations
                          </h3>
                          <ul className="space-y-2">
                            {option.considerations.map((con, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span className="text-gray-700">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
                            <Building2 className="h-5 w-5 mr-2" />
                            Ideal Applications
                          </h3>
                          <ul className="space-y-2">
                            {option.applications.map((app, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span className="text-gray-700">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                          <h3 className="text-lg font-semibold mb-2 text-gray-800">Typical Lifespan</h3>
                          <div className="text-3xl font-bold text-primary">{option.lifespan}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Battery Sizing Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Battery Sizing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to determine the optimal battery solution for your specific requirements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary-100 hidden md:block"></div>
              
              {sizingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-10 md:pl-16"
                >
                  <div className="md:absolute md:left-0 md:top-0 flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl mb-4 md:mb-0">
                    {step.step}
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      {step.icon}
                      <h3 className="text-xl font-bold ml-2">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application-Specific Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored battery solutions for different industries and application scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {applicationScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {scenario.icon}
                      <CardTitle>{scenario.type}</CardTitle>
                    </div>
                    <CardDescription>{scenario.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Key Requirements</h3>
                    <ul className="space-y-2 mb-4">
                      {scenario.requirements.map((req, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-primary-50 p-3 rounded-md mt-4">
                      <p className="text-sm font-medium text-primary">Typical Recommendation:</p>
                      <p className="text-sm text-gray-700">{scenario.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your UPS Batteries?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Contact our battery specialists to begin the assessment and selection process for your UPS battery needs. Our experts will help you identify the optimal solution for your specific requirements.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Start Battery Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UPSBatteryPage;