// @ts-nocheck

/*
 TODO: remove ts-nocheck when type issue with rehype plugin is resolved
*/
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import ShareList from '@ui/share-list';
import MDXImage from '@ui/mdx-image';
import { BlogList } from '@ui/blog';
import { getJadeClient } from '@/app/lib/client';

import './page.css';
import '@/node_modules/katex/dist/katex.min.css';

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug.slice(-1);
  const client = getJadeClient();
  const { data: post } = await client.blogs.getPostBySlug(slug);

  return {
    metadataBase: new URL('https://gause.dev'),
    title: 'gause.dev - ' + post.metaTitle || post.title,
    description: post.metaSummary || post.summary,
    keywords: post.metaKeywords || post.keywords,
    creator: 'Gary Gause',
    robots: 'index follow',
    alternates: { canonical: post.metaUrl || 'https://gause.dev/blog/' + slug },
    openGraph: {
      title: post.metaTitle || 'gause.dev - ' + post.title,
      description: post.metaSummary || post.summary,
      url: post.metaUrl || 'https://gause.dev/blog/' + slug,
      siteName: 'gause.dev',
      type: 'website',
      images: [
        {
          url: post.image?.url || 'https://gause.dev/images/blog/default.png',
          secureUrl:
            post.image?.url || 'https://gause.dev/images/blog/default.png',
          width: Number(post.image?.width) || 500,
          height: Number(post.image?.height) || 500,
          alt: post.image?.alt || 'default image',
        },
      ],
    },
  };
}

const components = {
  MDXImage,
  Link,
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex, rehypeHighlight],
  },
};
export const dynamic = 'force-dynamic';

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug.slice(-1);

  const client = getJadeClient();
  const { data: posts } = await client.blogs.searchPosts(
    'status=published&limit=3&orderby=isFeatured desc'
  );
  const { data: post } = await client.blogs.getPostBySlug(slug);

  const pageUrl = 'https://gause.dev/blog/' + slug;
  const dateString = new Date(post.datePublished).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <article className="mx-auto w-full">
        <div className="container mx-auto max-w-3xl md:my-4">
          <div className=" pl-100p pt-70p relative w-full h-full basis-0 grow-0 flex shrink justify-center overflow-hidden items-center">
            <div className="overflow-hidden">
              <div className="img-container">
                <Image
                  src={post.image?.url || '/images/blog/default.png'}
                  width={Number(post.image?.width) || 500}
                  height={Number(post.image?.height) || 500}
                  alt={post.image?.alt || 'default image'}
                  className="md:rounded-md "
                />
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col md:flex-row items-start">
            <ShareList shares={post.shares} url={pageUrl} />
            <div className="md:ml-8 relative max-w-2xl">
              <h1 className="text-4xl pb-4 md:pb-10 pt-4">{post.title}</h1>
              <div className="text-palette-brown/60 mb-4 md:mb-8">
                Last updated: <span className="px-2">{dateString}</span>
              </div>
              <div>
                <p className="mb-3 text-palette-brown first-line:uppercase first-line:tracking-widest first-letter:text-2xl first-letter:font-bold first-letter:text-palette-red">
                  {post.summary}
                </p>
              </div>
              <div className="mdx-container">
                <MDXRemote
                  source={post.content}
                  components={components}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="container mx-auto max-w-3xl px-6 mt-10 border-t-2 border-palette-brown/50 dark:border-palette-white/50">
        <h3 className="text-3xl tracking-tight md:text-5xl md:my-10 my-8">
          More <span className="text-palette-brown/50">articles</span>
        </h3>
        <BlogList posts={posts} variant="small" />
        <div className="mx-auto flex justify-center items-center w-full">
          <Link
            className="text-2xl mb-10 border py-4 px-10 rounded-lg border-palette-red hover:bg-palette-brown hover:text-white"
            href="/blog"
          >
            Discover more
          </Link>
        </div>
      </div>
    </>
  );
}
