import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function BlogHero({ post }) {
  const { _id, title, author, summary, image, imageAlt, slug } = post;
  return (
    <Link href={`/blog/${slug}/${_id}`}>
      <div
        className={`flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6 justify-center rounded-lg border-2 border-palette-red`}
      >
        <div className="lg:w-1/2 py-10 pl-8 space-y-4">
          <h3 className="text-2xl hover:text-palette-brown ">{title}</h3>
          <div className="space-y-6">
            <p>
              Author:{' '}
              <span className="text-palette-red dark:text-palette-brown">
                {author}
              </span>
            </p>
            <p>{summary}</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-end">
          <Image
            src={image}
            width={500}
            height={500}
            alt={imageAlt}
            className="border-palette-red border-l-2 rounded-r-md "
          />
        </div>
      </div>
    </Link>
  );
}

export default BlogHero;
