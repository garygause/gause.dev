import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-palette-white dark:bg-palette-gray">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Enterprise Grade Software Development
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Web to mobile, personal to enterprise, professional software
            development at freelance prices done by me, Gary Gause, personally.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-palette-red hover:bg-palette-brown focus:ring-4 focus:ring-palette-brown"
          >
            Contact Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-palette-brown rounded-lg hover:bg-palette-brown hover:text-white focus:ring-4 focus:ring-palette-brown dark:text-white dark:border-palette-brown"
          >
            Portfolio
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="flex flex-wrap justify-center">
            <Image
              src="/photo.jpg"
              alt="Photo Gary Gause"
              height="400"
              width="400"
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
