import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "@/components/Popup/ContectModal";

export default function UPSPage() {
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
              UPS <span className="text-accent">Maintenance & Services</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Comprehensive UPS services for uninterrupted power supply and maximum system reliability.
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


      <section className="bg-black text-white py-20 relative overflow-hidden">
  {/* Top Pattern */}
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
        UPS <span className="text-accent">Maintenance & Services</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Comprehensive UPS services for uninterrupted power supply and maximum system reliability.
      </p>
      <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
        <a href="#" onClick={openModal}>Get A Quote</a>
      </Button>
    </div>
  </div>

  {/* Bottom Pattern */}
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
                <span className="font-semibold">UPS Services</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Comprehensive UPS <span className="text-primary">Solutions</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Our expert technicians provide complete UPS maintenance and repair services to ensure your critical systems never lose power. We help maximize the life and reliability of your UPS systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Regular inspections and testing to ensure optimal UPS performance
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Battery testing, maintenance and replacement to prevent power failures
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    System upgrades and capacity planning for growing power needs
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-secondary">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <p className="text-gray-700">
                    Emergency repair services to minimize downtime during critical failures
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium">
                <a href="#" onClick={openModal}>Schedule UPS Service</a>
              </Button>
            </div>
            
          <div className="relative">
  <div className="rounded-lg shadow-lg w-full bg-white flex items-center justify-center">
    {/* Inline SVG for UPS System */}
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto object-contain"
    >
      <defs>
        <linearGradient id="upsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
          <stop offset="100%" stopColor="#5b21b6" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="batteryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
          <stop offset="100%" stopColor="#059669" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="#f8fafc" />
      <rect x="50" y="100" width="120" height="100" fill="url(#upsGrad)" rx="8" />
      <rect x="60" y="110" width="100" height="40" fill="#1e293b" rx="4" />
      <rect x="65" y="115" width="90" height="30" fill="#0f172a" rx="2" />
      <text x="110" y="130" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#10b981">100%</text>
      <text x="110" y="142" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#22d3ee">ONLINE</text>

      <circle cx="75" cy="170" r="6" fill="#ef4444" />
      <circle cx="95" cy="170" r="6" fill="#10b981" />
      <circle cx="115" cy="170" r="6" fill="#3b82f6" />
      <circle cx="135" cy="170" r="6" fill="#f59e0b" />

      <rect x="200" y="120" width="40" height="60" fill="url(#batteryGrad)" rx="4" />
      <rect x="250" y="120" width="40" height="60" fill="url(#batteryGrad)" rx="4" />
      <rect x="300" y="120" width="40" height="60" fill="url(#batteryGrad)" rx="4" />

      {[205, 255, 305].map(x =>
        [125, 135, 145, 155, 165].map(y => (
          <rect key={`${x}-${y}`} x={x} y={y} width="30" height="8" fill="#065f46" rx="1" />
        ))
      )}

      <line x1="170" y1="150" x2="200" y2="150" stroke="#6b7280" strokeWidth="3" />
      <line x1="240" y1="150" x2="250" y2="150" stroke="#6b7280" strokeWidth="3" />
      <line x1="290" y1="150" x2="300" y2="150" stroke="#6b7280" strokeWidth="3" />

      <g>
        <circle cx="185" cy="145" r="2" fill="#f59e0b">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="185" cy="155" r="2" fill="#f59e0b">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>

      <rect x="40" y="200" width="310" height="15" fill="#64748b" rx="4" />
      <text x="200" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#374151">UPS System</text>
      <text x="200" y="270" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#6b7280">Uninterruptible Power Supply</text>
    </svg>
  </div>

  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
        <i className="fas fa-battery-full text-primary text-xl"></i>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-1">100% Reliability</h4>
        <p className="text-gray-600 text-sm">Zero downtime solutions</p>
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
              <span className="font-semibold">Our UPS Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Comprehensive <span className="text-primary">UPS Solutions</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end UPS services to ensure your critical systems always have the power they need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-battery-three-quarters text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Battery Management</h3>
              <p className="text-gray-600 mb-4">
                Expert battery maintenance and replacement services to ensure power when you need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Battery testing and monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Battery replacement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Battery disposal and recycling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-tools text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">UPS Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Scheduled maintenance services to extend UPS life and ensure reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">System cleaning and inspection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Firmware updates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 text-primary rounded-lg mb-6">
                <i className="fas fa-bolt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-4">
                Fast response for UPS emergencies to minimize critical system downtime.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">24/7 emergency support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Rapid on-site response</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Temporary UPS solutions</span>
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
              Ready to Ensure Uninterrupted Power for Your Critical Systems?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your UPS needs and learn how our maintenance services can protect your business from costly downtime.
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