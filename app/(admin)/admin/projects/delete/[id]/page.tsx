'use server';

import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { deleteProject } from '@/app/lib/api-client';
import DeleteButton from '@/app/components/ui/delete-button';

export default async function DeleteProjectPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteHandler() {
    'use server';
    const result = await deleteProject(params.id);
    revalidatePath('/admin/projects');
    //redirect('/admin/projects');
  }
  return (
    <>
      <div>
        <h1>Delete Project</h1>
        <div>Really delete project?</div>
        <DeleteButton
          deleteHandler={deleteHandler}
          buttonText="Yes, Delete Project"
        />
      </div>
    </>
  );
}
