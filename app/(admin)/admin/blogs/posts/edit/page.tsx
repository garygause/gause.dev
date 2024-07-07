import React from 'react';

import { PostForm } from '@admin/blogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';
import { getJadeAdminClient } from '@/app/lib/client';

export default async function CreatePostPage() {
  const client = await getJadeAdminClient();
  const { data: images } = await client.s3.admin.searchFiles(
    'bucket.name=blog'
  );
  console.log('POST IMGS: ', images);
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Posts', href: PATHS.blogPosts },
          {
            label: 'Create Post',
            href: PATHS.blogPostsEdit,
          },
        ]}
      />
      <PostForm post={null} images={images} />
    </main>
  );
}
