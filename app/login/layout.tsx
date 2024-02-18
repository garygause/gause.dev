import type { Metadata } from 'next';

import ThemeProvider from '@/app/components/ui/theme-provider';
import ClientSessionProvider from '@app/components/client-session-provider';

import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
  title: 'gause.dev - Login',
  description: 'Login form for gause.dev.',
  keywords:
    'freelance, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'noindex nofollow',
  alternates: { canonical: 'https://gause.dev/login' },
  openGraph: {
    title: 'gause.dev - Login',
    description: 'Login form for gause.dev.',
    url: 'https://gause.dev/login',
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-palette-white dark:bg-palette-gray">
        <ClientSessionProvider>
          <ThemeProvider>
            <div className="w-full h-screen items-center justify-center">
              {children}
            </div>
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
