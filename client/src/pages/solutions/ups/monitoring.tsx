import React, { useEffect, useState } from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BellRing, Smartphone, BarChart, Cpu, Activity } from 'lucide-react';
import { Battery, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const UPSMonitoringPage: React.FC = () => {


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
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Real-time Load Monitoring',
      description: 'Continuous monitoring of UPS load levels with historical trend analysis and usage pattern identification.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Proactive Alerting System',
      description: 'Configurable alerts for critical UPS parameters with multi-channel notifications for immediate response to issues.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Monitoring Interface',
      description: 'Responsive mobile application with real-time UPS status updates and remote management capabilities.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Battery Health Analytics',
      description: 'Advanced battery monitoring with performance degradation analysis and replacement forecasting.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Load Balancing Insights',
      description: 'Smart load distribution analytics with recommendations for optimal UPS capacity utilization.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Performance Reporting',
      description: 'Comprehensive performance reports with efficiency metrics, availability statistics, and maintenance recommendations.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced System Reliability',
      description: 'Improve UPS system reliability through early detection of potential issues and proactive maintenance intervention.'
    },
    {
      title: 'Extended Battery Life',
      description: 'Maximize battery service life through optimal loading and early identification of performance degradation.'
    },
    {
      title: 'Reduced Downtime Risk',
      description: 'Minimize the risk of critical power failures through continuous monitoring and immediate issue notification.'
    },
    {
      title: 'Optimized Power Distribution',
      description: 'Balance power loads effectively across UPS systems to maximize efficiency and prevent overloading situations.'
    },
    {
      title: 'Informed Capacity Planning',
      description: 'Make data-driven decisions about UPS capacity requirements based on actual usage trends and growth patterns.'
    },
    {
      title: 'Operational Visibility',
      description: 'Gain comprehensive visibility into UPS performance and health status across multiple locations from a single interface.'
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
      title="UPS Load Management & Monitoring"
      subtitle="Smart UPS Performance Optimization"
      description="Our UPS monitoring solution provides comprehensive visibility into your uninterruptible power supply systems, enabling proactive management, optimized performance, and maximum reliability for your critical power infrastructure."
      features={features}
      benefits={benefits}
      heroImage="/images/ups-monitoring.jpg"
      callToAction={{
        title: "Ready to Optimize Your UPS Performance?",
        description: "Contact our power monitoring specialists to discuss implementing advanced UPS monitoring for your critical infrastructure.",
        buttonText: "Get UPS Monitoring",
        buttonLink: "/contact",
      }}
            heroVisual={DGHealthVisual} // ← custom visual goes here

    />
  );
};

export default UPSMonitoringPage;