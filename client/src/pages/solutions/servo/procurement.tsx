import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, ShoppingCart, Scale, Award, Truck, FileCheck } from 'lucide-react';

const ServoProcurementPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Market Research & Analysis',
      description: 'Comprehensive evaluation of stabilizer manufacturers with detailed comparison of technology options and performance characteristics.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Technical Specification Development',
      description: 'Creation of detailed procurement specifications based on site-specific requirements and equipment protection needs.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Qualification',
      description: 'Identification of reputable vendors with track record of quality stabilizer manufacturing and reliable after-sales support.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Quotation Management',
      description: 'Coordination of vendor quotations with technical and commercial evaluation to ensure optimal value and performance.'
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: 'Logistics Coordination',
      description: 'Management of delivery scheduling, transportation arrangements, and site delivery coordination for stabilizer units.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Quality Assurance',
      description: 'Pre-dispatch inspection and testing verification to ensure stabilizer performance meets specified technical requirements.'
    },
  ];

  const benefits = [
    {
      title: 'Quality Assurance',
      description: 'Access high-quality servo stabilizers from reputable manufacturers with proven performance and reliability.'
    },
    {
      title: 'Technical Compatibility',
      description: 'Ensure stabilizer specifications precisely match your equipment protection requirements and site conditions.'
    },
    {
      title: 'Cost Optimization',
      description: 'Leverage our procurement expertise and vendor relationships to secure optimal pricing and terms.'
    },
    {
      title: 'Simplified Procurement',
      description: 'Eliminate the complexity of technical evaluation and vendor management with our turnkey procurement service.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce procurement risks through expert technical evaluation and pre-delivery quality verification.'
    },
    {
      title: 'Time Efficiency',
      description: 'Streamline the procurement process with our established vendor relationships and procurement expertise.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Procurement"
      subtitle="Quality Voltage Stabilizer Sourcing"
      description="Our comprehensive servo stabilizer procurement service helps you source high-quality, reliable voltage stabilization equipment that precisely matches your technical requirements and budget constraints."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-procurement.jpg"
      callToAction={{
        title: "Ready to Procure Quality Stabilizers?",
        description: "Contact our procurement specialists to discuss your servo stabilizer requirements and begin the sourcing process.",
        buttonText: "Start Procurement Process",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoProcurementPage;