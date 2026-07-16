const LogoOverlay = ({ src, alt, scale = 1, mobileScale = 1 }: { src: string; alt: string; scale?: number; mobileScale?: number }) => (
  <>
    {/* Desktop Logo */}
    <div className="hidden lg:flex brand-logo-container" style={{ width: 160, height: 60, transform: scale !== 1 ? `scale(${scale})` : undefined }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="brand-logo-original" />
      <div
        className="brand-logo-overlay"
        style={{
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: `url(${src})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
      />
    </div>
    {/* Mobile Logo */}
    <div className="lg:hidden flex-none w-[140px] snap-center px-4" style={{ transform: mobileScale !== 1 ? `scale(${mobileScale})` : undefined }}>
      <img src={src} alt={alt} className="w-full h-12 object-contain opacity-60 grayscale" />
    </div>
  </>
);

export const TrustBar = () => {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: '56px auto 0', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A7B5C', fontWeight: 600, marginBottom: 24 }}>
          Channel Partner to Bengaluru&apos;s Leading Developers
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 48, paddingBottom: 36, borderBottom: '1px solid rgba(43,36,29,0.1)' }}>
          <LogoOverlay src="/assets/images/trust-brand/godrej.png" alt="Godrej Properties" />
          <LogoOverlay src="/assets/images/trust-brand/sobha.png" alt="Sobha Limited" scale={0.7} mobileScale={0.8} />
          <div className="hidden lg:flex brand-logo-container" style={{ width: 160, height: 60 }}>
            <img src="/assets/images/trust-brand/prestige-original-logo.png" alt="Prestige Group Hover" style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="brand-logo-original" />
            <img src="/assets/images/trust-brand/prestige-colour-change.png" alt="Prestige Group" className="prestige-default" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          {/* Mobile Prestige Logo */}
          <div className="lg:hidden flex-none w-[140px] snap-center px-4">
            <img src="/assets/images/trust-brand/prestige-colour-change.png" alt="Prestige Group" className="w-full h-12 object-contain" />
          </div>
          <LogoOverlay src="/assets/images/trust-brand/brigade.png" alt="Brigade Group" />
          <LogoOverlay src="/assets/images/trust-brand/sattva.png" alt="Sattva Group" scale={0.8} mobileScale={0.9} />
          <LogoOverlay src="/assets/images/trust-brand/purvankara.png" alt="Puravankara" scale={0.75} mobileScale={0.85} />
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full pt-10 pb-6 border-b border-[rgba(43,36,29,0.06)] overflow-hidden">
        <div className="text-center text-[10px] font-bold tracking-widest uppercase text-[#8A7B5C] mb-6 px-4">
          Trusted By Bengaluru's Elite Developers
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full py-2" style={{ scrollBehavior: 'smooth' }}>
          {/* The LogoOverlay components render their mobile view directly inside this flex container */}
          <LogoOverlay src="/assets/images/trust-brand/godrej.png" alt="Godrej Properties" />
          <LogoOverlay src="/assets/images/trust-brand/sobha.png" alt="Sobha Limited" mobileScale={0.8} />
          <div className="lg:hidden flex-none w-[140px] snap-center px-4">
            <img src="/assets/images/trust-brand/prestige-colour-change.png" alt="Prestige Group" className="w-full h-12 object-contain" />
          </div>
          <LogoOverlay src="/assets/images/trust-brand/brigade.png" alt="Brigade Group" />
          <LogoOverlay src="/assets/images/trust-brand/sattva.png" alt="Sattva Group" mobileScale={0.9} />
          <LogoOverlay src="/assets/images/trust-brand/purvankara.png" alt="Puravankara" mobileScale={0.85} />
        </div>
      </div>
    </section>
  );
};
