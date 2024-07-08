'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';

export default function NavLinks() {
  const [isDirectoryVisible, setIsDirectoryVisible] = useState(true);
  const [isBlogVisible, setIsBlogVisible] = useState(true);
  const [isS3Visible, setIsS3Visible] = useState(true);
  const [isChannelsVisible, setIsChannelsVisible] = useState(true);

  return (
    <>
      <div
        className="p-4 text-palette-jade text-xl hover:bg-palette-brown hover:text-white"
        onClick={() => setIsBlogVisible(!isBlogVisible)}
      >
        Blog
      </div>
      {isBlogVisible && (
        <>
          <Link
            key="Posts"
            href={PATHS.blogPosts}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Posts</p>
          </Link>
          <Link
            key="BlogSettings"
            href={`${PATHS.blogsEdit}/${process.env.JADE_BLOG_ID}`}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Settings</p>
          </Link>
        </>
      )}
      <div
        className="p-4 text-palette-jade text-xl hover:bg-palette-brown hover:text-white"
        onClick={() => setIsDirectoryVisible(!isDirectoryVisible)}
      >
        Directory
      </div>
      {isDirectoryVisible && (
        <>
          <Link
            key="Companies"
            href={PATHS.directoriesCompanies}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Companies</p>
          </Link>
          <Link
            key="Jobs"
            href={PATHS.directoriesJobs}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Jobs</p>
          </Link>
          <Link
            key="People"
            href={PATHS.directoriesPeople}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">People</p>
          </Link>
          <Link
            key="Websites"
            href={PATHS.directoriesWebsites}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Websites</p>
          </Link>
        </>
      )}
      <div
        className="p-4 text-palette-jade text-xl hover:bg-palette-brown hover:text-white"
        onClick={() => setIsS3Visible(!isS3Visible)}
      >
        S3
      </div>
      {isS3Visible && (
        <>
          <Link
            key="Buckets"
            href={PATHS.s3Buckets}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Buckets</p>
          </Link>
          <Link
            key="Files"
            href={PATHS.s3Files}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Files</p>
          </Link>
        </>
      )}
      <div
        className="p-4 text-palette-jade mt-8 text-xl hover:bg-palette-brown hover:text-white"
        onClick={() => setIsChannelsVisible(!isChannelsVisible)}
      >
        Channels
      </div>
      {isChannelsVisible && (
        <>
          <Link
            key="Website"
            href={'https://localhost:3000'}
            className="flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6"
          >
            <p className="hidden md:block">Main Site</p>
          </Link>
        </>
      )}
    </>
  );
}
