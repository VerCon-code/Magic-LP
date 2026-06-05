import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import MagicLogo from './MagicLogo';

interface FooterProps {
  onQuoteClick: () => void;
}

export default function Footer({ onQuoteClick }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#5b403c]/15 w-full relative">
      
      {/* 10. Final Call To Action Banner in corporate brand red */}
      <div className="bg-[#c8291f] text-[#f5f4f1] py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
            Bereit für einen stressfreien Umzug?
          </h2>
          <p className="font-sans text-base sm:text-lg mb-10 text-[#ffe3de]/90 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns die logistischen Details besprechen. Unser Beratungsteam erstellt Ihnen ein maßgeschneidertes Festpreisangebot ohne Überraschungen.
          </p>
          <button
            onClick={onQuoteClick}
            className="group relative inline-flex items-center gap-3 bg-[#f5f4f1] text-[#c8291f] font-semibold text-xs sm:text-sm uppercase tracking-wider px-10 py-5 rounded-[5px] hover:bg-white hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
          >
            Jetzt unverbindlich anfragen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Links & Company Details Block */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Brand identity column with MagicLogo */}
        <div className="space-y-4">
          <div 
            onClick={scrollToTop}
            className="cursor-pointer flex items-center gap-2 select-none group"
          >
            <MagicLogo size={36} />
            <span className="font-serif text-xl font-bold text-[#e5e2e1] tracking-wider group-hover:text-brand-red transition-colors duration-300">
              Magic
            </span>
          </div>
          <p className="font-sans text-xs text-[#e4beb8]/60 leading-relaxed max-w-xs">
            Premium Umzugslogistik für höchste Ansprüche. Diskret, sicher und fachgerecht organisiert – europaweit.
          </p>
          <div className="font-sans text-[11px] text-[#e4beb8]/40 pt-4">
            © {new Date().getFullYear()} Magic Moving Services. <br />Alle Rechte vorbehalten.
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-sans text-xs font-bold text-[#e5e2e1] uppercase tracking-widest mb-5 border-l-2 border-brand-red pl-3">
            Leistungen
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Privatumzug', href: '#leistungen' },
              { label: 'Firmenumzug', href: '#leistungen' },
              { label: 'Lagerung & Depot', href: '#leistungen' },
              { label: 'Einpackservice', href: '#leistungen' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-xs text-[#e4beb8]/70 hover:text-brand-red hover:pl-1 transition-all duration-250 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-sans text-xs font-bold text-[#e5e2e1] uppercase tracking-widest mb-5 border-l-2 border-brand-red pl-3">
            Unternehmen
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Über uns', href: '#team' },
              { label: 'Unser Team', href: '#team' },
              { label: 'Referenzen', href: '#referenzen' },
              { label: 'FAQ', href: '#faq' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-xs text-[#e4beb8]/70 hover:text-brand-red hover:pl-1 transition-all duration-250 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Compliance Column */}
        <div>
          <h4 className="font-sans text-xs font-bold text-[#e5e2e1] uppercase tracking-widest mb-5 border-l-2 border-brand-red pl-3">
            Rechtliches
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Impressum', href: '#' },
              { label: 'Datenschutzerklärung', href: '#' },
              { label: 'Möbeltransportbedingungen (AGB)', href: '#' },
              { label: 'Haftungsrichtlinien', href: '#' }
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-xs text-[#e4beb8]/70 hover:text-brand-red hover:pl-1 transition-all duration-250 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </footer>
  );
}
