import React from 'react';

import ContactForm from '@ui/admin/contact-edit-form';
import { getContact } from '@/app/lib/api-client';

export default async function ContactEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { msg, success, data } = await getContact(params.id);
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Edit Contact</h1>
          {success && <ContactForm contact={data} />}
          {!success && <div>No Contact found.</div>}
        </div>
      </div>
    </div>
  );
}
