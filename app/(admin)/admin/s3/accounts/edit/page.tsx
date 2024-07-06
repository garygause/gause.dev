import React from 'react';

import { S3AccountForm } from '@admin/s3';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateCustomerPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'S3Accounts', href: PATHS.dashboard },
          {
            label: 'Create S3Account',
            href: PATHS.s3AccountsEdit,
          },
        ]}
      />
      <S3AccountForm account={null} />
    </main>
  );
}
