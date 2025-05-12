import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Activity, 
  BarChart3, 
  Droplet, 
  Gauge, 
  Clock, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  Engine,
  ThermometerIcon,
  Zap,
  Fuel
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for the dashboard
const chartData = [
  { name: '12 AM', value: 65 },
  { name: '2 AM', value: 45 },
  { name: '4 AM', value: 40 },
  { name: '6 AM', value: 50 },
  { name: '8 AM', value: 75 },
  { name: '10 AM', value: 90 },
  { name: '12 PM', value: 100 },
  { name: '2 PM', value: 95 },
  { name: '4 PM', value: 85 },
  { name: '6 PM', value: 90 },
  { name: '8 PM', value: 80 },
  { name: '10 PM', value: 70 },
];

const secondaryChartData = [
  { name: 'Monday', current: 55, previous: 40 },
  { name: 'Tuesday', current: 65, previous: 45 },
  { name: 'Wednesday', current: 60, previous: 55 },
  { name: 'Thursday', current: 80, previous: 70 },
  { name: 'Friday', current: 85, previous: 65 },
  { name: 'Saturday', current: 70, previous: 60 },
  { name: 'Sunday', current: 50, previous: 45 },
];

const pieData = [
  { name: 'Base Load', value: 45 },
  { name: 'Variable Load', value: 25 },
  { name: 'Peak Load', value: 20 },
  { name: 'Idle', value: 10 },
];

const metrics = [
  {
    title: 'Current Load',
    value: '78%',
    change: '+5%',
    status: 'positive',
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: 'Fuel Level',
    value: '65%',
    change: '-3%',
    status: 'negative',
    icon: <Droplet className="h-5 w-5" />,
  },
  {
    title: 'Engine Temperature',
    value: '82°C',
    status: 'neutral',
    icon: <ThermometerIcon className="h-5 w-5" />,
  },
  {
    title: 'Runtime Today',
    value: '8.5 hrs',
    change: '+1.2 hrs',
    status: 'neutral',
    icon: <Clock className="h-5 w-5" />,
  },
];

const alerts = [
  {
    title: 'Low Fuel Warning',
    message: 'DG-01 fuel level below 25%. Schedule refueling within 24 hours.',
    time: '35 min ago',
    priority: 'medium',
  },
  {
    title: 'High Engine Temperature',
    message: 'DG-02 engine temperature reached 95°C. Check cooling system.',
    time: '2 hrs ago',
    priority: 'high',
  },
  {
    title: 'Maintenance Due',
    message: 'Scheduled maintenance for DG-01 due in 5 days. Contact service team.',
    time: '12 hrs ago',
    priority: 'low',
  },
];

const DGMonitoringDashboard: React.FC = () => {
  const customComponents = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Engine className="mr-2 h-5 w-5 text-primary" />
            Engine Health Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Oil Pressure</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">42 PSI</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Coolant Level</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">90%</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Battery Voltage</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">13.8V</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">RPM</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">1820</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Exhaust Temperature</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">540°C</span>
                <div className="w-24 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Fuel className="mr-2 h-5 w-5 text-primary" />
            Fuel Efficiency
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Current Consumption</div>
                <div className="text-2xl font-bold">12.8 L/hr</div>
                <div className="flex items-center text-green-500 text-sm mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" /> 3.2% better than avg
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Monthly Average</div>
                <div className="text-2xl font-bold">13.2 L/hr</div>
                <div className="text-xs text-gray-500 mt-1">Based on last 30 days</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Efficiency Score</span>
                <span className="text-sm font-medium">82/100</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: '82%' }}></div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Factors: Load balance, runtime efficiency, maintenance status
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Estimated Fuel Left</div>
                <div className="text-xl font-bold">145 Liters</div>
                <div className="text-xs text-gray-500 mt-1">~11.3 hours at current rate</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">CO₂ Emissions</div>
                <div className="text-xl font-bold">34.2 kg/hr</div>
                <div className="flex items-center text-amber-500 text-xs mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" /> Near limit
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <MonitoringDashboardTemplate
      title="Diesel Generator Monitoring"
      description="Real-time performance metrics and analysis for your DG units"
      metrics={metrics}
      alerts={alerts}
      chartData={chartData}
      secondaryChartData={secondaryChartData}
      pieData={pieData}
      customComponents={customComponents}
    />
  );
};

export default DGMonitoringDashboard;