import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  BarChart4, 
  Clipboard,
  Users,
  FileCheck,
  Building,
  Ruler,
  CheckSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'wouter';
import ContactModal from '@/components/Popup/ContectModal';

const RECDAdvisoryPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  // Advisory Services
  const advisoryServices = [
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: 'Regulatory Compliance Assessment',
      description: 'Comprehensive evaluation of your facility against current emission standards and identification of compliance gaps.',
      color: 'bg-blue-50'
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: 'Technical Feasibility Analysis',
      description: 'Detailed assessment of technical requirements for RECD implementation on your specific diesel generator models.',
      color: 'bg-amber-50'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: 'Risk Evaluation',
      description: 'Analysis of potential operational impacts, performance considerations, and implementation challenges.',
      color: 'bg-red-50'
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Facility Assessment',
      description: 'On-site evaluation of installation requirements, space constraints, and infrastructure modifications needed.',
      color: 'bg-green-50'
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Documentation & Reporting',
      description: 'Preparation of comprehensive assessment reports, compliance documentation, and implementation roadmaps.',
      color: 'bg-indigo-50'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Stakeholder Consultation',
      description: 'Engagement with regulatory authorities, manufacturer representatives, and facility management teams.',
      color: 'bg-purple-50'
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Ensure full compliance with CPCB/SPCB emission control regulations and avoid penalties.',
      icon: <CheckSquare className="h-6 w-6 text-primary" />
    },
    {
      title: 'Cost Optimization',
      description: 'Identify the most cost-effective RECD implementation approach for your specific requirements.',
      icon: <BarChart4 className="h-6 w-6 text-primary" />
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential technical challenges before implementation begins.',
      icon: <AlertTriangle className="h-6 w-6 text-primary" />
    },
    {
      title: 'Implementation Roadmap',
      description: 'Receive a clear, step-by-step implementation plan with timelines and resource requirements.',
      icon: <Clipboard className="h-6 w-6 text-primary" />
    }
  ];

  // Implementation Process
  const implementationSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Discussion of your facility specifications, generator details, and compliance requirements.'
    },
    {
      step: '2',
      title: 'On-site Assessment',
      description: 'Comprehensive inspection of your generators, installation environment, and operational patterns.'
    },
    {
      step: '3',
      title: 'Technical Analysis',
      description: 'Detailed evaluation of RECD options, compatibility factors, and performance considerations.'
    },
    {
      step: '4',
      title: 'Compliance Verification',
      description: 'Analysis of regulatory requirements specific to your facility location and generator specifications.'
    },
    {
      step: '5',
      title: 'Solution Design',
      description: 'Development of customized RECD implementation plan with technical specifications and procedures.'
    },
    {
      step: '6',
      title: 'Recommendation Report',
      description: 'Delivery of comprehensive advisory report with implementation roadmap and compliance documentation.'
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
              <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <path d="M10,0 V20 M0,10 H20" stroke="currentColor" strokeWidth="0.5" />
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
                RECD Compliance Advisory
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Expert guidance to navigate Retrofit Emission Control Device (RECD) requirements for your diesel generators, ensuring regulatory compliance and optimal implementation approach.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
                  <Link href="#">Request Advisory Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/solutions/recd/procurement">View RECD Procurement</Link>
                </Button>
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
                  <h3 className="text-xl font-semibold">RECD Regulatory Overview</h3>
                </div>
                <p className="text-white/80 mb-4">
                  As per CPCB/SPCB guidelines, diesel generators require Retrofit Emission Control Devices to reduce particulate matter and other pollutants to compliant levels.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Applicable to generators ≥ 125 kVA</h4>
                      <p className="text-sm text-white/70">All DG sets with capacity of 125 kVA and above require RECD implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">CPCB Type Approval Required</h4>
                      <p className="text-sm text-white/70">Only approved RECD systems with valid certification can be installed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Compliance Timeline</h4>
                      <p className="text-sm text-white/70">Implementation deadlines vary by region and SPCB jurisdiction</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our RECD Advisory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive evaluation and guidance for implementing Retrofit Emission Control Devices on your diesel generators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisoryServices.map((service, index) => (
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
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Advisory Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to evaluate your RECD requirements and develop an optimal implementation strategy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary-100 hidden md:block"></div>
              
              {implementationSteps.map((step, index) => (
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
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Our Advisory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert guidance provides valuable advantages for your RECD implementation
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
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
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

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-primary-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Case Study: Manufacturing Facility</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">The Challenge</h3>
                    <p className="text-gray-600">
                      A large manufacturing facility operating multiple DG sets needed to comply with new emission regulations but faced space constraints and technical compatibility challenges.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Approach</h3>
                    <p className="text-gray-600">
                      We conducted a comprehensive on-site assessment, technical compatibility analysis, and regulatory compliance review to develop a phased implementation plan.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">The Results</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Full compliance achieved within regulatory timeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">32% cost savings through optimized implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Zero operational disruption during installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Custom solution for space-constrained installation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-6">Assessment Scope</h3>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <p className="font-medium">Facility:</p>
                    <p className="text-white/80 text-sm">Manufacturing facility with 6 diesel generators (150-500 kVA)</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Regulatory Requirements:</p>
                    <p className="text-white/80 text-sm">CPCB/SPCB emission compliance with PM reduction &gt;70%</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Technical Challenges:</p>
                    <p className="text-white/80 text-sm">Space constraints, multiple generator makes/models, continuous operation requirement</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Implementation Timeline:</p>
                    <p className="text-white/80 text-sm">6-month regulatory deadline for full compliance</p>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="mt-8 border-white text-white hover:bg-white/10 self-start">
                  <Link href="/contact">Request Similar Assessment</Link>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Ensure RECD Compliance?</h2>
            <p className="opacity-90 mb-8">
              Contact our emission compliance specialists to begin the assessment and advisory process for your facility. Our experts will help you navigate regulatory requirements and develop an optimal implementation strategy.
            </p>
            <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
              <Link href="#">Request Advisory Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RECDAdvisoryPage;