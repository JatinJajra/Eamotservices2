import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RetrofittingServicesPage() {
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
              Retrofitting <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Modernize your existing equipment and systems to improve efficiency, reduce costs, and extend operational lifespan.
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
                <span className="font-semibold">Modernization Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Equipment <span className="text-primary">Retrofitting Services</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's retrofitting services allow you to upgrade and modernize your existing energy equipment and systems 
                with the latest technology, improving efficiency and performance without the cost of complete replacement.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Energy efficiency upgrades for existing equipment</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Smart controls and monitoring system integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Extended equipment lifespan through modernization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Enhanced performance and reliability</span>
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
                Discuss Your Retrofitting Needs
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
                  src="assets/img/service/service-04.jpg" 
                  alt="Equipment Retrofitting" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">25%</div>
                  <div className="text-xs">Efficiency Gain</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Retrofitting Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Comprehensive <span className="text-primary">Retrofitting Solutions</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of retrofitting services tailored to different types of equipment and systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-bolt text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Generator Retrofitting
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Upgrade your diesel generators with modern control systems, fuel efficiency improvements, and emission reduction technologies.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Digital control panel upgrades</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Remote monitoring capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Fuel efficiency enhancements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Emissions reduction systems</span>
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
                    <i className="fas fa-plug text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    UPS and Battery System Upgrades
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Modernize your UPS systems with improved battery technologies, monitoring capabilities, and energy efficiency features.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Battery technology upgrades</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Advanced monitoring integration</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Efficiency improvement</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Extended system lifespan</span>
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
                    <i className="fas fa-sliders-h text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Control System Modernization
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Replace outdated control systems with modern digital controls, automation, and remote management capabilities.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">PLC and controller upgrades</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">SCADA system integration</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Remote monitoring implementation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Automated reporting capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-wifi text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    IoT and Connectivity Integration
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Add IoT sensors, connectivity, and data analytics capabilities to your existing equipment for real-time monitoring and insights.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Sensor installation and connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Cloud platform integration</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Mobile app connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Analytics and reporting tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Key Benefits</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Why Choose <span className="text-primary">Retrofitting</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Retrofitting existing equipment offers numerous advantages over complete replacement, from cost savings to reduced downtime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Cost-Effective</h3>
              <p className="text-gray-600">
                Retrofitting typically costs 30-70% less than complete equipment replacement while providing many of the same benefits and improvements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Improved Efficiency</h3>
              <p className="text-gray-600">
                Modern components and controls can increase energy efficiency by 15-40%, significantly reducing operational costs over time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-history"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Extended Lifespan</h3>
              <p className="text-gray-600">
                Retrofitting can extend equipment lifespan by 5-10 years, maximizing your return on investment and delaying replacement costs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Minimal Downtime</h3>
              <p className="text-gray-600">
                Retrofitting projects typically require less downtime than full replacements, minimizing disruption to your operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                Extending equipment life through retrofitting reduces waste and environmental impact compared to full replacement.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-cog"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Modern Capabilities</h3>
              <p className="text-gray-600">
                Add advanced features like remote monitoring, predictive maintenance, and data analytics to older equipment.
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
              Ready to Modernize Your Equipment?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our retrofitting services can improve your equipment performance, reduce costs, and extend operational lifespan.
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
              Request A Consultation
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}