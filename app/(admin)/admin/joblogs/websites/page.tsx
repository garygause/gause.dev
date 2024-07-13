import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { WebsitesTable } from '@/app/components/admin/joblogs';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function WebsitesPage({
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

  const client = await getJadeAdminClient();
  const { data: websites, meta } = await client.joblogs.searchWebsites(filter);

  const totalPages = meta.pagination?.pages || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Websites</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search websites..." />
        <CreateButton url={PATHS.joblogsWebsitesEdit} title="Create Website" />
      </div>
      <WebsitesTable websites={websites} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
