import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

function useAnimatedNumber(target: number, duration: number = 2000, isFloat: boolean = false) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      
      setValue(easeProgress * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { value, ref };
}

export default function Hero({ onQuoteClick, onServicesClick }: HeroProps) {
  // Stats configurations
  const movesStat = useAnimatedNumber(4823, 1800);
  const safetyStat = useAnimatedNumber(98.6, 2000, true);
  const yearsStat = useAnimatedNumber(15, 1200);

  return (
    <section className="relative h-[100vh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-102"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqS43ZWvrF9eRk0-1i_S4do5V3jsrOamQxq7YzihOSz6vyLbo0KEThyrNGN0yCP7GGWnlkBhaAOPDJpn0-pL2w2sMhRVukIcxZosQWsOufldlFIUKa4pIxk4uTebrDIKDWFNYqHcaT1sEjVKnZuFwSUnNB0hCEf3MKdnM5hrzBeljrSqpD5iRcDXYROvvPscmwEvuRTNg2IFNHsuVKwu53IHC1Hjrd7xqMnoRogh_-1TDGRyMvyam_LDpu9_X9reXoxC4D-EdX_g")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-[#131313]/30" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content with staggered entrance */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="max-w-4xl">
          {/* Subtle Accent Intro Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-[4px] mb-6 text-brand-red font-medium text-xs uppercase tracking-widest select-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Logistik & Umzug</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#e5e2e1] leading-none mb-6 tracking-tight"
          >
            Ihr Umzug. In den <em className="italic font-light text-brand-red">besten</em> Händen.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#c7c6c4] text-lg sm:text-xl font-light mb-10 max-w-2xl leading-relaxed"
          >
            Herausragender Service, höchste Diskretion und erfahrene Logistik-Architekten für private Wohnsitze und anspruchsvolle Gewerbe-Umzüge.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={onQuoteClick}
              className="group bg-brand-red text-[#ffe3de] font-semibold text-sm px-8 py-4 rounded-[5px] hover:bg-[#b91d16] hover:shadow-[0_0_20px_rgba(200,41,31,0.5)] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Kostenloses Angebot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={onServicesClick}
              className="border border-[#ab8984]/40 bg-white/5 backdrop-blur-sm text-[#e5e2e1] font-medium text-sm px-8 py-4 rounded-[5px] hover:bg-white/10 hover:border-brand-red transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Unsere Leistungen
            </button>
          </motion.div>
        </div>

        {/* Experience counts fade in */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="pt-8 border-t border-[#ab8984]/15 mt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div ref={movesStat.ref} className="group">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] flex items-baseline gap-1 group-hover:text-brand-red transition-colors duration-300">
                <span>{Math.floor(movesStat.value).toLocaleString('de-DE')}</span>
                <span className="text-brand-red font-bold">+</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#e5e2e1]/65 font-bold mt-2">Umzüge</div>
            </div>

            <div ref={safetyStat.ref} className="group">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] flex items-baseline gap-1 group-hover:text-brand-red transition-colors duration-300">
                <span>{safetyStat.value.toFixed(1).replace('.', ',')}</span>
                <span className="text-brand-red font-bold">%</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#e5e2e1]/65 font-bold mt-2">Schadenfreie Transporte</div>
            </div>

            <div ref={yearsStat.ref} className="group">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] flex items-baseline gap-1 group-hover:text-brand-red transition-colors duration-300">
                <span>{Math.floor(yearsStat.value)}</span>
                <span className="text-brand-red font-bold">+</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#e5e2e1]/65 font-bold mt-2">Jahre Erfahrung</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
