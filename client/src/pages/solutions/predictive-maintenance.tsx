import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PredictiveMaintenancePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Predictive <span className="text-accent">Maintenance</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Prevent equipment failures, reduce downtime, and optimize maintenance operations with our AI-powered predictive maintenance solutions.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Advanced Maintenance Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                AI-Powered <span className="text-primary">Predictive Maintenance</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's predictive maintenance solutions leverage advanced analytics, machine learning, and IoT technology to anticipate 
                equipment failures before they occur, allowing for planned maintenance that reduces downtime and extends asset lifecycles.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Early detection of potential equipment failures</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Reduced unplanned downtime by up to 50%</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Extended equipment lifespan and improved reliability</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Optimized maintenance scheduling and resource allocation</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => {
                  const footer = document.getElementById('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium"
              >
                Discuss Your Maintenance Needs
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="assets/img/service/service-03.jpg" 
                  alt="Predictive Maintenance Dashboard" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">45%</div>
                  <div className="text-xs">Less Downtime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">The Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              How Predictive <span className="text-primary">Maintenance Works</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our predictive maintenance solution combines advanced technologies to transform your maintenance approach from reactive to proactive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mb-4">
                    1
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Data Collection
                  </h3>
                  
                  <p className="text-gray-600">
                    IoT sensors and monitoring devices collect real-time data on equipment performance, operating conditions, and environmental factors.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mb-4">
                    2
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Data Analysis
                  </h3>
                  
                  <p className="text-gray-600">
                    Advanced analytics and machine learning algorithms process and analyze data to identify patterns, anomalies, and potential issues.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mb-4">
                    3
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Failure Prediction
                  </h3>
                  
                  <p className="text-gray-600">
                    Algorithms predict potential equipment failures and degradation, allowing for timely intervention before critical issues arise.
                  </p>
                </CardContent>
              </Card>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white mb-4">
                    4
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Maintenance Planning
                  </h3>
                  
                  <p className="text-gray-600">
                    The system generates maintenance recommendations and schedules based on predicted failures, optimizing resource allocation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img 
                src="assets/img/about/about-02.jpg" 
                alt="Maintenance team working with equipment" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Key Benefits</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                The Advantages of <span className="text-primary">Predictive Maintenance</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-chart-line text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Increased Uptime
                    </h3>
                    <p className="text-gray-600">
                      Reduce unplanned downtime by up to 50% by addressing potential issues before they cause equipment failure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-coins text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Cost Reduction
                    </h3>
                    <p className="text-gray-600">
                      Lower maintenance costs by 15-30% through optimized scheduling, reduced emergency repairs, and extended equipment lifespan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-tasks text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Optimized Resources
                    </h3>
                    <p className="text-gray-600">
                      Improve workforce efficiency with data-driven maintenance scheduling and resource allocation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-shield-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Enhanced Safety
                    </h3>
                    <p className="text-gray-600">
                      Prevent catastrophic failures that could pose safety risks to personnel and the environment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Applications</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Equipment <span className="text-primary">We Monitor</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our predictive maintenance solutions can be applied to a wide range of equipment and systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-bolt text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Generators & Power Systems</h3>
              <p className="text-gray-600 mb-4">
                Monitor diesel generators, UPS systems, and power distribution equipment to ensure reliable power supply.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Engine performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Fuel efficiency optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Battery health assessment</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-snowflake text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">HVAC Systems</h3>
              <p className="text-gray-600 mb-4">
                Track HVAC performance to prevent failures, optimize efficiency, and ensure comfort in your facilities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Compressor health monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Refrigerant level tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Filter replacement optimization</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-industry text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Industrial Equipment</h3>
              <p className="text-gray-600 mb-4">
                Apply predictive maintenance to motors, pumps, compressors, and other critical industrial assets.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Vibration analysis</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Oil quality monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Temperature pattern analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Ready to Transform Your Maintenance Strategy?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our predictive maintenance solutions can reduce downtime, lower costs, and improve equipment reliability.
            </p>
            
            <Button 
              onClick={() => {
                const footer = document.getElementById('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary hover:bg-gray-100 font-poppins font-medium"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}