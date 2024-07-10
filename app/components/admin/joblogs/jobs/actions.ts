'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveJobForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const companyId = formData.get('companyId') as string;
  const title = formData.get('title') as string;
  const url = formData.get('url') as string;
  const companyUrl = formData.get('companyUrl') as string;
  const keywords = formData.get('keywords') as string;
  const summary = formData.get('summary') as string;
  const content = formData.get('content') as string;
  const notes = formData.get('notes') as string;
  const stack = formData.get('stack') as string;
  const address = formData.get('address') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;

  let isFeatured = formData.get('isFeatured') as unknown as boolean;
  const status = formData.get('status') as string;

  if (isFeatured) {
    isFeatured = true;
  } else {
    isFeatured = false;
  }

  try {
    if (id) {
      const { data, meta } = await client.joblogs.updateJob(id, {
        companyId: companyId,
        title: title,
        url: url,
        companyUrl: companyUrl,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        address: address,
        email: email,
        phone: phone,
        isFeatured: isFeatured,
        status: status,
      });
    } else {
      const { data, meta } = await client.joblogs.createJob({
        companyId: companyId,
        title: title,
        url: url,
        companyUrl: companyUrl,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        address: address,
        email: email,
        phone: phone,
        isFeatured: isFeatured,
        status: status,
      });
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.joblogsJobs);
  revalidatePath(PATHS.joblogsJobsEdit, 'page');
  redirect(PATHS.joblogsJobs);
}
