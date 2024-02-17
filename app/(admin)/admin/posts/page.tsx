import React from 'react';

import PostsTable from '@ui/admin/posts';
import { getPosts } from '@/app/lib/mongodb';

export default async function PostsPage() {
  const data = await getPosts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return <PostsTable posts={data} />;
}
