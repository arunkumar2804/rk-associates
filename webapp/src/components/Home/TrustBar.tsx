const LogoOverlay = ({ src, alt, scale = 1 }: { src: string; alt: string; scale?: number }) => (
  <div className="brand-logo-container" style={{ width: 160, height: 60, transform: scale !== 1 ? `scale(${scale})` : undefined }}>
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
);

export const TrustBar = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '56px auto 0', padding: '0 32px' }}>
      <div style={{ textAlign: 'center', fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A7B5C', fontWeight: 600, marginBottom: 24 }}>
        Channel Partner to Bengaluru's Leading Developers
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 48, paddingBottom: 36, borderBottom: '1px solid rgba(43,36,29,0.1)' }}>
        <LogoOverlay src="/assets/images/trust-brand/godrej.png" alt="Godrej Properties" />
        <LogoOverlay src="/assets/images/trust-brand/sobha.png" alt="Sobha Limited" scale={0.7} />
        <div className="brand-logo-container" style={{ width: 160, height: 60 }}>
          <img src="/assets/images/trust-brand/prestige-original-logo.png" alt="Prestige Group Hover" style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="brand-logo-original" />
          <img src="/assets/images/trust-brand/prestige-colour-change.png" alt="Prestige Group" className="prestige-default" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <LogoOverlay src="/assets/images/trust-brand/brigade.png" alt="Brigade Group" />
        <LogoOverlay src="/assets/images/trust-brand/sattva.png" alt="Sattva Group" scale={0.8} />
        <LogoOverlay src="/assets/images/trust-brand/purvankara.png" alt="Puravankara" scale={0.75} />
      </div>
    </section>
  );
};
