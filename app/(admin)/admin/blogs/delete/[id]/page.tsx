import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PATHS } from '@lib/constants';
import DeleteButton from '@ui/delete-button';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function DeleteBlogPage({
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
      const client = await getJadeAdminClient();
      await client.blogs.admin.deleteBlog(params.id);
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath(PATHS.blogs);
      redirect(PATHS.blogs);
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Blog</h1>
      <div>Really delete blog?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Blog"
      />
    </div>
  );
}
