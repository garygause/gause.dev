import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/app/lib/definitions';

type Props = {
  post: Post;
  variant?: 'small' | 'medium' | 'large';
};

function BlogListItem(props: Props) {
  const { _id, title, author, summary, libraryImage, libraryImageData, slug } =
    props.post;

  const small = props.variant && props.variant === 'small';

  return (
    <Link
      href={`/blog/${slug}`}
      className="border border-transparent rounded-md hover:border-palette-red"
    >
      <div className="p-0 w-full list-container-transtion">
        <div className="h-full flex flex-col justify-start overflow-hidden mx-auto max-w-6xl relative">
          <div className="mb-5 pt-70p relative w-full h-full basis-0 grow-0 flex shrink justify-center overflow-hidden items-center">
            <div>
              <div className="overflow-hidden">
                <div className="img-container">
                  <Image
                    src={libraryImageData?.path || '/images/blog/default.png'}
                    width={Number(libraryImageData?.width) || 500}
                    height={Number(libraryImageData?.height) || 500}
                    alt={libraryImageData?.alt || 'default image'}
                    className="rounded-t-md "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <h3 className="relative m-0 p-0 font-medium">{title}</h3>
            {!small && (
              <p className="mt-4 relative text-palette-brown">{summary}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogListItem;
