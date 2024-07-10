import React from 'react';

import { WebsiteForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateWebsitePage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Websites', href: PATHS.joblogsWebsites },
          {
            label: 'Create Website',
            href: PATHS.joblogsWebsitesEdit,
          },
        ]}
      />
      <WebsiteForm website={null} />
    </main>
  );
}
