import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PATHS } from '@lib/constants';
import { DeleteForm } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function DeleteCompanyPage({
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
      await client.joblogs.deleteCompany(params.id);
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath(PATHS.joblogsCompanies);
      redirect(PATHS.joblogsCompanies);
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Company</h1>
      <div>Really delete company?</div>
      <DeleteForm
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Company"
      />
    </div>
  );
}
