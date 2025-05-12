import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText, CheckSquare, ClipboardCheck, BookOpen, Globe, Mail } from 'lucide-react';

const RECDDocumentationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: 'Compliance Documentation Management',
      description: 'Comprehensive management of all regulatory documentation including applications, permits, test reports, and inspection records.'
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: 'Application Preparation & Submission',
      description: 'Expert assistance with preparation and submission of CPCB, SPCB, and other regulatory body applications and renewals.'
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-primary" />,
      title: 'Inspection & Audit Readiness',
      description: 'Thorough preparation for regulatory inspections and audits with mock assessments and documentation review.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Regulation Interpretation & Guidance',
      description: 'Clear explanation and guidance on complex regulatory requirements, specific to your industry and operational context.'
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: 'State & Local Compliance',
      description: 'Expertise in navigating state pollution control board and local authority requirements across all regions of India.'
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Authority Correspondence Management',
      description: 'Professional handling of all communications with regulatory authorities, ensuring timely responses and appropriate documentation.'
    },
  ];

  const benefits = [
    {
      title: 'Regulatory Peace of Mind',
      description: 'Eliminate concerns about compliance status with our comprehensive documentation management and expert guidance.'
    },
    {
      title: 'Administrative Resource Optimization',
      description: 'Free your internal resources from complex compliance paperwork to focus on core business activities.'
    },
    {
      title: 'Reduced Compliance Risk',
      description: 'Minimize the risk of fines, operational restrictions, or shutdowns due to documentation oversights or non-compliance.'
    },
    {
      title: 'Streamlined Regulatory Processes',
      description: 'Expedite approvals and renewals with professionally prepared documentation that meets all regulatory requirements.'
    },
    {
      title: 'Informed Decision Making',
      description: 'Make operational decisions with complete awareness of regulatory implications and documentation requirements.'
    },
    {
      title: 'Complete Audit Trails',
      description: 'Maintain comprehensive records of all regulatory submissions, approvals, and correspondence for future reference.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Regulatory Documentation Support"
      subtitle="Expert RECD Compliance Documentation Management"
      description="Our comprehensive documentation support services ensure your diesel generator emissions compliance documentation is complete, accurate, and readily available for regulatory submissions and audits."
      features={features}
      benefits={benefits}
      heroImage="/images/regulatory-docs.jpg"
      callToAction={{
        title: "Need Expert Documentation Support?",
        description: "Contact our regulatory compliance team to discuss how we can help you manage your RECD documentation requirements.",
        buttonText: "Get Documentation Support",
        buttonLink: "/contact",
      }}
    />
  );
};

export default RECDDocumentationPage;