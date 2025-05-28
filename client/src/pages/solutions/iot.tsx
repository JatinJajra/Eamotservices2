import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IoTSolutionsPage() {
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
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              IoT <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Smart energy monitoring and management through IoT technologies for maximum efficiency and cost savings.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
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
                <span className="font-semibold">Smart Energy Management</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Our IoT-Powered Energy <span className="text-primary">Management Solutions</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's IoT solutions enable real-time monitoring and control of your energy systems, 
                providing valuable insights and automation capabilities to optimize energy consumption and reduce costs.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Real-time energy consumption monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Automated alerts and notifications</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Predictive maintenance through AI analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Remote control and management capabilities</span>
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
                Contact For Solutions
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
                  src="https://www.eamot.com/assets/img/service/service-01.jpg" 
                  alt="IoT Energy Management Dashboard" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">IoT</div>
                  <div className="text-xs">Powered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Key Features</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              IoT <span className="text-primary">Capabilities</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our IoT solutions come with a comprehensive set of features designed to transform your energy management approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-chart-line text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Real-time Analytics
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Get instant insights into energy usage patterns, identify inefficiencies, and track performance metrics in real-time through customizable dashboards.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Energy consumption tracking</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Performance benchmarking</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Cost analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-robot text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Predictive Maintenance
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Utilize AI and machine learning algorithms to predict potential equipment failures before they occur, reducing downtime and maintenance costs.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Failure prediction</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Maintenance scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Health monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-mobile-alt text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Remote Management
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Control and manage your energy systems from anywhere using our mobile app or web portal, allowing for quick responses to changing conditions.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Mobile control</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Automated responses</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Scheduling capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              How Our IoT <span className="text-primary">Solutions Work</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive IoT implementation process ensures a seamless integration with your existing systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Assessment</h3>
                <p className="text-gray-600">
                  We analyze your current energy systems and identify opportunities for IoT integration and optimization.
                </p>
              </motion.div>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-px bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Implementation</h3>
                <p className="text-gray-600">
                  We install IoT sensors and connect your systems to our secure cloud platform with minimal disruption.
                </p>
              </motion.div>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-px bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Configuration</h3>
                <p className="text-gray-600">
                  We customize dashboards, alerts, and automation rules based on your specific requirements.
                </p>
              </motion.div>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-px bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Optimization</h3>
                <p className="text-gray-600">
                  We continuously analyze data to identify further optimization opportunities and refine your energy strategy.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Ready to Transform Your Energy Management with IoT?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and discover how our IoT solutions can help you achieve significant energy savings and operational improvements.
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