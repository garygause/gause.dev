import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { deleteProject } from '@/app/lib/mongodb';
import DeleteButton from '@/app/components/ui/delete-button';

export default async function DeleteProjectPage({
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
      await deleteProject(params.id);
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath('/admin/projects');
      redirect('/admin/projects');
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Project</h1>
      <div>Really delete project?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Project"
      />
    </div>
  );
}
