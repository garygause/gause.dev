import React from 'react';

import { ContactsTable } from '@ui/admin/contacts';
//import { getContacts } from '@/app/lib/api-client';
import { getContacts } from '@/app/lib/mongodb';

export default async function ContactsPage() {
  const data = await getContacts();

  if (!data) {
    return <div>Loading...</div>;
  }
  return <ContactsTable contacts={data} />;
}
