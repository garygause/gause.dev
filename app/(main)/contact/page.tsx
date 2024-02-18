import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

import ContactForm from '@/app/components/ui/contact-form';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
  title: 'gause.dev - Contact Me',
  description: 'Contact me for all your web and mobile development needs.',
  keywords:
    'freelance, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'index follow',
  alternates: { canonical: 'https://gause.dev/blog' },
  openGraph: {
    title: 'gause.dev - Contact Me',
    description: 'Contact me for all your web and mobile development needs.',
    url: 'https://gause.dev/contact',
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

export default function ContactPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="py-10 px-4">
          <h1 className="text-4xl md:text-5xl pb-10">Contact Me</h1>
          <p>
            Please fill in the form below and I will get back to you right away!
          </p>
          <p className="py-4">Or contact me directly:</p>

          <div className="space-x-4">
            <Link
              href="mailto:garygause@gmail.com"
              target="_blank"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              garygause@gmail.com
            </Link>
            <span>|</span>
            <Link
              href="phone:3607229772"
              target="_blank"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              360.722.9772
            </Link>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
