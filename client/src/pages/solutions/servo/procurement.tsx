import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ShoppingCart, Scale, Award, Truck, FileCheck, 
  Zap, BarChart4, Shield, Clock, ArrowRight, Check 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactModal from '@/components/Popup/ContectModal';

const ServoProcurementPage: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Expert Market Research & Analysis',
      description: 'We conduct thorough evaluations of leading stabilizer manufacturers to identify the perfect balance of technology, performance, and value for your unique requirements.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Custom Specification Development',
      description: 'Our engineers create precise procurement specifications tailored to your specific site conditions, load characteristics, and critical equipment protection needs.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Strategic Vendor Selection',
      description: 'We partner only with manufacturers who have demonstrated excellence in product quality, innovation, reliability, and responsive after-sales support.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Competitive Quotation Analysis',
      description: 'Our technical experts conduct detailed bid comparisons, negotiating the best terms while ensuring all technical requirements are met without compromise.'
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: 'Seamless Logistics Management',
      description: 'We handle all delivery logistics, including scheduling, transportation, customs clearance (if applicable), and secure site delivery coordination.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Rigorous Quality Verification',
      description: 'Our pre-dispatch inspection and testing protocols ensure your stabilizer meets all specified performance parameters before it leaves the factory.'
    }
  ];

  const benefits = [
    {
      title: 'Guaranteed Premium Quality',
      description: 'Avoid costly equipment damage and downtime with our thoroughly vetted, high-performance stabilizers that consistently exceed industry standards.'
    },
    {
      title: 'Perfect Technical Alignment',
      description: 'Experience optimal protection and efficiency with stabilizers precisely matched to your voltage conditions, load requirements, and critical equipment specifications.'
    },
    {
      title: 'Significant Cost Savings',
      description: 'Save up to 15-20% on procurement costs through our volume purchasing power, manufacturer relationships, and expert negotiation strategies.'
    },
    {
      title: 'Stress-Free Procurement Experience',
      description: 'Eliminate the headaches of technical vetting, vendor management, and quality control with our comprehensive end-to-end procurement solution.'
    },
    {
      title: 'Comprehensive Risk Protection',
      description: 'Sleep easier knowing your investment is protected through our thorough technical assessment, quality verification, and performance validation protocols.'
    },
    {
      title: 'Accelerated Implementation',
      description: 'Reduce procurement timelines by up to 40% with our streamlined processes, established vendor networks, and proactive project management approach.'
    }
  ];

  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Custom Hero Section with Side-by-Side Comparison */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-800 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Expert Servo Stabilizer <span className="text-primary">Procurement</span> That Protects Your Equipment
                </h1>
                <div className="h-1 w-32 bg-primary mb-8"></div>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Transform your power quality management with our elite servo stabilizer procurement service. We eliminate the complexities and risks of equipment sourcing, delivering meticulously selected, performance-verified stabilizers that safeguard your critical equipment.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                    Learn More
                  </Button> */}
                </div>
              </motion.div>

              {/* Key Benefits Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-gray-300">Premium Quality Guarantee</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-gray-300">40% Faster Deployment</p>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart4 className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-gray-300">15-20% Cost Savings</p>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-gray-300">Perfect Technical Fit</p>
                </div>
              </motion.div>
            </div>

            {/* Comparison Visual */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Why Our Procurement Solution Outperforms DIY Approaches</h3>
                
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div>
                    <h4 className="font-semibold text-primary border-b border-primary pb-2 mb-4">
                      With Our Expert Service
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-300 text-sm">Technical specifications perfectly matched to your needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-300 text-sm">Vetted vendors with proven performance history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-300 text-sm">Negotiated pricing with volume discounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-300 text-sm">Factory testing and performance verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-gray-300 text-sm">Complete logistical coordination and delivery</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-400 border-b border-gray-700 pb-2 mb-4">
                      With DIY Procurement
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-red-500">✕</div>
                        <span className="text-gray-400 text-sm">Risk of mismatched technical specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-red-500">✕</div>
                        <span className="text-gray-400 text-sm">Unknown vendor reliability and quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-red-500">✕</div>
                        <span className="text-gray-400 text-sm">Standard pricing with no leverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-red-500">✕</div>
                        <span className="text-gray-400 text-sm">No pre-delivery performance validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-red-500">✕</div>
                        <span className="text-gray-400 text-sm">Complex shipping logistics and delays</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-primary font-semibold">Secure the perfect stabilizer without the risks and complexity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Custom Stats Section */}
      {/* <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                15+
              </motion.div>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                500+
              </motion.div>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                99.8%
              </motion.div>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                20%
              </motion.div>
              <p className="text-gray-300">Average Cost Savings</p>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Features with Visual Process Flow */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Comprehensive Procurement Approach
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We handle every aspect of servo stabilizer procurement to ensure you receive the perfect solution for your needs
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="mt-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Arrow connector */}
          <div className="flex justify-center my-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 + 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 4}
                </div>
                <div className="mt-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits with Visual Indicators */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our Procurement Service
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={benefitsInView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Image */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Valuable Equipment Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our procurement experts are ready to develop a customized stabilizer solution that meets your exact technical needs and budget parameters with no hassle.
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg mb-8 border-l-4 border-primary">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="mb-4">schedule a consultation with our expert team:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>No-obligation technical assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Custom procurement plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Detailed pricing and timeline</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold" onClick={openModal}>
                  Get Your Perfect Stabilizer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-lg overflow-hidden border-2 border-gray-800 shadow-2xl relative">
                <img 
                  src="/assets/img/servo-procurement.png" 
                  alt="Servo Stabilizer Procurement" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-center w-full">
                    <p className="text-lg font-semibold">Join 500+ satisfied clients who trust our procurement expertise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
       <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
     Ready to Source Your Servo Solution?

    </h2>
    <p className="text-white text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
     Our procurement specialists to begin the selection and acquisition process for your servo stabilizers.


    </p>
    <Button
      className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-lg"
      size="lg"
      asChild
    >
      <a href="#" onClick={openModal}>
        Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
       </a>
    </Button>
  </div>
</section>

    </>
  );
}

export default ServoProcurementPage;
// deployment