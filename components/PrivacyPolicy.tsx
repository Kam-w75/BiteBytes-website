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
          {/* Header */}
          <div className="mb-12 border-b border-slate-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              BiteBytes Privacy Policy
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Effective Date: October 2025</span>
              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">Version 1.1</span>
            </div>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                BiteBytes ("we," "our," or "us") is a professional recipe costing and kitchen management application
                designed for chefs, restaurant operators, and food service businesses. This Privacy Policy explains
                how we collect, use, share, and protect your personal information when you use the BiteBytes iOS app ("App").
              </p>
              <p className="mt-4">
                By downloading, installing, or using BiteBytes, you agree to the practices described in this Privacy
                Policy. If you do not agree, please uninstall the App and contact us to request deletion of any data
                we hold about you.
              </p>
              <div className="mt-6 p-5 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl">
                <p className="font-semibold text-slate-800 mb-1">Plain-English Summary</p>
                <p className="text-sm">
                  BiteBytes collects only what's needed to run the app. We never sell your data. We do not track you
                  across other apps or websites. You own your recipes and ingredients. You can delete everything at any time.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. App Store Privacy Nutrition Label</h2>
              <p>
                Apple requires us to disclose all data collected through BiteBytes, including data collected by
                third-party SDKs integrated into the App.
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">Data Linked to You</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Contact Information</p>
                      <p className="text-sm">Email Address — used for account creation, authentication, and support. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">User Content</p>
                      <p className="text-sm">Photos and Videos — food photos captured or selected when using the AI Camera feature, transmitted to OpenAI for ingredient recognition. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                      <p className="text-sm mt-2">Other User Content — recipes, ingredients, vendor pricing, inventory records, method steps, notes, and tags you create in the app. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Financial Information</p>
                      <p className="text-sm">Ingredient costs, vendor prices, sell prices, and food cost percentages that you manually enter into the app. This data is yours and is never used for any purpose other than powering your costing calculations. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Identifiers</p>
                      <p className="text-sm">User ID — your account ID used to authenticate you and isolate your data in our database. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Purchases</p>
                      <p className="text-sm">Purchase History — your subscription tier (Free, Pro, or Business) and subscription status, verified through Apple StoreKit 2. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">Data Not Linked to You</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Usage Data</p>
                      <p className="text-sm">Aggregated app feature usage patterns used to understand how features are performing and to prioritize improvements. <span className="text-brand-primary font-medium">(Analytics)</span></p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="font-semibold text-slate-800 mb-1">Diagnostics</p>
                      <p className="text-sm">Crash logs and error reports used to identify and fix bugs. App launch time and stability metrics. <span className="text-brand-primary font-medium">(App Functionality)</span></p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="font-bold text-green-800 mb-2">Data Not Collected</p>
                  <p className="text-sm text-green-700">
                    BiteBytes does not collect: precise or coarse location, contacts, browsing history, health or
                    fitness data, sensitive personal information (racial/ethnic origin, biometric data, etc.),
                    advertising identifiers (IDFA), audio data, or device IDs used for tracking.
                  </p>
                </div>

                <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="font-bold text-green-800 mb-2">No Tracking</p>
                  <p className="text-sm text-green-700">
                    BiteBytes does not track you. We do not link data collected from our app with data from
                    third-party apps, websites, or services for advertising purposes. We do not share your data
                    with data brokers. We do not display third-party advertisements.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Collection in Detail</h2>
              <div className="space-y-4">
                {[
                  { title: 'Account (Email Address)', body: 'Required to create your account, authenticate you, sync your data across devices, and contact you if you request support. Legal basis: contract performance.' },
                  { title: 'Apple Sign-In Identifier', body: 'If you choose Sign in with Apple, we receive an anonymized identifier from Apple rather than your email. This is linked to your account.' },
                  { title: 'User Content (Recipes, Ingredients, Inventory, Vendors)', body: 'The core data you create in the app. Stored locally on your device and synced to your private cloud database. Used solely to provide app functionality.' },
                  { title: 'Photos (AI Camera Feature Only)', body: "Captured or selected by you when using the AI Camera. Compressed on your device, transmitted to OpenAI's Vision API for ingredient recognition, and then discarded. Not stored on BiteBytes's servers." },
                  { title: 'Financial Data (Costs and Pricing)', body: 'Ingredient costs, vendor prices, and sell prices you enter manually. Used only to power the recipe costing engine on your device and in your account. Never shared with any third party.' },
                  { title: 'Subscription Status', body: 'Your active plan tier (Free/Pro/Business) and renewal date, verified via Apple StoreKit 2. Used to unlock features appropriate to your tier.' },
                  { title: 'Anonymized Usage & Crash Data', body: 'Aggregated, non-identifiable data about how the app is used and when it crashes. Used to improve app stability and features. Cannot be traced back to any individual user.' },
                  { title: 'Sync Timestamps', body: 'The date and time of your last data sync, stored to enable conflict resolution when you use multiple devices. Not shared.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                    <p className="text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Your Information</h2>
              <p className="mb-4">We use your data only to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Create and secure your account</li>
                <li>Deliver the full functionality of the app (recipe costing, inventory, vendor management, AI recognition)</li>
                <li>Sync your data across your devices</li>
                <li>Verify your subscription status and unlock Pro/Business features</li>
                <li>Fix bugs and improve app performance using anonymized diagnostics</li>
                <li>Respond to support requests you initiate</li>
                <li>Comply with applicable laws</li>
              </ul>
              <p className="mt-4 font-medium text-slate-800">
                We do not use your data for advertising, marketing, or to build behavioral profiles. We do not sell
                your data to any third party.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
              <p className="mb-6">We are responsible for disclosing data collected by all third-party SDKs integrated into BiteBytes. Below is a complete list:</p>
              <div className="space-y-5">
                {[
                  {
                    name: 'Supabase',
                    url: 'supabase.com',
                    role: 'Backend database, authentication, and cloud storage.',
                    data: 'Email address, User ID, and all user-generated content (recipes, ingredients, inventory, vendor data, AI recognition logs).',
                    purpose: 'App Functionality — storing and syncing your data securely across devices.',
                    linked: true,
                    privacy: 'supabase.com/privacy',
                    note: null,
                  },
                  {
                    name: 'OpenAI',
                    url: 'openai.com',
                    role: 'AI Vision API for ingredient recognition.',
                    data: 'Food photos, transmitted only when you actively use the AI Camera feature.',
                    purpose: "App Functionality — identifying food ingredients from photos.",
                    linked: false,
                    privacy: 'openai.com/policies/privacy-policy',
                    note: "Photos are processed in real time and not stored by BiteBytes. OpenAI's own data policies govern their handling of API requests.",
                  },
                  {
                    name: 'Apple CloudKit / iCloud',
                    url: 'apple.com',
                    role: 'Optional supplemental device sync.',
                    data: 'User content synced across your devices under your Apple ID.',
                    purpose: 'App Functionality.',
                    linked: true,
                    privacy: 'apple.com/legal/privacy',
                    note: null,
                  },
                  {
                    name: 'Apple StoreKit 2',
                    url: 'apple.com',
                    role: 'Subscription and in-app purchase management.',
                    data: 'Subscription status, purchase verification tokens.',
                    purpose: 'App Functionality — verifying your subscription tier.',
                    linked: true,
                    privacy: 'apple.com/legal/privacy',
                    note: 'BiteBytes never receives or stores your payment card information. All payment processing is handled entirely by Apple.',
                  },
                ].map((svc) => (
                  <div key={svc.name} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="font-bold text-slate-900 mb-3">{svc.name}</p>
                    <dl className="space-y-1.5 text-sm">
                      <div className="flex gap-2"><dt className="font-semibold text-slate-700 w-24 shrink-0">Role:</dt><dd>{svc.role}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-slate-700 w-24 shrink-0">Data:</dt><dd>{svc.data}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-slate-700 w-24 shrink-0">Purpose:</dt><dd>{svc.purpose}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-slate-700 w-24 shrink-0">Linked:</dt><dd>{svc.linked ? 'Yes' : 'No — processed anonymously'}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-slate-700 w-24 shrink-0">Privacy:</dt><dd><a href={`https://${svc.privacy}`} className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">{svc.privacy}</a></dd></div>
                    </dl>
                    {svc.note && <p className="mt-3 text-sm text-slate-500 italic">{svc.note}</p>}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                We do not integrate any analytics SDKs (such as Firebase, Mixpanel, or Amplitude), advertising SDKs,
                social media SDKs, or crash reporting SDKs that link data to individual users.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Camera & AI Ingredient Recognition</h2>
              <p className="mb-4">The AI Camera is a feature that requires camera and/or photo library access. Here's exactly how it works:</p>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li>You photograph your ingredients in the app</li>
                <li>The image is compressed on your device and sent over an encrypted (TLS) connection to OpenAI's Vision API</li>
                <li>OpenAI returns a structured list of recognized ingredients (names, estimated quantities, categories, and confidence scores)</li>
                <li>You review the results and choose which items to accept, edit, or discard</li>
                <li>Accepted items are added to your inventory or recipe. A recognition log entry is saved to your account for your reference.</li>
              </ol>
              <p className="mt-4 text-sm">
                Photos are never stored on BiteBytes's servers. Camera and photo library permissions are used only
                for this feature and can be revoked at any time in <strong>iOS Settings → Privacy & Security</strong> without
                affecting any other app functionality.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Subscriptions & Payments</h2>
              <p className="mb-6">BiteBytes offers three tiers:</p>
              <div className="space-y-4">
                {[
                  { tier: 'Free', desc: 'Up to 10 recipes, 25 ingredients, 15 inventory items. Manual entry only.' },
                  { tier: 'Pro — $9.99/mo or $79.99/yr', desc: 'Unlimited recipes and ingredients, AI scanning (20 scans/month), advanced analytics, export, widgets, Siri Shortcuts. Includes 7-day free trial.' },
                  { tier: 'Business — $29.99/mo or $299.99/yr', desc: 'Everything in Pro plus multi-location support, team collaboration (up to 5 users), API access, and dedicated support.' },
                ].map((t) => (
                  <div key={t.tier} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-semibold text-slate-800 mb-1">{t.tier}</p>
                    <p className="text-sm">{t.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm">
                All payments are processed by Apple. BiteBytes never collects, stores, or accesses your payment
                card information. We store only your subscription tier and status. Subscriptions auto-renew unless
                cancelled at least 24 hours before the renewal date. Manage or cancel at any time via{' '}
                <strong>Settings → Apple ID → Subscriptions</strong>.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Sync & Local Storage</h2>
              <p>
                BiteBytes is offline-first. All data is saved locally on your device using Core Data before any
                network sync occurs, ensuring full functionality without an internet connection. When online, the
                app syncs changes to your private Supabase database. Sync uses last-write-wins conflict resolution
                based on timestamps. Data in transit is encrypted using TLS 1.2 or higher. Data at rest in Supabase
                is encrypted. Supabase Row Level Security (RLS) policies ensure your data is accessible only by
                your authenticated account.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Retention & Deletion</h2>
              <p>We keep your data as long as your account is active.</p>
              <p className="mt-3">
                To delete your account and all associated data, email{' '}
                <a href="mailto:privacy@bitebytes.app" className="text-brand-primary hover:underline">privacy@bitebytes.app</a>{' '}
                with the subject line <strong>"Delete My Account."</strong> We will complete deletion within 30 days and confirm by email.
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <p><strong>What gets deleted:</strong> All recipes, ingredients, inventory records, vendor data, AI recognition logs, and account information in our systems. Local data on your device is removed when you uninstall the App.</p>
                <p><strong>What may be retained:</strong> Anonymized, aggregated usage statistics that cannot be traced to you, and any records required by law (e.g., transaction records for up to 7 years under applicable tax law). Apple manages subscription and payment records under their own retention policies.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Your Privacy Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <div className="space-y-3 text-sm">
                {[
                  ['Access', 'Request a copy of the personal data we hold about you.'],
                  ['Correction', 'Correct inaccurate data. Most data can be edited directly in the app.'],
                  ['Deletion', 'Request full deletion of your account and data.'],
                  ['Portability', 'Export your data in CSV or JSON format. Pro and Business subscribers can export directly from the app.'],
                  ['Restriction', 'Request limited processing of your data.'],
                  ['Object', 'Object to processing based on legitimate interests (we rely on this for anonymized crash analytics).'],
                  ['Withdraw Consent', 'Revoke camera or photo library permission at any time in iOS Settings.'],
                ].map(([right, desc]) => (
                  <div key={right} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-800 w-36 shrink-0">{right}</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <p>Contact us at <a href="mailto:privacy@bitebytes.app" className="text-brand-primary hover:underline">privacy@bitebytes.app</a> to exercise these rights. We will respond within 30 days and may need to verify your identity.</p>
                <p><strong>California Residents (CCPA/CPRA):</strong> You have the right to know what data we collect, request deletion, and opt out of sale (we do not sell data). Submit a verifiable consumer request to <a href="mailto:privacy@bitebytes.app" className="text-brand-primary hover:underline">privacy@bitebytes.app</a>.</p>
                <p><strong>EEA / UK Residents (GDPR):</strong> Our legal bases are: contract performance (account and core app features), legitimate interests (security and anonymized crash analytics), and consent (camera and AI features). You may lodge a complaint with your local supervisory authority.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Children's Privacy</h2>
              <p>
                BiteBytes is designed for professional use by adults. We do not knowingly collect personal information
                from anyone under 13 (or under 16 in the EEA/UK). If you believe a child has submitted personal
                information through our app, contact us at{' '}
                <a href="mailto:privacy@bitebytes.app" className="text-brand-primary hover:underline">privacy@bitebytes.app</a>{' '}
                and we will delete it promptly.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Data Security</h2>
              <p className="mb-4">We apply the following security measures:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>TLS 1.2+ encryption for all data transmitted between the app and our servers</li>
                <li>Encryption at rest for all data stored in Supabase</li>
                <li>iOS Keychain storage for session tokens, API keys, and credentials</li>
                <li>Row Level Security in Supabase ensuring strict per-user data isolation at the database level</li>
                <li>Hashed passwords — plaintext passwords are never stored</li>
                <li>Apple Sign-In via OAuth 2.0</li>
                <li>Session tokens are automatically refreshed and stored securely</li>
              </ul>
              <p className="mt-4 text-sm text-slate-500">
                No security system is infallible. If you suspect your account has been compromised, contact{' '}
                <a href="mailto:security@bitebytes.app" className="text-brand-primary hover:underline">security@bitebytes.app</a> immediately.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to This Policy</h2>
              <p>
                We will notify you of material changes via an in-app notification and by updating the Effective Date
                at the top of this policy. Continued use of the app after the effective date constitutes acceptance.
                Previous versions are available on request.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Privacy Links (Apple App Store)</h2>
              <div className="space-y-3 text-sm">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="font-semibold text-slate-800 mb-1">Privacy Policy URL</p>
                  <p>Required for App Store — the public URL where this policy is hosted.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="font-semibold text-slate-800 mb-1">Privacy Choices URL</p>
                  <p>Contact <a href="mailto:privacy@bitebytes.app" className="text-brand-primary hover:underline">privacy@bitebytes.app</a> to access, correct, export, or delete your data, or to manage any consent you have provided.</p>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Us</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Privacy & Data Requests', email: 'privacy@bitebytes.app' },
                  { label: 'Security Issues', email: 'security@bitebytes.app' },
                  { label: 'General Support', email: 'support@bitebytes.app' },
                ].map((c) => (
                  <div key={c.email} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{c.label}</p>
                    <a href={`mailto:${c.email}`} className="text-brand-primary hover:underline text-sm font-medium">{c.email}</a>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500 text-center">
                We respond to privacy inquiries within 5 business days and complete data requests within 30 days of identity verification.
              </p>
            </section>

            {/* Footer note */}
            <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
              © 2025 BiteBytes. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
