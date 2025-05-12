import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Calculator, BarChart, ClipboardList, Zap, FileCheck, Settings } from 'lucide-react';

const ServoSizingPage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'Load Analysis & Calculation',
      description: 'Comprehensive assessment of connected equipment load requirements with detailed power consumption calculation.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Voltage Variance Assessment',
      description: 'Analysis of site-specific voltage fluctuation patterns to determine optimal stabilizer specifications.'
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: 'Equipment Protection Needs',
      description: 'Detailed evaluation of connected equipment voltage sensitivity and protection requirements.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Capacity Sizing Recommendations',
      description: 'Precise stabilizer capacity calculations with appropriate safety margins and future expansion allowance.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Technology Selection Support',
      description: 'Expert guidance on optimal servo stabilizer technology based on application requirements and constraints.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Technical Specification Development',
      description: 'Creation of comprehensive technical specifications for vendor quotation and procurement processes.'
    },
  ];

  const benefits = [
    {
      title: 'Optimal Protection',
      description: 'Ensure your equipment receives precisely the voltage stabilization required for reliable operation and longevity.'
    },
    {
      title: 'Cost Optimization',
      description: 'Avoid over-specification while ensuring adequate protection through precise sizing and technology selection.'
    },
    {
      title: 'Future-Proofed Solution',
      description: 'Implement stabilizers with appropriate capacity for both current needs and planned future expansion.'
    },
    {
      title: 'Enhanced Equipment Reliability',
      description: 'Protect sensitive equipment from voltage-related damage and operational issues with properly sized stabilizers.'
    },
    {
      title: 'Energy Efficiency',
      description: 'Optimize energy consumption with appropriately sized stabilizers that operate within their efficiency range.'
    },
    {
      title: 'Informed Decision Making',
      description: 'Make stabilizer procurement decisions based on expert analysis and site-specific requirements rather than generalizations.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Sizing & Selection"
      subtitle="Expert Voltage Stabilization Assessment"
      description="Our comprehensive servo stabilizer sizing and selection service helps you identify, evaluate, and implement the optimal voltage stabilization solution for your specific equipment protection needs."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-sizing.jpg"
      callToAction={{
        title: "Ready to Size Your Stabilizer Solution?",
        description: "Contact our power quality specialists to begin the assessment and selection process for your voltage stabilization needs.",
        buttonText: "Start Sizing Consultation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoSizingPage;