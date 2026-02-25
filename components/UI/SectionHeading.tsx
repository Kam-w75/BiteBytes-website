import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, subtitle, align = 'center' }) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}>
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-wider mb-4"
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-600 leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};