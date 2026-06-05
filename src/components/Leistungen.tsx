import React from 'react';
import { SERVICES } from '../data';
import { motion } from 'motion/react';

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 md:py-32 bg-[#131313] px-6 md:px-16 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header with stagger reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 relative"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            UNSERE LEISTUNGEN
          </span>
          <div className="absolute left-0 top-7 w-[3px] h-10 bg-brand-red hidden md:block" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] md:pl-6 leading-tight">
            Maßgeschneiderte <em className="italic font-light text-brand-red">Exzellenz</em>
          </h2>
        </motion.div>

        {/* Services Grid with staggered cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`${service.colSpan} rounded-xl overflow-hidden relative group h-[380px] bg-[#161616] border border-[#ab8984]/15 hover:border-brand-red/45 hover:shadow-[0_0_20px_rgba(200,41,31,0.25)] transition-all duration-500 cursor-pointer`}
            >
              {/* Background image in card with dark ambient gradient overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${service.image}")`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/95 via-[#131313]/70 to-transparent" />
              </div>

              {/* Absolute Card Info Alignment */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="border-l-3 border-brand-red pl-4 transition-all duration-300 group-hover:pl-5">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#e5e2e1] mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#e4beb8] max-w-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
