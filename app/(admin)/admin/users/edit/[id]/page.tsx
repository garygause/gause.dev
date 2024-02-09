'use server';

import React from 'react';

import UserForm from '@/app/components/user-form';
import { getUser } from '@/app/lib/api-client';

export default async function UserEditPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUser(params.id);
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Edit User</h1>
          <UserForm user={user} />
        </div>
      </div>
    </div>
  );
}
