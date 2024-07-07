import React from 'react';

import { BlogForm } from '@admin/blogs';
import { BreadCrumbs } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';

export default function CreateBlogPage() {
  return (
    <main>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Blogs', href: PATHS.blogs },
          {
            label: 'Create Blog',
            href: PATHS.blogsEdit,
          },
        ]}
      />
      <BlogForm blog={null} />
    </main>
  );
}
