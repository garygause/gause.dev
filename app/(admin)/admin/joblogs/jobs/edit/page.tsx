import React from 'react';

import { JobForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function CreateJobPage() {
  const client = await getJadeAdminClient();
  const { data: companies, meta } = await client.joblogs.searchCompanies(
    'status=active'
  );

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Jobs', href: PATHS.joblogsJobs },
          {
            label: 'Create Job',
            href: PATHS.joblogsJobsEdit,
          },
        ]}
      />
      <JobForm job={null} companies={companies} />
    </main>
  );
}
