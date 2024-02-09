'use server';

import React from 'react';

import { UsersTable } from '@/app/components/users';
import { getUsers } from '@/app/lib/api-client';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <UsersTable users={users} />
    </div>
  );
}
