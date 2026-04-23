'use client';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
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
      id="realisations"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'var(--dark-100)' }}
    >
      {/* Background quote mark */}
      <div
        className="absolute top-8 right-12 font-display font-bold pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '28rem',
          color: 'rgba(200,151,58,0.02)',
          lineHeight: 1,
        }}
      >
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label justify-center mb-6">
            Ce qu'ils disent
          </div>
          <h2
            className="font-display font-light"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              color: 'var(--cream)',
            }}
          >
            Nos clients
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}> parlent </em>
            de nous
          </h2>
        </div>

        {/* Main testimonial */}
        <div
          className="max-w-4xl mx-auto p-10 lg:p-14 mb-12 reveal reveal-delay-1"
          style={{
            background: 'var(--dark-200)',
            border: '1px solid rgba(200,151,58,0.2)',
            position: 'relative',
          }}
        >
          {/* Gold accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
          />

          <div
            className="font-display text-6xl font-bold mb-6 leading-none"
            style={{ color: 'var(--gold)', opacity: 0.5 }}
          >
            "
          </div>

          <p
            className="font-display text-xl lg:text-2xl font-light italic leading-relaxed mb-8"
            style={{ color: 'var(--cream)' }}
          >
            Grâce à son regard et son talent, Fabien a su sublimer nos produits
            avec des photos incroyables et mettre en scène les coulisses d'Ô Fines
            Bouchées d'une façon bien à lui, tout en écoutant nos craintes
            vis-à-vis des réseaux sociaux.
          </p>
          <p
            className="font-body text-base font-light leading-relaxed mb-6"
            style={{ color: 'rgba(242,237,228,0.65)' }}
          >
            Il a dépoussiéré notre marketing pour en faire une marque plus forte,
            qui nous ressemble vraiment. Pas du 100% IA, mais du vrai travail :
            des photos prises sur le moment, des vidéos, de la créativité et
            beaucoup de talent. Il y a clairement un avant et un après sa venue
            chez nous.
          </p>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-semibold"
              style={{ background: 'rgba(200,151,58,0.15)', color: 'var(--gold)' }}
            >
              ÔF
            </div>
            <div>
              <div
                className="font-body font-semibold text-sm"
                style={{ color: 'var(--cream)' }}
              >
                Ô Fines Bouchées
              </div>
              <div
                className="font-body text-xs"
                style={{ color: 'rgba(242,237,228,0.45)' }}
              >
                Traiteur — Client depuis 2024
              </div>
            </div>
            <div className="ml-auto">
              <div
                className="font-body text-sm font-semibold"
                style={{ color: 'var(--gold)' }}
              >
                ★★★★★
              </div>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { client: 'Ô Fines Bouchées', result: '+300%', label: 'Vues le premier mois', type: 'Community Management' },
            { client: 'LumiToile', result: '14 jours', label: 'Site e-commerce livré', type: 'Création Web' },
            { client: 'CeciNails', result: '+10K', label: 'Vues première semaine', type: 'Création de contenu' },
            { client: 'Cappuccino', result: '10 jours', label: 'Site hybride livré', type: 'Création Web' },
          ].map((item, i) => (
            <div
              key={item.client}
              className={`p-6 reveal reveal-delay-${i + 2}`}
              style={{
                background: 'var(--dark)',
                border: '1px solid var(--dark-400)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,151,58,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--dark-400)';
              }}
            >
              <div
                className="font-body text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: 'rgba(242,237,228,0.4)' }}
              >
                {item.type}
              </div>
              <div
                className="font-display text-3xl font-semibold mb-1"
                style={{ color: 'var(--gold-light)' }}
              >
                {item.result}
              </div>
              <div
                className="font-body text-sm font-light mb-3"
                style={{ color: 'rgba(242,237,228,0.6)' }}
              >
                {item.label}
              </div>
              <div
                className="font-body text-xs"
                style={{ color: 'rgba(242,237,228,0.35)' }}
              >
                {item.client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
