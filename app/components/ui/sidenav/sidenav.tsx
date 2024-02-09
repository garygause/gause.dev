'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import NavLinks from '@/app/components/ui/nav-links';
import ThemeSwitcher from '@/app/components/ui/theme-switcher';
import SignOutButton from '@/app/components/signout-button/signout-button';

export default function SideNav() {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);
  return (
    <div className="flex h-full flex-col  bg-palette-matte text-white dark:text-white">
      <div className="bg-palette-matte">
        <div className="px-4 pt-8 flex items-center">
          <Link href="/" className="flex items-center">
            <div className="pr-2">
              <Image src="/code.svg" width="24" height="24" alt="logo" />
            </div>
            <div className="text-xl font-bold w-auto text-white dark:text-white">
              gause.dev
            </div>
          </Link>
        </div>
        <div className="text-red-600 justify-center flex font-bold text-xl mt-8 mb-4">
          Admin
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-0">
        <NavLinks />

        <div className="hidden h-auto w-full flex-1 md:block"></div>
        <div className="border-b border-t border-palette-brown">
          <SignOutButton />
        </div>
      </div>
      <div>
        <div className=" p-4">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
