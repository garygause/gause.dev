import React from 'react';

import { JobLogForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function JobLogEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: joblog, meta } = await client.joblogs.getJobLog(params.id);
  if (!joblog) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'JobLog', href: PATHS.home },
          {
            label: 'Settings',
            href: `${PATHS.joblogsEdit}/${joblog.id}`,
          },
        ]}
      />
      <JobLogForm joblog={joblog} />
    </main>
  );
}
