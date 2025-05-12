import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Battery, 
  Gauge, 
  Clock, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  ThermometerIcon,
  Zap,
  Watch,
  BatteryWarning,
  Plug,
  LucideIcon,
  Power,
  Timer,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for the dashboard
const chartData = [
  { name: '12 AM', value: 90 },
  { name: '2 AM', value: 92 },
  { name: '4 AM', value: 91 },
  { name: '6 AM', value: 85 },
  { name: '8 AM', value: 75 },
  { name: '10 AM', value: 60 },
  { name: '12 PM', value: 45 },
  { name: '2 PM', value: 50 },
  { name: '4 PM', value: 65 },
  { name: '6 PM', value: 70 },
  { name: '8 PM', value: 85 },
  { name: '10 PM', value: 88 },
];

const secondaryChartData = [
  { name: 'Monday', current: 85, previous: 80 },
  { name: 'Tuesday', current: 80, previous: 75 },
  { name: 'Wednesday', current: 75, previous: 70 },
  { name: 'Thursday', current: 65, previous: 72 },
  { name: 'Friday', current: 60, previous: 68 },
  { name: 'Saturday', current: 70, previous: 65 },
  { name: 'Sunday', current: 82, previous: 78 },
];

const pieData = [
  { name: 'IT Equipment', value: 45 },
  { name: 'Lighting', value: 15 },
  { name: 'HVAC', value: 25 },
  { name: 'Other', value: 15 },
];

const metrics = [
  {
    title: 'Battery Charge',
    value: '85%',
    change: '-2%',
    status: 'negative' as const,
    icon: <Battery className="h-5 w-5" />,
  },
  {
    title: 'Load',
    value: '62%',
    change: '+5%',
    status: 'neutral' as const,
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: 'Temperature',
    value: '28°C',
    status: 'positive' as const,
    icon: <ThermometerIcon className="h-5 w-5" />,
  },
  {
    title: 'Backup Time',
    value: '1.8 hrs',
    change: '-15 min',
    status: 'negative' as const,
    icon: <Watch className="h-5 w-5" />,
  },
];

const alerts = [
  {
    title: 'Battery Replacement Needed',
    message: 'UPS-01 battery health below 60%. Schedule replacement within 30 days.',
    time: '2 hrs ago',
    priority: 'medium' as const,
  },
  {
    title: 'Power Event Detected',
    message: 'Momentary power quality issue detected. UPS successfully maintained load.',
    time: '5 hrs ago',
    priority: 'low' as const,
  },
  {
    title: 'High Load Warning',
    message: 'UPS-02 load reached 85% of capacity. Review connected equipment.',
    time: '1 day ago',
    priority: 'high' as const,
  },
];

const UPSMonitoringDashboard: React.FC = () => {
  const customComponents = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BatteryWarning className="mr-2 h-5 w-5 text-primary" />
            Battery Health Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-lg font-semibold">Battery Bank Status</span>
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                  Maintenance advised
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-sm text-gray-500">Estimated Life Remaining</div>
                  <div className="text-xl font-bold">68%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Replacement Date</div>
                  <div className="text-xl font-bold">Aug 2025</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Battery Health</span>
                <span>68/100</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Discharge Cycles</div>
                <div className="text-2xl font-bold">142</div>
                <div className="text-xs text-gray-500 mt-1">Lifetime: 500 cycles</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Last Full Test</div>
                <div className="text-xl font-bold">12 days ago</div>
                <div className="text-xs text-gray-500 mt-1">Result: Passed</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Cell Voltage Balance</span>
                <span className="text-green-600">Normal</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Internal Resistance</span>
                <span className="text-amber-600">Elevated</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Temperature Spread</span>
                <span className="text-green-600">Normal</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Charge Acceptance</span>
                <span className="text-amber-600">Reduced</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Power className="mr-2 h-5 w-5 text-primary" />
            Power Events & Runtime
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-semibold mb-3">Estimated Runtime</div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary">1:48</div>
                  <div className="text-xs text-gray-500">Current Load</div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <div className="text-2xl font-bold">2:25</div>
                  <div className="text-xs text-gray-500">50% Load</div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <div className="text-2xl font-bold">0:55</div>
                  <div className="text-xs text-gray-500">Full Load</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                *Runtime based on current battery condition
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-lg font-semibold">Recent Power Events</div>
              
              <div className="border-l-4 border-amber-400 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium">Voltage Sag</span>
                  <span className="text-xs text-gray-500">Today, 09:42 AM</span>
                </div>
                <div className="text-sm">178V for 2.4 seconds. UPS compensated.</div>
              </div>
              
              <div className="border-l-4 border-red-400 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium">Power Failure</span>
                  <span className="text-xs text-gray-500">Yesterday, 04:15 PM</span>
                </div>
                <div className="text-sm">Battery mode for 12 minutes. Clean recovery.</div>
              </div>
              
              <div className="border-l-4 border-amber-400 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="font-medium">Frequency Deviation</span>
                  <span className="text-xs text-gray-500">3 days ago, 11:30 AM</span>
                </div>
                <div className="text-sm">48.2 Hz for 35 seconds. UPS stabilized.</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <span className="font-medium">Monthly Availability</span>
              <span className="text-green-600 font-semibold">99.98%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <MonitoringDashboardTemplate
      title="UPS System Monitoring"
      description="Battery health, load analysis, and power quality metrics for your UPS systems"
      metrics={metrics}
      alerts={alerts}
      chartData={chartData}
      secondaryChartData={secondaryChartData}
      pieData={pieData}
      customComponents={customComponents}
    />
  );
};

export default UPSMonitoringDashboard;