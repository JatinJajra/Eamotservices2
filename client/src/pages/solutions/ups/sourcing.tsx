import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield, Zap, BarChart3, Clock, Server, Battery, AlertCircle, Laptop } from 'lucide-react';

const UPSSourcingPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Premium Quality Selection',
      description: 'We source only from leading global manufacturers known for reliability, efficiency, and innovation in UPS technology.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Load-Matched Solutions',
      description: 'Our technical team analyzes your power requirements to recommend optimally sized UPS systems, avoiding under or over-capacity issues.'
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: 'Energy Efficiency Focus',
      description: 'We prioritize high-efficiency models with technologies like ECO mode, double conversion, and modular scaling to reduce energy consumption.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Rapid Procurement Process',
      description: 'Streamlined sourcing and logistics ensures quick delivery and installation, minimizing downtime for your critical operations.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Compatibility',
      description: 'Solutions designed to work with various IT setups, power distribution systems, and building infrastructures.'
    },
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Advanced Battery Technologies',
      description: 'Options include traditional VRLA, modern Lithium-ion batteries, and other alternatives based on your runtime requirements and budget.'
    },
  ];

  const benefits = [
    {
      title: 'Uninterrupted Business Operations',
      description: 'Protect critical equipment and prevent costly downtime with reliable power backup that activates instantly during outages and power quality issues.'
    },
    {
      title: 'Equipment Protection',
      description: 'Safeguard sensitive electronics from power surges, spikes, and other electrical anomalies that can cause damage and reduce equipment lifespan.'
    },
    {
      title: 'Scalable Growth Path',
      description: 'Modular UPS solutions allow for scaling capacity as your business grows, avoiding complete system replacement and optimizing your investment.'
    },
    {
      title: 'Lower Total Cost of Ownership',
      description: 'Higher efficiency models reduce electricity consumption, while proper sizing and preventive maintenance extend system lifespan and reduce operational costs.'
    },
    {
      title: 'Enhanced Power Quality',
      description: 'Modern UPS systems condition incoming power, providing stable, clean electricity that improves the performance and reliability of connected equipment.'
    },
    {
      title: 'Centralized Power Management',
      description: 'IoT-enabled UPS systems integrate with our monitoring platform for proactive maintenance, remote management, and comprehensive power analytics.'
    },
  ];

  const imageGallery = [
    {
      url: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern UPS system installation',
      caption: 'Modular UPS installation for enterprise data center'
    },
    {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'UPS control panel',
      caption: 'Advanced monitoring and control interface'
    },
    {
      url: 'https://images.unsplash.com/photo-1613219413642-38a67f3a3fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      alt: 'Server rack with UPS',
      caption: 'Rack-mounted UPS protecting critical IT infrastructure'
    },
  ];

  const faqs = [
    {
      question: 'How do I determine the right UPS capacity for my needs?',
      answer: 'UPS sizing depends on your total connected load (in VA or Watts), critical equipment power requirements, desired runtime during outages, and potential future growth. Our assessment process includes load profiling using power analyzers, evaluating starting currents of equipment, and analyzing your power quality history. We typically recommend sizing your UPS at 125-130% of your current peak load to accommodate growth and ensure optimal efficiency.'
    },
    {
      question: 'What is the difference between online and line-interactive UPS systems?',
      answer: 'Online (double-conversion) UPS systems continuously convert incoming AC power to DC and back to AC, providing complete isolation from the power source and zero transfer time during outages. Line-interactive UPS systems filter incoming power and switch to battery only when needed, offering less protection but higher energy efficiency. We recommend online UPS for critical applications (data centers, healthcare, industrial processes) and line-interactive for less critical uses (small offices, point-of-sale systems).'
    },
    {
      question: 'How long can a UPS power my equipment during an outage?',
      answer: 'Runtime depends on battery capacity and connected load. Standard UPS configurations typically provide 10-15 minutes at full load, though this can be extended with additional battery modules. For critical applications requiring hours of backup, we can design solutions with extended battery banks or hybrid systems incorporating generators. We can calculate precise runtime estimates based on your equipment specifications.'
    },
    {
      question: 'What maintenance does a UPS system require?',
      answer: 'Regular maintenance includes battery health testing, load testing, firmware updates, cleaning internal components, inspecting connections, and calibrating monitoring systems. VRLA batteries typically need replacement every 3-5 years, while lithium-ion may last 7-10 years. Our comprehensive maintenance plans include quarterly or bi-annual preventive visits and 24/7 emergency support to maximize system reliability and lifespan.'
    },
    {
      question: 'Can UPS systems be integrated with building management systems?',
      answer: 'Yes, modern UPS systems offer various communication protocols (SNMP, Modbus, BACnet) for integration with building management systems. This allows for centralized monitoring, automated alerts, and coordinated emergency responses. Our solutions include integration services to connect UPS monitoring with your existing building management infrastructure or our cloud-based monitoring platform.'
    },
  ];

  return (
    <ServicePageTemplate
      title="UPS System Sourcing"
      subtitle="Reliable uninterruptible power supply solutions for critical operations"
      description="Protect your critical operations with enterprise-grade UPS systems that provide clean, continuous power. Our sourcing service includes requirements analysis, system selection, delivery, installation, and integration with your infrastructure."
      features={features}
      benefits={benefits}
      imageGallery={imageGallery}
      faqs={faqs}
      callToAction={{
        title: "Ensure Uninterrupted Power for Your Critical Systems",
        description: "Speak with our power solutions experts about finding the perfect UPS system for your requirements.",
        buttonText: "Request a Consultation",
        buttonLink: "#footer"
      }}
    />
  );
};

export default UPSSourcingPage;