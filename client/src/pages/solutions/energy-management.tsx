import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EnergyManagementPage() {
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
              Energy <span className="text-accent">Management</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Comprehensive energy management solutions to optimize consumption, reduce costs, and improve sustainability.
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
                <span className="font-semibold">Efficient Energy Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Advanced Energy <span className="text-primary">Management Systems</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's comprehensive energy management solutions provide organizations with the tools, technology, and expertise 
                needed to optimize energy usage, reduce operational costs, and improve sustainability metrics.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Comprehensive energy audits and assessments</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Customized energy management strategies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Real-time monitoring and analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Energy efficiency retrofits and upgrades</span>
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
                Discuss Your Energy Needs
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
                  src="assets/img/service/service-02.jpg" 
                  alt="Energy Management Dashboard" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">30%</div>
                  <div className="text-xs">Avg. Savings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Key Benefits</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Why Choose Our Energy <span className="text-primary">Management Solution</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our energy management solutions deliver measurable results for businesses across industries, offering multiple benefits.
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
                    <i className="fas fa-coins text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Cost Reduction
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Our energy management solutions typically reduce energy costs by 15-30% through optimization, improved efficiency, and demand management.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Lower utility bills</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Reduced maintenance costs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Improved equipment lifespan</span>
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
                    <i className="fas fa-leaf text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Sustainability
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Reduce your carbon footprint and meet ESG (Environmental, Social, and Governance) goals with sustainable energy practices.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Reduced carbon emissions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">ESG reporting capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Green certification support</span>
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
                    <i className="fas fa-chart-line text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Performance Optimization
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Improve operational efficiency through data-driven insights and automated optimization strategies.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Improved system reliability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Enhanced operational control</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Reduced downtime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Approach</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Comprehensive Energy <span className="text-primary">Management Process</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to energy management, ensuring customized solutions that deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Energy Audit</h3>
                <p className="text-gray-600">
                  Comprehensive assessment of your current energy usage, systems, and infrastructure to identify inefficiencies and opportunities.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 right-0 w-1/2 h-0.5 bg-primary"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Strategy Development</h3>
                <p className="text-gray-600">
                  Creation of a customized energy management strategy based on audit findings and your specific goals and requirements.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 right-0 w-1/2 h-0.5 bg-primary"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Implementation</h3>
                <p className="text-gray-600">
                  Deployment of technical solutions, system upgrades, and operational changes according to the strategy plan.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 right-0 w-1/2 h-0.5 bg-primary"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-primary">
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">4</div>
                <h3 className="text-lg font-bold font-montserrat mb-3 text-gray-800">Monitoring & Optimization</h3>
                <p className="text-gray-600">
                  Continuous monitoring, reporting, and optimization to ensure sustained performance and improvement over time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Industry Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Industry Applications</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Solutions For <span className="text-primary">Every Industry</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our energy management solutions are tailored to meet the specific requirements of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-industry text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Optimize energy-intensive manufacturing processes, reduce production costs, and improve sustainability metrics.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-hospital text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Ensure reliable energy for critical healthcare operations while reducing costs and improving efficiency.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-building text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Commercial Buildings</h3>
              <p className="text-gray-600 mb-4">
                Optimize HVAC, lighting, and other building systems to reduce operational costs and improve tenant comfort.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-school text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Education</h3>
              <p className="text-gray-600 mb-4">
                Manage energy costs in schools and campuses while creating comfortable learning environments and teaching sustainability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-shopping-cart text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Retail</h3>
              <p className="text-gray-600 mb-4">
                Balance energy efficiency with customer comfort in retail environments to reduce operating costs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-primary">
                <i className="fas fa-hotel text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Hospitality</h3>
              <p className="text-gray-600 mb-4">
                Reduce energy costs while maintaining guest comfort and promoting sustainability initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Ready to Optimize Your Energy Management?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an energy assessment and discover how our solutions can transform your energy management approach.
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
              Request An Assessment
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}