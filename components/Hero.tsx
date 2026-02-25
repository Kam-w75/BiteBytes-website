
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './UI/Button';
import { AppStoreBadge } from './UI/AppStoreBadge';
import { 
  ChevronRight, 
  Percent, 
  Store, 
  DollarSign, 
  AlertTriangle, 
  Mic, 
  LayoutDashboard, 
  UtensilsCrossed, 
  Camera, 
  Box, 
  MoreHorizontal,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-primary/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              v1.0 Available for iOS 17.0+
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">
                Kitchen Margins
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              BiteBytes transforms your smartphone into a professional kitchen management tool. 
              Snap photos for AI inventory, calculate recipe costs instantly, and optimize your profits.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <AppStoreBadge width={180} height={54} />
              <Button size="lg" variant="outline" className="gap-2 h-[54px]">
                View Demo <ChevronRight size={20} />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Offline First
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Convex Sync
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                AI Powered
              </div>
            </div>
          </motion.div>

          {/* Visual/Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-3xl -z-10" />
            
            {/* Phone Frame Simulation */}
            <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl border-4 border-slate-800 mx-auto transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative font-sans">
                
                {/* Status/Header Area */}
                <div className="pt-10 px-6 pb-2">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-extrabold text-slate-900">Dashboard</h2>
                  </div>

                  {/* Demo Mode Banner */}
                  <div className="bg-[#2C3E50] rounded-xl p-3 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <Sparkles className="text-white w-4 h-4" />
                      <div className="text-left">
                        <div className="text-white text-xs font-bold leading-none">Demo Mode</div>
                        <div className="text-slate-300 text-[10px]">Exploring Hometown Kitchen Co.</div>
                      </div>
                    </div>
                    <button className="bg-slate-700 text-white text-[10px] font-bold py-1 px-3 rounded-md">Exit Demo</button>
                  </div>
                </div>

                {/* Content Area - REMOVED overflow-y-auto to fix the UI in place */}
                <div className="flex-1 px-5 pt-4 space-y-4 overflow-hidden pb-24">
                  
                  {/* Title Section */}
                  <div className="text-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Hometown Kitchen Co.</h3>
                    <p className="text-slate-500 text-xs">5 Concepts. 2 Kitchens. 1 Dashboard.</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Food Cost */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                      <Percent className="text-orange-500 w-5 h-5 mb-2" strokeWidth={2.5} />
                      <div className="text-2xl font-bold text-slate-900">27.8%</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mt-auto">Food Cost</div>
                      <div className="text-[9px] text-slate-400">Target: 25%</div>
                    </div>
                    {/* Brands */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                      <Store className="text-blue-500 w-5 h-5 mb-2" strokeWidth={2.5} />
                      <div className="text-2xl font-bold text-slate-900">5</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mt-auto">Brands</div>
                      <div className="text-[9px] text-slate-400">12 recipes</div>
                    </div>
                    {/* Weekly Revenue */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                      <DollarSign className="text-green-500 w-5 h-5 mb-2" strokeWidth={2.5} />
                      <div className="text-2xl font-bold text-slate-900">$58K</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mt-auto">Weekly Revenue</div>
                      <div className="text-[9px] text-slate-400">8847 orders/mo</div>
                    </div>
                    {/* Alerts */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                      <AlertTriangle className="text-red-500 w-5 h-5 mb-2" strokeWidth={2.5} />
                      <div className="text-2xl font-bold text-slate-900">3</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mt-auto">Alerts</div>
                      <div className="text-[9px] text-slate-400">Need attention</div>
                    </div>
                  </div>

                  {/* Ask Me Anything Voice Assistant */}
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-white shrink-0">
                      <div className="flex items-center gap-[2px]">
                        {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                          <div key={i} className="bg-white w-[2px] rounded-full" style={{ height: `${h * 4}px` }} />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">Ask Me Anything</div>
                      <div className="text-xs text-slate-500">Voice Assistant</div>
                    </div>
                    <ChevronRight className="text-slate-300 w-5 h-5" />
                  </div>

                  {/* Alerts Section */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-900 px-1">Alerts</h4>
                    <div className="bg-white rounded-2xl border border-slate-100 p-4 flex items-start gap-4 shadow-sm">
                      <div className="p-2 bg-orange-50 rounded-lg shrink-0">
                        <AlertTriangle className="text-orange-500 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">Inventory Status</div>
                        <div className="text-[10px] text-slate-500">0 expiring, 25 low, 0 out</div>
                      </div>
                      <ChevronRight className="text-slate-300 w-4 h-4 mt-1" />
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Navigation Bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-lg rounded-[2.5rem] shadow-2xl border border-slate-100 px-4 py-2 z-30">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="bg-slate-100 p-2 rounded-2xl text-brand-primary">
                        <LayoutDashboard size={20} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-bold text-slate-900">Dashboard</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <UtensilsCrossed size={20} />
                      <span className="text-[9px] font-bold">Recipes</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <Camera size={20} />
                      <span className="text-[9px] font-bold">Scan</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <Box size={20} />
                      <span className="text-[9px] font-bold">Inventory</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <MoreHorizontal size={20} />
                      <span className="text-[9px] font-bold">More</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
