import React from 'react';
import Image from 'next/image';

import PostForm from '@ui/admin/post-form';
import { getPost } from '@/app/lib/api-client';

export default async function PostEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getPost(params.id);
  const image = data.libraryImageData;

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
