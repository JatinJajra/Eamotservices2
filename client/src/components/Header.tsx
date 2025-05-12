import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [energyToolsDropdownOpen, setEnergyToolsDropdownOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const energyToolsRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (energyToolsRef.current && !energyToolsRef.current.contains(event.target as Node)) {
        setEnergyToolsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing location
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 md:py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="font-poppins text-sm md:text-base">Backed by Experience, Powered by IoT</span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-6 text-xs md:text-sm">
            <a href="tel:8970001110" className="flex items-center mb-1 md:mb-0 hover:text-accent transition duration-300">
              <i className="fas fa-phone-alt mr-2"></i>
              897 000 111 02
            </a>
            <a href="mailto:info@emotservices.com" className="flex items-center mb-1 md:mb-0 hover:text-accent transition duration-300">
              <i className="fas fa-envelope mr-2"></i>
              info@emotservices.com
            </a>
            <div className="flex items-center text-xs md:text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span className="hidden md:inline">Bengaluru, Karnataka</span>
              <span className="inline md:hidden">Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <img src="https://www.eamot.com/assets/img/logo/logo-eamot.png" alt="EAMOT Logo" className="h-10 md:h-12 cursor-pointer" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-6 text-sm">
          <Link href="/">
            <span className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer ${location === '/' ? 'text-primary border-b-2 border-primary' : ''}`}>Home</span>
          </Link>
          <Link href="/about">
            <span className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer ${location === '/about' ? 'text-primary border-b-2 border-primary' : ''}`}>About</span>
          </Link>
          
          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button 
              className={`font-montserrat hover:text-primary transition duration-300 flex items-center text-sm ${location.startsWith('/solutions') ? 'text-primary border-b-2 border-primary' : ''}`}
              onClick={() => {
                setSolutionsDropdownOpen(!solutionsDropdownOpen);
                setServicesDropdownOpen(false);
                setEnergyToolsDropdownOpen(false);
              }}
            >
              Our Solutions
              <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {solutionsDropdownOpen && (
              <div className="absolute mt-2 w-80 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                {/* Diesel Generator Solutions */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Diesel Generator Solutions</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">DG Procurement (CPCB IV+ Compliant)</li>
                    <li className="hover:text-primary">DG Installation & Shifting</li>
                    <li className="hover:text-primary">DG AMC (Annual Maintenance Contract)</li>
                    <li className="hover:text-primary">DG Overhaul & Repairs</li>
                    <li className="hover:text-primary">IoT-based DG Monitoring</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* UPS System Solutions */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">UPS System Solutions</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">UPS System Sourcing</li>
                    <li className="hover:text-primary">UPS Battery Sizing & Supply</li>
                    <li className="hover:text-primary">UPS AMC</li>
                    <li className="hover:text-primary">Load Management & Monitoring</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* Servo Stabilizer Solutions */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Servo Stabilizer Solutions</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">Sizing & Selection Support</li>
                    <li className="hover:text-primary">Procurement & Delivery</li>
                    <li className="hover:text-primary">Installation & Commissioning</li>
                    <li className="hover:text-primary">Stabilizer AMC</li>
                    <li className="hover:text-primary">Remote Voltage Monitoring</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* RECD Compliance Solutions */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">RECD Compliance Solutions</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">CQAM Norms & Compliance Advisory</li>
                    <li className="hover:text-primary">RECD Procurement</li>
                    <li className="hover:text-primary">Installation & Integration</li>
                    <li className="hover:text-primary">Emission Performance Monitoring</li>
                    <li className="hover:text-primary">Regulatory Documentation Support</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* Dual Fuel Kit Conversions */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Dual Fuel Kit Conversions</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">DFK Suitability Assessment</li>
                    <li className="hover:text-primary">DFK Procurement</li>
                    <li className="hover:text-primary">Installation & Calibration</li>
                    <li className="hover:text-primary">Fuel Savings Analytics</li>
                    <li className="hover:text-primary">Post-conversion Maintenance</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button 
              className={`font-montserrat hover:text-primary transition duration-300 flex items-center text-sm ${location.startsWith('/services') ? 'text-primary border-b-2 border-primary' : ''}`}
              onClick={() => {
                setServicesDropdownOpen(!servicesDropdownOpen);
                setSolutionsDropdownOpen(false);
                setEnergyToolsDropdownOpen(false);
              }}
            >
              Services
              <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute mt-2 w-80 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                {/* Installation & Integration */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Installation & Integration</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">On-site Assessment & Feasibility</li>
                    <li className="hover:text-primary">Turnkey Installation Projects</li>
                    <li className="hover:text-primary">Synchronization & Load Testing</li>
                    <li className="hover:text-primary">Documentation & Handover</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* Annual Maintenance Contracts (AMC) */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Annual Maintenance Contracts (AMC)</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">Diesel Generator AMC</li>
                    <li className="hover:text-primary">UPS AMC</li>
                    <li className="hover:text-primary">Servo Stabilizer AMC</li>
                    <li className="hover:text-primary">Preventive Maintenance Schedules</li>
                    <li className="hover:text-primary">Emergency Breakdown Services</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* Spare Parts Sourcing */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Spare Parts Sourcing</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">DG Engine & Alternator Parts</li>
                    <li className="hover:text-primary">UPS Modules & Batteries</li>
                    <li className="hover:text-primary">Servo Control Components</li>
                    <li className="hover:text-primary">RECD Spares</li>
                    <li className="hover:text-primary">Logistics & Delivery Support</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                {/* Emission Compliance Services */}
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-primary text-sm mb-1">Emission Compliance Services</h3>
                  <ul className="pl-4 text-xs space-y-1 text-gray-700">
                    <li className="hover:text-primary">CQAM Registration & Guidance</li>
                    <li className="hover:text-primary">On-field RECD Integration</li>
                    <li className="hover:text-primary">Emission Testing Coordination</li>
                    <li className="hover:text-primary">Compliance Reporting</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {/* Smart Monitoring */}
          <div className="relative" ref={useRef<HTMLDivElement>(null)}>
            <button 
              className="font-montserrat hover:text-primary transition duration-300 flex items-center text-sm"
              onClick={(e) => {
                e.currentTarget.nextElementSibling?.classList.toggle('hidden');
                e.currentTarget.querySelector('i')?.classList.toggle('rotate-180');
              }}
            >
              Smart Monitoring
              <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300`}></i>
            </button>
            
            <div className="absolute mt-2 w-80 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden">
              <div className="px-4 py-2">
                <h3 className="font-semibold text-primary text-sm mb-1">Digital Intelligence for Real-time Visibility</h3>
                <ul className="pl-4 text-xs space-y-1 text-gray-700">
                  <li className="hover:text-primary">DG Monitoring Dashboard (Fuel, Load, Health)</li>
                  <li className="hover:text-primary">UPS Monitoring (Battery Life, Load, Alarms)</li>
                  <li className="hover:text-primary">Servo Monitoring (Voltage Stability, Faults)</li>
                  <li className="hover:text-primary">RECD Emission Monitoring</li>
                  <li className="hover:text-primary">Alerts, Reports & Analytics</li>
                  <li className="hover:text-primary">Centralized Asset Monitoring Platform</li>
                </ul>
              </div>
            </div>
          </div>
          
          <a href="/#blog" className="font-montserrat hover:text-primary transition duration-300 text-sm">Blog</a>
          
          <Link href="/careers">
            <span className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer text-sm ${location === '/careers' ? 'text-primary border-b-2 border-primary' : ''}`}>Careers</span>
          </Link>

          {/* Energy Tools Dropdown */}
          <div className="relative" ref={energyToolsRef}>
            <button 
              className="font-montserrat hover:text-primary transition duration-300 flex items-center text-sm"
              onClick={() => {
                setEnergyToolsDropdownOpen(!energyToolsDropdownOpen);
                setServicesDropdownOpen(false);
                setSolutionsDropdownOpen(false);
              }}
            >
              Energy Tools
              <i className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${energyToolsDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {energyToolsDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                <Link href="/energy-calculator">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/energy-calculator' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Energy Calculator
                  </span>
                </Link>
                <Link href="/energy-savings-calculator">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/energy-savings-calculator' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Energy Savings Calculator
                  </span>
                </Link>
                <Link href="/product-demo">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/product-demo' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Product Demos
                  </span>
                </Link>
                <Link href="/loading-states">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/loading-states' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Loading States
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            className="hidden md:block bg-accent hover:bg-accent/90 text-white font-poppins font-medium"
            onClick={() => {
              const footer = document.getElementById('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white absolute w-full z-50 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col">
              <Link href="/">
                <span className="font-montserrat font-medium py-2 border-b border-gray-100 block cursor-pointer">Home</span>
              </Link>
              <Link href="/about">
                <span className="font-montserrat font-medium py-2 border-b border-gray-100 block cursor-pointer">About</span>
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="border-b border-gray-100">
                <button 
                  className="font-montserrat font-medium py-2 w-full text-left flex items-center justify-between"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {servicesDropdownOpen && (
                  <div className="pl-4 py-2 space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Installation & Integration</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>On-site Assessment & Feasibility</li>
                        <li>Turnkey Installation Projects</li>
                        <li>Synchronization & Load Testing</li>
                        <li>Documentation & Handover</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Annual Maintenance Contracts (AMC)</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>Diesel Generator AMC</li>
                        <li>UPS AMC</li>
                        <li>Servo Stabilizer AMC</li>
                        <li>Preventive Maintenance Schedules</li>
                        <li>Emergency Breakdown Services</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Spare Parts Sourcing</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>DG Engine & Alternator Parts</li>
                        <li>UPS Modules & Batteries</li>
                        <li>Servo Control Components</li>
                        <li>RECD Spares</li>
                        <li>Logistics & Delivery Support</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Emission Compliance Services</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>CQAM Registration & Guidance</li>
                        <li>On-field RECD Integration</li>
                        <li>Emission Testing Coordination</li>
                        <li>Compliance Reporting</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile Solutions Dropdown */}
              <div className="border-b border-gray-100">
                <button 
                  className="font-montserrat font-medium py-2 w-full text-left flex items-center justify-between"
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                >
                  <span>Our Solutions</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {solutionsDropdownOpen && (
                  <div className="pl-4 py-2 space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Diesel Generator Solutions</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>DG Procurement (CPCB IV+ Compliant)</li>
                        <li>DG Installation & Shifting</li>
                        <li>DG AMC (Annual Maintenance Contract)</li>
                        <li>DG Overhaul & Repairs</li>
                        <li>IoT-based DG Monitoring</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">UPS System Solutions</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>UPS System Sourcing</li>
                        <li>UPS Battery Sizing & Supply</li>
                        <li>UPS AMC</li>
                        <li>Load Management & Monitoring</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Servo Stabilizer Solutions</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>Sizing & Selection Support</li>
                        <li>Procurement & Delivery</li>
                        <li>Installation & Commissioning</li>
                        <li>Stabilizer AMC</li>
                        <li>Remote Voltage Monitoring</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">RECD Compliance Solutions</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>CQAM Norms & Compliance Advisory</li>
                        <li>RECD Procurement</li>
                        <li>Installation & Integration</li>
                        <li>Emission Performance Monitoring</li>
                        <li>Regulatory Documentation Support</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1">Dual Fuel Kit Conversions</h3>
                      <ul className="pl-2 space-y-1 text-xs text-gray-700">
                        <li>DFK Suitability Assessment</li>
                        <li>DFK Procurement</li>
                        <li>Installation & Calibration</li>
                        <li>Fuel Savings Analytics</li>
                        <li>Post-conversion Maintenance</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Smart Monitoring Mobile Section */}
              <div className="border-b border-gray-100">
                <button 
                  className="font-montserrat font-medium py-2 w-full text-left flex items-center justify-between"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    const icon = e.currentTarget.querySelector('i');
                    if (content && icon) {
                      content.classList.toggle('hidden');
                      icon.classList.toggle('rotate-180');
                    }
                  }}
                >
                  <span>Smart Monitoring</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300`}></i>
                </button>
                
                <div className="pl-4 py-2 space-y-2 hidden">
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">Digital Intelligence for Real-time Visibility</h3>
                    <ul className="pl-2 space-y-1 text-xs text-gray-700">
                      <li>DG Monitoring Dashboard (Fuel, Load, Health)</li>
                      <li>UPS Monitoring (Battery Life, Load, Alarms)</li>
                      <li>Servo Monitoring (Voltage Stability, Faults)</li>
                      <li>RECD Emission Monitoring</li>
                      <li>Alerts, Reports & Analytics</li>
                      <li>Centralized Asset Monitoring Platform</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <a href="/#blog" className="font-montserrat font-medium py-2 border-b border-gray-100 block">Blog</a>
              
              <Link href="/careers">
                <span className="font-montserrat font-medium py-2 border-b border-gray-100 block cursor-pointer">Careers</span>
              </Link>
              
              {/* Mobile Energy Tools Dropdown */}
              <div className="border-b border-gray-100">
                <button 
                  className="font-montserrat font-medium py-2 w-full text-left flex items-center justify-between"
                  onClick={() => {
                    setEnergyToolsDropdownOpen(!energyToolsDropdownOpen);
                    setServicesDropdownOpen(false);
                    setSolutionsDropdownOpen(false);
                  }}
                >
                  <span>Energy Tools</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${energyToolsDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {energyToolsDropdownOpen && (
                  <div className="pl-4 py-2 space-y-2">
                    <Link href="/energy-calculator">
                      <span className="block py-1 text-gray-700 cursor-pointer">Energy Calculator</span>
                    </Link>
                    <Link href="/energy-savings-calculator">
                      <span className="block py-1 text-gray-700 cursor-pointer">Energy Savings Calculator</span>
                    </Link>
                    <Link href="/product-demo">
                      <span className="block py-1 text-gray-700 cursor-pointer">Product Demos</span>
                    </Link>
                    <Link href="/loading-states">
                      <span className="block py-1 text-gray-700 cursor-pointer">Loading States</span>
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="pt-4 pb-2">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-poppins font-medium"
                  onClick={() => {
                    const footer = document.getElementById('footer');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
