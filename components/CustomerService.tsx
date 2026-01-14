
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './UI/Button';
import { Send, MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';

export const CustomerService: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Thanks Chef! We've received your message.");
    }, 1500);
  };

  const faqs = [
    {
      q: "How accurate is the AI scanning?",
      a: "Our AI is trained on over 500,000 professional kitchen ingredients. For best results, scan in good lighting. You can always manually override any scanned data."
    },
    {
      q: "Can I use BiteBytes offline in a walk-in freezer?",
      a: "Yes! BiteBytes is built with an offline-first architecture. Scans and cost updates are stored locally and synced automatically once you regain connection."
    },
    {
      q: "How do I export my data for my accountant?",
      a: "Pro users can export individual recipes or entire inventory logs as CSV or PDF directly from the settings menu."
    },
    {
      q: "Does it support multi-unit restaurants?",
      a: "BiteBytes supports shared ingredient libraries across multiple units with centralized management on our Business plans."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">How can we help, Chef?</h1>
          <p className="text-xl text-slate-600">Our support team is staffed by former hospitality professionals who understand the urgency of your kitchen.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <MessageSquare className="text-brand-primary" /> Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                  placeholder="Chef Auguste"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                  placeholder="chef@restaurant.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                  placeholder="How can we assist your kitchen today?"
                ></textarea>
              </div>
              <Button type="submit" fullWidth disabled={submitted} className="gap-2">
                {submitted ? "Sending..." : "Send Message"} <Send size={18} />
              </Button>
            </form>
          </motion.div>

          {/* Contact Details & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            {/* Quick Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Mail className="text-brand-primary mb-3" size={24} />
                <div className="font-bold text-slate-900">Email</div>
                <div className="text-sm text-slate-500">Reachbitebytes@gmail.com</div>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Phone className="text-brand-primary mb-3" size={24} />
                <div className="font-bold text-slate-900">Phone</div>
                <div className="text-sm text-slate-500">Mon-Fri, 9am-6pm EST</div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <HelpCircle className="text-brand-primary" /> Common Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-6">
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
