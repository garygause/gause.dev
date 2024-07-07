import React from 'react';

import { BucketForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateBucketPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Buckets', href: PATHS.s3Buckets },
          {
            label: 'Create Bucket',
            href: PATHS.s3BucketsEdit,
          },
        ]}
      />
      <BucketForm bucket={null} />
    </main>
  );
}
