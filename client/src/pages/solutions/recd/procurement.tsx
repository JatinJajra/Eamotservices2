import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ShoppingCart, Search, BarChart4, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const RECDProcurementPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Needs Assessment & Specification',
      description: 'Detailed evaluation of your emission control requirements based on generator capacity, usage patterns, and regulatory obligations.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of RECD suppliers with rigorous evaluation of technical capabilities and reliability.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Technology Comparison',
      description: 'Side-by-side analysis of available emission control technologies with performance benchmarking and compliance verification.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Total Cost Analysis',
      description: 'Detailed evaluation of acquisition, installation, operation, and maintenance costs for informed decision making.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'Regulatory Compliance Verification',
      description: 'Confirmation that selected equipment meets all current and anticipated regulatory requirements for your specific location.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Quality Assurance',
      description: 'Rigorous inspection and testing protocols to ensure purchased equipment meets specifications and quality standards.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Investment',
      description: 'Avoid over-specification or inadequate solutions by precisely matching RECD technology to your specific requirements.'
    },
    {
      title: 'Risk Reduction',
      description: 'Minimize the risk of purchasing non-compliant or underperforming equipment through expert evaluation and verification.'
    },
    {
      title: 'Simplified Procurement Process',
      description: 'Streamline the complex technical procurement process with expert guidance and vendor management.'
    },
    {
      title: 'Future-Proofed Compliance',
      description: 'Ensure selected equipment can accommodate anticipated regulatory changes and tightening emission standards.'
    },
    {
      title: 'Enhanced Equipment Longevity',
      description: 'Select equipment that integrates optimally with your existing systems to maximize operational life and effectiveness.'
    },
    {
      title: 'Regulatory Confidence',
      description: 'Proceed with certainty that purchased equipment will meet all compliance requirements and certification standards.'
    },
  ];

  return (
    <ServicePageTemplate
      title="RECD Procurement"
      subtitle="Expert Emission Control Device Selection & Acquisition"
      description="Our comprehensive RECD procurement service helps you identify, evaluate, and acquire the optimal Real-time Emission Control Devices for your diesel generators, ensuring regulatory compliance and operational efficiency."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-procurement.jpg"
      callToAction={{
        title: "Ready to Select the Right RECD Solution?",
        description: "Contact our procurement specialists to begin the assessment and selection process for your emission control needs.",
        buttonText: "Start RECD Procurement",
        buttonLink: "/contact",
      }}
    />
  );
};

export default RECDProcurementPage;