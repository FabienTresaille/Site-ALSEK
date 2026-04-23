'use client';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '📍',
    title: 'On se déplace chez vous',
    desc: 'Nos équipements viennent à vous. Nous capturons l\'authenticité de votre univers, sur votre lieu d\'activité.',
  },
  {
    icon: '🎬',
    title: 'Storytelling de marque',
    desc: 'Chaque image raconte votre histoire. Nous construisons une narration visuelle cohérente avec votre identité.',
  },
  {
    icon: '✦',
    title: 'Post-production IA',
    desc: 'Montage, étalonnage, retouche optimisés par l\'IA pour un rendu professionnel en temps record.',
  },
  {
    icon: '📲',
    title: 'Multi-plateforme',
    desc: 'Formats adaptés pour Instagram, TikTok, LinkedIn, site web — un tournage, tous les usages.',
  },
];

export default function ZoneGenie() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
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
      id="services"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: 'var(--dark)' }}
    >
      {/* Decorative large number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '22rem',
          color: 'rgba(200,151,58,0.03)',
          lineHeight: 1,
        }}
      >
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label reveal mb-6">Notre zone de génie</div>

            <h2
              className="font-display font-light leading-none mb-8 reveal reveal-delay-1"
              style={{
                fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                color: 'var(--cream)',
              }}
            >
              Production
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--gold)',
                }}
              >
                Photo & Vidéo
              </em>
              <br />
              pour entreprises
            </h2>

            <p
              className="font-body text-lg font-light leading-relaxed mb-10 reveal reveal-delay-2"
              style={{ color: 'rgba(242,237,228,0.6)', maxWidth: '480px' }}
            >
              Votre contenu visuel, c'est la première impression que vos clients 
              ont de vous. Nous la rendons inoubliable. Photos produit, films 
              institutionnels, reels sociaux — nous créons du contenu qui 
              <strong style={{ color: 'var(--cream)', fontWeight: 500 }}> engage et convertit</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`card-dark p-5 reveal reveal-delay-${i + 2}`}
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <div
                    className="font-body font-semibold text-sm mb-2"
                    style={{ color: 'var(--cream)' }}
                  >
                    {f.title}
                  </div>
                  <div
                    className="font-body text-sm font-light leading-relaxed"
                    style={{ color: 'rgba(242,237,228,0.5)' }}
                  >
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary reveal reveal-delay-5">
              Demander un devis photo/vidéo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Visual collage */}
          <div className="relative h-[600px] reveal reveal-delay-2">
            {/* Main large card */}
            <div
              className="absolute top-0 right-0 w-4/5 h-72 flex items-end p-6"
              style={{
                background: 'linear-gradient(135deg, var(--dark-200), var(--dark-300))',
                border: '1px solid rgba(200,151,58,0.2)',
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: 'rgba(200,151,58,0.1)' }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div
                className="absolute top-4 left-4 font-body text-xs tracking-widest uppercase"
                style={{ color: 'var(--gold)', opacity: 0.7 }}
              >
                Tournage en cours
              </div>
              <div className="relative z-10">
                <div
                  className="font-display text-2xl font-light italic"
                  style={{ color: 'var(--cream)' }}
                >
                  "Des images qui ont tout changé"
                </div>
                <div
                  className="font-body text-sm mt-1"
                  style={{ color: 'rgba(242,237,228,0.5)' }}
                >
                  — Ô Fines Bouchées
                </div>
              </div>
            </div>

            {/* Small stats card */}
            <div
              className="absolute bottom-16 left-0 w-52 p-5"
              style={{
                background: 'var(--dark-100)',
                border: '1px solid rgba(200,151,58,0.25)',
              }}
            >
              <div
                className="font-body text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--gold)' }}
              >
                Impact moyen
              </div>
              <div
                className="font-display text-4xl font-semibold"
                style={{ color: 'var(--cream)' }}
              >
                ×4
              </div>
              <div
                className="font-body text-sm font-light"
                style={{ color: 'rgba(242,237,228,0.55)' }}
              >
                d'engagement sur les réseaux
              </div>
            </div>

            {/* Medium card */}
            <div
              className="absolute bottom-0 right-4 w-64 h-48 flex items-end p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(200,151,58,0.12), rgba(200,151,58,0.04))',
                border: '1px solid rgba(200,151,58,0.3)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  style={{ color: 'rgba(200,151,58,0.2)' }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
                </svg>
              </div>
              <div className="relative">
                <div
                  className="font-body font-semibold text-sm"
                  style={{ color: 'var(--gold)' }}
                >
                  Post-production IA
                </div>
                <div
                  className="font-body text-xs font-light mt-1"
                  style={{ color: 'rgba(242,237,228,0.5)' }}
                >
                  Livraison en 48h chrono
                </div>
              </div>
            </div>

            {/* Vertical accent line */}
            <div
              className="absolute top-8 bottom-8 left-1/2 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,151,58,0.2), transparent)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
