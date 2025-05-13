import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Shield, BarChart, 
  CircuitBoard, 
  Cpu
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function RECDIntegrationPage() {
  const { ref: heroRef, inView: heroInView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-[#0a1a3a] min-h-screen">
      {/* Hero Section with solid background */}
      <section 
        ref={heroRef}
        className="bg-[#0a1a3a] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          {/* Hero header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-700 text-white">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Advanced Emission Control</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              RECD <span className="text-blue-400">Integration</span> Services
            </h1>
            
            <p className="text-xl text-white mb-8 leading-relaxed">
              Seamlessly integrate next-generation Retrofit Emission Control Devices with your existing systems for enhanced performance, substantial emissions reduction, and full regulatory compliance.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#0c2150] p-8 rounded-xl border border-blue-900">
              <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Emission Control Module</h3>
              <p className="text-gray-200">The central brain of the RECD system, processing sensor data and adjusting parameters in real-time to minimize emissions while maintaining optimal performance.</p>
            </div>
            
            <div className="bg-[#0c2150] p-8 rounded-xl border border-blue-900">
              <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Catalyst Chamber</h3>
              <p className="text-gray-200">Advanced catalytic chamber utilizing precious metals to facilitate chemical reactions that convert NOx, CO, and hydrocarbons into nitrogen, carbon dioxide, and water.</p>
            </div>
            
            <div className="bg-[#0c2150] p-8 rounded-xl border border-blue-900">
              <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Sensor Array</h3>
              <p className="text-gray-200">Sophisticated network of temperature, pressure, and composition sensors that continuously monitor exhaust gas conditions and feed data to the control module.</p>
            </div>
            
            <div className="bg-[#0c2150] p-8 rounded-xl border border-blue-900">
              <div className="p-3 bg-blue-700 rounded-lg inline-block mb-4">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Data Analysis System</h3>
              <p className="text-gray-200">Powerful software suite that provides real-time analytics, historical performance trends, and regulatory compliance reporting capabilities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Process Section */}
      <section className="bg-[#0c2150] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Integration Process</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional field integration services for Real-time Emission Control Devices (RECD), ensuring seamless installation, configuration, and compliance with regulatory standards.</p>
          </div>
          
          <div className="bg-[#0a1a3a] p-8 rounded-xl border border-blue-900 mt-8">
            <div className="flex flex-wrap justify-center gap-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Integration Service
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
