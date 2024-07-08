import React from 'react';

import { JobForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function CreateJobPage() {
  const client = await getJadeAdminClient();
  const { data: companies, meta } =
    await client.directories.admin.searchCompanies('status=active');

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Jobs', href: PATHS.directoriesJobs },
          {
            label: 'Create Jobs',
            href: PATHS.directoriesJobsEdit,
          },
        ]}
      />
      <JobForm job={null} companies={companies} />
    </main>
  );
}
