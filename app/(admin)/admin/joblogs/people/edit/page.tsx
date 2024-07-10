import React from 'react';

import { PersonForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreatePersonPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'People', href: PATHS.joblogsPeople },
          {
            label: 'Create Person',
            href: PATHS.joblogsPeopleEdit,
          },
        ]}
      />
      <PersonForm person={null} />
    </main>
  );
}
