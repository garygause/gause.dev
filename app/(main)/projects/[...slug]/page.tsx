import React from 'react';
import Image from 'next/image';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { getProjectBySlug } from '@/app/lib/api-client';
import facebookIcon from '@/public/facebook.svg';
import twitterIcon from '@/public/twitter.svg';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { msg, success, data } = await getProjectBySlug(params.slug.slice(-1));
  const {
    _id,
    title,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    keywords,
    summary,
    description,
    date,
  } = data;

  const dateString = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
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
        <div className="py-4 flex flex-row items-start">
          <div>
            <div className="flex md:flex-col-reverse p-0 mr-0 mt-1">
              <div className="md:h-32 mt-5 flex-col w-14 justify-center items-center">
                <div className="flex flex-col justify-center items-center text-xs mb-5">
                  <h5 className="font-medium">13</h5>
                  <h6>Shares</h6>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="mr-0 mb-5">
                    <Image
                      className=""
                      priority
                      src={facebookIcon}
                      alt="facebook"
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="mr-0 mb-5">
                    <Image
                      className=""
                      priority
                      src={twitterIcon}
                      alt="twitter"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 md:ml-8 relative max-w-2xl">
            <h1 className="text-4xl pb-4 md:pb-10 pt-4">{title}</h1>
            <div className="text-palette-brown mb-4 md:mb-8">
              Last updated: <span className="px-2">{dateString}</span>
            </div>
            <MDXRemote source={description} />
          </div>
        </div>
      </div>
    </article>
  );
}
