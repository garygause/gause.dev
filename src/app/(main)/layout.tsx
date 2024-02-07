import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import ThemeProvider from '@ui/theme-provider';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'gause.dev',
  description: 'Freelance software development services offered by Gary Gause.',
  keywords:
    'freelance, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'index follow',
  alternates: { canonical: 'https://gause.dev' },
  openGraph: {
    title: 'gause.dev',
    description:
      'Freelance software development services offered by Gary Gause.',
    url: 'https://gause.dev/',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-palette-white dark:bg-palette-gray">
        <ThemeProvider>
          <div className="mx-auto max-w-full min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
