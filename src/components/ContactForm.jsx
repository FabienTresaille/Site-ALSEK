'use client';
import { useState, useEffect, useRef } from 'react';

const besoins = [
  'Création de contenu photo/vidéo',
  'Site internet',
  'Campagnes publicitaires',
  'Social Ads (Meta, TikTok, LinkedIn)',
  'Google Ads',
  'Tracking & Analytics',
];

const budgets = [
  'Moins de 10k€/mois',
  'Entre 10k et 30k€/mois',
  'Entre 30k et 100k€/mois',
  'Entre 100k et 500k€/mois',
  'Plus de 500k€/mois',
];

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', site: '', message: '', besoins: [], budget: '' });
  const [submitted, setSubmitted] = useState(false);
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleBesoin = (b) => {
    setForm((prev) => ({
      ...prev,
      besoins: prev.besoins.includes(b)
        ? prev.besoins.filter((x) => x !== b)
        : [...prev.besoins, b],
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Erreur réseau');
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Contactez-nous directement par téléphone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'var(--dark-100)' }}
    >
      {/* Background gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(200,151,58,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA banner */}
        <div
          className="relative p-8 lg:p-12 mb-16 text-center overflow-hidden reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(200,151,58,0.12), rgba(200,151,58,0.04))',
            border: '1px solid rgba(200,151,58,0.3)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(200,151,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,151,58,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <h2
              className="font-display font-light mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                color: 'var(--cream)',
              }}
            >
              Prêt à transformer votre
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>présence visuelle ?</em>
            </h2>
            <p
              className="font-body text-lg font-light"
              style={{ color: 'rgba(242,237,228,0.6)' }}
            >
              Recevez un audit gratuit de votre stratégie de contenu sous 24h.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2">
            <div className="section-label reveal mb-6">Contact</div>
            <h3
              className="font-display font-light text-3xl lg:text-4xl mb-6 reveal reveal-delay-1"
              style={{ color: 'var(--cream)' }}
            >
              Parlons de
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>votre projet</em>
            </h3>
            <p
              className="font-body text-base font-light leading-relaxed mb-8 reveal reveal-delay-2"
              style={{ color: 'rgba(242,237,228,0.6)' }}
            >
              Remplissez ce formulaire et recevez votre audit personnalisé sous
              24h ouvrées. Pas de harcèlement commercial, juste une analyse
              honnête et des recommandations concrètes.
            </p>

            {/* What you get */}
            <div
              className="p-6 mb-8 reveal reveal-delay-3"
              style={{
                background: 'var(--dark)',
                border: '1px solid var(--dark-400)',
              }}
            >
              <div
                className="font-body font-semibold text-sm mb-4"
                style={{ color: 'var(--cream)' }}
              >
                Votre audit comprend :
              </div>
              {[
                'Analyse de votre présence en ligne',
                'Benchmark concurrentiel',
                'Opportunités de contenu visuel',
                'Plan d\'action personnalisé',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(200,151,58,0.15)', border: '1px solid var(--gold)' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: 'var(--gold)' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span
                    className="font-body text-sm font-light"
                    style={{ color: 'rgba(242,237,228,0.65)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-3 reveal reveal-delay-4">
              <a
                href="tel:+33614308801"
                className="flex items-center gap-3 font-body text-sm"
                style={{ color: 'rgba(242,237,228,0.6)' }}
              >
                <span style={{ color: 'var(--gold)' }}>📞</span>
                +33 6 14 30 88 01
              </a>
              <div className="flex items-center gap-3 font-body text-sm" style={{ color: 'rgba(242,237,228,0.6)' }}>
                <span style={{ color: 'var(--gold)' }}>📍</span>
                Villefranche-sur-Saône
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 reveal"
                style={{
                  background: 'var(--dark)',
                  border: '1px solid rgba(200,151,58,0.3)',
                  minHeight: '400px',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(200,151,58,0.12)', border: '1px solid var(--gold)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--gold)' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-display text-3xl font-light mb-4"
                  style={{ color: 'var(--cream)' }}
                >
                  Demande reçue !
                </h3>
                <p
                  className="font-body text-base font-light"
                  style={{ color: 'rgba(242,237,228,0.6)' }}
                >
                  Nous vous répondons sous 24h avec votre audit personnalisé.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 reveal reveal-delay-1"
              >
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-body text-xs font-medium tracking-widest uppercase mb-2"
                      style={{ color: 'rgba(242,237,228,0.45)' }}
                    >
                      Nom *
                    </label>
                    <input
                      required
                      type="text"
                      className="input-dark"
                      placeholder="Dupont"
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-body text-xs font-medium tracking-widest uppercase mb-2"
                      style={{ color: 'rgba(242,237,228,0.45)' }}
                    >
                      Prénom *
                    </label>
                    <input
                      required
                      type="text"
                      className="input-dark"
                      placeholder="Jean"
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block font-body text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(242,237,228,0.45)' }}
                  >
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="input-dark"
                    placeholder="jean@monentreprise.fr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                {/* Site */}
                <div>
                  <label
                    className="block font-body text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(242,237,228,0.45)' }}
                  >
                    Votre site web
                  </label>
                  <input
                    type="url"
                    className="input-dark"
                    placeholder="https://monsite.fr"
                    value={form.site}
                    onChange={(e) => setForm({ ...form, site: e.target.value })}
                  />
                </div>

                {/* Besoins */}
                <div>
                  <label
                    className="block font-body text-xs font-medium tracking-widest uppercase mb-3"
                    style={{ color: 'rgba(242,237,228,0.45)' }}
                  >
                    Mon besoin principal *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {besoins.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => toggleBesoin(b)}
                        className="font-body text-xs py-2 px-4 transition-all duration-200"
                        style={{
                          background: form.besoins.includes(b)
                            ? 'rgba(200,151,58,0.2)'
                            : 'var(--dark)',
                          border: form.besoins.includes(b)
                            ? '1px solid var(--gold)'
                            : '1px solid var(--dark-400)',
                          color: form.besoins.includes(b)
                            ? 'var(--gold)'
                            : 'rgba(242,237,228,0.5)',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CA mensuel */}
                <div>
                  <label
                    className="block font-body text-xs font-medium tracking-widest uppercase mb-3"
                    style={{ color: 'rgba(242,237,228,0.45)' }}
                  >
                    CA mensuel de votre entreprise
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className="font-body text-xs py-2 px-4 transition-all duration-200"
                        style={{
                          background: form.budget === b
                            ? 'rgba(200,151,58,0.2)'
                            : 'var(--dark)',
                          border: form.budget === b
                            ? '1px solid var(--gold)'
                            : '1px solid var(--dark-400)',
                          color: form.budget === b
                            ? 'var(--gold)'
                            : 'rgba(242,237,228,0.5)',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block font-body text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ color: 'rgba(242,237,228,0.45)' }}
                  >
                    Message (optionnel)
                  </label>
                  <textarea
                    className="input-dark resize-none"
                    rows={4}
                    placeholder="Parlez-nous de votre projet..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && (
                  <p className="font-body text-sm text-center" style={{ color: '#ff6b6b' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{ fontSize: '0.875rem', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Envoi en cours…' : 'Recevoir mon audit gratuit'}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>

                <p
                  className="font-body text-xs text-center"
                  style={{ color: 'rgba(242,237,228,0.3)' }}
                >
                  Aucun engagement. Réponse sous 24h ouvrées. Vos données sont protégées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
