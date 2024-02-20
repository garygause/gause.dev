import React from 'react';

import { ContactsTable } from '@ui/admin/contacts';
import { getContacts } from '@/app/lib/api-client';
//import { getContacts } from '@/app/lib/mongodb';

// NOTE: prevents build errors from trying to fetch data from api during build
// TODO: remove api calls so this isn't necessary (when done testing api)
export const dynamic = 'force-dynamic';

export default async function ContactsPage() {
  const { data } = await getContacts();

  if (!data) {
    return <div>Loading...</div>;
  }
  return <ContactsTable contacts={data} />;
}
