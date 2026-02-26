import React from 'react';
import { motion } from 'framer-motion';

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
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Terms of Service & End User License Agreement</h1>
            <p className="text-slate-500 font-medium">BiteBytes, Inc.</p>
            <div className="flex flex-wrap gap-4 text-sm font-medium mt-4">
              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">Effective Date: February 25, 2026</span>
            </div>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed">

            <section>
              <p>Welcome to BiteBytes! These Terms of Service and End User License Agreement (together, "Terms" or "EULA") govern your access to and use of the BiteBytes platform, including our iOS mobile application, web application, AI-powered features, and all related services (collectively, the "Service" or "Licensed Application").</p>
              <div className="mt-4 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                <p className="text-sm text-amber-800"><strong>IMPORTANT NOTICE REGARDING APPLE APP STORE:</strong> If you downloaded BiteBytes from the Apple App Store, please read Section 17 carefully. These Terms are entered into between you and BiteBytes, Inc. only — not with Apple Inc. Apple is not a party to this agreement and is not responsible for the Licensed Application or its content.</p>
              </div>
              <p className="mt-4">By creating an account, downloading, or using BiteBytes, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Eligibility</h2>
              <p>You must be at least 18 years old and have the legal authority to enter into binding contracts to use BiteBytes. By using the Service, you represent and warrant that:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                <li>You are at least 18 years of age;</li>
                <li>You have the legal authority to agree to these Terms on behalf of yourself or the business you represent;</li>
                <li>Your use of the Service complies with all applicable laws and regulations; and</li>
                <li>You are not located in any country subject to a U.S. government embargo, and are not listed on any U.S. government list of prohibited or restricted parties, including the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Department of Commerce Denied Persons List or Entity List.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Account Registration</h2>
              <p>To access BiteBytes, you must create an account. You agree to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                <li>Provide accurate, complete, and current registration information;</li>
                <li>Maintain the security of your account credentials and not share your password with others;</li>
                <li>Promptly notify us at <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a> if you suspect unauthorized access to your account; and</li>
                <li>Take responsibility for all activity that occurs under your account.</li>
              </ul>
              <p className="mt-3">We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. License Grant</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">3.1 Scope of License</h3>
                  <p>Subject to your compliance with these Terms, BiteBytes, Inc. grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Licensed Application on any Apple-branded or other compatible device that you own or control, solely for your personal or internal business purposes in accordance with the Usage Rules set forth in the Apple Media Services Terms and Conditions.</p>
                  <p className="mt-3">This license does not allow you to use the Licensed Application on any device that you do not own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time (except as permitted by these Terms).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">3.2 Restrictions</h3>
                  <p>You agree not to:</p>
                  <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                    <li>Transfer, redistribute, sublicense, rent, lease, or lend the Licensed Application to any third party;</li>
                    <li>Copy or reproduce any portion of the Licensed Application;</li>
                    <li>Reverse engineer, disassemble, decompile, or otherwise attempt to derive the source code of the Licensed Application;</li>
                    <li>Modify, adapt, translate, or create derivative works based on the Licensed Application;</li>
                    <li>Remove or alter any proprietary notices, labels, or marks on the Licensed Application;</li>
                    <li>Use the Licensed Application for any unlawful purpose or in violation of any applicable law; or</li>
                    <li>Export or re-export the Licensed Application in violation of applicable export control laws.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. The BiteBytes Service</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">4.1 Core Features</h3>
                  <p>BiteBytes provides restaurant operators and food service businesses with tools to:</p>
                  <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                    <li>Track and manage ingredient costs and inventory;</li>
                    <li>Create and cost recipes based on current ingredient prices;</li>
                    <li>Scan and process supplier invoices using AI-powered optical character recognition;</li>
                    <li>Monitor food cost percentages, profit margins, and business insights; and</li>
                    <li>Access AI-generated recommendations and analytics to optimize profitability.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">4.2 AI-Powered Features</h3>
                  <p>BiteBytes uses artificial intelligence and machine learning to enhance the Service, including invoice scanning, ingredient matching, recipe suggestions, and cost insights. You acknowledge that:</p>
                  <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                    <li>AI-generated outputs are provided for informational purposes only and may not be 100% accurate;</li>
                    <li>You are responsible for reviewing and verifying all AI-generated data, including scanned invoice results, ingredient prices, and cost calculations before making business decisions;</li>
                    <li>BiteBytes does not guarantee the accuracy, completeness, or fitness for a particular purpose of any AI-generated content; and</li>
                    <li>The AI may learn from your inputs to improve suggestions over time, as described in our Privacy Policy.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">4.3 Third-Party Integrations</h3>
                  <p>The Service may integrate with third-party platforms, including point-of-sale systems, supplier portals, and payment processors. Your use of these integrations is subject to the applicable third-party terms of service. BiteBytes is not responsible for the availability, accuracy, or actions of third-party services.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Acceptable Use</h2>
              <p>You agree to use BiteBytes only for lawful purposes. You agree not to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-sm">
                <li>Use the Service for any unlawful, fraudulent, or harmful purpose;</li>
                <li>Upload false or misleading data with the intent to manipulate Service outputs;</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service;</li>
                <li>Attempt to gain unauthorized access to any part of the Service or its underlying systems;</li>
                <li>Use automated bots, scrapers, or data extraction tools without our prior written consent;</li>
                <li>Transmit viruses, malware, or other harmful code;</li>
                <li>Violate any applicable local, state, national, or international law or regulation;</li>
                <li>Resell, sublicense, or commercialize any part of the Service without our prior written permission; or</li>
                <li>Export or re-export the Licensed Application in violation of U.S. export control laws or to anyone on any U.S. government prohibited-party list.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Data and Content</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">7.1 Ownership</h3>
                  <p>You retain full ownership of all data, recipes, ingredient lists, invoices, and other content you upload or create within BiteBytes ("User Content"). These Terms do not transfer any intellectual property rights from you to us.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">7.2 License to BiteBytes</h3>
                  <p>By uploading User Content, you grant BiteBytes a limited, non-exclusive, royalty-free, worldwide license to use, process, store, and display your User Content solely for the purpose of providing and improving the Service. We will not sell your User Content to third parties.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">7.3 Aggregated and Anonymized Data</h3>
                  <p>BiteBytes may use aggregated, anonymized data (with no personally identifiable information) to improve the Service, train AI models, and develop industry insights. This aggregated data does not identify you or your business.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">7.4 Data Accuracy</h3>
                  <p>You are solely responsible for the accuracy and completeness of data you enter into BiteBytes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Maintenance and Support</h2>
              <p>BiteBytes, Inc. — not Apple — is solely responsible for providing maintenance and support services for the Licensed Application. Apple has no obligation whatsoever to furnish any maintenance or support services with respect to the Licensed Application.</p>
              <p className="mt-3">For support, contact us at: <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">9.1 BiteBytes IP</h3>
                  <p>The BiteBytes platform, including its software, design, logos, trademarks, AI models, and all related intellectual property, is owned by BiteBytes, Inc. and protected by applicable intellectual property laws. Nothing in these Terms grants you any right to use our trademarks or branding without our prior written consent.</p>
                  <p className="mt-3">Feedback or suggestions you submit may be used by BiteBytes without any obligation to compensate you.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">9.2 Third-Party IP Claims</h3>
                  <p>BiteBytes, Inc. — not Apple — is solely responsible for the investigation, defense, settlement, and discharge of any third-party intellectual property infringement claim relating to the Licensed Application or your use of it.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Privacy</h2>
              <p>Our Privacy Policy, incorporated into these Terms by reference, describes how we collect, use, and protect your personal information. By using the Service, you consent to the data practices described in our Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Product Claims</h2>
              <p>BiteBytes, Inc. — not Apple — is responsible for addressing any claims you or any third party may have relating to the Licensed Application or your use of it, including: (i) product liability claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation. Apple has no responsibility or obligation to address any such claims.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Disclaimers of Warranty</h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm space-y-3">
                <p className="font-bold text-slate-800 uppercase">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BITEBYTES DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. BITEBYTES DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT AI-GENERATED OUTPUTS WILL BE ACCURATE OR COMPLETE.</p>
                <p className="font-bold text-slate-800 uppercase">IN THE EVENT OF ANY FAILURE OF THE LICENSED APPLICATION TO CONFORM TO ANY APPLICABLE WARRANTY, YOU MAY NOTIFY APPLE (IF PURCHASED VIA THE APP STORE), AND APPLE WILL REFUND THE PURCHASE PRICE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APPLE WILL HAVE NO OTHER WARRANTY OBLIGATION WITH RESPECT TO THE LICENSED APPLICATION.</p>
                <p>BiteBytes is a cost management tool and is not a substitute for professional financial, accounting, or legal advice.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Limitation of Liability</h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm space-y-3">
                <p className="font-bold text-slate-800 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BITEBYTES AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, BUSINESS INTERRUPTION, OR GOODWILL.</p>
                <p className="font-bold text-slate-800 uppercase">IN ANY CASE, OUR TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES YOU PAID TO BITEBYTES IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless BiteBytes and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of your use of the Service, your User Content, your violation of these Terms, or your violation of any applicable law or third-party rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">15.1 By You</h3>
                  <p>You may close your account at any time by contacting <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a> or through your account settings. For App Store subscriptions, cancel through your Apple Account Settings. Termination does not entitle you to a refund of prepaid fees.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">15.2 By BiteBytes</h3>
                  <p>We reserve the right to suspend or terminate your account if we believe you have violated these Terms, engaged in fraudulent activity, or if continued provision of the Service would expose us to legal liability. Your license rights terminate automatically upon any breach of these Terms.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">15.3 Effect of Termination</h3>
                  <p>Upon termination, your license to use the Licensed Application immediately ceases. We will retain your data for up to 90 days after account closure, during which time you may request an export. Sections 7, 9, 11, 12, 13, 14, 16, and 17 survive termination.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">16.1 Governing Law</h3>
                  <p>These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">16.2 Informal Resolution</h3>
                  <p>Before initiating any legal proceeding, you agree to contact us at <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a> and attempt to resolve the dispute informally for at least 30 days.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">16.3 Binding Arbitration</h3>
                  <p>If informal resolution fails, disputes shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">16.4 Class Action Waiver</h3>
                  <p className="uppercase font-bold text-slate-800 text-sm">YOU AND BITEBYTES AGREE THAT EACH MAY BRING CLAIMS ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Apple App Store — Specific Terms</h2>
              <p className="mb-4">This section applies to users who downloaded BiteBytes from the Apple App Store and supplements the rest of these Terms.</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.1 Acknowledgement</h3>
                  <p>These Terms are concluded between you and BiteBytes, Inc. only, and not with Apple. BiteBytes, Inc., not Apple, is solely responsible for the Licensed Application and its content. Apple has no obligation to provide any maintenance or support services for the Licensed Application.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.2 Scope of License</h3>
                  <p>Your license is limited and non-transferable to use the Licensed Application on any Apple-branded product you own or control, as permitted by the Apple Media Services Terms and Conditions, including access via Family Sharing or volume purchasing where applicable.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.3 Maintenance, Support, and Warranty</h3>
                  <p>Apple is not responsible for any maintenance or support services for the Licensed Application. In the event of any failure of the Licensed Application to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any). To the maximum extent permitted by applicable law, Apple will have no other warranty obligation with respect to the Licensed Application.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.4 Product Claims</h3>
                  <p>BiteBytes, Inc., not Apple, is responsible for addressing any claims by you or any third party relating to the Licensed Application or your use of it, including: (i) product liability claims; (ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.5 Intellectual Property Rights</h3>
                  <p>In the event of any third-party claim that the Licensed Application or your use of it infringes a third party's intellectual property rights, BiteBytes, Inc., not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.6 Legal Compliance</h3>
                  <p>You represent and warrant that: (i) you are not located in a country subject to a U.S. government embargo or designated as a "terrorist supporting" country; and (ii) you are not listed on any U.S. government list of prohibited or restricted parties.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.7 Contact Information</h3>
                  <p>Direct all questions, complaints, or claims regarding the Licensed Application to:</p>
                  <div className="mt-2 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                    <p className="font-semibold text-slate-800">BiteBytes, Inc.</p>
                    <p>Email: <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a></p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.8 Third-Party Terms</h3>
                  <p>You must comply with applicable third-party terms of agreement when using the Licensed Application. For example, if you use BiteBytes in connection with a wireless data plan, you must not be in violation of your wireless data service agreement.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.9 Third-Party Beneficiary</h3>
                  <p>Apple and Apple's subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple will have the right to enforce these Terms against you as a third-party beneficiary.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">17.10 In-App Purchases and Subscriptions</h3>
                  <p>All subscriptions and in-app purchases made through the iOS version of BiteBytes are processed exclusively through Apple's In-App Purchase system. BiteBytes does not collect or process payment information for App Store transactions.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">18. General Provisions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.1 Entire Agreement</h3>
                  <p>These Terms, together with our Privacy Policy and any additional terms for specific features, constitute the entire agreement between you and BiteBytes regarding the Service.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.2 Modifications</h3>
                  <p>We reserve the right to update these Terms at any time. We will notify you of material changes via email or in-app notice at least 14 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.3 Severability</h3>
                  <p>If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.4 Waiver</h3>
                  <p>Our failure to enforce any right or provision will not be considered a waiver of those rights.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.5 Assignment</h3>
                  <p>You may not assign your rights under these Terms without our prior written consent. We may assign our rights in connection with a merger, acquisition, or sale of assets.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.6 Force Majeure</h3>
                  <p>BiteBytes shall not be liable for any failure or delay resulting from causes beyond our reasonable control, including natural disasters, government actions, labor disputes, or internet outages.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">18.7 Export Compliance</h3>
                  <p>You may not export or re-export the Licensed Application into any U.S.-embargoed country or to anyone on any U.S. government prohibited-party list. You agree not to use the Licensed Application for any purposes prohibited by United States law.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">19. Contact Us</h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-800 mb-3">BiteBytes, Inc.</p>
                <p className="text-sm">General & Legal Inquiries: <a href="mailto:hello@bitebytes.co" className="text-brand-primary hover:underline">hello@bitebytes.co</a></p>
              </div>
            </section>

            <footer className="text-center pt-12 border-t border-slate-100 text-sm text-slate-400">
              <p className="italic">By downloading, installing, or using BiteBytes, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and End User License Agreement.</p>
              <p className="mt-4">© 2026 BiteBytes, Inc. All rights reserved.</p>
            </footer>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
