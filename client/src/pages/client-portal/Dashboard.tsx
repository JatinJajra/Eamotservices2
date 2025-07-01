import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Battery, BatteryMedium, Bolt, CalendarDays, ChevronDown, ChevronUp, ChevronsUp, Cloud, CloudLightning, Download, FileBarChart, LifeBuoy, Lightbulb, LineChart, Plus, Zap } from "lucide-react";
import { CircuitEnergyLoader, LightningEnergyLoader } from "@/components/ui/energy-loader";
import { 
  AreaChart, 
  Area, 
  LineChart as RechartsLineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";

export default function ClientDashboard() {
  const [currentTab, setCurrentTab] = useState<string>("overview");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-top.png" alt="" className="w-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-montserrat leading-tight mb-2">
                  Welcome back, <span className="text-accent">John</span>
                </h1>
                <p className="text-lg opacity-90">
                  Your energy management dashboard
                </p>
              </div>
              <div className="mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <FileBarChart className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <LifeBuoy className="w-4 h-4 mr-2" />
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img src="assets/img/hero/nav-parrten-botoom.png" alt="" className="w-full" />
        </div>
      </section>
      
      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <div className="flex justify-between items-center mb-6">
              <TabsList className="grid grid-cols-4 w-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="consumption">Consumption</TabsTrigger>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsLoading(!isLoading)}>
                  {isLoading ? "Stop Loading" : "Simulate Loading"}
                </Button>
                <Button variant="outline" size="sm">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  Last 30 Days
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <CircuitEnergyLoader color="primary" size="xl" text="Loading your energy insights..." />
              </div>
            ) : (
              <>
                <TabsContent value="overview" className="space-y-8">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <QuickStatCard 
                      title="Energy Consumption"
                      value="1,247 kWh"
                      change={-12.3}
                      period="vs last month"
                      icon={<Bolt className="h-5 w-5" />}
                      color="primary"
                    />
                    
                    <QuickStatCard 
                      title="Energy Cost"
                      value="₹9,856"
                      change={-8.7}
                      period="vs last month"
                      icon={<LineChart className="h-5 w-5" />}
                      color="accent"
                    />
                    
                    <QuickStatCard 
                      title="Carbon Footprint"
                      value="843 kg"
                      change={-14.2}
                      period="vs last month"
                      icon={<Cloud className="h-5 w-5" />}
                      color="success"
                    />
                    
                    <QuickStatCard 
                      title="System Health"
                      value="98.5%"
                      change={2.1}
                      period="vs last month"
                      icon={<Battery className="h-5 w-5" />}
                      color="info"
                    />
                  </div>
                  
                  {/* Main Charts Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                          <CardTitle>Energy Consumption Trends</CardTitle>
                          <CardDescription>Daily energy usage over time</CardDescription>
                        </div>
                        <div className="flex items-center">
                          <Badge className="mr-2" variant="outline">Daily</Badge>
                          <Badge className="mr-2 bg-primary">Weekly</Badge>
                          <Badge className="mr-2" variant="outline">Monthly</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ResponsiveContainer width="100%" height={300}>
                          <AreaChart
                            data={energyConsumptionData}
                            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                          >
                            <defs>
                              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3498db" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3498db" stopOpacity={0.1} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip 
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-white shadow-lg rounded-lg p-3 border">
                                      <p className="text-gray-700 font-semibold">{label}</p>
                                      <p className="text-primary">
                                        {`${payload[0].value} kWh`}
                                      </p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="energy" 
                              stroke="#3498db" 
                              fillOpacity={1} 
                              fill="url(#colorEnergy)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Total Usage</p>
                            <p className="text-lg font-bold text-gray-900">1,247 kWh</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Average Daily</p>
                            <p className="text-lg font-bold text-gray-900">41.5 kWh</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Peak Usage</p>
                            <p className="text-lg font-bold text-gray-900">68.2 kWh</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500">Lowest Usage</p>
                            <p className="text-lg font-bold text-gray-900">28.9 kWh</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Energy Distribution</CardTitle>
                        <CardDescription>Usage by category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={220}>
                          <PieChart>
                            <Pie
                              data={energyDistributionData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                              labelLine={false}
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {energyDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value) => [`${value} kWh`, 'Consumption']}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                        
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {energyDistributionData.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <div 
                                className="w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-sm text-gray-600">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Recommendations & Alerts Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Energy Saving Recommendations</CardTitle>
                          <CardDescription>Personalized efficiency tips</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm">
                          View All
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <RecommendationItem
                            title="HVAC Optimization"
                            description="Scheduling your HVAC to run at optimal times could save up to 15% on cooling costs."
                            saving="₹1,470 / month"
                            icon={<Bolt className="h-8 w-8 text-amber-500" />}
                            priority="high"
                          />
                          <RecommendationItem
                            title="Lighting Retrofit"
                            description="Replace remaining fluorescent lights with LEDs in storage areas."
                            saving="₹850 / month"
                            icon={<Lightbulb className="h-8 w-8 text-yellow-500" />}
                            priority="medium"
                          />
                          <RecommendationItem
                            title="Equipment Maintenance"
                            description="Schedule maintenance for your diesel generator to improve efficiency."
                            saving="₹620 / month"
                            icon={<BatteryMedium className="h-8 w-8 text-green-500" />}
                            priority="low"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 p-4 flex justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total Potential Savings</p>
                          <p className="text-lg font-bold text-green-600">₹2,940 / month</p>
                        </div>
                        <Button className="bg-primary hover:bg-primary-700">
                          Implement All
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>System Alerts & Notifications</CardTitle>
                          <CardDescription>Recent events and notifications</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm">
                          Mark All Read
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <AlertItem
                            title="UPS Battery Health Warning"
                            description="UPS in Server Room 2 shows decreased battery performance. Maintenance recommended."
                            time="2 hours ago"
                            type="warning"
                          />
                          <AlertItem
                            title="Unusual Energy Spike Detected"
                            description="Manufacturing floor saw a 27% increase in consumption on Tuesday at 2:15 PM."
                            time="Yesterday"
                            type="alert"
                          />
                          <AlertItem
                            title="Maintenance Complete"
                            description="Scheduled maintenance of Diesel Generator 1 completed successfully."
                            time="3 days ago"
                            type="success"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 p-4 flex justify-between">
                        <p className="text-sm text-gray-500">You have 2 unread alerts</p>
                        <Button variant="outline" size="sm">
                          View Event Log
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  {/* Facilities & Quick Actions Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <CardTitle>Facility Overview</CardTitle>
                        <CardDescription>Energy performance across locations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {facilityData.map((facility, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                  <div className={`w-3 h-3 rounded-full mr-2 bg-${facility.status === 'Excellent' ? 'green' : facility.status === 'Good' ? 'blue' : 'amber'}-500`}></div>
                                  <h3 className="font-medium">{facility.name}</h3>
                                </div>
                                <div className="flex items-center">
                                  <Badge className={`${facility.trend === 'down' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} flex items-center`}>
                                    {facility.trend === 'down' ? <ChevronDown className="w-3 h-3 mr-1" /> : <ChevronUp className="w-3 h-3 mr-1" />}
                                    {facility.change}%
                                  </Badge>
                                  <Button variant="ghost" size="sm">
                                    Details
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-4 mb-2">
                                <div>
                                  <p className="text-xs text-gray-500">Consumption</p>
                                  <p className="font-medium">{facility.consumption} kWh</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Cost</p>
                                  <p className="font-medium">₹{facility.cost}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Efficiency</p>
                                  <p className="font-medium">{facility.efficiency}</p>
                                </div>
                              </div>
                              
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${
                                    facility.status === 'Excellent' ? 'bg-green-500' : 
                                    facility.status === 'Good' ? 'bg-blue-500' : 'bg-amber-500'
                                  }`}
                                  style={{ width: `${facility.efficiencyPercent}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common tasks and shortcuts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" className="flex flex-col h-auto py-4 space-y-1">
                            <Download className="h-5 w-5 mb-1" />
                            <span>Download Report</span>
                          </Button>
                          
                          <Button variant="outline" className="flex flex-col h-auto py-4 space-y-1">
                            <CloudLightning className="h-5 w-5 mb-1" />
                            <span>View Alerts</span>
                          </Button>
                          
                          <Button variant="outline" className="flex flex-col h-auto py-4 space-y-1">
                            <Zap className="h-5 w-5 mb-1" />
                            <span>Energy Audit</span>
                          </Button>
                          
                          <Button variant="outline" className="flex flex-col h-auto py-4 space-y-1">
                            <Plus className="h-5 w-5 mb-1" />
                            <span>Add Device</span>
                          </Button>
                        </div>
                        
                        <div className="mt-6 bg-primary/5 rounded-lg p-4">
                          <h3 className="font-medium text-primary mb-2">Energy Saving Tip</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Scheduling your HVAC system based on occupancy patterns can reduce energy costs by up to 15%.
                          </p>
                          <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                            Learn more
                            <ArrowUpRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="consumption">
                  <div className="p-6 text-center">
                    <LightningEnergyLoader color="primary" size="lg" />
                    <h3 className="mt-4 text-lg font-medium">Consumption analytics view is under development</h3>
                    <p className="text-gray-500 mt-2">This feature will be available soon!</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="devices">
                  <div className="p-6 text-center">
                    <LightningEnergyLoader color="primary" size="lg" />
                    <h3 className="mt-4 text-lg font-medium">Devices management view is under development</h3>
                    <p className="text-gray-500 mt-2">This feature will be available soon!</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="reports">
                  <div className="p-6 text-center">
                    <LightningEnergyLoader color="primary" size="lg" />
                    <h3 className="mt-4 text-lg font-medium">Reports view is under development</h3>
                    <p className="text-gray-500 mt-2">This feature will be available soon!</p>
                  </div>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </section>
    </motion.div>
  );
}

// Component for Quick Stat Cards
interface QuickStatCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
  icon: React.ReactNode;
  color: "primary" | "accent" | "success" | "danger" | "warning" | "info";
}

const QuickStatCard = ({ title, value, change, period, icon, color }: QuickStatCardProps) => {
  const colorStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-green-50 text-green-600 border-green-100",
    danger: "bg-red-50 text-red-600 border-red-100",
    warning: "bg-amber-50 text-amber-600 border-amber-100",
    info: "bg-blue-50 text-blue-600 border-blue-100",
  };
  
  const bgColor = colorStyles[color];
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className={`p-2 rounded-full ${bgColor}`}>
            {icon}
          </div>
        </div>
        
        <div className="flex items-center">
          <Badge 
            className={`flex items-center ${change < 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            {change < 0 ? <ChevronDown className="h-3 w-3 mr-1" /> : <ChevronsUp className="h-3 w-3 mr-1" />}
            {Math.abs(change)}%
          </Badge>
          <span className="text-xs text-gray-500 ml-2">{period}</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Component for Recommendation Items
interface RecommendationItemProps {
  title: string;
  description: string;
  saving: string;
  icon: React.ReactNode;
  priority: "high" | "medium" | "low";
}

const RecommendationItem = ({ title, description, saving, icon, priority }: RecommendationItemProps) => {
  const priorityColors = {
    high: "text-red-600 bg-red-50",
    medium: "text-amber-600 bg-amber-50",
    low: "text-green-600 bg-green-50",
  };
  
  return (
    <div className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0 mr-3 mt-1">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <Badge className={priorityColors[priority]}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mt-1 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-green-600 font-semibold">Est. Savings: {saving}</span>
          <Button variant="outline" size="sm">
            Implement
          </Button>
        </div>
      </div>
    </div>
  );
};

// Component for Alert Items
interface AlertItemProps {
  title: string;
  description: string;
  time: string;
  type: "warning" | "alert" | "success" | "info";
}

const AlertItem = ({ title, description, time, type }: AlertItemProps) => {
  const typeStyles = {
    warning: "border-amber-500 bg-amber-50",
    alert: "border-red-500 bg-red-50",
    success: "border-green-500 bg-green-50",
    info: "border-blue-500 bg-blue-50",
  };
  
  const typeIcons = {
    warning: <CloudLightning className="h-5 w-5 text-amber-500" />,
    alert: <Bolt className="h-5 w-5 text-red-500" />,
    success: <Battery className="h-5 w-5 text-green-500" />,
    info: <Zap className="h-5 w-5 text-blue-500" />,
  };
  
  return (
    <div className={`flex items-start p-3 border-l-4 rounded-lg ${typeStyles[type]}`}>
      <div className="flex-shrink-0 mr-3 mt-1">
        {typeIcons[type]}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

// Sample Data for Charts

// Energy Consumption Data
const energyConsumptionData = [
  { date: 'Jan 1', energy: 42.3 },
  { date: 'Jan 2', energy: 43.8 },
  { date: 'Jan 3', energy: 41.6 },
  { date: 'Jan 4', energy: 38.5 },
  { date: 'Jan 5', energy: 35.7 },
  { date: 'Jan 6', energy: 45.2 },
  { date: 'Jan 7', energy: 47.8 },
  { date: 'Jan 8', energy: 45.9 },
  { date: 'Jan 9', energy: 44.3 },
  { date: 'Jan 10', energy: 42.7 },
  { date: 'Jan 11', energy: 39.8 },
  { date: 'Jan 12', energy: 38.4 },
  { date: 'Jan 13', energy: 40.1 },
  { date: 'Jan 14', energy: 39.5 },
];

// Energy Distribution Data
const energyDistributionData = [
  { name: 'HVAC', value: 485, color: '#3498db' },
  { name: 'Lighting', value: 210, color: '#e74c3c' },
  { name: 'Equipment', value: 312, color: '#2ecc71' },
  { name: 'IT Infrastructure', value: 175, color: '#f39c12' },
  { name: 'Others', value: 65, color: '#9b59b6' },
];

// Facility Data
const facilityData = [
  {
    name: 'Main Headquarters',
    consumption: '542',
    cost: '4,586',
    efficiency: 'Excellent',
    efficiencyPercent: 92,
    status: 'Excellent',
    trend: 'down',
    change: 5.3
  },
  {
    name: 'Manufacturing Plant',
    consumption: '385',
    cost: '3,272',
    efficiency: 'Good',
    efficiencyPercent: 78,
    status: 'Good',
    trend: 'down',
    change: 2.1
  },
  {
    name: 'Research Lab',
    consumption: '198',
    cost: '1,683',
    efficiency: 'Needs Improvement',
    efficiencyPercent: 65,
    status: 'Warning',
    trend: 'up',
    change: 3.7
  }
];