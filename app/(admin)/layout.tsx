import type { Metadata } from 'next';
import ThemeProvider from '@ui/theme-provider';
import SideNav from '@admin/layout';
import ClientSessionProvider from '@app/components/client-session-provider';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'gause.dev - Admin',
  robots: 'noindex nofollow',
  alternates: { canonical: 'https://gause.dev/admin' },
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
