import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check, ArrowRight, Zap, Info, Clock, Settings, Shield } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactModal from './Popup/ContectModal';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceImageGalleryItem {
  url: string;
  alt: string;
  caption?: string;
}

interface ServiceFAQItem {
  question: string;
  answer: string;
}


interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  imageGallery?: ServiceImageGalleryItem[];
  faqs?: ServiceFAQItem[];
    heroVisual?: React.ReactNode; // ✅ move it here (top-level)

  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  imageGallery,
  faqs,
  callToAction,
    heroVisual, // ✅ Add this line here

}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);

console.log(heroVisual, "heroVisual");
  
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: benefitsRef, inView: benefitsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: galleryRef, inView: galleryInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
<motion.section
  ref={heroRef}
  initial={{ opacity: 0, y: 50 }}
  animate={heroInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-800 text-white"
>
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* Left Content */}
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{subtitle}</p>
        <p className="text-white text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex space-x-4">
          <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-white font-semibold">
            Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Visual */}
      {heroVisual && (
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {heroVisual}
        </div>
      )}

    </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Key Features & Capabilities
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Benefits
          </h2>
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

      {/* Image Gallery Section */}
      {imageGallery && imageGallery.length > 0 && (
        <motion.section
          ref={galleryRef}
          initial={{ opacity: 0, y: 50 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 bg-gray-900 text-white"
        >
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              {/* Our Projects */}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {/* {imageGallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {image.caption && (
                    <div className="p-4 bg-gray-800">
                      <p className="text-sm text-gray-300">{image.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))} */}
            </div>
          </div>
        </motion.section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <motion.section
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Call to Action Section */}
      {callToAction && (
        <motion.section
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-16 bg-gradient-to-r from-primary to-primary-dark"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {callToAction.title}
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {callToAction.description}
            </p>
            <Button
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-lg"
              size="lg"
              asChild
            >
              <a href={"#"}  onClick={openModal}>{callToAction.buttonText}</a>
            </Button>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ServicePageTemplate;