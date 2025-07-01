import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Ruler, 
  FileCheck, 
  BarChart4, 
  Gauge, 
  LineChart, 
  Calculator,
  BarChart2,
  ChevronRight,
  CheckCircle,
  Percent,
  CloudCog,
  Fuel,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'wouter';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ContactModal from '@/components/Popup/ContectModal';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const DFKAssessmentPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
      const { ref: testimonialsRef, inView: testimonialsInView } = useIntersectionObserver({ threshold: 0.2 });
        // const { ref: testimonialsRef, inView: testimonialsInView } = useIntersectionObserver({ threshold: 0.2 });
      
    
  // Assessment Services
  const assessmentServices = [
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: 'Technical Feasibility Evaluation',
      description: 'Comprehensive assessment of your diesel generators to determine suitability for dual fuel conversion.',
      color: 'bg-blue-50'
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: 'ROI & Savings Analysis',
      description: 'Detailed economic analysis of conversion costs, operational savings, and return on investment timelines.',
      color: 'bg-green-50'
    },
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: 'Site & Infrastructure Assessment',
      description: 'Evaluation of site conditions, gas availability, and infrastructure requirements for dual fuel implementation.',
      color: 'bg-amber-50'
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: 'Performance Impact Analysis',
      description: 'Assessment of potential impacts on generator performance, efficiency, and maintenance requirements.',
      color: 'bg-indigo-50'
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: 'Environmental Benefit Analysis',
      description: 'Calculation of emission reductions and environmental benefits from dual fuel conversion.',
      color: 'bg-red-50'
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: 'Implementation Roadmap',
      description: 'Development of comprehensive conversion plan with timeline, resource requirements, and operational considerations.',
      color: 'bg-purple-50'
    }
  ];

  // Savings comparison
  const savingsComparison = [
    {
      capacity: '125 kVA',
      dieselOnly: '28.5',
      dualFuel: '18.5',
      savings: '35%',
      co2Reduction: '32%'
    },
    {
      capacity: '250 kVA',
      dieselOnly: '55.2',
      dualFuel: '34.8',
      savings: '37%',
      co2Reduction: '34%'
    },
    {
      capacity: '500 kVA',
      dieselOnly: '108.6',
      dualFuel: '65.2',
      savings: '40%',
      co2Reduction: '36%'
    },
    {
      capacity: '1000 kVA',
      dieselOnly: '216.4',
      dualFuel: '125.5',
      savings: '42%',
      co2Reduction: '38%'
    }
  ];

  // Assessment process steps
  const assessmentSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Discussion of your facility needs, generator specifications, and operational patterns.'
    },
    {
      step: '2',
      title: 'Technical Data Collection',
      description: 'Gathering of detailed information about your generators, including make, model, capacity, and age.'
    },
    {
      step: '3',
      title: 'On-site Inspection',
      description: 'Physical evaluation of generators, installation environment, and infrastructure conditions.'
    },
    {
      step: '4',
      title: 'Gas Supply Assessment',
      description: 'Evaluation of natural gas availability, pressure, and connectivity options.'
    },
    {
      step: '5',
      title: 'Performance Analysis',
      description: 'Detailed calculations of diesel substitution rates, efficiency, and operational impacts.'
    },
    {
      step: '6',
      title: 'Economic Evaluation',
      description: 'Comprehensive cost-benefit analysis with ROI calculations and savings projections.'
    },
    {
      step: '7',
      title: 'Recommendation Report',
      description: 'Delivery of detailed assessment findings with implementation recommendations.'
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
              <pattern id="gas-pattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                <circle cx="5" cy="5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gas-pattern)" />
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
                Dual Fuel Kit Conversion Assessment
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl opacity-90 mb-8 max-w-xl"
              >
                Expert evaluation services to determine the feasibility, savings potential, and implementation strategy for converting your diesel generators to dual fuel operation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
                  <Link href="#">Request Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/70">
                  <Link href="/solutions/dfk/procurement">Explore Dual Fuel Kits</Link>
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
                  <Fuel className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold">Dual Fuel Technology Benefits</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Dual fuel technology enables diesel generators to operate on a mixture of diesel and natural gas, offering significant cost savings and environmental benefits.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Percent className="h-5 w-5 text-green-400" />
                      <h4 className="font-medium">Cost Reduction</h4>
                    </div>
                    <p className="text-sm text-white/70">Up to 40% reduction in fuel costs compared to diesel-only operation</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CloudCog className="h-5 w-5 text-blue-400" />
                      <h4 className="font-medium">Lower Emissions</h4>
                    </div>
                    <p className="text-sm text-white/70">30-40% reduction in carbon emissions and particulate matter</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-purple-400" />
                      <h4 className="font-medium">Non-Invasive</h4>
                    </div>
                    <p className="text-sm text-white/70">No major engine modifications; maintains diesel-only capability</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="h-5 w-5 text-amber-400" />
                      <h4 className="font-medium">Quick ROI</h4>
                    </div>
                    <p className="text-sm text-white/70">Typical ROI period of 8-12 months for high-use generators</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Assessment Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive evaluation services to determine dual fuel conversion feasibility and benefits for your diesel generators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {assessmentServices.map((service, index) => (
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

      {/* Savings Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Potential Savings Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our assessment includes detailed calculations of potential cost savings and environmental benefits
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-none">
              <CardHeader className="bg-primary-50">
                <CardTitle className="text-center text-2xl">Comparative Fuel Cost Analysis</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Based on average operational data of 8 hours/day, 25 days/month at 75% load
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="font-bold">Generator Capacity</TableHead>
                      <TableHead className="text-right font-bold">Diesel Only<br /><span className="text-xs font-normal">(Lakh ₹/month)</span></TableHead>
                      <TableHead className="text-right font-bold">Dual Fuel<br /><span className="text-xs font-normal">(Lakh ₹/month)</span></TableHead>
                      <TableHead className="text-right font-bold">Cost Savings</TableHead>
                      <TableHead className="text-right font-bold">CO₂ Reduction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {savingsComparison.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <TableCell className="font-medium">{row.capacity}</TableCell>
                        <TableCell className="text-right">{row.dieselOnly}</TableCell>
                        <TableCell className="text-right">{row.dualFuel}</TableCell>
                        <TableCell className="text-right text-green-600 font-bold">{row.savings}</TableCell>
                        <TableCell className="text-right text-blue-600 font-bold">{row.co2Reduction}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="text-xs text-gray-500 mt-4">
                  Note: Actual savings may vary based on specific generator models, operational patterns, and local fuel prices. Our assessment provides customized calculations for your specific environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Assessment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive, step-by-step approach to evaluate dual fuel conversion feasibility for your generators
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-primary-100 hidden md:block"></div>
              
              {assessmentSteps.map((step, index) => (
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
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Case Study: Dual-Fuel Conversion at a Premium High-Rise Condominium </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Client Overview</h4>
                    <p className="text-gray-700">A prestigious residential high-rise condominium in Gurgaon, known for its upscale living standards 
and commitment to sustainability and compliance. </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Objective</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">To reduce diesel dependency, lower operational fuel costs, and adopt a cleaner energy solution 
while maintaining uninterrupted power backup for residents. </span>
                      </li>
                      {/* <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Natural gas connection available at site perimeter</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Minor infrastructure modifications required</span>
                      </li> */}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">DG Set Profile</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">1 × 500 kVA </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">1 × 625 kVA </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">1 × 1010 kVA </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">No operational disruptions during conversion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
                {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Case Study: Commercial Complex</h3> */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Solution Implemented</h4>
                    <p className="text-gray-700">EAMOT successfully installed Dual-Fuel Conversion Kits (PNG + Diesel) on all three DG Sets, 
enabling the systems to run efficiently on a combination of piped natural gas (PNG) and diesel. </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Implementation Highlights</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Detailed site survey and statutory planning approvals</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Installation done with minimal downtime, aligned with resident comfort and power 
schedules.</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fully integrated with safety interlocks, flame arrestors, and gas leak sensors. 
</span>
                      </li>
                       <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Performance tuning completed without compromising DG reliability.  
</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Key Outcomes</h4>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Achieved 50–60% diesel substitution during optimal load conditions. </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Marked reduction in emissions and visible smoke, enhancing air quality. </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Substantial fuel cost savings, contributing to lower CAM charges. </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fully compliant with CPCB and local SPCB authority regulations. </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-100 font-medium"
              >
                SUCCESS STORIES
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-100"
              >
                What Our Clients Say
              </motion.h2>
            </div>
            
            {[
              {
                quote: "Trust Reinforced: Satisfied with the results, the customer placed an additional order for dual-fuel conversion of another 625 kVA DG Set at their adjacent tower block. We commend EAMOT for successfully supplying, installing, testing, and commissioning dual fuel kits for four DG sets (500 kVA, two 625 kVA, and 1010 kVA) at our Condominium. The project was completed professionally, on time, and with minimal disruption. We appreciate EAMOT’s quality work, with no issues currently, and anticipate a hassle-free operation. ",
                author: "Thank you,",
                position: "Property Manager ",
                company: "",
                delay: 0.4
              },
              // {
              //   quote: "I was skeptical about achieving the promised fuel savings, but EAMOT's precision implementation has delivered exactly as promised - a 58% average substitution rate with zero operational disruption during installation. Their 72-hour testing protocol is the most thorough I've seen.",
              //   author: "Ananya Patel",
              //   position: "Operations Director",
              //   company: "Reliance Data Centers",
              //   delay: 0.7
              // }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className="mb-12 last:mb-0"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 relative">
                  <div className="absolute top-6 left-6 text-6xl text-primary opacity-20">"</div>
                  <p className="text-gray-300 relative z-10 mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center  font-bold">
                      {/* {testimonial.author.charAt(0)}{testimonial.author.split(' ')[1].charAt(0)} */}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-400">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
            <h2 className="text-3xl font-bold mb-6">Ready to Reduce Your Fuel Costs?</h2>
            <p className="opacity-90 mb-8">
              Contact our dual fuel specialists to begin the assessment process for your diesel generators. Our experts will evaluate your specific requirements and provide detailed guidance on conversion benefits and implementation.
            </p>
            <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Request Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DFKAssessmentPage;