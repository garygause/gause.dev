import React from 'react';

import { PersonForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreatePersonPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'People', href: PATHS.directoriesPeople },
          {
            label: 'Create Person',
            href: PATHS.directoriesPeopleEdit,
          },
        ]}
      />
      <PersonForm person={null} />
    </main>
  );
}
