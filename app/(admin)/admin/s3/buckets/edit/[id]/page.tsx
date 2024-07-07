import React from 'react';

import { BucketForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function BucketEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: bucket, meta } = await client.s3.admin.getBucket(params.id);
  console.log('bucket form: ', meta, bucket);

  if (!bucket) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Buckets', href: PATHS.s3Buckets },
          {
            label: 'Edit Bucket',
            href: `${PATHS.s3BucketsEdit}/${bucket.id}`,
          },
        ]}
      />
      <BucketForm bucket={bucket} />
    </main>
  );
}
