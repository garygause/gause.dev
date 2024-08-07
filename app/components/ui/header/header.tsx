'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import ThemeSwitcher from '@/app/components/ui/theme-switcher';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="w-full mx-auto bg-palette-gray dark:bg-palette-matte px-8 sticky top-0 z-30 backdrop-blur-md text-white dark:text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <div className="pr-2">
                <Image src="/code.svg" width="24" height="24" alt="logo" />
              </div>

              <div className="text-xl font-bold w-auto z-50">gause.dev</div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/contact"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              Contact Me
            </Link>
            <Link
              href="/portfolio"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
            >
              About
            </Link>
            {status === 'authenticated' && session?.user?.role === 'admin' && (
              <Link
                href="/admin"
                className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
              >
                Admin
              </Link>
            )}
            {status === 'authenticated' ? (
              <Link
                href="/admin"
                className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
              >
                {session?.user?.name}
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-base leading-6 font-medium text-secondary-500 hover:text-palette-brown border-transparent border-b-2 hover:border-palette-brown hover:border-b-palette-brown hover:border-b-2 focus:outline-none focus:text-palette-brown transition duration-300"
              >
                Login
              </Link>
            )}

            <span className="pt-1 w-16">
              <ThemeSwitcher />
            </span>
          </nav>
        </div>
      </div>

      <div
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-palette-white divide-y-2 divide-palette-black">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-palette-brown hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-300"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        stroke="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid gap-y-8">
                  <Link
                    href="/contact"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    <div className="text-base leading-6 font-medium text-palette-brown">
                      Contact Me
                    </div>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    <div className="text-base leading-6 font-medium text-palette-brown">
                      Portfolio
                    </div>
                  </Link>
                  <Link
                    href="/blog"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    <div className="text-base leading-6 font-medium text-palette-brown">
                      Blog
                    </div>
                  </Link>
                  <Link
                    href="/about"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition duration-300"
                    onClick={(e) => {
                      setOpen(false);
                    }}
                  >
                    <div className="text-base leading-6 font-medium text-palette-brown">
                      About
                    </div>
                  </Link>
                  <span className="pt-1 w-16">
                    <ThemeSwitcher />
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
