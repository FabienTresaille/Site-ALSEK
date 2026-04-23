export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: 'var(--dark)',
        borderTop: '1px solid rgba(242,237,228,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{
                background: 'var(--gold)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
            <span
              className="font-display text-xl font-semibold tracking-wider"
              style={{ color: 'var(--cream)' }}
            >
              alsek
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Réalisations', href: '#realisations' },
              { label: 'Notre histoire', href: '#histoire' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm transition-colors duration-200"
                style={{ color: 'rgba(242,237,228,0.4)' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(242,237,228,0.4)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/alsek.marketing',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/alsek-marketing-digital',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/alsek.marketing',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors duration-200"
                style={{ color: 'rgba(242,237,228,0.35)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,228,0.35)')}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8"
          style={{ borderTop: '1px solid rgba(242,237,228,0.06)' }}
        >
          <p
            className="font-body text-xs"
            style={{ color: 'rgba(242,237,228,0.25)' }}
          >
            © Alsek Marketing {new Date().getFullYear()} — Tous droits réservés
          </p>
          <p
            className="font-body text-xs"
            style={{ color: 'rgba(242,237,228,0.2)' }}
          >
            Villefranche-sur-Saône · France
          </p>
        </div>
      </div>
    </footer>
  );
}
