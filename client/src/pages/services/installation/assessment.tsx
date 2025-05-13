import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  ClipboardCheck, 
  Search, 
  BarChart, 
  FileCheck,
  AlertCircle,
  Building,
  PlugZap,
  Ruler,
  Calculator,
  ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'wouter';

const AssessmentPage: React.FC = () => {
  // Assessment Process Steps
  const assessmentSteps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Initial Site Survey',
      description: 'Comprehensive evaluation of your facility layout, infrastructure, and existing power distribution systems.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: 'Load Analysis',
      description: 'Detailed assessment of your power requirements, load patterns, critical equipment, and operational demands.',
    },
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: 'Space & Access Evaluation',
      description: 'Measurement of available installation space, access routes, and identification of any structural considerations.',
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-primary" />,
      title: 'Compliance & Safety Review',
      description: 'Analysis of regulatory requirements, safety standards, and environmental considerations specific to your location.',
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: 'Feasibility Assessment',
      description: 'Comprehensive evaluation of technical feasibility, potential challenges, and identification of optimal solutions.',
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: 'Detailed Report & Recommendations',
      description: 'Preparation of comprehensive report with findings, recommendations, and proposed implementation plan.',
    }
  ];

  // Key Benefits
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      title: 'Optimized System Design',
      description: "Ensures your power equipment is perfectly matched to your facility's specific requirements and constraints."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'Time & Cost Efficiency',
      description: 'Prevents costly redesigns and implementation delays by identifying challenges before installation begins.'
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-amber-500" />,
      title: 'Compliance Assurance',
      description: 'Validates that all proposed installations will meet local regulations, safety standards, and operational requirements.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-indigo-500" />,
      title: 'Risk Mitigation',
      description: 'Identifies and addresses potential installation challenges and operational risks prior to implementation.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <rect width="1" height="10" fill="currentColor" x="0" y="0" />
                <rect width="10" height="1" fill="currentColor" x="0" y="0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                On-site Assessment & Feasibility
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Comprehensive site evaluation services to ensure optimal power equipment selection, installation planning, and project feasibility for your facility.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Request Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/services/installation/turnkey">View Turnkey Services</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/3 md:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Expert Site Assessments</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Our professional assessments evaluate all aspects of your facility to ensure optimal power system implementation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm">Detailed infrastructure analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm">Regulatory compliance verification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm">Customized installation planning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-sm">Comprehensive feasibility reporting</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Assessment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to evaluating your facility and ensuring optimal power equipment selection and installation planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {assessmentSteps.map((step, index) => (
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
                    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
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

      {/* Benefit Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Assessment Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional assessment services provide crucial insights that ensure project success and optimal system performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Case Study: Manufacturing Facility</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">The Challenge</h3>
                    <p className="text-gray-600">
                      A large manufacturing facility needed to upgrade their backup power system but faced space constraints, complex power distribution architecture, and strict regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Assessment</h3>
                    <p className="text-gray-600">
                      Our team conducted a comprehensive on-site assessment, identifying optimal equipment placement, load requirements, and necessary infrastructure modifications to ensure seamless integration.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">The Results</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Successfully installed 3 diesel generators in limited space</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">37% cost savings through optimized equipment selection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Reduced installation timeline by 3 weeks with detailed planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Full regulatory compliance with zero post-installation issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white p-8 md:p-10 flex flex-col">
                  <h3 className="text-xl font-semibold mb-6">Assessment Scope</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <PlugZap className="h-6 w-6 text-primary-200 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Power Requirements Analysis</h4>
                        <p className="text-white/70 text-sm mt-1">Detailed load profiling and power demand assessment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Building className="h-6 w-6 text-primary-200 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Infrastructure Evaluation</h4>
                        <p className="text-white/70 text-sm mt-1">Structural, electrical, and mechanical system examination</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <AlertCircle className="h-6 w-6 text-primary-200 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Risk Identification</h4>
                        <p className="text-white/70 text-sm mt-1">Comprehensive analysis of potential installation challenges</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FileCheck className="h-6 w-6 text-primary-200 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Compliance Review</h4>
                        <p className="text-white/70 text-sm mt-1">Evaluation against industry standards and local regulations</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="mt-8 border-white text-white hover:bg-white/10 self-start">
                    <Link href="/contact">Request Similar Assessment</Link>
                  </Button>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Ensure Your Project Success?</h2>
            <p className="opacity-90 mb-8">
              Start with a comprehensive on-site assessment to identify the optimal equipment selection, installation approach, and implementation plan for your specific facility needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Request Assessment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AssessmentPage;