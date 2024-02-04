import React from 'react';

import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Contact Me</h1>
          <p>
            Please fill in the form below and I will get back to you right away!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
