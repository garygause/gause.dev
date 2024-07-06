'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveBlogForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const name = formData.get('name') as string;
  const metaTitle = formData.get('metaTitle') as string;
  const metaUrl = formData.get('metaUrl') as string;
  const metaKeywords = formData.get('metaKeywords') as string;
  const metaDescription = formData.get('metaDescription') as string;

  try {
    if (id) {
      const { data, meta } = await client.blogs.admin.updateBlog(id, {
        name: name,
        metaTitle: metaTitle,
        metaUrl: metaUrl,
        metaKeywords: metaKeywords,
        metaDescription: metaDescription,
      });
    } else {
      const { data, meta } = await client.blogs.admin.createBlog({
        name: name,
        metaTitle: metaTitle,
        metaUrl: metaUrl,
        metaKeywords: metaKeywords,
        metaDescription: metaDescription,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.blogs);
  revalidatePath(PATHS.blogsEdit, 'page');
  redirect(PATHS.home);
  //redirect(PATHS.blogs);
}
