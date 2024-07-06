import React from 'react';

import { DirectoryForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function DirectoryEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: directory, meta } = await client.directories.admin.getDirectory(
    params.id
  );
  if (!directory) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Directory', href: PATHS.dashboard },
          {
            label: 'Settings',
            href: `${PATHS.directoriesEdit}/${directory.id}`,
          },
        ]}
      />
      <DirectoryForm directory={directory} />
    </main>
  );
}
