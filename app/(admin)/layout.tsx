import type { Metadata } from 'next';
import ThemeProvider from '@ui/theme-provider';
import SideNav from '@ui/admin/sidenav';
import ClientSessionProvider from '@app/components/client-session-provider';

import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
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
        <ClientSessionProvider>
          <ThemeProvider>
            <div className="md:flex-row md:overflow-hidden min-h-screen flex flex-col">
              <div className="w-full flex-none md:w-60">
                <SideNav />
              </div>
              <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
