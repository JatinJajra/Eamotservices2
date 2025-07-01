import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cable, ClipboardList, Zap, BookOpen, Shield, Users, CheckCircle, AlertTriangle, Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactModal from '@/components/Popup/ContectModal';

const ServoInstallationPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: expertiseRef, inView: expertiseInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="bg-black text-white">
    <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Advanced Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/servo-installation-hero.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/images/servo-installation.jpg" 
              alt="Servo Stabilizer Installation" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 inline-block py-1 px-3 bg-primary/20 text-primary rounded-full"
            >
              <span className="font-semibold text-sm">Industry-Leading Implementation</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Servo Stabilizer <span className="text-primary">Installation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Transform your power quality management with our precision servo stabilizer installation service. 
              Our expert technicians ensure flawless implementation, perfect system integration, and comprehensive 
              performance validation - maximizing your stabilizer's effectiveness from day one.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={openModal} className="bg-primary hover:bg-primary/90 text-white">
                Schedule Expert Installation
              </Button>
                {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Download Installation Guide
                </Button> */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Installation Process Section */}
      <motion.section
        ref={processRef}
        initial={{ opacity: 0, y: 50 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-primary">5-Step</span> Installation Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a methodical approach to ensure perfect implementation and outstanding performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                icon: <ClipboardList className="h-8 w-8 text-primary" />,
                description: "Our engineers conduct a meticulous analysis of your facility's requirements",
                color: "bg-gradient-to-br from-blue-900/20 to-blue-700/20",
                borderColor: "border-blue-500/30"
              },
              {
                step: "02",
                title: "Installation Planning",
                icon: <Wrench className="h-8 w-8 text-primary" />,
                description: "We create a detailed roadmap for installation with minimal disruption",
                color: "bg-gradient-to-br from-indigo-900/20 to-indigo-700/20",
                borderColor: "border-indigo-500/30"
              },
              {
                step: "03",
                title: "Precision Implementation",
                icon: <Cable className="h-8 w-8 text-primary" />,
                description: "Our certified specialists execute the installation with meticulous attention",
                color: "bg-gradient-to-br from-purple-900/20 to-purple-700/20",
                borderColor: "border-purple-500/30"
              },
              {
                step: "04",
                title: "Performance Validation",
                icon: <Zap className="h-8 w-8 text-primary" />,
                description: "27-point commissioning protocol tests across multiple scenarios",
                color: "bg-gradient-to-br from-pink-900/20 to-pink-700/20",
                borderColor: "border-pink-500/30"
              },
              {
                step: "05",
                title: "Training & Handover",
                icon: <Users className="h-8 w-8 text-primary" />,
                description: "Comprehensive training and documentation for your team",
                color: "bg-gradient-to-br from-red-900/20 to-red-700/20",
                borderColor: "border-red-500/30"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className={`${step.color} border ${step.borderColor} p-6 rounded-xl h-full flex flex-col items-center text-center relative overflow-hidden`}
              >
                <div className="text-4xl font-bold text-primary/20 absolute -top-2 -left-2">
                  {step.step}
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Showcase Section */}
      <motion.section
        ref={expertiseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={expertiseInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden aspect-video"
              >
                <img 
                  src="/images/servo-expert-team.jpg" 
                  alt="Expert Installation Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary rounded-full w-3 h-3 animate-pulse"></div>
                    <span className="text-primary font-semibold">Expert Team in Action</span>
                  </div>
                  <p className="text-white text-sm">Our certified technicians implementing a high-capacity servo stabilizer system</p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary font-semibold"
              >
                INDUSTRY-LEADING EXPERTISE
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mt-2 mb-6"
              >
                Factory-Certified Installation Specialists
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-400 mb-8"
              >
                Our elite installation team brings unparalleled expertise to every project. With an average of 15+ years 
                in servo technology implementation, our specialists have successfully completed over 500 installations 
                across multiple industries.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="h-5 w-5 text-primary" />,
                    title: "Factory-Certified",
                    description: "Authorized by all major manufacturers"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-primary" />,
                    title: "Perfect Track Record",
                    description: "100% success rate across all installations"
                  },
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
                    title: "Safety Excellence",
                    description: "Zero incidents across thousands of hours"
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-primary" />,
                    title: "Rapid Implementation",
                    description: "40% faster than industry average"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section with Visual Cards */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key <span className="text-primary">Benefits</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our expert installation service delivers measurable advantages for your power management infrastructure
            </p>
          </div>
          
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "Why Professional Commissioning Matters",
 description: (
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Optimized stabilizer efficiency</li>
      <li>Maximum equipment protection</li>
      <li>Compliance with warranty and safety standards</li>
      <li>Reduction in service interruptions and repairs</li>
    </ul>
  ),      icon: <BarChart className="h-8 w-8 text-primary" />,
      image: "/images/servo-peak-performance.jpg",
      metric: "98%",
      metricLabel: "EFFICIENCY"
    },
    {
      title: "What You Need to Provide",
 description: (
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Ensure availability of stabilized input power</li>
      <li>Keep the installation area accessible and ready</li>
      <li>Provide access to the LT panel or main connection point</li>
      <li>Ensure load availability for commissioning tests</li>
    </ul>
  ),        icon: <Clock className="h-8 w-8 text-primary" />,
      image: "/images/servo-extended-life.jpg",
      metric: "+40%",
      metricLabel: "LONGER LIFE"
    },
    {
      title: "Post-Installation Support",
description: (
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Operator training and handholding</li>
      <li>Preventive maintenance recommendations</li>
      <li>Fast support for any post-installation performance concerns</li>
    </ul>
  ),        icon: <CheckCircle className="h-8 w-8 text-primary" />,
      image: "/images/servo-disruption.jpg",
      metric: "-60%",
      metricLabel: "DOWNTIME"
    }
  ].map((benefit, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={benefitsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
      className="relative group rounded-xl overflow-hidden h-96 shadow-lg"
    >
      <div className="absolute inset-0 z-0">
        {/* <img 
          src={benefit.image} 
          alt={benefit.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-110"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-white/100"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col p-6 justify-between">
        <div>
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
          <p className="text-gray-700">{benefit.description}</p>
        </div>
        
        <div className="mt-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-primary">{benefit.metric}</span>
            <span className="text-sm ml-2 mb-1 text-primary/80">{benefit.metricLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </motion.section>
      

      {/* Performance Metrics */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-r from-primary/10 to-primary/5"
      >
        {/* <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Efficiency Rate" },
              { value: "27pt", label: "Testing Protocol" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-r from-primary/90 to-primary-dark relative overflow-hidden"
      >
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ensure Perfect Installation & Performance
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-lg mb-8"
            >
              Don't risk improper installation compromising your investment. Our certified technicians deliver 
              guaranteed results with minimal disruption to your operations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg"  onClick={openModal} asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
                <a href="#">Schedule Expert Installation</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServoInstallationPage;