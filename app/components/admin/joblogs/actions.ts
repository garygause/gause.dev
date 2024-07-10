'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveJobLogForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;

  try {
    if (id) {
      const { data, meta } = await client.joblogs.updateJobLog(id, {
        name: name,
      });
    } else {
      const { data, meta } = await client.joblogs.createJobLog({
        name: name,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.joblogs);
  revalidatePath(PATHS.joblogsEdit, 'page');
  redirect(PATHS.admin);
  //redirect(PATHS.directories);
}
