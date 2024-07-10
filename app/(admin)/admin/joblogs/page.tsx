import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { JobLogsTable } from '@admin/joblogs';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function JobLogsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const client = await getJadeAdminClient();
  const { data: joblogs, meta } = await client.joblogs.getJobLogs();

  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">JobLogs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search joblogs..." />
        <CreateButton url={PATHS.joblogsEdit} title="Create JobLog" />
      </div>
      <JobLogsTable joblogs={joblogs} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
