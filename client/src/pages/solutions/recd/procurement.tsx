import React, { useState } from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ShoppingCart, Search, BarChart4, ShieldCheck, Award, TrendingUp } from 'lucide-react';
import { useMotionValue } from 'framer-motion';
import { Shield } from "lucide-react";
import { motion, animate,  } from "framer-motion";
import { useEffect,  } from "react";



const RECDProcurementPage: React.FC = () => {
    const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

 function AnimatedCounter({ value, color = "text-primary" }: { value: number; color?: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });
    return controls.stop;
  }, [value]);

  return (
    <motion.div
      className={`text-lg font-bold ${color}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.div>
  );
}

  // These could come from props or API
  const CO = 151;
  const NOx = 456;
  const PM = 27;

  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Needs Assessment & Specification',
      description: 'Detailed evaluation of your emission control requirements based on generator capacity, usage patterns, and regulatory obligations.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of RECD suppliers with rigorous evaluation of technical capabilities and reliability.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Technology Comparison',
      description: 'Side-by-side analysis of available emission control technologies with performance benchmarking and compliance verification.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Total Cost Analysis',
      description: 'Detailed evaluation of acquisition, installation, operation, and maintenance costs for informed decision making.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'Regulatory Compliance Verification',
      description: 'Confirmation that selected equipment meets all current and anticipated regulatory requirements for your specific location.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Quality Assurance',
      description: 'Rigorous inspection and testing protocols to ensure purchased equipment meets specifications and quality standards.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Investment',
      description: 'Avoid over-specification or inadequate solutions by precisely matching RECD technology to your specific requirements.'
    },
    {
      title: 'Risk Reduction',
      description: 'Minimize the risk of purchasing non-compliant or underperforming equipment through expert evaluation and verification.'
    },
    {
      title: 'Simplified Procurement Process',
      description: 'Streamline the complex technical procurement process with expert guidance and vendor management.'
    },
    {
      title: 'Future-Proofed Compliance',
      description: 'Ensure selected equipment can accommodate anticipated regulatory changes and tightening emission standards.'
    },
    {
      title: 'Enhanced Equipment Longevity',
      description: 'Select equipment that integrates optimally with your existing systems to maximize operational life and effectiveness.'
    },
    {
      title: 'Regulatory Confidence',
      description: 'Proceed with certainty that purchased equipment will meet all compliance requirements and certification standards.'
    },
  ];
  const emmisonpanal = (
        <div className="lg:w-5/6">
      <div className="rounded-lg shadow-xl border-2 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">

          {/* RECD Panel */}
          <div className="relative mb-6">
            <div className="w-48 h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg relative">
              <div className="absolute inset-3 bg-black rounded p-2">
                <div className="text-center text-green-400 text-xs mb-2">RECD ACTIVE</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-green-900/50 rounded p-1 text-center">
                    <div className="text-green-400">STATUS</div>
                    <div className="text-white">ONLINE</div>
                  </div>
                  <div className="bg-blue-900/50 rounded p-1 text-center">
                    <div className="text-blue-400">MODE</div>
                    <div className="text-white">AUTO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emission Stats */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">CO (mg/Nm³)</div>
                <AnimatedCounter value={CO} color="text-yellow-400" />
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">NOx (mg/Nm³)</div>
                <AnimatedCounter value={NOx} color="text-orange-400" />
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30">
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">PM (mg/Nm³)</div>
                <AnimatedCounter value={PM} color="text-red-400" />
              </div>
            </div>
          </div>

          {/* Compliance Footer */}
          <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
            <Shield className="h-4 w-4" />
            <span>CPCB IV+ Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ServicePageTemplate
      title="RECD Procurement"
      subtitle="Expert Emission Control Device Selection & Acquisition"
      description="Our comprehensive RECD procurement service helps you identify, evaluate, and acquire the optimal Real-time Emission Control Devices for your diesel generators, ensuring regulatory compliance and operational efficiency."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-procurement.jpg"
      callToAction={{
        title: "Ready to Select the Right RECD Solution?",
        description: "Contact our procurement specialists to begin the assessment and selection process for your emission control needs.",
        buttonText: "Start RECD Procurement",
        buttonLink: "/contact",
      }}
            heroVisual={emmisonpanal} // ← custom visual goes here
    />
  );
};

export default RECDProcurementPage;