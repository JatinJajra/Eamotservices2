import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "@/components/Popup/ContectModal";

export default function DualFuelKitPage() {
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
              Dual Fuel <span className="text-accent">Kit</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Convert your diesel generators to cost-effective, eco-friendly dual fuel operation with our advanced conversion kits.
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
        Dual Fuel <span className="text-accent">Kit</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Convert your diesel generators to cost-effective, eco-friendly dual fuel operation with our advanced conversion kits.
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
                <span className="font-semibold">Innovative Solution</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Dual Fuel <span className="text-primary">Conversion Technology</span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                EAMOT's Dual Fuel Kit transforms standard diesel generators into more efficient, environmentally friendly 
                power systems by enabling them to run on a combination of diesel and natural gas or LPG. This innovative 
                technology reduces fuel costs, lowers emissions, and extends engine life.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Reduce fuel costs by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Lower emissions and carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Extend engine life and reduce maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-700">Seamless retrofitting with minimal downtime</span>
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
  className="relative w-full max-w-xl mx-auto"
>
  <div className="w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl bg-white flex items-center justify-center">
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
    >
      <defs>
        <linearGradient id="dualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" stopOpacity="1" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="gasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="1" />
          <stop offset="100%" stopColor="#15803d" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="#f8fafc" />
      <rect x="120" y="140" width="160" height="60" fill="#374151" rx="8" />
      <rect x="140" y="120" width="120" height="40" fill="url(#dualGrad)" rx="6" />
      <rect x="150" y="125" width="100" height="30" fill="#1e293b" rx="3" />
      <rect x="160" y="130" width="30" height="8" fill="#f59e0b" rx="2" />
      <text x="175" y="136" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="white">DIESEL</text>
      <rect x="200" y="130" width="30" height="8" fill="#10b981" rx="2" />
      <text x="215" y="136" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="white">GAS</text>

      <circle cx="165" cy="145" r="3" fill="#f59e0b">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="145" r="3" fill="#64748b" />
      <circle cx="195" cy="145" r="3" fill="#10b981" />
      <circle cx="210" cy="145" r="3" fill="#3b82f6" />
      <circle cx="225" cy="145" r="3" fill="#ef4444" />

      <rect x="60" y="160" width="40" height="60" fill="#374151" rx="4" />
      <rect x="65" y="165" width="30" height="50" fill="#1e293b" rx="2" />
      <rect x="68" y="195" width="24" height="15" fill="#f59e0b" rx="1" />
      <text x="80" y="203" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="white">DIESEL</text>

      <rect x="300" y="160" width="40" height="60" fill="url(#gasGrad)" rx="4" />
      <rect x="305" y="165" width="30" height="50" fill="#166534" rx="2" />
      <rect x="308" y="195" width="24" height="15" fill="#22c55e" rx="1" />
      <text x="320" y="203" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="white">GAS</text>

      <path d="M100 180 Q110 170 120 180" stroke="#f59e0b" strokeWidth="3" fill="none" />
      <path d="M280 180 Q290 170 300 180" stroke="#22c55e" strokeWidth="3" fill="none" />

      <circle cx="200" cy="180" r="15" fill="#64748b" />
      <circle cx="200" cy="180" r="12" fill="#374151" />
      <path d="M200 175 L205 185 L195 185 Z" fill="#f59e0b" />

      <rect x="195" y="195" width="10" height="25" fill="#6b7280" />
      <rect x="190" y="220" width="20" height="8" fill="#374151" rx="2" />

      <g opacity="0.8">
        <circle cx="110" cy="175" r="2" fill="#f59e0b">
          <animate attributeName="cx" values="110;140;170" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="290" cy="175" r="2" fill="#22c55e">
          <animate attributeName="cx" values="290;260;230" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </g>

      <rect x="160" y="80" width="80" height="30" fill="#1e293b" rx="4" />
      <text x="200" y="95" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#10b981">EFFICIENCY</text>
      <text x="200" y="105" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#22d3ee">85%</text>

      <rect x="50" y="230" width="300" height="15" fill="#64748b" rx="4" />
      <text x="200" y="270" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#374151">Dual Fuel Kit</text>
      <text x="200" y="290" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#6b7280">Diesel + Gas Conversion System</text>
    </svg>
  </div>

  <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-secondary rounded-full flex items-center justify-center z-10 shadow-lg">
    <div className="text-white text-center text-xs sm:text-sm">
      <div className="text-lg sm:text-xl font-bold">40%</div>
      <div>Cost Saving</div>
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
              <span className="font-semibold">The Technology</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              How Dual Fuel <span className="text-primary">Technology Works</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dual fuel system uses advanced technology to efficiently combine diesel and gas fuels in the optimal ratio.
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
                  <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Gas Integration
                  </h3>
                  
                  <p className="text-gray-600">
                    The system introduces natural gas or PNG into the engine's air intake, creating a gas-air mixture.
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
                  <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Diesel Reduction
                  </h3>
                  
                  <p className="text-gray-600">
                    The ECU automatically reduces diesel consumption as gas is introduced, maintaining optimal performance.
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
                  <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Combustion
                  </h3>
                  
                  <p className="text-gray-600">
                    Diesel ignites through compression, which then ignites the gas-air mixture, creating efficient combustion.
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
                  <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                    Real-time Monitoring
                  </h3>
                  
                  <p className="text-gray-600">
                    Advanced sensors continuously monitor and adjust the fuel mix for optimal performance and efficiency.
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
  <div className="rounded-xl shadow-xl w-full overflow-hidden">
    <img 
      src="/assets/img/05.png" 
      alt="Dual Fuel Kit Installation" 
      className="w-full object-contain"
    />
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
                <span className="font-semibold">Key Benefits</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-gray-800">
                Advantages of <span className="text-primary">Dual Fuel Systems</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-coins text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Cost Savings
                    </h3>
                    <p className="text-gray-600">
                      Reduce fuel costs by up to 40% by substituting expensive diesel with more affordable natural gas or LPG.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-leaf text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Environmental Benefits
                    </h3>
                    <p className="text-gray-600">
                      Reduce emissions by 30-60%, including significant reductions in NOx, particulate matter, and CO2.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-cogs text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Extended Engine Life
                    </h3>
                    <p className="text-gray-600">
                      Cleaner combustion reduces carbon deposits and engine wear, extending engine lifespan and reducing maintenance costs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-power-off text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                      Operational Flexibility
                    </h3>
                    <p className="text-gray-600">
                      Maintain the ability to run on 100% diesel if necessary, ensuring fuel flexibility and operational reliability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Kit Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">System Components</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Advanced <span className="text-primary">Kit Features</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dual fuel kits incorporate high-quality components and advanced technology for optimal performance and reliability.
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
                <i className="fas fa-microchip text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Electronic Control Unit</h3>
              <p className="text-gray-600 mb-4">
                Advanced ECU that monitors and controls the optimal ratio of diesel to gas based on engine load and performance parameters.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Real-time adjustment capabilities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Multiple sensor inputs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Customizable performance parameters</span>
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
                <i className="fas fa-gas-pump text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Gas Mixing System</h3>
              <p className="text-gray-600 mb-4">
                Precision-engineered gas delivery system that ensures optimal mixing of gas with intake air for efficient combustion.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>High-quality mixing components</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Precise gas flow control</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Adaptable to various engine sizes</span>
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
                <i className="fas fa-tablet-alt text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">Monitoring System</h3>
              <p className="text-gray-600 mb-4">
                User-friendly interface that provides real-time data on fuel consumption, savings, and system performance.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Remote monitoring capabilities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Detailed performance analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary text-sm mt-1 mr-2"></i>
                  <span>Automated reporting features</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Installation Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
              <span className="font-semibold">Implementation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Seamless <span className="text-primary">Installation Process</span>
            </h2>
            
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our professional installation process ensures minimal disruption to your operations with quick turnaround times.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Thorough evaluation of your generator specifications and operational requirements.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">Design</h3>
              <p className="text-gray-600 text-sm">
                Customized kit design based on your specific generator model and requirements.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation by our team of certified technicians with minimal downtime.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">Calibration</h3>
              <p className="text-gray-600 text-sm">
                Fine-tuning and optimization of the system for your specific operational conditions.
              </p>
              <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800">Training</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive training for your team on system operation and basic maintenance.
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
              Ready to Reduce Fuel Costs and Emissions?
            </h2>
            
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our dual fuel kits can transform your diesel generators into more efficient, economical, and environmentally friendly power systems.
            </p>
            
            <Button 
              onClick={openModal}
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