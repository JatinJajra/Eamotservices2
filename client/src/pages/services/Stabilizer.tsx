import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function StabilizerPage() {
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
              Voltage <span className="text-accent">Stabilizer Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Expert maintenance and repair services for all types of voltage stabilizers.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
              <a href="#contact">Get A Quote</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Stabilizer Services</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Complete Voltage <span className="text-primary">Stabilizer Solutions</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our team provides comprehensive maintenance, repair, and installation services for voltage stabilizers to ensure reliable power quality and protection for your equipment.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Regular testing and calibration for accurate voltage regulation
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Component inspection and replacement to prevent failures
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Performance optimization for improved efficiency and reliability
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Expert installation and setup services for new stabilizers
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#contact">Schedule Service</a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://www.eamot.com/assets/img/services/2.jpg" 
                alt="Voltage Stabilizer" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-bolt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Stable Power</h4>
                    <p className="text-gray-600 text-sm">Equipment protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Stabilizer <span className="text-primary">Services & Solutions</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to ensure your voltage stabilizers perform reliably and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-wrench text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Maintenance Services</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance to ensure optimal stabilizer performance and longevity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Component inspection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Calibration services</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Performance testing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-tools text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Repair Services</h3>
              <p className="text-gray-600 mb-4">
                Expert repairs to fix stabilizer issues and restore proper functionality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Diagnostics and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Component replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Emergency repair services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-cog text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Installation Services</h3>
              <p className="text-gray-600 mb-4">
                Professional installation and setup of new voltage stabilizers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">New stabilizer installation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">System configuration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Testing and commissioning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Need Voltage Stabilizer Services?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule maintenance, repair, or installation services for your voltage stabilizers. Our team of experts is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#contact">Schedule Consultation</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="tel:8970001110">Call Now: 897 000 111 02</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}