'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import LoginForm from '@ui/login-form';
import AuthForm from '@/app/components/auth-form';

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log('login page:');
  console.log(session);
  console.log(status);

  // FIXME: authenticated only occurs after page reload
  if (status === 'authenticated') {
    router.replace('/admin');
  }

  return (
    <main className="flex items-center justify-center md:h-screen rounded-md">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col  p-4 md:-mt-32">
        <div className="bg-palette-matte rounded-t-lg">
          <div className="py-8 flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <div className="pr-2">
                <Image src="/code.svg" width="24" height="24" alt="logo" />
              </div>
              <div className="text-xl font-bold w-auto text-white dark:text-white">
                gause.dev
              </div>
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
