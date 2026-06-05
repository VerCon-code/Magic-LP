import React, { useState } from 'react';
import { SERVICE_FUNNEL_OPTIONS, SIZE_FUNNEL_OPTIONS } from '../data';
import { 
  Home, 
  Building2, 
  Package, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Calendar, 
  ClipboardList, 
  Send, 
  ArrowRight,
  ArrowLeftRight,
  Info,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Funnel() {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('privat');
  const [selectedSize, setSelectedSize] = useState<string>('small');
  
  // Route details
  const [fromAddress, setFromAddress] = useState<string>('');
  const [toAddress, setToAddress] = useState<string>('');
  const [moveDate, setMoveDate] = useState<string>('');

  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const getSelectedServiceMeta = () => {
    return SERVICE_FUNNEL_OPTIONS.find(o => o.id === selectedService) || SERVICE_FUNNEL_OPTIONS[0];
  };

  const getSelectedSizeMeta = () => {
    return SIZE_FUNNEL_OPTIONS.find(o => o.id === selectedSize) || SIZE_FUNNEL_OPTIONS[0];
  };

  const handleNextStep = (next: number) => {
    setStep(next);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Bitte füllen Sie alle erforderlichen Kontaktdaten aus.');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetFunnel = () => {
    setStep(1);
    setSelectedService('privat');
    setSelectedSize('small');
    setFromAddress('');
    setToAddress('');
    setMoveDate('');
    setFullName('');
    setEmail('');
    setPhone('');
    setIsSubmitted(false);
  };

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-8 h-8 text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300" />;
      case 'Package':
        return <Package className="w-8 h-8 text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Home className="w-8 h-8 text-brand-red mb-3" />;
    }
  };

  return (
    <section id="angebot" className="py-24 md:py-32 bg-[#1c1b1b] border-y border-[#5b403c]/20 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section title with customized red tag and scroll animate placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center md:text-left"
        >
          <span className="text-brand-red font-sans text-xs uppercase tracking-widest font-bold block mb-3">
            MAGISCHE ANFRAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] leading-tight">
            Individuelles <em className="italic font-light text-brand-red">Angebot</em> anfordern
          </h2>
        </motion.div>

        {isSubmitted ? (
          /* Submission success state screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#131313] border border-brand-red/30 rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/15 text-brand-red mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl text-[#e5e2e1] mb-4">Anfrage erfolgreich übermittelt!</h3>
            <p className="text-[#c7c6c4] text-base mb-8 max-w-md mx-auto leading-relaxed">
              Vielen Dank, <strong className="text-white font-medium">{fullName}</strong>. Wir haben Ihre Angaben erhalten.
              Unsere Logistik-Architekten prüfen nun die Route von <strong className="text-brand-red">{fromAddress || 'Ort A'}</strong> nach <strong className="text-brand-red">{toAddress || 'Ort B'}</strong> unter Berücksichtigung Ihres Wunschvolumens. 
              Sie erhalten Ihr persönliches Festpreisangebot innerhalb von <strong className="text-brand-red font-medium">24 Stunden</strong> per E-Mail.
            </p>

            <div className="bg-[#1c1b1b] p-6 rounded-[5px] border border-white/5 text-left mb-8 max-w-sm mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#e4beb8] font-bold border-b border-white/5 pb-2">Ihre Angaben:</div>
              <div className="text-sm text-[#e5e2e1] flex justify-between">
                <span className="opacity-70">Leistung:</span> 
                <span className="text-brand-red font-medium">{getSelectedServiceMeta().label}</span>
              </div>
              <div className="text-sm text-[#e5e2e1] flex justify-between">
                <span className="opacity-70">Umfang:</span> 
                <span className="text-brand-red font-medium">{getSelectedSizeMeta().label}</span>
              </div>
              <div className="text-sm text-[#e5e2e1] flex justify-between">
                <span className="opacity-70">Route:</span> 
                <span className="text-brand-red font-medium text-right truncate max-w-[200px]" title={`${fromAddress} → ${toAddress}`}>
                  {fromAddress} → {toAddress}
                </span>
              </div>
              {moveDate && (
                <div className="text-sm text-[#e5e2e1] flex justify-between">
                  <span className="opacity-70">Termin:</span> 
                  <span className="text-brand-red font-medium">{new Date(moveDate).toLocaleDateString('de-DE')}</span>
                </div>
              )}
            </div>

            <button
              onClick={resetFunnel}
              className="text-xs uppercase tracking-widest text-[#ffe3de] hover:text-brand-red transition-all cursor-pointer font-medium underline"
            >
              Neue Anfrage stellen
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Left Box - Active Step Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5 flex flex-col justify-between"
            >
              <div>
                {/* ProgressBar */}
                <div className="mb-10">
                  <div className="h-1 bg-[#131313] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-red transition-all duration-500 rounded-full"
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3 font-sans text-[10px] sm:text-xs text-[#e4beb8] tracking-wider uppercase font-bold">
                    <span className={step >= 1 ? 'text-brand-red font-bold' : 'opacity-65'}>1. Service</span>
                    <span className={step >= 2 ? 'text-brand-red font-bold' : 'opacity-65'}>2. Route</span>
                    <span className={step >= 3 ? 'text-brand-red font-bold' : 'opacity-65'}>3. Umfang</span>
                    <span className={step >= 4 ? 'text-brand-red font-bold' : 'opacity-65'}>4. Kontakt</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Was planen Sie? */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-serif text-2xl text-[#e5e2e1] mb-6">Welche Leistung benötigen Sie?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {SERVICE_FUNNEL_OPTIONS.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setSelectedService(opt.id);
                              handleNextStep(2);
                            }}
                            className={`group border rounded-xl p-6 text-left transition-all duration-300 bg-[#131313] hover:border-brand-red cursor-pointer ${
                              selectedService === opt.id
                                ? 'border-brand-red ring-1 ring-brand-red bg-brand-red/5'
                                : 'border-[#ab8984]/20'
                            }`}
                          >
                            {renderIcon(opt.icon)}
                            <div className="font-sans text-lg font-medium text-[#e5e2e1] mb-1">
                              {opt.label}
                            </div>
                            <div className="font-sans text-xs text-[#e4beb8] opacity-80">
                              {opt.subtitle}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Umzugsweg von/nach */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="font-serif text-2xl text-[#e5e2e1]">Wo findet der Transport statt?</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#e4beb8] uppercase tracking-wider block">Startpunkt / Abholort</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                            <input
                              type="text"
                              value={fromAddress}
                              onChange={(e) => setFromAddress(e.target.value)}
                              placeholder="PLZ & Ort (z.B. 80331 München)"
                              className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] placeholder-[#e4beb8]/35 focus:border-brand-red focus:outline-none transition-colors text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-[#e4beb8] uppercase tracking-wider block">Zielpunkt / Lieferort</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                            <input
                              type="text"
                              value={toAddress}
                              onChange={(e) => setToAddress(e.target.value)}
                              placeholder="PLZ & Ort (z.B. 10115 Berlin)"
                              className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] placeholder-[#e4beb8]/35 focus:border-brand-red focus:outline-none transition-colors text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#e4beb8] uppercase tracking-wider block">Gewünschter Umzugstermin</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                          <input
                            type="date"
                            value={moveDate}
                            onChange={(e) => setMoveDate(e.target.value)}
                            className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] focus:border-brand-red focus:outline-none transition-colors text-sm [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex gap-4">
                        <button
                          type="button"
                          onClick={() => handleNextStep(3)}
                          disabled={!fromAddress || !toAddress}
                          className="bg-brand-red text-[#ffe3de] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[5px] hover:bg-[#b91d16] hover:shadow-[0_0_15px_rgba(200,41,31,0.3)] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Weiter zum Umfang
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="border border-[#ab8984]/20 text-[#e4beb8] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[5px] hover:bg-white/5 transition-all cursor-pointer"
                        >
                          Zurück
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Umfang des Bestands? */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-serif text-2xl text-[#e5e2e1] mb-6">Wie groß ist der Bestands-Umfang?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SIZE_FUNNEL_OPTIONS.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setSelectedSize(opt.id);
                              handleNextStep(4);
                            }}
                            className={`group border rounded-xl p-5 text-left transition-all duration-300 bg-[#131313] hover:border-brand-red cursor-pointer ${
                              selectedSize === opt.id
                                ? 'border-brand-red ring-1 ring-brand-red bg-brand-red/5'
                                : 'border-[#ab8984]/20'
                            }`}
                          >
                            <div className="font-sans text-md font-medium text-[#e5e2e1] mb-1">
                              {opt.label}
                            </div>
                            <div className="font-sans text-xs text-[#e4beb8] opacity-80">
                              {opt.subtitle}
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-8 flex gap-4">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="border border-[#ab8984]/20 text-[#e4beb8] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[5px] hover:bg-white/5 transition-all cursor-pointer"
                        >
                          Zurück zur Route
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Kontaktaufnahme */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-serif text-2xl text-[#e5e2e1] mb-6">Für wen dürfen wir kalkulieren?</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                          <input
                            required
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Vollständiger Name"
                            className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] placeholder-[#e4beb8]/45 focus:border-brand-red focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-Mail Adresse"
                            className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] placeholder-[#e4beb8]/45 focus:border-brand-red focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e4beb8]/60" />
                          <input
                            required
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Telefonnummer"
                            className="w-full bg-[#131313] border border-[#ab8984]/30 rounded-[5px] pl-12 pr-4 py-4 text-[#e5e2e1] placeholder-[#e4beb8]/45 focus:border-brand-red focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-brand-red text-[#ffe3de] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-[5px] hover:bg-[#b91d16] hover:shadow-[0_0_20px_rgba(200,41,31,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? 'Wird übermittelt...' : 'Kostenloses Angebot anfordern'}
                            <Send className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="text-xs text-[#e4beb8] underline hover:text-[#e5e2e1] transition-colors cursor-pointer"
                          >
                            Zurück zum Umfang
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step indicator helper */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-[#c7c6c4]/65">
                <span>Festpreis-Garantie auf kalkulierte Volumina.</span>
                <span>Schritt {step} von 4</span>
              </div>
            </motion.div>

            {/* Right Box - Sticky Overview instead of raw pricing */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 flex flex-col justify-between"
            >
              <div className="bg-[#131313] p-8 rounded-xl border border-[#ab8984]/15 shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 border-b border-white/5 pb-2">
                    Zusammenfassung
                  </h4>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-[#e4beb8]/70 uppercase tracking-wider font-bold">Leistung:</span>
                      <span className="text-sm text-[#e5e2e1] font-semibold">
                        {getSelectedServiceMeta().label}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 border-t border-white/5 pt-3">
                      <span className="text-xs text-[#e4beb8]/70 uppercase tracking-wider font-bold">Gewählte Route:</span>
                      <div className="flex items-center gap-2 text-sm text-[#e5e2e1]">
                        <span className="text-brand-red truncate max-w-[150px]" title={fromAddress || "Noch nicht angegeben"}>
                          {fromAddress || "Startadresse eingeben..."}
                        </span>
                        <ArrowLeftRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                        <span className="text-brand-red truncate max-w-[150px]" title={toAddress || "Noch nicht angegeben"}>
                          {toAddress || "Zieladresse eingeben..."}
                        </span>
                      </div>
                    </div>

                    {moveDate && (
                      <div className="flex justify-between items-baseline border-t border-white/5 pt-3">
                        <span className="text-xs text-[#e4beb8]/70 uppercase tracking-wider font-bold">Wunschtermin:</span>
                        <span className="text-sm text-brand-red font-semibold">
                          {new Date(moveDate).toLocaleDateString('de-DE')}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-baseline border-t border-white/5 pt-3">
                      <span className="text-xs text-[#e4beb8]/70 uppercase tracking-wider font-bold">Bestands-Größe:</span>
                      <span className="text-sm text-[#e5e2e1] font-semibold">
                        {getSelectedSizeMeta().label}
                      </span>
                    </div>
                  </div>

                  {/* Flow description helper instead of actual prices */}
                  <div className="bg-[#1c1b1b] p-5 rounded-[5px] border border-brand-red/10 space-y-3">
                    <div className="flex gap-2.5 items-start">
                      <Info className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <div className="text-xs text-[#e4beb8]/80 leading-relaxed">
                        Wir kalkulieren den genauen Aufwand auf Basis Ihrer Route und Ihres Umfangs individuell. So erhalten Sie ein faires <strong className="text-brand-red">Festpreisangebot</strong> ohne überraschende Zusatzkosten.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial preview / guarantee block */}
                <div className="pt-6 border-t border-white/5 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                        <ClipboardList className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#e5e2e1]">Qualifizierter Ablauf</div>
                        <div className="text-[11px] text-[#e4beb8]/60">Sorgfältige Volumen-Prüfung &amp; Streckenplanung.</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#e5e2e1]">Diskreter &amp; sicherer Transport</div>
                        <div className="text-[11px] text-[#e4beb8]/60">Mit geschultem Magic-Zertifikatspersonal.</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
