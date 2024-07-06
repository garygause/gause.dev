import React from 'react';

import { FileForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@lib/client';
import { PATHS } from '@lib/constants';

export default async function CreateFilePage() {
  const client = await getJadeAdminClient();
  const { data: buckets, meta } = await client.s3.admin.getBuckets();
  console.log('BUCKETS META: ', meta);

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Files', href: PATHS.s3Files },
          {
            label: 'Create File',
            href: PATHS.s3FilesEdit,
          },
        ]}
      />
      <FileForm file={null} buckets={buckets} />
    </main>
  );
}
