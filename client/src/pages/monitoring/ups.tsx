import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Battery, Zap, ThermometerIcon, Clock, 
  BellRing, Gauge, ShieldAlert, 
  BarChart4, TrendingUp, Activity,
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu
} from 'lucide-react';

const UPSMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Battery className="h-5 w-5 text-primary" />,
      title: 'Battery Health Analytics',
      description: 'Continuous monitoring of battery voltage, temperature, and charge cycles to maximize lifespan and prevent failures.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Load Monitoring',
      description: 'Real-time analysis of UPS load levels to prevent overloading and optimize capacity utilization.'
    },
    {
      icon: <ThermometerIcon className="h-5 w-5 text-primary" />,
      title: 'Temperature Monitoring',
      description: 'Constant temperature tracking across critical components to prevent thermal-related failures and degradation.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Runtime Estimation',
      description: 'Accurate backup time calculations based on current load and battery condition for reliable planning.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Power Quality Analysis',
      description: 'Comprehensive monitoring of input/output voltage, frequency stability, and waveform quality for sensitive equipment protection.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Multi-Channel Notifications',
      description: 'Customizable alerts via email, SMS, and mobile app for critical events and maintenance requirements.'
    },
  ];

  const benefits = [
    {
      title: 'Enhanced Business Continuity',
      description: 'Minimize costly downtime with proactive monitoring that ensures your UPS systems perform reliably when needed most.'
    },
    {
      title: 'Extended Equipment Lifespan',
      description: 'Maximize the service life of your UPS systems and batteries through optimized charging cycles and preventive maintenance.'
    },
    {
      title: 'Lower Total Cost of Ownership',
      description: 'Reduce emergency service calls, prevent premature battery replacements, and avoid costly equipment damage.'
    },
    {
      title: 'Improved Energy Efficiency',
      description: 'Identify opportunities to optimize UPS efficiency and reduce energy consumption through detailed performance analytics.'
    },
    {
      title: 'Simplified Compliance',
      description: 'Automated documentation and reporting to support regulatory compliance and internal governance requirements.'
    },
    {
      title: 'Peace of Mind',
      description: 'Confidence that your critical power infrastructure is being continuously monitored 24/7/365 by advanced systems.'
    },
  ];

  const capabilities = [
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud Dashboard',
      description: 'Secure, accessible anywhere cloud platform with comprehensive visuals and analytics for all your UPS systems.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Access',
      description: 'Monitor your UPS systems on-the-go with our intuitive mobile application for iOS and Android devices.'
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning algorithms to predict potential failures weeks before they occur, allowing proactive intervention.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Multi-Site Management',
      description: 'Centralized monitoring and management of UPS systems across multiple locations from a single dashboard.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Historical Trending',
      description: 'Long-term data storage and analytics to identify patterns, optimize performance, and plan for future capacity needs.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Power Event Correlation',
      description: 'Identify relationships between power events, equipment behavior, and environmental factors to resolve root causes.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="UPS Monitoring Solution"
      subtitle="Advanced Battery & Power Quality Management"
      description="Our comprehensive UPS monitoring system provides real-time insights into your uninterruptible power supply performance, helping you maximize reliability, extend equipment life, and minimize costly downtime."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Case Study: Data Center</h3>
            <p className="text-gray-600 mb-4">A major financial services data center implemented our UPS monitoring solution and achieved:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">99.999% power availability (up from 99.95%)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">42% reduction in emergency service calls</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">31% extended battery service life</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Key Integrations</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Server className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Building Management Systems</h4>
                  <p className="text-sm text-gray-600">Seamless integration with major BMS platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">DCIM Solutions</h4>
                  <p className="text-sm text-gray-600">Compatible with all major Data Center Infrastructure Management tools</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Enterprise Management Systems</h4>
                  <p className="text-sm text-gray-600">API connections to ServiceNow, BMC, and other ITSM platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Mobile Platforms</h4>
                  <p className="text-sm text-gray-600">Native iOS and Android applications with push notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default UPSMonitoringPage;