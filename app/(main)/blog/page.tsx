import React from 'react';

import BlogList from '@ui/blog-list';
import BlogHero from '@ui/blog-hero';

import { getPublishedPosts } from '@/app/lib/api-client';
import { Post } from '@/app/lib/definitions';

export default async function BlogHomePage() {
  const { data } = await getPublishedPosts(); //searchPosts({ status: 'published' });
  const featuredPost: Post = data?.shift();
  const posts = data?.slice(0, 3);
  const morePosts = data?.slice(3);
  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
      <div className="mr-auto place-self-center w-full">
        <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
          Blog
        </h1>
        <div className="mb-4">
          Musings, lessons, on technology and my love of software development.
        </div>
        {(!data || data.length === 0) && <div>No results found.</div>}
        {data && data.length > 0 && (
          <div className="flex flex-col space-y-6">
            <BlogHero post={featuredPost} />
            <BlogList posts={posts} />
            <BlogList posts={morePosts} variant="medium" />
          </div>
        )}
      </div>
    </div>
  );
}
