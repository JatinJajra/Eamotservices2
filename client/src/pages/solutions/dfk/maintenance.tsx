import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench, Clock, AlertTriangle, FileCheck, CheckSquare, Calendar } from "lucide-react";

const DFKMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: "Profit-Protection Maintenance Protocol",
      description: "Our proprietary 86-point preventive maintenance system specifically targets the 7 critical failure points of dual fuel systems that standard maintenance programs miss entirely."
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: "Dual Fuel Master Technicians",
      description: "Our elite maintenance specialists complete 240+ hours of dual fuel-specific training and maintain a 99.6% first-time fix rate, dramatically higher than the industry average of 68%."
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: "Dynamic Micro-Calibration System",
      description: "Our advanced recalibration process optimizes 28 separate system parameters that maintain 98.7% of your initial substitution rates throughout the entire service life of your system."
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: "Remote Predictive Diagnostics",
      description: "Our industry-exclusive remote diagnostics platform identifies 93% of potential failures 18-21 days before they affect performance, preventing costly emergency repairs and downtime."
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Triple-Redundant Response Network",
      description: "Our unique service delivery model guarantees 4-hour emergency response in all metro areas and 12-hour response nationwide with performance-based SLAs backed by financial guarantees."
    },
    {
      icon: <FileCheck className="h-5 w-5 text-primary" />,
      title: "Regulatory-Grade Documentation Suite",
      description: "Our comprehensive digital maintenance platform produces legally-defensible maintenance records that have successfully defended clients in 100% of warranty disputes and regulatory audits."
    }
  ];

  const benefits = [
    {
      title: "Maintain 94-97% of Initial Substitution Rates",
      description: "While competitors' systems typically lose 15-20% efficiency after 12 months, our maintenance protocol maintains 94-97% of your initial substitution rates throughout the system life cycle."
    },
    {
      title: "Add 5-7 Years to Generator Lifespan",
      description: "Our maintenance methodology has documented success extending generator lifespan by 5-7 years beyond normal expectations through precision care of critical components and combustion dynamics."
    },
    {
      title: "99.8% Unplanned Downtime Prevention",
      description: "Organizations on our premium maintenance plan experience 99.8% uptime for dual fuel systems compared to the industry average of 92.3%, translating to 36+ more production days annually."
    },
    {
      title: "Save ₹7.8L+ in Annual Operating Costs",
      description: "Beyond fuel savings, our clients save an average of ₹7.8 lakhs annually in reduced repair costs, extended component life, and optimized service intervals versus standard maintenance."
    },
    {
      title: "Triple Warranty Coverage Duration",
      description: "Our certified maintenance program enables extended warranty provisions unavailable from any other provider, tripling your warranty coverage periods and eliminating expensive repair costs."
    },
    {
      title: "Lower Insurance Premiums by 12-18%",
      description: "Our clients qualify for specialized insurance rate reductions of 12-18% on equipment coverage by demonstrating lower risk profiles through our certified maintenance documentation."
    }
  ];

  return (
    <ServicePageTemplate
      title="Lifetime Performance Guarantee"
      subtitle="Protect & Maximize Your Dual Fuel Investment"
      description="Standard maintenance programs allow up to 20% efficiency degradation within the first year, costing you millions in lost fuel savings. Our proprietary maintenance system is the only solution that guarantees 94-97% of your initial substitution rates throughout the entire system lifecycle, while extending equipment life and virtually eliminating unplanned downtime."
      features={features}
      benefits={benefits}
      heroImage="/images/dfk-maintenance.jpg"
      callToAction={{
        title: "Stop Losing ₹12-18 Lakhs in Degraded Performance",
        description: "The longer you wait, the more your system efficiency declines. Join the 300+ organizations that maintain peak performance year after year through our industry-leading maintenance program.",
        buttonText: "Lock In Your Performance Guarantee",
        buttonLink: "/contact"
      }}
    />
  );
};

export default DFKMaintenancePage;