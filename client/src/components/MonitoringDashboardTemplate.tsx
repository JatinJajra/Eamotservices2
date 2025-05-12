import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Layout from './Layout';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Clock, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle, 
  Activity,
  Download,
  Share2,
  Filter,
  Bell,
  Settings,
  ChevronDown
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CircuitEnergyLoader } from './ui/energy-loader';

interface DashboardMetric {
  title: string;
  value: string | number;
  change?: string;
  status?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

interface DashboardAlert {
  title: string;
  message: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}

interface DashboardTimeRange {
  label: string;
  value: string;
}

interface MonitoringDashboardTemplateProps {
  title: string;
  description: string;
  metrics: DashboardMetric[];
  alerts?: DashboardAlert[];
  chartData?: any[];
  secondaryChartData?: any[];
  pieData?: any[];
  customComponents?: React.ReactNode;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MonitoringDashboardTemplate: React.FC<MonitoringDashboardTemplateProps> = ({
  title,
  description,
  metrics,
  alerts = [],
  chartData = [],
  secondaryChartData = [],
  pieData = [],
  customComponents,
}) => {
  const { ref: headerRef, inView: headerInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: metricsRef, inView: metricsInView } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: chartRef, inView: chartInView } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: alertsRef, inView: alertsInView } = useIntersectionObserver({ threshold: 0.1 });
  
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('24h');
  
  const timeRanges: DashboardTimeRange[] = [
    { label: 'Last 24 Hours', value: '24h' },
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Last Quarter', value: '90d' },
    { label: 'Last Year', value: '1y' },
  ];
  
  const refreshData = () => {
    setIsLoading(true);
    // Simulate refresh
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Dashboard Header */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="pt-8 pb-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-300 mt-1">{description}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <div className="relative">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Clock className="mr-2 h-4 w-4" />
                  {timeRanges.find(r => r.value === selectedTimeRange)?.label}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                {/* Time range dropdown would go here */}
              </div>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" onClick={refreshData}>
                {isLoading ? <CircuitEnergyLoader size="xs" color="primary" /> : "Refresh"}
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" /> Export
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Metrics Section */}
      <motion.section
        ref={metricsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="py-6 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={metricsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-sm">{metric.title}</span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="flex items-end">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      {metric.change && (
                        <div className={`ml-2 text-sm ${
                          metric.status === 'positive' ? 'text-green-500' : 
                          metric.status === 'negative' ? 'text-red-500' : 'text-gray-500'
                        }`}>
                          {metric.change}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Charts Section */}
      <motion.section
        ref={chartRef}
        initial={{ opacity: 0, y: 20 }}
        animate={chartInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-6 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Performance Trends</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Filter className="h-4 w-4 mr-1" /> Filter
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-1" /> Share
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="area">
                    <div className="flex justify-between items-center mb-4">
                      <TabsList>
                        <TabsTrigger value="area">Area</TabsTrigger>
                        <TabsTrigger value="line">Line</TabsTrigger>
                        <TabsTrigger value="bar">Bar</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="area" className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={chartData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </TabsContent>
                    
                    <TabsContent value="line" className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={chartData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </TabsContent>
                    
                    <TabsContent value="bar" className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={chartData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#0ea5e9" />
                        </BarChart>
                      </ResponsiveContainer>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Secondary Chart/Pie Chart */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    {pieData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="text-center text-gray-400">
                        <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                        <p>No distribution data available</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Secondary Charts/Comparison Section */}
      {secondaryChartData.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={chartInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="py-6 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle>Comparative Analysis</CardTitle>
                <CardDescription>
                  Compare trends over different periods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={secondaryChartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="current" fill="#0ea5e9" name="Current Period" />
                      <Bar dataKey="previous" fill="#6b7280" name="Previous Period" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Alerts & Notifications Section */}
      {alerts.length > 0 && (
        <motion.section
          ref={alertsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={alertsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-6 bg-white"
        >
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    <div className="flex items-center">
                      <Bell className="mr-2 h-5 w-5 text-primary" />
                      Recent Alerts
                    </div>
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4 mr-1" /> Configure
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={alertsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-4 rounded-md border-l-4 ${
                        alert.priority === 'high' ? 'border-red-500 bg-red-50' : 
                        alert.priority === 'medium' ? 'border-amber-500 bg-amber-50' : 
                        'border-blue-500 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          alert.priority === 'high' ? 'bg-red-100 text-red-500' : 
                          alert.priority === 'medium' ? 'bg-amber-100 text-amber-500' : 
                          'bg-blue-100 text-blue-500'
                        }`}>
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{alert.title}</h4>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              {alerts.length > 3 && (
                <CardFooter className="border-t border-gray-100 px-6 py-3">
                  <Button variant="ghost" className="w-full text-primary">
                    View All Alerts
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </motion.section>
      )}

      {/* Custom Components Section */}
      {customComponents && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={alertsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-6 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            {customComponents}
          </div>
        </motion.section>
      )}
    </Layout>
  );
};

export default MonitoringDashboardTemplate;