import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { LineChart, BarChart, FileCheck, BellRing, LayoutGrid, Activity } from 'lucide-react';

const RECDMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Real-Time Emissions Monitoring',
      description: 'Continuous monitoring of NOx, SOx, PM2.5, PM10, and other pollutants with real-time data visualization and trend analysis.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance report generation with historical data archiving for regulatory submissions and audit trails.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Calibration Management',
      description: 'Automated calibration scheduling, drift detection, and validation with detailed calibration history tracking.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Alert Configuration',
      description: 'Customizable alert thresholds with multi-channel notifications for exceedances and system malfunctions.'
    },
    {
      icon: <LayoutGrid className="h-5 w-5 text-primary" />,
      title: 'Multi-Site Management',
      description: 'Centralized monitoring and management of multiple emission sources across different locations from a single dashboard.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics for correlating emissions with operational parameters to optimize processes and reduce environmental impact.'
    }
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Ensure continuous compliance with pollution control board requirements and environmental regulations.'
    },
    {
      title: 'Simplified Reporting',
      description: 'Eliminate manual data collection and report preparation with automated compliance reporting systems.'
    },
    {
      title: 'Early Problem Detection',
      description: 'Identify potential emission control issues before they lead to regulatory violations or equipment damage.'
    },
    {
      title: 'Operational Optimization',
      description: 'Correlate emissions data with operational parameters to optimize processes for both efficiency and environmental impact.'
    },
    {
      title: 'Reduced Compliance Risk',
      description: 'Minimize the risk of regulatory penalties and operational shutdowns due to non-compliance events.'
    },
    {
      title: 'Environmental Stewardship',
      description: 'Demonstrate commitment to environmental responsibility with comprehensive emissions monitoring and management.'
    }
  ];

  const capabilities = [
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Advanced Data Visualization',
      description: 'Interactive charts and graphs for real-time and historical emissions data analysis with custom timeframe selection.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Statistical Analysis',
      description: 'Built-in statistical tools for trend analysis, exceedance frequency, and correlation with operational parameters.'
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: 'Automated Compliance Reports',
      description: 'Pre-configured templates for regulatory reports with automated data population and submission tracking.'
    },
    {
      icon: <BellRing className="h-5 w-5 text-primary" />,
      title: 'Multi-Channel Alerts',
      description: 'Configurable notification system with SMS, email, and mobile app alerts for exceedances and system issues.'
    },
    {
      icon: <LayoutGrid className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Dashboard',
      description: 'Customizable dashboard views with at-a-glance compliance status for all monitored parameters and locations.'
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: 'Equipment Integration',
      description: 'Seamless integration with various CEMS, AAQMS, and water quality monitoring systems from multiple manufacturers.'
    }
  ];

  return (
    <MonitoringDashboardTemplate
      title="RECD Monitoring Dashboard"
      subtitle="Real-Time Environmental Compliance Solutions"
      description="Our RECD Monitoring Dashboard provides comprehensive real-time monitoring of emissions and environmental parameters, helping you maintain regulatory compliance while optimizing operational efficiency."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      heroImage="/images/recd-monitoring.jpg"
    />
  );
};

export default RECDMonitoringPage;