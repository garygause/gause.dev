import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PATHS } from '@lib/constants';
import { DeleteForm } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function DeletePersonPage({
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
      await client.directories.admin.deletePerson(params.id);
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath(PATHS.directoriesPeople);
      redirect(PATHS.directoriesPeople);
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Person</h1>
      <div>Really delete person?</div>
      <DeleteForm
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Person"
      />
    </div>
  );
}
