import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Calendar, Clock, Wrench, BarChart, CheckCircle, 
  FileCheck, AlertTriangle, Shield, ZapOff, FileText, 
  Settings, User, Gauge, Activity, Percent, Battery
} from "lucide-react";
import ContactModal from "@/components/Popup/ContectModal";

const BenefitCard = ({ 
  icon, 
  title, 
  description, 
  animationDelay = 0, 
  inView = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  animationDelay?: number; 
  inView?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
    transition={{ duration: 0.5, delay: animationDelay }}
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
  >
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function PreventiveMaintenancePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: schedulesRef, inView: schedulesInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [maintenanceProgress, setMaintenanceProgress] = useState(0);
  const [activeEquipment, setActiveEquipment] = useState("generator");
  
  React.useEffect(() => {
    if (processInView) {
      const timer = setTimeout(() => setMaintenanceProgress(85), 500);
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
                <Calendar className="h-8 w-8" />
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
                Preventive <span className="text-accent">Maintenance</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Proactive maintenance solutions designed to maximize equipment reliability, 
              extend operational lifespan, and prevent costly unplanned downtime.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <a href="#process">Explore Our Approach</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="#schedules">View Maintenance Schedules</a>
              </Button>
            </div>
          </div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section> */}
                                   <ContactModal isOpen={isModalOpen} onClose={closeModal} />

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
          <Calendar className="h-8 w-8" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
          Preventive <span className="text-accent">Maintenance</span>
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Proactive maintenance solutions designed to maximize equipment reliability, 
        extend operational lifespan, and prevent costly unplanned downtime.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <a href="#" onClick={openModal}>Explore Our Approach</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
          <a href="#schedules">View Maintenance Schedules</a>
        </Button>
      </div>
    </div>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
  </div>
</section>

      
      {/* Benefits Section */}
      <section 
        ref={benefitsRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Benefits of <span className="text-primary">Preventive Maintenance</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why proactive maintenance is essential for maximizing the reliability, 
              efficiency, and lifespan of your power equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<ZapOff className="h-6 w-6 text-primary" />}
              title="Reduced Downtime"
              description="Prevent unexpected failures that can lead to costly operational interruptions, with up to 70% fewer breakdowns compared to reactive maintenance."
              animationDelay={0.1}
              inView={benefitsInView}
            />
            
            <BenefitCard 
              icon={<Clock className="h-6 w-6 text-primary" />}
              title="Extended Equipment Life"
              description="Regular preventive maintenance can extend the operational lifespan of power equipment by 30-40%, maximizing your investment return."
              animationDelay={0.2}
              inView={benefitsInView}
            />
            
            <BenefitCard 
              icon={<Percent className="h-6 w-6 text-primary" />}
              title="Lower Operating Costs"
              description="Reduce energy consumption by ensuring equipment operates at peak efficiency, while minimizing expensive emergency repairs and replacements."
              animationDelay={0.3}
              inView={benefitsInView}
            />
            
            <BenefitCard 
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Enhanced Safety"
              description="Reduce risks of electrical failures, fires, or other safety hazards by identifying and addressing potential issues before they become dangerous."
              animationDelay={0.4}
              inView={benefitsInView}
            />
            
            <BenefitCard 
              icon={<Gauge className="h-6 w-6 text-primary" />}
              title="Improved Performance"
              description="Maintain optimal equipment performance with properly calibrated and tuned systems, delivering consistent power quality and efficiency."
              animationDelay={0.5}
              inView={benefitsInView}
            />
            
            <BenefitCard 
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="Predictable Budgeting"
              description="Transform unpredictable emergency repairs into planned maintenance expenses, allowing for better financial planning and resource allocation."
              animationDelay={0.6}
              inView={benefitsInView}
            />
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Activity className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">The Cost of Reactive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Studies show that reactive maintenance can cost 3-5 times more than preventive maintenance. 
                  Emergency repairs not only include higher labor and parts costs but also result in significant 
                  operational losses from unplanned downtime.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-red-500">300%</div>
                    <p className="text-sm text-gray-500">Higher repair costs</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-red-500">400%</div>
                    <p className="text-sm text-gray-500">More downtime hours</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-red-500">40%</div>
                    <p className="text-sm text-gray-500">Shorter equipment life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Maintenance Process */}
      <section 
        id="process"
        ref={processRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              The <span className="text-primary">Preventive Maintenance Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured approach to preventive maintenance ensures comprehensive care and 
              maximum reliability for your power equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute h-full w-1 bg-gray-200 left-4 top-0 z-0"></div>
                
                {[
                  {
                    icon: <FileText className="h-5 w-5 text-white" />,
                    title: "Equipment Assessment & Planning",
                    description: "Comprehensive evaluation of all equipment to develop a customized maintenance schedule based on manufacturer recommendations, usage patterns, and critical importance."
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-white" />,
                    title: "Scheduled Maintenance Visits",
                    description: "Regular visits according to the established schedule, during which our technicians perform thorough inspections, testing, and preventive services."
                  },
                  {
                    icon: <Wrench className="h-5 w-5 text-white" />,
                    title: "Comprehensive Service Execution",
                    description: "Methodical completion of all scheduled maintenance tasks, including cleaning, calibration, lubrication, part replacements, and performance testing."
                  },
                  {
                    icon: <FileCheck className="h-5 w-5 text-white" />,
                    title: "Documentation & Reporting",
                    description: "Detailed documentation of all work performed, conditions observed, measurements taken, and parts replaced, providing a complete service history."
                  },
                  {
                    icon: <BarChart className="h-5 w-5 text-white" />,
                    title: "Analysis & Recommendations",
                    description: "Data analysis to identify trends, potential issues, and opportunities for system optimization, with specific recommendations for improvements."
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
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Maintenance Completion Tracking</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Current Maintenance Cycle</span>
                      <span className="text-sm font-medium">{maintenanceProgress}% Complete</span>
                    </div>
                    <Progress value={maintenanceProgress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium text-gray-800">Next Service</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Scheduled for: <span className="font-semibold">June 15, 2025</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Quarterly maintenance visit
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-medium text-gray-800">Time Since Last</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">45 days</span> since last service
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Within recommended interval
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3">Maintenance History</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-12 text-xs text-gray-500 mt-0.5">MAR 15</div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="font-medium text-sm text-gray-800">Q1 Preventive Maintenance</span>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">Completed</span>
                          </div>
                          <p className="text-xs text-gray-500">Full service including oil change, filter replacement</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-12 text-xs text-gray-500 mt-0.5">DEC 12</div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="font-medium text-sm text-gray-800">Q4 Preventive Maintenance</span>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">Completed</span>
                          </div>
                          <p className="text-xs text-gray-500">Annual load testing and component inspection</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-12 text-xs text-gray-500 mt-0.5">SEP 08</div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="font-medium text-sm text-gray-800">Q3 Preventive Maintenance</span>
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">Completed</span>
                          </div>
                          <p className="text-xs text-gray-500">Cooling system service and calibration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-3" />
                    <p className="text-sm text-gray-600">Regular maintenance reduces unexpected failures by 75%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Maintenance Schedules */}
      <section 
        id="schedules"
        ref={schedulesRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4 font-medium">
              Recommended Schedules
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
              Equipment-Specific <span className="text-primary">Maintenance Schedules</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our maintenance schedules are tailored to specific equipment types and usage patterns, 
              ensuring optimal performance and reliability.
            </p>
          </div>
          
          <Tabs 
            defaultValue="generator" 
            value={activeEquipment}
            onValueChange={setActiveEquipment}
            className="w-full"
          >
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              <TabsTrigger 
                value="generator" 
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeEquipment === 'generator' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
              >
                Diesel Generators
              </TabsTrigger>
              <TabsTrigger 
                value="ups" 
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeEquipment === 'ups' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
              >
                UPS Systems
              </TabsTrigger>
              <TabsTrigger 
                value="stabilizer" 
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${activeEquipment === 'stabilizer' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
              >
                Voltage Stabilizers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: schedulesInView ? 1 : 0, y: schedulesInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Settings className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">Diesel Generator Maintenance</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          Diesel generators require systematic maintenance to ensure reliable emergency power 
                          and optimal performance throughout their service life.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Maintenance Factors</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Clock className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Running Hours</span>
                                  <p className="text-sm text-gray-400">Service intervals based on actual operating hours</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Calendar className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Calendar Time</span>
                                  <p className="text-sm text-gray-400">Minimum service frequency regardless of usage</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <AlertTriangle className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Critical Status</span>
                                  <p className="text-sm text-gray-400">More frequent service for emergency backup systems</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Recommended Service</h4>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">Monthly</div>
                                <div className="text-xs text-gray-400">Visual inspection</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">Quarterly</div>
                                <div className="text-xs text-gray-400">Operational service</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">Annual</div>
                                <div className="text-xs text-gray-400">Major service</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Diesel Generator Maintenance Schedule</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Monthly Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Visual inspection of fuel, oil, and coolant levels</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Check for leaks and physical damage</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Battery inspection (terminals, electrolyte level)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Test generator start system</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Brief no-load test run</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Quarterly Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">All monthly maintenance tasks</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Oil and filter change</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Fuel system inspection and filter change</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Air filter inspection or replacement</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">30-minute load test</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Annual Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">All quarterly maintenance tasks</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Cooling system service (coolant replacement)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Fuel tank cleaning and water separation</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Alternator inspection and testing</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Full load bank testing (2-4 hours)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="ups" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: schedulesInView ? 1 : 0, y: schedulesInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Battery className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">UPS System Maintenance</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          Uninterruptible Power Supply systems need regular inspection and service to provide reliable 
                          protection for critical equipment and operations.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Critical Components</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Battery className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Battery System</span>
                                  <p className="text-sm text-gray-400">Primary focus of preventive maintenance</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Gauge className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Power Electronics</span>
                                  <p className="text-sm text-gray-400">Capacitors, inverters, and control circuits</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Settings className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Cooling Systems</span>
                                  <p className="text-sm text-gray-400">Fans, heat sinks, and air flow paths</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Service Schedule</h4>
                            <div className="grid grid-cols-2 gap-2 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">Quarterly</div>
                                <div className="text-xs text-gray-400">Standard inspection</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">Annual</div>
                                <div className="text-xs text-gray-400">Comprehensive service</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">UPS Maintenance Schedule</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Quarterly Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Visual inspection of UPS and battery system</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Check all system indicators and alarms</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Verify input/output voltage and frequency</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Battery terminal inspection and cleaning</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Basic battery condition assessment</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Annual Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">All quarterly maintenance tasks</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Comprehensive battery testing (impedance, load)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Internal component inspection (capacitors, fans)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Dust removal and cleaning of internal components</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Firmware updates (if available)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Operational transfer test (mains to battery)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Runtime verification test</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-bold text-gray-800">Battery Replacement</h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              Most UPS batteries require replacement every 3-5 years, depending on battery type, 
                              usage patterns, and environmental conditions. Our maintenance program includes 
                              battery assessment and provides recommendations for optimal replacement timing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="stabilizer" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: schedulesInView ? 1 : 0, y: schedulesInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2 bg-gray-900 text-white p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                            <Activity className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">Voltage Stabilizer Maintenance</h3>
                        </div>
                        
                        <p className="mb-6 text-gray-300">
                          Servo voltage stabilizers require regular calibration and mechanical maintenance to ensure 
                          accurate voltage regulation and protection for sensitive equipment.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Key Maintenance Areas</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Settings className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Mechanical Components</span>
                                  <p className="text-sm text-gray-400">Servomotor, carbon brushes, variac</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Gauge className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Control Circuit</span>
                                  <p className="text-sm text-gray-400">Voltage sensing, feedback systems</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <Activity className="h-4 w-4 text-primary mr-2 mt-1" />
                                <div>
                                  <span className="font-medium">Calibration</span>
                                  <p className="text-sm text-gray-400">Output voltage accuracy and response time</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Service Frequencies</h4>
                            <div className="grid grid-cols-2 gap-2 text-center">
                              <div>
                                <div className="text-2xl font-bold text-primary">Quarterly</div>
                                <div className="text-xs text-gray-400">Basic inspection</div>
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-primary">Semi-Annual</div>
                                <div className="text-xs text-gray-400">Full service</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-3 p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Stabilizer Maintenance Schedule</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Quarterly Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Visual inspection of all components</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Check input and output voltage accuracy</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Inspect carbon brushes for wear</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Verify proper system cooling</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center bg-primary text-white py-2 px-4 rounded-t-lg">
                              <div className="font-bold">Semi-Annual Maintenance Tasks</div>
                            </div>
                            <div className="border border-t-0 border-gray-200 rounded-b-lg">
                              <table className="w-full">
                                <tbody>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">All quarterly maintenance tasks</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Complete carbon brush replacement (if needed)</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Lubrication of mechanical components</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Control circuit inspection and testing</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Variac surface cleaning and inspection</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr className="border-b border-gray-200">
                                    <td className="py-2 px-4 text-sm">Precision voltage calibration</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 px-4 text-sm">Response time testing and adjustment</td>
                                    <td className="py-2 px-4 w-20 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Activity className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-bold text-gray-800">Maintenance Impact</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              Regular maintenance significantly improves voltage stabilizer performance:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                                <div className="font-bold text-gray-800 mb-1">Output Accuracy</div>
                                <div className="text-xl font-bold text-primary">±1%</div>
                                <p className="text-xs text-gray-500">With regular calibration</p>
                              </div>
                              <div className="bg-white p-3 rounded border border-gray-200 text-center">
                                <div className="font-bold text-gray-800 mb-1">Response Time</div>
                                <div className="text-xl font-bold text-primary">20-30ms</div>
                                <p className="text-xs text-gray-500">With proper adjustment</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
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
                Protect Your Investment with Proactive Maintenance
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss how our preventive maintenance programs can help 
                you maximize equipment reliability, extend operational lifespan, and reduce 
                unexpected downtime.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href="#" onClick={openModal}>Request Maintenance Quote</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
                  <a href="tel:08041663297">Call Us: 080-41663297</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}