import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Settings, BarChart4, Cpu, Server, Tool, Shield } from 'lucide-react';

const RECDIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Professional RECD Installation',
      description: 'Expert installation of emission control devices by certified technicians with minimal operational disruption.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Monitoring System Integration',
      description: 'Seamless connection of emission monitoring sensors with data acquisition and reporting systems for comprehensive visibility.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Control System Configuration',
      description: 'Professional setup and calibration of control parameters to optimize emission reduction while maintaining performance.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Data Transmission Setup',
      description: 'Configuration of secure, reliable data transmission to pollution control board servers with redundant communication paths.'
    },
    {
      icon: <Tool className="h-5 w-5 text-primary" />,
      title: 'Post-Installation Testing',
      description: 'Comprehensive performance and compliance testing following installation to ensure regulatory standards are met.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'System Certification',
      description: 'Management of all required certifications and regulatory approvals following installation and commissioning.'
    },
  ];

  const benefits = [
    {
      title: 'Minimized Operational Disruption',
      description: 'Our efficient installation process ensures minimal impact on your power generation capabilities during implementation.'
    },
    {
      title: 'Optimized System Performance',
      description: 'Professional integration preserves generator performance while achieving emission reduction requirements.'
    },
    {
      title: 'Reliable Compliance',
      description: 'Properly installed and integrated systems ensure consistent compliance with regulatory requirements.'
    },
    {
      title: 'Extended Equipment Lifespan',
      description: 'Expert installation ensures emission control systems work harmoniously with generators, avoiding damage or degradation.'
    },
    {
      title: 'Comprehensive Documentation',
      description: 'Complete installation records and certification documentation for regulatory submissions and future reference.'
    },
    {
      title: 'Single-Source Responsibility',
      description: 'Unified accountability for installation, integration, and initial compliance ensures a seamless implementation process.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Installation & Integration"
      subtitle="Professional RECD System Implementation"
      description="Our expert installation and integration services ensure your Real-time Emission Control Devices (RECD) are properly implemented, configured, and certified for regulatory compliance with minimal operational disruption."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-installation.jpg"
      callToAction={{
        title: "Ready for Professional RECD Implementation?",
        description: "Contact our integration specialists to discuss your installation requirements and schedule an initial assessment.",
        buttonText: "Request Installation Services",
        buttonLink: "/contact",
      }}
    />
  );
};

export default RECDIntegrationPage;