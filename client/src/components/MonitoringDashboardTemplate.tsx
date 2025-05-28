import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  AlertTriangle, 
  BarChart4, 
  BellRing, 
  Smartphone, 
  Laptop, 
  Cloud, 
  Cpu
} from 'lucide-react';

interface MonitoringFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MonitoringBenefit {
  title: string;
  description: string;
}

interface MonitoringCapability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MonitoringDashboardTemplateProps {
  title: string;
  description: string;
  subtitle: string;
  heroImage?: string;
  features: MonitoringFeature[];
  benefits: MonitoringBenefit[];
  capabilities: MonitoringCapability[];
  customComponents?: React.ReactNode;
}

const MonitoringDashboardTemplate: React.FC<MonitoringDashboardTemplateProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  capabilities,
  customComponents
}) => {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: capabilitiesRef, inView: capabilitiesInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: customRef, inView: customInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900 text-white"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-primary mb-6">{subtitle}</p>
            <p className="text-gray-300 mb-8">{description}</p>
            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90">
                Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="lg:w-1/2">
              <img
                src={heroImage}
                alt={title}
                className="rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Real-Time Monitoring Features
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our advanced monitoring system provides exceptional visibility into your power equipment performance with these key features
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Benefits of Smart Monitoring
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Implementing our monitoring solution delivers these transformative benefits for your organization
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
        ref={capabilitiesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 bg-gray-800 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Our monitoring platform leverages the latest technology to deliver these powerful capabilities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Custom Components Section */}
      {customComponents && (
        <motion.section
          ref={customRef}
          initial={{ opacity: 0, y: 50 }}
          animate={customInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Monitoring Insights
            </h2>
            {customComponents}
          </div>
        </motion.section>
      )}

      {/* Call to Action Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 bg-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Monitoring?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a personalized demonstration of our monitoring platform and discover how it can help optimize your equipment performance, reduce downtime, and save costs.
          </p>
          <Button
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
            size="lg"
          >
            Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.section>
    </>
  );
};

export default MonitoringDashboardTemplate;