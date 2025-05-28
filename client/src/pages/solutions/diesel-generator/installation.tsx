import React from 'react';
import { motion } from 'framer-motion';
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
  BarChart4
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DGInstallationPage: React.FC = () => {
  const installationSteps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of installation location with detailed planning for foundation, ventilation, and exhaust systems.',
      color: 'bg-blue-50'
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: 'Layout Planning',
      description: 'Detailed planning of generator placement, cable routing, exhaust path, and access considerations for optimal operation.',
      color: 'bg-green-50'
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: 'Transportation',
      description: 'Specialized equipment transport with professional handling to ensure safe delivery to your site.',
      color: 'bg-amber-50'
    },
    {
      icon: <Move className="h-8 w-8 text-primary" />,
      title: 'Positioning',
      description: 'Precise placement using advanced equipment to properly situate your generator in the designated location.',
      color: 'bg-indigo-50'
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: 'Installation',
      description: 'Expert installation by certified technicians with specialized experience in diesel generator systems.',
      color: 'bg-red-50'
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: 'Commissioning',
      description: 'Comprehensive performance testing including load testing, emissions verification, and operational parameter confirmation.',
      color: 'bg-purple-50'
    }
  ];

  const shiftingConsiderations = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: 'When to Relocate Your Generator',
      items: [
        'Facility expansion or renovation projects',
        'Organizational relocation to new premises',
        'Optimizing generator placement for improved efficiency',
        'Noise or emission regulation compliance requirements',
        'Enhanced access for maintenance and servicing'
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
      title: 'Shifting Challenges',
      items: [
        'Weight and dimension constraints during transport',
        'Potential for internal component damage if improperly moved',
        'Electrical and mechanical reconnection complexities',
        'Regulatory approvals for new installation location',
        'Minimizing operational downtime during transition'
      ]
    }
  ];

  const successMetrics = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Fast Turnaround',
      value: '24-48 hrs',
      description: 'Average installation completion time for standard deployments'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Safety Record',
      value: '100%',
      description: 'Perfect safety record across all installation projects'
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: 'First-time Success',
      value: '98.5%',
      description: 'Rate of installations completed without callbacks'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24">
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
                <Link href="/contact">Schedule Installation Service</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Installation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive installation methodology to ensure your diesel generator is properly installed, commissioned, and ready for reliable operation.
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
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Installation & Shifting Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you need a new generator installed or an existing one relocated, our expert team ensures a smooth and efficient process.
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
                    <h3 className="text-2xl font-bold text-primary mb-4">New Installation Services</h3>
                    <p className="text-gray-700 mb-6">
                      Our comprehensive installation service covers every aspect of setting up your new diesel generator system:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Foundation preparation and civil work coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Weather protection and acoustic treatment implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Fuel system setup and initial filling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Electrical integration with building power systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Exhaust system installation with emission compliance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Complete testing and commissioning procedures</span>
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
                      <p className="text-primary font-bold text-sm">Factory-Certified Installation</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shifting" className="mt-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Generator Shifting Solutions</h3>
                    <p className="text-gray-700 mb-6">
                      Our specialized relocation service ensures your generator is moved safely and efficiently:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Comprehensive pre-move inspection and assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Professional disconnection and preparation for transport</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Specialized transportation with proper securing and protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Re-installation at the new location with all necessary adjustments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Post-relocation testing and verification of performance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">Updated documentation and regulatory compliance certification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="grid grid-cols-1 gap-6">
                      {shiftingConsiderations.map((consideration, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex items-center mb-3">
                            {consideration.icon}
                            <h4 className="text-lg font-semibold ml-2">{consideration.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {consideration.items.map((item, i) => (
                              <li key={i} className="text-gray-700 text-sm flex items-start">
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
            <h2 className="text-3xl font-bold mb-4">Our Performance Metrics</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              We take pride in our installation and shifting service quality, measured by these key performance indicators
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
                <h3 className="text-xl font-bold mb-1">{metric.title}</h3>
                <div className="text-3xl font-bold text-accent mb-3">{metric.value}</div>
                <p className="text-white/80 text-sm">{metric.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready for Professional DG Installation?</h2>
                <p className="text-gray-700 mb-6 md:mb-0">
                  Contact our installation team to discuss your diesel generator installation or relocation requirements. We'll provide a detailed assessment and timeline.
                </p>
              </div>
              <div className="text-center md:text-right">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact">Get Started</Link>
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