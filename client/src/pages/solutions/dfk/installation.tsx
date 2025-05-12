import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Tool, Gauge, Cpu, FileCheck, Users, Settings } from 'lucide-react';

const DFKInstallationPage: React.FC = () => {
  const features = [
    {
      icon: <Tool className="h-5 w-5 text-primary" />,
      title: 'Professional Installation',
      description: 'Expert installation of dual fuel kits by certified technicians with specialized experience in DG conversions.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Precise Calibration',
      description: 'Meticulous calibration of gas-diesel mixture ratios across various load conditions for optimal performance and efficiency.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Performance Testing',
      description: 'Comprehensive testing under various load conditions to verify performance, efficiency, and operational stability.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Control System Integration',
      description: 'Seamless integration of dual fuel control systems with existing generator control and monitoring infrastructure.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Documentation & Certification',
      description: 'Complete documentation of installation, calibration parameters, test results, and regulatory compliance certification.'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Operator Training',
      description: 'Comprehensive training for your operations and maintenance staff on dual fuel system operation and basic maintenance.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Performance',
      description: 'Expert installation and calibration ensure maximum diesel substitution rates without compromising generator performance.'
    },
    {
      title: 'Minimal Operational Disruption',
      description: 'Efficient installation process with scheduled implementation to minimize impact on your power generation capabilities.'
    },
    {
      title: 'Extended Equipment Life',
      description: 'Proper installation and calibration protect your generators from damage and ensure optimal long-term operation.'
    },
    {
      title: 'Maximized Fuel Savings',
      description: 'Precise calibration across all load ranges maximizes gas utilization and diesel substitution for optimal cost reduction.'
    },
    {
      title: 'Reliability Assurance',
      description: 'Comprehensive testing and validation ensure dual fuel system reliability under all operational conditions.'
    },
    {
      title: 'Operational Readiness',
      description: 'Complete staff training and documentation ensure your team is fully prepared to operate and maintain the new system.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Installation & Calibration"
      subtitle="Expert Dual Fuel Kit Implementation"
      description="Our professional installation and calibration services ensure your dual fuel conversion kits are properly implemented, optimized, and validated for maximum performance and efficiency."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-installation.jpg"
      callToAction={{
        title: "Ready for Professional DFK Installation?",
        description: "Contact our implementation team to plan your dual fuel conversion installation and calibration process.",
        buttonText: "Schedule Installation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DFKInstallationPage;