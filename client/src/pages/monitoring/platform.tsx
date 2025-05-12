import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Globe, Network, Database, 
  BellRing, ShieldCheck, CloudUpload, 
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu, Building, Users, Lock
} from 'lucide-react';

const MonitoringPlatformPage: React.FC = () => {
  const features = [
    {
      icon: <Network className="h-5 w-5 text-primary" />,
      title: 'Unified Equipment Monitoring',
      description: 'Single platform for monitoring DG sets, UPS systems, stabilizers, RECD units, and other power assets across your organization.'
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: 'Multi-Site Integration',
      description: 'Centralized monitoring of equipment across multiple locations, buildings, and facilities from a single dashboard.'
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Asset Registry',
      description: 'Complete digital inventory of all power equipment with detailed specifications, warranty information, and service history.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'Role-Based Access Control',
      description: 'Granular user permissions and access management tailored to organizational hierarchy and responsibilities.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Centralized Alerting System',
      description: 'Consolidated alerts from all equipment with intelligent routing, escalation paths, and acknowledgment tracking.'
    },
    {
      icon: <CloudUpload className="h-5 w-5 text-primary" />,
      title: 'Enterprise System Integration',
      description: 'Seamless API connections with CMMS, ERP, BMS, and other enterprise systems for comprehensive operational oversight.'
    },
  ];

  const benefits = [
    {
      title: 'Operational Efficiency',
      description: 'Manage all power assets through a single interface, eliminating the need to juggle multiple monitoring systems and dashboards.'
    },
    {
      title: 'Standardized Processes',
      description: 'Implement consistent monitoring, maintenance, and response procedures across all equipment types and locations.'
    },
    {
      title: 'Comprehensive Visibility',
      description: 'Gain a holistic view of your entire power infrastructure with the ability to drill down to individual equipment details.'
    },
    {
      title: 'Simplified Administration',
      description: 'Reduce administrative overhead with consolidated user management, reporting, and system maintenance.'
    },
    {
      title: 'Enhanced Security',
      description: 'Improve operational security with centralized access control, activity logging, and security policy enforcement.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Easily incorporate new equipment, locations, and users as your organization grows without system redesign.'
    },
  ];

  const capabilities = [
    {
      icon: <Building className="h-5 w-5 text-primary" />,
      title: 'Hierarchical Organization',
      description: 'Organize assets by region, facility, building, floor, and room with intuitive navigation and visual mapping.'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Team Collaboration',
      description: 'Built-in tools for maintenance team coordination, issue assignment, and resolution tracking across locations.'
    },
    {
      icon: <Lock className="h-5 w-5 text-primary" />,
      title: 'Enterprise Security',
      description: 'Advanced security features including SSO integration, MFA, activity auditing, and secure API communication.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Deployment Options',
      description: 'Flexible deployment models including cloud-hosted, on-premise, and hybrid configurations to meet security requirements.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Advanced Intelligence',
      description: 'Cross-equipment analytics identifying relationships between different systems and their combined operational impact.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Custom Configuration',
      description: 'Highly customizable dashboards, reports, and workflows tailored to your specific organizational needs.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="Centralized Asset Monitoring Platform"
      subtitle="Unified Power Equipment Management"
      description="Our enterprise-grade centralized asset monitoring platform provides a single pane of glass for all your power equipment, streamlining operations, enhancing visibility, and enabling organization-wide efficiency improvements."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Enterprise Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Multi-Tenant Architecture</h4>
                  <p className="text-sm text-gray-600">Support for complex organizational structures with parent-child relationships and data segregation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Enterprise Identity Integration</h4>
                  <p className="text-sm text-gray-600">SAML 2.0, LDAP, and Active Directory integration for centralized user management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">High Availability Architecture</h4>
                  <p className="text-sm text-gray-600">99.9% uptime guarantee with redundant infrastructure and disaster recovery capabilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Data Sovereignty Controls</h4>
                  <p className="text-sm text-gray-600">Regional data storage options to meet regulatory and compliance requirements</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Case Study: Hospital Network</h3>
            <p className="text-gray-600 mb-4">A major hospital network with 12 facilities implemented our centralized monitoring platform with remarkable results:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Consolidated monitoring of 48 DG sets, 96 UPS systems, and 24 RECD units</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Reduced maintenance staff travel time by 68% with optimized scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Improved compliance documentation management across all facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">42% reduction in critical power incidents through proactive monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Standardized operational procedures across all facilities</span>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default MonitoringPlatformPage;