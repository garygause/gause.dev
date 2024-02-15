import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/app/lib/definitions';
function BlogHero({ post }: { post: Post }) {
  const {
    _id,
    title,
    author,
    summary,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    slug,
  } = post;
  return (
    <Link
      href={`/blog/${slug}`}
      className="border border-transparent rounded-md hover:border-palette-red"
    >
      <div className="mb-10 p-6">
        <h1 className="text-6xl text-palette-red/10 md:pl-10">Featured</h1>
        <div className="flex w-full flex-wrap-reverse flex-col md:flex-row md:flex-nowrap md:gap-2 gap-6 md:justify-center rounded-lg">
          <div className="lg:w-1/3 py-10 space-y-4">
            <h3 className="text-2xl">{title}</h3>
            <p className="text-palette-brown">{summary}</p>
          </div>
          <div className="lg:w-2/3 flex items-center">
            <div className=" pl-100p pt-70p relative w-full h-full basis-0 grow-0 flex shrink justify-center overflow-hidden items-center">
              <div className="overflow-hidden">
                <div className="img-container">
                  <Image
                    src={imageSrc}
                    width={+imageWidth}
                    height={+imageHeight}
                    alt={imageAlt}
                    className="rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogHero;
