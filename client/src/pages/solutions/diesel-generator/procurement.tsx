import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ShieldCheck, Timer, Flame, BarChart3, Settings, Truck, FileText, Zap } from 'lucide-react';

const DGProcurementPage: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'CPCB IV+ Compliant Models',
      description: 'All diesel generators we procure are fully compliant with the latest CPCB Stage IV+ emission norms, meeting or exceeding environmental regulations.'
    },
    {
      icon: <Timer className="h-5 w-5 text-primary" />,
      title: 'Quick Delivery & Installation',
      description: 'Experience rapid procurement and installation with our streamlined process, getting your power solution up and running with minimal downtime.'
    },
    {
      icon: <Flame className="h-5 w-5 text-primary" />,
      title: 'Fuel Efficient Performance',
      description: 'Our selected DG models offer industry-leading fuel efficiency, reducing operational costs while maintaining reliable power output.'
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: 'Load Assessment Services',
      description: 'Expert analysis of your power requirements to determine the optimal DG capacity, preventing under or over-sizing issues.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Customization Options',
      description: 'Tailor your DG solution with acoustic enclosures, automated control systems, and synchronization capabilities to match specific site requirements.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'IoT-Ready Monitoring',
      description: 'All units come pre-configured for remote monitoring through our EAMOT smart monitoring platform, enabling predictive maintenance.'
    },
  ];

  const benefits = [
    {
      title: 'Environmental Compliance',
      description: 'Stay ahead of regulatory requirements with CPCB IV+ compliant generators that reduce harmful emissions and environmental impact.'
    },
    {
      title: 'Reduced Total Cost of Ownership',
      description: 'Benefit from lower operational costs through fuel-efficient engines, extended service intervals, and proactive maintenance scheduling.'
    },
    {
      title: 'Extended Service Life',
      description: 'Premium quality generators from trusted manufacturers, designed for durability and reliable performance over an extended operational lifespan.'
    },
    {
      title: 'Tailored Power Solutions',
      description: 'Get exactly what you need with customized DG sets that match your specific load requirements, space constraints, and operational needs.'
    },
    {
      title: 'Emergency Response Readiness',
      description: 'Ensure business continuity with reliable backup power systems that activate instantly during power outages.'
    },
    {
      title: 'Comprehensive Documentation',
      description: 'Receive complete technical documentation, compliance certificates, and warranty information for smooth operations and maintenance.'
    },
  ];

  const imageGallery = [
    {
      url: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern CPCB IV+ diesel generator installation',
      caption: '500 kVA CPCB IV+ DG installation for manufacturing facility'
    },
    {
      url: 'https://images.unsplash.com/photo-1590507621108-433608c97823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'DG control panel',
      caption: 'Advanced control system with remote monitoring capabilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22b4bd3b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Multiple synchronized generators',
      caption: 'Synchronized DG setup for data center with N+1 redundancy'
    },
  ];

  const faqs = [
    {
      question: 'What is CPCB IV+ compliance and why is it important?',
      answer: 'CPCB (Central Pollution Control Board) Stage IV+ standards are the latest emission norms for diesel generators in India. These regulations limit particulate matter, NOx, CO, and HC emissions from DG exhausts. Compliance is legally mandatory and helps reduce environmental pollution and potential regulatory penalties.'
    },
    {
      question: 'How do I determine the right size DG for my facility?',
      answer: 'The correct sizing depends on several factors including connected load, starting load requirements, future expansion plans, and desired redundancy. Our technical team conducts a comprehensive load analysis, examining your electrical demand patterns to recommend the optimal capacity. Generally, we recommend sizing at 70-80% of maximum load for best efficiency and longevity.'
    },
    {
      question: 'What is the typical delivery and installation timeframe?',
      answer: 'For standard capacities (up to 500kVA), we typically deliver within 2-3 weeks from order confirmation. Installation and commissioning usually takes 2-4 days depending on site conditions. For larger or customized units, the timeline may extend to 4-6 weeks. We can expedite delivery in emergency situations.'
    },
    {
      question: 'What maintenance support is provided after procurement?',
      answer: 'All DG units come with manufacturer warranty (typically 2 years or 5000 hours) and we offer comprehensive AMC packages that include scheduled maintenance, emergency breakdown service, and remote monitoring. Our preventive maintenance program follows manufacturer guidelines while optimizing for your specific usage patterns.'
    },
    {
      question: 'Can existing older DG sets be upgraded to CPCB IV+ compliance?',
      answer: 'In most cases, older DG sets cannot be directly upgraded to meet CPCB IV+ norms as these standards require fundamental changes to engine design and exhaust systems. However, we offer trade-in programs where we can evaluate your existing unit and provide credits toward a new compliant model.'
    },
  ];

  return (
    <ServicePageTemplate
      title="DG Procurement (CPCB IV+ Compliant)"
      subtitle="Industry-leading diesel generators that meet the latest emission norms"
      description="Reliable, fuel-efficient, and environmentally compliant diesel generators precisely matched to your power requirements. Our comprehensive procurement service includes capacity assessment, installation, commissioning, and compliance documentation."
      features={features}
      benefits={benefits}
      imageGallery={imageGallery}
      faqs={faqs}
      callToAction={{
        title: "Ready to Upgrade Your Power Backup Solution?",
        description: "Our team of experts is ready to help you select the perfect diesel generator for your requirements.",
        buttonText: "Get a Customized Quote",
        buttonLink: "#footer"
      }}
    />
  );
};

export default DGProcurementPage;