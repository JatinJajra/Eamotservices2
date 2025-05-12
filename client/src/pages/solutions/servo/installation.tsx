import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Cable, ClipboardList, Zap, BookOpen, Shield } from 'lucide-react';

const ServoInstallationPage: React.FC = () => {
  const features = [
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: 'Site Assessment & Planning',
      description: 'Comprehensive evaluation of installation location with detailed installation planning and preparation.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians with specialized experience in servo stabilizer systems.'
    },
    {
      icon: <Cable className="h-5 w-5 text-primary" />,
      title: 'Electrical Integration',
      description: 'Proper electrical connection and integration with existing power distribution infrastructure and protection systems.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Commissioning & Testing',
      description: 'Comprehensive stabilizer performance testing and verification under various load and input voltage conditions.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Operator Training',
      description: 'On-site training for facility personnel on stabilizer operation, monitoring, and basic troubleshooting procedures.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Documentation & Handover',
      description: 'Complete installation documentation, test reports, and warranty registration with formal handover process.'
    },
  ];

  const benefits = [
    {
      title: 'Optimal Performance',
      description: 'Ensure your stabilizer delivers specified performance through proper installation and commissioning by qualified technicians.'
    },
    {
      title: 'Safety Compliance',
      description: 'Maintain electrical safety compliance with professional installation meeting all relevant codes and standards.'
    },
    {
      title: 'Warranty Protection',
      description: 'Protect manufacturer warranty coverage through certified installation following all specified procedures and requirements.'
    },
    {
      title: 'Reduced Downtime',
      description: 'Minimize operational disruption with efficient installation planning and execution by experienced professionals.'
    },
    {
      title: 'Equipment Protection',
      description: 'Ensure proper integration with existing systems for comprehensive equipment protection and performance optimization.'
    },
    {
      title: 'Operational Readiness',
      description: 'Begin operation with confidence through thorough commissioning, testing, and operator training on new equipment.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Installation"
      subtitle="Professional Stabilizer Implementation"
      description="Our comprehensive servo stabilizer installation service ensures your voltage stabilization equipment is properly installed, commissioned, and integrated with your power infrastructure for optimal performance and reliability."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-installation.jpg"
      callToAction={{
        title: "Ready for Professional Installation?",
        description: "Contact our installation team to discuss your servo stabilizer installation requirements and schedule service.",
        buttonText: "Schedule Installation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoInstallationPage;