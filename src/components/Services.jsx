'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    label: 'Site Web',
    title: 'Votre site web\nqui génère des ventes',
    description:
      'Création de sites vitrine et e-commerce sur mesure, optimisés pour la conversion et le référencement naturel. Livré en 14 jours.',
    points: [
      'Design personnalisé & responsive',
      'Optimisation SEO technique',
      'Livraison en 14 jours',
      'Vous validez chaque étape',
    ],
    accent: 'rgba(100,160,255,0.1)',
    accentBorder: 'rgba(100,160,255,0.2)',
    accentColor: '#6CA0FF',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: 'Campagnes Pub',
    title: 'Vos publicités\nqui convertissent',
    description:
      'Gestion complète de vos campagnes Meta Ads, Google Ads et TikTok Ads. Créations visuelles incluses. ROI mesuré et optimisé.',
    points: [
      'Multi-plateformes (Meta, Google, TikTok)',
      'Créations visuelles & copywriting',
      'Reporting mensuel détaillé',
      'Optimisation ROI continue',
    ],
    accent: 'rgba(100,220,150,0.08)',
    accentBorder: 'rgba(100,220,150,0.2)',
    accentColor: '#64DC96',
  },
];

export default function Services() {
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
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ background: 'var(--dark-100)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200,151,58,0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label justify-center mb-6">
            Nos prestations complètes
          </div>
          <h2
            className="font-display font-light"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              color: 'var(--cream)',
            }}
          >
            Une offre complète
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>360°</em>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`relative p-8 lg:p-10 reveal reveal-delay-${i + 1}`}
              style={{
                background: service.accent,
                border: `1px solid ${service.accentBorder}`,
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 font-display font-bold"
                style={{
                  fontSize: '5rem',
                  color: `${service.accentColor}08`,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {service.number}
              </div>

              <div
                className="inline-flex p-3 mb-6"
                style={{
                  background: `${service.accentColor}15`,
                  color: service.accentColor,
                  border: `1px solid ${service.accentColor}25`,
                }}
              >
                {service.icon}
              </div>

              <div
                className="font-body text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: service.accentColor }}
              >
                {service.label}
              </div>

              <h3
                className="font-display font-light leading-tight mb-4"
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  color: 'var(--cream)',
                  whiteSpace: 'pre-line',
                }}
              >
                {service.title}
              </h3>

              <p
                className="font-body text-sm font-light leading-relaxed mb-6"
                style={{ color: 'rgba(242,237,228,0.6)' }}
              >
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: service.accentColor }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: 'rgba(242,237,228,0.7)' }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="font-body text-sm font-semibold tracking-wide uppercase"
                  style={{ color: service.accentColor }}
                  onMouseEnter={(e) => (e.target.style.gap = '12px')}
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
