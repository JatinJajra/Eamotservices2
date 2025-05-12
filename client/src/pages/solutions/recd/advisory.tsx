import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BookOpen, Briefcase, ClipboardList, Users, TrendingUp, Scale } from 'lucide-react';

const RECDAdvisoryPage: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Regulatory Requirement Analysis',
      description: 'Comprehensive assessment of applicable CQAM norms and regulations specific to your generator capacity and location.'
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: 'Compliance Gap Assessment',
      description: 'Detailed evaluation of your current compliance status with identification of gaps and potential regulatory risks.'
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: 'Customized Compliance Roadmap',
      description: 'Development of step-by-step compliance implementation plans tailored to your specific operational requirements.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Technology Solution Evaluation',
      description: 'Independent assessment of available RECD technologies and vendors to identify optimal solutions for your needs.'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Regulatory Authority Liaison',
      description: 'Expert representation and communication with pollution control boards and regulatory authorities on your behalf.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Ongoing Compliance Updates',
      description: 'Regular updates on regulatory changes and new requirements affecting your diesel generator emissions compliance.'
    },
  ];

  const benefits = [
    {
      title: 'Compliance Risk Mitigation',
      description: 'Minimize the risk of non-compliance penalties, operational restrictions, or legal challenges through expert advisory.'
    },
    {
      title: 'Cost-Effective Implementation',
      description: 'Optimize compliance investments by implementing only what is necessary for your specific situation and requirements.'
    },
    {
      title: 'Simplified Regulatory Navigation',
      description: 'Cut through regulatory complexity with clear guidance on exactly what your organization needs to do for compliance.'
    },
    {
      title: 'Informed Decision Making',
      description: 'Make strategic decisions based on expert interpretation of regulations and their impact on your operations.'
    },
    {
      title: 'Future-Proofed Compliance',
      description: 'Stay ahead of regulatory changes with proactive updates and adaptation strategies for emerging requirements.'
    },
    {
      title: 'Operational Continuity',
      description: 'Maintain uninterrupted operations by avoiding compliance-related shutdowns or operational restrictions.'
    },
  ];

  return (
    <ServicePageTemplate
      title="CQAM Norms & Compliance Advisory"
      subtitle="Expert Guidance for Diesel Generator Emission Regulations"
      description="Our specialized advisory services provide expert guidance on Continuous Ambient Air Quality Monitoring (CQAM) norms and emission regulations for diesel generators, helping you navigate complex compliance requirements with confidence."
      features={features}
      benefits={benefits}
      heroImage="/images/compliance-advisory.jpg"
      callToAction={{
        title: "Need Expert Compliance Guidance?",
        description: "Contact our regulatory specialists to discuss your specific compliance requirements and challenges.",
        buttonText: "Schedule a Consultation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default RECDAdvisoryPage;