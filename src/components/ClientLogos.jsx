'use client';

const clients = [
  { name: 'Ô Fines Bouchées', sub: 'Traiteur' },
  { name: 'LumiToile', sub: 'E-commerce' },
  { name: 'CeciNails', sub: 'Beauté' },
  { name: 'Cappuccino', sub: 'Prêt-à-porter' },
  { name: 'Ô Fines Bouchées', sub: 'Traiteur' },
  { name: 'LumiToile', sub: 'E-commerce' },
  { name: 'CeciNails', sub: 'Beauté' },
  { name: 'Cappuccino', sub: 'Prêt-à-porter' },
];

export default function ClientLogos() {
  return (
    <section
      className="py-10 overflow-hidden"
      style={{ borderBottom: '1px solid rgba(242,237,228,0.06)' }}
    >
      <div className="text-center mb-6">
        <span
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: 'rgba(242,237,228,0.35)' }}
        >
          Ils nous font confiance
        </span>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-10"
              style={{ whiteSpace: 'nowrap' }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--gold)', opacity: 0.5 }}
              />
              <span
                className="font-display text-xl font-medium"
                style={{ color: 'rgba(242,237,228,0.45)' }}
              >
                {client.name}
              </span>
              <span
                className="font-body text-xs"
                style={{ color: 'rgba(242,237,228,0.2)' }}
              >
                — {client.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
