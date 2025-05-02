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
  const servicesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

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
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/">
            <span className={`font-montserrat font-medium hover:text-primary transition duration-300 cursor-pointer ${location === '/' ? 'text-primary border-b-2 border-primary' : ''}`}>Home</span>
          </Link>
          <a href="/#about" className="font-montserrat font-medium hover:text-primary transition duration-300">About</a>
          
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button 
              className="font-montserrat font-medium hover:text-primary transition duration-300 flex items-center"
              onClick={() => {
                setServicesDropdownOpen(!servicesDropdownOpen);
                setSolutionsDropdownOpen(false);
              }}
            >
              Services
              <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                <Link href="/services/diesel-generator">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/services/diesel-generator' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Diesel Generator
                  </span>
                </Link>
                <Link href="/services/ups">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/services/ups' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    UPS
                  </span>
                </Link>
                <Link href="/services/stabilizer">
                  <span className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${location === '/services/stabilizer' ? 'text-primary font-medium' : 'text-gray-700'}`}>
                    Stabilizer
                  </span>
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <a href="/#services" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                  All Services
                </a>
              </div>
            )}
          </div>
          
          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button 
              className="font-montserrat font-medium hover:text-primary transition duration-300 flex items-center"
              onClick={() => {
                setSolutionsDropdownOpen(!solutionsDropdownOpen);
                setServicesDropdownOpen(false);
              }}
            >
              Our Solutions
              <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {solutionsDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                <a href="/solutions/iot" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                  IoT Solutions
                </a>
                <a href="/solutions/energy-management" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                  Energy Management
                </a>
                <a href="/solutions/predictive-maintenance" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                  Predictive Maintenance
                </a>
                <a href="/solutions/retrofitting" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                  Retrofitting Services
                </a>
              </div>
            )}
          </div>
          
          <a href="/#blog" className="font-montserrat font-medium hover:text-primary transition duration-300">Blog</a>
          
          <Link href="/careers">
            <span className={`font-montserrat font-medium hover:text-primary transition duration-300 cursor-pointer ${location === '/careers' ? 'text-primary border-b-2 border-primary' : ''}`}>Careers</span>
          </Link>

          {/* Energy Tools Dropdown */}
          <div className="relative">
            <button 
              className="font-montserrat font-medium hover:text-primary transition duration-300 flex items-center"
              onClick={() => {
                // You could add a state for this dropdown if needed
              }}
            >
              Energy Tools
              <i className="fas fa-chevron-down ml-2 text-xs transition-transform duration-300"></i>
            </button>
            
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
            </div>
          </div>
          
          <a href="/#contact" className="font-montserrat font-medium hover:text-primary transition duration-300">Contact</a>
        </div>
        
        {/* CTA Button */}
        <Button asChild className="hidden md:block bg-accent hover:bg-accent/90 text-white font-poppins font-medium">
          <a href="/#contact">Get In Touch</a>
        </Button>
        
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
              <a href="/#about" className="font-montserrat font-medium py-2 border-b border-gray-100 block">About</a>
              
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
                  <div className="pl-4 py-2 space-y-2">
                    <Link href="/services/diesel-generator">
                      <span className="block py-1 text-gray-700 cursor-pointer">Diesel Generator</span>
                    </Link>
                    <Link href="/services/ups">
                      <span className="block py-1 text-gray-700 cursor-pointer">UPS</span>
                    </Link>
                    <Link href="/services/stabilizer">
                      <span className="block py-1 text-gray-700 cursor-pointer">Stabilizer</span>
                    </Link>
                    <a href="/#services" className="block py-1 text-gray-700">All Services</a>
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
                  <div className="pl-4 py-2 space-y-2">
                    <a href="/solutions/iot" className="block py-1 text-gray-700">IoT Solutions</a>
                    <a href="/solutions/energy-management" className="block py-1 text-gray-700">Energy Management</a>
                    <a href="/solutions/predictive-maintenance" className="block py-1 text-gray-700">Predictive Maintenance</a>
                    <a href="/solutions/retrofitting" className="block py-1 text-gray-700">Retrofitting Services</a>
                  </div>
                )}
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
                    // Toggle a new state for energy tools dropdown
                    // For simplicity, we'll reuse the servicesDropdownOpen state
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setSolutionsDropdownOpen(false);
                  }}
                >
                  <span>Energy Tools</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                {servicesDropdownOpen && (
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
                  </div>
                )}
              </div>
              
              <a href="/#contact" className="font-montserrat font-medium py-2 border-b border-gray-100 block">Contact</a>
              
              <div className="pt-4 pb-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-poppins font-medium">
                  <a href="/#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
