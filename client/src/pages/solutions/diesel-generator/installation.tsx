import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Truck, ClipboardList, Gauge, BookOpen, Shield } from 'lucide-react';

const DGInstallationPage: React.FC = () => {
  const features = [
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: 'Site Assessment & Planning',
      description: 'Comprehensive evaluation of installation location with detailed installation planning for foundation, ventilation, and exhaust systems.'
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: 'Transportation & Positioning',
      description: 'Specialized equipment transport with professional positioning and placement at the designated installation location.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians with specialized experience in diesel generator systems and emissions compliance.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Commissioning & Testing',
      description: 'Comprehensive performance testing including load testing, emissions verification, and operational parameter confirmation.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Operator Training',
      description: 'On-site training for facility personnel on generator operation, monitoring, and basic maintenance procedures.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Documentation & Handover',
      description: 'Complete installation documentation, test reports, warranty registration, and formal operational handover.'
    },
  ];

  const benefits = [
    {
      title: 'Compliance Assurance',
      description: 'Ensure proper installation meeting all regulatory requirements including noise, emissions, and safety standards.'
    },
    {
      title: 'Optimal Performance',
      description: 'Maximize generator performance and reliability through professional installation and proper system integration.'
    },
    {
      title: 'Warranty Protection',
      description: 'Maintain manufacturer warranty coverage through certified installation following all specified procedures.'
    },
    {
      title: 'Minimal Disruption',
      description: 'Reduce operational disruption with efficient installation planning and execution by experienced professionals.'
    },
    {
      title: 'Safety Compliance',
      description: 'Ensure all safety systems, including fire protection, ventilation, and fuel storage, meet applicable codes and standards.'
    },
    {
      title: 'Operational Readiness',
      description: 'Achieve immediate operational capability through proper commissioning, testing, and operator training.'
    },
  ];

  return (
    <ServicePageTemplate
      title="DG Installation & Shifting"
      subtitle="Professional Generator Implementation"
      description="Our comprehensive diesel generator installation and shifting services ensure your power generation equipment is properly installed, commissioned, and integrated with your electrical infrastructure for optimal performance and reliability."
      features={features}
      benefits={benefits}
      heroImage="/images/dg-installation.jpg"
      callToAction={{
        title: "Ready for Professional DG Installation?",
        description: "Contact our installation team to discuss your diesel generator installation or relocation requirements.",
        buttonText: "Schedule Installation Service",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DGInstallationPage;