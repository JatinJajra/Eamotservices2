import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";
import AboutPage from "@/pages/about";

// Service Pages
import DieselGenerator from "@/pages/services/DieselGenerator";
import UPS from "@/pages/services/UPS";
import Stabilizer from "@/pages/services/Stabilizer";
import LithiumIonInverter from "@/pages/services/lithium-ion-inverter";
import DualFuelKit from "@/pages/services/dual-fuel-kit";

// Solution Pages
import IoTSolutions from "@/pages/solutions/iot";
import EnergyManagement from "@/pages/solutions/energy-management";
import PredictiveMaintenance from "@/pages/solutions/predictive-maintenance";
import Retrofitting from "@/pages/solutions/retrofitting";

// Other Pages
import Careers from "@/pages/Careers";
import EnergyCalculator from "@/pages/EnergyCalculator";
import ProductDemo from "@/pages/ProductDemo";
import EnergySavingsCalculator from "@/pages/EnergySavingsCalculator";
import LoadingStatesPage from "@/pages/LoadingStates";

// Client Portal Pages
import ClientPortalLogin from "@/pages/client-portal/Login";
import ClientDashboard from "@/pages/client-portal/Dashboard";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        
        {/* Service Pages */}
        <Route path="/services/diesel-generator" component={DieselGenerator} />
        <Route path="/services/ups" component={UPS} />
        <Route path="/services/stabilizer" component={Stabilizer} />
        <Route path="/services/lithium-ion-inverter" component={LithiumIonInverter} />
        <Route path="/services/dual-fuel-kit" component={DualFuelKit} />
        
        {/* Solution Pages */}
        <Route path="/solutions/iot" component={IoTSolutions} />
        <Route path="/solutions/energy-management" component={EnergyManagement} />
        <Route path="/solutions/predictive-maintenance" component={PredictiveMaintenance} />
        <Route path="/solutions/retrofitting" component={Retrofitting} />
        
        {/* Other Pages */}
        <Route path="/careers" component={Careers} />
        <Route path="/energy-calculator" component={EnergyCalculator} />
        <Route path="/product-demo" component={ProductDemo} />
        <Route path="/energy-savings-calculator" component={EnergySavingsCalculator} />
        <Route path="/loading-states" component={LoadingStatesPage} />
        
        {/* Client Portal Pages */}
        <Route path="/client-portal/login" component={ClientPortalLogin} />
        <Route path="/client-portal/dashboard" component={ClientDashboard} />
        
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
