import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
          <p className="text-slate-500 mb-12">Last updated: January 14, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p>BiteBytes collects information to provide better services to our culinary professional users. This includes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Inventory Data:</strong> Information about ingredients, stock levels, and vendor pricing you input or scan.</li>
                <li><strong>Recipe Information:</strong> Ingredient lists, yield percentages, and preparation methods.</li>
                <li><strong>Device Information:</strong> We collect hardware model, OS version, and unique device identifiers to ensure iOS compatibility.</li>
                <li><strong>Camera Data:</strong> Temporary access to your camera for AI ingredient recognition and invoice OCR.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Information</h2>
              <p>We use the data collected to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Calculate precise recipe costs and margins.</li>
                <li>Sync your data across devices via your Convex project.</li>
                <li>Improve our AI recognition models for common kitchen ingredients.</li>
                <li>Provide customer support and respond to inquiries.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
              <p>We implement industry-standard security measures, including end-to-end encryption for data in transit and secure database storage via Convex. Your recipe secrets are protected by secure authentication requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Services</h2>
              <p>We share data with third-party providers only when necessary for app functionality:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Convex:</strong> For database hosting, authentication, and data synchronization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at Reachbitebytes@gmail.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};