import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Tool, Clock, AlertTriangle, FileCheck, CheckSquare, Calendar } from 'lucide-react';

const DFKMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: 'Preventive Maintenance Programs',
      description: 'Customized maintenance schedules optimized for dual fuel systems with comprehensive service protocols and guidelines.'
    },
    {
      icon: <Tool className="h-5 w-5 text-primary" />,
      title: 'Professional Service Execution',
      description: 'Expert maintenance services performed by technicians specifically trained in dual fuel system maintenance and optimization.'
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: 'System Calibration Verification',
      description: 'Regular verification and adjustment of fuel mixture ratios and control parameters to maintain optimal performance.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Troubleshooting & Diagnostics',
      description: 'Advanced diagnostic services to identify and resolve performance issues, operational anomalies, or component failures.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Emergency Response Services',
      description: 'Rapid response protocols for urgent maintenance needs with guaranteed response times and resolution commitments.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Documentation',
      description: 'Detailed maintenance records, service reports, and performance logs for warranty compliance and operational tracking.'
    },
  ];

  const benefits = [
    {
      title: 'Sustained Performance',
      description: 'Maintain optimal dual fuel substitution rates and operational efficiency throughout the system lifecycle.'
    },
    {
      title: 'Extended Equipment Life',
      description: 'Maximize the service life of both your generators and dual fuel components through proper maintenance.'
    },
    {
      title: 'Minimized Downtime',
      description: 'Prevent unexpected failures and performance issues through proactive maintenance and rapid issue resolution.'
    },
    {
      title: 'Continued Cost Savings',
      description: 'Ensure your dual fuel systems continue to deliver the maximum possible fuel cost reduction throughout their lifecycle.'
    },
    {
      title: 'Warranty Protection',
      description: 'Maintain equipment warranty coverage through documented professional maintenance performed to manufacturer specifications.'
    },
    {
      title: 'Operational Confidence',
      description: 'Operate your dual fuel systems with complete confidence in their reliability, efficiency, and performance.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Post-conversion Maintenance"
      subtitle="Specialized Dual Fuel System Support"
      description="Our comprehensive maintenance services ensure your dual fuel systems continue to perform optimally throughout their lifecycle, maximizing efficiency, reliability, and return on investment."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-maintenance.jpg"
      callToAction={{
        title: "Ready to Maintain Your Dual Fuel Performance?",
        description: "Contact our maintenance team to develop a customized service program for your dual fuel systems.",
        buttonText: "Get Maintenance Support",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DFKMaintenancePage;