import React from 'react';

import PostForm from '@ui/admin/post-form';
import { getPost } from '@/app/lib/api-client';

export default async function PostEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { msg, success, data } = await getPost(params.id);
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Edit Post</h1>
          <PostForm post={data} />
        </div>
      </div>
    </div>
  );
}