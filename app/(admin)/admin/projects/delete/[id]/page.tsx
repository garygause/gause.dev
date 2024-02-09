import React from 'react';

import { deleteProject } from '@/app/lib/api-client';
import DeleteButton from '@/app/components/ui/delete-button';
import { updateCacheAndRedirect } from '@/app/lib/actions';

export default async function DeleteProjectPage({
  params,
}: {
  params: { id: string };
}) {
  async function deleteHandler() {
    'use server';
    await deleteProject(params.id);
    updateCacheAndRedirect(['/admin/projects'], '/admin/projects');
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
