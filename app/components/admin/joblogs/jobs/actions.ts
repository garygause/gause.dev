'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';
import { convertStringToDate } from '@/app/lib/utils';

export async function saveJobForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();
  const datePublishedString = formData.get('datePublished') as string;
  const dateAppliedString = formData.get('dateApplied') as string;
  const dateInterviewedString = formData.get('dateInterviewed') as string;
  const dateCompleteString = formData.get('dateComplete') as string;

  const companyId = formData.get('companyId') as string;
  const jobType = formData.get('jobType') as string;
  const title = formData.get('title') as string;
  const url = formData.get('url') as string;
  const companyUrl = formData.get('companyUrl') as string;
  const keywords = formData.get('keywords') as string;
  const summary = formData.get('summary') as string;
  const content = formData.get('content') as string;
  const notes = formData.get('notes') as string;
  const stack = formData.get('stack') as string;
  const address = formData.get('address') as string;
  const location = formData.get('location') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;

  let isFeatured = formData.get('isFeatured') as unknown as boolean;
  const status = formData.get('status') as string;

  if (isFeatured) {
    isFeatured = true;
  } else {
    isFeatured = false;
  }

  const datePublished = convertStringToDate(datePublishedString);
  const dateApplied = convertStringToDate(dateAppliedString);
  const dateInterviewed = convertStringToDate(dateInterviewedString);
  const dateComplete = convertStringToDate(dateCompleteString);

  try {
    if (id) {
      const { data, meta } = await client.joblogs.updateJob(id, {
        companyId: companyId,
        jobType: jobType,
        title: title,
        url: url,
        companyUrl: companyUrl,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        address: address,
        location: location,
        email: email,
        phone: phone,
        isFeatured: isFeatured,
        datePublished: datePublished,
        dateApplied: dateApplied,
        dateInterviewed: dateInterviewed,
        dateComplete: dateComplete,
        status: status,
      });
    } else {
      const { data, meta } = await client.joblogs.createJob({
        companyId: companyId,
        jobType: jobType,
        title: title,
        url: url,
        companyUrl: companyUrl,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        address: address,
        location: location,
        email: email,
        phone: phone,
        isFeatured: isFeatured,
        datePublished: datePublished,
        dateApplied: dateApplied,
        dateInterviewed: dateInterviewed,
        dateComplete: dateComplete,
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
