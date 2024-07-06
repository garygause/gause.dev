import React from 'react';

import { DirectoryForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateDirectoryPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Directories', href: PATHS.directories },
          {
            label: 'Create Directory',
            href: PATHS.directoriesEdit,
          },
        ]}
      />
      <DirectoryForm directory={null} />
    </main>
  );
}
