import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "@/components/Popup/ContectModal";

export default function StabilizerPage() {
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
        Voltage <span className="text-accent">Stabilizer Services</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Expert maintenance and repair services for all types of voltage stabilizers.
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
                <a href="#" onClick={openModal}>Schedule Service</a>
              </Button>
            </div>
            
            {/* <div className="relative">
              <img 
                src="assets/img/services/2.jpg" 
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
            </div> */}

            <div className="relative">
  {/* SVG Replaced Here */}
  <div className="w-full rounded-lg shadow-lg overflow-hidden">
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="stabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="meterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="#f8fafc" />
      <rect x="100" y="120" width="200" height="80" fill="url(#stabGrad)" rx="8" />
      <rect x="110" y="130" width="180" height="60" fill="#1e293b" rx="4" />
      <circle cx="150" cy="160" r="20" fill="url(#meterGrad)" />
      <circle cx="150" cy="160" r="18" fill="#0f172a" />
      <path d="M135 160 L150 145 L165 160" stroke="#10b981" strokeWidth="2" fill="none" />
      <text x="150" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="#6b7280">VOLTS</text>

      <rect x="200" y="140" width="40" height="15" fill="#ef4444" rx="2" />
      <text x="220" y="150" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="white">INPUT</text>
      <rect x="200" y="160" width="40" height="15" fill="#10b981" rx="2" />
      <text x="220" y="170" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="white">OUTPUT</text>

      <circle cx="260" cy="145" r="4" fill="#10b981">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="160" r="4" fill="#3b82f6" />
      <circle cx="260" cy="175" r="4" fill="#f59e0b" />

      <circle cx="180" cy="160" r="8" fill="#4b5563" />
      <line x1="180" y1="155" x2="180" y2="165" stroke="#e5e7eb" strokeWidth="2" />

      <rect x="80" y="155" width="20" height="10" fill="#64748b" rx="2" />
      <rect x="300" y="155" width="20" height="10" fill="#64748b" rx="2" />
      <line x1="70" y1="160" x2="80" y2="160" stroke="#ef4444" strokeWidth="4" />
      <line x1="320" y1="160" x2="330" y2="160" stroke="#10b981" strokeWidth="4" />

      <g opacity="0.7">
        <path d="M20 140 Q30 130 40 140 T60 145 T80 135" stroke="#ef4444" strokeWidth="2" fill="none" />
        <text x="50" y="125" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#ef4444">Unstable</text>
        <path d="M320 140 Q330 140 340 140 T360 140 T380 140" stroke="#10b981" strokeWidth="2" fill="none" />
        <text x="350" y="125" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#10b981">Stable</text>
      </g>

      <rect x="90" y="200" width="220" height="15" fill="#64748b" rx="4" />
      <text x="200" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#374151">Voltage Stabilizer</text>
      <text x="200" y="270" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#6b7280">Automatic Voltage Regulation</text>
    </svg>
  </div>

  {/* Bottom Overlay Info Box */}
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
                <a href="#" onClick={openModal}>Schedule Consultation</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="tel:08041663297">Call Now: 080-41663297</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}