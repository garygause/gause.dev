import React from 'react';

import { BlogForm } from '@admin/blogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { notFound } from 'next/navigation';
import { getJadeAdminClient } from '@/app/lib/client';
import { PATHS } from '@/app/lib/constants';

export default async function BlogEditPage({
  params,
}: {
  params: { id: string };
}) {
  const client = await getJadeAdminClient();
  const { data: blog, meta } = await client.blogs.admin.getBlog(params.id);
  if (!blog) {
    return notFound();
  }

  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Blog', href: PATHS.home },
          {
            label: 'Settings',
            href: `${PATHS.blogsEdit}/${blog.id}`,
          },
        ]}
      />
      <BlogForm blog={blog} />
    </main>
  );
}
