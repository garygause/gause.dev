import React from 'react';

import { PostForm } from '@admin/blogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function PostEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: post, meta } = await client.blogs.admin.getPost(params.id);
  if (!post) {
    return notFound();
  }
  const { data: images } = await client.s3.admin.searchFiles(
    'bucket.name=blog'
  );
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Posts', href: PATHS.blogPosts },
          {
            label: 'Edit Post',
            href: `${PATHS.blogPostsEdit}/${post.id}`,
          },
        ]}
      />
      <PostForm post={post} images={images} />
    </main>
  );
}
