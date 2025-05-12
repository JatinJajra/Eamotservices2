import React from 'react';
import MonitoringDashboardTemplate from '@/components/MonitoringDashboardTemplate';
import { 
  Activity, 
  Gauge, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  Zap,
  BatteryCharging,
  ThermometerIcon,
  Timer,
  BarChart3,
  RotateCw,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for the dashboard
const chartData = [
  { name: '12 AM', value: 230 },
  { name: '2 AM', value: 228 },
  { name: '4 AM', value: 232 },
  { name: '6 AM', value: 245 },
  { name: '8 AM', value: 215 },
  { name: '10 AM', value: 225 },
  { name: '12 PM', value: 210 },
  { name: '2 PM', value: 205 },
  { name: '4 PM', value: 220 },
  { name: '6 PM', value: 235 },
  { name: '8 PM', value: 240 },
  { name: '10 PM', value: 235 },
];

const secondaryChartData = [
  { name: 'Monday', current: 230, previous: 235 },
  { name: 'Tuesday', current: 225, previous: 230 },
  { name: 'Wednesday', current: 215, previous: 220 },
  { name: 'Thursday', current: 235, previous: 230 },
  { name: 'Friday', current: 240, previous: 245 },
  { name: 'Saturday', current: 220, previous: 225 },
  { name: 'Sunday', current: 225, previous: 230 },
];

const pieData = [
  { name: 'Normal Operation', value: 85 },
  { name: 'Correction Events', value: 12 },
  { name: 'Fault Conditions', value: 3 },
];

const metrics = [
  {
    title: 'Output Voltage',
    value: '230V',
    change: '±0.5%',
    status: 'positive' as const,
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: 'Stability Index',
    value: '98.7%',
    change: '+0.2%',
    status: 'positive' as const,
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'Motor Temperature',
    value: '42°C',
    status: 'neutral' as const,
    icon: <ThermometerIcon className="h-5 w-5" />,
  },
  {
    title: 'Response Time',
    value: '8 ms',
    change: '-2 ms',
    status: 'positive' as const,
    icon: <Timer className="h-5 w-5" />,
  },
];

const alerts = [
  {
    title: 'Voltage Fluctuation',
    message: 'Input voltage fluctuation of ±15V detected. Servo compensated successfully.',
    time: '45 min ago',
    priority: 'low' as const,
  },
  {
    title: 'High Motor Temperature',
    message: 'SS-03 motor temperature reached 48°C. Approaching warning threshold.',
    time: '3 hrs ago',
    priority: 'medium' as const,
  },
  {
    title: 'Carbon Brush Wear',
    message: 'SS-01 carbon brushes showing increased wear. Schedule replacement within 30 days.',
    time: '1 day ago',
    priority: 'medium' as const,
  },
];

const ServoMonitoringDashboard: React.FC = () => {
  const customComponents = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="mr-2 h-5 w-5 text-primary" />
            Servo Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">Correction Events</span>
                <span className="text-sm text-gray-500">Last 24 Hours</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <div className="text-xl font-bold">18</div>
                  <div className="text-xs text-gray-500">Minor (±10V)</div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center">
                  <div className="text-xl font-bold">4</div>
                  <div className="text-xs text-gray-500">Major (±30V)</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Correction Efficiency</span>
                <span>96.5%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '96.5%' }}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-lg font-semibold">Component Status</div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Variac Assembly</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-green-600">Excellent</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Control Circuit</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-green-600">Good</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Carbon Brushes</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-amber-600">Fair</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Servomotor</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-green-600">Good</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-primary" />
            Voltage Quality Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-lg font-semibold mb-3">24-Hour Voltage Performance</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Input Fluctuation Range</div>
                  <div className="text-xl font-bold">180V - 270V</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Output Stability</div>
                  <div className="text-xl font-bold">230V ±1%</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-xs text-gray-500 mb-1">Max Spike</div>
                <div className="text-lg font-bold">+42V</div>
                <div className="text-xs text-gray-500">07:15 AM</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-xs text-gray-500 mb-1">Max Dip</div>
                <div className="text-lg font-bold">-38V</div>
                <div className="text-xs text-gray-500">04:30 PM</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-xs text-gray-500 mb-1">Avg. Deviation</div>
                <div className="text-lg font-bold">±12V</div>
                <div className="text-xs text-gray-500">24hr period</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-lg font-semibold">Protection Events</div>
              
              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                <span>Over-voltage Cutoffs</span>
                <span className="font-medium text-green-600">0</span>
              </div>
              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                <span>Under-voltage Cutoffs</span>
                <span className="font-medium text-green-600">0</span>
              </div>
              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                <span>Short Circuit Events</span>
                <span className="font-medium text-green-600">0</span>
              </div>
              <div className="flex justify-between text-sm p-2 bg-gray-50 rounded">
                <span>Thermal Protections</span>
                <span className="font-medium text-green-600">0</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <MonitoringDashboardTemplate
      title="Servo Stabilizer Monitoring"
      description="Real-time voltage stability tracking and performance analytics for your servo stabilizers"
      metrics={metrics}
      alerts={alerts}
      chartData={chartData}
      secondaryChartData={secondaryChartData}
      pieData={pieData}
      customComponents={customComponents}
    />
  );
};

export default ServoMonitoringDashboard;