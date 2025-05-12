import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Gauge, Cpu, Settings, FileCheck, Clock } from 'lucide-react';

const DGOverhaulPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Assessment',
      description: 'Detailed evaluation of generator condition with performance testing and component inspection to determine overhaul scope.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Engine Reconditioning',
      description: 'Complete engine overhaul including cylinder head reconditioning, piston replacement, and crankshaft inspection and balancing.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Fuel System Overhaul',
      description: 'Comprehensive fuel system servicing including injector reconditioning, pump calibration, and fuel line replacement.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Alternator Overhaul',
      description: 'Complete alternator service including winding inspection, bearing replacement, and diode/AVR testing and replacement.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Control System Upgrade',
      description: 'Modernization of control systems with latest technology integration and compatibility enhancements.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Performance Validation',
      description: 'Comprehensive post-overhaul testing with performance verification under various load conditions and operational parameters.'
    },
  ];

  const benefits = [
    {
      title: 'Extended Service Life',
      description: 'Significantly extend the operational lifespan of your diesel generator system through comprehensive component restoration.'
    },
    {
      title: 'Improved Reliability',
      description: 'Restore like-new reliability with complete system overhaul addressing all wear components and potential failure points.'
    },
    {
      title: 'Enhanced Performance',
      description: 'Regain original performance specifications with comprehensive reconditioning of critical engine and alternator components.'
    },
    {
      title: 'Increased Efficiency',
      description: 'Improve fuel efficiency and reduce emissions through restoration of optimal combustion and operating parameters.'
    },
    {
      title: 'Cost-Effective Alternative',
      description: 'Achieve substantial cost savings compared to complete generator replacement while extending useful service life.'
    },
    {
      title: 'Minimal Disruption',
      description: 'Minimize operational disruption with carefully planned overhaul scheduling and temporary power arrangements if needed.'
    },
  ];

  return (
    <ServicePageTemplate
      title="DG Overhaul & Repairs"
      subtitle="Comprehensive Generator Restoration"
      description="Our diesel generator overhaul and repair service provides complete restoration of aging or underperforming generator systems, extending operational lifespan and restoring peak performance and reliability to your critical power infrastructure."
      features={features}
      benefits={benefits}
      heroImage="/images/dg-overhaul.jpg"
      callToAction={{
        title: "Ready to Restore Your Generator Performance?",
        description: "Contact our overhaul specialists to discuss your generator restoration requirements and schedule an assessment.",
        buttonText: "Schedule Overhaul Assessment",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DGOverhaulPage;