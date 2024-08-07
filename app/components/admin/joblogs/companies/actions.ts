'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { PATHS } from '@lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export async function saveCompanyForm(id: string, formData: FormData) {
  'use server';

  const client = await getJadeAdminClient();

  const companyType = formData.get('companyType') as string;
  const name = formData.get('name') as string;
  const url = formData.get('url') as string;
  const jobsUrl = formData.get('jobsUrl') as string;
  const linkedIn = formData.get('linkedIn') as string;
  const facebook = formData.get('facebook') as string;
  const instagram = formData.get('instagram') as string;
  const otherSocial = formData.get('otherSocial') as string;

  const keywords = formData.get('keywords') as string;
  const summary = formData.get('summary') as string;
  const content = formData.get('content') as string;

  const notes = formData.get('notes') as string;
  const stack = formData.get('stack') as string;
  const numEmployees = formData.get('numEmployees') as string;
  const valuation = formData.get('valuation') as string;
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
      const { data, meta } = await client.joblogs.updateCompany(id, {
        companyType: companyType,
        name: name,
        url: url,
        jobsUrl: jobsUrl,
        linkedIn: linkedIn,
        instagram: instagram,
        facebook: facebook,
        otherSocial: otherSocial,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        numEmployees: numEmployees,
        valuation: valuation,
        address: address,
        email: email,
        phone: phone,
        isFeatured: isFeatured,
        status: status,
      });
    } else {
      const { data, meta } = await client.joblogs.createCompany({
        companyType: companyType,
        name: name,
        url: url,
        jobsUrl: jobsUrl,
        linkedIn: linkedIn,
        instagram: instagram,
        facebook: facebook,
        otherSocial: otherSocial,
        keywords: keywords,
        summary: summary,
        content: content,
        notes: notes,
        stack: stack,
        numEmployees: numEmployees,
        valuation: valuation,
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

  revalidatePath(PATHS.joblogsCompanies);
  revalidatePath(PATHS.joblogsCompaniesEdit, 'page');
  redirect(PATHS.joblogsCompanies);
}
