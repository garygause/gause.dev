'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // need to wrap the theme provider from next themes in a client component
  // for manual switching while preserving SS options
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
