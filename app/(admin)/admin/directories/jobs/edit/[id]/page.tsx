import React from 'react';

import { JobForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function JobEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: job, meta } = await client.directories.admin.getJob(params.id);
  if (!job) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Jobs', href: PATHS.directoriesJobs },
          {
            label: 'Edit Job',
            href: `${PATHS.directoriesJobsEdit}/${job.id}`,
          },
        ]}
      />
      <JobForm job={job} />
    </main>
  );
}
