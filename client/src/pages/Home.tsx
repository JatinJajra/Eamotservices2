import { motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import StatsCounter from "@/sections/StatsCounter";
import ServicesSection from "@/sections/ServicesSection";
import FeaturesSection from "@/sections/FeaturesSection";
import ClientsSection from "@/sections/ClientsSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <ServicesSection />
      <FeaturesSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </motion.div>
  );
}
