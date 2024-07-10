import React from 'react';

import { JobLogForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateJobLogPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'JobLogs', href: PATHS.joblogs },
          {
            label: 'Create JobLog',
            href: PATHS.joblogsEdit,
          },
        ]}
      />
      <JobLogForm joblog={null} />
    </main>
  );
}
