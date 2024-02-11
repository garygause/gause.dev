import React from 'react';

import { UsersTable } from '@ui/admin/users';
import { getUsers } from '@/app/lib/api-client';

export default async function UsersPage() {
  const { msg, success, data } = await getUsers();
  return <UsersTable users={data} />;
}
