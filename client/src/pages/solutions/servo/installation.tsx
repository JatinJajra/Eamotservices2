import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Cable, ClipboardList, Zap, BookOpen, Shield } from 'lucide-react';

const ServoInstallationPage: React.FC = () => {
  const features = [
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      title: 'Strategic Site Assessment',
      description: 'Our engineers conduct a meticulous analysis of your facility, evaluating spatial requirements, access paths, and environmental factors to create an optimized installation plan.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: 'Precision Expert Installation',
      description: 'Our factory-certified specialists bring an average of 15+ years of experience in servo technology implementation, ensuring flawless installation on the first attempt.'
    },
    {
      icon: <Cable className="h-5 w-5 text-primary" />,
      title: 'Seamless System Integration',
      description: 'We expertly integrate your stabilizer with existing power infrastructure, ensuring perfect compatibility with distribution panels, circuit protection, and monitoring systems.'
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Performance Validation',
      description: 'Our 27-point commissioning protocol tests your stabilizer across multiple voltage scenarios and load conditions, verifying optimal performance for your specific requirements.'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: 'Interactive Staff Training',
      description: 'We empower your team through hands-on training sessions covering operation procedures, parameter monitoring, quick troubleshooting, and maintenance best practices.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Complete Documentation Package',
      description: 'Receive a comprehensive documentation portfolio including installation certificates, test results, warranty registration, maintenance schedules, and operation manuals.'
    },
  ];

  const benefits = [
    {
      title: 'Guaranteed Peak Performance',
      description: 'Experience up to 98% efficiency with our precision installation ensuring your stabilizer delivers optimal voltage regulation under all operating conditions.'
    },
    {
      title: 'Total Safety Assurance',
      description: 'Rest easy knowing your installation exceeds all electrical safety standards with proper grounding, circuit protection, and safety interlocks professionally implemented.'
    },
    {
      title: 'Extended Equipment Lifespan',
      description: 'Proper installation by our certified technicians can extend your stabilizer lifespan by 30-40% while maintaining full manufacturer warranty protection.'
    },
    {
      title: 'Minimum Business Disruption',
      description: 'Our streamlined installation process typically completes 40% faster than industry averages, with options for after-hours implementation to eliminate operational downtime.'
    },
    {
      title: 'Comprehensive Equipment Safeguarding',
      description: 'Our installation includes advanced integration with existing protection systems, creating multiple layers of defense for your valuable equipment investments.'
    },
    {
      title: 'Immediate Operational Confidence',
      description: 'Begin using your new system immediately with complete confidence through our thorough testing, certification, and staff training protocols.'
    },
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Installation"
      subtitle="Expert Stabilizer Implementation & Integration"
      description="Transform your power quality management with our precision servo stabilizer installation service. Our expert technicians ensure flawless implementation, perfect system integration, and comprehensive performance validation - maximizing your stabilizer's effectiveness from day one."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-installation.jpg"
      callToAction={{
        title: "Ensure Perfect Installation & Performance",
        description: "Don't risk improper installation compromising your investment. Our certified technicians deliver guaranteed results with minimal disruption to your operations.",
        buttonText: "Schedule Expert Installation",
        buttonLink: "/contact",
      }}
    />
  );
};

export default ServoInstallationPage;