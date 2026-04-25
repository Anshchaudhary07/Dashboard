import Sidebar from './components/Sidebar';
import TopCards from './components/TopCards';
import ChartsSection from './components/ChartsSection';
import { Search, Bell, Settings } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-purple-500/30">
      <Sidebar />
      
      <main className="ml-64 p-8 transition-all duration-300">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 glass-card px-6 py-4 rounded-2xl sticky top-4 z-20">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">Dashboard Overview</h2>
            <p className="text-slate-400 text-sm mt-1">Welcome back, here's what's happening today.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-neon-cyan transition-colors">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-slate-800/50 border border-slate-700 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all w-64 text-white placeholder-slate-500"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-slate-800/80 text-slate-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full neon-glow"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-slate-800/80 text-slate-400 hover:text-white transition-colors">
                <Settings size={20} />
              </button>
              
              <div className="h-8 w-px bg-slate-700 mx-2"></div>
              
              <div className="flex items-center space-x-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px] group-hover:neon-glow transition-all">
                  <div className="w-full h-full rounded-full border-2 border-[#0f172a] overflow-hidden bg-slate-800">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="User avatar" />
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-white">Ansh Chaudhary</p>
                  <p className="text-xs text-slate-400">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <TopCards />
          <ChartsSection />
        </div>
      </main>
    </div>
  );
}

export default App;
