import React from 'react';
import { ShieldCheck, Medal } from 'lucide-react';
import { motion } from 'motion/react';
import aboutteam from '../../assets/about.png'; // <-- HIER DEIN LOKALES BILD IMPORTIERT

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-[#1c1b1b] border-t border-b border-[#5b403c]/15 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Grayscale image sliding in from left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="absolute left-0 top-0 w-[4px] h-full bg-brand-red z-10 hidden md:block -ml-5 rounded-full" />
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#131313] border border-white/5 shadow-2xl relative">
            <img
              src={aboutteam} // <-- HIER STEHT JETZT DEIN IMPORTIERTES BILD STATT DES LINKS
              alt="Magic Logistik Team"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-[1.08] transition-all duration-750 group-hover:scale-102 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Informative detail elements sliding in from right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            UNSER TEAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] mb-8 leading-tight">
            Logistik-Architekten mit <em className="italic font-light text-brand-red">Leidenschaft</em>
          </h2>

          <p className="font-sans text-base text-[#e4beb8] mb-6 leading-relaxed">
            Wir sind kein gewöhnliches Umzugsunternehmen. Wir verstehen uns als Architekten für die wertvollsten Güter unserer Kunden – mit absolutem Fokus auf Struktur, Diskretion und Zuverlässigkeit.
          </p>

          <p className="font-sans text-sm text-[#e4beb8]/80 mb-10 leading-relaxed">
            Jedes Mitglied unseres Teams durchläuft ein rigoroses Training in Verpackungstechnik, Kunsttransport, De- und Montage komplexer Schranksysteme sowie diskretem Umgang. Wenn wir eintreten, bringen wir nicht nur Muskelkraft, sondern Methodik, Präzision und absolute Planbarkeit.
          </p>

          {/* Qualified status display row */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#131313] p-4 rounded-xl border border-white/5 hover:border-brand-red/20 transition-all duration-200">
              <div className="w-12 h-12 rounded bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-sans text-sm font-semibold text-[#e5e2e1]">
                  Zertifiziertes Fachpersonal
                </div>
                <div className="font-sans text-xs text-[#e4beb8]/60 mt-0.5">
                  Ausschließlich festangestellt, geschult und haftpflichtversichert.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#131313] p-4 rounded-xl border border-white/5 hover:border-brand-red/20 transition-all duration-200">
              <div className="w-12 h-12 rounded bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <Medal className="w-6 h-6" />
              </div>
              <div>
                <div className="font-sans text-sm font-semibold text-[#e5e2e1]">
                  Premium Partnerschaften
                </div>
                <div className="font-sans text-xs text-[#e4beb8]/60 mt-0.5">
                  Mitglied im Bundesverband Möbelspedition und Logistik.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
