import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <a className="flex items-center">
            <img src="https://www.eamot.com/assets/img/logo/logo-eamot.png" alt="EAMOT Logo" className="h-10 md:h-12" />
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/">
            <a className="font-montserrat font-medium text-primary border-b-2 border-primary">Home</a>
          </Link>
          <a href="#about" className="font-montserrat font-medium hover:text-primary transition duration-300">About</a>
          <a href="#services" className="font-montserrat font-medium hover:text-primary transition duration-300">Services</a>
          <a href="#portfolio" className="font-montserrat font-medium hover:text-primary transition duration-300">Portfolio</a>
          <a href="#blog" className="font-montserrat font-medium hover:text-primary transition duration-300">Blog</a>
          <a href="#contact" className="font-montserrat font-medium hover:text-primary transition duration-300">Contact</a>
        </div>
        
        {/* CTA Button */}
        <Button asChild className="hidden md:block bg-accent hover:bg-accent/90 text-white font-poppins font-medium">
          <a href="#contact">Get In Touch</a>
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
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <Link href="/">
                <a className="font-montserrat font-medium text-primary py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</a>
              </Link>
              <a href="#about" className="font-montserrat font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="font-montserrat font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="font-montserrat font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#blog" className="font-montserrat font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#contact" className="font-montserrat font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              
              <div className="pt-2 pb-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-poppins font-medium">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
