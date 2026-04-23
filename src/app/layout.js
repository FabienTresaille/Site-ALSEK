import './globals.css';

export const metadata = {
  title: 'Alsek — Agence de Contenu Visuel & Marketing Digital',
  description:
    'Alsek est une agence marketing basée à Villefranche-sur-Saône, spécialisée dans la production de contenu photo & vidéo, la création de sites web et la gestion de campagnes publicitaires pour les entreprises.',
  keywords:
    'agence marketing digital, production vidéo entreprise, photographie professionnelle, création site web, campagnes publicitaires, Villefranche-sur-Saône, Lyon',
  openGraph: {
    title: 'Alsek — Agence de Contenu Visuel & Marketing Digital',
    description: 'Production photo & vidéo, création de sites web et gestion de campagnes publicitaires.',
    url: 'https://alsek.fr',
    siteName: 'Alsek',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
