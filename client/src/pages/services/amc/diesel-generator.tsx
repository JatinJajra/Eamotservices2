import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, FileCheck, Hammer as ToolIcon, Battery, CheckSquare, Zap } from 'lucide-react';

const DGAMCPage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Preventive Maintenance',
      description: 'Regular scheduled service following manufacturer specifications, including all mechanical, electrical, and electronic components of your DG set.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: '24/7 Emergency Response',
      description: 'Round-the-clock technical support with guaranteed response times for emergency breakdowns to minimize downtime of critical power systems.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Remote Monitoring & Diagnostics',
      description: 'IoT-enabled monitoring for real-time performance tracking, early fault detection, and predictive maintenance to prevent failures.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Detailed Reporting & Documentation',
      description: 'Comprehensive service reports, performance analysis, and maintenance history for compliance requirements and operational optimization.'
    },
    {
      icon: <ToolIcon className="h-5 w-5 text-primary" />,
      title: 'Genuine Spare Parts Management',
      description: 'Priority access to OEM-certified spare parts with inventory management to ensure quick repairs and maintain warranty validity.'
    },
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Battery Maintenance Program',
      description: 'Specialized battery care including load testing, terminal maintenance, electrolyte checks, and timely replacement recommendations.'
    },
  ];

  const benefits = [
    {
      title: 'Maximum Equipment Uptime',
      description: 'Regular maintenance and quick emergency response ensures your diesel generators are always ready when you need them most.'
    },
    {
      title: 'Extended Equipment Lifespan',
      description: 'Proper maintenance can extend the operational life of your DG sets by 30-40%, maximizing your capital investment.'
    },
    {
      title: 'Optimized Fuel Efficiency',
      description: 'Properly maintained engines consume less fuel, reducing operational costs and environmental impact while maintaining performance.'
    },
    {
      title: 'Predictable Maintenance Budget',
      description: 'Fixed AMC costs make budgeting easier and more predictable compared to reactive maintenance approaches.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Our service includes emissions testing and documentation to ensure your DG sets remain compliant with CPCB and other environmental regulations.'
    },
    {
      title: 'Reduced Risk of Major Failures',
      description: 'Early detection of potential issues prevents catastrophic failures that could lead to costly repairs or replacements.'
    },
  ];

  const imageGallery = [
    {
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Technician performing DG maintenance',
      caption: 'EAMOT certified technician performing quarterly preventive maintenance'
    },
    {
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'DG control panel maintenance',
      caption: 'Control system diagnostics and calibration'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Diesel generator maintenance',
      caption: 'Major overhaul of 750 kVA generator in progress'
    },
  ];

  const faqs = [
    {
      question: 'What does a typical Diesel Generator AMC include?',
      answer: 'Our comprehensive AMC includes scheduled preventive maintenance visits (monthly, quarterly, and annual), 24/7 emergency breakdown support, oil and filter changes, fuel system maintenance, cooling system service, battery maintenance, control panel checks, load testing, emissions testing, and detailed documentation. We also include remote monitoring services for real-time performance tracking and early fault detection.'
    },
    {
      question: 'How frequently will preventive maintenance be performed?',
      answer: 'Our standard AMC includes monthly basic checks, quarterly comprehensive maintenance, and annual major inspections. The monthly visits focus on fluid levels, visual inspections, and basic operational checks. Quarterly maintenance includes oil and filter changes, battery service, and system testing. Annual service includes more in-depth inspections, load bank testing, and emissions verification. We can customize the schedule based on your operational requirements and manufacturer recommendations.'
    },
    {
      question: 'What is your emergency response time for breakdowns?',
      answer: 'Our standard AMC guarantees a response time of 4 hours for urban locations and 8 hours for remote sites. We offer premium AMC options with faster response times (as quick as 2 hours) for critical applications. Our 24/7 helpdesk provides immediate troubleshooting assistance, and our technicians maintain vehicle-stocked spare parts kits for common repairs to minimize downtime.'
    },
    {
      question: 'Are spare parts included in the AMC cost?',
      answer: 'Our AMC packages come in three tiers: Basic (labor only), Standard (labor plus consumables like filters and oil), and Comprehensive (labor, consumables, and critical parts). Major components like alternators or engine parts are typically covered under separate warranty provisions or can be included in customized contracts. We maintain extensive parts inventories for all major DG brands to ensure rapid repairs.'
    },
    {
      question: 'How do you ensure compliance with emissions regulations?',
      answer: 'Our maintenance protocols include regular emissions testing to ensure compliance with CPCB norms. We document all test results and maintain emissions records for regulatory inspections. For older generators, we can recommend and implement retrofits or upgrades to improve emissions performance. Our technicians are trained in the latest environmental regulations and compliance requirements.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Diesel Generator AMC"
      subtitle="Comprehensive annual maintenance contracts for reliable DG performance"
      description="Ensure the reliability, efficiency, and longevity of your diesel generators with our tailored maintenance programs. Our AMCs include preventive maintenance, emergency support, remote monitoring, and comprehensive documentation to keep your power systems running at peak performance."
      features={features}
      benefits={benefits}
      imageGallery={imageGallery}
      faqs={faqs}
      callToAction={{
        title: "Protect Your Power Infrastructure",
        description: "Contact us today to discuss a customized maintenance program for your diesel generators.",
        buttonText: "Request an AMC Quote",
        buttonLink: "#footer"
      }}
    />
  );
};

export default DGAMCPage;