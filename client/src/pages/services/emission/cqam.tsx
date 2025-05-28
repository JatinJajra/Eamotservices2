import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck, Shield, Clipboard, BookOpen, BarChart3, Award, AlertTriangle, PenTool } from 'lucide-react';

const CQAMRegistrationPage: React.FC = () => {
  const features = [
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Complete Documentation Support',
      description: 'Expert assistance with all required paperwork, forms, and technical documentation needed for CQAM registration and compliance.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Regulatory Compliance Guarantee',
      description: 'We ensure your DG sets meet all current Central Pollution Control Board (CPCB) norms and emission standards.'
    },
    {
      icon: <Clipboard className="h-5 w-5 text-primary" />,
      title: 'Pre-Registration Assessment',
      description: 'Thorough evaluation of your existing equipment to identify compliance gaps and develop a comprehensive action plan.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Regulatory Updates & Advisories',
      description: 'Stay informed about changing regulations with our regular updates on emission standards and compliance requirements.'
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: 'Emissions Testing & Certification',
      description: 'Coordinate with authorized testing agencies and laboratories to conduct required emissions tests and obtain valid certificates.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'End-to-End Application Management',
      description: 'Complete handling of the entire registration process from initial filing to final approval, including follow-ups and clarifications.'
    },
  ];

  const benefits = [
    {
      title: 'Legal Compliance Assurance',
      description: 'Avoid penalties, operational restrictions, and potential legal issues by ensuring full compliance with environmental regulations.'
    },
    {
      title: 'Time & Resource Savings',
      description: 'Eliminate the need to navigate complex regulatory processes internally, allowing your team to focus on core business operations.'
    },
    {
      title: 'Expert Representation',
      description: 'Benefit from our established relationships with regulatory bodies and experience in successfully managing compliance applications.'
    },
    {
      title: 'Reduced Risk of Application Rejection',
      description: 'Our thorough understanding of requirements and common pitfalls minimizes the chance of delays or rejections in the registration process.'
    },
    {
      title: 'Environmental Responsibility',
      description: 'Demonstrate your organization\'s commitment to environmental stewardship and corporate social responsibility.'
    },
    {
      title: 'Business Continuity Protection',
      description: 'Prevent operational disruptions that could result from non-compliance and regulatory enforcement actions.'
    },
  ];

  const imageGallery = [
    {
      url: 'https://images.unsplash.com/photo-1590507621108-433608c97823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'CQAM documentation process',
      caption: 'Documentation preparation for regulatory compliance'
    },
    {
      url: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Emissions testing equipment',
      caption: 'State-of-the-art emissions testing and analysis'
    },
    {
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Compliance consultation',
      caption: 'Expert consultation on regulatory requirements'
    },
  ];

  const faqs = [
    {
      question: 'What is CQAM and why is registration necessary?',
      answer: 'CQAM (Continuous Ambient Air Quality Monitoring) registration is mandated by the Central Pollution Control Board (CPCB) for diesel generators above certain capacity thresholds. This regulation aims to monitor and control emissions from DG sets to reduce air pollution. Registration is legally required and non-compliance can result in penalties, operational restrictions, or even forced shutdown of non-compliant equipment.'
    },
    {
      question: 'What documentation is required for CQAM registration?',
      answer: 'Required documentation typically includes technical specifications of the DG set (make, model, capacity, year of manufacture), emissions test reports from authorized laboratories, compliance certificates from manufacturers, site layout plans showing installation location, chimney/stack height details, air pollution control device specifications, and completed application forms. Our service handles the collection, verification, and submission of all necessary documents.'
    },
    {
      question: 'How long does the CQAM registration process take?',
      answer: 'The timeline varies based on several factors including location, DG capacity, and current regulatory workload. Typically, the process takes 4-8 weeks from initial assessment to final approval. Our service includes regular status updates and expedited processing where possible. For urgent cases, we can sometimes arrange priority handling with regulatory authorities based on our established relationships.'
    },
    {
      question: 'What happens if my existing DG set doesn\'t meet the current emission standards?',
      answer: 'If your equipment doesn\'t meet current standards, we provide several pathways to compliance: 1) Retrofitting with emission control devices where feasible, 2) Developing a time-bound upgrade plan that may be accepted by authorities, 3) Providing documentation for exemptions based on equipment age or usage patterns where applicable, or 4) Assisting with replacement planning for non-compliant units. Our goal is to find the most cost-effective compliance solution.'
    },
    {
      question: 'Is periodic renewal required for CQAM registration?',
      answer: 'Yes, CQAM registration typically requires renewal every 1-3 years depending on the category of your equipment and local regulations. Our service includes renewal reminders, streamlined re-application processes, and coordination of any required re-testing or inspections. We maintain comprehensive records of your previous submissions to simplify future renewals.'
    },
  ];

  return (
    <ServicePageTemplate
      title="CQAM Registration & Guidance"
      subtitle="Expert regulatory compliance support for diesel generator owners"
      description="Navigate complex environmental regulations with confidence. Our comprehensive CQAM registration service handles the entire process from documentation preparation and emissions testing to application submission and follow-up, ensuring your diesel generators remain compliant with the latest pollution control norms."
      features={features}
      benefits={benefits}
      imageGallery={imageGallery}
      faqs={faqs}
      callToAction={{
        title: "Ensure Your Regulatory Compliance",
        description: "Speak with our compliance experts to simplify your CQAM registration process.",
        buttonText: "Schedule a Compliance Consultation",
        buttonLink: "#footer"
      }}
    />
  );
};

export default CQAMRegistrationPage;