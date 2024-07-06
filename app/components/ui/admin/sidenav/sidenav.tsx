import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ThemeSwitcher from '@ui/theme-switcher';
import siteIcon from '@/public/code.svg';
import UserNav from './user-nav';
import NavLinks from './nav-links';

export default async function SideNav() {
  return (
    <div className="flex h-full flex-col bg-palette-matte text-white dark:text-white">
      <div className="bg-palette-matte flex justify-center flex-col px-4 py-8 ">
        <Link href="/admin" className="flex items-center flex-col space-y-4">
          <Image
            src={siteIcon}
            width="44"
            height="44"
            alt="logo"
            className="invert"
          />
          <div className="text-2xl text-palette-jade ">gause.dev</div>
        </Link>
      </div>
      <NavLinks />
      <UserNav />
      <div>
        <div className=" p-4">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
