import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, CheckSquare, ClipboardCheck, BookOpen, Globe, Mail, 
  Shield, AlertTriangle, Clock, TrendingUp, FileCheck, LucideIcon,
  Award, BarChart, Layers, Users, Building, Check, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats?: string;
  metric?: string;
  color: string;
  delay: number;
  inView: boolean;
}

const FeatureCard = ({ icon, title, description, stats, metric, color, delay, inView }: FeatureCardProps) => {
 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`${color} rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow relative overflow-hidden`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-100/80">{description}</p>
          
          {stats && metric && (
            <div className="mt-4 flex items-end gap-1">
              <span className="text-2xl font-bold text-white">{stats}</span>
              <span className="text-sm text-white/70">{metric}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full bg-white/5"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 -mb-5 -ml-5 rounded-full bg-white/5"></div>
    </motion.div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  delay: number;
  inView: boolean;
}

const StatCard = ({ icon, value, label, description, delay, inView }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">{value}</h3>
          <p className="text-sm text-primary/100 uppercase font-medium mt-1 mb-3">{label}</p>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/5"></div>
    </motion.div>
  );
};

const RECDDocumentationPage: React.FC = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: complianceRef, inView: complianceInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                          <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with Visual Impact */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center"
      >
        {/* Background overlay with visual elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90 z-10"></div>
          <img
            src="/images/regulatory-docs.jpg"
            alt="Regulatory Documentation"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          />
          
          {/* Animated document elements */}
          <div className="absolute inset-0 z-5 opacity-30">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-[15%] left-[20%] w-20 h-28 bg-primary/20 rounded-md transform rotate-12"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="absolute top-[25%] right-[25%] w-24 h-32 bg-primary/30 rounded-md transform -rotate-6"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.9 }}
              className="absolute bottom-[30%] left-[25%] w-28 h-36 bg-primary/20 rounded-md transform -rotate-12"
            />
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, delay: 1.1 }}
              className="absolute bottom-[20%] right-[15%] w-20 h-28 bg-primary/30 rounded-md transform rotate-6"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/20 text-primary"
            >
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Industry-Leading Compliance Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Regulatory <span className="text-primary">Documentation</span> & Compliance Shield
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-gray-300 mb-8 leading-relaxed"
            >
              Stop viewing regulatory documentation as a burden. Our revolutionary compliance system transforms 
              your regulatory paperwork into a strategic asset that protects your business, accelerates approvals,
              and creates competitive advantage.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-primary hover:bg-primary/90 text-white">
                Schedule Consultation
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Download Compliance Guide
              </Button> */}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Compliance Metrics Section */}
      <motion.section
        ref={complianceRef}
        initial={{ opacity: 0, y: 40 }}
        animate={complianceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={complianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Leading Organizations Choose Our Compliance Shield
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={complianceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We've revolutionized regulatory documentation through proprietary methodologies and 
              industry-leading expertise
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                value: "98.5%",
                label: "FIRST-TIME APPROVAL RATE",
                description: "Across 2,300+ CPCB/SPCB submissions with our proprietary methodology",
                icon: <CheckSquare className="h-6 w-6 text-primary" />,
                delay: 0.4
              },
              {
                value: "100%",
                label: "COMPLIANCE GUARANTEE",
                description: "The industry's only written guarantee backed by legal defense support",
                icon: <Shield className="h-6 w-6 text-primary" />,
                delay: 0.5
              },
              {
                value: "Zero",
                label: "FINANCIAL PENALTIES",
                description: "For all our clients over the past 5 years, saving millions in potential fines",
                icon: <AlertTriangle className="h-6 w-6 text-primary" />,
                delay: 0.6
              },
              {
                value: "94%",
                label: "PERFECT AUDIT SCORES",
                description: "Our clients achieve excellent results through our 130-point preparation protocol",
                icon: <Award className="h-6 w-6 text-primary" />,
                delay: 0.7
              },
              {
                value: "75%",
                label: "FASTER APPROVALS",
                description: "Accelerated timelines for faster business operations and project completions",
                icon: <Clock className="h-6 w-6 text-primary" />,
                delay: 0.8
              },
              {
                value: "254+",
                label: "STAFF HOURS SAVED",
                description: "Average annual reduction in time spent on compliance paperwork and follow-ups",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                delay: 0.9
              }
            ].map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                delay={stat.delay}
                inView={complianceInView}
              />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Feature Highlights */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Advanced Documentation Platform
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive features that transform your regulatory documentation from
              a liability into a strategic asset
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FileText className="h-6 w-6 text-primary" />,
                title: "Digital Compliance Vault",
                description: "Our proprietary platform securely stores all regulatory files in our triple-redundant cloud system with 15-year retention and instant accessibility.",
                stats: "15yr",
                metric: "retention",
                color: "bg-blue-900/60 border-blue-500",
                delay: 0.4
              },
              {
                icon: <CheckSquare className="h-6 w-6 text-primary" />,
                title: "Guaranteed Application Approval",
                description: "Our specialized team has achieved a 98.5% first-time approval rate across 2,300+ submissions using our proprietary methodology.",
                stats: "98.5%",
                metric: "approval rate",
                color: "bg-green-900/60 border-green-500",
                delay: 0.5
              },
              {
                icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
                title: "Zero-Deficiency Audit Protection",
                description: "Our 130-point pre-audit assessment protocol and mock inspection process has helped clients achieve perfect scores in 94% of regulatory audits.",
                stats: "130pt",
                metric: "protocol",
                color: "bg-purple-900/60 border-purple-500",
                delay: 0.6
              },
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Regulatory Intelligence Network",
                description: "Gain access to our exclusive regulatory intelligence network that provides advance notice of upcoming rule changes 3-6 months before public announcements.",
                stats: "6mo",
                metric: "advance notice",
                color: "bg-amber-900/60 border-amber-500",
                delay: 0.7
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Pan-India Authority Connection Hub",
                description: "Leverage our established relationships with 85+ SPCB officials across every region in India, dramatically accelerating approval timelines.",
                stats: "85+",
                metric: "officials",
                color: "bg-cyan-900/60 border-cyan-500",
                delay: 0.8
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Strategic Authority Communication",
                description: "Our expert team crafts strategic authority correspondence using our proprietary response matrices that have successfully resolved 400+ complex compliance disputes.",
                stats: "400+",
                metric: "resolutions",
                color: "bg-red-900/60 border-red-500",
                delay: 0.9
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                stats={feature.stats}
                metric={feature.metric}
                color={feature.color}
                delay={feature.delay}
                inView={featuresInView}
              />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Comparative Success Stats */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 40 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-primary/20 to-primary/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Compliance Rate",
                ourValue: 99.7,
                industryValue: 62,
                icon: <Shield className="h-6 w-6 text-white" />,
                delay: 0.3
              },
              {
                title: "First-Attempt Approval Rate",
                ourValue: 98.5,
                industryValue: 41,
                icon: <FileCheck className="h-6 w-6 text-white" />,
                delay: 0.4
              },
              {
                title: "Audit Pass Rate",
                ourValue: 94,
                industryValue: 57,
                icon: <CheckSquare className="h-6 w-6 text-white" />,
                delay: 0.5
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{stat.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-400">Our Clients</span>
                      <span className="text-sm font-medium text-primary">{stat.ourValue}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full" 
                        style={{ width: `${stat.ourValue}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-400">Industry Average</span>
                      <span className="text-sm font-medium text-gray-400">{stat.industryValue}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-gray-500 h-full" 
                        style={{ width: `${stat.industryValue}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-2 text-sm text-gray-300 font-medium">
                    {stat.ourValue - stat.industryValue}% better than industry average
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 40 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Proprietary Documentation Process
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive approach that ensures perfect compliance and strategic advantage
            </motion.p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line connecting steps */}
            <div className="absolute left-[28px] top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-blue-500 to-green-500 
                            ml-0.5 md:left-1/2 md:-ml-0.5 hidden md:block"></div>
            
            {[
              {
                title: "Strategic Assessment",
                description: "We conduct a thorough evaluation of your current documentation status, identifying gaps, risks, and opportunities for strategic advantage.",
                icon: <Layers className="h-6 w-6 text-primary" />,
                delay: 0.4
              },
              {
                title: "Compliance Architecture",
                description: "Our team develops a custom documentation architecture aligned with your specific regulatory requirements and business objectives.",
                icon: <Building className="h-6 w-6 text-blue-500" />,
                delay: 0.6
              },
              {
                title: "Documentation Creation",
                description: "Using our proprietary methodologies, we create comprehensive documentation packages that exceed regulatory requirements.",
                icon: <FileText className="h-6 w-6 text-cyan-500" />,
                delay: 0.8
              },
              {
                title: "Authority Engagement",
                description: "We leverage our established relationships with regulatory officials to ensure smooth submission and accelerated approvals.",
                icon: <Users className="h-6 w-6 text-teal-500" />,
                delay: 1.0
              },
              {
                title: "Ongoing Protection",
                description: "Our continuous monitoring and update system ensures your documentation remains compliant with evolving regulations.",
                icon: <Shield className="h-6 w-6 text-green-500" />,
                delay: 1.2
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: step.delay }}
                className={`relative flex items-start gap-6 mb-10 md:mb-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
                }`}
              >
                <div className="flex-shrink-0 z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border-2 border-gray-700 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg ${
                  index % 2 === 0 ? 'md:mr-[50%]' : 'md:ml-[50%]'
                }`}>
                  <h3 className="text-xl font-bold mb-3">
                    <span className="text-gray-400">Step {index + 1}:</span> {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial={{ opacity: 0, y: 40 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Common Compliance Questions
            </motion.h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What makes your documentation services different from others?",
                  answer: "Unlike traditional compliance services that focus solely on meeting minimum requirements, our approach transforms regulatory documentation into a strategic asset. We combine proprietary methodologies, direct authority relationships, and advanced technology to deliver guaranteed approvals, accelerated timelines, and complete protection against regulatory risks."
                },
                {
                  question: "How can you guarantee 100% compliance?",
                  answer: "Our 100% compliance guarantee is backed by our unique combination of regulatory expertise, proprietary documentation methodologies, and direct authority relationships. In the rare event of a compliance issue, our guarantee includes legal defense support and remediation services at no additional cost – a level of protection unavailable anywhere else in the industry."
                },
                {
                  question: "What types of regulatory documentation do you handle?",
                  answer: "We provide comprehensive documentation services across all environmental, health, safety, and energy regulations, including CPCB/SPCB permits, emissions certifications, safety compliance documentation, and regulatory reporting requirements for all industries and operation types throughout India."
                },
                {
                  question: "How quickly can you help with urgent documentation needs?",
                  answer: "Our rapid response team can address emergency documentation requirements within 24-48 hours. For critical situations, we can deploy on-site specialists to your location anywhere in India within 24 hours to provide immediate assistance and resolution."
                },
                {
                  question: "Do you work with companies of all sizes?",
                  answer: "Yes, we serve organizations across all industries and scales, from single-site operations to multi-location enterprises. Our services are tailored to your specific regulatory environment, with scalable solutions that grow with your business needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-gray-800">
                    <AccordionTrigger className="text-left font-medium py-5 text-white hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -mt-24 -mr-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 -mb-20 -ml-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-white"
            >
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">DON'T RISK YOUR BUSINESS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Don't Risk Your Business with Amateur Documentation
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              Join 850+ organizations that have achieved perfect compliance records, eliminated penalties,
              and accelerated project approvals through our industry-leading documentation shield.
              Your competitors are already working with us.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" onClick={openModal} asChild className="bg-white text-primary hover:bg-gray-100 px-8 text-lg">
                <a href="/contact">Secure Your Compliance Future</a>
              </Button>
              
              {/* <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Book Free Assessment
              </Button> */}
            </motion.div>
            
            {/* Success metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-10"
            >
              {[
                { value: "850+", label: "Protected Organizations" },
                { value: "0", label: "Compliance Penalties" },
                { value: "2,300+", label: "Successful Submissions" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className="text-white/80 text-sm font-medium">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RECDDocumentationPage;