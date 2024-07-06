import React from 'react';

import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { CreateButton } from '@jade-and-lotus/jade-ui';
import { FilesTable } from '@admin/s3';
import { getJadeAdminClient } from '@lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function FilesPage({
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
  const { data: files, meta } = await client.s3.admin.getFiles();
  console.log('FILES: ', meta, files);
  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Files</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search files..." />
        <CreateButton url={PATHS.s3FilesEdit} title="Create File" />
      </div>
      <FilesTable files={files} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
