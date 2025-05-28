import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BellRing, Smartphone, BarChart, Cpu, Activity } from 'lucide-react';

const UPSMonitoringPage: React.FC = () => {
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
    />
  );
};

export default UPSMonitoringPage;