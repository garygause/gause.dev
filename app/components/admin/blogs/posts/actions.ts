'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function savePostForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const title = formData.get('title') as string;
  const keywords = formData.get('keywords') as string;
  const summary = formData.get('summary') as string;
  const content = formData.get('content') as string;
  const imageId = formData.get('imageId') as string;
  const slug = formData.get('slug') as string;
  let isFeatured = formData.get('isFeatured') as unknown as boolean;
  const status = formData.get('status') as string;

  const metaTitle = formData.get('metaTitle') as string;
  const metaUrl = formData.get('metaUrl') as string;
  const metaKeywords = formData.get('metaKeywords') as string;
  const metaDescription = formData.get('metaDescription') as string;

  console.log('META: ', metaTitle);

  if (isFeatured) {
    isFeatured = true;
  } else {
    isFeatured = false;
  }

  let saveFields: any = {
    title: title,
    keywords: keywords,
    summary: summary,
    content: content,
    imageId: imageId,
    slug: slug.toLowerCase(),
    isFeatured: isFeatured,
    status: status,
  };
  if (metaTitle !== null) {
    saveFields['metaTitle'] = metaTitle;
    saveFields['metaUrl'] = metaUrl;
    saveFields['metaKeywords'] = metaKeywords;
    saveFields['metaDescription'] = metaDescription;
  }

  try {
    if (id) {
      const { data, meta } = await client.blogs.admin.updatePost(
        id,
        saveFields
      );
    } else {
      const { data, meta } = await client.blogs.admin.createPost(saveFields);
      console.log('CREATE POST: ', meta, data);
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.blogPosts);
  revalidatePath(PATHS.blogPostsEdit, 'page');
  redirect(PATHS.blogPosts);
}
