import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Settings, BarChart4, Cpu, Server, Wrench, Shield } from 'lucide-react';

const RECDIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Turn-key RECD Implementation',
      description: 'Our specialized technicians handle every aspect of installation using our proprietary 8-phase methodology that ensures flawless implementation with zero generator downtime.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Monitoring Integration',
      description: 'We seamlessly connect all emission sensors with our state-of-the-art data acquisition systems, providing real-time visibility and advanced analytics through a unified dashboard.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Precision Control System Optimization',
      description: 'Our engineers meticulously calibrate your system using proprietary algorithms that deliver maximum emission reduction while enhancing generator performance by up to 4%.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Military-Grade Data Transmission',
      description: 'Our secure, triple-redundant communication infrastructure ensures 99.99% uptime for PCB data transmission with end-to-end encryption and automatic failover systems.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Rigorous Compliance Verification',
      description: 'Our 78-point testing protocol exceeds regulatory requirements by 200%, ensuring your system not only meets current standards but anticipates future regulatory changes.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Guaranteed Certification Success',
      description: 'Our certification management includes a 100% approval guarantee - we handle all documentation, inspections, and regulatory interactions until your system is fully certified.'
    }
  ];

  const benefits = [
    {
      title: 'Zero Operational Impact Installation',
      description: 'Our revolutionary installation approach maintains 100% generator availability throughout the entire implementation process, eliminating productivity or revenue losses.'
    },
    {
      title: 'Performance Enhancement, Not Compromise',
      description: 'Unlike standard installations that reduce generator efficiency, our advanced integration actually improves fuel efficiency by 2-4% while achieving full emission compliance.'
    },
    {
      title: 'Bulletproof Compliance Guarantee',
      description: "We offer the industry's only written guarantee of continuous regulatory compliance, backed by our 24/7 monitoring and rapid response protocols."
    },
    {
      title: 'Extended Generator Lifetime',
      description: 'Our precision integration methodology has been proven to extend generator operational life by 15-20% by reducing backpressure and optimizing combustion dynamics.'
    },
    {
      title: 'Audit-Ready Documentation Package',
      description: 'Receive our comprehensive digital and physical documentation portfolio that has achieved a 100% first-time approval rate across 500+ regulatory audits.'
    },
    {
      title: 'Simplified Accountability',
      description: 'Eliminate finger-pointing between vendors with our single-source responsibility model that provides one point of contact for all installation, compliance, and performance issues.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Seamless RECD Installation & Integration"
      subtitle="Zero-Downtime Emission Compliance Implementation"
      description="Transform your regulatory compliance journey with our revolutionary installation approach. Unlike traditional integrators that compromise generator performance and require extensive downtime, our proprietary methodology delivers fully certified emission control with enhanced performance and zero operational disruption."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-installation.jpg"
      callToAction={{
        title: "Eliminate Compliance Headaches Forever",
        description: "Join the 500+ organizations that have achieved guaranteed regulatory compliance without sacrificing performance or productivity through our unique implementation approach.",
        buttonText: "Schedule Your Zero-Downtime Implementation",
        buttonLink: "/contact"
      }}
    />
  );
};

export default RECDIntegrationPage;