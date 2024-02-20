import React from 'react';

import PostsTable from '@ui/admin/posts';
import { getPosts } from '@/app/lib/api-client';

// NOTE: prevents build errors from trying to fetch data from api during build
export const dynamic = 'force-dynamic';

export default async function PostsPage() {
  const { data } = await getPosts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return <PostsTable posts={data} />;
}
