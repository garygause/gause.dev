'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@app/lib/constants';

//import { EmptyImageError } from '@app/lib/exceptions';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveFileForm(id: string, formData: FormData) {
  ('use server');

  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;
  const credit = formData.get('credit') as string;
  const creditUrl = formData.get('creditUrl') as string;
  const bucketId = formData.get('bucketId') as string;
  const alt = formData.get('alt') as string;

  if (id) {
    await client.s3.admin.updateFile(id, {
      name: name,
      credit: credit,
      creditUrl: creditUrl,
      bucketId: bucketId,
      alt: alt,
    });
  } else {
    const { data, meta } = await client.s3.admin.createFile(formData);
  }

  revalidatePath(PATHS.s3Files);
  revalidatePath(PATHS.s3FilesEdit, 'page');
  redirect(PATHS.s3Files);
}

export async function deleteFileForm(id: string) {
  'use server';
  try {
    const client = await getJadeAdminClient();
    await client.s3.admin.deleteFile(id);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(PATHS.s3Files);
    redirect(PATHS.s3Files);
  }
}
