
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './UI/Button';
import { AppStoreBadge } from './UI/AppStoreBadge';
import { ChevronRight, ScanLine, TrendingUp, Utensils } from 'lucide-react';

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
                Supabase Sync
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
            <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800 mx-auto transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col relative">
                
                {/* App Header */}
                <div className="pt-12 px-6 pb-4 bg-white">
                  <h3 className="text-xl font-bold text-slate-900">Dashboard</h3>
                  <p className="text-sm text-slate-500">Welcome back, Chef!</p>
                </div>

                {/* App Body */}
                <div className="flex-1 p-6 space-y-4 overflow-hidden">
                  {/* Chart Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase">Food Cost %</span>
                      <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">-2.4%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">28.5%</div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[28.5%] bg-brand-primary rounded-full"></div>
                    </div>
                  </div>

                  {/* Grid Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-primary text-white p-4 rounded-2xl shadow-lg shadow-brand-primary/20 flex flex-col items-center justify-center gap-2 aspect-square">
                      <ScanLine size={32} />
                      <span className="font-bold text-sm">Scan Item</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 aspect-square">
                      <Utensils size={32} className="text-slate-400" />
                      <span className="font-medium text-sm text-slate-600">Recipes</span>
                    </div>
                  </div>

                  {/* List Item */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <TrendingUp size={18} />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-slate-900">Beef Tenderloin</div>
                       <div className="text-xs text-slate-500">Price up 12% vs last week</div>
                     </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-6 right-6 w-14 h-14 bg-brand-primary rounded-full shadow-xl flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
