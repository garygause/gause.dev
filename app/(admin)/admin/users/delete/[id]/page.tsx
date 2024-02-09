'use server';

import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { deleteUser } from '@/app/lib/api-client';
import DeleteButton from '@/app/components/ui/delete-button';

export default async function DeleteUserPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteHandler() {
    'use server';
    const result = await deleteUser(params.id);
    revalidatePath('/admin/users');
    redirect('/admin/users');
  }
  return (
    <>
      <div>
        <h1>Delete User</h1>
        <div>Really delete user?</div>
        <DeleteButton
          deleteHandler={deleteHandler}
          buttonText="Yes, Delete User"
        />
      </div>
    </>
  );
}
