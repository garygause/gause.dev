import React from 'react';

import PostsTable from '@ui/admin/posts';
import { getPosts } from '@/app/lib/api-client';

export default async function PostsPage() {
  const { msg, success, data } = await getPosts();

  return <PostsTable posts={data} />;
}
