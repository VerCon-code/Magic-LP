import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Faq() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#131313] scroll-mt-20 overflow-hidden">
      <div className="max-w-[760px] mx-auto px-6">
        
        {/* Section title with custom red tag */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight">
            Häufige Fragen
          </h2>
        </motion.div>

        {/* Faq Items List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-[#ab8984]/20 pb-4 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="flex justify-between items-center w-full text-left py-3 group cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#e5e2e1] group-hover:text-brand-red transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* Rotating arrow */}
                  <ChevronDown
                    className={`w-5 h-5 text-brand-red transition-transform duration-300 shrink-0 ml-4 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Animated accordion panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded 
                      ? 'grid-rows-[1fr] opacity-100 mt-2' 
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-sm text-[#e4beb8] leading-relaxed pb-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
