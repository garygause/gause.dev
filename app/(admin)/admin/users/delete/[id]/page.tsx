import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteUser } from '@/app/lib/mongodb';
import DeleteButton from '@ui/delete-button';

export default async function DeleteUserPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params || !params.id) {
    return <div>Invalid input.</div>;
  }

  async function deleteHandler() {
    'use server';
    try {
      await deleteUser(params.id);
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath('/admin/users');
      redirect('/admin/users');
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete User</h1>
      <h1>Delete User</h1>
      <div>Really delete user?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete User"
      />
    </div>
  );
}
