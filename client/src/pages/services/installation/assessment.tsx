import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Flashlight, 
  Ruler, 
  Wrench, 
  Clock, 
  FileCheck,
  CheckCircle,
  Users,
  Shield,
  BookOpen,
  AlertTriangle,
  CheckSquare,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import ContactModal from '@/components/Popup/ContectModal';

const InstallationAssessmentPage: React.FC = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  // Service features
  const installationFeatures = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: 'Comprehensive Site Assessment',
      description: 'Detailed evaluation of your facility layout, access points, and infrastructure to ensure optimal installation planning.',
      color: 'bg-blue-50'
    },
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: 'Load Analysis & Sizing',
      description: 'Expert calculation of your power requirements to ensure the equipment is properly sized for your needs.',
      color: 'bg-green-50'
    },
    {
      icon: <Flashlight className="h-8 w-8 text-primary" />,
      title: 'Electrical Integration Planning',
      description: 'Evaluation of existing electrical systems and development of integration strategy for seamless operation.',
      color: 'bg-amber-50'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Regulatory Compliance Check',
      description: 'Verification of all local codes, permits, and regulatory requirements for your installation.',
      color: 'bg-red-50'
    }
  ];

  // Service benefits
  const benefits = [
    {
      title: 'Optimized Installation',
      description: 'Properly planned installation leads to better equipment performance and longevity.',
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Avoid costly mistakes and rework by implementing a well-planned installation strategy.',
      icon: <BarChart className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Minimized Downtime',
      description: 'Careful planning reduces operational disruptions during installation or equipment shifting.',
      icon: <Clock className="h-6 w-6 text-amber-500" />
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure all installations meet local codes, safety standards, and environmental regulations.',
      icon: <Shield className="h-6 w-6 text-red-500" />
    }
  ];

  // Equipment types
  const equipmentTypes = [
    {
      type: 'power',
      label: 'Power Generation',
      items: [
        {
          name: 'Diesel Generators',
          features: [
            'Site foundation & civil work assessment',
            // 'Acoustic requirements evaluation',
            "Ventilation for fresh air inlet & hot air outlet",
            'Exhaust system planning',
            // 'Fuel system integration',
            "Earthing Location",
            'Electrical synchronization planning'
          ]
        },
        {
          name: 'UPS Systems',
          features: [
            'Battery room requirements assessment',
            'Cooling system planning',
            'Critical load circuit identification',
            'Integration with existing backup systems',
            'Monitoring system requirements'
          ]
        }
      ]
    },
    {
      type: 'conditioning',
      label: 'Power Conditioning',
      items: [
        {
          name: 'Servo Stabilizers',
          features: [
            'Load sensitivity analysis',
            'Performance requirements assessment',
            'Integration with sensitive equipment',
            'Protection coordination planning',
            'Sizing and capacity verification'
          ]
        },
        {
          name: 'Inverters & Converters',
          features: [
            'Application requirement analysis',
            'Waveform quality needs assessment',
            'System compatibility verification',
            'Mounting and space requirements',
            'Control system integration planning'
          ]
        }
      ]
    },
    {
      type: 'enhancement',
      label: 'System Enhancements',
      items: [
        {
          name: 'RECD Systems',
          features: [
            'Emission compliance verification',
            'Generator compatibility assessment',
            'Exhaust system modification planning',
            'Performance impact analysis',
            'Monitoring system requirements'
          ]
        },
        {
          name: 'Dual Fuel Kits',
          features: [
            'Gas availability assessment',
            'Generator compatibility verification',
            'Safety system requirements',
            'Fuel storage and supply planning',
            'Performance optimization analysis'
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
                            <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
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
                Installation Assessment Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Comprehensive pre-installation assessment services to ensure optimal placement, integration, and performance of your power equipment.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="#" onClick={openModal}>Request Assessment</Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/services/installation/process">View Installation Process</Link>
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
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Why Pre-Installation Assessment?</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Proper planning before installation ensures optimal equipment performance, regulatory compliance, and cost efficiency. Our assessment service identifies potential challenges and creates a clear installation roadmap.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">Avoid Common Installation Pitfalls</h4>
                      <p className="text-sm text-white/70">Inadequate planning can lead to performance issues, safety hazards, and regulatory violations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckSquare className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">Ensure Optimal Performance</h4>
                      <p className="text-sm text-white/70">Proper installation planning is critical for achieving equipment's rated efficiency and lifespan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">Expert Guidance</h4>
                      <p className="text-sm text-white/70">Benefit from our engineers' extensive experience across diverse installation environments</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Assessment Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive pre-installation evaluation to ensure optimal equipment placement, integration, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {installationFeatures.map((feature, index) => (
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

      {/* Equipment Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Equipment-Specific Assessment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our assessment services are tailored to the specific requirements of different power equipment types
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="power" className="w-full">
              <TabsList className="w-full justify-center mb-8">
                {equipmentTypes.map((type) => (
                  <TabsTrigger key={type.type} value={type.type} className="text-lg px-6">
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {equipmentTypes.map((type) => (
                <TabsContent key={type.type} value={type.type} className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {type.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-6 shadow-md"
                      >
                        <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">
                          {item.name} Assessment
                        </h3>
                        <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Assessment Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Investing in a professional pre-installation assessment provides significant advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Assessment Process</h2>
                <p className="text-gray-600 mb-8">
                  We follow a structured, comprehensive approach to ensure all aspects of your installation requirements are properly evaluated and documented.
                </p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Initial Consultation</h3>
                      <p className="text-gray-600">Detailed discussion of your requirements, equipment specifications, and site characteristics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Site Visit & Inspection</h3>
                      <p className="text-gray-600">Comprehensive on-site evaluation of the installation environment and infrastructure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Technical Analysis</h3>
                      <p className="text-gray-600">Detailed technical evaluation including electrical, mechanical, and structural requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Compliance Verification</h3>
                      <p className="text-gray-600">Identification of all applicable regulations, codes, and permits required for installation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Assessment Report</h3>
                      <p className="text-gray-600">Delivery of comprehensive report with findings, recommendations, and installation plan.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Our Assessment Includes</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Site Preparation Requirements</h4>
                      <p className="text-gray-600 text-sm">Foundation, ventilation, access, and space requirements</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Infrastructure Evaluation</h4>
                      <p className="text-gray-600 text-sm">Electrical, fuel supply, exhaust, and cooling requirements</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Integration Planning</h4>
                      <p className="text-gray-600 text-sm">Connection with existing systems, control interfaces, and monitoring</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Safety & Compliance Analysis</h4>
                      <p className="text-gray-600 text-sm">Fire safety, noise regulations, emissions, and electrical code requirements</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Resource Requirements</h4>
                      <p className="text-gray-600 text-sm">Personnel, equipment, materials, and timeline requirements</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cost Estimation</h4>
                      <p className="text-gray-600 text-sm">Detailed breakdown of installation costs including materials, labor, and permits</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Risk Assessment</h4>
                      <p className="text-gray-600 text-sm">Identification of potential challenges and mitigation strategies</p>
                    </div>
                  </li>
                </ul>
                
                <Button asChild className="mt-8">
                  <Link href="#" onClick={openModal}>Schedule Your Assessment</Link>
                </Button>
              </div>
            </div>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Assessment?</h2>
            <p className="opacity-90 mb-8">
              Contact our installation specialists to schedule your comprehensive pre-installation assessment. Our expert engineers will help ensure your equipment installation is planned for optimal performance and reliability.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="#" onClick={openModal}>Request Assessment Service</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InstallationAssessmentPage;