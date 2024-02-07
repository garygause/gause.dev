import type { Metadata } from 'next';

import Header from '@/components/header/header';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'gause.dev',
  description: 'Freelance software development services offered by Gary Gause.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-palette-white dark:bg-palette-gray">
        <div className="mx-auto md:max-w-full min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
