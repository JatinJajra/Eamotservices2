import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

// Energy rates by region (in INR per kWh)
const ENERGY_RATES = {
  "Karnataka": 8.5,
  "Tamil Nadu": 7.85,
  "Maharashtra": 9.2,
  "Delhi": 8.9,
  "Uttar Pradesh": 7.2,
  "West Bengal": 7.8,
  "Telangana": 8.3,
  "Andhra Pradesh": 7.95,
};

// Energy consumption of common appliances (in watts)
const APPLIANCES = {
  "Air Conditioner (1.5 ton)": 1500,
  "Refrigerator": 200,
  "LED TV (40-inch)": 60,
  "Ceiling Fan": 75,
  "LED Light Bulb": 10,
  "Water Heater": 2000,
  "Washing Machine": 500,
  "Desktop Computer": 200,
  "Laptop": 50,
  "Water Pump (1HP)": 750,
  "Microwave Oven": 1200,
  "Electric Iron": 1000,
};

// Equipment efficiency improvements
const EQUIPMENT_EFFICIENCY = {
  "Standard Equipment": 1.0,
  "Energy Star Rated": 0.8,
  "High Efficiency Models": 0.65,
  "Best in Class Efficiency": 0.5,
};

// CO2 emission factor (kg CO2 per kWh in India)
const CO2_FACTOR = 0.82;

interface ApplianceItem {
  id: string;
  name: string;
  watts: number;
  hours: number;
  quantity: number;
  efficiency: string;
}

interface SavingsResult {
  currentConsumption: number;  // kWh per month
  optimizedConsumption: number;  // kWh per month
  currentCost: number;  // INR per month
  optimizedCost: number;  // INR per month
  savings: number;  // INR per month
  savingsPercentage: number;
  co2Reduction: number;  // kg per month
  paybackPeriod: number;  // months
  roi: number;  // percentage after 5 years
}

export default function EnergySavingsCalculator() {
  // State for user inputs
  const [region, setRegion] = useState<string>("Karnataka");
  const [appliances, setAppliances] = useState<ApplianceItem[]>([
    { id: crypto.randomUUID(), name: "Air Conditioner (1.5 ton)", watts: 1500, hours: 8, quantity: 1, efficiency: "Standard Equipment" },
    { id: crypto.randomUUID(), name: "Refrigerator", watts: 200, hours: 24, quantity: 1, efficiency: "Standard Equipment" },
  ]);
  const [savingsResult, setSavingsResult] = useState<SavingsResult | null>(null);
  const [implementationCost, setImplementationCost] = useState<number>(50000);
  const [showDetailedReport, setShowDetailedReport] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("inputs");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [calculationComplete, setCalculationComplete] = useState<boolean>(false);
  
  // Effect to recalculate when inputs change
  useEffect(() => {
    if (calculationComplete) {
      calculateSavings();
    }
  }, [region, appliances, implementationCost, calculationComplete]);
  
  // Add a new appliance to the list
  const addAppliance = () => {
    const newAppliance: ApplianceItem = {
      id: crypto.randomUUID(),
      name: "LED Light Bulb",
      watts: APPLIANCES["LED Light Bulb"],
      hours: 5,
      quantity: 1,
      efficiency: "Standard Equipment"
    };
    
    setAppliances([...appliances, newAppliance]);
  };
  
  // Remove an appliance from the list
  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(app => app.id !== id));
  };
  
  // Update an appliance's properties
  const updateAppliance = (id: string, field: keyof ApplianceItem, value: any) => {
    setAppliances(appliances.map(app => {
      if (app.id === id) {
        if (field === 'name' && value in APPLIANCES) {
          return { ...app, [field]: value, watts: APPLIANCES[value as keyof typeof APPLIANCES] };
        }
        return { ...app, [field]: value };
      }
      return app;
    }));
    
    // Clear error for this field if it exists
    if (formErrors[`${id}-${field}`]) {
      const newErrors = { ...formErrors };
      delete newErrors[`${id}-${field}`];
      setFormErrors(newErrors);
    }
  };
  
  // Validate the form inputs
  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    appliances.forEach(app => {
      if (app.hours <= 0 || app.hours > 24) {
        errors[`${app.id}-hours`] = "Hours must be between 1-24";
      }
      if (app.quantity <= 0) {
        errors[`${app.id}-quantity`] = "Quantity must be greater than 0";
      }
      if (app.watts <= 0) {
        errors[`${app.id}-watts`] = "Wattage must be greater than 0";
      }
    });
    
    if (implementationCost < 0) {
      errors['implementationCost'] = "Cost cannot be negative";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Calculate energy savings
  const calculateSavings = () => {
    if (!validateForm()) {
      return;
    }
    
    // Energy rate for selected region
    const ratePerKWh = ENERGY_RATES[region as keyof typeof ENERGY_RATES];
    
    // Calculate current consumption (kWh per month)
    const currentConsumption = appliances.reduce((total, app) => {
      const dailyKWh = (app.watts * app.hours * app.quantity) / 1000;
      return total + (dailyKWh * 30); // Monthly consumption
    }, 0);
    
    // Calculate optimized consumption with efficiency improvements
    const optimizedConsumption = appliances.reduce((total, app) => {
      const efficiencyFactor = EQUIPMENT_EFFICIENCY[app.efficiency as keyof typeof EQUIPMENT_EFFICIENCY];
      const dailyKWh = (app.watts * app.hours * app.quantity * efficiencyFactor) / 1000;
      return total + (dailyKWh * 30); // Monthly consumption
    }, 0);
    
    // Calculate costs and savings
    const currentCost = currentConsumption * ratePerKWh;
    const optimizedCost = optimizedConsumption * ratePerKWh;
    const savings = currentCost - optimizedCost;
    const savingsPercentage = (savings / currentCost) * 100;
    
    // Calculate CO2 reduction
    const co2Reduction = (currentConsumption - optimizedConsumption) * CO2_FACTOR;
    
    // Calculate payback period (months)
    const paybackPeriod = implementationCost / savings;
    
    // Calculate ROI over 5 years
    const fiveYearSavings = savings * 12 * 5; // 5 years of monthly savings
    const roi = ((fiveYearSavings - implementationCost) / implementationCost) * 100;
    
    setSavingsResult({
      currentConsumption,
      optimizedConsumption,
      currentCost,
      optimizedCost,
      savings,
      savingsPercentage,
      co2Reduction,
      paybackPeriod,
      roi
    });
    
    setCalculationComplete(true);
    setActiveTab("results");
  };
  
  // Reset the calculator
  const resetCalculator = () => {
    setAppliances([
      { id: crypto.randomUUID(), name: "Air Conditioner (1.5 ton)", watts: 1500, hours: 8, quantity: 1, efficiency: "Standard Equipment" },
      { id: crypto.randomUUID(), name: "Refrigerator", watts: 200, hours: 24, quantity: 1, efficiency: "Standard Equipment" },
    ]);
    setImplementationCost(50000);
    setSavingsResult(null);
    setFormErrors({});
    setCalculationComplete(false);
    setActiveTab("inputs");
  };
  
  // Generate energy saving tips based on appliances
  const generateSavingTips = (): string[] => {
    const tips: string[] = [];
    
    if (appliances.some(app => app.name === "Air Conditioner (1.5 ton)")) {
      tips.push("Set your air conditioner to 24°C instead of 18°C to save up to 30% on cooling costs.");
    }
    
    if (appliances.some(app => app.name === "Refrigerator")) {
      tips.push("Keep your refrigerator away from heat sources and ensure proper ventilation around it.");
    }
    
    if (appliances.some(app => app.name.includes("Light"))) {
      tips.push("Replace all incandescent bulbs with LED lighting for up to 80% energy savings.");
    }
    
    if (appliances.some(app => app.name === "Desktop Computer")) {
      tips.push("Use sleep mode for computers when not in use for short periods.");
    }
    
    // Add general tips
    tips.push("Implement a scheduled maintenance program for all electrical equipment.");
    tips.push("Consider installing occupancy sensors in less frequently used areas.");
    tips.push("Install energy monitoring systems to track consumption patterns.");
    
    return tips;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Energy <span className="text-accent">Savings Calculator</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover how much you can save on energy costs by implementing efficient systems and best practices.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="inputs" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="inputs">Input Data</TabsTrigger>
                <TabsTrigger value="results" disabled={!calculationComplete}>Results</TabsTrigger>
                <TabsTrigger value="report" disabled={!calculationComplete}>Detailed Report</TabsTrigger>
              </TabsList>
              
              <TabsContent value="inputs">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Equipment & Usage Details</CardTitle>
                      <CardDescription>Add your equipment and their usage patterns to calculate potential savings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Region Selection */}
                        <div className="mb-6">
                          <Label htmlFor="region">Select Your Region</Label>
                          <Select value={region} onValueChange={setRegion}>
                            <SelectTrigger id="region" className="w-full">
                              <SelectValue placeholder="Select a region" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.keys(ENERGY_RATES).map((region) => (
                                <SelectItem key={region} value={region}>
                                  {region} (₹{ENERGY_RATES[region as keyof typeof ENERGY_RATES]}/kWh)
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {/* Appliances List */}
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Equipment List</h3>
                            <Button onClick={addAppliance} size="sm" variant="outline">
                              Add Equipment
                            </Button>
                          </div>
                          
                          {appliances.map((appliance, index) => (
                            <div key={appliance.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
                              <div className="flex justify-between items-center mb-3">
                                <h4 className="font-medium">Equipment {index + 1}</h4>
                                <Button
                                  onClick={() => removeAppliance(appliance.id)}
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                  disabled={appliances.length <= 1}
                                >
                                  Remove
                                </Button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <Label htmlFor={`appliance-${appliance.id}`}>Equipment Type</Label>
                                  <Select
                                    value={appliance.name}
                                    onValueChange={(value) => updateAppliance(appliance.id, 'name', value)}
                                  >
                                    <SelectTrigger id={`appliance-${appliance.id}`}>
                                      <SelectValue placeholder="Select equipment" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {Object.keys(APPLIANCES).map((appName) => (
                                        <SelectItem key={appName} value={appName}>
                                          {appName} ({APPLIANCES[appName as keyof typeof APPLIANCES]}W)
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                <div>
                                  <Label htmlFor={`efficiency-${appliance.id}`}>Equipment Efficiency</Label>
                                  <Select
                                    value={appliance.efficiency}
                                    onValueChange={(value) => updateAppliance(appliance.id, 'efficiency', value)}
                                  >
                                    <SelectTrigger id={`efficiency-${appliance.id}`}>
                                      <SelectValue placeholder="Select efficiency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {Object.keys(EQUIPMENT_EFFICIENCY).map((eff) => (
                                        <SelectItem key={eff} value={eff}>
                                          {eff} ({(1 - EQUIPMENT_EFFICIENCY[eff as keyof typeof EQUIPMENT_EFFICIENCY]) * 100}% savings)
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <Label htmlFor={`wattage-${appliance.id}`}>Power (Watts)</Label>
                                  <Input
                                    id={`wattage-${appliance.id}`}
                                    type="number"
                                    value={appliance.watts}
                                    onChange={(e) => updateAppliance(appliance.id, 'watts', Number(e.target.value))}
                                    min={1}
                                  />
                                  {formErrors[`${appliance.id}-watts`] && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors[`${appliance.id}-watts`]}</p>
                                  )}
                                </div>
                                
                                <div>
                                  <Label htmlFor={`hours-${appliance.id}`}>Usage (Hours/Day)</Label>
                                  <Input
                                    id={`hours-${appliance.id}`}
                                    type="number"
                                    value={appliance.hours}
                                    onChange={(e) => updateAppliance(appliance.id, 'hours', Number(e.target.value))}
                                    min={0.5}
                                    max={24}
                                    step={0.5}
                                  />
                                  {formErrors[`${appliance.id}-hours`] && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors[`${appliance.id}-hours`]}</p>
                                  )}
                                </div>
                                
                                <div>
                                  <Label htmlFor={`quantity-${appliance.id}`}>Quantity</Label>
                                  <Input
                                    id={`quantity-${appliance.id}`}
                                    type="number"
                                    value={appliance.quantity}
                                    onChange={(e) => updateAppliance(appliance.id, 'quantity', Number(e.target.value))}
                                    min={1}
                                  />
                                  {formErrors[`${appliance.id}-quantity`] && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors[`${appliance.id}-quantity`]}</p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Daily consumption calculation */}
                              <div className="mt-4 text-sm text-gray-600">
                                Daily consumption: {((appliance.watts * appliance.hours * appliance.quantity) / 1000).toFixed(2)} kWh
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Implementation Cost */}
                        <div>
                          <Label htmlFor="implementation-cost">Estimated Implementation Cost (₹)</Label>
                          <Input
                            id="implementation-cost"
                            type="number"
                            value={implementationCost}
                            onChange={(e) => setImplementationCost(Number(e.target.value))}
                            min={0}
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            Enter the estimated cost of upgrading to more efficient equipment
                          </p>
                          {formErrors['implementationCost'] && (
                            <p className="text-red-500 text-sm mt-1">{formErrors['implementationCost']}</p>
                          )}
                        </div>
                        
                        {/* Calculate Button */}
                        <div className="flex justify-center mt-8">
                          <Button 
                            onClick={calculateSavings} 
                            className="bg-primary hover:bg-primary-700 text-white px-8 py-6 h-auto text-lg"
                          >
                            Calculate Savings
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Optimization Guide</CardTitle>
                      <CardDescription>Tips to maximize energy efficiency</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 text-green-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v8"/>
                              <path d="m4.93 10.93 1.41 1.41"/>
                              <path d="M2 18h2"/>
                              <path d="M20 18h2"/>
                              <path d="m19.07 10.93-1.41 1.41"/>
                              <path d="M22 22H2"/>
                              <path d="m16 6-4 4-4-4"/>
                              <path d="M16 18a4 4 0 0 0 0-8H8.5a4.5 4.5 0 1 0 .5 9h7Z"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Operational Efficiency</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Optimizing usage patterns and behaviors can yield up to 30% energy savings with minimal investment.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 text-green-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 7V5"/>
                              <path d="M8 9V7"/>
                              <path d="M16 9V7"/>
                              <path d="m12 9-3 3"/>
                              <path d="m12 9 3 3"/>
                              <circle cx="12" cy="9" r="7"/>
                              <path d="M12 16v2"/>
                              <path d="M16 20H8"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Equipment Upgrades</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Replacing older equipment with high-efficiency models typically delivers 40-60% energy savings per device.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 text-green-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                              <path d="M3.22 12H9.5l.5-1 .5 1h6.28"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Environmental Impact</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Reducing energy consumption by 1000 kWh prevents approximately 820 kg of CO₂ emissions in India.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 text-green-500 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 11V6a5 5 0 0 1 5-5"/>
                              <path d="M9 6a5 5 0 0 0 5 5"/>
                              <rect width="4" height="8" x="2" y="14" rx="1"/>
                              <path d="M6 18h.01"/>
                              <path d="m11 18 3.13-5.4c.56-.98 1.98-.98 2.54 0l3.13 5.4a1 1 0 0 1-.9 1.45h-7a1 1 0 0 1-.9-1.45Z"/>
                              <path d="M17 18h.01"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">ROI Considerations</h4>
                            <p className="text-gray-600 text-sm mt-1">
                              Energy efficiency investments typically provide 15-30% annual returns, outperforming many financial instruments.
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">Further Resources</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                              <a href="#" className="text-primary hover:underline">Bureau of Energy Efficiency (BEE) Guidelines</a>
                            </li>
                            <li className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                              <a href="#" className="text-primary hover:underline">Energy Star Certification Program</a>
                            </li>
                            <li className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                              <a href="#" className="text-primary hover:underline">EAMOT Energy Audit Services</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="results">
                {savingsResult && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <CardTitle>Energy Savings Analysis</CardTitle>
                        <CardDescription>Your potential savings and environmental impact</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-8">
                          {/* Energy Consumption Comparison */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Monthly Energy Consumption</h3>
                            <div className="grid grid-cols-2 gap-6">
                              <div className="p-4 bg-gray-50 rounded-lg border">
                                <div className="text-gray-500 mb-1">Current Consumption</div>
                                <div className="text-3xl font-bold text-gray-900">{savingsResult.currentConsumption.toFixed(1)} kWh</div>
                              </div>
                              
                              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                                <div className="text-gray-500 mb-1">Optimized Consumption</div>
                                <div className="text-3xl font-bold text-green-600">{savingsResult.optimizedConsumption.toFixed(1)} kWh</div>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Reduction</span>
                                <span className="font-medium">{savingsResult.savingsPercentage.toFixed(1)}%</span>
                              </div>
                              <Progress value={savingsResult.savingsPercentage} className="h-3" />
                            </div>
                          </div>
                          
                          {/* Cost Savings */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Financial Impact</h3>
                            
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                                <div className="text-xl font-bold text-green-600 mb-1">₹{savingsResult.savings.toFixed(0)}</div>
                                <div className="text-gray-600">Monthly Savings</div>
                              </div>
                              
                              <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                                <div className="text-xl font-bold text-blue-600 mb-1">₹{(savingsResult.savings * 12).toFixed(0)}</div>
                                <div className="text-gray-600">Annual Savings</div>
                              </div>
                              
                              <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                                <div className="text-xl font-bold text-purple-600 mb-1">₹{(savingsResult.savings * 12 * 5).toFixed(0)}</div>
                                <div className="text-gray-600">5-Year Savings</div>
                              </div>
                            </div>
                            
                            <div className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-100">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
                                  <path d="M12 8V8.5"/>
                                  <path d="M12 12v5"/>
                                  <circle cx="12" cy="12" r="10"/>
                                </svg>
                                <div>
                                  <h4 className="font-medium text-amber-800">Payback Period</h4>
                                  <p className="text-amber-700">
                                    Investment will be recovered in approximately {savingsResult.paybackPeriod.toFixed(1)} months
                                    {savingsResult.paybackPeriod > 36 && " (consider phased implementation)"}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Current Monthly Cost</span>
                                  <span className="font-medium">₹{savingsResult.currentCost.toFixed(0)}</span>
                                </div>
                                <Progress value={100} className="h-3 bg-gray-200" />
                              </div>
                              
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Optimized Monthly Cost</span>
                                  <span className="font-medium">₹{savingsResult.optimizedCost.toFixed(0)}</span>
                                </div>
                                <Progress 
                                  value={(savingsResult.optimizedCost / savingsResult.currentCost) * 100} 
                                  className="h-3 bg-gray-200" 
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Environmental Impact */}
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Environmental Impact</h3>
                            
                            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-xl font-bold text-emerald-600 mb-1">{savingsResult.co2Reduction.toFixed(1)} kg CO₂</div>
                                  <div className="text-gray-600">Monthly Emissions Reduction</div>
                                </div>
                                
                                <div className="hidden md:block">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                                    <path d="M18.364 17.364a9 9 0 1 0-12.728 0L12 23l6.364-5.636Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                  </svg>
                                </div>
                              </div>
                              
                              <div className="mt-4 text-sm text-emerald-700">
                                This is equivalent to planting approximately {Math.round(savingsResult.co2Reduction / 20)} trees annually.
                              </div>
                            </div>
                          </div>
                          
                          {/* Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button onClick={() => setActiveTab("report")} className="bg-primary hover:bg-primary-700">
                              View Detailed Report
                            </Button>
                            <Button onClick={resetCalculator} variant="outline">
                              Reset Calculator
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Customized Recommendations</CardTitle>
                        <CardDescription>Based on your equipment and usage</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {/* ROI Analysis */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Investment Analysis</h3>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                              <div className="text-lg font-bold text-blue-700 mb-1">
                                {savingsResult.roi.toFixed(1)}% ROI
                              </div>
                              <div className="text-blue-600 text-sm">
                                Over 5 years (based on estimated implementation cost)
                              </div>
                            </div>
                          </div>
                          
                          {/* Energy Saving Tips */}
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Energy Saving Tips</h3>
                            <ul className="space-y-2">
                              {generateSavingTips().map((tip, index) => (
                                <li key={index} className="flex items-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                                    <path d="M12 22v-6"/>
                                    <path d="M9 8V2"/>
                                    <path d="M15 9V3"/>
                                    <path d="M12 12V6"/>
                                    <path d="M3 10h18"/>
                                    <path d="M17.8 16H6.2c-1.3 0-2.5-.8-3-2L1 8h22l-2.2 6c-.5 1.2-1.7 2-3 2Z"/>
                                  </svg>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Next Steps */}
                          <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                            <ul className="space-y-4">
                              <li className="flex items-start">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-xs mr-3 mt-0.5">
                                  1
                                </div>
                                <div>
                                  <h4 className="font-medium">Professional Energy Audit</h4>
                                  <p className="text-sm text-gray-600">
                                    Schedule a detailed assessment by EAMOT's certified energy auditors
                                  </p>
                                </div>
                              </li>
                              
                              <li className="flex items-start">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-xs mr-3 mt-0.5">
                                  2
                                </div>
                                <div>
                                  <h4 className="font-medium">Implementation Plan</h4>
                                  <p className="text-sm text-gray-600">
                                    Develop a phased approach to upgrade equipment based on ROI
                                  </p>
                                </div>
                              </li>
                              
                              <li className="flex items-start">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white font-bold text-xs mr-3 mt-0.5">
                                  3
                                </div>
                                <div>
                                  <h4 className="font-medium">Monitoring System</h4>
                                  <p className="text-sm text-gray-600">
                                    Install energy monitoring to track consumption and validate savings
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          {/* Contact CTA */}
                          <div className="mt-6">
                            <Button asChild className="w-full bg-accent hover:bg-accent/90">
                              <a href="#contact">Contact Our Energy Experts</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="report">
                {savingsResult && (
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>Detailed Energy Savings Report</CardTitle>
                          <CardDescription>Comprehensive analysis of your potential energy savings</CardDescription>
                        </div>
                        <Button variant="outline" className="mt-4 md:mt-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" x2="12" y1="15" y2="3"/>
                          </svg>
                          Download PDF
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {/* Report Header */}
                        <div className="p-6 bg-gray-50 rounded-xl border">
                          <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-primary">Energy Efficiency Analysis Report</h2>
                            <p className="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-sm text-gray-500">Monthly Savings</div>
                              <div className="text-2xl font-bold text-green-600">₹{savingsResult.savings.toFixed(0)}</div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-gray-500">Energy Reduction</div>
                              <div className="text-2xl font-bold text-blue-600">{savingsResult.savingsPercentage.toFixed(1)}%</div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-gray-500">Payback Period</div>
                              <div className="text-2xl font-bold text-amber-600">{savingsResult.paybackPeriod.toFixed(1)} months</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Equipment Analysis */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Equipment Analysis</h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="px-4 py-3 text-left border">Equipment</th>
                                  <th className="px-4 py-3 text-left border">Quantity</th>
                                  <th className="px-4 py-3 text-left border">Usage (hrs/day)</th>
                                  <th className="px-4 py-3 text-left border">Current kWh/month</th>
                                  <th className="px-4 py-3 text-left border">Optimized kWh/month</th>
                                  <th className="px-4 py-3 text-left border">Savings</th>
                                </tr>
                              </thead>
                              <tbody>
                                {appliances.map((app) => {
                                  const currentKWh = (app.watts * app.hours * app.quantity * 30) / 1000;
                                  const efficiencyFactor = EQUIPMENT_EFFICIENCY[app.efficiency as keyof typeof EQUIPMENT_EFFICIENCY];
                                  const optimizedKWh = currentKWh * efficiencyFactor;
                                  const savings = currentKWh - optimizedKWh;
                                  
                                  return (
                                    <tr key={app.id} className="border-b hover:bg-gray-50">
                                      <td className="px-4 py-3 border">{app.name}</td>
                                      <td className="px-4 py-3 border">{app.quantity}</td>
                                      <td className="px-4 py-3 border">{app.hours}</td>
                                      <td className="px-4 py-3 border">{currentKWh.toFixed(1)}</td>
                                      <td className="px-4 py-3 border">{optimizedKWh.toFixed(1)}</td>
                                      <td className="px-4 py-3 border font-medium text-green-600">{savings.toFixed(1)} ({((savings/currentKWh) * 100).toFixed(0)}%)</td>
                                    </tr>
                                  );
                                })}
                                
                                <tr className="bg-gray-50 font-medium">
                                  <td className="px-4 py-3 border" colSpan={3}>Total</td>
                                  <td className="px-4 py-3 border">{savingsResult.currentConsumption.toFixed(1)}</td>
                                  <td className="px-4 py-3 border">{savingsResult.optimizedConsumption.toFixed(1)}</td>
                                  <td className="px-4 py-3 border text-green-600">
                                    {(savingsResult.currentConsumption - savingsResult.optimizedConsumption).toFixed(1)} ({savingsResult.savingsPercentage.toFixed(0)}%)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        {/* Financial Analysis */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Financial Analysis</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 bg-white rounded-lg border">
                              <h4 className="font-medium mb-4">Current vs Optimized Costs</h4>
                              
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Monthly Cost - Current</span>
                                    <span>₹{savingsResult.currentCost.toFixed(0)}</span>
                                  </div>
                                  <Progress value={100} className="h-2" />
                                </div>
                                
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Monthly Cost - Optimized</span>
                                    <span>₹{savingsResult.optimizedCost.toFixed(0)}</span>
                                  </div>
                                  <Progress 
                                    value={(savingsResult.optimizedCost / savingsResult.currentCost) * 100} 
                                    className="h-2" 
                                  />
                                </div>
                                
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Annual Cost - Current</span>
                                    <span>₹{(savingsResult.currentCost * 12).toFixed(0)}</span>
                                  </div>
                                  <Progress value={100} className="h-2" />
                                </div>
                                
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Annual Cost - Optimized</span>
                                    <span>₹{(savingsResult.optimizedCost * 12).toFixed(0)}</span>
                                  </div>
                                  <Progress 
                                    value={(savingsResult.optimizedCost / savingsResult.currentCost) * 100} 
                                    className="h-2" 
                                  />
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-5 bg-white rounded-lg border">
                              <h4 className="font-medium mb-4">ROI Analysis</h4>
                              
                              <div>
                                <table className="w-full text-sm">
                                  <tbody>
                                    <tr className="border-b">
                                      <td className="py-2">Implementation Cost</td>
                                      <td className="py-2 text-right font-medium">₹{implementationCost.toFixed(0)}</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-2">Monthly Savings</td>
                                      <td className="py-2 text-right font-medium text-green-600">₹{savingsResult.savings.toFixed(0)}</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-2">Annual Savings</td>
                                      <td className="py-2 text-right font-medium text-green-600">₹{(savingsResult.savings * 12).toFixed(0)}</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-2">Payback Period</td>
                                      <td className="py-2 text-right font-medium">{savingsResult.paybackPeriod.toFixed(1)} months</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-2">5-Year ROI</td>
                                      <td className="py-2 text-right font-medium text-blue-600">{savingsResult.roi.toFixed(1)}%</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-2">5-Year Net Savings</td>
                                      <td className="py-2 text-right font-medium text-green-600">₹{((savingsResult.savings * 12 * 5) - implementationCost).toFixed(0)}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Environmental Impact */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
                          
                          <div className="p-5 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                              <div>
                                <div className="text-sm text-gray-600">Monthly CO₂ Reduction</div>
                                <div className="text-2xl font-bold text-emerald-700">{savingsResult.co2Reduction.toFixed(1)} kg</div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-gray-600">Annual CO₂ Reduction</div>
                                <div className="text-2xl font-bold text-emerald-700">{(savingsResult.co2Reduction * 12).toFixed(0)} kg</div>
                              </div>
                              
                              <div>
                                <div className="text-sm text-gray-600">5-Year CO₂ Reduction</div>
                                <div className="text-2xl font-bold text-emerald-700">{(savingsResult.co2Reduction * 12 * 5).toFixed(0)} kg</div>
                              </div>
                            </div>
                            
                            <div className="mt-6 text-center text-sm text-emerald-700">
                              <p>This reduction is equivalent to:</p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                                <div className="p-3 bg-white rounded-lg border border-emerald-200">
                                  <div className="font-medium">Planting Trees</div>
                                  <div className="text-xl font-bold text-emerald-600">{Math.round((savingsResult.co2Reduction * 12) / 20)}</div>
                                  <div className="text-xs text-gray-500">trees planted annually</div>
                                </div>
                                
                                <div className="p-3 bg-white rounded-lg border border-emerald-200">
                                  <div className="font-medium">Car Travel</div>
                                  <div className="text-xl font-bold text-emerald-600">{Math.round((savingsResult.co2Reduction * 12) / 0.12)} km</div>
                                  <div className="text-xs text-gray-500">of car driving avoided</div>
                                </div>
                                
                                <div className="p-3 bg-white rounded-lg border border-emerald-200">
                                  <div className="font-medium">Smartphones</div>
                                  <div className="text-xl font-bold text-emerald-600">{Math.round((savingsResult.co2Reduction * 12) / 8)}</div>
                                  <div className="text-xs text-gray-500">smartphones charged for a year</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Implementation Recommendations */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Implementation Recommendations</h3>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-white rounded-lg border">
                              <h4 className="font-medium text-primary mb-2">Phase 1: Quick Wins (0-3 months)</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Implement operational changes with zero cost (equipment scheduling, temperature settings)</li>
                                <li>Replace high-usage lighting with LED alternatives</li>
                                <li>Install smart power strips to eliminate phantom loads</li>
                                <li>Conduct maintenance of existing equipment to improve efficiency</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-white rounded-lg border">
                              <h4 className="font-medium text-primary mb-2">Phase 2: Mid-term Improvements (3-12 months)</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Replace highest energy-consuming appliances with energy-efficient models</li>
                                <li>Install energy monitoring systems for real-time consumption tracking</li>
                                <li>Implement automated controls for lighting and HVAC systems</li>
                                <li>Conduct employee awareness programs on energy conservation</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-white rounded-lg border">
                              <h4 className="font-medium text-primary mb-2">Phase 3: Long-term Investments (1-3 years)</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Implement comprehensive energy management system</li>
                                <li>Consider renewable energy options (solar, wind) where applicable</li>
                                <li>Complete building envelope improvements if applicable</li>
                                <li>Develop continuous improvement program for energy efficiency</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex justify-center mt-8 space-x-4">
                          <Button onClick={() => setActiveTab("inputs")} variant="outline">
                            Modify Inputs
                          </Button>
                          <Button onClick={resetCalculator} variant="outline">
                            Reset Calculator
                          </Button>
                          <Button className="bg-primary hover:bg-primary-700">
                            Contact EAMOT Experts
                          </Button>
                        </div>
                        
                        {/* Disclaimer */}
                        <div className="text-xs text-gray-500 border-t pt-6 mt-8">
                          <p>
                            <strong>Disclaimer:</strong> This calculator provides estimates based on the information provided. Actual savings may vary depending on equipment specifications, usage patterns, environmental factors, and energy prices. EAMOT recommends a professional energy audit for precise assessments.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
              Ready to Optimize Your Energy Consumption?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact our team of experts for a professional energy audit and tailored recommendations to maximize your energy savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="#contact">Schedule Consultation</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                <a href="tel:8970001110">Call Now: 897 000 111 02</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}