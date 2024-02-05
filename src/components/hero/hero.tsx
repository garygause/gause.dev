import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section>
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
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <div className="flex flex-wrap justify-center p-14 md:p-14 lg:p-0 xl:p-0">
            <Image
              src="/photo.jpg"
              alt="Photo Gary Gause"
              height="380"
              width="380"
              className="shadow-lg rounded-full max-w-full  h-auto align-middle border-none"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-0 md:pt-10 md:space-x-3 items-center space-y-5 md:space-y-0">
          <Link
            href="mailto:garygause@gmail.com"
            target="_blank"
            className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
          >
            garygause@gmail.com
          </Link>
          <span className="hidden md:flex">|</span>
          <Link
            href="phone:3607229772"
            target="_blank"
            className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
          >
            360.722.9772
          </Link>
          <span className="hidden md:flex">|</span>
          <Link
            href="https://github.com/garygause"
            target="_blank"
            className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
          >
            github/garygause
          </Link>
          <span className="hidden md:flex">|</span>
          <Link
            href="https://linkedin.com/in/garygause"
            target="_blank"
            className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
          >
            in/garygause
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
