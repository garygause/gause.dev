import React from 'react';
import Image from 'next/image';
import { LibraryImage } from '@/app/lib/definitions';

type Props = {
  libraryImage: string;
  libraryImageData?: LibraryImage;
  title: string;
  author: string;
  content: string;
  children?: React.ReactNode;
};

function BlogPost(props: Props) {
  const { libraryImage, libraryImageData, title, author, content, children } =
    props;

  return (
    <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6  justify-center">
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src={libraryImageData?.path || '/images/blog/default.png'}
          width={Number(libraryImageData?.width) || 500}
          height={Number(libraryImageData?.height) || 500}
          alt={libraryImageData?.alt || 'default image'}
          className="border-palette-red border-2 rounded-xl shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50"
        />
      </div>
      <div className="lg:w-1/2 lg:px-6 space-y-6">
        <h3 className="text-2xl ">{title}</h3>
        <div className="space-y-6">
          <p>
            Author:{' '}
            <span className="text-palette-red dark:text-palette-brown">
              {author}
            </span>
          </p>
          <p>{content}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
