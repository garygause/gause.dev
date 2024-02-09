import React from 'react';

import { deleteUser } from '@/app/lib/api-client';
import DeleteButton from '@/app/components/ui/delete-button';
import { updateCacheAndRedirect } from '@/app/lib/actions';

export default async function DeleteUserPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteHandler() {
    'use server';
    await deleteUser(params.id);
    updateCacheAndRedirect(['/admin/users'], '/admin/users');
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
