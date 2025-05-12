import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ShoppingCart, CheckSquare, FileCheck, Package, Award, Scale } from 'lucide-react';

const DFKProcurementPage: React.FC = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Vendor Identification & Evaluation',
      description: 'Comprehensive research and assessment of dual fuel kit manufacturers with rigorous evaluation of quality and performance.'
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: 'Technical Specification Development',
      description: 'Creation of detailed technical specifications for dual fuel kits based on your specific generator models and requirements.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Competitive Bid Management',
      description: 'Organization and evaluation of vendor proposals to ensure optimal pricing, quality, and support services.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Compliance Verification',
      description: 'Confirmation that selected equipment meets all regulatory requirements, safety standards, and certification needs.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Quality Inspection',
      description: 'Rigorous pre-delivery inspection and testing protocols to ensure kits meet specified quality and performance standards.'
    },
    {
      icon: <Package className="h-5 w-5 text-primary" />,
      title: 'Logistics Management',
      description: 'Comprehensive delivery coordination including customs clearance, transportation, and on-site delivery verification.'
    },
  ];

  const benefits = [
    {
      title: 'Quality Assurance',
      description: 'Access high-quality, reliable dual fuel kits through our extensive vendor evaluation and quality control processes.'
    },
    {
      title: 'Cost Optimization',
      description: 'Obtain competitive pricing and favorable terms through our volume purchasing relationships and negotiation expertise.'
    },
    {
      title: 'Technical Compatibility',
      description: 'Ensure perfect compatibility between your generators and the dual fuel kits through precise specification development.'
    },
    {
      title: 'Reduced Procurement Complexity',
      description: 'Eliminate the complexity of sourcing specialized equipment with our streamlined procurement management.'
    },
    {
      title: 'Simplified Documentation',
      description: 'Receive complete, organized documentation for all equipment including specifications, certifications, and warranty information.'
    },
    {
      title: 'Warranty Protection',
      description: 'Secure comprehensive warranty coverage and support agreements as part of the procurement process.'
    },
  ];

  return (
    <ServicePageTemplate
      title="DFK Procurement"
      subtitle="Expert Dual Fuel Kit Selection & Acquisition"
      description="Our comprehensive dual fuel kit procurement service helps you identify, evaluate, and acquire high-quality conversion systems that perfectly match your generator specifications and operational needs."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-procurement.jpg"
      callToAction={{
        title: "Ready to Source Your Dual Fuel Solution?",
        description: "Contact our procurement specialists to begin the selection and acquisition process for your dual fuel conversion kits.",
        buttonText: "Start Procurement Process",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DFKProcurementPage;