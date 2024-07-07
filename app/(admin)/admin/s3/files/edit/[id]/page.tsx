import React from 'react';

import { FileForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@lib/client';
import { PATHS } from '@lib/constants';

export default async function FileEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: file, meta } = await client.s3.admin.getFile(params.id);
  const { data: buckets } = await client.s3.admin.getBuckets();
  console.log('FILE META: ', meta);

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Files', href: PATHS.s3Files },
          {
            label: 'Edit File',
            href: `${PATHS.s3FilesEdit}/${file?.id}`,
          },
        ]}
      />
      <FileForm file={file} buckets={buckets} />
    </main>
  );
}
