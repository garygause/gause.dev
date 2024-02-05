import React from 'react';
import Link from 'next/link';

import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-4xl py-10">Contact Me</h1>
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
