import React from 'react';
import Link from 'next/link';

import BlogList from './blog-list';
import { Post } from '@jade-and-lotus/jade-api-client';

export default function BlogTeaser({ posts }: { posts: Post[] }) {
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
