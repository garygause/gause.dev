import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { deletePost } from '@/app/lib/api-client';
import DeleteButton from '@ui/delete-button';

export default async function DeletePostPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params || !params.id) {
    return <div>Invalid input.</div>;
  }
  async function deleteHandler() {
    'use server';
    const { msg, success, data } = await deletePost(params.id);
    if (success) {
      revalidatePath('/admin/posts');
      redirect('/admin/posts');
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Post</h1>
      <div>Really delete post?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Post"
      />
    </div>
  );
}
