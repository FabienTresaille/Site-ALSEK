'use client';
import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="histoire"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'var(--dark)' }}
    >
      {/* Background large number */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-bold pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '22rem',
          color: 'rgba(200,151,58,0.025)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        alsek
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Photo placeholder + certification */}
          <div className="relative reveal">
            {/* Main photo frame */}
            <div
              className="relative h-[520px] w-full flex items-end"
              style={{
                background: 'var(--dark-200)',
                border: '1px solid rgba(200,151,58,0.15)',
              }}
            >
              {/* Photo placeholder */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ color: 'rgba(242,237,228,0.08)' }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-body text-sm mt-4" style={{ color: 'rgba(242,237,228,0.2)' }}>
                  Photo de Fabien
                </span>
              </div>

              {/* Bottom overlay info */}
              <div
                className="relative z-10 p-6 w-full"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)' }}
              >
                <div
                  className="font-display text-2xl font-semibold"
                  style={{ color: 'var(--cream)' }}
                >
                  Fabien
                </div>
                <div
                  className="font-body text-sm font-light"
                  style={{ color: 'rgba(242,237,228,0.55)' }}
                >
                  Fondateur · Directeur de création
                </div>
              </div>

              {/* Gold corner accent */}
              <div
                className="absolute top-0 left-0 w-12 h-12"
                style={{ borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' }}
              />
              <div
                className="absolute bottom-0 right-0 w-12 h-12"
                style={{ borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }}
              />
            </div>

            {/* HubSpot Certification badge */}
            <div
              className="absolute -bottom-6 -right-6 p-5"
              style={{
                background: 'var(--dark-100)',
                border: '1px solid rgba(200,151,58,0.35)',
                maxWidth: '240px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {/* HubSpot orange circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: '#FF7A59', color: 'white' }}
                >
                  HS
                </div>
                <div>
                  <div
                    className="font-body font-semibold text-xs"
                    style={{ color: 'var(--cream)' }}
                  >
                    HubSpot Certified
                  </div>
                  <div
                    className="font-body text-xs font-light"
                    style={{ color: 'rgba(242,237,228,0.5)' }}
                  >
                    Inbound Marketing
                  </div>
                </div>
              </div>
              <div
                className="font-body text-xs font-light"
                style={{ color: 'rgba(242,237,228,0.4)', borderTop: '1px solid rgba(242,237,228,0.08)', paddingTop: '8px', marginTop: '4px' }}
              >
                Certifié stratégie Inbound Marketing
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="section-label reveal mb-6">Notre histoire</div>

            <h2
              className="font-display font-light leading-none mb-8 reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                color: 'var(--cream)',
              }}
            >
              Basés à
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                Villefranche-sur-Saône
              </em>
            </h2>

            <p
              className="font-body text-base font-light leading-relaxed mb-6 reveal reveal-delay-2"
              style={{ color: 'rgba(242,237,228,0.65)' }}
            >
              Alsek, c'est une agence marketing digital née d'une conviction simple :
              les entreprises locales méritent du contenu visuel à la hauteur des
              grandes marques. Nous accompagnons les artisans, commerçants et
              entrepreneurs dans leur développement en ligne.
            </p>

            <p
              className="font-body text-base font-light leading-relaxed mb-10 reveal reveal-delay-3"
              style={{ color: 'rgba(242,237,228,0.65)' }}
            >
              Notre approche combine l'artisanat de la production visuelle — on
              se déplace, on capte l'authenticité — avec les outils modernes de
              l'IA pour livrer plus vite et mieux. Pas du contenu générique.
              Du contenu <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>qui vous ressemble</strong>.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mb-10 reveal reveal-delay-4">
              {[
                { icon: '🎯', label: 'Orienté résultats' },
                { icon: '🤝', label: 'Relation directe' },
                { icon: '⚡', label: 'Réactivité' },
              ].map((v) => (
                <div
                  key={v.label}
                  className="text-center p-4"
                  style={{
                    background: 'var(--dark-100)',
                    border: '1px solid var(--dark-400)',
                  }}
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div
                    className="font-body text-xs font-medium"
                    style={{ color: 'rgba(242,237,228,0.65)' }}
                  >
                    {v.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div
              className="flex flex-col gap-3 reveal reveal-delay-5"
            >
              <a
                href="tel:+33614308801"
                className="flex items-center gap-3 font-body text-sm group"
                style={{ color: 'rgba(242,237,228,0.6)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +33 6 14 30 88 01
              </a>
              <div
                className="flex items-center gap-3 font-body text-sm"
                style={{ color: 'rgba(242,237,228,0.6)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Villefranche-sur-Saône — Zone d'intervention : Ain, Rhône, France entière
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
