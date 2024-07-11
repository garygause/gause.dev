import React from 'react';

import { ApplicationForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function CreateApplicationPage() {
  const client = await getJadeAdminClient();
  const { data: jobs, meta } = await client.joblogs.searchJobs('status=active');

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Applications', href: PATHS.joblogsApps },
          {
            label: 'Create Application',
            href: PATHS.joblogsAppsEdit,
          },
        ]}
      />
      <ApplicationForm application={null} jobs={jobs} />
    </main>
  );
}
