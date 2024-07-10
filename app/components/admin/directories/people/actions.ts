'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function savePersonForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const slug = formData.get('slug') as string;
  const status = formData.get('status') as string;

  try {
    if (id) {
      const { data, meta } = await client.directories.admin.updatePerson(id, {
        firstName: firstName,
        lastName: lastName,
        slug: slug,
        status: status,
      });
    } else {
      const { data, meta } = await client.directories.admin.createPerson({
        firstName: firstName,
        lastName: lastName,
        slug: slug,
        status: status,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.directoriesPeople);
  revalidatePath(PATHS.directoriesPeopleEdit, 'page');
  redirect(PATHS.directoriesPeople);
}
