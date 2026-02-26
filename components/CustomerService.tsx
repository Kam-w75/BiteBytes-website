import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './UI/Button';
import { Send, MessageSquare, Phone, Mail, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { EMAIL_REGEX, MIN_MESSAGE_LENGTH } from '../constants';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const validateForm = (data: FormData): string | null => {
  if (!data.name.trim()) return 'Name is required.';
  if (!EMAIL_REGEX.test(data.email)) return 'Please enter a valid email address.';
  if (data.message.trim().length < MIN_MESSAGE_LENGTH)
    return `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  return null;
};

export const CustomerService: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus]     = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear inline error when user starts typing again
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setStatus('loading');
    setErrorMsg(null);

    try {
      // TODO: Replace with real API endpoint when backend is ready
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset to idle after a few seconds so the form can be used again
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  };

  const faqs = [
    {
      q: 'How accurate is the AI scanning?',
      a: 'Our AI is trained on over 500,000 professional kitchen ingredients. For best results, scan in good lighting. You can always manually override any scanned data.',
    },
    {
      q: 'Can I use BiteBytes offline in a walk-in freezer?',
      a: 'Yes! BiteBytes is built with an offline-first architecture. Scans and cost updates are stored locally and synced automatically once you regain connection.',
    },
    {
      q: 'How do I export my data for my accountant?',
      a: 'Pro users can export individual recipes or entire inventory logs as CSV or PDF directly from the settings menu.',
    },
    {
      q: 'Does it support multi-unit restaurants?',
      a: 'BiteBytes supports shared ingredient libraries across multiple units with centralized management on our Business plans.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            How can we help, Chef?
          </h1>
          <p className="text-xl text-slate-600">
            Our support team is staffed by former hospitality professionals who understand
            the urgency of your kitchen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <MessageSquare className="text-brand-primary" aria-hidden="true" />
              Send a Message
            </h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="text-green-500 mb-4" size={48} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent!</h3>
                  <p className="text-slate-600">
                    Thanks, Chef! We&apos;ll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                /* Form state */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Global validation error */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="alert"
                        className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
                      >
                        <AlertCircle size={16} aria-hidden="true" />
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                      Name <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                      placeholder="Chef Auguste"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                      Email <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                      placeholder="chef@restaurant.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                      Message <span aria-label="required" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none"
                      placeholder="How can we assist your kitchen today?"
                    />
                    <p className="mt-1 text-xs text-slate-400">
                      Minimum {MIN_MESSAGE_LENGTH} characters
                    </p>
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    disabled={status === 'loading'}
                    className="gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
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
                <Mail className="text-brand-primary mb-3" size={24} aria-hidden="true" />
                <div className="font-bold text-slate-900">Email</div>
                <a
                  href="mailto:hello@bitebytes.co"
                  className="text-sm text-slate-500 hover:text-brand-primary transition-colors"
                >
                  hello@bitebytes.co
                </a>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Phone className="text-brand-primary mb-3" size={24} aria-hidden="true" />
                <div className="font-bold text-slate-900">Phone</div>
                <div className="text-sm text-slate-500">Mon–Fri, 9am–6pm EST</div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <HelpCircle className="text-brand-primary" aria-hidden="true" />
                Common Questions
              </h2>
              <dl className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-6">
                    <dt className="font-bold text-slate-900 mb-2">{faq.q}</dt>
                    <dd className="text-slate-600 text-sm leading-relaxed">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
