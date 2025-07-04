import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactModal from "./Popup/ContectModal";

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
  const [spareDropdownOpen, setSpareDropdownOpen] = useState(false);
  const [dgDropdownOpen, setDgDropdownOpen] = useState(false);
  const [upsDropdownOpen, setUpsDropdownOpen] = useState(false);
  const [servoDropdownOpen, setServoDropdownOpen] = useState(false);
  const [recdDropdownOpen, setRecdDropdownOpen] = useState(false);
  const [dfkDropdownOpen, setDfkDropdownOpen] = useState(false);
  const [emissionDropdownOpen, setEmissionDropdownOpen] = useState(false);
  const [installDropdownOpen, setInstallDropdownOpen] = useState(false);
  const [amcDropdownOpen, setAmcDropdownOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setSolutionsDropdownOpen(false);
      }
      if (
        energyToolsRef.current &&
        !energyToolsRef.current.contains(event.target as Node)
      ) {
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
    <header
      className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Top Info Bar */}
      <div className="bg-primary text-white py-2 md:py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="font-poppins text-sm md:text-base">
              Backed by Experience, Powered by IoT
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-6 text-xs md:text-sm">
            <a
              href="tel:8970001110"
              className="flex items-center mb-1 md:mb-0 hover:text-accent transition duration-300"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              897 000 111 02
            </a>
            <a
              href="mailto:info@emotservices.com"
              className="flex items-center mb-1 md:mb-0 hover:text-accent transition duration-300"
            >
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
          {/* <img src="assets/img/logo/logo-eamot.png" alt="EAMOT Logo" className="h-10 md:h-12 cursor-pointer" /> */}
          <img
            src="https://eamot-iot.s3.ap-south-1.amazonaws.com/media/dgsets/logo-eamot.png"
            alt="EAMOT Logo"
            className="h-10 md:h-12 cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-6 text-sm">
          <Link href="/">
            <span
              className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer ${
                location === "/" ? "text-primary border-b-2 border-primary" : ""
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer ${
                location === "/about"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              About
            </span>
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              className={`font-montserrat hover:text-primary transition duration-300 flex items-center text-sm ${
                location.startsWith("/solutions")
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => {
                setSolutionsDropdownOpen(!solutionsDropdownOpen);
                setServicesDropdownOpen(false);
                setEnergyToolsDropdownOpen(false);
              }}
            >
              Our Solutions
              <i
                className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${
                  solutionsDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {solutionsDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                {/* Diesel Generator Solutions */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-primary text-sm">
                      Diesel Generator Solutions
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <ul className="px-4 py-1 space-y-2">
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/diesel-generator/procurement">
                          <span className="block py-1 cursor-pointer">
                            DG Procurement (CPCB IV+ Compliant)
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/diesel-generator/installation">
                          <span className="block py-1 cursor-pointer">
                            DG Installation & Shifting
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/diesel-generator/amc">
                          <span className="block py-1 cursor-pointer">
                            DG AMC (Annual Maintenance Contract)
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/diesel-generator/overhaul">
                          <span className="block py-1 cursor-pointer">
                            DG Overhaul & Repairs
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/diesel-generator/monitoring">
                          <span className="block py-1 cursor-pointer">
                            IoT-based DG Monitoring
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* UPS System Solutions */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-primary text-sm">
                      UPS System Solutions
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <ul className="px-4 py-1 space-y-2">
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/ups/sourcing">
                          <span className="block py-1 cursor-pointer">
                            UPS System Sourcing
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/ups/battery">
                          <span className="block py-1 cursor-pointer">
                            UPS Battery Sizing & Supply
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/ups/amc">
                          <span className="block py-1 cursor-pointer">
                            UPS AMC
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/ups/monitoring">
                          <span className="block py-1 cursor-pointer">
                            Load Management & Monitoring
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Servo Stabilizer Solutions */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-primary text-sm">
                      Servo Stabilizer Solutions
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <ul className="px-4 py-1 space-y-2">
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/servo/sizing">
                          <span className="block py-1 cursor-pointer">
                            Sizing & Selection Support
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/servo/procurement">
                          <span className="block py-1 cursor-pointer">
                            Procurement & Delivery
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/servo/installation">
                          <span className="block py-1 cursor-pointer">
                            Installation & Commissioning
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/servo/amc">
                          <span className="block py-1 cursor-pointer">
                            Stabilizer AMC
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/servo/monitoring">
                          <span className="block py-1 cursor-pointer">
                            Remote Voltage Monitoring
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* RECD Compliance Solutions */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-primary text-sm">
                      RECD Compliance Solutions
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <ul className="px-4 py-1 space-y-2">
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/recd/advisory">
                          <span className="block py-1 cursor-pointer">
                            CQAM Norms & Compliance Advisory
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/recd/procurement">
                          <span className="block py-1 cursor-pointer">
                            RECD Procurement
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/recd/integration">
                          <span className="block py-1 cursor-pointer">
                            Installation & Integration
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/recd/monitoring">
                          <span className="block py-1 cursor-pointer">
                            Emission Performance Monitoring
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/recd/documentation">
                          <span className="block py-1 cursor-pointer">
                            Regulatory Documentation Support
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Dual Fuel Kit Conversions */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-primary text-sm">
                      Dual Fuel Kit Conversions
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <ul className="px-4 py-1 space-y-2">
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/dfk/assessment">
                          <span className="block py-1 cursor-pointer">
                            DFK Suitability Assessment
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/dfk/procurement">
                          <span className="block py-1 cursor-pointer">
                            DFK Procurement
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/dfk/installation">
                          <span className="block py-1 cursor-pointer">
                            Installation & Calibration
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/dfk/analytics">
                          <span className="block py-1 cursor-pointer">
                            Fuel Savings Analytics
                          </span>
                        </Link>
                      </li>
                      <li className="text-sm text-gray-700 hover:text-primary">
                        <Link href="/solutions/dfk/maintenance">
                          <span className="block py-1 cursor-pointer">
                            Post-conversion Maintenance
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              className={`font-montserrat hover:text-primary transition duration-300 flex items-center text-sm ${
                location.startsWith("/services")
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => {
                setServicesDropdownOpen(!servicesDropdownOpen);
                setSolutionsDropdownOpen(false);
                setEnergyToolsDropdownOpen(false);
              }}
            >
              Our Services
              <i
                className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {servicesDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                <Link href="/services/diesel-generator">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/services/diesel-generator"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Diesel Generator Services
                  </span>
                </Link>
                <Link href="/services/ups">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/services/ups"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    UPS Systems
                  </span>
                </Link>
                <Link href="/services/stabilizer">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/services/stabilizer"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Servo Stabilizers
                  </span>
                </Link>
                <Link href="/services/lithium-ion-inverter">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/services/lithium-ion-inverter"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Battery Energy Storage System
                  </span>
                </Link>
                <Link href="/services/dual-fuel-kit">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/services/dual-fuel-kit"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Dual Fuel Kit Services
                  </span>
                </Link>

                {/* Installation & Integration */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-700 text-sm">
                      Installation & Integration
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <Link href="/services/installation/assessment">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Site Assessment & Planning
                      </span>
                    </Link>
                    <Link href="/services/installation/turnkey">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Turnkey Installation Projects
                      </span>
                    </Link>
                    <Link href="/services/installation/synchronization">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Synchronization & Load Testing
                      </span>
                    </Link>
                    <Link href="/services/installation/documentation">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Documentation & Handover
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Annual Maintenance Contracts */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-700 text-sm">
                      Annual Maintenance
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <Link href="/solutions/diesel-generator/amc">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        DG AMC
                      </span>
                    </Link>
                    <Link href="/solutions/ups/amc">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        UPS AMC
                      </span>
                    </Link>
                    <Link href="/solutions/servo/amc">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Servo Stabilizer AMC
                      </span>
                    </Link>
                    <Link href="/services/amc/preventive">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Preventive Maintenance
                      </span>
                    </Link>
                    <Link href="/services/amc/emergency">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Emergency Breakdown Services
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Spare Parts Sourcing */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-700 text-sm">
                      Spare Parts Sourcing
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <Link href="/services/parts/dg-engine">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        DG Engine & Alternator Parts
                      </span>
                    </Link>
                    <Link href="/services/parts/ups-modules">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        UPS Modules & Batteries
                      </span>
                    </Link>
                    <Link href="/services/parts/servo-control">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Servo Control Components
                      </span>
                    </Link>
                    {/* <Link href="/services/parts/recd-spares">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        RECD Spares
                      </span>
                    </Link> */}
                    <Link href="/services/parts/logistics">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Logistics & Delivery Support
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Emission Compliance Services */}
                <div className="group relative px-4 py-2 hover:bg-gray-50">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-700 text-sm">
                      Emission Compliance
                    </h3>
                    <i className="fas fa-chevron-right ml-2 text-[10px] text-gray-400"></i>
                  </div>

                  <div className="absolute left-full top-0 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 hidden group-hover:block">
                    <Link href="/services/emission/cqam">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        CQAM Registration Support
                      </span>
                    </Link>
                    <Link href="/services/emission/recd-integration">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        On-field RECD Integration
                      </span>
                    </Link>
                    <Link href="/services/emission/testing">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Emission Testing Coordination
                      </span>
                    </Link>
                    <Link href="/services/emission/reporting">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                        Compliance Reporting
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/#blog"
            className="font-montserrat hover:text-primary transition duration-300 text-sm"
          >
            Blog
          </a>

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
              <i
                className={`fas fa-chevron-down ml-1 text-[10px] transition-transform duration-300 ${
                  energyToolsDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {energyToolsDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100">
                <Link href="/energy-calculator">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/energy-calculator"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Energy Calculator
                  </span>
                </Link>
                <Link href="/energy-savings-calculator">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/energy-savings-calculator"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Energy Savings Calculator
                  </span>
                </Link>
                {/* <Link href="/product-demo">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/product-demo"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Product Demos
                  </span>
                </Link> */}
                {/* <Link href="/loading-states">
                  <span
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                      location === "/loading-states"
                        ? "text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    Loading States
                  </span>
                </Link> */}
              </div>
            )}
          </div>

          <Link href="/careers">
            <span
              className={`font-montserrat hover:text-primary transition duration-300 cursor-pointer text-sm ${
                location === "/careers"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              Careers
            </span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            className="hidden md:block bg-accent hover:bg-accent/90 text-white font-poppins font-medium"
            onClick={() => {
              if (location === "/") {
                const footer = document.getElementById("contact");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                openModal(); // your modal open function
              }
            }}
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none p-2 rounded-md"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-md overflow-auto max-h-[calc(100vh-120px)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link href="/">
                <span
                  className={`block py-2 ${
                    location === "/" ? "text-primary font-medium" : ""
                  }`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`block py-2 ${
                    location === "/about" ? "text-primary font-medium" : ""
                  }`}
                >
                  About
                </span>
              </Link>

              {/* Mobile Solutions Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                {/* <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() =>
                    setSolutionsDropdownOpen(!solutionsDropdownOpen)
                  }
                > */}
                <span
                  className={
                    location.startsWith("/solutions")
                      ? "text-primary font-medium"
                      : ""
                  }
                >
                  Our Solutions
                </span>
                {/* <i
                    className={`fas fa-chevron-down text-sm transition-transform duration-300 ${
                      solutionsDropdownOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button> */}

                {
                  <div className="pl-4 space-y-2 mt-2">
                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setDgDropdownOpen(!dgDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          Diesel Generator Solutions
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            dgDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {dgDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/diesel-generator/procurement">
                              <span className="block py-1 text-sm">
                                DG Procurement (CPCB IV+ Compliant)
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/diesel-generator/installation">
                              <span className="block py-1 text-sm">
                                DG Installation & Shifting
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/diesel-generator/amc">
                              <span className="block py-1 text-sm">DG AMC</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/diesel-generator/overhaul">
                              <span className="block py-1 text-sm">
                                DG Overhaul & Repairs
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/diesel-generator/monitoring">
                              <span className="block py-1 text-sm">
                                IoT-based DG Monitoring
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setUpsDropdownOpen(!upsDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          UPS System Solutions
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            upsDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {upsDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/ups/sourcing">
                              <span className="block py-1 text-sm">
                                UPS System Sourcing
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/ups/battery">
                              <span className="block py-1 text-sm">
                                UPS Battery Sizing & Supply
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/ups/amc">
                              <span className="block py-1 text-sm">
                                UPS AMC
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/ups/monitoring">
                              <span className="block py-1 text-sm">
                                Load Management & Monitoring
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setServoDropdownOpen(!servoDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          Servo Stabilizer Solutions
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            servoDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {servoDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/servo/sizing">
                              <span className="block py-1 text-sm">
                                Sizing & Selection Support
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/servo/procurement">
                              <span className="block py-1 text-sm">
                                Procurement & Delivery
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/servo/installation">
                              <span className="block py-1 text-sm">
                                Installation & Commissioning
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/servo/amc">
                              <span className="block py-1 text-sm">
                                Stabilizer AMC
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/servo/monitoring">
                              <span className="block py-1 text-sm">
                                Remote Voltage Monitoring
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setRecdDropdownOpen(!recdDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          RECD Compliance Solutions
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            recdDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {recdDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/recd/advisory">
                              <span className="block py-1 text-sm">
                                CQAM Norms & Compliance Advisory
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/recd/procurement">
                              <span className="block py-1 text-sm">
                                RECD Procurement
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/recd/integration">
                              <span className="block py-1 text-sm">
                                Installation & Integration
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/recd/monitoring">
                              <span className="block py-1 text-sm">
                                Emission Performance Monitoring
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/recd/documentation">
                              <span className="block py-1 text-sm">
                                Regulatory Documentation Support
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setDfkDropdownOpen(!dfkDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          Dual Fuel Kit Conversions
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            dfkDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {dfkDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/dfk/assessment">
                              <span className="block py-1 text-sm">
                                DFK Suitability Assessment
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/dfk/procurement">
                              <span className="block py-1 text-sm">
                                DFK Procurement
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/dfk/installation">
                              <span className="block py-1 text-sm">
                                Installation & Calibration
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/dfk/analytics">
                              <span className="block py-1 text-sm">
                                Fuel Savings Analytics
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/dfk/maintenance">
                              <span className="block py-1 text-sm">
                                Post-conversion Maintenance
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                }
              </div>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                {/* <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                > */}
                <span
                  className={
                    location.startsWith("/services")
                      ? "text-primary font-medium"
                      : ""
                  }
                >
                  Our Services
                </span>
                {/* <i
                    className={`fas fa-chevron-down text-sm transition-transform duration-300 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button> */}

                {
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/services/diesel-generator">
                      <span className="block py-1">
                        Diesel Generator Services
                      </span>
                    </Link>
                    <Link href="/services/ups">
                      <span className="block py-1">UPS Systems</span>
                    </Link>
                    <Link href="/services/stabilizer">
                      <span className="block py-1">Servo Stabilizers</span>
                    </Link>
                    <Link href="/services/lithium-ion-inverter">
                      <span className="block py-1">Lithium-Ion Inverters</span>
                    </Link>
                    <Link href="/services/dual-fuel-kit">
                      <span className="block py-1">Dual Fuel Kit Services</span>
                    </Link>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() =>
                          setInstallDropdownOpen(!installDropdownOpen)
                        }
                      >
                        <h3 className="font-medium text-primary">
                          Installation & Integration
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            installDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {installDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/services/installation/assessment">
                              <span className="block py-1 text-sm">
                                Site Assessment & Planning
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/installation/turnkey">
                              <span className="block py-1 text-sm">
                                Turnkey Installation Projects
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/installation/synchronization">
                              <span className="block py-1 text-sm">
                                Synchronization & Load Testing
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/installation/documentation">
                              <span className="block py-1 text-sm">
                                Documentation & Handover
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setAmcDropdownOpen(!amcDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          Annual Maintenance
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            amcDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {amcDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/solutions/diesel-generator/amc">
                              <span className="block py-1 text-sm">DG AMC</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/ups/amc">
                              <span className="block py-1 text-sm">
                                UPS AMC
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/solutions/servo/amc">
                              <span className="block py-1 text-sm">
                                Servo Stabilizer AMC
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/amc/preventive">
                              <span className="block py-1 text-sm">
                                Preventive Maintenance
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/amc/emergency">
                              <span className="block py-1 text-sm">
                                Emergency Breakdown Services
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setSpareDropdownOpen(!spareDropdownOpen)}
                      >
                        <h3 className="font-medium text-primary">
                          Spare Parts Sourcing
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            spareDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {spareDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/services/parts/dg-engine">
                              <span className="block py-1 text-sm">
                                DG Engine & Alternator Parts
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/parts/ups-modules">
                              <span className="block py-1 text-sm">
                                UPS Modules & Batteries
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/parts/servo-control">
                              <span className="block py-1 text-sm">
                                Servo Control Components
                              </span>
                            </Link>
                          </li>
                          {/* Uncomment below if needed */}
                          {/*
      <li>
        <Link href="/services/parts/recd-spares">
          <span className="block py-1 text-sm">RECD Spares</span>
        </Link>
      </li>
      */}
                          <li>
                            <Link href="/services/parts/logistics">
                              <span className="block py-1 text-sm">
                                Logistics & Delivery Support
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mb-3">
                      <div
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() =>
                          setEmissionDropdownOpen(!emissionDropdownOpen)
                        }
                      >
                        <h3 className="font-medium text-primary">
                          Emission Compliance
                        </h3>
                        <i
                          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                            emissionDropdownOpen ? "rotate-180" : ""
                          }`}
                        ></i>
                      </div>

                      {emissionDropdownOpen && (
                        <ul className="pl-4 mt-1 space-y-1">
                          <li>
                            <Link href="/services/emission/cqam">
                              <span className="block py-1 text-sm">
                                CQAM Registration Support
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/emission/recd-integration">
                              <span className="block py-1 text-sm">
                                On-field RECD Integration
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/emission/testing">
                              <span className="block py-1 text-sm">
                                Emission Testing Coordination
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/emission/reporting">
                              <span className="block py-1 text-sm">
                                Compliance Reporting
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                }
              </div>

              <a href="/#blog">
                <span className="block py-2">Blog</span>
              </a>

              {/* Mobile Energy Tools Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                {/* <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() =>
                    setEnergyToolsDropdownOpen(!energyToolsDropdownOpen)
                  }
                > */}
                  <span
                   className={
                    location.startsWith("/energy")
                      ? "text-primary font-medium"
                      : ""
                  }
                >
                  Energy Tools
                </span>
                  {/* <i
                    className={`fas fa-chevron-down text-sm transition-transform duration-300 ${
                      energyToolsDropdownOpen ? "rotate-180" : ""
                    }`}
                  ></i> */}
                {/* </button> */}

                {(
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/energy-calculator">
                      <span className="block py-1">Energy Calculator</span>
                    </Link>
                    <Link href="/energy-savings-calculator">
                      <span className="block py-1">
                        Energy Savings Calculator
                      </span>
                    </Link>
                    {/* <Link href="/product-demo">
                      <span className="block py-1">Product Demos</span>
                    </Link>
                    <Link href="/loading-states">
                      <span className="block py-1">Loading States</span>
                    </Link> */}
                  </div>
                )}
              </div>

              <Link href="/careers">
                <span
                  className={`block py-2 ${
                    location === "/careers" ? "text-primary font-medium" : ""
                  }`}
                >
                  Careers
                </span>
              </Link>

              <div className="pt-4 space-y-3">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white font-poppins font-medium"
                  onClick={() => {
                    const footer = document.getElementById("footer");
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" });
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
// for deploy?
