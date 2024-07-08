import React from 'react';

import { JobForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateJobPage() {
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
      <JobForm job={null} />
    </main>
  );
}
