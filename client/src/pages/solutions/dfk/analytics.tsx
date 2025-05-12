import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BarChart4, PieChart, TrendingUp, DollarSign, FileText, Calculator } from 'lucide-react';

const DFKAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: 'Real-Time Consumption Monitoring',
      description: 'Advanced monitoring of both diesel and gas consumption with detailed analysis of substitution rates under various load conditions.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: 'Performance Trend Analysis',
      description: 'Long-term tracking of system performance with identification of trends, anomalies, and optimization opportunities.'
    },
    {
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      title: 'Financial Impact Reporting',
      description: 'Detailed financial analysis including fuel cost savings, ROI tracking, and payback period verification based on actual usage.'
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      title: 'Emissions Reduction Measurement',
      description: 'Quantification of environmental benefits including CO2, NOx, and particulate matter reduction from dual fuel operation.'
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: 'Efficiency Optimization Analytics',
      description: 'Advanced analytics to identify optimal operational parameters for maximum diesel substitution and cost savings.'
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: 'Custom Reporting',
      description: 'Tailored reporting options with customizable metrics, time periods, and visualization formats for different stakeholders.'
    },
  ];

  const benefits = [
    {
      title: 'Verified Cost Savings',
      description: 'Quantify actual fuel cost savings achieved through dual fuel conversion with detailed financial analytics.'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuously improve dual fuel system performance by identifying and implementing data-driven optimization opportunities.'
    },
    {
      title: 'Investment Validation',
      description: 'Verify ROI projections with accurate tracking of actual financial benefits and payback period progress.'
    },
    {
      title: 'Environmental Impact Reporting',
      description: 'Document and report on environmental benefits for corporate sustainability initiatives and stakeholder communication.'
    },
    {
      title: 'Early Issue Detection',
      description: 'Identify potential performance issues or calibration drift before they significantly impact efficiency or operations.'
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Use comprehensive analytics to guide future generator fuel strategy, maintenance planning, and equipment investments.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Fuel Savings Analytics"
      subtitle="Comprehensive Dual Fuel Performance Monitoring"
      description="Our advanced analytics platform provides detailed insights into your dual fuel system performance, helping you track fuel savings, verify ROI, and continuously optimize diesel substitution rates."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-analytics.jpg"
      callToAction={{
        title: "Ready to Maximize Your Dual Fuel Benefits?",
        description: "Contact our analytics team to learn how our monitoring platform can help you optimize and track your dual fuel conversion benefits.",
        buttonText: "Explore Analytics Platform",
        buttonLink: "/contact",
      }}
    />
  );
};

export default DFKAnalyticsPage;