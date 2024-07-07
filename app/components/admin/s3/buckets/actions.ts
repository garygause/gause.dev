'use server';

import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';

import { PATHS } from '@app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveBucketForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;
  const isPublicValue = formData.get('isPublic') as string;

  let isPublic = false;
  if (isPublicValue === 'on') {
    isPublic = true;
  }

  if (id) {
    await client.s3.admin.updateBucket(id, {
      name: name,
      isPublic: isPublic,
    });
  } else {
    await client.s3.admin.createBucket({
      name: name,
      isPublic: isPublic,
    });
  }

  revalidatePath(PATHS.s3Buckets);
  revalidatePath(PATHS.s3BucketsEdit, 'page');
  redirect(PATHS.s3Buckets);
}

export async function deleteBucketForm(id: string) {
  'use server';
  try {
    const client = await getJadeAdminClient();
    await client.s3.admin.deleteBucket(id);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(PATHS.s3Buckets);
    redirect(PATHS.s3Buckets);
  }
}
