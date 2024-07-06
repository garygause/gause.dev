import React from 'react';

import { S3AccountForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function S3AccountEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: account, meta } = await client.s3.admin.getAccount(params.id);
  if (!account) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'S3', href: PATHS.dashboard },
          {
            label: 'Settings',
            href: `${PATHS.s3AccountsEdit}/${account.id}`,
          },
        ]}
      />
      <S3AccountForm account={account} />
    </main>
  );
}
