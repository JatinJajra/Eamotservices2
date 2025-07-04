import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ShoppingCart, CheckSquare, FileCheck, Package, Award, Scale } from 'lucide-react';
import { motion, animate, useMotionValue } from "framer-motion";
import { TrendingUp, Gauge } from "lucide-react";
import { useEffect, useState } from "react";



const DFKProcurementPage: React.FC = () => {
    const [displayValue, setDisplayValue] = useState(0);
      const count = useMotionValue(0);



function AnimatedCounter({ value, color = "text-primary" }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return controls.stop;
  }, [value]);

  return (
    <motion.div
      className={`text-lg font-bold ${color}`}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {displayValue}%
    </motion.div>
  );
}

const [mode, setMode] = useState("gas"); // "gas" or "diesel"

useEffect(() => {
  const interval = setInterval(() => {
    setMode((prevMode) => (prevMode === "gas" ? "diesel" : "gas"));
  }, 3000); // auto-switch every 5 seconds

  return () => clearInterval(interval);
}, []);

const isGas = mode === "gas";
const efficiency = isGas ? 94 : 89;
const savings = isGas ? 35 : 12;
const sliderPosition = isGas ? 100 : 0;
  const features = [
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of dual fuel kit manufacturers with rigorous evaluation of quality and performance.'
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: 'Technical Specification Development',
      description: 'Creation of detailed technical specifications for dual fuel kits based on your specific generator models and requirements.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Competitive Bid Management',
      description: 'Organization and evaluation of vendor proposals to ensure optimal pricing, quality, and support services.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Compliance Verification',
      description: 'Confirmation that selected equipment meets all regulatory requirements, safety standards, and certification needs.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Quality Inspection',
      description: 'Rigorous pre-delivery inspection and testing protocols to ensure kits meet specified quality and performance standards.'
    },
    {
      icon: <Package className="h-5 w-5 text-primary" />,
      title: 'Logistics Management',
      description: 'Comprehensive delivery coordination including customs clearance, transportation, and on-site delivery verification.'
    },
  ];

  const benefits = [
    {
      title: 'Quality Assurance',
      description: 'Access high-quality, reliable dual fuel kits through our extensive vendor evaluation and quality control processes.'
    },
    {
      title: 'Cost Optimization',
      description: 'Obtain competitive pricing and favorable terms through our volume purchasing relationships and negotiation expertise.'
    },
    {
      title: 'Technical Compatibility',
      description: 'Ensure perfect compatibility between your generators and the dual fuel kits through precise specification development.'
    },
    {
      title: 'Reduced Procurement Complexity',
      description: 'Eliminate the complexity of sourcing specialized equipment with our streamlined procurement management.'
    },
    {
      title: 'Simplified Documentation',
      description: 'Receive complete, organized documentation for all equipment including specifications, certifications, and warranty information.'
    },
    {
      title: 'Warranty Protection',
      description: 'Secure comprehensive warranty coverage and support agreements as part of the procurement process.'
    },
  ];


const dualFuel = (
   <div className="lg:w-1/2">
      <div className="rounded-lg shadow-xl border-2 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">

          {/* Toggle Button */}
          {/* <motion.button
            onClick={() => setMode(isGas ? "diesel" : "gas")}
            className="mb-4 px-4 py-2 rounded bg-primary text-white text-xs uppercase font-bold shadow hover:bg-primary/80 transition"
            whileTap={{ scale: 0.95 }}
          >
            Switch to {isGas ? "Diesel" : "Natural Gas"}
          </motion.button> */}

          {/* Status Panel */}
          <motion.div
            className="w-48 h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg relative mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-3 bg-black rounded p-2">
              <div className="text-center text-primary text-xs mb-2">
                DUAL FUEL ACTIVE
              </div>
              <div className="flex justify-center">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    isGas
                      ? "bg-green-900/50 text-green-400"
                      : "bg-yellow-100/50 text-gray-200"
                  }`}
                >
                  {isGas ? "NATURAL GAS" : "DIESEL"}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Efficiency & Savings */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Gauge className="h-3 w-3 text-blue-400" />
                  <span className="text-xs text-gray-400">Efficiency</span>
                </div>
                <AnimatedCounter value={efficiency} color="text-blue-400" />
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-gray-400">Savings</span>
                </div>
                <AnimatedCounter value={savings} color="text-green-400" />
              </div>
            </div>
          </div>

          {/* Slider Indicator */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <span className="text-xs text-gray-400">Diesel</span>
            <div className="w-8 h-1 bg-gray-600 rounded mx-2 relative overflow-hidden">
              <motion.div
                className="absolute top-0 w-2 h-1 bg-primary rounded"
                animate={{ x: `${sliderPosition}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className="text-xs text-gray-400">Gas</span>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
)
  

  return (
    <ServicePageTemplate
      title="DFK Procurement"
      subtitle="Expert Dual Fuel Kit Selection & Acquisition"
      description="Our comprehensive dual fuel kit procurement service helps you identify, evaluate, and acquire high-quality conversion systems that perfectly match your generator specifications and operational needs."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-procurement.jpg"
      callToAction={{
        title: "Ready to Source Your Dual Fuel Solution?",
        description: "Contact our procurement specialists to begin the selection and acquisition process for your dual fuel conversion kits.",
        buttonText: "Start Procurement Process",
        buttonLink: "/contact",
      }}
                     heroVisual={dualFuel} // ← custom visual goes here

    />

  );
};

export default DFKProcurementPage;