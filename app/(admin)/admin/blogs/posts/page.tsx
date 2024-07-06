import React from 'react';

import { CreateButton } from '@jade-and-lotus/jade-ui';
import { Pagination } from '@/app/components/ui/pagination';
import { Search } from '@/app/components/ui/search';
import { PostsTable } from '@admin/blogs';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function PostsPage({
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
  const { data: posts, meta } = await client.blogs.admin.getPosts();

  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Posts</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search posts..." />
        <CreateButton url={PATHS.blogPostsEdit} title="Create Post" />
      </div>
      <PostsTable posts={posts} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
