import React from 'react';

import BlogList from '@ui/blog-list';
import BlogHero from '@ui/blog-hero';

import { getPosts } from '@/app/lib/api-client';
import { Post } from '@/app/lib/definitions';

export default async function BlogHomePage() {
  /*
   TODO: consider using db method instead of api call
   using api call because I want to flesh out the api

   using db:
   import { getPosts } from '@/app/lib/mongodb';
   const data = await getPosts();
   */
  const { msg, success, data } = await getPosts();
  const featuredPost: Post = data.shift();

  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
      <div className="mr-auto place-self-center ">
        <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
          Blog
        </h1>
        <div className="mb-10">
          Musings, lessons, on technology and my love of software development.
        </div>
        <div className="flex flex-col space-y-10">
          <BlogHero post={featuredPost} />
          <BlogList posts={data} />
        </div>
      </div>
    </div>
  );
}
