import React from 'react';

import { JobForm } from '@/app/components/admin/joblogs';
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
  const { data: job, meta } = await client.joblogs.getJob(params.id);
  if (!job) {
    return notFound();
  }

  const { data: companies } = await client.joblogs.getCompanies();

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Jobs', href: PATHS.joblogsJobs },
          {
            label: 'Edit Job',
            href: `${PATHS.joblogsJobsEdit}/${job.id}`,
          },
        ]}
      />
      <JobForm job={job} companies={companies} />
    </main>
  );
}
