import React from 'react';

import { ApplicationForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function ApplicationEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: application, meta } = await client.joblogs.getApplication(
    params.id
  );
  if (!application) {
    return notFound();
  }

  const { data: jobs } = await client.joblogs.searchJobs('status=active');

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Applications', href: PATHS.joblogsApps },
          {
            label: 'Edit Application',
            href: `${PATHS.joblogsAppsEdit}/${application.id}`,
          },
        ]}
      />
      <ApplicationForm application={application} jobs={jobs} />
    </main>
  );
}
