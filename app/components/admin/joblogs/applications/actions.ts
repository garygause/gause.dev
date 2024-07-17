'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';
import { convertStringToDate } from '@/app/lib/utils';

export async function saveApplicationForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const jobId = formData.get('jobId') as string;
  const title = formData.get('title') as string;
  const jobUrl = formData.get('jobUrl') as string;
  const companyUrl = formData.get('companyUrl') as string;
  const keywords = formData.get('keywords') as string;
  const description = formData.get('description') as string;
  const coverLetter = formData.get('coverLetter') as string;
  const resume = formData.get('resume') as string;
  const notes = formData.get('notes') as string;
  const stack = formData.get('stack') as string;
  const address = formData.get('address') as string;
  const location = formData.get('location') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const datePublishedString = formData.get('datePublished') as string;
  const dateAppliedString = formData.get('dateApplied') as string;
  const dateInterviewedString = formData.get('dateInterviewed') as string;
  const dateCompleteString = formData.get('dateComplete') as string;

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

  const saveFields: any = {
    jobId: jobId,
    title: title,
    jobUrl: jobUrl,
    companyUrl: companyUrl,
    keywords: keywords,
    description: description,
    coverLetter: coverLetter,
    resume: resume,
    notes: notes,
    stack: stack,
    address: address,
    location: location,
    email: email,
    phone: phone,
    datePublished: datePublished,
    dateApplied: dateApplied,
    dateInterviewed: dateInterviewed,
    dateComplete: dateComplete,
    isFeatured: isFeatured,
    status: status,
  };

  try {
    if (id) {
      const { data, meta } = await client.joblogs.updateApplication(
        id,
        saveFields
      );
    } else {
      const { data, meta } = await client.joblogs.createApplication(saveFields);
    }
  } catch (e) {
    console.log(e);
  }

  revalidatePath(PATHS.joblogsApps);
  revalidatePath(PATHS.joblogsAppsEdit, 'page');
  redirect(PATHS.joblogsApps);
}
