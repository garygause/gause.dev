import React from 'react';

import { CompanyForm } from '@/app/components/admin/joblogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateCompanyPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Companies', href: PATHS.joblogsCompanies },
          {
            label: 'Create Company',
            href: PATHS.joblogsCompaniesEdit,
          },
        ]}
      />
      <CompanyForm company={null} />
    </main>
  );
}
