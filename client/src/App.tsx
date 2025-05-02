import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

// Service Pages
import DieselGenerator from "@/pages/services/DieselGenerator";
import UPS from "@/pages/services/UPS";
import Stabilizer from "@/pages/services/Stabilizer";

// Other Pages
import Careers from "@/pages/Careers";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Service Pages */}
        <Route path="/services/diesel-generator" component={DieselGenerator} />
        <Route path="/services/ups" component={UPS} />
        <Route path="/services/stabilizer" component={Stabilizer} />
        
        {/* Other Pages */}
        <Route path="/careers" component={Careers} />
        
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
