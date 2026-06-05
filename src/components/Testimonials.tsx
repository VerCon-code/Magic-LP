import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="referenzen" className="py-24 bg-[#131313] scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section header with custom red tag */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            REFERENZEN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight">
            Das sagen unsere <em className="italic font-light text-brand-red">Kunden</em>
          </h2>
        </motion.div>

        {/* Testimonials Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#201f1f] p-8 md:p-10 rounded-xl border border-[#ab8984]/15 hover:border-brand-red/35 hover:shadow-[0_0_25px_rgba(200,41,31,0.08)] transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute right-8 top-8 w-12 h-12 text-white/5 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />

              <div>
                {/* 5-Star Indicator */}
                <div className="flex text-brand-red gap-0.5 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif text-[#e5e2e1] text-lg sm:text-xl italic mb-8 leading-relaxed">
                  {t.text}
                </p>
              </div>

              {/* Author Info Section */}
              <div>
                <div className="h-px w-12 bg-brand-red/25 mb-6" />
                <div className="flex items-center gap-4">
                  {/* Avatar thumbnail with referer policy */}
                  <div className="w-12 h-12 rounded-full bg-[#3a3939] overflow-hidden border border-white/5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="font-sans text-sm font-semibold text-[#e5e2e1]">
                      {t.name}
                    </div>
                    <div className="font-sans text-xs text-[#e4beb8] mt-1">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
