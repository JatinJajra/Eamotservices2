import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Clock, AlertTriangle, Calendar, Settings, Shield, 
  Check, Users, Heart, TrendingUp, LineChart, BadgeCheck, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactModal from '@/components/Popup/ContectModal';
import { Battery, BarChart3 } from "lucide-react";

const ServoAMCPage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: tabsRef, inView: tabsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: plansRef, inView: plansInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });


   const values = [89,88,96, 99, 90, 93];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % values.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);
  
    const percentage = values[index];
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section with Animated Elements */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[90vh] bg-gray-900 overflow-hidden flex items-center"
      >
        {/* Hero background with overlay */}
       <div className="container mx-auto px-4 relative z-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* LEFT: Hero Text Content */}
    <div className="lg:col-span-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Premium Protection & Optimization</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        Servo Stabilizer <span className="text-primary">Annual Maintenance</span> Contract
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-xl text-gray-300 mb-10 leading-relaxed"
      >
        Safeguard your critical power infrastructure with our industry-leading Maintenance Program.
        Our comprehensive AMC delivers proactive optimization, guaranteed uptime, and complete 
        performance protection - eliminating stabilizer-related risks from your operation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => {
          const section = document.getElementById('plans');
          if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
          }
        }}>
          View Protection Plans
        </Button>
        <Button variant="outline" onClick={openModal} size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Schedule Consultation
        </Button>
      </motion.div>
    </div>

    {/* RIGHT: Status Panel */}
    <div className="lg:col-span-6">
      <div className="rounded-lg shadow-xl border-2 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Circular Progress */}
          <div className="relative mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(156, 163, 175, 0.3)"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="351.86"
                strokeDashoffset={(100 - percentage) * 3.52}
                transition={{ duration: 0.6 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                key={percentage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-green-400"
              >
                {percentage}%
              </motion.div>
              <div className="text-xs text-gray-400">Health Score</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30 text-center">
              <Settings className="h-4 w-4 text-blue-400 mx-auto mb-1" />
              <div className="text-xs text-gray-400 mb-1">Next Service</div>
              <div className="text-lg font-bold text-blue-400">1 day</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30 text-center">
              <Shield className="h-4 w-4 text-green-400 mx-auto mb-1" />
              <div className="text-xs text-gray-400 mb-1">Coverage</div>
              <div className="text-lg font-bold text-green-400">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

        
        {/* Floating stats cards */}
        {/* <div className="hidden lg:block absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 z-30 w-full max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { value: "99.9%", label: "Uptime Guarantee", icon: <Check className="h-6 w-6 text-green-500" /> },
              { value: "+100%", label: "Extended Lifespan", icon: <Heart className="h-6 w-6 text-red-500" /> },
              { value: "-40%", label: "Maintenance Costs", icon: <TrendingUp className="h-6 w-6 text-blue-500" /> }
            ].map((stat, index) => (
              <Card key={index} className="bg-white border-none shadow-xl">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div> */}
      </motion.section>

      
       
      {/* Spacer for floating cards */}
      <div className="h-20 lg:h-28 bg-gray-50 w-full"></div>
      
      {/* Maintenance Program Features Tabs */}
      <motion.section
        ref={tabsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={tabsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={tabsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              COMPREHENSIVE COVERAGE
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={tabsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900"
            >
              Our Maintenance Program Benefits
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={tabsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Experience unmatched protection with our multi-faceted approach to servo stabilizer maintenance
            </motion.p>
          </div>
          
          <Tabs defaultValue="preventive" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-transparent">
              <TabsTrigger value="preventive" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Preventive Care
              </TabsTrigger>
              <TabsTrigger value="emergency" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Emergency Support
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-base">
                Performance Optimization
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="preventive" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Comprehensive Preventive Maintenance</h3>
                  <ul className="space-y-4">
                    {[
                      "PM Visits shall be done as per manufacturer guidelines / SOP",
                      "Customized maintenance schedule based on your specific model",
                      "Detailed analysis to optimize performance",
                      "Early identification of potential failure points",
                      "Complete system cleaning and precision calibration"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    View Maintenance Schedule
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl">
                  <img 
                    src="asstes/img/preventive-maintenance.jpg" 
                    alt="Preventive Maintenance" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-medium">Our 42-point inspection process in action</h4>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="emergency" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-video shadow-xl">
                  <img 
                    src="/images/emergency-response.jpg" 
                    alt="Emergency Response" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-medium">Our emergency response team available 24/7</h4>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Rapid Emergency Response</h3>
                  <ul className="space-y-4">
                    {[
                      "Guaranteed 4-hour on-site response for critical issues",
                      "24/7/365 dedicated hotline with technical experts",
                      "Specialized rapid response units throughout the region",
                      "Priority parts availability for AMC customers",
                      "Comprehensive incident reports with follow-up actions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                            <AlertTriangle className="h-3 w-3 text-red-600" />
                          </div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    View Emergency Protocols
                  </Button> */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Advanced Performance Optimization</h3>
                  <ul className="space-y-4">
                    {[
                      "Proprietary calibration protocols for peak efficiency",
                      "Quarterly performance analytics and reporting",
                      "Load pattern analysis and optimization recommendations",
                      "Energy efficiency improvements through precision tuning",
                      "Advanced diagnostic monitoring with AI-based predictions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <Settings className="h-3 w-3 text-blue-600" />
                          </div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                    View Performance Data
                  </Button> */}
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl">
                  <img 
                    src="/images/performance-optimization.jpg" 
                    alt="Performance Optimization" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-medium">Advanced calibration process for optimal performance</h4>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      
      {/* Features Grid Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 60 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              PREMIUM FEATURES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900"
            >
              Comprehensive AMC Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our industry-leading maintenance contract includes everything needed for total stabilizer protection
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-6 w-6 text-primary" />,
                title: 'Precision Preventive Maintenance',
                description: 'Factory-trained technicians perform thorough 42-point inspections tailored to your stabilizer model and operating environment.'
              },
              {
                icon: <Wrench className="h-6 w-6 text-primary" />,
                title: '24/7 Expert Technical Support',
                description: 'Unlimited access to our dedicated technical support team with specialists available around the clock for any operational challenges.'
              },
              {
                icon: <Settings className="h-6 w-6 text-primary" />,
                title: 'Advanced Performance Optimization',
                description: 'Our proprietary calibration protocols fine-tune your stabilizer for peak efficiency and optimal response time to fluctuations.'
              },
              {
                icon: <AlertTriangle className="h-6 w-6 text-primary" />,
                title: 'Rapid Emergency Response',
                description: 'Guaranteed 4-hour emergency response time with priority dispatching of specialized technicians to your site.'
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: 'Comprehensive Parts Coverage',
                description: 'Eliminate unexpected repair costs with our all-inclusive coverage for genuine replacement parts and skilled labor.'
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: 'Proactive Performance Monitoring',
                description: 'Advanced diagnostic analysis identifies potential issues before they cause failures, with detailed quarterly reports.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Customer Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 60 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              SUCCESS STORIES
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white"
            >
              What Our Clients Say
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Since implementing EAMOT's maintenance program, we've experienced zero stabilizer-related downtime over the past 3 years. The proactive approach has been a game-changer for our operations.",
                author: "Rajesh Kumar",
                position: "Chief Engineer",
                company: ""
              },
              {
                quote: "Their emergency response is exceptional. When we experienced an unexpected voltage issue, the EAMOT team was on-site within 2 hours and had our systems back to optimal performance that same day.",
                author: "Ananya Sharma",
                position: "Facility Manager",
                company: ""
              },
              {
                quote: "The ROI on our stabilizer AMC has been tremendous. Not only have we avoided costly emergency repairs, but their optimization protocols have improved our energy efficiency by nearly 15%.",
                author: "Vikram Mehta",
                position: "Operations Manager",
                company: ""
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-gray-800 p-8 rounded-xl relative"
              >
                <div className="absolute -top-5 -left-2 text-6xl text-primary opacity-30">"</div>
                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-white">
                    {testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position} {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Service Plans Pricing */}
      <motion.section
        ref={plansRef}
        initial={{ opacity: 0, y: 60 }}
        animate={plansInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gray-50"
        id='plans'
      >
        <div className="container mx-auto px-4" >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={plansInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium"
            >
              PROTECTION PLANS
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={plansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900"
            >
              Choose Your Protection Level
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={plansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We offer flexible maintenance plans designed to meet your specific operational requirements
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Standard",
                description: "Essential protection for non-critical applications",
                // price: "Starting at ₹/year",
                features: [
                  "Bi-annual preventive maintenance",
                  // "8-hour emergency response",
                  "Basic phone support (business hours)",
                  "Parts at preferential pricing",
                  "Annual performance report"
                ],
                isPopular: false,
                color: "border-gray-200 hover:border-gray-300"
              },
              {
                name: "Premium",
                description: "Comprehensive coverage for mission-critical systems",
                // price: "Starting at ₹/year",
                features: [
                  "Quarterly preventive maintenance",
                  // "4-hour emergency response",
                  "24/7 phone support with priority queue",
                  "Parts & labor included",
                  "Quarterly performance optimization",
                  "Dedicated support manager"
                ],
                isPopular: true,
                color: "border-primary shadow-lg"
              },
              {
                name: "Enterprise",
                description: "Maximum protection for high-performance environments",
                // price: "Starting at ₹/year",
                features: [
                  "Monthly preventive maintenance",
                  // "2-hour emergency response guarantee",
                  "24/7 VIP technical support",
                  "All parts & labor included",
                  "Remote monitoring system included",
                  "Monthly optimization & reporting",
                  "Dedicated technical account team"
                ],
                isPopular: false,
                color: "border-gray-200 hover:border-gray-300"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`bg-white p-8 rounded-xl border-2 relative ${plan.color}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                {/* <div className="text-xl font-bold text-primary mb-6">{plan.price}</div> */}
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.isPopular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                  Select Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Statistics Section */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="py-16 bg-primary text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "100%", label: "Extended Equipment Life" },
              { value: "40%", label: "Reduced Ownership Costs" },
              { value: "4-6hrs", label: "Emergency Response Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 60 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      >
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M100 0 L0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="0" cy="0" r="2" fill="white"/>
                <circle cx="100" cy="0" r="2" fill="white"/>
                <circle cx="0" cy="100" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 text-primary"
            >
              <Shield className="h-5 w-5" />
              <span className="font-medium">TOTAL PROTECTION GUARANTEE</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Secure Your Power Quality Today
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-10"
            >
              Join the hundreds of organizations who have eliminated stabilizer failures 
              and reduced maintenance costs by up to 40% with our custom-tailored maintenance programs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" onClick={openModal} asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <a href="#">Get Unbreakable Stabilizer Protection</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
// jai ganeshaye namh jai maa gungal jai teetis koti devi devta ki jai ho
export default ServoAMCPage;