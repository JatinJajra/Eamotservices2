import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ContactModal from "@/components/Popup/ContectModal";

export default function EnergyCalculatorPage() {
       const [isModalOpen, setIsModalOpen] = useState(false);
            const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);
  // Diesel Generator Calculator
  const [dieselGenForm, setDieselGenForm] = useState({
    kvaRating: "",
    fuelConsumption: "",
    runningHours: "",
    fuelPrice: ""
  });

  const [dieselGenResult, setDieselGenResult] = useState({
    dailyCost: 0,
    monthlyCost: 0,
    yearlyCost: 0,
    co2Emissions: 0
  });

  // UPS Calculator
  const [upsForm, setUpsForm] = useState({
    loadWatts: "",
    efficiency: "90",
    runningHours: "",
    electricityRate: ""
  });

  const [upsResult, setUpsResult] = useState({
    dailyConsumption: 0,
    monthlyConsumption: 0,
    dailyCost: 0,
    monthlyCost: 0,
    yearlyCost: 0
  });

  // ROI Calculator
  const [roiForm, setRoiForm] = useState({
    currentCost: "",
    proposedCost: "",
    implementationCost: ""
  });

  const [roiResult, setRoiResult] = useState({
    annualSavings: 0,
    paybackPeriod: 0,
    fiveYearSavings: 0,
    roi: 0
  });

  const handleDieselGenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDieselGenForm({
      ...dieselGenForm,
      [name]: value
    });
  };

  const handleUpsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpsForm({
      ...upsForm,
      [name]: value
    });
  };

  const handleUpsEfficiencyChange = (value: string) => {
    setUpsForm({
      ...upsForm,
      efficiency: value
    });
  };

  const handleRoiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoiForm({
      ...roiForm,
      [name]: value
    });
  };

  const calculateDieselGen = (e: React.FormEvent) => {
    e.preventDefault();
    
    const kva = parseFloat(dieselGenForm.kvaRating);
    const fuelConsumption = parseFloat(dieselGenForm.fuelConsumption);
    const hours = parseFloat(dieselGenForm.runningHours);
    const price = parseFloat(dieselGenForm.fuelPrice);
    
    if (isNaN(kva) || isNaN(fuelConsumption) || isNaN(hours) || isNaN(price)) {
      return;
    }
    
    const dailyFuelUsage = fuelConsumption * hours;
    const dailyCost = dailyFuelUsage * price;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;
    const co2Emissions = dailyFuelUsage * 2.68 * 365; // kg of CO2 per liter of diesel per year
    
    setDieselGenResult({
      dailyCost,
      monthlyCost,
      yearlyCost,
      co2Emissions
    });
  };

  const calculateUps = (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadWatts = parseFloat(upsForm.loadWatts);
    const efficiency = parseFloat(upsForm.efficiency) / 100;
    const hours = parseFloat(upsForm.runningHours);
    const rate = parseFloat(upsForm.electricityRate);
    
    if (isNaN(loadWatts) || isNaN(efficiency) || isNaN(hours) || isNaN(rate)) {
      return;
    }
    
    const actualConsumption = loadWatts / efficiency;
    const dailyConsumption = (actualConsumption * hours) / 1000; // kWh
    const monthlyConsumption = dailyConsumption * 30;
    const dailyCost = dailyConsumption * rate;
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;
    
    setUpsResult({
      dailyConsumption,
      monthlyConsumption,
      dailyCost,
      monthlyCost,
      yearlyCost
    });
  };

  const calculateRoi = (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentCost = parseFloat(roiForm.currentCost);
    const proposedCost = parseFloat(roiForm.proposedCost);
    const implementationCost = parseFloat(roiForm.implementationCost);
    
    if (isNaN(currentCost) || isNaN(proposedCost) || isNaN(implementationCost)) {
      return;
    }
    
    const annualSavings = currentCost - proposedCost;
    const paybackPeriod = implementationCost / annualSavings;
    const fiveYearSavings = (annualSavings * 5) - implementationCost;
    const roi = (annualSavings / implementationCost) * 100;
    
    setRoiResult({
      annualSavings,
      paybackPeriod,
      fiveYearSavings,
      roi
    });
  };

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
                Energy <span className="text-accent">Calculators</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Estimate costs, consumption, and savings with our interactive energy management calculators.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
          </div>
        </section> */}
                                                       <ContactModal isOpen={isModalOpen} onClose={closeModal} />


        <section className="relative py-20 overflow-hidden text-white">
  {/* Custom Rich Blue Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#154679] to-[#103b5c]"></div>

  {/* Optional Black Overlay for Depth */}
  <div className="absolute inset-0 bg-black opacity-30"></div>

  {/* Top Pattern */}
  <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
    <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 relative z-20">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
        Energy <span className="text-accent">Calculators</span>
      </h1>
      <p className="text-lg md:text-xl opacity-90 mb-8">
        Estimate costs, consumption, and savings with our interactive energy management calculators.
      </p>
    </div>
  </div>

  {/* Bottom Pattern */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
    <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
  </div>
</section>

        
        {/* Calculators Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary rounded-full mb-4">
                <span className="font-semibold">Calculate & Optimize</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-gray-800">
                Interactive <span className="text-primary">Energy Tools</span>
              </h2>
              
              <p className="text-gray-600 max-w-3xl mx-auto">
                Use our calculators to estimate operational costs, energy consumption, and potential savings for your energy systems.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="diesel-generator" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                  <TabsTrigger value="diesel-generator">Diesel Generator Calculator</TabsTrigger>
                  <TabsTrigger value="ups">UPS Efficiency Calculator</TabsTrigger>
                  <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
                </TabsList>
                
                {/* Diesel Generator Calculator */}
                <TabsContent value="diesel-generator">
                  <Card>
                    <CardHeader>
                      <CardTitle>Diesel Generator Cost & Emissions Calculator</CardTitle>
                      <CardDescription>
                        Calculate operational costs and carbon emissions for your diesel generator.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={calculateDieselGen} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="kvaRating">Generator Rating (kVA)</Label>
                            <Input
                              id="kvaRating"
                              name="kvaRating"
                              type="number"
                              placeholder="e.g., 500"
                              value={dieselGenForm.kvaRating}
                              onChange={handleDieselGenChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="fuelConsumption">Fuel Consumption (L/hr)</Label>
                            <Input
                              id="fuelConsumption"
                              name="fuelConsumption"
                              type="number"
                              placeholder="e.g., 25"
                              value={dieselGenForm.fuelConsumption}
                              onChange={handleDieselGenChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="runningHours">Running Hours (per day)</Label>
                            <Input
                              id="runningHours"
                              name="runningHours"
                              type="number"
                              placeholder="e.g., 8"
                              value={dieselGenForm.runningHours}
                              onChange={handleDieselGenChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="fuelPrice">Fuel Price (per liter)</Label>
                            <Input
                              id="fuelPrice"
                              name="fuelPrice"
                              type="number"
                              placeholder="e.g., 75"
                              value={dieselGenForm.fuelPrice}
                              onChange={handleDieselGenChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full md:w-auto bg-primary">Calculate</Button>
                      </form>
                      
                      <Separator className="my-8" />
                      
                      <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Results</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Daily Operational Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{dieselGenResult.dailyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Monthly Operational Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{dieselGenResult.monthlyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Yearly Operational Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{dieselGenResult.yearlyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Annual CO2 Emissions</p>
                            <p className="text-2xl font-bold text-secondary">{dieselGenResult.co2Emissions.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* UPS Calculator */}
                <TabsContent value="ups">
                  <Card>
                    <CardHeader>
                      <CardTitle>UPS Energy Consumption Calculator</CardTitle>
                      <CardDescription>
                        Calculate energy consumption and operational costs for your UPS systems.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={calculateUps} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="loadWatts">Connected Load (Watts)</Label>
                            <Input
                              id="loadWatts"
                              name="loadWatts"
                              type="number"
                              placeholder="e.g., 5000"
                              value={upsForm.loadWatts}
                              onChange={handleUpsChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="efficiency">UPS Efficiency (%)</Label>
                            <Select
                              value={upsForm.efficiency}
                              onValueChange={handleUpsEfficiencyChange}
                            >
                              <SelectTrigger id="efficiency">
                                <SelectValue placeholder="Select efficiency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="80">80%</SelectItem>
                                <SelectItem value="85">85%</SelectItem>
                                <SelectItem value="90">90%</SelectItem>
                                <SelectItem value="95">95%</SelectItem>
                                <SelectItem value="98">98%</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="runningHours">Running Hours (per day)</Label>
                            <Input
                              id="runningHours"
                              name="runningHours"
                              type="number"
                              placeholder="e.g., 24"
                              value={upsForm.runningHours}
                              onChange={handleUpsChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="electricityRate">Electricity Rate (per kWh)</Label>
                            <Input
                              id="electricityRate"
                              name="electricityRate"
                              type="number"
                              placeholder="e.g., 8"
                              value={upsForm.electricityRate}
                              onChange={handleUpsChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full md:w-auto bg-primary">Calculate</Button>
                      </form>
                      
                      <Separator className="my-8" />
                      
                      <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">Results</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Daily Energy Consumption</p>
                            <p className="text-2xl font-bold text-primary">{upsResult.dailyConsumption.toLocaleString(undefined, { maximumFractionDigits: 2 })} kWh</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Monthly Energy Consumption</p>
                            <p className="text-2xl font-bold text-primary">{upsResult.monthlyConsumption.toLocaleString(undefined, { maximumFractionDigits: 2 })} kWh</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Daily Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{upsResult.dailyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Monthly Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{upsResult.monthlyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div className="md:col-span-2">
                            <p className="text-gray-500 text-sm mb-1">Yearly Cost</p>
                            <p className="text-2xl font-bold text-primary">₹{upsResult.yearlyCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* ROI Calculator */}
                <TabsContent value="roi">
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Solution ROI Calculator</CardTitle>
                      <CardDescription>
                        Calculate return on investment for implementing energy efficiency solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={calculateRoi} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="currentCost">Current Annual Energy Cost (₹)</Label>
                            <Input
                              id="currentCost"
                              name="currentCost"
                              type="number"
                              placeholder="e.g., 1000000"
                              value={roiForm.currentCost}
                              onChange={handleRoiChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="proposedCost">Projected Annual Energy Cost (₹)</Label>
                            <Input
                              id="proposedCost"
                              name="proposedCost"
                              type="number"
                              placeholder="e.g., 750000"
                              value={roiForm.proposedCost}
                              onChange={handleRoiChange}
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="implementationCost">Implementation Cost (₹)</Label>
                            <Input
                              id="implementationCost"
                              name="implementationCost"
                              type="number"
                              placeholder="e.g., 500000"
                              value={roiForm.implementationCost}
                              onChange={handleRoiChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full md:w-auto bg-primary">Calculate ROI</Button>
                      </form>
                      
                      <Separator className="my-8" />
                      
                      <div className="rounded-lg bg-gray-50 p-6">
                        <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-4">ROI Analysis</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Annual Savings</p>
                            <p className="text-2xl font-bold text-primary">₹{roiResult.annualSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Payback Period</p>
                            <p className="text-2xl font-bold text-primary">{roiResult.paybackPeriod.toLocaleString(undefined, { maximumFractionDigits: 2 })} years</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">5-Year Net Savings</p>
                            <p className="text-2xl font-bold text-primary">₹{roiResult.fiveYearSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                          </div>
                          
                          <div>
                            <p className="text-gray-500 text-sm mb-1">Return on Investment (ROI)</p>
                            <p className="text-2xl font-bold text-primary">{roiResult.roi.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                Need Help Optimizing Your Energy Systems?
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our energy management experts can help you identify opportunities for cost savings and efficiency improvements. Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white text-center font-poppins font-medium px-8 py-6 h-auto">
                  <a href="#" onClick={openModal}>Request Consultation</a>
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