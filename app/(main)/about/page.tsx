import React from 'react';
import Image from 'next/image';

export default function AboutHomePage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="py-10 px-4">
          <h1 className="text-4xl md:text-5xl pb-10">About Me</h1>
          <p className="mb-3 text-palette-brown first-line:uppercase first-line:tracking-widest first-letter:text-2xl first-letter:font-bold first-letter:text-palette-red">
            Currently a freelancer working on my favorite projects, I have a
            long history in software development.
          </p>
          <p className="mb-3">
            I have been a software engineer, manager, architect, and even
            CEO/CTO at startups for over 25 years, dating back to the birth of
            the internet itself.
          </p>
          <p className="mb-3">
            I was a founding engineer at several successful startups including
            Classmates.com, The Cobalt Group, VendScreen and more, helping grow
            the companies from concept to enterprise-scale to IPO and sale.
          </p>
          <p className="mb-3">
            While I focus mainly on web development now, I have been and
            continue to be very active in mobile development as well, having won
            awards for the apps I develop.
          </p>
          <p className="mb-3 text-lg">
            Whatever your development needs, I have the experience and the
            expertise to help make it a reality!
          </p>
          <div className="flex flex-wrap justify-center mt-12 p-14 md:p-14 lg:p-0 xl:p-0">
            <Image
              src="/gary_coffee.jpeg"
              width="300"
              height="300"
              alt="gary coffee"
              className="shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50 rounded-full max-w-full h-auto align-middle "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
