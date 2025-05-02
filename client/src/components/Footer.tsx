import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <img src="https://www.eamot.com/assets/img/logo/logo-eamot.png" alt="EAMOT Logo" className="h-12 mb-6 cursor-pointer" />
            </Link>
            
            <p className="text-white mb-6">
              We specialize in providing cutting-edge technology solutions that help businesses and organizations monitor and manage their energy usage more efficiently and effectively.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 text-white flex items-center justify-center transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-montserrat mb-6 text-white">Quick Links</h4>
            
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-white hover:text-accent transition duration-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li><a href="/#about" className="text-white hover:text-accent transition duration-300">About Us</a></li>
              <li><a href="/#services" className="text-white hover:text-accent transition duration-300">Our Services</a></li>
              <li>
                <Link href="/energy-calculator">
                  <span className="text-white hover:text-accent transition duration-300 cursor-pointer">Energy Calculators</span>
                </Link>
              </li>
              <li><a href="/#blog" className="text-white hover:text-accent transition duration-300">Blog & News</a></li>
              <li><a href="/#contact" className="text-white hover:text-accent transition duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-montserrat mb-6 text-white">Our Services</h4>
            
            <ul className="space-y-3">
              <li>
                <Link href="/services/diesel-generator">
                  <span className="text-white hover:text-accent transition duration-300 cursor-pointer">Diesel Generator</span>
                </Link>
              </li>
              <li>
                <Link href="/services/ups">
                  <span className="text-white hover:text-accent transition duration-300 cursor-pointer">UPS</span>
                </Link>
              </li>
              <li>
                <Link href="/services/stabilizer">
                  <span className="text-white hover:text-accent transition duration-300 cursor-pointer">Stabilizer</span>
                </Link>
              </li>
              <li><a href="#" className="text-white hover:text-accent transition duration-300">Lithium ION Inverter</a></li>
              <li><a href="#" className="text-white hover:text-accent transition duration-300">Retro Fit Diesel Generator</a></li>
              <li><a href="#" className="text-white hover:text-accent transition duration-300">Dual Fuel Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-montserrat mb-6 text-white">Contact Info</h4>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span className="text-white">2nd Floor, 58/1, Paramahansa Yogananda Road, Bengaluru, Karnataka 560038, India.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-accent"></i>
                <a href="tel:8970001110" className="text-white hover:text-accent transition duration-300">897 000 111 02</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-accent"></i>
                <a href="mailto:info@emotservices.com" className="text-white hover:text-accent transition duration-300">info@emotservices.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EAMOT. All rights reserved. Designed with ❤️ for efficient energy management.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-accent transition duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-white hover:text-accent transition duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-white hover:text-accent transition duration-300 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
