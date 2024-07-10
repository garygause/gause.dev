'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveWebsiteForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;
  const url = formData.get('url') as string;
  const slug = formData.get('slug') as string;
  const status = formData.get('status') as string;

  try {
    if (id) {
      const { data, meta } = await client.directories.admin.updateWebsite(id, {
        name: name,
        url: url,
        slug: slug,
        status: status,
      });
    } else {
      const { data, meta } = await client.directories.admin.createWebsite({
        name: name,
        url: url,
        slug: slug,
        status: status,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.directoriesWebsites);
  revalidatePath(PATHS.directoriesWebsitesEdit, 'page');
  redirect(PATHS.directoriesWebsites);
}
