import React from 'react';

import { CompanyForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function CompanyEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: company, meta } = await client.directories.admin.getCompany(
    params.id
  );
  if (!company) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Companies', href: PATHS.directoriesCompanies },
          {
            label: 'Edit Company',
            href: `${PATHS.directoriesCompaniesEdit}/${company.id}`,
          },
        ]}
      />
      <CompanyForm company={company} />
    </main>
  );
}
