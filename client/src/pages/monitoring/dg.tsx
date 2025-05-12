import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Gauge, Battery, Zap, Wrench, 
  Clock, BellRing, ShieldAlert, 
  BarChart4, TrendingUp, AreaChart,
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu
} from 'lucide-react';

const DGMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Real-Time Engine Performance',
      description: 'Monitor critical performance metrics including load levels, fuel consumption, and engine temperature in real-time.'
    },
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Battery Health Monitoring',
      description: 'Track battery voltage, charge status, and health diagnostics to prevent starting failures.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Power Output Analytics',
      description: 'Measure voltage stability, frequency, and power output quality with advanced analytics.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Proactive Alert System',
      description: 'Receive customizable notifications for maintenance needs, anomalies, and potential failures before they occur.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Trend Analysis',
      description: 'Visualize performance trends over time to identify gradual degradation and optimize maintenance schedules.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Maintenance Tracking',
      description: 'Schedule and track regular maintenance activities with automated reminders based on runtime or calendar intervals.'
    },
  ];

  const benefits = [
    {
      title: 'Increased Generator Lifespan',
      description: 'Early detection of issues and optimized maintenance schedules can extend generator life by up to 25%, maximizing your capital investment.'
    },
    {
      title: 'Reduced Unplanned Downtime',
      description: 'Proactive monitoring can reduce unexpected failures by up to 70%, ensuring your power systems are available when you need them most.'
    },
    {
      title: 'Lower Operational Costs',
      description: 'Optimize maintenance schedules, reduce emergency repairs, and improve fuel efficiency to significantly reduce total operational costs.'
    },
    {
      title: 'Enhanced Compliance',
      description: 'Automated record-keeping and reporting help maintain compliance with regulatory requirements and warranty conditions.'
    },
    {
      title: 'Remote Management',
      description: 'Manage your generators from anywhere with secure remote access, reducing the need for physical site visits and enabling faster response times.'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Leverage comprehensive performance data to make informed decisions about equipment upgrades, replacements, and operational adjustments.'
    },
  ];

  const capabilities = [
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud-Based Architecture',
      description: 'Our secure cloud platform enables access from anywhere while ensuring your data is protected with enterprise-grade security protocols.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Integration',
      description: 'Access your monitoring dashboard from any device with our responsive web interface and dedicated mobile applications.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Edge Computing',
      description: 'Local processing capabilities ensure monitoring continues even during internet connectivity disruptions, with automatic data synchronization when connection is restored.'
    },
    {
      icon: <Laptop className="h-5 w-5 text-primary" />,
      title: 'Custom Reporting',
      description: 'Generate comprehensive reports customized to your specific requirements, with automated scheduling and distribution options.'
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
      title: 'Predictive Diagnostics',
      description: 'Advanced algorithms analyze operational patterns to predict potential failures before they happen, allowing for preventive maintenance.'
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'IoT Sensor Integration',
      description: 'Seamless integration with a wide range of IoT sensors and existing building management systems to create a comprehensive monitoring solution.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="Diesel Generator Monitoring"
      subtitle="Real-Time Performance & Predictive Maintenance"
      description="Our advanced DG monitoring system provides comprehensive visibility into your generator performance with real-time analytics, predictive maintenance, and automated alerting to maximize reliability and reduce operational costs."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Case Study: Manufacturing Facility</h3>
            <p className="text-gray-600 mb-4">A large manufacturing facility implemented our DG monitoring solution across their backup power systems and experienced:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">35% reduction in generator-related downtime</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">28% decrease in maintenance costs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">15% improvement in fuel efficiency</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Implementation Process</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-medium">Initial Assessment</h4>
                  <p className="text-sm text-gray-600">We evaluate your current DG infrastructure and monitoring needs</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-medium">Sensor Installation</h4>
                  <p className="text-sm text-gray-600">Our engineers install non-invasive sensors on your generators</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-medium">System Configuration</h4>
                  <p className="text-sm text-gray-600">Configure and customize the monitoring platform to your requirements</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold">4</div>
                <div>
                  <h4 className="font-medium">Training & Handover</h4>
                  <p className="text-sm text-gray-600">Comprehensive training on system operation and maintenance</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      }
    />
  );
};

export default DGMonitoringPage;