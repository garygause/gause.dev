import React from 'react';
import Link from 'next/link';

import BlogList from '@ui/blog-list';
import { getPublishedPosts } from '@/app/lib/api-client';

export default async function BlogTeaser() {
  // this is cached by next fetch caching so it is quick enough to get all posts
  // TODO: limit posts as the number grows
  const { data } = await getPublishedPosts(); //searchPosts({ status: 'published' });
  const posts = data?.slice(0, 3);
  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div>
        <h1 className="md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl">
          Articles
        </h1>
        <BlogList posts={posts} />
      </div>
      <div className="mx-auto flex justify-center items-center w-full">
        <Link
          className="text-2xl mb-10 border py-4 px-10 rounded-lg border-palette-red hover:bg-palette-brown hover:text-white"
          href="/blog"
        >
          Discover more
        </Link>
      </div>
    </div>
  );
}
