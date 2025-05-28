import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Zap, Activity, ThermometerIcon, Timer, 
  BellRing, Gauge, ShieldAlert, 
  BarChart4, TrendingUp, LineChart,
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu
} from 'lucide-react';

const ServoMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Voltage Stability Monitoring',
      description: 'Continuous monitoring of input and output voltage levels to ensure optimal stabilization and equipment protection.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Real-Time Performance Analytics',
      description: 'Advanced analytics on voltage fluctuations, correction events, and stability indices with customizable thresholds.'
    },
    {
      icon: <ThermometerIcon className="h-5 w-5 text-primary" />,
      title: 'Temperature Monitoring',
      description: 'Monitor motor and component temperatures to prevent overheating and maximize stabilizer lifespan.'
    },
    {
      icon: <Timer className="h-5 w-5 text-primary" />,
      title: 'Response Time Analysis',
      description: 'Measure response times to voltage fluctuations to ensure your equipment receives stable power without interruption.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: 'Load Management',
      description: 'Track connected load patterns and ensure optimal stabilizer sizing for maximum efficiency and protection.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Proactive Alert System',
      description: 'Receive instant notifications about critical events, maintenance requirements, and potential failures.'
    },
  ];

  const benefits = [
    {
      title: 'Equipment Protection',
      description: 'Prevent damage to sensitive electronics and equipment caused by voltage irregularities and power quality issues.'
    },
    {
      title: 'Extended Stabilizer Lifespan',
      description: 'Proactive monitoring and maintenance alerts help maximize the service life of your servo stabilizer systems.'
    },
    {
      title: 'Energy Cost Reduction',
      description: 'Optimize voltage levels to improve energy efficiency and reduce electricity costs by up to 12%.'
    },
    {
      title: 'Reduced Downtime',
      description: 'Predict and prevent voltage-related outages that can disrupt operations and impact productivity.'
    },
    {
      title: 'Maintenance Optimization',
      description: 'Schedule maintenance based on actual usage patterns and component wear rather than arbitrary schedules.'
    },
    {
      title: 'Improved Power Quality',
      description: 'Ensure clean, stable power for sensitive equipment, manufacturing processes, and critical operations.'
    },
  ];

  const capabilities = [
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Cloud-Based Analytics',
      description: 'Access comprehensive performance data from anywhere through our secure cloud platform with intuitive visualizations.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Accessibility',
      description: 'Monitor your stabilizers on-the-go with our mobile application featuring real-time alerts and system controls.'
    },
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: 'Multi-Site Integration',
      description: 'Centrally monitor and manage servo stabilizers across multiple facilities from a single unified dashboard.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Advanced Trend Analysis',
      description: 'Identify long-term patterns in voltage fluctuations, load changes, and correction events to optimize stabilizer performance.'
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
      title: 'Predictive Maintenance',
      description: 'Machine learning algorithms predict component failures before they occur, enabling proactive maintenance interventions.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Remote Configuration',
      description: 'Adjust stabilizer settings, thresholds, and alert parameters remotely without the need for on-site visits.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="Servo Stabilizer Monitoring"
      subtitle="Voltage Quality & Stabilization Analytics"
      description="Our comprehensive servo stabilizer monitoring solution provides detailed insights into voltage quality, stabilization performance, and equipment health to ensure optimal protection for your sensitive electronics and equipment."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Case Study: Healthcare Facility</h3>
            <p className="text-gray-600 mb-4">A multi-specialty hospital implemented our servo stabilizer monitoring across their critical infrastructure with remarkable results:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">65% reduction in equipment repairs related to power issues</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Zero unplanned downtime for critical medical equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">8.3% reduction in overall energy consumption</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Compatible Stabilizer Models</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Single Phase Systems</h4>
                  <p className="text-sm text-gray-600">All major brands including Servomax, Servokon, Servo-Tek, and other industry-leading manufacturers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Three Phase Systems</h4>
                  <p className="text-sm text-gray-600">Compatible with all industrial-grade three-phase servo stabilizers from 10KVA to 5000KVA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Oil Cooled Units</h4>
                  <p className="text-sm text-gray-600">Specialized monitoring solutions for high-capacity oil-cooled servo stabilizer systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Digital Stabilizers</h4>
                  <p className="text-sm text-gray-600">Enhanced integration with modern microprocessor-controlled stabilizers through direct data interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ServoMonitoringPage;