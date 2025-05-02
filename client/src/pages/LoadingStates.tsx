import { useState } from "react";
import { motion } from "framer-motion";
import { 
  EnergyLoader,
  PulseEnergyLoader,
  WaveEnergyLoader,
  LightningEnergyLoader,
  CircuitEnergyLoader,
  SpinnerEnergyLoader 
} from "@/components/ui/energy-loader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function LoadingStatesPage() {
  const [selectedType, setSelectedType] = useState<"pulse" | "wave" | "lightning" | "circuit" | "spinner">("pulse");
  const [selectedColor, setSelectedColor] = useState<"primary" | "accent" | "success" | "warning" | "danger" | "info">("primary");
  const [selectedSize, setSelectedSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("md");
  const [showText, setShowText] = useState<boolean>(false);
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);

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
              Energy-Themed <span className="text-accent">Loading Animations</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore our collection of beautiful, energy-themed loading animations for a seamless user experience.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="https://www.eamot.com/assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Loading Animations Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="showcase" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="showcase">Animations Showcase</TabsTrigger>
                <TabsTrigger value="customize">Customize & Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="showcase">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pulse Animation */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Pulse Energy</CardTitle>
                      <CardDescription>A pulsating energy orb loader</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-48">
                      <PulseEnergyLoader color="primary" size="lg" />
                    </CardContent>
                  </Card>
                  
                  {/* Wave Animation */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Waves</CardTitle>
                      <CardDescription>Rippling energy wave animation</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-48">
                      <WaveEnergyLoader color="accent" size="lg" />
                    </CardContent>
                  </Card>
                  
                  {/* Lightning Animation */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Lightning</CardTitle>
                      <CardDescription>Electric bolt animation</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-48">
                      <LightningEnergyLoader color="warning" size="lg" />
                    </CardContent>
                  </Card>
                  
                  {/* Circuit Animation */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Circuit</CardTitle>
                      <CardDescription>Electric circuit pathway animation</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-48">
                      <CircuitEnergyLoader color="success" size="lg" />
                    </CardContent>
                  </Card>
                  
                  {/* Spinner Animation */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Spinner</CardTitle>
                      <CardDescription>Rotating energy spinner animation</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-48">
                      <SpinnerEnergyLoader color="info" size="lg" />
                    </CardContent>
                  </Card>
                  
                  {/* Full Screen Example */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Full Screen Mode</CardTitle>
                      <CardDescription>Overlay loader for page transitions</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center h-48 gap-4">
                      <Button 
                        onClick={() => setFullScreenMode(true)} 
                        className="w-full bg-primary hover:bg-primary-600"
                      >
                        Show Full Screen Loader
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        Click to see how the loader looks in full screen mode
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Usage Examples Section */}
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Data Loading Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Loading</CardTitle>
                        <CardDescription>Loading state while fetching data</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center gap-4">
                            <LightningEnergyLoader size="sm" color="primary" />
                            <div>
                              <p className="font-medium">Fetching Energy Data</p>
                              <p className="text-sm text-gray-500">Please wait while we load your information</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-700">
                          <p className="mb-2"><span className="font-medium">React Usage:</span></p>
                          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                            <code>{`{isLoading && (
  <LightningEnergyLoader 
    size="sm" 
    color="primary" 
    text="Fetching Energy Data" 
  />
)}`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Form Submission Card */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Form Submission</CardTitle>
                        <CardDescription>Loading state while processing form</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-center">
                            <div className="text-center">
                              <CircuitEnergyLoader size="md" color="accent" />
                              <p className="mt-2 font-medium">Processing Your Request</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-700">
                          <p className="mb-2"><span className="font-medium">React Usage:</span></p>
                          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                            <code>{`<Button disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <CircuitEnergyLoader size="xs" color="white" />
      <span className="ml-2">Processing...</span>
    </>
  ) : "Submit"}
</Button>`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="customize">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>Customization Options</CardTitle>
                        <CardDescription>Adjust the appearance of your loader</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Loader Type Selection */}
                        <div>
                          <h3 className="text-lg font-medium mb-3">Loader Type</h3>
                          <div className="grid grid-cols-1 gap-2">
                            {["pulse", "wave", "lightning", "circuit", "spinner"].map((type) => (
                              <Button 
                                key={type}
                                variant="outline"
                                className={`justify-start font-normal capitalize h-auto py-2 ${selectedType === type ? 'border-primary bg-primary/10' : ''}`}
                                onClick={() => setSelectedType(type as any)}
                              >
                                <div className="w-6 h-6 mr-2">
                                  <EnergyLoader type={type as any} size="xs" color={selectedColor} />
                                </div>
                                {type}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Color Selection */}
                        <div>
                          <h3 className="text-lg font-medium mb-3">Color</h3>
                          <RadioGroup 
                            defaultValue={selectedColor} 
                            onValueChange={(value) => setSelectedColor(value as any)}
                            className="grid grid-cols-3 gap-2"
                          >
                            {[
                              { value: "primary", label: "Primary", className: "bg-primary" },
                              { value: "accent", label: "Accent", className: "bg-accent" },
                              { value: "success", label: "Success", className: "bg-green-500" },
                              { value: "warning", label: "Warning", className: "bg-amber-500" },
                              { value: "danger", label: "Danger", className: "bg-red-500" },
                              { value: "info", label: "Info", className: "bg-blue-500" }
                            ].map((color) => (
                              <div key={color.value} className="flex items-center space-x-2">
                                <RadioGroupItem 
                                  value={color.value} 
                                  id={`color-${color.value}`} 
                                  className="peer sr-only" 
                                />
                                <Label
                                  htmlFor={`color-${color.value}`}
                                  className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                                >
                                  <div className={`w-5 h-5 rounded-full ${color.className}`}></div>
                                  <span className="mt-1 text-xs">{color.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        
                        {/* Size Selection */}
                        <div>
                          <h3 className="text-lg font-medium mb-3">Size</h3>
                          <RadioGroup 
                            defaultValue={selectedSize} 
                            onValueChange={(value) => setSelectedSize(value as any)}
                            className="grid grid-cols-5 gap-2"
                          >
                            {["xs", "sm", "md", "lg", "xl"].map((size) => (
                              <div key={size} className="flex items-center space-x-2">
                                <RadioGroupItem 
                                  value={size} 
                                  id={`size-${size}`} 
                                  className="peer sr-only" 
                                />
                                <Label
                                  htmlFor={`size-${size}`}
                                  className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary w-full text-center"
                                >
                                  {size}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        
                        {/* Text and Full Screen Options */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-text" className="cursor-pointer">Show Loading Text</Label>
                            <Switch 
                              id="show-text" 
                              checked={showText} 
                              onCheckedChange={setShowText} 
                            />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Label htmlFor="full-screen" className="cursor-pointer">Full Screen Preview</Label>
                            <Switch 
                              id="full-screen" 
                              checked={fullScreenMode} 
                              onCheckedChange={setFullScreenMode} 
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>Live preview of your custom loader</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center h-80 relative">
                        <div className="border rounded-lg w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
                          <EnergyLoader 
                            type={selectedType} 
                            color={selectedColor} 
                            size={selectedSize} 
                            text={showText ? "Loading your data..." : undefined}
                            fullScreen={fullScreenMode}
                          />
                          
                          {fullScreenMode && (
                            <div className="absolute bottom-4 right-4">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setFullScreenMode(false)}
                              >
                                Close Full Screen
                              </Button>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-6 w-full">
                          <h3 className="text-lg font-medium mb-3">Generated Code</h3>
                          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                            <code>{`<${capitalizeFirstLetter(selectedType)}EnergyLoader
  color="${selectedColor}"
  size="${selectedSize}"${showText ? `
  text="Loading your data..."` : ''}${fullScreenMode ? `
  fullScreen={true}` : ''}
/>`}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Full Screen Loader */}
      {fullScreenMode && (
        <EnergyLoader 
          type={selectedType || "pulse"}
          color={selectedColor} 
          size="lg" 
          text={showText ? "Loading your data..." : undefined}
          fullScreen={true}
        />
      )}
    </motion.div>
  );
}

// Helper Functions
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}