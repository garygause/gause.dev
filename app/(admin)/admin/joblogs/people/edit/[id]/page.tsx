import React from 'react';

import { PersonForm } from '@/app/components/admin/joblogs';
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
  const { data: person, meta } = await client.joblogs.getPerson(params.id);
  if (!person) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'People', href: PATHS.joblogsPeople },
          {
            label: 'Edit Person',
            href: `${PATHS.joblogsPeopleEdit}/${person.id}`,
          },
        ]}
      />
      <PersonForm person={person} />
    </main>
  );
}
