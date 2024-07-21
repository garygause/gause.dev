import React from 'react';

import { CreateButton } from '@jade-and-lotus/jade-ui';
import { Pagination } from '@ui/pagination';
import { Search } from '@ui/search';
import { BlogsTable } from '@app/components/admin/blogs';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function BlogsPage({
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
  const { data: blogs, meta } = await client.blogs.admin.getBlogs();

  console.log('BLOGS META: ', meta, blogs);

  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Blogs</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search blogs..." />
        <CreateButton url={PATHS.blogsEdit} title="Create Blog" />
      </div>
      <BlogsTable blogs={blogs} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
