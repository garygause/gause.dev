import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import ThemeProvider from '@ui/theme-provider';
import Header from '@/components/header/header';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className="bg-neutral-50 dark:bg-gray-900">
        <ThemeProvider>
          <div className="mx-auto md:max-w-full min-h-screen">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
