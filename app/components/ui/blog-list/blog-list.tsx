import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlogListItem from '@ui/blog-list-item';
import { Post } from '@/app/lib/definitions';

function BlogList({
  posts,
  variant,
}: {
  posts: Post[];
  variant?: 'small' | 'medium' | 'large';
}) {
  let listClass = 'list-container-grid';
  if (variant && variant === 'small') {
    listClass = 'list-container-grid-small';
  }

  return (
    <section>
      <div className="flex flex-col mx-auto mt-0 mb-10 items-center">
        <div className="mx-auto mt-0  overflow-visible max-w-7xl w-full">
          <div
            className={`gap-x-12 gap-10 ${listClass} pt-0 pl-0 overflow-visible w-full`}
          >
            {posts &&
              posts.map((post) => {
                return (
                  <BlogListItem key={post._id} post={post} variant={variant} />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
