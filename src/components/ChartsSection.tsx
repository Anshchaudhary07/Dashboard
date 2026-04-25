import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
  { name: 'Jan', created: 400, solved: 240 },
  { name: 'Feb', created: 300, solved: 139 },
  { name: 'Mar', created: 200, solved: 980 },
  { name: 'Apr', created: 278, solved: 390 },
  { name: 'May', created: 189, solved: 480 },
  { name: 'Jun', created: 239, solved: 380 },
  { name: 'Jul', created: 349, solved: 430 },
];

const timeData = [
  { time: '00:00', firstReply: 1.2, fullResolve: 12 },
  { time: '04:00', firstReply: 0.8, fullResolve: 8 },
  { time: '08:00', firstReply: 2.5, fullResolve: 15 },
  { time: '12:00', firstReply: 3.2, fullResolve: 24 },
  { time: '16:00', firstReply: 2.8, fullResolve: 18 },
  { time: '20:00', firstReply: 1.5, fullResolve: 14 },
];

const weekData = [
  { name: 'Mon', tickets: 120 },
  { name: 'Tue', tickets: 180 },
  { name: 'Wed', tickets: 250 },
  { name: 'Thu', tickets: 210 },
  { name: 'Fri', tickets: 150 },
  { name: 'Sat', tickets: 90 },
];

const typeData = [
  { name: 'Sales', value: 400 },
  { name: 'Setup', value: 300 },
  { name: 'Bug', value: 300 },
  { name: 'Features', value: 200 },
];

const returnData = [
  { name: 'New', value: 85 },
  { name: 'Returned', value: 15 },
];

const COLORS = ['#3b82f6', '#a855f7', '#ec4899', '#06b6d4'];
const PIE_COLORS = ['#3b82f6', '#1e293b'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="text-slate-300 text-sm mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-medium" style={{ color: entry.color || entry.fill }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ChartsSection() {
  return (
    <div className="space-y-6">
      {/* Top Row: Line and Area Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Line Chart */}
        <div className="glass-card p-6 rounded-2xl relative">
          <h3 className="text-lg font-semibold mb-6 text-white">Tickets Created vs Solved</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="created" name="Created" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#0f172a', strokeWidth: 2}} activeDot={{r: 8, stroke: '#3b82f6', strokeWidth: 2, fill: '#0f172a', className: "neon-glow"}} />
                <Line type="monotone" dataKey="solved" name="Solved" stroke="#a855f7" strokeWidth={3} dot={{r: 4, fill: '#0f172a', strokeWidth: 2}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}
        <div className="glass-card p-6 rounded-2xl relative">
          <h3 className="text-lg font-semibold mb-6 text-white">First Reply & Full Resolve Time (Hours)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorReply" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorResolve" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Area type="monotone" dataKey="fullResolve" name="Full Resolve" stroke="#ec4899" fillOpacity={1} fill="url(#colorResolve)" strokeWidth={2} />
                <Area type="monotone" dataKey="firstReply" name="First Reply" stroke="#06b6d4" fillOpacity={1} fill="url(#colorReply)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row: Bar and Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Bar Chart */}
        <div className="glass-card p-6 rounded-2xl lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6 text-white">Tickets per Weekday</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: '#1e293b', opacity: 0.5}} />
                <Bar dataKey="tickets" name="Tickets" fill="url(#colorTickets)" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Charts Container */}
        <div className="glass-card p-6 rounded-2xl flex flex-col space-y-6">
          <div className="flex-1">
            <h3 className="text-md font-semibold mb-2 text-white text-center">Tickets by Type</h3>
            <div className="h-[120px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={typeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={55}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {typeData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-2 mt-2">
              {typeData.map((entry, index) => (
                <div key={index} className="flex items-center text-xs">
                  <div className="w-2 h-2 rounded-full mr-1" style={{backgroundColor: COLORS[index]}}></div>
                  <span className="text-slate-400">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 pt-4 border-t border-slate-700/50">
            <h3 className="text-md font-semibold mb-2 text-white text-center">New vs Returned</h3>
            <div className="h-[100px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={returnData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {returnData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-lg font-bold text-white">85%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
