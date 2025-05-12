import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Battery, Calculator, ShoppingCart, Timer, Clock, FileCheck } from 'lucide-react';

const UPSBatteryPage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'Precise Battery Sizing',
      description: 'Advanced load calculations and runtime analysis to determine optimal battery capacity for your specific UPS requirements.'
    },
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Technology Selection',
      description: 'Expert evaluation of battery technologies (VRLA, Li-ion, etc.) based on your space, budget, lifecycle, and performance needs.'
    },
    {
      icon: <Timer className="h-5 w-5 text-primary" />,
      title: 'Runtime Optimization',
      description: 'Precise calculation of battery configurations to achieve desired runtime while balancing cost and space considerations.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Quality Battery Sourcing',
      description: 'Procurement of high-quality batteries from reputable manufacturers with optimal price-performance characteristics.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Lifecycle Planning',
      description: 'Comprehensive battery lifecycle analysis with replacement scheduling recommendations for budgeting and continuity planning.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Installation & Testing',
      description: 'Professional installation with comprehensive testing to verify capacity, performance, and integration with UPS systems.'
    },
  ];

  const benefits = [
    {
      title: 'Optimized Runtime',
      description: 'Ensure your UPS provides exactly the backup time required for your critical operations without costly over-specification.'
    },
    {
      title: 'Enhanced Reliability',
      description: 'Improve UPS system reliability with properly sized, high-quality batteries that match your operational requirements.'
    },
    {
      title: 'Extended Battery Life',
      description: 'Maximize battery service life through proper specification, installation, and maintenance recommendations.'
    },
    {
      title: 'Space Utilization',
      description: 'Optimize battery installations to balance space constraints with capacity requirements for efficient facility planning.'
    },
    {
      title: 'Cost Optimization',
      description: 'Select the most cost-effective battery solution considering both initial investment and total cost of ownership.'
    },
    {
      title: 'Future-Proofed Planning',
      description: 'Develop comprehensive battery replacement strategies with predictable budgeting and minimal operational disruption.'
    },
  ];

  return (
    <ServicePageTemplate
      title="UPS Battery Sizing & Supply"
      subtitle="Expert Battery Solutions for Critical Power"
      description="Our comprehensive battery sizing and supply service ensures your UPS systems have the optimal power storage solution to meet your runtime requirements, space constraints, and budget considerations."
      features={features}
      benefits={benefits}
      heroImage="/images/ups-battery.jpg"
      callToAction={{
        title: "Ready to Optimize Your UPS Batteries?",
        description: "Contact our battery specialists to begin the assessment and selection process for your UPS battery needs.",
        buttonText: "Start Battery Consultation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default UPSBatteryPage;