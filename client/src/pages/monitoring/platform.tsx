import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { Globe, Shield, Users, Devices, Smartphone, Cloud } from 'lucide-react';

const PlatformMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: 'Unified Monitoring Platform',
      description: 'Centralized monitoring solution for all power equipment types with integrated dashboard views and cross-device analytics.'
    },
    {
      icon: <Devices className="h-5 w-5 text-primary" />,
      title: 'Multi-device Compatibility',
      description: 'Responsive design with optimized interfaces for desktop, tablet, and mobile devices for anywhere, anytime monitoring.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Enterprise-grade Security',
      description: 'End-to-end encryption, role-based access control, and comprehensive audit trails for maximum data protection.'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Multi-tenant Architecture',
      description: 'Secure separation of client data with organization-specific dashboards and customized reporting capabilities.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud & On-premises Options',
      description: 'Flexible deployment options with both cloud-hosted SaaS and on-premises solutions to meet diverse security requirements.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Application',
      description: 'Native mobile applications for iOS and Android with push notifications and offline capabilities for field technicians.'
    }
  ];

  const benefits = [
    {
      title: 'Operational Simplification',
      description: 'Eliminate monitoring silos with a unified platform that integrates all power systems monitoring into a single solution.'
    },
    {
      title: 'Improved Collaboration',
      description: 'Enable seamless information sharing and collaboration between different teams and stakeholders with unified access.'
    },
    {
      title: 'Enhanced Security',
      description: 'Strengthen your security posture with enterprise-grade protection for critical operational technology data.'
    },
    {
      title: 'Simplified Compliance',
      description: 'Streamline regulatory compliance with built-in reporting tools and comprehensive audit capabilities.'
    },
    {
      title: 'Scalable Growth',
      description: 'Easily expand monitoring coverage as your infrastructure grows without the complexity of managing multiple systems.'
    },
    {
      title: 'Technology Future-proofing',
      description: 'Adopt a continuously updated platform that evolves with technology advancements and emerging industry standards.'
    }
  ];

  const capabilities = [
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: 'Cross-platform Integration',
      description: 'Seamless integration with diverse equipment types and third-party systems through robust API architecture and protocol support.'
    },
    {
      icon: <Devices className="h-5 w-5 text-primary" />,
      title: 'Customizable Dashboards',
      description: 'Role-based, personalized dashboards with drag-and-drop configuration and user-specific KPI visualization options.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Advanced Security Controls',
      description: 'Comprehensive security features including SSO integration, MFA, IP restrictions, and granular permission management.'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Hierarchical Organization',
      description: 'Multi-level organizational structure with location-based hierarchies and equipment grouping capabilities.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Edge-to-Cloud Architecture',
      description: 'Distributed processing capabilities with edge computing support for efficient data handling and reduced bandwidth requirements.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Remote Access Controls',
      description: 'Secure remote management capabilities with equipment control safeguards and comprehensive action logging.'
    }
  ];

  return (
    <MonitoringDashboardTemplate
      title="Energy Monitoring Platform"
      subtitle="Unified Infrastructure Management"
      description="Our comprehensive Energy Monitoring Platform provides a unified solution for monitoring, managing, and optimizing all your power infrastructure through a secure, scalable, and user-friendly interface accessible from anywhere."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      heroImage="/images/platform-monitoring.jpg"
    />
  );
};

export default PlatformMonitoringPage;