import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ClipboardCheck, BarChart4, FileCheck, Calculator, Settings, AlertTriangle } from 'lucide-react';

const DFKAssessmentPage: React.FC = () => {
  const features = [
    {
      icon: <ClipboardCheck className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Engine Evaluation',
      description: 'Detailed assessment of your diesel generator specifications, age, condition, and operational patterns for dual fuel compatibility.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Load Profile Analysis',
      description: 'Examination of your generator loading patterns to determine optimal dual fuel mixture ratios and potential efficiency gains.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Technical Feasibility Study',
      description: 'Thorough assessment of the technical requirements for successful dual fuel kit implementation on your specific equipment.'
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'ROI & Payback Analysis',
      description: 'Detailed financial analysis including implementation costs, projected fuel savings, and expected payback period.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Risk Assessment',
      description: 'Comprehensive evaluation of potential impacts on warranty, reliability, maintenance requirements, and operational risks.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Compliance Verification',
      description: 'Assessment of regulatory implications including emission standards compliance and safety certifications for dual fuel operation.'
    },
  ];

  const benefits = [
    {
      title: 'Informed Decision Making',
      description: 'Gain a comprehensive understanding of the opportunities and challenges specific to your generators before investing in conversion.'
    },
    {
      title: 'Optimized Implementation Strategy',
      description: 'Develop a targeted approach for dual fuel conversion based on which generators will provide the best return on investment.'
    },
    {
      title: 'Accurate Financial Projections',
      description: 'Receive realistic projections of potential cost savings, implementation expenses, and payback periods for budgeting purposes.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential technical, operational, and regulatory challenges before beginning the conversion process.'
    },
    {
      title: 'Maximized Conversion Benefits',
      description: 'Ensure you achieve the optimal balance of diesel substitution, operational performance, and cost savings through proper assessment.'
    },
    {
      title: 'Compliance Assurance',
      description: 'Confirm that dual fuel conversion will maintain compliance with all applicable emission and operational regulations.'
    },
  ];

  return (
    <ServicePageTemplate
      title="DFK Suitability Assessment"
      subtitle="Comprehensive Dual Fuel Conversion Feasibility Analysis"
      description="Our thorough assessment service evaluates the technical and financial feasibility of implementing dual fuel kits on your diesel generators, providing detailed insights to inform your conversion decision."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-assessment.jpg"
      callToAction={{
        title: "Ready to Explore Dual Fuel Conversion?",
        description: "Contact our assessment team to evaluate the suitability of your diesel generators for dual fuel conversion.",
        buttonText: "Request an Assessment",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DFKAssessmentPage;