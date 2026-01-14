import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle, ShieldCheck } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 border-b border-slate-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Last Updated: January 14, 2026</span>
              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">Effective Date: January 14, 2026</span>
            </div>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "user") and BiteBytes ("BiteBytes," "we," "us," or "our") governing your access to and use of the BiteBytes mobile application (the "App") and related services (collectively, the "Services").</p>
              <p className="mt-4">By downloading, installing, accessing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">2.1 Age Requirements</h3>
                  <p>You must be at least 13 years of age to use the Services. If you are between 13 and 18 years old (or the age of legal majority in your jurisdiction), you may only use the Services with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">2.2 Account Registration</h3>
                  <p>To access certain features of the Services, you must create an account. You agree to provide accurate information, maintain security of your password, and accept responsibility for all activities under your account.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. License and Restrictions</h2>
              <p>BiteBytes grants you a limited, non-exclusive, non-transferable license to use the App for personal or internal business purposes. You agree NOT to copy, modify, reverse engineer, or use the App for illegal purposes.</p>
            </section>

            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Pricing and Payment Terms</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-primary font-bold mb-2">
                  <ShieldCheck size={20} /> One-Time Purchase: $39.99
                </div>
                <p>This is a lifetime license for the current version (v1.x) of the App. All sales are final. Refunds must be requested through the Apple App Store within 14 days of purchase.</p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Check className="text-green-500" size={16}/> Included</h4>
                    <ul className="text-sm space-y-1">
                      <li>Lifetime access to v1.x</li>
                      <li>Bug fixes & security updates</li>
                      <li>Cloud sync via Convex</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><X className="text-red-500" size={16}/> Not Included</h4>
                    <ul className="text-sm space-y-1">
                      <li>v2.0+ major upgrades</li>
                      <li>OpenAI API usage fees</li>
                      <li>Third-party subscription costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Content</h2>
              <p>You retain ownership of all recipes and data you create ("User Content"). You grant BiteBytes a license to use this data solely to provide and improve the Services. You are responsible for maintaining your own backups.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Third-Party Services and AI Features</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <p className="text-sm text-orange-800 font-medium"><strong>IMPORTANT:</strong> BiteBytes does NOT provide, pay for, or subsidize OpenAI API usage. All OpenAI costs are borne directly by you through your OpenAI account.</p>
              </div>
              <p>Optional AI ingredient recognition requires your own OpenAI API key. Cloud sync requires a separate Convex account. We are not responsible for third-party service availability or pricing changes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Intellectual Property Rights</h2>
              <p>The App, algorithms (including Recipe Brain engines), and branding are owned by BiteBytes and protected by international intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Disclaimers and Limitation of Liability</h2>
              <div className="space-y-4">
                <p className="uppercase text-xs font-bold tracking-widest text-slate-400">Section 10.1-10.7 Summary</p>
                <p className="font-bold text-slate-800">THE SERVICES ARE NOT A SUBSTITUTE FOR PROFESSIONAL ADVICE. BiteBytes DOES NOT PROVIDE FINANCIAL, FOOD SAFETY, OR LEGAL GUIDANCE.</p>
                <p>Liability is limited to the amount you paid ($39.99). We are not responsible for indirect damages, including lost profits or business interruption.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Dispute Resolution</h2>
              <p>Governed by the laws of the State of Delaware. Any disputes shall be resolved through <strong>binding arbitration</strong> under AAA rules, unless you opt out within 30 days of purchase.</p>
            </section>

            {/* Quick Reference Summary */}
            <div className="mt-16 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-primary p-2 rounded-lg">
                  <AlertCircle size={24} />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight">Quick Reference Summary</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4">✅ What You Get</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex gap-2"><Check size={16} className="text-brand-primary shrink-0"/> Lifetime license for v1.x</li>
                      <li className="flex gap-2"><Check size={16} className="text-brand-primary shrink-0"/> Cloud sync & offline access</li>
                      <li className="flex gap-2"><Check size={16} className="text-brand-primary shrink-0"/> Email customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-4">❌ What's Not Included</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex gap-2"><X size={16} className="text-red-400 shrink-0"/> v2.0+ Major upgrades</li>
                      <li className="flex gap-2"><X size={16} className="text-red-400 shrink-0"/> OpenAI/Convex usage costs</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">📱 Responsibilities</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li>Provide own Convex/OpenAI accounts</li>
                      <li>Verify calculations before business decisions</li>
                      <li>Backup data regularly</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 italic">This summary is not legally binding. Please refer to the full text above for comprehensive terms.</p>
                  </div>
                </div>
              </div>
            </div>

            <footer className="text-center pt-12 text-sm text-slate-400">
              <p>© 2026 BiteBytes. All rights reserved.</p>
              <p className="mt-2">For legal inquiries, contact legal@Bitebytes.app</p>
            </footer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};