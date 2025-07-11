import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, AlertTriangle, Zap, Shield, CheckCircle, 
  Phone, FileText, Settings, Activity, Wrench, Truck, Calendar
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ContactModal from "@/components/Popup/ContectModal";

export default function EmergencyBreakdownServicesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [responseProgress, setResponseProgress] = useState(0);
  
  React.useEffect(() => {
    if (processInView) {
      const timer = setTimeout(() => setResponseProgress(90), 500);
      return () => clearTimeout(timer);
    }
  }, [processInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
                                   <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* <section 
        ref={heroRef}
        className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 md:py-28 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <span className="bg-white/20 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Emergency <span className="text-accent">Breakdown Services</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Rapid response technical support and emergency repair services for critical power equipment,
              ensuring minimal downtime during unexpected failures.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="tel:+918970001110" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Hotline
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#process">How It Works</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section> */}
      <section 
  ref={heroRef}
  className="bg-[#154679] text-white py-20 md:py-28 relative overflow-hidden"
>
  <div className="absolute top-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
  </div>

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="container mx-auto px-4 relative z-10"
  >
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-6 inline-flex items-center justify-center">
        <span className="bg-white/20 p-3 rounded-lg mr-4">
          <AlertTriangle className="h-8 w-8" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
          Emergency <span className="text-accent">Breakdown Services</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Rapid response technical support and emergency repair services for critical power equipment,
        ensuring minimal downtime during unexpected failures.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="tel:+918970001110" className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Hotline
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
          <a href="#process">How It Works</a>
        </Button>
      </div>
    </div>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
  </div>
</section>

      
      {/* Service Features */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Rapid Response Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our Emergency <span className="text-primary">Support Services</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When critical power systems fail, our emergency response team delivers fast, 
              effective solutions to get your operations back online with minimal disruption.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-12 w-12 text-primary" />,
                title: "4-6 hours response time.",
                description: "Emergency Support with fast response time for critical systems, available 365 days a year."
              },
              {
                icon: <Truck className="h-12 w-12 text-primary" />,
                title: "Mobile Service Units",
                description: "Fully-equipped emergency response vehicles with essential parts and diagnostic equipment for on-site repairs and system recovery."
              },
              {
                icon: <Wrench className="h-12 w-12 text-primary" />,
                title: "Expert Technicians",
                description: "Highly trained specialists with extensive experience diagnosing and resolving complex power equipment failures under pressure."
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Temporary Power Solutions",
                description: "Rapid deployment of backup generators and temporary power systems to maintain operations during extended repair periods."
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Root Cause Analysis",
                description: "Comprehensive post-emergency investigation to identify underlying causes and prevent future failures through targeted recommendations."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Priority Parts Sourcing",
                description: "Expedited procurement of OEM and compatible replacement parts through our extensive supplier network and inventory management system."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white w-20 h-20 rounded-lg shadow-md flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Emergency Response Process */}
      <section 
        id="process"
        ref={processRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our Emergency <span className="text-primary">Response Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to emergency breakdowns, ensuring efficient resolution 
              and minimizing the impact on your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute h-full w-1 bg-gray-200 left-4 top-0 z-0"></div>
              
              {[
                {
                  icon: <Phone className="h-5 w-5 text-white" />,
                  title: "Emergency Call Intake",
                  description: "Our  emergency hotline connects you with technical specialists who gather critical information and categorize the severity of your breakdown."
                },
                {
                  icon: <Truck className="h-5 w-5 text-white" />,
                  title: "Dispatch & Response",
                  description: "The nearest qualified technician is immediately dispatched to your location with the appropriate tools and commonly required parts."
                },
                {
                  icon: <AlertTriangle className="h-5 w-5 text-white" />,
                  title: "On-site Diagnosis",
                  description: "Upon arrival, our technician conducts a rapid assessment to identify the failure cause and determine the quickest path to system restoration."
                },
                {
                  icon: <Wrench className="h-5 w-5 text-white" />,
                  title: "Emergency Repair",
                  description: "We perform immediate repairs to restore functionality, even if temporary solutions are needed while waiting for specific parts."
                },
                {
                  icon: <FileText className="h-5 w-5 text-white" />,
                  title: "Documentation & Reporting",
                  description: "Comprehensive documentation of the failure, repairs performed, and recommendations for preventing similar breakdowns in the future."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="relative z-10 mb-8 last:mb-0 pl-14"
                >
                  <div className="absolute left-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Response Time Guarantee</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Current Response Rating</span>
                      <span className="text-sm font-medium">{responseProgress}% On-Time</span>
                    </div>
                    <Progress value={responseProgress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Critical Systems</h4>
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">2 Hours</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Data centers, hospitals, mission-critical manufacturing
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">High Priority</h4>
                        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">4 Hours</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Commercial facilities, industrial operations
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-800">Standard Response</h4>
                        <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded">8 Hours</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Non-critical applications and equipment
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">AMC Client Priority</h4>
                        <p className="text-sm text-gray-600">
                          Annual Maintenance Contract clients receive priority emergency response with guaranteed SLAs
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <p className="text-sm text-gray-600">Our response time compliance rate exceeds 98%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Performance Statistics */}
      <section 
        ref={statsRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Performance Metrics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Our Emergency Response <span className="text-primary">Performance</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We measure and track our emergency response performance to ensure we're delivering 
              the highest level of service when you need it most.
            </p>
          </div>
          
          <Card className="border-none shadow-xl overflow-hidden mb-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Performance Indicators</h3>
                  <p className="text-gray-600 mb-6">
                    Our emergency response service is built on measurable performance metrics that 
                    ensure consistency and reliability across all breakdown situations.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-3">Response Time Performance</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Average response time</span>
                            <span className="text-sm font-medium">2.4 hours</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">SLA compliance rate</span>
                            <span className="text-sm font-medium">98.7%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '98.7%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-3">Resolution Effectiveness</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">First-visit resolution rate</span>
                            <span className="text-sm font-medium">87.3%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '87.3%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Average downtime reduction</span>
                            <span className="text-sm font-medium">67%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '67%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-white p-8">
                  <h3 className="text-xl font-bold mb-6">Emergency Response Statistics</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm">Availability</div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-1">98.7%</div>
                      <div className="text-sm">SLA Compliance</div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-1">87%</div>
                      <div className="text-sm">First-visit Resolution</div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-1">67%</div>
                      <div className="text-sm">Downtime Reduction</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg mb-6">
                    <h4 className="font-bold mb-2">Common Emergency Issues</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Generator starting failure</span>
                          <span className="text-sm">32%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div className="h-2 bg-red-500 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">UPS battery failure</span>
                          <span className="text-sm">26%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div className="h-2 bg-orange-500 rounded-full" style={{ width: '26%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Control system issues</span>
                          <span className="text-sm">18%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Stabilizer malfunctions</span>
                          <span className="text-sm">14%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: '14%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Other issues</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-700 rounded-full">
                          <div className="h-2 bg-gray-500 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Client Testimonial</h4>
                    <p className="text-sm italic">
                      "EAMOT's emergency response was exceptional when our data center's primary generator 
                      failed during a power outage. Their team arrived within 90 minutes and had us back online 
                      before our UPS batteries depleted. Their rapid response prevented what could have been a 
                      catastrophic outage for our customers."
                    </p>
                    <p className="text-sm font-medium mt-2">
                      - IT Director, Financial Services Company
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Activity className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Preventing Future Emergencies</h3>
                <p className="text-gray-600 mb-4">
                  While our emergency services provide rapid resolution when breakdowns occur, we always 
                  recommend preventive maintenance programs to minimize unexpected failures. After each 
                  emergency call, we provide detailed recommendations for preventing similar issues in the future.
                </p>
                
                <div className="flex flex-wrap gap-4 items-center mt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                    <a href="/services/amc/preventive">Explore Preventive Maintenance</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                Ready for Immediate Emergency Assistance?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our emergency response team is available 24/7 to help you resolve critical 
                power equipment failures and minimize operational disruption.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="tel:+918970001110" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Hotline: 897 000 111 0
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
                  <a href="#" onClick={openModal}>Request AMC Quote</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}