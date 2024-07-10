import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { PeopleTable } from '@/app/components/admin/joblogs';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function PeoplePage({
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
  const { data: people, meta } = await client.joblogs.getPeople();

  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">People</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search people..." />
        <CreateButton url={PATHS.joblogsPeopleEdit} title="Create Person" />
      </div>
      <PeopleTable people={people} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
