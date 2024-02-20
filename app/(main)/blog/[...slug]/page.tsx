// @ts-nocheck

/*
 TODO: remove ts-nocheck when type issue with rehype plugin is resolved
*/
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

import rehypeHighlight from 'rehype-highlight';
import { MDXRemote } from 'next-mdx-remote/rsc';

import {
  getPostBySlug,
  getPublishedPosts,
  searchPosts,
} from '@/app/lib/api-client';
import ShareList from '@ui/share-list';
import MDXImage from '@ui/mdx-image';
import BlogList from '@ui/blog-list';

import './page.css';

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug.slice(-1);
  const post = await getPostBySlug(slug);
  const {
    _id,
    title,
    libraryImage,
    libraryImageData,
    keywords,
    summary,
    content,
    date,
    shares,
  } = post;

  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://gause.dev'),
    title: 'gause.dev - ' + title,
    description: summary,
    keywords: keywords,
    creator: 'Gary Gause',
    robots: 'index follow',
    alternates: { canonical: 'https://gause.dev/blog/' + slug },
    openGraph: {
      title: 'gause.dev - ' + title,
      description: summary,
      url: 'https://gause.dev/blog/' + slug,
      siteName: 'gause.dev',
      type: 'website',
      images: [
        {
          url:
            'https://gause.dev' +
            (libraryImageData?.path || '/images/blog/default.png'),
          secureUrl:
            'https://gause.dev' +
            (libraryImageData?.path || '/images/blog/default.png'),
          width: Number(libraryImageData?.width) || 500,
          height: Number(libraryImageData?.height) || 500,
          alt: libraryImageData?.alt || 'default image',
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
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: posts } = await getPublishedPosts();
  const morePosts = posts?.slice(0, 3);
  const { data: post } = await getPostBySlug(params.slug.slice(-1));
  const {
    _id,
    title,
    libraryImage,
    libraryImageData,
    keywords,
    summary,
    content,
    date,
    slug,
    shares,
  } = post;

  const pageUrl = 'https://gause.dev/blog/' + slug;

  const dateString = new Date(date).toLocaleDateString('en-us', {
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
                  src={libraryImageData?.path || '/images/blog/default.png'}
                  width={Number(libraryImageData?.width) || 500}
                  height={Number(libraryImageData?.height) || 500}
                  alt={libraryImageData?.alt || 'default image'}
                  className="md:rounded-md "
                />
              </div>
            </div>
          </div>
          <div className="p-6 flex flex-col md:flex-row items-start">
            <ShareList shares={shares} url={pageUrl} />
            <div className="md:ml-8 relative max-w-2xl">
              <h1 className="text-4xl pb-4 md:pb-10 pt-4">{title}</h1>
              <div className="text-palette-brown/60 mb-4 md:mb-8">
                Last updated: <span className="px-2">{dateString}</span>
              </div>
              <div>
                <p className="mb-3 text-palette-brown first-line:uppercase first-line:tracking-widest first-letter:text-2xl first-letter:font-bold first-letter:text-palette-red">
                  {summary}
                </p>
              </div>
              <div className="mdx-container">
                <MDXRemote
                  source={content}
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
        <BlogList posts={morePosts} variant="small" />
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
