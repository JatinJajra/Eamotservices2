import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, Calculator, ShoppingCart, Scale, Award, FileCheck } from 'lucide-react';

const UPSSourcingPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Needs Assessment & Specification',
      description: 'Comprehensive evaluation of your power protection requirements with detailed UPS specification development.'
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'Load Calculation & Sizing',
      description: 'Precise UPS capacity calculation based on current and future load requirements, expansion plans, and redundancy needs.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Technology Comparison',
      description: 'Detailed analysis of available UPS technologies and architectures with performance and cost-benefit evaluation.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of UPS manufacturers with rigorous evaluation of reliability and support capabilities.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Proposal Management',
      description: 'Organization and evaluation of vendor proposals to ensure optimal pricing, specifications, and support services.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Installation Coordination',
      description: 'Management of delivery logistics, installation planning, and implementation coordination with minimal operational disruption.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Protection',
      description: 'Select the ideal UPS solution precisely matched to your critical power protection requirements and operational environment.'
    },
    {
      title: 'Cost Optimization',
      description: 'Avoid over-specification while ensuring adequate protection through precise sizing and technology selection.'
    },
    {
      title: 'Future-Proofed Solution',
      description: 'Implement UPS systems with appropriate scalability and expansion capabilities to accommodate future growth.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize the risk of selecting inadequate or inappropriate UPS solutions through expert evaluation and guidance.'
    },
    {
      title: 'Vendor-Neutral Recommendations',
      description: 'Receive unbiased, objective recommendations based on your specific requirements rather than vendor preferences.'
    },
    {
      title: 'Simplified Procurement',
      description: 'Navigate the complex technical procurement process with expert guidance and comprehensive project management.'
    },
  ];

  return (
    <ServicePageTemplate
      title="UPS System Sourcing"
      subtitle="Expert UPS Selection & Procurement"
      description="Our comprehensive UPS sourcing service helps you identify, evaluate, and implement the optimal uninterruptible power supply solution for your critical infrastructure protection needs."
      features={features}
      benefits={benefits}
      heroImage="/images/ups-sourcing.jpg"
      callToAction={{
        title: "Ready to Select the Right UPS Solution?",
        description: "Contact our power protection specialists to begin the UPS assessment and selection process for your critical infrastructure.",
        buttonText: "Start UPS Consultation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default UPSSourcingPage;