import React from 'react';

import { PersonForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function PersonEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: person, meta } = await client.directories.admin.getPerson(
    params.id
  );
  if (!person) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'People', href: PATHS.directoriesPeople },
          {
            label: 'Edit Person',
            href: `${PATHS.directoriesPeopleEdit}/${person.id}`,
          },
        ]}
      />
      <PersonForm person={person} />
    </main>
  );
}
