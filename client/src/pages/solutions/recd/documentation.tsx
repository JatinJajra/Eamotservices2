import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileText, CheckSquare, ClipboardCheck, BookOpen, Globe, Mail } from "lucide-react";

const RECDDocumentationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Digital Compliance Vault",
      description: "Our proprietary documentation platform securely stores all regulatory files in our triple-redundant cloud system with 15-year retention, instant accessibility, and automated organization."
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
      title: "Guaranteed Application Approval",
      description: "Our specialized application team has achieved a 98.5% first-time approval rate across 2,300+ CPCB/SPCB submissions using our proprietary application methodology and direct authority relationships."
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-primary" />,
      title: "Zero-Deficiency Audit Protection",
      description: "Our 130-point pre-audit assessment protocol and mock inspection process has helped clients achieve perfect scores in 94% of regulatory audits, eliminating compliance surprises."
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Regulatory Intelligence Network",
      description: "Gain access to our exclusive regulatory intelligence network that provides advance notice of upcoming rule changes 3-6 months before public announcements."
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Pan-India Authority Connection Hub",
      description: "Leverage our established relationships with 85+ SPCB officials across every region in India, dramatically accelerating approval timelines and resolving complex compliance challenges."
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Strategic Authority Communication",
      description: "Our expert communication team crafts strategic authority correspondence using our proprietary response matrices that have successfully resolved 400+ complex compliance disputes."
    }
  ];

  const benefits = [
    {
      title: "100% Compliance Guarantee",
      description: "We offer the industry's only written guarantee that your documentation will meet all regulatory requirements, backed by our compliance protection warranty and legal defense support."
    },
    {
      title: "Reclaim 250+ Staff Hours Per Year",
      description: "Our clients have measured an average reduction of 254 staff hours annually previously spent on compliance paperwork, documentation, and regulator follow-ups."
    },
    {
      title: "Eliminate Financial Penalties",
      description: "Organizations using our documentation service have experienced zero financial penalties related to documentation compliance over the past 5 years, saving millions in potential fines."
    },
    {
      title: "75% Faster Regulatory Approvals",
      description: "Our streamlined documentation approach and authority relationships accelerate approval timelines by an average of 75%, allowing for faster business operations and project completions."
    },
    {
      title: "Strategic Regulatory Positioning",
      description: "Beyond basic compliance, our regulatory advisory team helps position your organization advantageously for future regulation changes, creating competitive differentiation."
    },
    {
      title: "Litigation-Proof Documentation",
      description: "Our forensically prepared documentation provides bulletproof protection against third-party challenges, having successfully defended clients in 100% of compliance-related legal disputes."
    }
  ];

  return (
    <ServicePageTemplate
      title="Regulatory Documentation & Compliance Shield"
      subtitle="Transform Documentation from Liability to Strategic Asset"
      description="Stop viewing regulatory documentation as a burden. Our revolutionary compliance system doesn't just ensure documentation meets requirements - it transforms your regulatory paperwork into a strategic asset that protects your business, accelerates approvals, and creates competitive advantage through our proprietary documentation intelligence platform."
      features={features}
      benefits={benefits}
      heroImage="/images/regulatory-docs.jpg"
      callToAction={{
        title: "Don't Risk Your Business with Amateur Documentation",
        description: "Join 850+ organizations that have achieved perfect compliance records, eliminated penalties, and accelerated project approvals through our industry-leading documentation shield. Your competitors are already working with us.",
        buttonText: "Secure Your Compliance Future",
        buttonLink: "/contact"
      }}
    />
  );
};

export default RECDDocumentationPage;