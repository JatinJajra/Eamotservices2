import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "@/components/Popup/ContectModal";

export default function LithiumIonInverterPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Lithium ION <span className="text-accent">Inverter</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Advanced lithium-ion battery inverter systems for reliable, efficient, and sustainable power backup solutions.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section> */}
                      <ContactModal isOpen={isModalOpen} onClose={closeModal} />


      <section className="bg-[#154679] text-white py-20 relative overflow-hidden">
  {/* Top Decorative Pattern */}
  <div className="absolute top-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img
      src="assets/img/hero/nav-parrten-top.png"
      alt=""
      className="w-full"
    />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
        Lithium ION <span className="text-accent">Inverter</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Advanced lithium-ion battery inverter systems for reliable, efficient, and sustainable power backup solutions.
      </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
        <a href="#" onClick={openModal}>Get A Quote</a>
      </Button>
    </div>
  </div>

  {/* Bottom Decorative Pattern */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 pointer-events-none">
    <img
      src="assets/img/hero/nav-parrten-botoom.png"
      alt=""
      className="w-full"
    />
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
                <span className="font-semibold">Next-Generation Power Backup</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Advanced Lithium-ION <span className="text-primary">Inverter Technology</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's lithium-ion inverter systems represent the cutting edge of power backup technology, offering superior 
                performance, reliability, and efficiency compared to traditional lead-acid battery systems. Our solutions 
                provide clean, stable power with longer lifecycles and reduced maintenance requirements.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">3-5x longer lifespan than traditional lead-acid batteries</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Significantly lighter and more compact design</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Advanced battery management system for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Faster charging and higher discharge efficiency</span>
                </li>
              </ul>
              
              <Button 
                onClick={openModal}
                className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium"
              >
                Discuss Your Requirements
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
                  src="assets/img/gallery/04.jpg" 
                  alt="Lithium Ion Inverter System" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center z-10 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">Li-ion</div>
                  <div className="text-xs">Technology</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Key Advantages</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Why Choose Lithium-ION <span className="text-primary">Inverter Systems</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our lithium-ion inverter systems offer numerous advantages over traditional battery backup solutions.
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
                    <i className="fas fa-history text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Extended Lifespan
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Lithium-ion batteries typically last 3,000-5,000 cycles compared to 300-500 cycles for lead-acid batteries, providing a much longer service life.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Up to 10 years of service life</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Maintains capacity over lifetime</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Lower total cost of ownership</span>
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
                    <i className="fas fa-bolt text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Superior Performance
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Lithium-ion inverters deliver better performance across all key metrics, including charge/discharge efficiency and power output.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">95%+ charge efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Faster charging capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Higher depth of discharge</span>
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
                    <i className="fas fa-leaf text-2xl"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Environmental Benefits
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Our lithium-ion systems are designed with sustainability in mind, offering significant environmental advantages.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">No toxic lead or acid</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Recyclable components</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Lower carbon footprint</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-microchip text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">
                    Smart BMS
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced Battery Management System that monitors cell health, temperature, and charge status in real-time.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-mobile-alt text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">
                    Remote Monitoring
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor system performance, battery status, and power usage via mobile app or web interface.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-shield-alt text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">
                    Safety Features
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Multiple protection systems for overcharging, over-discharging, overheating, and short circuits.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i className="fas fa-expand-arrows-alt text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">
                    Scalable Design
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Modular architecture allows for easy capacity expansion to meet growing power requirements.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Advanced Features</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Smart Technology For <span className="text-primary">Reliable Power</span>
              </h2>
              
              <p className="text-gray-600 mb-6">
                Our lithium-ion inverter systems incorporate cutting-edge technology to deliver reliable, efficient power with intelligent features and comprehensive protection.
              </p>
              
              <p className="text-gray-600 mb-6">
                Each system is designed with user-friendly interfaces, remote monitoring capabilities, and advanced diagnostic tools to ensure optimal performance and easy maintenance.
              </p>
              
              <div className="flex items-center space-x-4 mt-8">
                <div className="text-gray-600 font-medium text-center">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm">Reliability</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-gray-600 font-medium text-center">
                  <div className="text-2xl font-bold text-primary mb-1">95%+</div>
                  <div className="text-sm">Efficiency</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-gray-600 font-medium text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10 yr</div>
                  <div className="text-sm">Lifespan</div>
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
              Ideal <span className="text-primary">Use Cases</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our lithium-ion inverter systems are designed to meet the power backup needs of various applications and industries.
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
                <i className="fas fa-building text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Commercial Buildings</h3>
              <p className="text-gray-600 mb-4">
                Reliable power backup for offices, retail spaces, and commercial buildings to ensure business continuity during outages.
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
                <i className="fas fa-server text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Data Centers</h3>
              <p className="text-gray-600 mb-4">
                High-performance backup power solutions for critical IT infrastructure, ensuring data integrity and system availability.
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
                <i className="fas fa-hospital text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Healthcare Facilities</h3>
              <p className="text-gray-600 mb-4">
                Critical power backup for hospitals, clinics, and medical facilities where uninterrupted power is essential for patient care.
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
                <i className="fas fa-industry text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Reliable power solutions for manufacturing facilities to prevent costly production disruptions during power outages.
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
                <i className="fas fa-home text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Residential</h3>
              <p className="text-gray-600 mb-4">
                Home backup power systems that provide reliable electricity during outages, with compact design and quiet operation.
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
                <i className="fas fa-solar-panel text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Renewable Integration</h3>
              <p className="text-gray-600 mb-4">
                Ideal for integration with solar PV systems, allowing for energy storage and usage optimization in renewable energy setups.
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
              Ready to Upgrade Your Power Backup Solution?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our lithium-ion inverter systems can provide reliable, efficient power backup for your specific needs.
            </p>
            
            <Button 
              onClick={openModal}
              className="bg-white text-primary hover:bg-gray-100 font-poppins font-medium"
              size="lg"
            >
              Get A Customized Solution
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}