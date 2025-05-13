import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wrench, Clock, AlertTriangle, Calendar, Settings, Shield } from 'lucide-react';

const ServoAMCPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: 'Precision Preventive Maintenance',
      description: 'Our factory-trained technicians perform thorough 42-point inspections and maintenance procedures specifically tailored to your stabilizer model and operating environment.'
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: '24/7 Expert Technical Support',
      description: 'Gain unlimited access to our dedicated technical support team with stabilizer specialists available around the clock to solve any operational challenges immediately.'
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: 'Advanced Performance Optimization',
      description: 'Our proprietary calibration protocols fine-tune your stabilizer to achieve peak efficiency, precision voltage regulation, and optimal response time to fluctuations.'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: 'Rapid Emergency Response',
      description: 'Our guaranteed 4-hour emergency response time ensures critical issues are addressed immediately, with priority dispatching of specialized technicians to your site.'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Comprehensive Parts & Labor Coverage',
      description: 'Eliminate unexpected repair costs with our all-inclusive coverage for genuine replacement parts, skilled labor, and emergency services based on your selected plan.'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: 'Proactive Performance Monitoring',
      description: 'Our advanced diagnostic analysis identifies potential issues before they cause failures, with detailed performance reports and optimization recommendations delivered quarterly.'
    }
  ];

  const benefits = [
    {
      title: 'Guaranteed 99.9% System Uptime',
      description: 'Our comprehensive maintenance approach has delivered industry-leading 99.9% stabilizer availability across our client base, ensuring your power quality never falters.'
    },
    {
      title: 'Double Your Equipment Lifespan',
      description: 'Our clients typically see stabilizer operational life extended by 80-100% beyond manufacturer specifications through our specialized maintenance protocols.'
    },
    {
      title: 'Reduce Total Ownership Costs by 40%',
      description: 'Our preventive approach transforms unpredictable emergency expenses into planned maintenance, cutting lifetime stabilizer ownership costs by up to 40%.'
    },
    {
      title: 'VIP Technical Support Access',
      description: 'Skip the queue with our dedicated AMC client hotline, providing immediate access to senior technicians who are familiar with your specific installation.'
    },
    {
      title: 'Zero Unexpected Downtime',
      description: 'Our proactive maintenance approach has helped clients achieve zero unexpected stabilizer failures across thousands of installations over the past five years.'
    },
    {
      title: 'Complete Risk Elimination',
      description: 'Transfer all stabilizer performance risks to our expert team, allowing you to focus on your core operations with absolute confidence in your power quality infrastructure.'
    }
  ];

  return (
    <ServicePageTemplate
      title="Servo Stabilizer Annual Maintenance Contract"
      subtitle="Premium Stabilizer Protection Program"
      description="Safeguard your critical power infrastructure with our industry-leading Servo Stabilizer Maintenance Program. More than just basic servicing, our comprehensive AMC delivers proactive optimization, guaranteed uptime, and complete performance protection - eliminating all stabilizer-related risks from your operation."
      features={features}
      benefits={benefits}
      heroImage="/images/servo-amc.jpg"
      callToAction={{
        title: "Secure Your Power Quality Today",
        description: "Join the hundreds of organizations who have eliminated stabilizer failures and reduced maintenance costs by up to 40% with our custom-tailored maintenance programs.",
        buttonText: "Get Unbreakable Stabilizer Protection",
        buttonLink: "/contact"
      }}
    />
  );
};

export default ServoAMCPage;