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
  const status = formData.get('status') as string;

  try {
    if (id) {
      const { data, meta } = await client.joblogs.updatePerson(id, {
        firstName: firstName,
        lastName: lastName,
        status: status,
      });
    } else {
      const { data, meta } = await client.joblogs.createPerson({
        firstName: firstName,
        lastName: lastName,
        status: status,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.joblogsPeople);
  revalidatePath(PATHS.joblogsPeopleEdit, 'page');
  redirect(PATHS.joblogsPeople);
}
