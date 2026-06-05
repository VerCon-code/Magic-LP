import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Galerie() {
  const [activeIndex, setActiveIndex] = useState<number>(1); // default focused on center (index 1)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galerie" className="py-24 bg-[#1c1b1b] border-y border-[#5b403c]/15 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section title with custom red tag */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            IM EINSATZ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight">
            Präzision <em className="italic font-light text-brand-red">in Bewegung</em>
          </h2>
        </motion.div>

        {/* Dynamic Carousel Deck with perspective layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 md:px-12 mt-16"
        >
          <div className="relative flex items-center justify-center h-[360px] sm:h-[450px]">
            {GALLERY_ITEMS.map((item, index) => {
              // Calculate index relationships for perspective positioning
              let position = 'center';
              if (index === activeIndex) {
                position = 'center';
              } else if (
                index === activeIndex - 1 || 
                (activeIndex === 0 && index === GALLERY_ITEMS.length - 1)
              ) {
                position = 'left';
              } else {
                position = 'right';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-64 sm:w-80 aspect-square rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer ${
                    position === 'center'
                      ? 'z-20 scale-100 md:scale-110 border-2 border-brand-red opacity-100 grayscale-0 pointer-events-auto rotate-0'
                      : position === 'left'
                      ? 'z-10 -translate-x-1/2 sm:-translate-x-32 md:-translate-x-44 scale-75 opacity-40 grayscale -rotate-6 sm:-rotate-12 pointer-events-auto'
                      : 'z-10 translate-x-1/2 sm:translate-x-32 md:translate-x-44 scale-75 opacity-40 grayscale rotate-6 sm:rotate-12 pointer-events-auto'
                  }`}
                >
                  {/* Image with overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Absolute details inside active panel */}
                  <div className="absolute bottom-0 left-0 p-5 w-full">
                    {position === 'center' && (
                      <div className="flex text-brand-red gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    )}
                    <p className="font-sans text-xs tracking-wider uppercase text-white font-bold">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav arrows with wrapping functions */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-[#201f1f] text-[#e5e2e1] flex items-center justify-center rounded-[5px] border border-white/5 hover:bg-brand-red hover:text-white transition-all duration-200 z-30 shadow-md cursor-pointer"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-[#201f1f] text-[#e5e2e1] flex items-center justify-center rounded-[5px] border border-white/5 hover:bg-brand-red hover:text-white transition-all duration-200 z-30 shadow-md cursor-pointer"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </motion.div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-8">
          {GALLERY_ITEMS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === activeIndex ? 'bg-brand-red w-6' : 'bg-white/15'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
