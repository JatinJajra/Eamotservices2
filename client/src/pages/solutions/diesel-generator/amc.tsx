import React, { useEffect, useState } from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, Calendar, FileCheck, } from 'lucide-react';
import { motion } from "framer-motion";

import { Settings, Shield } from "lucide-react";


const DGAMCPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: 'Scheduled Preventive Maintenance',
      description: 'Regular, manufacturer-recommended preventive maintenance visits with comprehensive system inspections and servicing.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Expert Technical Support',
      description: 'Access to certified generator technicians for troubleshooting, guidance, and operational support throughout the contract period.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Consumable Replacement',
      description: 'Regular replacement of filters, oils, and other consumables according to manufacturer-specified maintenance schedules.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Emergency Response Service',
      description: 'Priority emergency response with guaranteed response times for critical issues affecting generator operation.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Parts & Labor Coverage',
      description: 'Comprehensive coverage for replacement parts and labor costs based on the selected service level agreement.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Performance Monitoring',
      description: 'Regular performance analysis and reporting with recommendations for optimization and system improvements.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced System Reliability',
      description: 'Maximize generator uptime and reliability through proactive maintenance and expert technical support.'
    },
    {
      title: 'Extended Equipment Life',
      description: 'Prolong the service life of your generator system through professional maintenance and timely component replacement.'
    },
    {
      title: 'Predictable Maintenance Costs',
      description: 'Convert unpredictable emergency repair expenses into manageable, budgeted maintenance costs with AMC coverage.'
    },
    {
      title: 'Compliance Assurance',
      description: 'Maintain regulatory compliance with emission standards through regular maintenance and performance verification.'
    },
    {
      title: 'Minimized Downtime Risk',
      description: 'Reduce the risk of unexpected failures and extended downtime through preventive maintenance and rapid response.'
    },
    {
      title: 'Operational Peace of Mind',
      description: 'Operate with confidence knowing your backup power infrastructure is professionally maintained and supported.'
    },
  ];

  const values = [89,88,96, 99, 90, 93];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const percentage = values[index];

const DGHeroVisual = (
      <div className="lg:w-5/6">
      <div className="rounded-lg shadow-xl border-2 border-primary/20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 min-h-[400px] flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center">

          {/* Vertical Bar Chart */}
          {/* <div className="w-4 h-32 bg-gray-700 rounded-full overflow-hidden mb-4">
            <motion.div
              className="bg-green-400 w-full rounded-full"
              initial={{ height: 0 }}
              animate={{ height: `${percentage}%` }}
              transition={{ duration: 0.6 }}
            />
          </div> */}

          {/* Circular Progress */}
          <div className="relative mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(156, 163, 175, 0.3)"
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="351.86"
                strokeDashoffset={(100 - percentage) * 3.52}
                transition={{ duration: 0.6 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                key={percentage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-green-400"
              >
                {percentage}%
              </motion.div>
              <div className="text-xs text-gray-400">Health Score</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30 text-center">
              <Settings className="h-4 w-4 text-blue-400 mx-auto mb-1" />
              <div className="text-xs text-gray-400 mb-1">Next Service</div>
              <div className="text-lg font-bold text-blue-400">1 day</div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-primary/30 text-center">
              <Shield className="h-4 w-4 text-green-400 mx-auto mb-1" />
              <div className="text-xs text-gray-400 mb-1">Coverage</div>
              <div className="text-lg font-bold text-green-400">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>

);


  return (
    <ServicePageTemplate
      title="DG Annual Maintenance Contract"
      subtitle="Comprehensive Generator Support & Maintenance"
      description="Our Diesel Generator Annual Maintenance Contract (AMC) provides complete maintenance coverage and technical support for your power generation systems, ensuring maximum reliability and performance for your backup power infrastructure."
      features={features}
      benefits={benefits}
      heroImage="/images/dg-amc.jpg"
      callToAction={{
        title: "Ready to Protect Your Generator Investment?",
        description: "Contact our service team to discuss AMC options tailored to your specific generator maintenance requirements.",
        buttonText: "Explore AMC Options",
        buttonLink: "/contact",
      }}
           heroVisual={DGHeroVisual} // ← custom visual goes here

    />
  );
};

export default DGAMCPage;