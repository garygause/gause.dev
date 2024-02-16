import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import rehypeHighlight from 'rehype-highlight';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getPostBySlug, getPublishedPosts } from '@/app/lib/api-client';
import ShareList from '@ui/share-list';
import MDXImage from '@ui/mdx-image';
import BlogList from '@ui/blog-list';

import './page.css';

const components = {
  MDXImage,
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
  console.log(params.slug.slice(-1));

  const allPosts = await getPublishedPosts();
  const morePosts = allPosts.data?.slice(0, 4);
  const post = await getPostBySlug(params.slug.slice(-1));
  const {
    _id,
    title,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    keywords,
    summary,
    content,
    date,
    shares,
  } = post.data;

  const pageUrl = 'https://gause.dev';

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
                  src={imageSrc}
                  width={+imageWidth}
                  height={+imageHeight}
                  alt={imageAlt}
                  className="md:rounded-md "
                />
              </div>
            </div>
          </div>
          <div className="py-4 mr-6 flex flex-row items-start">
            <ShareList shares={shares} url={pageUrl} />
            <div className="ml-4 md:ml-8 relative max-w-2xl">
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
