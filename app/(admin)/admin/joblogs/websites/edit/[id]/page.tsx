import React from 'react';

import { WebsiteForm } from '@/app/components/admin/joblogs';
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
  const { data: website, meta } = await client.joblogs.getWebsite(params.id);
  if (!website) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Websites', href: PATHS.joblogsWebsites },
          {
            label: 'Edit Website',
            href: `${PATHS.joblogsWebsitesEdit}/${website.id}`,
          },
        ]}
      />
      <WebsiteForm website={website} />
    </main>
  );
}
