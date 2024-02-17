import React from 'react';

import ContactForm from '@ui/admin/contact-edit-form';

export default function ContactEditPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a Contact</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
