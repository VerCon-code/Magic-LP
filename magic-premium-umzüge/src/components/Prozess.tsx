import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Compass, CalendarDays, KeyRound, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Prozess() {
  
  // Icon selector based on step index to increase graphic depth
  const getStepIcon = (index: number) => {
    switch(index) {
      case 0: return <Compass className="w-5 h-5 text-brand-red" />;
      case 1: return <CalendarDays className="w-5 h-5 text-brand-red" />;
      case 2: return <Truck className="w-5 h-5 text-brand-red" />;
      case 3: return <KeyRound className="w-5 h-5 text-brand-red" />;
      default: return <Compass className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section id="prozess" className="py-24 md:py-32 bg-[#131313] scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section title with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            UNSER PROZESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight">
            Reibungsloser <em className="italic font-light text-brand-red">Ablauf</em>
          </h2>
        </motion.div>

        {/* Vertical Alternating Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line indicator on desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ab8984]/20 hidden md:block -translate-x-1/2" />

          <div className="space-y-16 md:space-y-28">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {/* Timeline bullet with pulse on scroll hover */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#131313] border-2 border-brand-red items-center justify-center z-20 shadow-[0_0_10px_rgba(200,41,31,0.3)]"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                  </motion.div>

                  {/* Absolute colossal step watermark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.05, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`absolute -top-12 md:top-1/2 md:-translate-y-1/2 text-8xl sm:text-9xl font-serif font-bold text-[#e4beb8] pointer-events-none select-none ${
                      isEven ? 'left-4 md:left-1/4' : 'right-4 md:right-1/4'
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content Card with direction-aware sliding entry */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-10 w-full md:w-5/12 bg-[#1c1b1b] p-8 rounded-xl border border-[#ab8984]/15 hover:border-brand-red/35 hover:shadow-[0_4px_30px_rgba(200,41,31,0.08)] transition-all duration-350 overflow-hidden group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded bg-[#131313] border border-[#ab8984]/15 flex items-center justify-center">
                        {getStepIcon(idx)}
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-brand-red transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    <p className="font-sans text-sm text-[#e4beb8] leading-relaxed">
                      {step.description.split('Festpreisangebot').join('**Festpreisangebot**')
                        .split('Verpackungsmaterial').join('**Verpackungsmaterial**')
                        .split('bezugsfertig').join('**bezugsfertig**')
                        .split('**').map((text, i) => i % 2 === 1 ? <em key={i} className="text-brand-red italic font-medium">{text}</em> : text)
                      }
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
