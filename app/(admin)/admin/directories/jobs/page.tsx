import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { JobsTable } from '@admin/directories';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  let filter = 'limit=10';
  if (currentPage) {
    filter += `&page=${currentPage}`;
  }

  if (query) {
    filter += `&_search=${query}`;
  }
  console.log('FILTER: ', filter);
  const client = await getJadeAdminClient();
  const { data: jobs, meta } = await client.directories.admin.searchJobs(
    filter
  );

  const totalPages = meta.pagination?.pages || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Jobs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search jobs..." />
        <CreateButton url={PATHS.directoriesJobsEdit} title="Create Job" />
      </div>
      <JobsTable jobs={jobs} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
