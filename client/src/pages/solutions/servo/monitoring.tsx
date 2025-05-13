import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BellRing, Smartphone, Gauge, Activity, Cloud } from 'lucide-react';

const ServoMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: '24/7 High-Resolution Monitoring',
      description: 'Our advanced sensors capture voltage data at 0.5-second intervals, providing 2,000% more detailed insights than standard monitoring systems for complete visibility and protection.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Multi-Channel Intelligent Alerts',
      description: 'Our AI-powered alert system delivers instant notifications via SMS, email, app, and voice calls, with smart escalation protocols for critical voltage events.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Advanced Performance Analytics',
      description: 'Our proprietary analytics engine provides detailed metrics on correction frequency, response time, correction accuracy, and stabilization efficiency with actionable insights.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Predictive Grid Quality Analysis',
      description: 'Our machine learning algorithms identify voltage fluctuation patterns and predict future grid disturbances up to 24 hours in advance, allowing preemptive protective measures.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Enterprise-Grade Secure Cloud Platform',
      description: 'Your voltage data is protected by military-grade encryption and stored on our redundant cloud infrastructure with 10-year historical data retention and instant access.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Cross-Platform Control Interface',
      description: 'Our intuitive dashboard works seamlessly across all devices, allowing you to monitor, analyze, and control your stabilizer from anywhere with comprehensive remote capabilities.'
    }
  ];

  const benefits = [
    {
      title: 'Prevent 99.7% of Equipment Damage',
      description: 'Our clients have reported a 99.7% reduction in voltage-related equipment damage after implementing our monitoring system, saving hundreds of thousands in potential losses.'
    },
    {
      title: 'Detect Issues 83% Faster',
      description: 'Our advanced early detection system identifies potential stabilizer issues or grid abnormalities 83% faster than traditional methods, often before they manifest as problems.'
    },
    {
      title: 'Transform Grid Management Strategy',
      description: 'Gain unprecedented insights into your location-specific voltage profiles, helping you implement targeted power quality improvements and optimization strategies.'
    },
    {
      title: 'Extend Equipment Lifespan by 62%',
      description: 'Clients report a 62% average increase in sensitive equipment lifespan through optimized stabilizer settings based on our detailed performance analytics and recommendations.'
    },
    {
      title: 'Reduce Maintenance Costs by 47%',
      description: 'Our data-driven maintenance scheduling eliminates unnecessary service visits and prevents major failures, reducing total stabilizer maintenance costs by up to 47%.'
    },
    {
      title: 'Bulletproof Compliance Documentation',
      description: 'Our comprehensive historical records provide irrefutable evidence for warranty claims, utility disputes, or insurance requirements with tamper-proof certification.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Remote Voltage Monitoring"
      subtitle="Next-Generation Power Intelligence System"
      description="Transform your power management strategy with our revolutionary AI-driven monitoring platform. Gain unprecedented visibility into voltage conditions with microsecond precision, predictive analytics, and actionable intelligence."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-monitoring.jpg"
      callToAction={{
        title: "Stop Flying Blind With Your Power Quality",
        description: "Over 95% of equipment damage occurs due to undetected voltage issues. Our intelligent monitoring system identifies dangerous conditions before they cause catastrophic failures.",
        buttonText: "Activate Intelligent Power Monitoring",
        buttonLink: "/contact"
      }}
    />
  );
};

export default ServoMonitoringPage;