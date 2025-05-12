import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, Calendar, Battery, Shield } from 'lucide-react';

const UPSAMCPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: 'Scheduled Preventive Maintenance',
      description: 'Regular, manufacturer-recommended preventive maintenance visits with comprehensive system inspections and testing.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Expert Technical Support',
      description: 'Access to certified UPS technicians for troubleshooting, guidance, and operational support throughout the contract period.'
    },
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Battery Health Management',
      description: 'Regular battery testing, health assessment, and proactive replacement recommendations to prevent unexpected failures.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Emergency Response Service',
      description: 'Priority emergency response with guaranteed response times for critical issues affecting UPS operation.'
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
      description: 'Maximize UPS system uptime and reliability through proactive maintenance and expert technical support.'
    },
    {
      title: 'Extended Equipment Life',
      description: 'Prolong the service life of your UPS systems through professional maintenance and timely component replacement.'
    },
    {
      title: 'Predictable Maintenance Costs',
      description: 'Convert unpredictable emergency repair expenses into manageable, budgeted maintenance costs with AMC coverage.'
    },
    {
      title: 'Priority Support Access',
      description: 'Gain priority access to technical support and emergency services with guaranteed response times.'
    },
    {
      title: 'Minimized Downtime Risk',
      description: 'Reduce the risk of unexpected failures and extended downtime through preventive maintenance and rapid response.'
    },
    {
      title: 'Operational Peace of Mind',
      description: 'Operate with confidence knowing your critical power infrastructure is professionally maintained and supported.'
    },
  ];

  return (
    <ServicePageTemplate
      title="UPS Annual Maintenance Contract"
      subtitle="Comprehensive UPS Support & Maintenance"
      description="Our UPS Annual Maintenance Contract (AMC) provides complete maintenance coverage and technical support for your uninterruptible power supply systems, ensuring maximum reliability and performance for your critical infrastructure."
      features={features}
      benefits={benefits}
      heroImage="/images/ups-amc.jpg"
      callToAction={{
        title: "Ready to Protect Your UPS Investment?",
        description: "Contact our service team to discuss AMC options tailored to your specific UPS maintenance requirements.",
        buttonText: "Explore AMC Options",
        buttonLink: "/contact",
      }}
    />
  );
};

export default UPSAMCPage;