'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen);
    return () => document.body.classList.remove('nav-open');
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Notre histoire', href: '#histoire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,151,58,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{
                  background: 'var(--gold)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <span
                className="text-2xl font-display font-semibold tracking-wider"
                style={{ color: 'var(--cream)' }}
              >
                alsek
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-body font-medium tracking-wide transition-colors duration-200"
                  style={{ color: 'rgba(242,237,228,0.7)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(242,237,228,0.7)')}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-xs">
                Audit Gratuit
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--cream)',
                  transform: mobileOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--cream)',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--cream)',
                  transform: mobileOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden"
        style={{
          background: 'rgba(8,8,8,0.98)',
          backdropFilter: 'blur(20px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
        }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-4xl font-light transition-colors duration-200"
              style={{
                color: 'var(--cream)',
                transitionDelay: `${i * 60}ms`,
              }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--cream)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Audit Gratuit
          </a>
        </div>
      </div>
    </>
  );
}
