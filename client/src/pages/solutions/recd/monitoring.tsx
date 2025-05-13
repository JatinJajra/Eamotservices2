import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { LineChart, BarChart4, Activity, CloudUpload, FileText, Shield } from "lucide-react";

const RECDMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: "Ultra-Precise Emission Intelligence",
      description: "Our proprietary sensor array measures 18 emission parameters at 10x the resolution of standard systems, detecting microscopic changes invisible to conventional monitoring equipment."
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-primary" />,
      title: "Predictive Compliance Technology",
      description: "Our AI-powered analytics engine predicts compliance risks up to 72 hours in advance, giving you unprecedented time to implement corrective actions before violations occur."
    },
    {
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: "Multi-Tier Alert System",
      description: "Our intelligent notification hierarchy delivers tailored alerts to 7 different stakeholder levels, from maintenance technicians to C-suite executives, with response protocols for each tier."
    },
    {
      icon: <CloudUpload className="h-5 w-5 text-primary" />,
      title: "Guaranteed CPCB Acceptance",
      description: "Our proprietary transmission protocol has achieved 100% acceptance rate across 8,000+ regulatory submissions, with built-in validation to eliminate rejection risk."
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Litigation-Proof Documentation",
      description: "Our military-grade documentation system creates legally defensible records that have successfully withstood scrutiny in 150+ regulatory disputes and legal challenges."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Blockchain Verification System",
      description: "Our revolutionary distributed ledger technology creates immutable emission records with 128-bit encryption that makes data tampering mathematically impossible."
    }
  ];

  const benefits = [
    {
      title: "Eliminate Regulatory Penalties Forever",
      description: "Our clients have maintained 99.997% uptime of their compliance systems, resulting in zero regulatory penalties across 12,500+ operational months, saving millions in potential fines."
    },
    {
      title: "Enhance Corporate ESG Ratings",
      description: "Organizations implementing our system have seen average ESG rating increases of 12-18 points due to verifiable emissions performance, unlocking preferential financing worth 0.3-0.75% reductions in capital costs."
    },
    {
      title: "Reduce Operating Expenses by 7-12%",
      description: "Our emission intelligence identifies combustion optimization opportunities that have reduced our clients' fuel consumption by 7-12%, delivering ROI in as little as 4 months."
    },
    {
      title: "Reclaim 320+ Labor Hours Annually",
      description: "Our automated compliance system eliminates 320+ hours of manual record-keeping and reporting annually per site, freeing your technical staff to focus on core operations."
    },
    {
      title: "Extend Equipment Lifetime by 23%",
      description: "Clients using our predictive emissions intelligence have extended generator overhaul intervals by 23% while maintaining compliance, significantly reducing capital expenditure cycles."
    },
    {
      title: "Obtain Regulatory Insurance",
      description: "Our system is the only one in India that qualifies for regulatory compliance insurance, providing financial protection against business interruption due to compliance issues."
    }
  ];

  return (
    <ServicePageTemplate
      title="Next-Generation Emission Intelligence System"
      subtitle="Beyond Compliance: Strategic Emission Performance Management"
      description="Forget everything you know about emission monitoring. Our revolutionary system transforms your emission data into a strategic business asset that reduces costs, prevents penalties, enhances ESG ratings, and provides legal protection against regulatory actions."
      features={features}
      benefits={benefits}
      heroImage="/images/recd-monitoring.jpg"
      callToAction={{
        title: "Stop Risking Regulatory Penalties and Shutdowns",
        description: "Join the 2,500+ facilities that have achieved perfect compliance records while saving millions in operational costs and avoiding business interruptions through our advanced emission intelligence platform.",
        buttonText: "Secure Your Compliance Future",
        buttonLink: "/contact"
      }}
    />
  );
};

export default RECDMonitoringPage;