import React from 'react';
import Image from 'next/image';
import { Post } from '@jade-and-lotus/jade-api-client';

type Props = {
  post: Post;
  children?: React.ReactNode;
};

export default function BlogPost(props: Props) {
  const post = props.post;

  return (
    <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6  justify-center">
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src={post?.image?.url || '/images/blog/default.png'}
          width={Number(post.image?.width) || 500}
          height={Number(post.image?.height) || 500}
          alt={post.image?.alt || 'default image'}
          className="border-palette-red border-2 rounded-xl shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50"
        />
      </div>
      <div className="lg:w-1/2 lg:px-6 space-y-6">
        <h3 className="text-2xl ">{post.title}</h3>
        <div className="space-y-6">
          <p>
            Author:{' '}
            <span className="text-palette-red dark:text-palette-brown">
              Gary Gause
            </span>
          </p>
          <p>{post.content}</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}
