import { Clock, CheckCircle2, MessageSquare, Mail, TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
  {
    title: 'Avg First Reply Time',
    value: '3h 15m',
    trend: '-12%',
    isPositive: true,
    icon: Clock,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Avg Full Resolve Time',
    value: '18h 42m',
    trend: '-5%',
    isPositive: true,
    icon: CheckCircle2,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Messages',
    value: '2,451',
    trend: '+18%',
    isPositive: true,
    icon: MessageSquare,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'Emails',
    value: '1,284',
    trend: '-2%',
    isPositive: false,
    icon: Mail,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400'
  }
];

export default function TopCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-slate-800/50 ${stat.iconColor} border border-white/5`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-sm font-medium ${
                stat.isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'
              }`}>
                {stat.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{stat.trend}</span>
              </div>
            </div>
            
            <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
