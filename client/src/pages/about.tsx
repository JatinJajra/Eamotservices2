import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-primary-800 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About EAMOT
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl opacity-90 mb-8"
            >
              Driving innovation in energy management solutions since 2007
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                EAMOT was founded with a vision to revolutionize how businesses manage their energy resources. 
                Starting as a small team of engineers passionate about sustainable energy solutions, we've grown 
                into a leading provider of comprehensive energy management services across India.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team combines deep technical expertise with a customer-first approach, ensuring that every 
                solution we deliver is tailored to the unique needs of our clients. We believe that effective 
                energy management is not just about cutting costs, but about creating sustainable, efficient, 
                and reliable power systems that support business growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center md:w-36">
                  <span className="text-primary text-3xl font-bold mb-2">15+</span>
                  <span className="text-gray-600 text-center">Years of Experience</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center md:w-36">
                  <span className="text-primary text-3xl font-bold mb-2">500+</span>
                  <span className="text-gray-600 text-center">Clients Served</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center md:w-36">
                  <span className="text-primary text-3xl font-bold mb-2">30%</span>
                  <span className="text-gray-600 text-center">Average Energy Savings</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="EAMOT Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-lg shadow-lg">
                <p className="text-white font-bold text-xl">Backed by Experience,<br />Powered by IoT</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-5 mb-5"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative energy management solutions that optimize performance, 
                reduce costs, and contribute to a sustainable future. We strive to deliver exceptional service
                and cutting-edge technology that addresses the unique energy challenges of each client.
              </p>
              <div className="mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Provide reliable energy solutions that minimize downtime</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Reduce energy consumption and operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Integrate IoT technology for smarter energy management</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading innovator in energy management solutions, recognized for excellence in service, 
                technological advancement, and commitment to sustainability. We envision a future where every 
                business has access to efficient, reliable, and intelligent energy systems.
              </p>
              <div className="mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Pioneer new approaches to energy efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Set the industry standard for IoT-enabled energy solutions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb text-accent mt-1 mr-3"></i>
                    <span className="text-gray-700">Create a positive environmental impact through our work</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-5 mb-5"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at EAMOT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-handshake",
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical standards that earn our clients' trust."
              },
              {
                icon: "fa-chart-line",
                title: "Excellence",
                description: "We strive for excellence in every solution we deliver, ensuring the highest quality and performance."
              },
              {
                icon: "fa-lightbulb",
                title: "Innovation",
                description: "We constantly pursue new ideas and technologies to provide cutting-edge energy management solutions."
              },
              {
                icon: "fa-users",
                title: "Customer Focus",
                description: "We put our clients at the center of everything we do, tailoring solutions to their specific needs."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-5 mx-auto">
                  <i className={`fas ${value.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary text-center">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Energy Systems?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Contact our team today to discuss how our energy management solutions can 
              help your business save money and improve operational efficiency.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 h-auto shadow-lg shadow-accent/20">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}