import React from 'react';
import type { Metadata } from 'next';

import { BlogList, BlogHero } from '@ui/blog';

import { getJadeClient } from '@/app/lib/client';
import { Post } from '@jade-and-lotus/jade-api-client';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
  title: 'gause.dev - Blog',
  description:
    'Musings, lessons, on technology and my love of software development.',
  keywords:
    'freelance, blog, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'index follow',
  alternates: { canonical: 'https://gause.dev/blog' },
  openGraph: {
    title: 'gause.dev - Blog',
    description:
      'Musings, lessons, on technology and my love of software development.',
    url: 'https://gause.dev/blog',
    siteName: 'gause.dev',
    type: 'website',
    images: [
      {
        url: 'https://gause.dev/images/site-preview.png',
        secureUrl: 'https://gause.dev/images/site-preview.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for gause.dev',
      },
    ],
  },
};

//export const dynamic = 'force-dynamic';

export default async function BlogHomePage() {
  const client = getJadeClient();
  const { data, meta } = await client.blogs.searchPosts(
    'status=published&limit=20&orderby=isFeatured desc'
  );
  console.log('POSTS: ', meta);

  const featuredPost = data?.shift();

  const posts = data?.slice(0, 3);
  const morePosts = data?.slice(3);
  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
      <div className="mr-auto place-self-center w-full">
        <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl">
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
