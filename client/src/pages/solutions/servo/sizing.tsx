import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  ZapOff, 
  BarChart, 
  CheckCircle, 
  Zap, 
  Settings,
  FileCheck,
  Ruler,
  Cpu,
  PieChart,
  Laptop,
  Building2,
  CircuitBoard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContactModal from '@/components/Popup/ContectModal';

const ServoSizingPage: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  // State for the sizing calculator
  const [loadKVA, setLoadKVA] = useState<string>('20');
  const [voltageLevel, setVoltageLevel] = useState<string>('415');
  const [applicationType, setApplicationType] = useState<string>('industrial');
  const [voltageFluctuation, setVoltageFluctuation] = useState<number>(20);
  const [calculationResult, setCalculationResult] = useState<string>('');

  // Function to calculate recommended servo stabilizer size
  const calculateServoSize = () => {
    const kva = parseFloat(loadKVA);
    const fluctuation = voltageFluctuation;
    
    if (isNaN(kva) || kva <= 0) {
      setCalculationResult('Please enter a valid load value');
      return;
    }
    
    // Very simplified calculation for demo purposes
    let sizeFactor = 1.3; // Basic safety factor
    
    // Adjust for application type
    if (applicationType === 'medical') {
      sizeFactor += 0.3; // Medical equipment needs higher safety margin
    } else if (applicationType === 'industrial') {
      sizeFactor += 0.1; // Industrial equipment typically more robust
    }
    
    // Adjust for voltage fluctuation
    if (fluctuation > 30) {
      sizeFactor += 0.2; // Severe fluctuations need more capacity
    } else if (fluctuation > 15) {
      sizeFactor += 0.1; // Moderate fluctuations
    }
    
    const recommendedSize = Math.ceil(kva * sizeFactor);
    const standardSizes = [5, 10, 15, 20, 25, 30, 50, 75, 100, 150, 200, 300, 500];
    
    // Find the next standard size up
    let standardSize = standardSizes.find(size => size >= recommendedSize) || recommendedSize;
    
    setCalculationResult(`${standardSize} kVA Servo Stabilizer`);
  };

  // Sizing features
  const sizingFeatures = [
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: 'Precise Load Assessment',
      description: 'Comprehensive evaluation of your electrical load profiles, peak demands, and power quality requirements.',
      color: 'bg-blue-50'
    },
    {
      icon: <ZapOff className="h-8 w-8 text-primary" />,
      title: 'Voltage Variation Analysis',
      description: 'Detailed measurement and characterization of incoming voltage fluctuations to determine stabilization requirements.',
      color: 'bg-amber-50'
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: 'Equipment Protection Needs',
      description: 'Assessment of sensitive equipment vulnerability to voltage fluctuations and required protection levels.',
      color: 'bg-green-50'
    },
    {
      icon: <CircuitBoard className="h-8 w-8 text-primary" />,
      title: 'Technology Selection',
      description: 'Expert recommendation of optimal servo stabilizer technology based on application requirements.',
      color: 'bg-purple-50'
    },
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: 'Installation Planning',
      description: 'Evaluation of space requirements, ventilation needs, and infrastructure considerations for servo installation.',
      color: 'bg-red-50'
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: 'Documentation & Specification',
      description: 'Comprehensive technical specifications and documentation for your optimal servo stabilizer solution.',
      color: 'bg-indigo-50'
    }
  ];

  // Application use cases
  const applications = [
    {
      name: 'Industrial Manufacturing',
      icon: <Building2 className="h-12 w-12 text-primary" />,
      benefits: [
        'Protection for CNC machines and industrial equipment',
        'Prevention of production downtime due to voltage fluctuations',
        'Extended equipment lifespan through consistent power supply',
        'Improved product quality through stable machine operation'
      ],
      sizing: 'Typically sized at 1.5x connected load to handle startup surges'
    },
    {
      name: 'Medical Facilities',
      icon: <Zap className="h-12 w-12 text-primary" />,
      benefits: [
        'Critical protection for sensitive diagnostic equipment',
        'Consistent power quality for accurate test results',
        'Uninterrupted operation of life-supporting systems',
        'Protection against data loss in computerized equipment'
      ],
      sizing: 'Sized at 1.7-2x connected load for maximum reliability'
    },
    {
      name: 'IT & Data Centers',
      icon: <Laptop className="h-12 w-12 text-primary" />,
      benefits: [
        'Clean power for servers and networking equipment',
        'Prevention of system crashes and hardware failures',
        'Compatibility with UPS systems for comprehensive protection',
        'Reduction in server room cooling requirements'
      ],
      sizing: 'Sized at 1.3-1.5x connected load with focus on efficiency'
    },
    {
      name: 'Telecommunications',
      icon: <Cpu className="h-12 w-12 text-primary" />,
      benefits: [
        'Stable power for transmission and switching equipment',
        'Improved signal quality and network reliability',
        'Protection against transient voltage events',
        'Enhanced battery backup system performance'
      ],
      sizing: 'Sized at 1.4x connected load with emphasis on 24/7 reliability'
    }
  ];

  // Technical factors
  const technicalFactors = [
    {
      factor: 'Input Voltage Range',
      description: 'The wider the input range, the more protection against severe fluctuations',
      importance: 'Critical for areas with unstable grid supply',
      icon: <Zap />
    },
    {
      factor: 'Response Time',
      description: 'How quickly the stabilizer responds to voltage changes',
      importance: 'Critical for sensitive electronic equipment',
      icon: <PieChart />
    },
    {
      factor: 'Correction Capacity',
      description: 'The maximum voltage deviation the stabilizer can correct',
      importance: 'Important in areas with severe voltage sags or swells',
      icon: <Settings />
    },
    {
      factor: 'Efficiency Rating',
      description: 'Higher efficiency means lower operating costs',
      importance: 'Particularly important for continuous operation',
      icon: <BarChart />
    }
  ];

  return (
    <>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <pattern id="circuit-grid" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <path d="M10,0 V20 M0,10 H20" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
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
                Servo Stabilizer Sizing & Selection
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Expert sizing and selection services to ensure your facility has the optimal servo stabilizer solution for reliable voltage regulation and equipment protection.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
                  <Link href="#">Request Sizing Assessment</Link>
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
                <h3 className="text-xl font-bold mb-4 text-gray-800">Servo Stabilizer Size Calculator</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="load-kva" className="text-gray-700">Total Connected Load (kVA)</Label>
                      <Input
                        id="load-kva"
                        type="number"
                        value={loadKVA}
                        onChange={(e) => setLoadKVA(e.target.value)}
                        min="1"
                        className="mt-1 text-primary"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="voltage" className="text-gray-700">Supply Voltage (V)</Label>
                      <RadioGroup 
                        value={voltageLevel} 
                        onValueChange={setVoltageLevel}
                        className="flex space-x-4 mt-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="230" id="v-230" />
                          <Label htmlFor="v-230" className="text-gray-700">230V</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="415" id="v-415" />
                          <Label htmlFor="v-415" className="text-gray-700">415V</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label htmlFor="application" className="text-gray-700">Application Type</Label>
                      <RadioGroup 
                        value={applicationType} 
                        onValueChange={setApplicationType}
                        className="grid grid-cols-2 gap-2 mt-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="commercial" id="app-commercial" />
                          <Label htmlFor="app-commercial" className="text-gray-700">Commercial</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="industrial" id="app-industrial" />
                          <Label htmlFor="app-industrial" className="text-gray-700">Industrial</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medical" id="app-medical" />
                          <Label htmlFor="app-medical" className="text-gray-700">Medical</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="it" id="app-it" />
                          <Label htmlFor="app-it" className="text-gray-700">IT/Data Center</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="fluctuation" className="text-gray-700">Voltage Fluctuation (%)</Label>
                        <span className="text-sm text-gray-500">±{voltageFluctuation}%</span>
                      </div>
                      <Slider
                        value={[voltageFluctuation]}
                        min={5}
                        max={40}
                        step={5}
                        onValueChange={(value) => setVoltageFluctuation(value[0])}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateServoSize}
                      className="mt-2 bg-primary"
                    >
                      Calculate
                    </Button>
                    
                    {calculationResult && (
                      <div className="bg-primary-50 p-4 rounded-lg mt-4">
                        <p className="text-gray-800 font-semibold">Recommended Servo Stabilizer:</p>
                        <p className="text-2xl font-bold text-primary mt-1">{calculationResult}</p>
                        <p className="text-xs text-gray-500 mt-2">Note: This is a simplified estimate. Contact us for a detailed assessment based on your specific requirements and site conditions.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Sizing & Selection Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We employ a comprehensive methodology to determine the optimal servo stabilizer specifications for your unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sizingFeatures.map((feature, index) => (
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

      {/* Application Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application-Specific Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different environments have unique stabilization requirements. Our application-specific approach ensures optimal protection.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="industrial" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-8">
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="it">IT & Data</TabsTrigger>
                <TabsTrigger value="telecom">Telecom</TabsTrigger>
              </TabsList>
              
              {applications.map((app, index) => (
                <TabsContent key={index} value={app.name.toLowerCase().split(' ')[0]} className="mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        {app.icon}
                        <div>
                          <CardTitle className="text-2xl">{app.name}</CardTitle>
                          <CardDescription className="text-base">
                            Specialized servo stabilizer solutions for {app.name.toLowerCase()} environments
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center mb-3 text-primary">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Key Benefits
                          </h3>
                          <ul className="space-y-2">
                            {app.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold flex items-center mb-3 text-gray-800">
                            <Calculator className="h-5 w-5 mr-2 text-primary" />
                            Sizing Considerations
                          </h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">{app.sizing}</p>
                            
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="font-medium text-sm text-gray-800 mb-2">Special Considerations:</h4>
                              <ul className="space-y-1">
                                <li className="flex items-start text-sm">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-gray-600">Inrush current handling</span>
                                </li>
                                <li className="flex items-start text-sm">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-gray-600">Harmonic filtering capabilities</span>
                                </li>
                                <li className="flex items-start text-sm">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-gray-600">Response time requirements</span>
                                </li>
                              </ul>
                            </div>
                          </div>
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

      {/* Technical Factors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Selection Factors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple technical factors influence the optimal servo stabilizer selection for your specific application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {technicalFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center">
                        {factor.icon}
                      </div>
                      <CardTitle>{factor.factor}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{factor.description}</p>
                    <div className="bg-amber-50 p-3 rounded-md">
                      <p className="font-medium text-amber-900 mb-1">Selection Impact:</p>
                      <p className="text-amber-800 text-sm">{factor.importance}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <CardTitle className="text-2xl mb-6">Case Study: Manufacturing Facility</CardTitle>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">The Challenge</h3>
                      <p className="text-gray-600">
                        A manufacturing facility with CNC machines and sensitive equipment was experiencing frequent equipment failures and production stoppages due to unstable voltage supply.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Our Solution</h3>
                      <p className="text-gray-600">
                        After comprehensive load analysis and voltage monitoring, we recommended a 150 kVA servo stabilizer with rapid response time and high correction capacity.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">The Results</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">89% reduction in equipment failures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">42% decrease in production downtime</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">23% improvement in energy efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">ROI achieved in just 9 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white p-8 flex flex-col">
                  <h3 className="text-xl font-semibold mb-6">Our Sizing Process</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Load Profiling</h4>
                        <p className="text-white/70 text-sm mt-1">Comprehensive measurement of load characteristics and patterns</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Voltage Analysis</h4>
                        <p className="text-white/70 text-sm mt-1">72-hour monitoring of voltage variation and quality</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Equipment Assessment</h4>
                        <p className="text-white/70 text-sm mt-1">Evaluation of equipment sensitivity and protection requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Solution Design</h4>
                        <p className="text-white/70 text-sm mt-1">Custom sizing and specification development for optimal protection</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="mt-8 border-white text-white hover:bg-white/10 self-start">
                    <Link href="/contact">Request Similar Assessment</Link>
                  </Button>
                </div>
              </div>
            </Card>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Equipment?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Contact our servo stabilizer specialists to begin the assessment and sizing process for your specific requirements. Our experts will help you identify the optimal solution for your facility.
            </p>
            <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
              <Link href="#">Request Sizing Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServoSizingPage;