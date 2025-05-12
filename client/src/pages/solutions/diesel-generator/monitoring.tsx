import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BellRing, Smartphone, BarChart, Gauge, Cloud } from 'lucide-react';

const DGMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Real-time Performance Monitoring',
      description: 'Continuous monitoring of critical generator parameters including voltage, frequency, temperature, and fuel levels.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Proactive Alerting System',
      description: 'Configurable alerts for parameter deviations with multi-channel notifications for immediate response to issues.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Fuel Consumption Analytics',
      description: 'Advanced fuel usage tracking with efficiency analysis, consumption trends, and optimization recommendations.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Emissions Tracking',
      description: 'Emissions performance monitoring with compliance reporting and environmental impact assessment capabilities.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud-based Management',
      description: 'Secure cloud platform for generator data storage, analysis, and management with comprehensive reporting features.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Control Interface',
      description: 'Responsive mobile application with remote monitoring and control capabilities for anywhere management access.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Reliability',
      description: 'Improve generator reliability through early detection of performance issues and proactive maintenance intervention.'
    },
    {
      title: 'Optimized Fuel Efficiency',
      description: 'Reduce fuel costs through usage pattern analysis, efficiency monitoring, and operational optimization.'
    },
    {
      title: 'Simplified Compliance',
      description: 'Streamline regulatory compliance with automated emissions tracking and documentation for pollution control requirements.'
    },
    {
      title: 'Reduced Maintenance Costs',
      description: 'Lower maintenance expenses through condition-based maintenance scheduling instead of arbitrary time intervals.'
    },
    {
      title: 'Operational Insights',
      description: 'Gain comprehensive visibility into generator performance patterns, loading characteristics, and operational trends.'
    },
    {
      title: 'Remote Management Capability',
      description: 'Monitor and manage generators across multiple locations from a single interface with remote testing capabilities.'
    },
  ];

  return (
    <ServicePageTemplate
      title="IoT-based DG Monitoring"
      subtitle="Smart Generator Management"
      description="Our IoT-based DG monitoring solution provides comprehensive visibility into your diesel generator performance, enabling proactive management, optimized efficiency, and maximum reliability for your critical backup power systems."
      features={features}
      benefits={benefits}
      heroImage="/images/dg-monitoring.jpg"
      callToAction={{
        title: "Ready to Optimize Your Generator Performance?",
        description: "Contact our monitoring specialists to discuss implementing advanced IoT monitoring for your diesel generators.",
        buttonText: "Get IoT Monitoring",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DGMonitoringPage;