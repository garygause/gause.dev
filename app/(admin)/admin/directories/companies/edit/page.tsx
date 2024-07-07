import React from 'react';

import { CompanyForm } from '@admin/directories';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateCompanyPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Companies', href: PATHS.directoriesCompanies },
          {
            label: 'Create Company',
            href: PATHS.directoriesCompaniesEdit,
          },
        ]}
      />
      <CompanyForm company={null} />
    </main>
  );
}
