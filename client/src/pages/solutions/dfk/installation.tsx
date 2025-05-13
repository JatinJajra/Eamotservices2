import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench, Gauge, Cpu, FileCheck, Users, Settings } from "lucide-react";

const DFKInstallationPage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: "Master Technician Installation",
      description: "Our Elite DFK Installation Team averages 8+ years of specialized experience and has completed 450+ successful conversions with a perfect safety record across all generator brands."
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: "Dynamic Load Optimization",
      description: "Our proprietary 18-point calibration protocol precisely tunes the system across 12 different load profiles, achieving 30% higher substitution rates than standard installations."
    },
    {
      icon: <Gauge className="h-5 w-5 text-primary" />,
      title: "Performance Certification Protocol",
      description: "Our rigorous 72-hour testing regimen subjects your system to 14 distinct operational scenarios including extreme load variations, guaranteeing flawless performance under any condition."
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: "Intelligent Control Integration",
      description: "Our advanced integration service connects your dual fuel system to existing BMS/SCADA systems, providing unified monitoring and remote management capabilities not available from other providers."
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: "Compliance Documentation Package",
      description: "Our comprehensive certification package includes 100+ pages of testing data, warranty documentation, and site-specific optimization parameters that satisfy all insurance and regulatory requirements."
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Certified Operator Acceleration Program",
      description: "Our intensive 3-day COAP training transforms your staff into dual fuel specialists through hands-on scenarios, proprietary troubleshooting simulations, and 24/7 post-installation support access."
    }
  ];

  const benefits = [
    {
      title: "Industry-Leading 50-65% Substitution Rates",
      description: "Our proprietary calibration methodology consistently achieves 50-65% diesel substitution rates versus the industry average of 30-40%, delivering substantially higher cost savings from day one."
    },
    {
      title: "Zero-Downtime Implementation",
      description: "Our revolutionary phased installation approach ensures continuous power availability throughout the entire conversion process, eliminating revenue or productivity losses."
    },
    {
      title: "Extend Generator Lifespan by 18-25%",
      description: "Our precision implementation reduces engine wear by 18-25% through optimized combustion dynamics, lower operating temperatures, and reduced carbon deposits, extending service intervals and asset life."
    },
    {
      title: "Guaranteed 34% Minimum Cost Reduction",
      description: "We provide the industry's only written guarantee of at least 34% fuel cost reduction within the first year of operation, backed by our performance bond and verified by third-party monitoring."
    },
    {
      title: "99.997% System Reliability",
      description: "Our installations maintain 99.997% operational reliability - significantly exceeding the 98.5% industry average - due to our proprietary safeguard protocols and component redundancies."
    },
    {
      title: "Immediate Operator Proficiency",
      description: "Clients report 96% operator confidence scores immediately following our training program, enabling your staff to maximize system benefits from the first day of independent operation."
    }
  ];

  return (
    <ServicePageTemplate
      title="Precision Dual Fuel Conversion"
      subtitle="Maximum Savings Through Superior Implementation"
      description="Unlock the full potential of your generators with our industry-leading dual fuel conversion service. While standard installations achieve only 30-40% diesel substitution, our proprietary calibration methodology consistently delivers 50-65% substitution rates with enhanced reliability and zero operational disruption."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-installation.jpg"
      callToAction={{
        title: "Cut Your Fuel Costs by 34% - Guaranteed",
        description: "Join the 450+ organizations currently saving millions through our advanced dual fuel conversion technology. We're so confident in our results that we guarantee at least 34% fuel cost reduction in the first year.",
        buttonText: "Calculate Your Fuel Savings",
        buttonLink: "/contact"
      }}
    />
  );
};

export default DFKInstallationPage;