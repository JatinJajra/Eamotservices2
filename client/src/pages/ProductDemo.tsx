import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductDemoPage() {
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
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight mb-6">
              Interactive <span className="text-accent">Product Demonstrations</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore our products through interactive demonstrations to better understand their features and benefits.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="diesel" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="diesel">Diesel Generator</TabsTrigger>
                <TabsTrigger value="ups">UPS Systems</TabsTrigger>
                <TabsTrigger value="stabilizer">Voltage Stabilizers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="diesel">
                <DieselGeneratorDemo />
              </TabsContent>
              
              <TabsContent value="ups">
                <UPSDemo />
              </TabsContent>
              
              <TabsContent value="stabilizer">
                <StabilizerDemo />
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
              Ready to Learn More About Our Products?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Contact our team of experts to discuss how our energy solutions can benefit your business.
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

// Diesel Generator Demo Component
function DieselGeneratorDemo() {
  const [activeState, setActiveState] = useState<'off' | 'starting' | 'running' | 'loadManagement'>('off');
  const [fuelLevel, setFuelLevel] = useState(100);
  const [loadLevel, setLoadLevel] = useState(0);
  const [temperature, setTemperature] = useState(25);
  
  const handleStart = () => {
    if (activeState === 'off') {
      setActiveState('starting');
      setTimeout(() => {
        setActiveState('running');
        // Start temperature increase
        const tempInterval = setInterval(() => {
          setTemperature(prev => {
            const newTemp = prev + (loadLevel * 0.05);
            return newTemp > 90 ? 90 : newTemp;
          });
          
          // Start fuel decrease
          setFuelLevel(prev => {
            const newLevel = prev - (0.1 + (loadLevel * 0.01));
            return newLevel < 0 ? 0 : newLevel;
          });
          
          // Auto shutdown when fuel is depleted
          if (fuelLevel <= 0) {
            clearInterval(tempInterval);
            setActiveState('off');
          }
        }, 1000);
      }, 3000);
    }
  };
  
  const handleStop = () => {
    setActiveState('off');
    setTimeout(() => {
      setTemperature(25);
    }, 5000);
  };
  
  const handleLoadChange = (newLoad: number) => {
    setLoadLevel(newLoad);
  };
  
  const handleRefuel = () => {
    setFuelLevel(100);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        {/* Generator Visualization */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Diesel Generator Simulation</CardTitle>
            <CardDescription>Interactive demonstration of a diesel generator operation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className={`relative w-full max-w-md h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden ${activeState !== 'off' ? 'animate-pulse' : ''}`}>
                {/* Generator Image/Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://www.eamot.com/assets/img/services/1.jpg" 
                    alt="Diesel Generator" 
                    className="w-full h-full object-cover"
                  />
                  
                  {activeState === 'starting' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-white text-lg font-medium"
                      >
                        Starting...
                      </motion.div>
                    </div>
                  )}
                  
                  {activeState === 'running' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <div className="flex justify-between">
                          <span>RPM: {1500 + (loadLevel * 5)}</span>
                          <span>kVA: {loadLevel}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Controls */}
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <Button
                  onClick={handleStart}
                  disabled={activeState !== 'off' || fuelLevel <= 0}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Start Generator
                </Button>
                <Button
                  onClick={handleStop}
                  disabled={activeState === 'off'}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Stop Generator
                </Button>
              </div>
              
              {/* Fuel Control */}
              <div className="w-full mb-4">
                <div className="flex justify-between mb-2">
                  <span>Fuel Level</span>
                  <span>{fuelLevel.toFixed(0)}%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${fuelLevel > 20 ? 'bg-green-500' : 'bg-red-500'}`} 
                    style={{ width: `${fuelLevel}%` }}
                  ></div>
                </div>
                <Button 
                  onClick={handleRefuel} 
                  className="mt-2 bg-blue-500 hover:bg-blue-600 w-full"
                  disabled={fuelLevel >= 100}
                >
                  Refuel
                </Button>
              </div>
              
              {/* Load Control */}
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span>Load (kVA)</span>
                  <span>{loadLevel}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={loadLevel} 
                  onChange={(e) => handleLoadChange(parseInt(e.target.value))}
                  disabled={activeState === 'off'}
                  className="w-full"
                />
              </div>
              
              {/* Temperature */}
              <div className="w-full mt-4">
                <div className="flex justify-between mb-2">
                  <span>Engine Temperature</span>
                  <span>{temperature.toFixed(1)}°C</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      temperature < 50 ? 'bg-green-500' : 
                      temperature < 75 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${(temperature / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        {/* Educational Content */}
        <Card>
          <CardHeader>
            <CardTitle>How Diesel Generators Work</CardTitle>
            <CardDescription>Learn about the principles behind diesel generator operation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Components</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Diesel Engine:</span> Converts fuel into mechanical energy</li>
                <li><span className="font-medium">Alternator:</span> Converts mechanical energy into electrical energy</li>
                <li><span className="font-medium">Fuel System:</span> Stores and supplies diesel to the engine</li>
                <li><span className="font-medium">Cooling System:</span> Prevents overheating during operation</li>
                <li><span className="font-medium">Control Panel:</span> Monitors and controls generator functions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Operation Cycle</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li><span className="font-medium">Starting:</span> Engine cranks and begins combustion cycle</li>
                <li><span className="font-medium">Running:</span> Diesel combustion drives the alternator</li>
                <li><span className="font-medium">Load Management:</span> Generator adjusts to power demand</li>
                <li><span className="font-medium">Cooling:</span> Heat dissipation prevents overheating</li>
                <li><span className="font-medium">Shutdown:</span> Controlled stop procedure</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Maintenance Tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Regular oil and filter changes (every 250-500 hours)</li>
                <li>Fuel system inspection and cleaning</li>
                <li>Cooling system maintenance</li>
                <li>Battery testing and maintenance</li>
                <li>Load bank testing for performance verification</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Did You Know?</h3>
              <p>Modern diesel generators can achieve fuel efficiency ratings of up to 40%, making them one of the most efficient power generation technologies available. With proper maintenance, industrial diesel generators can last for 20,000-30,000 operating hours.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// UPS Demo Component
function UPSDemo() {
  const [mode, setMode] = useState<'normal' | 'battery' | 'bypass'>('normal');
  const [mainsPower, setMainsPower] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [loadLevel, setLoadLevel] = useState(50);
  
  const toggleMainsPower = () => {
    if (mainsPower) {
      setMainsPower(false);
      setMode('battery');
      
      // Start battery drain
      const batteryInterval = setInterval(() => {
        setBatteryLevel(prev => {
          const newLevel = prev - (loadLevel * 0.05);
          if (newLevel <= 0) {
            clearInterval(batteryInterval);
            return 0;
          }
          return newLevel;
        });
      }, 1000);
    } else {
      setMainsPower(true);
      setMode('normal');
      
      // Start battery recharge if not full
      if (batteryLevel < 100) {
        const chargeInterval = setInterval(() => {
          setBatteryLevel(prev => {
            const newLevel = prev + 1;
            if (newLevel >= 100) {
              clearInterval(chargeInterval);
              return 100;
            }
            return newLevel;
          });
        }, 500);
      }
    }
  };
  
  const toggleBypass = () => {
    if (mode !== 'bypass') {
      setMode('bypass');
    } else {
      setMode(mainsPower ? 'normal' : 'battery');
    }
  };
  
  const handleLoadChange = (newLoad: number) => {
    setLoadLevel(newLoad);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        {/* UPS Visualization */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>UPS System Simulation</CardTitle>
            <CardDescription>Interactive demonstration of a UPS system operation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* UPS Image/Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://www.eamot.com/assets/img/services/3.jpg" 
                    alt="UPS System" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full ${
                    mode === 'normal' ? 'bg-green-500' : 
                    mode === 'battery' ? 'bg-amber-500' : 
                    'bg-red-500'
                  }`}></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <div className="font-medium text-center">
                      {mode === 'normal' ? 'Normal Operation' : 
                       mode === 'battery' ? 'Battery Operation' : 
                       'Bypass Mode'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Power Flow Diagram */}
              <div className="w-full mb-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-center font-medium mb-3">Power Flow</h3>
                <div className="flex justify-between items-center">
                  <div className={`p-2 rounded ${mainsPower ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    Mains Power {mainsPower ? 'ON' : 'OFF'}
                  </div>
                  
                  <div className="flex-1 mx-2 h-2 relative">
                    <div className={`absolute inset-0 h-2 ${
                      mode === 'normal' || mode === 'bypass' ? (mainsPower ? 'bg-green-500' : 'bg-gray-300') : 'bg-gray-300'
                    }`}></div>
                    {mode === 'bypass' && (
                      <div className="absolute inset-0 h-2 bg-amber-500 animate-pulse"></div>
                    )}
                  </div>
                  
                  <div className="p-2 rounded bg-blue-100 text-blue-800">
                    UPS
                  </div>
                  
                  <div className="flex-1 mx-2 h-2 relative">
                    <div className={`absolute inset-0 h-2 ${
                      mode === 'normal' || mode === 'battery' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  
                  <div className="p-2 rounded bg-purple-100 text-purple-800">
                    Load
                  </div>
                </div>
                
                {/* Battery indicator (only visible in battery mode) */}
                {mode === 'battery' && (
                  <div className="mt-3 flex items-center">
                    <div className="w-16 text-xs text-center">Battery</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${batteryLevel > 20 ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${batteryLevel}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Controls */}
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <Button
                  onClick={toggleMainsPower}
                  className={mainsPower ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
                >
                  {mainsPower ? "Simulate Power Failure" : "Restore Mains Power"}
                </Button>
                <Button
                  onClick={toggleBypass}
                  className={mode === 'bypass' ? "bg-amber-600 hover:bg-amber-700" : "bg-blue-600 hover:bg-blue-700"}
                  disabled={!mainsPower && mode !== 'bypass'}
                >
                  {mode === 'bypass' ? "Exit Bypass Mode" : "Enter Bypass Mode"}
                </Button>
              </div>
              
              {/* Load Control */}
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span>Connected Load</span>
                  <span>{loadLevel}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={loadLevel} 
                  onChange={(e) => handleLoadChange(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              {/* Battery Status */}
              <div className="w-full mt-4">
                <div className="flex justify-between mb-2">
                  <span>Battery Level</span>
                  <span>{batteryLevel.toFixed(0)}%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      batteryLevel > 50 ? 'bg-green-500' : 
                      batteryLevel > 20 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${batteryLevel}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-gray-600 text-center">
                  {mode === 'battery' 
                    ? `Estimated runtime: ${Math.max(0, Math.floor(batteryLevel / (loadLevel * 0.05)))} minutes` 
                    : (batteryLevel < 100 ? 'Charging...' : 'Fully Charged')}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        {/* Educational Content */}
        <Card>
          <CardHeader>
            <CardTitle>Understanding UPS Systems</CardTitle>
            <CardDescription>Learn about uninterruptible power supply technology</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">UPS Operation Modes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-green-700">Normal Mode:</span>
                  <p className="mt-1">The UPS conditions incoming power and charges the batteries while supplying clean power to connected equipment.</p>
                </li>
                <li>
                  <span className="font-medium text-amber-700">Battery Mode:</span>
                  <p className="mt-1">When utility power fails, the UPS instantly switches to battery power, providing uninterrupted electricity to critical systems.</p>
                </li>
                <li>
                  <span className="font-medium text-red-700">Bypass Mode:</span>
                  <p className="mt-1">Used for maintenance or in case of UPS malfunction, sending utility power directly to connected equipment (no power protection).</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">UPS Types</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Standby (Offline):</span> Basic protection for non-critical applications</li>
                <li><span className="font-medium">Line-interactive:</span> Better voltage regulation with minimal transfer time</li>
                <li><span className="font-medium">Double-conversion (Online):</span> Premium protection with zero transfer time</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Protection against power outages and data loss</li>
                <li>Voltage regulation for sensitive equipment</li>
                <li>Protection from power surges and electrical noise</li>
                <li>Orderly shutdown of systems during extended outages</li>
                <li>Reduced downtime and business continuity</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Maintenance Tips</h3>
              <p className="mb-2">To maximize UPS lifespan and reliability:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Regular battery testing and replacement (typically every 3-5 years)</li>
                <li>Keep UPS in a cool, dry environment (optimal temperature: 20-25°C)</li>
                <li>Periodic functional testing of the UPS system</li>
                <li>Monitor and record UPS performance parameters</li>
                <li>Schedule professional preventive maintenance annually</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Stabilizer Demo Component
function StabilizerDemo() {
  const [isActive, setIsActive] = useState(true);
  const [inputVoltage, setInputVoltage] = useState(230);
  const [outputVoltage, setOutputVoltage] = useState(230);
  const [volatility, setVolatility] = useState(20);
  const [stabilizerEffect, setStabilizerEffect] = useState(true);
  
  // Simulate voltage fluctuations
  useState(() => {
    const fluctuationInterval = setInterval(() => {
      const fluctuation = (Math.random() - 0.5) * volatility * 2;
      const newInputVoltage = 230 + fluctuation;
      setInputVoltage(newInputVoltage);
      
      // If stabilizer is active, maintain output at ~230V
      // If not active, output = input
      if (isActive && stabilizerEffect) {
        // Simulate slight delay in stabilization
        setTimeout(() => {
          // Stabilizer corrects voltage to within 3% of nominal
          const correction = Math.min(Math.abs(230 - newInputVoltage), Math.abs(230 - newInputVoltage) * 0.97);
          const direction = newInputVoltage > 230 ? -1 : 1;
          const newOutputVoltage = newInputVoltage + (correction * direction);
          setOutputVoltage(newOutputVoltage);
        }, 300);
      } else {
        setOutputVoltage(newInputVoltage);
      }
    }, 1500);
    
    return () => clearInterval(fluctuationInterval);
  }, [isActive, volatility, stabilizerEffect]);
  
  // Toggle stabilizer on/off
  const toggleStabilizer = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Allow time for stabilizer to engage
      setTimeout(() => {
        setStabilizerEffect(true);
      }, 500);
    } else {
      setStabilizerEffect(false);
    }
  };
  
  // Change volatility level
  const handleVolatilityChange = (newValue: number) => {
    setVolatility(newValue);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        {/* Stabilizer Visualization */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Voltage Stabilizer Simulation</CardTitle>
            <CardDescription>See how a stabilizer protects against voltage fluctuations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* Stabilizer Image/Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://www.eamot.com/assets/img/services/2.jpg" 
                    alt="Voltage Stabilizer" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full ${
                    isActive ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <div className="font-medium text-center">
                      {isActive ? 'Stabilizer Active' : 'Stabilizer Inactive'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Voltage Meter Visualization */}
              <div className="w-full mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex justify-between mb-4">
                  <div className="w-1/2 pr-2">
                    <div className="text-center mb-2 font-medium">Input Voltage</div>
                    <div className={`text-center text-2xl font-bold ${
                      inputVoltage > 250 || inputVoltage < 210 ? 'text-red-600' :
                      inputVoltage > 240 || inputVoltage < 220 ? 'text-amber-600' :
                      'text-green-600'
                    }`}>
                      {Math.round(inputVoltage)} V
                    </div>
                    <div className="mt-2 relative h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-1/4 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-3/4 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 right-0 w-1 bg-gray-500"></div>
                      
                      <div className="absolute inset-y-0 bg-blue-500 transition-all duration-300"
                        style={{ 
                          left: '50%', 
                          width: '4px',
                          transform: `translateX(${((inputVoltage - 230) / 100) * 100}px)`
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>180V</span>
                      <span>205V</span>
                      <span>230V</span>
                      <span>255V</span>
                      <span>280V</span>
                    </div>
                  </div>
                  
                  <div className="w-1/2 pl-2">
                    <div className="text-center mb-2 font-medium">Output Voltage</div>
                    <div className={`text-center text-2xl font-bold ${
                      outputVoltage > 250 || outputVoltage < 210 ? 'text-red-600' :
                      outputVoltage > 240 || outputVoltage < 220 ? 'text-amber-600' :
                      'text-green-600'
                    }`}>
                      {Math.round(outputVoltage)} V
                    </div>
                    <div className="mt-2 relative h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-1/4 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 left-3/4 w-1 bg-gray-500"></div>
                      <div className="absolute inset-y-0 right-0 w-1 bg-gray-500"></div>
                      
                      <div className="absolute inset-y-0 bg-green-500 transition-all duration-300"
                        style={{ 
                          left: '50%', 
                          width: '4px',
                          transform: `translateX(${((outputVoltage - 230) / 100) * 100}px)`
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>180V</span>
                      <span>205V</span>
                      <span>230V</span>
                      <span>255V</span>
                      <span>280V</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated voltage flow */}
                <div className="h-12 relative mb-4">
                  <div className="absolute inset-x-0 top-1/2 h-2 bg-gray-300 transform -translate-y-1/2"></div>
                  
                  {/* Animated dots for current flow */}
                  <div className="absolute inset-0 overflow-hidden">
                    {isActive && Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute top-1/2 h-3 w-3 rounded-full bg-blue-500 transform -translate-y-1/2"
                        style={{
                          left: `${(i * 20) - (Date.now() / 50) % 100}%`,
                          animation: 'flowAnimation 3s linear infinite'
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Power source */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                    <span className="text-xs text-blue-800">Power</span>
                  </div>
                  
                  {/* Stabilizer */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center border-2 border-green-500">
                    <span className="text-xs text-center text-green-800">Voltage Stabilizer</span>
                  </div>
                  
                  {/* Load */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center border-2 border-purple-500">
                    <span className="text-xs text-purple-800">Load</span>
                  </div>
                </div>
              </div>
              
              {/* Controls */}
              <div className="grid grid-cols-1 gap-4 w-full mb-4">
                <Button
                  onClick={toggleStabilizer}
                  className={isActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
                >
                  {isActive ? "Deactivate Stabilizer" : "Activate Stabilizer"}
                </Button>
              </div>
              
              {/* Volatility Control */}
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <span>Voltage Fluctuation Intensity</span>
                  <span>{volatility}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  value={volatility} 
                  onChange={(e) => handleVolatilityChange(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1">
                  <span>Stable</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        {/* Educational Content */}
        <Card>
          <CardHeader>
            <CardTitle>Voltage Stabilizers Explained</CardTitle>
            <CardDescription>Learn how voltage stabilizers protect your equipment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">What is a Voltage Stabilizer?</h3>
              <p>A voltage stabilizer is an electrical device designed to deliver a constant voltage to a load at its output terminals regardless of the changes in the input voltage. It protects equipment from damage due to voltage fluctuations.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Types of Voltage Stabilizers</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Servo-Controlled:</span> Uses motorized variable transformer for precise regulation</li>
                <li><span className="font-medium">Relay-Based:</span> Uses relays to switch transformer taps for correction</li>
                <li><span className="font-medium">Solid-State:</span> Uses electronic components for faster response</li>
                <li><span className="font-medium">Static Voltage Stabilizer:</span> Uses high-power semiconductors</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Equipment Protection</h3>
              <p className="mb-2">Voltage stabilizers protect various equipment from voltage fluctuations:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Medical equipment requiring precise voltage</li>
                <li>CNC machines and industrial automation systems</li>
                <li>Sensitive laboratory instruments</li>
                <li>Computer systems and data centers</li>
                <li>Household appliances in areas with unstable grid</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Benefits of Using a Voltage Stabilizer</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prevents damage to electrical equipment from voltage surges</li>
                <li>Extends the lifespan of connected devices</li>
                <li>Improves equipment efficiency and performance</li>
                <li>Reduces energy consumption by maintaining optimal voltage</li>
                <li>Prevents unexpected shutdowns of critical systems</li>
                <li>Protects against both under-voltage and over-voltage conditions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Maintenance Tips</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Regular inspection of all electrical connections</li>
                <li>Cleaning of dust and debris from cooling vents</li>
                <li>Testing of output voltage stability</li>
                <li>Checking for unusual noises or overheating</li>
                <li>Professional calibration every 1-2 years</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}