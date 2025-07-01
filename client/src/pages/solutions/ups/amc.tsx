import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Wrench, 
  Battery, 
  AlertTriangle, 
  Shield, 
  Clock,
  Check,
  Zap,
  FileText,
  Phone,
  Users,
  HeartPulse
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'wouter';
import ContactModal from '@/components/Popup/ContectModal';

const UPSAMCPage: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  const amcFeatures = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Scheduled Preventive Maintenance',
      description: 'Regular, manufacturer-recommended preventive maintenance visits with comprehensive system inspections and testing.',
      color: 'bg-blue-50'
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: 'Expert Technical Support',
      description: 'Access to certified UPS technicians for troubleshooting, guidance, and operational support throughout the contract period.',
      color: 'bg-green-50'
    },
    {
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: 'Battery Health Management',
      description: 'Regular battery testing, health assessment, and proactive replacement recommendations to prevent unexpected failures.',
      color: 'bg-purple-50'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: 'Emergency Response Service',
      description: 'Priority emergency response with guaranteed response times for critical issues affecting UPS operation.',
      color: 'bg-red-50'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Parts & Labor Coverage',
      description: 'Comprehensive coverage for replacement parts and labor costs based on the selected service level agreement.',
      color: 'bg-amber-50'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Performance Monitoring',
      description: 'Regular performance analysis and reporting with recommendations for optimization and system improvements.',
      color: 'bg-indigo-50'
    }
  ];

  // These are the service levels for our AMC plans
  const serviceLevels = [
    {
      name: "Standard",
      ideal: "Low-usage or stable environments",
      features: [
        "Quarterly preventive maintenance visits",
        "Breakdown visit limit- 4 in a year.",
        "Visual inspection of UPS & battery bank",
        "Cleaning of UPS system and terminals",
        "Battery health assessment",
        "Dedicated technical support available during business hours",
        "First-level response time (TAT) 24 Hours"
      ],
      icon: <Shield className="h-10 w-10 text-primary/80" />,
      highlight: false
    },
    {
      name: "Premium",
      ideal: "Mid-critical applications like offices, banks, and retail spaces",
      features: [
        "Bi-monthly preventive maintenance visits",
        "Breakdown visit limit- 6 in a year",
        "Checking logs and event history from UPS memory ",
        "Extended technical support (7 AM - 9 PM, 7 days)",
        "Recommendations on battery or part replacement in advance ",
        "+Everything in basic",
        "Recommendations on battery or part replacement in advance "
      ],
      icon: <Shield className="h-10 w-10 text-primary" />,
      highlight: true
    },
    {
      name: "Platinum",
      ideal: "Critical environments like hospitals, data centers, etc.",
      features: [
        "Monthly preventive maintenance visits",
        "Assistance with remote monitoring setup provided where applicable",
        "Full battery bank audit (Quarterly) ",
        "Trending analysis on UPS performance ",
        "Unlimited Emergency breakdown visits",
        "Spare parts inventory planning support ",
        "First-level response time (TAT) 4-6 Hours. "
      ],
      icon: <Shield className="h-10 w-10 text-accent" />,
      highlight: false
    }
  ];

  // These are the maintenance procedures performed during visits
  const maintenanceProcedures = [
    {
      name: "Electrical Tests",
      procedures: [
        "Input/output voltage measurement and adjustment",
        "Phase imbalance measurement",
        "Current harmonics analysis",
        "Transfer switch functionality testing",
        "Bypass circuit verification"
      ],
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      name: "Battery System",
      procedures: [
        "Terminal inspection and cleaning",
        "Individual cell voltage testing",
        "Specific gravity measurement (wet cells)",
        "Internal resistance testing",
        "Runtime verification tests"
      ],
      icon: <Battery className="h-6 w-6 text-primary" />
    },
    {
      name: "Physical Inspection",
      procedures: [
        "Capacitor inspection for leakage or bulging",
        "Cooling system cleaning and testing",
        "PCB inspection for discoloration",
        "Terminal connection torque verification",
        "Cabinet cleaning and environmental assessment"
      ],
      icon: <Wrench className="h-6 w-6 text-primary" />
    },
    {
      name: "Control Systems",
      procedures: [
        "Firmware/software update installation",
        "Alarm history analysis",
        "Control panel functionality testing",
        "Communication interface verification",
        "Parameter settings optimization"
      ],
      icon: <FileText className="h-6 w-6 text-primary" />
    }
  ];

  // These are key benefits of having an AMC
  const keyBenefits = [
    {
      title: "Extended Lifespan",
      description: "Regular maintenance extends UPS lifespan by up to 40% versus unserviced units, providing greater ROI on your investment.",
      icon: <HeartPulse className="h-10 w-10 text-accent" />
    },
    {
      title: "Reduced Downtime",
      description: "Preventive maintenance reduces unexpected failures by up to 70%, protecting your critical operations from costly interruptions.",
      icon: <Clock className="h-10 w-10 text-accent" />
    },
    {
      title: "Total Cost Reduction",
      description: "Planned maintenance costs 50-80% less than emergency service calls and replacement costs from premature system failure.",
      icon: <Shield className="h-10 w-10 text-accent" />
    },
    {
      title: "Expert Knowledge Access",
      description: "Direct access to certified technicians provides peace of mind and expedited resolution of technical issues.",
      icon: <Users className="h-10 w-10 text-accent" />
    }
  ];

  return (
    <>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden py-24">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">UPS Annual Maintenance Contract</h1>
                <p className="text-xl opacity-90 mb-8 max-w-xl">
                  Comprehensive maintenance coverage and technical support that ensures maximum reliability for your critical UPS infrastructure.
                </p>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Explore AMC Options</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="UPS Maintenance" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/30 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg py-3 px-5 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-primary font-semibold">24/7 AMC Helpline: 1800-200-3000</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden py-24">
  <div className="absolute inset-0 opacity-20 text-white">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect width="80" height="80" fill="url(#smallGrid)"/>
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">UPS Annual Maintenance Contract</h1>
          <p className="text-xl opacity-90 mb-8 max-w-xl text-gray-300">
            Comprehensive maintenance coverage and technical support that ensures maximum reliability for your critical UPS infrastructure.
          </p>
          <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
            <Link href="#">Explore AMC Options</Link>
          </Button>
        </motion.div>
      </div>
      
      <div className="w-full lg:w-1/2 lg:pl-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="UPS Maintenance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg py-3 px-5 shadow-lg">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">24/7 AMC Helpline: 1800-200-3000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>


      {/* Key AMC Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive UPS Maintenance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our UPS Annual Maintenance Contract covers all aspects of UPS maintenance and support to ensure optimal performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amcFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Service Level</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer multiple AMC service levels to meet the specific needs of your business and critical infrastructure requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full border-none shadow-lg ${level.highlight ? 'ring-2 ring-primary' : ''} relative`}>
                  {level.highlight && (
                    <div className="absolute top-0 inset-x-0 bg-primary text-white text-center text-sm py-1 rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`pb-4 ${level.highlight ? 'pt-8' : 'pt-6'}`}>
                    <div className="mx-auto mb-4">{level.icon}</div>
                    <CardTitle className="text-2xl text-center">{level.name}</CardTitle>
                    <p className="text-sm text-center text-gray-500">Ideal for: {level.ideal}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className={`h-5 w-5 ${level.highlight ? 'text-primary' : 'text-green-500'} mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild className={`w-full ${level.highlight ? 'bg-primary hover:bg-primary/90' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                        <Link href="/contact">Request Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Procedures */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AMC Maintenance Procedures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive maintenance protocol covers all critical aspects of your UPS system to ensure optimal performance
            </p>
          </div>

          <Tabs defaultValue="electrical" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <TabsTrigger value="battery">Battery</TabsTrigger>
              <TabsTrigger value="physical">Physical</TabsTrigger>
              <TabsTrigger value="control">Control</TabsTrigger>
            </TabsList>
            
            {maintenanceProcedures.map((procedure, index) => (
              <TabsContent key={index} value={procedure.name.toLowerCase().split(' ')[0]} className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    {procedure.icon}
                    <h3 className="text-2xl font-bold text-primary">{procedure.name} Maintenance</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {procedure.procedures.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-primary-50 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                      <p>All procedures are performed by certified technicians following manufacturer guidelines</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our UPS AMC?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protecting your critical power infrastructure delivers substantial business benefits beyond basic maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Protect Your UPS Investment?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90 text-gray-700">
              Contact our service team to discuss AMC options tailored to your specific UPS maintenance requirements.
            </p>
            <Button asChild size="lg" onClick={openModal} className="bg-white text-primary hover:bg-white/90">
              <Link href="#">Explore AMC Options</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UPSAMCPage;