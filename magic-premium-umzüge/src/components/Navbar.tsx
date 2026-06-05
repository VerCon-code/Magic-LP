import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import MagicLogo from './MagicLogo';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#131313]/90 backdrop-blur-md border-[#5b403c]/20 py-4 shadow-lg'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex justify-between items-center w-full">
        {/* Logo with Magic image left and Name right */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 select-none group"
        >
          <MagicLogo size={42} />
          <span className="font-serif text-2xl font-bold text-[#e5e2e1] tracking-wider group-hover:text-brand-red transition-colors duration-300">
            Magic
          </span>
        </div>

        {/* Desktop Links with beautiful hover effects */}
        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: 'Leistungen', targetId: 'leistungen' },
            { label: 'Prozess', targetId: 'prozess' },
            { label: 'Team', targetId: 'team' },
            { label: 'Referenzen', targetId: 'referenzen' },
            { label: 'FAQ', targetId: 'faq' }
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.targetId)}
              className="relative py-2 text-sm font-medium tracking-wide text-[#e5e2e1] hover:text-[#ffb4a9] transition-all duration-300 cursor-pointer group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onQuoteClick}
            className="group relative overflow-hidden bg-brand-red text-[#ffe3de] font-medium tracking-wide text-xs px-6 py-3 rounded-[5px] hover:bg-[#b91d16] hover:shadow-[0_0_20px_rgba(200,41,31,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            Angebot anfordern
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#e5e2e1] hover:text-brand-red transition-colors duration-300"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[68px] left-0 w-full bg-[#131313] border-b border-[#5b403c]/30 shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[380px] py-6' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-5 px-6">
          {[
            { label: 'Leistungen', targetId: 'leistungen' },
            { label: 'Prozess', targetId: 'prozess' },
            { label: 'Team', targetId: 'team' },
            { label: 'Referenzen', targetId: 'referenzen' },
            { label: 'FAQ', targetId: 'faq' }
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.targetId)}
              className="text-left py-1 text-base font-medium text-[#e5e2e1] hover:text-brand-red hover:pl-2 transition-all duration-200 border-b border-white/5 pb-2 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onQuoteClick();
            }}
            className="w-full bg-brand-red text-[#ffe3de] text-center font-medium py-3 rounded-[5px] hover:bg-[#b91d16] transition-colors focus:ring-2 focus:ring-brand-red/50"
          >
            Angebot anfordern
          </button>
        </div>
      </div>
    </nav>
  );
}
