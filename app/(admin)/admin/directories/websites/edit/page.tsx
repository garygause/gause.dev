import React from 'react';

import { WebsiteForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateWebsitePage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Websites', href: PATHS.directoriesWebsites },
          {
            label: 'Create Website',
            href: PATHS.directoriesWebsitesEdit,
          },
        ]}
      />
      <WebsiteForm website={null} />
    </main>
  );
}
