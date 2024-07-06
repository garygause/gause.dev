import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { DirectoriesTable } from '@admin/directories';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function DirectoriesPage({
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
  const { data: directories, meta } =
    await client.directories.admin.getDirectories();

  console.log('DIRS: ', meta, directories);
  console.log('CLIENT: ', client);
  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Directories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search directories..." />
        <CreateButton url={PATHS.directoriesEdit} title="Create Directory" />
      </div>
      <DirectoriesTable directories={directories} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
