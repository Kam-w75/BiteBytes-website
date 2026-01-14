import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Receipt, PieChart } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      label: "AI Scanning",
      icon: Scan,
      title: "Vision to Inventory in Seconds",
      content: "Forget manual data entry. BiteBytes' AVFoundation camera integration captures ingredients in real-time, identifying produce, proteins, and dry goods with high confidence.",
      stat: "3s",
      statLabel: "Processing Time"
    },
    {
      id: 1,
      label: "Cost Analysis",
      icon: Receipt,
      title: "Deep Cost Intelligence",
      content: "Drill down into cost-per-serving and ingredient breakdown. We handle the complex math of yield % and shrinkage so your margins stay true.",
      stat: "100%",
      statLabel: "Accuracy"
    },
    {
      id: 2,
      label: "Profitability",
      icon: PieChart,
      title: "Menu Engineering",
      content: "Visualize your menu's performance. Identify cash cows and dogs immediately with our intuitive dashboard widgets and reporting tools.",
      stat: "+15%",
      statLabel: "Avg. Margin Increase"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content - Tabs */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Precision Tools for <br/>Culinary Professionals</h2>
            
            <div className="space-y-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    activeTab === tab.id 
                      ? 'bg-slate-900 border-slate-900 shadow-xl scale-[1.02]' 
                      : 'bg-white border-slate-200 hover:border-brand-primary'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === tab.id ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <tab.icon size={24} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-1 ${activeTab === tab.id ? 'text-white' : 'text-slate-900'}`}>
                        {tab.label}
                      </h4>
                      {activeTab === tab.id && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-slate-400 text-sm"
                        >
                          Click to view details
                        </motion.p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Visuals */}
          <div className="w-full lg:w-1/2 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-slate-50 w-full aspect-square max-w-[500px] rounded-[3rem] p-8 md:p-12 relative overflow-hidden border border-slate-200">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-6">{tabs[activeTab].title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {tabs[activeTab].content}
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 inline-block max-w-[200px]">
                      <div className="text-4xl font-extrabold text-brand-primary mb-1">{tabs[activeTab].stat}</div>
                      <div className="text-sm font-medium text-slate-500">{tabs[activeTab].statLabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};