import React from 'react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  author: string;
  content: string;
  children?: React.ReactNode;
};

function BlogPost(props: Props) {
  const {
    imageSrc,
    imageWidth,
    imageHeight,
    imageAlt,
    title,
    author,
    content,
    children,
  } = props;

  return (
    <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6  justify-center">
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
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
