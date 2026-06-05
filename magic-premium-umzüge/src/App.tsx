import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Leistungen from './components/Leistungen';
import Funnel from './components/Funnel';
import Prozess from './components/Prozess';
import Galerie from './components/Galerie';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  const scrollToCalculator = () => {
    const calcElement = document.getElementById('angebot');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('leistungen');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#131313] text-[#e5e2e1] font-sans antialiased overflow-x-hidden">
      {/* 1. Transparent to blurry Fixed Top Header with customizable links hover transition details */}
      <Navbar onQuoteClick={scrollToCalculator} />

      {/* 2. Hero cinematic screen with live counts & statistics counter trigger */}
      <Hero onQuoteClick={scrollToCalculator} onServicesClick={scrollToServices} />

      {/* 3. Grid-structured Premium Services block with customized red left borders */}
      <Leistungen />

      {/* 4. Vorqualifizierungs-Funnel (Interactive multi-step price planner inputs) */}
      <Funnel />

      {/* 5. Alternating Ablauf layout */}
      <Prozess />

      {/* 6. Sliding multi-card image carousel representing teams on-duty */}
      <Galerie />

      {/* 7. Beautiful client review blocks */}
      <Testimonials />

      {/* 8. Certified staffing overview block with high-contrast presentation */}
      <Team />

      {/* 9. Interactive questions accordion answers panel */}
      <Faq />

      {/* 10. Call to action display banner and brand multi-column foot block with coordinates */}
      <Footer onQuoteClick={scrollToCalculator} />
    </div>
  );
}
