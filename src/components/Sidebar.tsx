import { useState } from 'react';
import { User, FileText, BarChart2, MessageSquare, Phone, Mail, MessageCircle, Activity, Download } from 'lucide-react';
import clsx from 'clsx';

const menuItems = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'report', label: 'Report', icon: FileText },
  { id: 'graphs', label: 'Graphs', icon: BarChart2 },
  { id: 'texts', label: 'Texts', icon: MessageSquare },
  {
    id: 'channels', label: 'Channels', icon: Mail, sub: true,
    children: [
      { id: 'email', label: 'Email', icon: Mail },
      { id: 'phone', label: 'Phone Call', icon: Phone },
      { id: 'chat', label: 'Online Chat', icon: MessageCircle },
    ]
  },
  { id: 'ticket_status', label: 'Ticket Status', icon: Activity },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState('graphs');

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass-card border-r border-slate-800 flex flex-col z-10 transition-all duration-300">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="neon-gradient-text">CRM</span>
          <span className="text-white"> DASH</span>
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => setActiveId(item.id)}
              className={clsx(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300",
                activeId === item.id 
                  ? "bg-slate-800/50 text-neon-blue neon-glow border border-neon-blue/30" 
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/30"
              )}
            >
              <item.icon size={20} className={activeId === item.id ? "text-neon-cyan" : ""} />
              <span className="font-medium">{item.label}</span>
            </button>
            
            {item.children && (
              <div className="mt-2 ml-4 pl-4 border-l border-slate-700/50 space-y-1">
                {item.children.map(child => (
                  <button
                    key={child.id}
                    onClick={() => setActiveId(child.id)}
                    className={clsx(
                      "w-full flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-all duration-300",
                      activeId === child.id 
                        ? "text-neon-purple font-medium" 
                        : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    <child.icon size={16} />
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-6 mt-auto border-t border-slate-800/50">
        <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:opacity-90 hover:neon-glow transition-all duration-300">
          <Download size={18} />
          <span>Download Report</span>
        </button>
      </div>
    </aside>
  );
}
