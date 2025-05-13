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

// Detailed Solution Pages
import DGProcurementPage from "@/pages/solutions/diesel-generator/procurement";
import DGInstallationPage from "@/pages/solutions/diesel-generator/installation";
import DGSolutionAMCPage from "@/pages/solutions/diesel-generator/amc";
import DGOverhaulPage from "@/pages/solutions/diesel-generator/overhaul";
import DGMonitoringPage from "@/pages/solutions/diesel-generator/monitoring";
import UPSSourcingPage from "@/pages/solutions/ups/sourcing";
import UPSBatteryPage from "@/pages/solutions/ups/battery";
import UPSAMCPage from "@/pages/solutions/ups/amc";
import UPSMonitoringPage from "@/pages/solutions/ups/monitoring";
import ServoSizingPage from "@/pages/solutions/servo/sizing";
import ServoProcurementPage from "@/pages/solutions/servo/procurement";
import ServoInstallationPage from "@/pages/solutions/servo/installation";
import ServoAMCPage from "@/pages/solutions/servo/amc";
import ServoMonitoringPage from "@/pages/solutions/servo/monitoring";
import RECDAdvisoryPage from "@/pages/solutions/recd/advisory";
import RECDProcurementPage from "@/pages/solutions/recd/procurement";
import RECDIntegrationPage from "@/pages/solutions/recd/integration";
import RECDMonitoringPage from "@/pages/solutions/recd/monitoring";
import RECDDocumentationPage from "@/pages/solutions/recd/documentation";
import DFKAssessmentPage from "@/pages/solutions/dfk/assessment";
import DFKProcurementPage from "@/pages/solutions/dfk/procurement";
import DFKInstallationPage from "@/pages/solutions/dfk/installation";
import DFKAnalyticsPage from "@/pages/solutions/dfk/analytics";
import DFKMaintenancePage from "@/pages/solutions/dfk/maintenance";

// Detailed Service Pages
import DGServiceAMCPage from "@/pages/services/amc/diesel-generator";
import CQAMRegistrationPage from "@/pages/services/emission/cqam";
import AssessmentPage from "@/pages/services/installation/assessment";
import TurnkeyInstallationPage from "@/pages/services/installation/turnkey";
import SynchronizationPage from "@/pages/services/installation/synchronization";
import DocumentationHandoverPage from "@/pages/services/installation/documentation";
import UPSAmcPage from "@/pages/services/amc/ups";
import ServoStabilizerAmcPage from "@/pages/services/amc/servo-stabilizer";
import PreventiveMaintenancePage from "@/pages/services/amc/preventive";

// Monitoring Dashboard Pages
import DGMonitoringDashboard from "@/pages/monitoring/dg";
import UPSMonitoringDashboard from "@/pages/monitoring/ups";
import ServoMonitoringDashboard from "@/pages/monitoring/servo";
import RECDMonitoringDashboard from "@/pages/monitoring/recd";
import AnalyticsMonitoringDashboard from "@/pages/monitoring/analytics";
import PlatformMonitoringDashboard from "@/pages/monitoring/platform";

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
        
        {/* Installation & Integration */}
        <Route path="/services/installation/assessment" component={AssessmentPage} />
        <Route path="/services/installation/turnkey" component={TurnkeyInstallationPage} />
        <Route path="/services/installation/synchronization" component={SynchronizationPage} />
        <Route path="/services/installation/documentation" component={DocumentationHandoverPage} />
        
        {/* Annual Maintenance Contracts */}
        <Route path="/services/amc/diesel-generator" component={DGServiceAMCPage} />
        <Route path="/services/amc/ups" component={UPSAmcPage} />
        <Route path="/services/amc/servo-stabilizer" component={ServoStabilizerAmcPage} />
        <Route path="/services/amc/preventive" component={PreventiveMaintenancePage} />
        <Route path="/services/amc/emergency" component={() => <h1>Emergency Breakdown Services</h1>} />
        
        {/* Spare Parts Sourcing */}
        <Route path="/services/parts/dg-engine" component={() => <h1>DG Engine & Alternator Parts</h1>} />
        <Route path="/services/parts/ups-modules" component={() => <h1>UPS Modules & Batteries</h1>} />
        <Route path="/services/parts/servo-control" component={() => <h1>Servo Control Components</h1>} />
        <Route path="/services/parts/recd-spares" component={() => <h1>RECD Spares</h1>} />
        <Route path="/services/parts/logistics" component={() => <h1>Logistics & Delivery Support</h1>} />
        
        {/* Emission Compliance Services */}
        <Route path="/services/emission/cqam" component={CQAMRegistrationPage} />
        <Route path="/services/emission/recd-integration" component={() => <h1>On-field RECD Integration</h1>} />
        <Route path="/services/emission/testing" component={() => <h1>Emission Testing Coordination</h1>} />
        <Route path="/services/emission/reporting" component={() => <h1>Compliance Reporting</h1>} />
        
        {/* Smart Monitoring */}
        <Route path="/monitoring/dg" component={DGMonitoringDashboard} />
        <Route path="/monitoring/ups" component={UPSMonitoringDashboard} />
        <Route path="/monitoring/servo" component={ServoMonitoringDashboard} />
        <Route path="/monitoring/recd" component={RECDMonitoringDashboard} />
        <Route path="/monitoring/analytics" component={AnalyticsMonitoringDashboard} />
        <Route path="/monitoring/platform" component={PlatformMonitoringDashboard} />
        
        {/* Solutions Pages */}
        {/* Diesel Generator Solutions */}
        <Route path="/solutions/diesel-generator/procurement" component={DGProcurementPage} />
        <Route path="/solutions/diesel-generator/installation" component={DGInstallationPage} />
        <Route path="/solutions/diesel-generator/amc" component={DGSolutionAMCPage} />
        <Route path="/solutions/diesel-generator/overhaul" component={DGOverhaulPage} />
        <Route path="/solutions/diesel-generator/monitoring" component={DGMonitoringPage} />
        
        {/* UPS System Solutions */}
        <Route path="/solutions/ups/sourcing" component={UPSSourcingPage} />
        <Route path="/solutions/ups/battery" component={UPSBatteryPage} />
        <Route path="/solutions/ups/amc" component={UPSAMCPage} />
        <Route path="/solutions/ups/monitoring" component={UPSMonitoringPage} />
        
        {/* Servo Stabilizer Solutions */}
        <Route path="/solutions/servo/sizing" component={ServoSizingPage} />
        <Route path="/solutions/servo/procurement" component={ServoProcurementPage} />
        <Route path="/solutions/servo/installation" component={ServoInstallationPage} />
        <Route path="/solutions/servo/amc" component={ServoAMCPage} />
        <Route path="/solutions/servo/monitoring" component={ServoMonitoringPage} />
        
        {/* RECD Compliance Solutions */}
        <Route path="/solutions/recd/advisory" component={RECDAdvisoryPage} />
        <Route path="/solutions/recd/procurement" component={RECDProcurementPage} />
        <Route path="/solutions/recd/integration" component={RECDIntegrationPage} />
        <Route path="/solutions/recd/monitoring" component={RECDMonitoringPage} />
        <Route path="/solutions/recd/documentation" component={RECDDocumentationPage} />
        
        {/* Dual Fuel Kit Conversions */}
        <Route path="/solutions/dfk/assessment" component={DFKAssessmentPage} />
        <Route path="/solutions/dfk/procurement" component={DFKProcurementPage} />
        <Route path="/solutions/dfk/installation" component={DFKInstallationPage} />
        <Route path="/solutions/dfk/analytics" component={DFKAnalyticsPage} />
        <Route path="/solutions/dfk/maintenance" component={DFKMaintenancePage} />
        
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