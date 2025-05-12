import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BellRing, Smartphone, Gauge, Activity, Cloud } from 'lucide-react';

const ServoMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Real-time Voltage Monitoring',
      description: 'Continuous monitoring of input and output voltage with real-time visualization and historical trend analysis.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Proactive Alerting System',
      description: 'Configurable alerts for voltage deviations with multi-channel notifications for immediate response to issues.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Performance Analytics',
      description: 'Detailed performance metrics including correction frequency, correction range, and stabilization efficiency.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Grid Quality Insights',
      description: 'Advanced grid performance analytics with voltage fluctuation patterns and power quality trend identification.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud-based Reporting',
      description: 'Secure cloud storage of historical voltage data with comprehensive reporting and analysis capabilities.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Monitoring Interface',
      description: 'Responsive mobile application with real-time stabilizer status updates and remote monitoring capabilities.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Protection Awareness',
      description: 'Maintain constant awareness of voltage conditions and stabilizer performance for optimal equipment protection.'
    },
    {
      title: 'Early Problem Detection',
      description: 'Identify potential stabilizer issues or grid abnormalities before they affect connected equipment.'
    },
    {
      title: 'Improved Grid Understanding',
      description: 'Gain comprehensive insights into your location-specific voltage quality and fluctuation patterns.'
    },
    {
      title: 'Optimized Stabilizer Performance',
      description: 'Fine-tune stabilizer settings based on actual voltage conditions and performance analytics.'
    },
    {
      title: 'Simplified Maintenance Planning',
      description: 'Schedule maintenance based on actual usage patterns and performance data rather than arbitrary intervals.'
    },
    {
      title: 'Comprehensive Documentation',
      description: 'Maintain detailed historical records of voltage conditions for warranty claims, utility complaints, or equipment issues.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Remote Voltage Monitoring"
      subtitle="Smart Stabilizer Performance Optimization"
      description="Our remote voltage monitoring solution provides comprehensive visibility into your servo stabilizer performance and grid voltage conditions, enabling proactive management, optimized performance, and maximum protection for your sensitive equipment."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-monitoring.jpg"
      callToAction={{
        title: "Ready to Monitor Your Voltage Quality?",
        description: "Contact our voltage monitoring specialists to discuss implementing advanced stabilizer monitoring for your power infrastructure.",
        buttonText: "Get Voltage Monitoring",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoMonitoringPage;