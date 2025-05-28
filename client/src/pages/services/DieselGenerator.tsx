import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DieselGeneratorPage() {
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
              Diesel Generator <span className="text-accent">Maintenance & Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Professional diesel generator maintenance services for optimal performance, reliability, and longevity.
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
                <span className="font-semibold">Diesel Generator Services</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Comprehensive Diesel Generator <span className="text-primary">Maintenance</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our team of skilled technicians provides comprehensive maintenance services for all types of diesel generators. We ensure your generator is operating at peak performance levels, minimizing downtime and maximizing efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Routine inspections to identify potential issues before they cause problems
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Regular oil changes and filter replacements to maintain optimal performance
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive performance testing to ensure reliability during power outages
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Expert repairs and part replacements when issues are identified
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#contact">Schedule Maintenance</a>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://www.eamot.com/assets/img/services/1.jpg" 
                alt="Diesel Generator Maintenance" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-tools text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Expert Service</h4>
                    <p className="text-gray-600 text-sm">By certified technicians</p>
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
              <span className="font-semibold">Our Comprehensive Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              What We <span className="text-primary">Offer</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a wide range of services to ensure your diesel generators operate efficiently and reliably whenever you need them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-calendar-check text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Preventive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular scheduled maintenance to prevent breakdowns and ensure optimal performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Oil and filter changes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Fuel system inspection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Battery checks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-tools text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Repair Services</h3>
              <p className="text-gray-600 mb-4">
                Expert diagnostics and repairs to fix issues quickly and minimize downtime.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Troubleshooting and diagnostics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Component replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Emergency repairs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-tachometer-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Performance Testing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive testing to ensure your generator will perform when needed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Load bank testing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Reliability assessment</span>
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
              Ready to Ensure Your Generator's Reliability?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a consultation with our diesel generator experts. We'll help you develop a maintenance plan that fits your needs and budget.
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