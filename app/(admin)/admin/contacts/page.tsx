import React from 'react';

import { ContactsTable } from '@ui/admin/contacts';
import { getContacts } from '@/app/lib/api-client';

export default async function ContactsPage() {
  const { msg, success, data } = await getContacts();

  return <ContactsTable contacts={data} />;
}
