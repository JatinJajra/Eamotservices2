import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { BarChart, PieChart, TrendingUp, Clock, LineChart, Database } from 'lucide-react';

const AnalyticsMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Performance Trend Analysis',
      description: 'Advanced trend identification and pattern recognition for equipment performance data with predictive analytics capabilities.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Comparative Analysis',
      description: 'Side-by-side performance comparison across multiple equipment units, sites, or time periods with detailed deviation reporting.'
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      title: 'Efficiency Metrics',
      description: 'Comprehensive efficiency calculations and KPI tracking with automated performance scoring and benchmark comparison.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Operational Insights',
      description: 'Deep analysis of operational patterns, load profiles, and usage trends to identify optimization opportunities.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Cost Impact Analysis',
      description: 'Financial impact assessment of operational decisions with cost projection scenarios and ROI calculations.'
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: 'Custom Report Generation',
      description: 'Flexible, customizable report creation with scheduled distribution and multi-format export capabilities.'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decision Making',
      description: 'Transform raw operational data into actionable insights that drive informed decision-making and strategic planning.'
    },
    {
      title: 'Operational Optimization',
      description: 'Identify efficiency improvement opportunities and optimal operating parameters based on comprehensive data analysis.'
    },
    {
      title: 'Early Problem Detection',
      description: 'Spot emerging issues and performance degradation before they develop into critical problems or failures.'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through data-driven optimization of energy consumption, maintenance scheduling, and resource allocation.'
    },
    {
      title: 'Performance Verification',
      description: 'Validate the impact of operational changes and investments with before-and-after performance comparisons.'
    },
    {
      title: 'Strategic Planning Support',
      description: 'Leverage comprehensive data analysis to support capacity planning, equipment lifecycle management, and capital investment decisions.'
    }
  ];

  const capabilities = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'ML-Enhanced Analytics',
      description: 'Machine learning algorithms that continuously improve analysis accuracy and predictive capabilities with growing datasets.'
    },
    {
      icon: <BarChart className="h-5 w-5 text-primary" />,
      title: 'Interactive Dashboards',
      description: 'Highly customizable, role-based dashboards with drag-and-drop configuration and user-specific views.'
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      title: 'Multi-dimensional Analysis',
      description: 'Powerful data exploration tools with drill-down capabilities across various dimensions and hierarchical levels.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Anomaly Detection',
      description: 'Sophisticated algorithms for identifying performance anomalies and operational irregularities with root cause suggestions.'
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: 'Predictive Maintenance',
      description: 'Advanced predictive models that forecast maintenance needs based on performance trends and historical failure data.'
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: 'Data Integration Hub',
      description: 'Centralized analytics platform that integrates and normalizes data from multiple monitoring systems and external sources.'
    }
  ];

  return (
    <MonitoringDashboardTemplate
      title="Energy Analytics Dashboard"
      subtitle="Advanced Insights for Operational Excellence"
      description="Our Energy Analytics Dashboard transforms complex operational data into actionable insights, enabling data-driven decision making, operational optimization, and strategic planning for your power infrastructure."
      features={features}
      benefits={benefits}
      capabilities={capabilities}
      heroImage="/images/analytics-dashboard.jpg"
    />
  );
};

export default AnalyticsMonitoringPage;