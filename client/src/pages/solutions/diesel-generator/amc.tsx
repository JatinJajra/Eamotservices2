import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, Calendar, FileCheck, Shield } from 'lucide-react';

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
    />
  );
};

export default DGAMCPage;