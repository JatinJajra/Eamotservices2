import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { LineChart, BarChart4, Activity, CloudUpload, FileText, Shield } from 'lucide-react';

const RECDMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Real-Time Emission Monitoring',
      description: 'Continuous monitoring of exhaust emissions including NOx, SOx, PM, and other parameters with high-precision sensors and analyzers.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Compliance Analytics',
      description: 'Advanced data analytics comparing real-time emissions with regulatory thresholds and historical trends for proactive management.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Instant Violation Alerts',
      description: 'Automated notification system for potential compliance violations with tiered alerting based on severity and regulatory impact.'
    },
    {
      icon: <CloudUpload className="h-5 w-5 text-primary" />,
      title: 'CPCB Integration & Reporting',
      description: 'Seamless data transmission to Central Pollution Control Board servers in accordance with regulatory requirements and formats.'
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: 'Automated Documentation',
      description: 'Comprehensive record-keeping of all emission data, calibration events, and maintenance activities for regulatory audits.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Tamper-Proof System',
      description: 'Secure data acquisition and storage with encryption, digital signatures, and comprehensive audit trails to ensure data integrity.'
    },
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance Assurance',
      description: 'Maintain continuous compliance with CPCB regulations and avoid costly penalties for emission standard violations.'
    },
    {
      title: 'Environmental Stewardship',
      description: 'Demonstrate your commitment to environmental responsibility with verifiable emission control and documented performance.'
    },
    {
      title: 'Operational Optimization',
      description: 'Utilize emission data to optimize generator operation, fuel consumption, and maintenance scheduling for peak efficiency.'
    },
    {
      title: 'Reduced Administrative Burden',
      description: 'Eliminate manual record-keeping and reporting with automated data collection, storage, and submission to authorities.'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Identify trends indicating engine or emission control system degradation before they result in compliance violations.'
    },
    {
      title: 'Business Continuity Protection',
      description: 'Avoid operational disruptions from regulatory shutdowns by maintaining continuous compliance with emission standards.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Emission Performance Monitoring"
      subtitle="RECD Continuous Emission Monitoring Solutions"
      description="Our comprehensive emission monitoring solutions ensure your diesel generators maintain continuous compliance with pollution control regulations while providing valuable operational insights and automated reporting to regulatory authorities."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-monitoring.jpg"
      callToAction={{
        title: "Ready to Ensure Emission Compliance?",
        description: "Contact our emission monitoring experts to learn how we can help you maintain regulatory compliance with minimal operational impact.",
        buttonText: "Schedule a Consultation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default RECDMonitoringPage;