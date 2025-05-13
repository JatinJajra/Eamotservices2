import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { 
  Check, ArrowRight, Zap, Info, Clock, Settings, Shield, 
  ChevronRight, TrendingUp, BarChart, Percent, Target, Award 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceImageGalleryItem {
  url: string;
  alt: string;
  caption?: string;
}

interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  imageGallery?: ServiceImageGalleryItem[];
  faqs?: ServiceFAQItem[];
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  imageGallery,
  faqs,
  callToAction,
}) => {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: galleryRef, inView: galleryInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });
  
  // Extract numeric values from benefit titles for visualizations
  const numericValues = benefits.map(benefit => {
    const match = benefit.title.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
  });
  
  const hasPercentages = numericValues.some(val => val !== null && val <= 100);
  const hasStatistics = numericValues.some(val => val !== null);
  
  return (
    <>
      {/* Hero Section - Enhanced with overlay pattern and animated elements */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-800 text-white relative overflow-hidden"
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTEwaDJ2MTBoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
              <div className="h-1 w-24 bg-primary mb-6"></div>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{subtitle}</p>
              <p className="text-white text-lg mb-8 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3">
                  <span className="relative z-10 flex items-center">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-300"></span>
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            {/* Quick benefit highlights */}
            <motion.div 
              className="mt-10 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {benefits.slice(0, 4).map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-white/90 font-medium">{benefit.title}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {heroImage && (
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-primary/0 rounded-xl blur-xl opacity-70"></div>
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-lg shadow-2xl border-2 border-primary/20 relative z-10"
                />
                
                {/* Decorative accents */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full z-0"></div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Features Section - Redesigned with cards and icons */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-primary/0 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-primary/0 rounded-tr-full"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                Key Features & Capabilities
              </span>
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={featuresInView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our comprehensive solution provides industry-leading capabilities that deliver tangible results for your business.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-primary-dark rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-tr from-primary to-primary-dark rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section - With data visualization */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="relative">
                Measurable Benefits & Results
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our solutions deliver proven, quantifiable advantages that impact your bottom line
            </motion.p>
          </div>
          
          {/* Data visualization for benefits */}
          {hasStatistics && (
            <motion.div
              className="max-w-5xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">Performance Metrics at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {benefits.slice(0, 4).map((benefit, idx) => {
                  const match = benefit.title.match(/(\d+(?:\.\d+)?)/);
                  const value = match ? parseFloat(match[1]) : null;
                  
                  if (value === null) return null;
                  
                  return (
                    <motion.div 
                      key={idx} 
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={benefitsInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    >
                      {hasPercentages ? (
                        <div className="relative mx-auto w-24 h-24 mb-4">
                          <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <circle 
                              className="text-gray-200" 
                              strokeWidth="8" 
                              stroke="currentColor" 
                              fill="transparent" 
                              r="40" 
                              cx="50" 
                              cy="50" 
                            />
                            <motion.circle 
                              className="text-primary" 
                              strokeWidth="8" 
                              strokeLinecap="round" 
                              stroke="currentColor" 
                              fill="transparent" 
                              r="40" 
                              cx="50" 
                              cy="50"
                              strokeDasharray={`${2 * Math.PI * 40}`}
                              strokeDashoffset={`${2 * Math.PI * 40 * (1 - Math.min(value, 100) / 100)}`}
                              initial={{ strokeDashoffset: `${2 * Math.PI * 40}` }}
                              animate={benefitsInView ? { 
                                strokeDashoffset: `${2 * Math.PI * 40 * (1 - Math.min(value, 100) / 100)}`
                              } : {}}
                              transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span 
                              className="text-xl font-bold"
                              initial={{ opacity: 0 }}
                              animate={benefitsInView ? { opacity: 1 } : {}}
                              transition={{ duration: 0.3, delay: 1 + idx * 0.1 }}
                            >
                              {value}%
                            </motion.span>
                          </div>
                        </div>
                      ) : (
                        <motion.div 
                          className="flex justify-center items-center mb-4"
                          initial={{ height: 0 }}
                          animate={benefitsInView ? { height: Math.min(100, value) } : {}}
                          transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                        >
                          <div className="relative h-24 w-16 flex items-end justify-center">
                            <motion.div 
                              className="w-full bg-primary rounded-t-lg"
                              initial={{ height: 0 }}
                              animate={benefitsInView ? { height: `${Math.min(100, (value/50) * 100)}%` } : {}}
                              transition={{ duration: 0.8, delay: 0.6 + idx * 0.1 }}
                            ></motion.div>
                            <div className="absolute bottom-0 -mb-7 text-lg font-bold text-gray-800">{value}</div>
                          </div>
                        </motion.div>
                      )}
                      <h4 className="text-sm font-medium text-gray-500">{benefit.title.replace(/\d+(?:\.\d+)?[%]?/g, '').trim()}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      {index % 6 === 0 ? <Award className="h-5 w-5" /> :
                       index % 5 === 0 ? <Target className="h-5 w-5" /> : 
                       index % 4 === 0 ? <TrendingUp className="h-5 w-5" /> :
                       index % 3 === 0 ? <BarChart className="h-5 w-5" /> :
                       index % 2 === 0 ? <Percent className="h-5 w-5" /> :
                       <Check className="h-5 w-5" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Gallery Section */}
      {imageGallery && imageGallery.length > 0 && (
        <motion.section
          ref={galleryRef}
          initial={{ opacity: 0, y: 50 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Project Showcase
              </motion.h2>
              <motion.div 
                className="h-1 w-24 bg-primary mx-auto mb-6"
                initial={{ width: 0 }}
                animate={galleryInView ? { width: 96 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={galleryInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Explore our successful implementations that demonstrate our expertise
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageGallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-xl shadow-2xl"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{image.alt}</h3>
                      <p className="text-sm text-white/80">{image.caption}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 border-4 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <motion.section
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.div 
                className="h-1 w-24 bg-primary mx-auto mb-6"
                initial={{ width: 0 }}
                animate={faqInView ? { width: 96 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p
                className="text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                animate={faqInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Find answers to common questions about our solutions
              </motion.p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-primary mr-2">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="pl-6 border-l border-gray-200 ml-1 mt-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Call to Action Section */}
      {callToAction && (
        <motion.section
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 8 + 2,
                  height: Math.random() * 8 + 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {callToAction.title}
            </motion.h2>
            <motion.p 
              className="text-white text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {callToAction.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-xl rounded-full group relative overflow-hidden"
                size="lg"
                asChild
              >
                <a href={callToAction.buttonLink}>
                  <span className="relative z-10 flex items-center">{callToAction.buttonText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                  <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center items-center gap-8"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">24/7 Expert Support</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm">Industry-Leading Results</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ServicePageTemplate;