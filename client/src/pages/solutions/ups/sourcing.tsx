import { useState, useEffect } from "react";

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, Calculator, ShoppingCart, Scale, Award, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Battery, BarChart3 } from "lucide-react";


const UPSSourcingPage: React.FC = () => {

   const batteryLevels = [81, 83, 85, 94, 100];
  const loadLevels = [80, 60, 74, 68, 66, 82, 86];

  const [battery, setBattery] = useState(85);
  const [load, setLoad] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setBattery(prev => {
        const next = batteryLevels[Math.floor(Math.random() * batteryLevels.length)];
        return next;
      });
      setLoad(prev => {
        const next = loadLevels[Math.floor(Math.random() * loadLevels.length)];
        return next;
      });
    }, 2000); // update every 2 seconds

    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Needs Assessment & Specification',
      description: 'Comprehensive evaluation of your power protection requirements with detailed UPS specification development.'
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'Load Calculation & Sizing',
      description: 'Precise UPS capacity calculation based on current and future load requirements, expansion plans, and redundancy needs.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Technology Comparison',
      description: 'Detailed analysis of available UPS technologies and architectures with performance and cost-benefit evaluation.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of UPS manufacturers with rigorous evaluation of reliability and support capabilities.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Proposal Management',
      description: 'Organization and evaluation of vendor proposals to ensure optimal pricing, specifications, and support services.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Installation Coordination',
      description: 'Management of delivery logistics, installation planning, and implementation coordination with minimal operational disruption.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Protection',
      description: 'Select the ideal UPS solution precisely matched to your critical power protection requirements and operational environment.'
    },
    {
      title: 'Cost Optimization',
      description: 'Avoid over-specification while ensuring adequate protection through precise sizing and technology selection.'
    },
    {
      title: 'Future-Proofed Solution',
      description: 'Implement UPS systems with appropriate scalability and expansion capabilities to accommodate future growth.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize the risk of selecting inadequate or inappropriate UPS solutions through expert evaluation and guidance.'
    },
    {
      title: 'Vendor-Neutral Recommendations',
      description: 'Receive unbiased, objective recommendations based on your specific requirements rather than vendor preferences.'
    },
    {
      title: 'Simplified Procurement',
      description: 'Navigate the complex technical procurement process with expert guidance and comprehensive project management.'
    },
  ];

  const DGHealthVisual = (
    <div className="lg:w-5/6">
      <div className="rounded-lg shadow-xl border-2 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">

          {/* Panel */}
          <div className="relative">
            <div className="w-40 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg relative">
              <div className="absolute inset-2 bg-black rounded flex flex-col p-2">
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="text-xs text-primary">ONLINE</span>
                </div>

                {/* Metrics */}
                <div className="bg-green-900/50 rounded p-1 text-xs text-green-400 font-mono">
                  <div>LOAD: {load}%</div>
                  <div>BATT: {battery}%</div>
                </div>
              </div>
            </div>

            {/* Battery Slider Bar */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-6 border-2 border-gray-600 rounded bg-black relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-sm"
                  animate={{ width: `${battery}%` }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-gray-600 rounded-r" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-xs">
            {/* Battery */}
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="flex items-center gap-2 mb-1">
                <Battery className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-300">Battery</span>
              </div>
              <div className="text-lg font-bold text-green-400">{battery}%</div>
            </div>

            {/* Load */}
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="h-4 w-4 text-blue-400" />
                <span className="text-xs text-gray-300">Load</span>
              </div>
              <div className="text-lg font-bold text-blue-400">{load}%</div>
            </div>
          </div>

        </div>
      </div>
    </div>

);

  return (
    <ServicePageTemplate
      title="UPS System Sourcing"
      subtitle="Expert UPS Selection & Procurement"
      description="Our comprehensive UPS sourcing service helps you identify, evaluate, and implement the optimal uninterruptible power supply solution for your critical infrastructure protection needs."
      features={features}
      benefits={benefits}
      heroImage="/images/ups-sourcing.jpg"
      callToAction={{
        title: "Ready to Select the Right UPS Solution?",
        description: "Contact our power protection specialists to begin the UPS assessment and selection process for your critical infrastructure.",
        buttonText: "Start UPS Consultation",
        buttonLink: "/contact",
      }}
      heroVisual={DGHealthVisual} // ← custom visual goes here
    />
  );
};

export default UPSSourcingPage;