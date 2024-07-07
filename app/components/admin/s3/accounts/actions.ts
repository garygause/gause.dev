import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveS3AccountForm(id: string, formData: FormData) {
  'use server';
  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;
  const status = formData.get('status') as string;

  try {
    if (id) {
      const { data, meta } = await client.s3.admin.updateAccount(id, {
        name: name,
        status: status,
      });
    } else {
      const { data, meta } = await client.s3.admin.createAccount({
        name: name,
        status: status,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.s3Accounts);
  revalidatePath(PATHS.s3AccountsEdit, 'page');
  redirect(PATHS.home);
  //redirect(PATHS.s3Accounts);
}

export async function deleteAccountForm(id: string) {
  'use server';
  try {
    const client = await getJadeAdminClient();
    await client.s3.admin.deleteAccount(id);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(PATHS.s3Accounts);
    redirect(PATHS.s3Accounts);
  }
}
