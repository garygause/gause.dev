'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/admin' },
  {
    name: 'Contacts',
    href: '/admin/contacts',
  },
  {
    name: 'Posts',
    href: '/admin/posts',
  },
  {
    name: 'Projects',
    href: '/admin/projects',
  },
  { name: 'Users', href: '/admin/users' },
  {
    name: 'Library',
    href: '/admin/library',
  },
  { name: 'Main Site', href: '/' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 text-white p-4 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start md:p-2 md:px-6',
              {
                'text-palette-brown dark:text-palette-brown':
                  pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
