import React from 'react';

import { signOutUser } from '@/app/lib/actions';

export default function SignOutButton() {
  return (
    <form action={signOutUser}>
      <button className="pl-4 flex h-[48px] w-full grow items-center justify-center gap-2 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start">
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  );
}
