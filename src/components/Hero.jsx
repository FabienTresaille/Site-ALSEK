'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }, []);

  return (
    <section
      className="hero-gradient relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,151,58,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,151,58,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vertical accent lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,151,58,0.3), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,151,58,0.15), transparent)' }}
      />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,151,58,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-5xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 mb-8 px-4 py-2"
            style={{
              border: '1px solid rgba(200,151,58,0.3)',
              background: 'rgba(200,151,58,0.06)',
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.2s forwards',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)' }}
            />
            <span
              className="text-xs font-body font-semibold tracking-widest uppercase"
              style={{ color: 'var(--gold)' }}
            >
              Agence Contenu Visuel · Villefranche-sur-Saône
            </span>
          </div>

          {/* Main headline */}
          <h1
            ref={titleRef}
            className="font-display font-light leading-none mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              color: 'var(--cream)',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Votre contenu
            <br />
            <em
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #E5B85C 0%, #C8973A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              visuel
            </em>{' '}
            qui vend.
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-2xl"
            style={{
              color: 'rgba(242,237,228,0.65)',
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.5s forwards',
            }}
          >
            Production photo & vidéo professionnelle, sites web haute-performance
            et campagnes publicitaires — tout ce dont votre entreprise a besoin
            pour dominer son marché.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.7s forwards' }}
          >
            <a href="#contact" className="btn-primary">
              Recevoir mon audit gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#realisations" className="btn-outline">
              Voir nos réalisations
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 lg:gap-12 mt-16 pt-12"
            style={{
              borderTop: '1px solid rgba(242,237,228,0.08)',
              opacity: 0,
              animation: 'fadeUp 0.8s ease 0.9s forwards',
            }}
          >
            {[
              { value: '+300%', label: 'Vues dès le 1er mois' },
              { value: '14j', label: 'Site livré en 14 jours' },
              { value: '10K+', label: 'Vues première semaine' },
              { value: '4.9★', label: 'Satisfaction clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-3xl font-semibold"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-body text-sm font-light mt-1"
                  style={{ color: 'rgba(242,237,228,0.5)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: 0, animation: 'fadeIn 1s ease 1.5s forwards' }}
      >
        <span
          className="text-xs font-body tracking-widest uppercase"
          style={{ color: 'rgba(242,237,228,0.35)' }}
        >
          Découvrir
        </span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(200,151,58,0.6), transparent)',
            animation: 'fadeUp 1.5s ease infinite',
          }}
        />
      </div>
    </section>
  );
}
