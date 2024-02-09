import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import githubIcon from '@/public/github-mark.svg';
import linkedinIcon from '@/public/linkedin.svg';

export function Hero() {
  return (
    <section className="border-b-2 border-palette-red">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-20 lg:pb-32 lg:grid-cols-12">
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
              className="shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50 rounded-full max-w-full  h-auto align-middle border-none"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pt-0 lg:pt-10 lg:space-x-4 items-center space-y-5 lg:space-y-0">
          <div className="inline-flex items-center justify-center space-x-4">
            <Link
              href="mailto:garygause@gmail.com"
              target="_blank"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              garygause@gmail.com
            </Link>
            <span>|</span>
            <Link
              href="phone:3607229772"
              target="_blank"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              360.722.9772
            </Link>
          </div>
          <span className="hidden lg:flex">|</span>
          <div className="inline-flex items-center justify-center space-x-6 md:space-x-4">
            <Link href="https://github.com/garygause" target="_blank">
              <Image
                className="max-w-6 dark:invert"
                priority
                src={githubIcon}
                alt="github"
              />
            </Link>
            <Link href="https://linkedin.com/in/garygause" target="_blank">
              <Image
                className="max-w-6 rounded dark:invert"
                priority
                src={linkedinIcon}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
