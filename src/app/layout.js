import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'SuPuja Creations | Senior MIS & Business Automation Solutions',
  description: 'SuPuja Creations builds practical business automation systems using Google Sheets, Google Apps Script, REST APIs, Looker Studio dashboards, and web applications to digitize manufacturing, sales, purchase, attendance, and operational workflows.',
  keywords: [
    'SuPuja Creations',
    'MIS Automation Agency',
    'Business Process Automation',
    'Google Sheets Automation',
    'Google Apps Script Development',
    'Manufacturing Process Digitization',
    'Business Workflow FMS',
    'TrackOlap API Integration',
    'Smart Attendance System',
    'Looker Studio Dashboards'
  ],
  authors: [{ name: 'SuPuja Creations', url: 'https://supujacreations.com' }],
  metadataBase: new URL('https://supujacreations.com'),
  icons: {
    icon: '/supuja-logo.png',
    shortcut: '/supuja-logo.png',
    apple: '/supuja-logo.png',
  },
  openGraph: {
    title: 'SuPuja Creations | Senior MIS & Business Automation Solutions',
    description: 'Practical business automation systems, Google Workspace automation, REST API integration, and FMS workflows by SuPuja Creations.',
    url: 'https://supujacreations.com',
    siteName: 'SuPuja Creations',
    images: [
      {
        url: '/supuja-logo.png',
        width: 800,
        height: 600,
        alt: 'SuPuja Creations Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuPuja Creations | Senior MIS & Business Automation Solutions',
    description: 'Practical business automation systems using Google Sheets, Apps Script, and APIs.',
    images: ['/supuja-logo.png'],
  },
};

export const viewport = {
  themeColor: '#070c18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'SuPuja Creations',
    'description': 'Senior MIS & Business Automation Agency providing Google Sheets, Apps Script, FMS, and API automation solutions.',
    'url': 'https://supujacreations.com',
    'telephone': '+91-9988119276',
    'email': 'sales@supujacreations.com',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh', position: 'relative' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
