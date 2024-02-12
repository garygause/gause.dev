import React from 'react';

import BlogList from '@ui/blog-list';
import BlogHero from '@ui/blog-hero';

import { getPosts } from '@/app/lib/api-client';

export default async function BlogHomePage() {
  let { msg, success, data } = await getPosts();
  console.log(data);
  const heroPost = data.shift();

  return (
    <section>
      <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
            Blog
          </h1>
          <div className="mb-10">
            Musings, lessons, on technology and my love of software development.
          </div>
          <div className="flex flex-col space-y-10">
            <BlogHero post={heroPost} />
            <BlogList posts={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
