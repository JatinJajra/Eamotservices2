import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  BarChart4, PieChart, LineChart, 
  BellRing, FileText, CloudUpload, 
  Settings, Smartphone, Cloud, Laptop, 
  Server, Cpu, Mail, Download, Share2
} from 'lucide-react';

const AnalyticsMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Dashboards',
      description: 'Customizable visual dashboards providing at-a-glance insights into all your power equipment performance metrics.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Intelligent Alerting System',
      description: 'Configure multi-level alerts with custom thresholds, severity levels, and escalation paths for critical issues.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Advanced Trend Analysis',
      description: 'Sophisticated trend identification algorithms to spot gradual degradation and predict future performance issues.'
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: 'Automated Reporting',
      description: 'Schedule customized reports for different stakeholders with automated delivery and secure access management.'
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      title: 'ROI & Cost Analytics',
      description: 'Quantify cost savings from preventive maintenance, reduced downtime, and extended equipment life.'
    },
    {
      icon: <CloudUpload className="h-5 w-5 text-primary" />,
      title: 'Data Export & Integration',
      description: 'Flexible data export options and API integrations with CMMS, ERP, and other enterprise systems.'
    },
  ];

  const benefits = [
    {
      title: 'Data-Driven Decision Making',
      description: 'Transform raw monitoring data into actionable insights that guide maintenance strategies and capital investment decisions.'
    },
    {
      title: 'Proactive vs. Reactive Management',
      description: 'Shift from responding to failures to preventing them with predictive analytics and early warning indicators.'
    },
    {
      title: 'Customized Information Delivery',
      description: 'Ensure each stakeholder receives exactly the information they need in the format they prefer, when they need it.'
    },
    {
      title: 'Performance Benchmarking',
      description: 'Compare equipment performance across facilities, brands, and timeframes to identify best practices and optimization opportunities.'
    },
    {
      title: 'Regulatory Documentation',
      description: 'Maintain comprehensive audit trails and compliance documentation with minimal administrative overhead.'
    },
    {
      title: 'Advanced Planning Support',
      description: 'Support capital planning with detailed equipment lifespan projections and replacement timing recommendations.'
    },
  ];

  const capabilities = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Multi-Channel Delivery',
      description: 'Receive alerts and reports via email, SMS, mobile push notifications, and more based on priority and user preferences.'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: 'Mobile Analytics',
      description: 'Access comprehensive analytics on mobile devices with intuitive visualization and navigation optimized for smaller screens.'
    },
    {
      icon: <Download className="h-5 w-5 text-primary" />,
      title: 'Flexible Export Options',
      description: 'Export data and reports in multiple formats including PDF, Excel, CSV, and API endpoints for system integration.'
    },
    {
      icon: <Share2 className="h-5 w-5 text-primary" />,
      title: 'Secure Sharing',
      description: 'Share dashboards and reports with colleagues and stakeholders with granular permission controls and tracking.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Custom KPI Builder',
      description: 'Create custom key performance indicators and composite metrics specific to your operational needs and goals.'
    },
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      title: 'Long-Term Data Archiving',
      description: 'Maintain searchable historical data archives for extended trend analysis, compliance purposes, and performance benchmarking.'
    },
  ];

  return (
    <MonitoringDashboardTemplate
      title="Analytics & Reporting Platform"
      subtitle="Transform Monitoring Data into Actionable Insights"
      description="Our advanced analytics and reporting platform converts raw monitoring data into meaningful business intelligence, helping you optimize equipment performance, reduce costs, and make data-driven operational decisions."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      customComponents={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Report Types</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Daily Performance Summaries</h4>
                  <p className="text-sm text-gray-600">Concise overviews of key metrics with exception highlighting for quick review</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Monthly Trend Analysis</h4>
                  <p className="text-sm text-gray-600">Detailed examination of performance trends with comparative benchmarking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Maintenance Recommendation Reports</h4>
                  <p className="text-sm text-gray-600">Data-driven maintenance scheduling recommendations based on actual usage patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Executive Summaries</h4>
                  <p className="text-sm text-gray-600">High-level overviews with financial impact assessments and strategic insights</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Analytics Applications</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Predictive maintenance scheduling to minimize downtime</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Equipment efficiency optimization for energy savings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Load balancing across power equipment for optimal performance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Capacity planning based on growth trends and usage patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Risk assessment and failure probability modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Equipment lifecycle cost analysis and replacement timing</span>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default AnalyticsMonitoringPage;