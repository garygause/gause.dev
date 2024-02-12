import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteContact } from '@/app/lib/api-client';
import DeleteButton from '@ui/delete-button';

export default async function DeleteContactPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteHandler() {
    'use server';
    const { msg, success, data } = await deleteContact(params.id);
    if (success) {
      revalidatePath('/admin/contacts');
      redirect('/admin/contacts');
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Contact</h1>
      <div>Really delete contact?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Contact"
      />
    </div>
  );
}