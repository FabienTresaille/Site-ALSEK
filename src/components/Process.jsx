'use client';
import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit & Stratégie',
    desc: 'Analyse de votre positionnement, de vos concurrents et de vos objectifs. On définit ensemble la stratégie visuelle qui correspond à votre marque.',
    icon: '🎯',
  },
  {
    number: '02',
    title: 'Production sur site',
    desc: 'Nos équipes se déplacent chez vous. Tournage photo et vidéo dans votre univers réel, avec du matériel professionnel.',
    icon: '🎥',
  },
  {
    number: '03',
    title: 'Post-production IA',
    desc: 'Montage, étalonnage couleurs, retouches — accéléré par l\'IA pour un rendu premium. Vous validez chaque livrable.',
    icon: '✦',
  },
  {
    number: '04',
    title: 'Diffusion & Performance',
    desc: 'Mise en ligne, planification et optimisation des performances. On suit les résultats et on itère pour maximiser votre ROI.',
    icon: '📈',
  },
];

export default function Process() {
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
      className="py-24 lg:py-36"
      style={{ background: 'var(--dark)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label justify-center mb-6">
            Notre méthode
          </div>
          <h2
            className="font-display font-light"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              color: 'var(--cream)',
            }}
          >
            De la stratégie à la{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>performance</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-8 left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(200,151,58,0.3) 20%, rgba(200,151,58,0.3) 80%, transparent)',
              transform: 'translateY(0)',
              marginLeft: '12.5%',
              marginRight: '12.5%',
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative p-6 reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'var(--dark-100)',
                  border: '1px solid var(--dark-400)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,151,58,0.4)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--dark-400)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Step number with gold circle */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-body text-sm font-bold"
                    style={{
                      background: 'rgba(200,151,58,0.12)',
                      border: '1px solid rgba(200,151,58,0.4)',
                      color: 'var(--gold)',
                    }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{ background: 'rgba(200,151,58,0.2)' }}
                  />
                </div>

                <div className="text-3xl mb-4">{step.icon}</div>

                <h3
                  className="font-body font-semibold text-base mb-3"
                  style={{ color: 'var(--cream)' }}
                >
                  {step.title}
                </h3>

                <p
                  className="font-body text-sm font-light leading-relaxed"
                  style={{ color: 'rgba(242,237,228,0.55)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
