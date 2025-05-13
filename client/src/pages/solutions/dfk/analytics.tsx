import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BarChart4, PieChart, TrendingUp, DollarSign, FileText, Calculator } from "lucide-react";

const DFKAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: "High-Precision Fuel Intelligence",
      description: "Our proprietary sensing technology measures fuel consumption with 99.9% accuracy at 15-second intervals, providing 64x more measurement points than standard systems for unmatched visibility."
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "AI-Powered Optimization Engine",
      description: "Our advanced machine learning algorithms analyze 42+ operational variables to continuously fine-tune your substitution rates, typically increasing savings by an additional 12-18% post-installation."
    },
    {
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      title: "Multi-Dimensional Financial Analysis",
      description: "Our comprehensive financial dashboard integrates real-time fuel pricing data with operational metrics to calculate true TCO impact, tax implications, and carbon credit monetization opportunities."
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      title: "Certified Emissions Verification",
      description: "Our EPA-recognized measurement methodology provides legally defensible emissions reduction data suitable for carbon credit programs, ESG reporting, and regulatory compliance documentation."
    },
    {
      icon: <Calculator className="h-5 w-5 text-primary" />,
      title: "Predictive Efficiency Modeling",
      description: "Our unique digital twin technology simulates operational scenarios 30 days forward to identify optimal settings for changing load conditions and fuel prices before they occur."
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Executive Intelligence Suite",
      description: "Our customizable reporting platform includes 22 pre-built visualization templates specifically designed for different stakeholders from operations teams to C-suite executives."
    }
  ];

  const benefits = [
    {
      title: "Find Hidden Savings Worth ₹15-28L Annually",
      description: "Our clients discover an average of ₹15-28 lakhs in additional annual savings that standard monitoring systems miss through our micro-optimization algorithms and operational pattern analysis."
    },
    {
      title: "Increase Substitution Rates by 8-14%",
      description: "Organizations using our analytics platform achieve substitution rates 8-14% higher than those using standard monitoring systems through continuous AI-driven calibration enhancement."
    },
    {
      title: "Accelerate Payback by 7.6 Months",
      description: "Our data shows that clients using our analytics platform reach ROI breakeven 7.6 months faster on average than those with basic monitoring due to optimization-driven efficiency gains."
    },
    {
      title: "5-8% Higher ESG Scores",
      description: "Clients leveraging our certified emissions reporting have achieved 5-8% higher ESG ratings from major evaluation bodies, unlocking preferential financing rates and corporate partnership opportunities."
    },
    {
      title: "Prevent Costly Failures (₹18L+ Saved)",
      description: "Our predictive anomaly detection typically identifies potential failures 2-3 weeks before conventional systems, preventing an average of ₹18+ lakhs in equipment damage and downtime annually."
    },
    {
      title: "12% More Efficient Fleet Management",
      description: "Organizations with multiple generators report 12% more efficient fleet resource allocation and synchronization after implementing our cross-asset optimization recommendations."
    }
  ];

  return (
    <ServicePageTemplate
      title="Profit-Maximizing Fuel Intelligence"
      subtitle="Transform Fuel Data Into Multi-Million Rupee Savings"
      description="Standard analytics merely track your fuel usage. Our advanced intelligence platform actively maximizes your savings through continuous AI-driven optimization. While others miss up to 40% of potential savings, our system's micro-calibration capabilities continuously evolve your dual fuel system's performance, delivering an additional 12-18% cost reduction beyond initial implementation savings."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-analytics.jpg"
      callToAction={{
        title: "Unlock ₹15-28 Lakhs in Hidden Annual Savings",
        description: "Join the 350+ organizations experiencing unprecedented fuel cost reductions through our intelligent optimization platform. The longer you wait, the more savings opportunities you're missing every day.",
        buttonText: "Calculate Your Hidden Savings Potential",
        buttonLink: "/contact"
      }}
    />
  );
};

export default DFKAnalyticsPage;