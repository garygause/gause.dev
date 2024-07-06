import React from 'react';

import { WebsiteForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function WebsiteEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: website, meta } = await client.directories.admin.getWebsite(
    params.id
  );
  if (!website) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Websites', href: PATHS.directoriesWebsites },
          {
            label: 'Edit Website',
            href: `${PATHS.directoriesWebsitesEdit}/${website.id}`,
          },
        ]}
      />
      <WebsiteForm website={website} />
    </main>
  );
}
