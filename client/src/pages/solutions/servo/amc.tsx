import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, Calendar, Settings, Shield } from 'lucide-react';

const ServoAMCPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: 'Scheduled Preventive Maintenance',
      description: 'Regular, manufacturer-recommended preventive maintenance visits with comprehensive system inspections and testing.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Expert Technical Support',
      description: 'Access to certified stabilizer technicians for troubleshooting, guidance, and operational support throughout the contract period.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Performance Calibration',
      description: 'Regular calibration and adjustment of voltage detection and correction circuitry to maintain optimal performance.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Emergency Response Service',
      description: 'Priority emergency response with guaranteed response times for critical issues affecting stabilizer operation.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Parts & Labor Coverage',
      description: 'Comprehensive coverage for replacement parts and labor costs based on the selected service level agreement.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Performance Monitoring',
      description: 'Regular performance analysis and reporting with recommendations for optimization and system improvements.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced System Reliability',
      description: 'Maximize stabilizer system uptime and reliability through proactive maintenance and expert technical support.'
    },
    {
      title: 'Extended Equipment Life',
      description: 'Prolong the service life of your stabilizer systems through professional maintenance and timely component replacement.'
    },
    {
      title: 'Predictable Maintenance Costs',
      description: 'Convert unpredictable emergency repair expenses into manageable, budgeted maintenance costs with AMC coverage.'
    },
    {
      title: 'Priority Support Access',
      description: 'Gain priority access to technical support and emergency services with guaranteed response times.'
    },
    {
      title: 'Minimized Downtime Risk',
      description: 'Reduce the risk of unexpected failures and extended downtime through preventive maintenance and rapid response.'
    },
    {
      title: 'Operational Peace of Mind',
      description: 'Operate with confidence knowing your voltage stabilization infrastructure is professionally maintained and supported.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Annual Maintenance Contract"
      subtitle="Comprehensive Stabilizer Support & Maintenance"
      description="Our Servo Stabilizer Annual Maintenance Contract (AMC) provides complete maintenance coverage and technical support for your voltage stabilization systems, ensuring maximum reliability and performance for your power quality infrastructure."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-amc.jpg"
      callToAction={{
        title: "Ready to Protect Your Stabilizer Investment?",
        description: "Contact our service team to discuss AMC options tailored to your specific stabilizer maintenance requirements.",
        buttonText: "Explore AMC Options",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoAMCPage;