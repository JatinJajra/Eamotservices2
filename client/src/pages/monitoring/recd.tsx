import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  BarChart4, AlertTriangle, LineChart, 
  BellRing, FileText, CloudUpload, 
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu, Gauge, Activity
} from 'lucide-react';

const RECDMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Real-Time Emission Parameters',
      description: 'Continuous monitoring of NOx, SOx, PM, and other critical emission parameters with high-precision sensors.'
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Compliance Benchmarking',
      description: 'Automated comparison of real-time emissions against CPCB and state PCB compliance thresholds.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Violation Alerting',
      description: 'Instant notifications when emission parameters approach or exceed regulatory limits to enable rapid remediation.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Historical Trend Analysis',
      description: 'Comprehensive emission data trends to identify patterns and optimize generator performance for cleaner operations.'
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: 'Regulatory Reporting',
      description: 'Automated generation of compliance reports in formats required by CPCB, state pollution control boards, and local authorities.'
    },
    {
      icon: <CloudUpload className="h-5 w-5 text-primary" />,
      title: 'CPCB Data Integration',
      description: 'Seamless data transmission to pollution control board servers as per regulatory requirements with failure notification.'
    },
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance Assurance',
      description: 'Maintain continuous compliance with evolving emission standards, avoiding penalties and potential operational shutdowns.'
    },
    {
      title: 'Reduced Environmental Impact',
      description: 'Minimize your carbon footprint and environmental impact through optimized generator operations based on emission analytics.'
    },
    {
      title: 'Simplified Compliance Reporting',
      description: 'Eliminate manual report generation and submission with automated, accurate regulatory documentation.'
    },
    {
      title: 'Early Problem Detection',
      description: 'Identify potential emission control issues before they result in compliance violations or equipment damage.'
    },
    {
      title: 'Operational Cost Reduction',
      description: 'Optimize fuel usage and maintenance based on emission performance data, resulting in lower overall operating costs.'
    },
    {
      title: 'Enhanced Corporate Responsibility',
      description: 'Demonstrate your commitment to environmental stewardship with verifiable emission control performance data.'
    },
  ];

  const capabilities = [
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud-Based Compliance Management',
      description: 'Secure, redundant storage of all emission data with comprehensive audit trails for regulatory verification.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Monitoring',
      description: 'Monitor emission compliance status from anywhere with our mobile application, including instant alerts for violations.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Advanced Analytics',
      description: 'Machine learning algorithms analyze emission patterns to recommend optimal operating parameters for cleaner operations.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Multi-Site Aggregation',
      description: 'Centralized monitoring of all your RECD installations across multiple locations with consolidated reporting.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Predictive Maintenance',
      description: 'Forecast emission control system maintenance needs based on performance data to prevent compliance issues.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'System Integration',
      description: 'Seamless integration with DG monitoring systems, BMS platforms, and enterprise management software for comprehensive oversight.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="RECD Emission Monitoring"
      subtitle="Compliance Assurance & Environmental Protection"
      description="Our RECD emission monitoring system provides comprehensive real-time visibility into diesel generator emissions, ensuring regulatory compliance while simplifying reporting and optimizing environmental performance."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">CPCB Compliance Features</h3>
            <p className="text-gray-600 mb-4">Our RECD monitoring solution ensures full compliance with Central Pollution Control Board requirements:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Tamper-proof data acquisition with secure encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Automated real-time data submission to CPCB servers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Standardized emission parameter calculations as per norms</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Continuous calibration verification and diagnostic reporting</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Implementation Process</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-medium">Site Assessment</h4>
                  <p className="text-sm text-gray-600">Evaluation of your DG sets and existing emission control systems</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-medium">RECD Integration</h4>
                  <p className="text-sm text-gray-600">Installation of emission analyzers and monitoring equipment</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-medium">Regulatory Registration</h4>
                  <p className="text-sm text-gray-600">Registration with CPCB and configuration of data transmission</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">4</div>
                <div>
                  <h4 className="font-medium">Calibration & Validation</h4>
                  <p className="text-sm text-gray-600">Certification of monitoring accuracy with regulatory authorities</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">5</div>
                <div>
                  <h4 className="font-medium">Ongoing Support</h4>
                  <p className="text-sm text-gray-600">Continuous maintenance, calibration, and compliance assistance</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      }
    />
  );
};

export default RECDMonitoringPage;