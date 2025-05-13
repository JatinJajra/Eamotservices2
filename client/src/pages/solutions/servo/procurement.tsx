import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Search, ShoppingCart, Scale, Award, Truck, FileCheck } from 'lucide-react';

const ServoProcurementPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: 'Expert Market Research & Analysis',
      description: 'We conduct thorough evaluations of leading stabilizer manufacturers to identify the perfect balance of technology, performance, and value for your unique requirements.'
    },
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: 'Custom Specification Development',
      description: 'Our engineers create precise procurement specifications tailored to your specific site conditions, load characteristics, and critical equipment protection needs.'
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
      title: 'Strategic Vendor Selection',
      description: 'We partner only with manufacturers who have demonstrated excellence in product quality, innovation, reliability, and responsive after-sales support.'
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: 'Competitive Quotation Analysis',
      description: 'Our technical experts conduct detailed bid comparisons, negotiating the best terms while ensuring all technical requirements are met without compromise.'
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: 'Seamless Logistics Management',
      description: 'We handle all delivery logistics, including scheduling, transportation, customs clearance (if applicable), and secure site delivery coordination.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Rigorous Quality Verification',
      description: 'Our pre-dispatch inspection and testing protocols ensure your stabilizer meets all specified performance parameters before it leaves the factory.'
    }
  ];

  const benefits = [
    {
      title: 'Guaranteed Premium Quality',
      description: 'Avoid costly equipment damage and downtime with our thoroughly vetted, high-performance stabilizers that consistently exceed industry standards.'
    },
    {
      title: 'Perfect Technical Alignment',
      description: 'Experience optimal protection and efficiency with stabilizers precisely matched to your voltage conditions, load requirements, and critical equipment specifications.'
    },
    {
      title: 'Significant Cost Savings',
      description: 'Save up to 15-20% on procurement costs through our volume purchasing power, manufacturer relationships, and expert negotiation strategies.'
    },
    {
      title: 'Stress-Free Procurement Experience',
      description: 'Eliminate the headaches of technical vetting, vendor management, and quality control with our comprehensive end-to-end procurement solution.'
    },
    {
      title: 'Comprehensive Risk Protection',
      description: 'Sleep easier knowing your investment is protected through our thorough technical assessment, quality verification, and performance validation protocols.'
    },
    {
      title: 'Accelerated Implementation',
      description: 'Reduce procurement timelines by up to 40% with our streamlined processes, established vendor networks, and proactive project management approach.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Procurement"
      subtitle="Premium Voltage Protection Solutions"
      description="Transform your power quality management with our elite servo stabilizer procurement service. We eliminate the complexities and risks of equipment sourcing, delivering meticulously selected, performance-verified stabilizers that safeguard your critical equipment."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-procurement.jpg"
      callToAction={{
        title: "Protect Your Valuable Equipment Today",
        description: "Our procurement experts are ready to develop a customized stabilizer solution that meets your exact technical needs and budget parameters with no hassle.",
        buttonText: "Get Your Perfect Stabilizer",
        buttonLink: "/contact"
      }}
    />
  );
};

export default ServoProcurementPage;