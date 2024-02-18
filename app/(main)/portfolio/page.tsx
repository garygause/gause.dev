import React from 'react';
import type { Metadata } from 'next';

import { Portfolio } from '@/app/components/ui/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
  title: 'gause.dev - Portfolio',
  description: 'Some of the projects I have done over the last 25+ years.',
  keywords:
    'freelance, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'index follow',
  alternates: { canonical: 'https://gause.dev/portfolio' },
  openGraph: {
    title: 'gause.dev - Portfolio',
    description: 'Some of the projects I have done over the last 25+ years. ',
    url: 'https://gause.dev/portfolio',
    siteName: 'gause.dev',
    type: 'website',
    images: [
      {
        url: 'https://gause.dev/images/site-preview.png',
        secureUrl: 'https://gause.dev/images/site-preview.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for gause.dev',
      },
    ],
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
