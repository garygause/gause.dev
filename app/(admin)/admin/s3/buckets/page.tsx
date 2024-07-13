import React from 'react';

import { BucketsTable } from '@admin/s3';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function S3BucketsPage() {
  const client = await getJadeAdminClient();
  const { data: buckets } = await client.s3.admin.getBuckets();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Buckets</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <CreateButton url={PATHS.s3BucketsEdit} title="Create Bucket" />
      </div>
      <BucketsTable buckets={buckets} />
    </div>
  );
}
