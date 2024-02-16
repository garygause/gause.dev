import React from 'react';

import { UsersTable } from '@ui/admin/users';
import { getUsers } from '@/app/lib/mongodb';

export default async function UsersPage() {
  const data = await getUsers();

  if (!data) {
    return <div>Loading...</div>;
  }
  return <UsersTable users={data} />;
}
