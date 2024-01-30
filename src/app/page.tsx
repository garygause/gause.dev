import Image from 'next/image';

import Header from '@ui/header/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Header />

      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <img src="/code.svg" className="w-24 lg:w-48" alt="logo image" />
            </a>
          </div>
        </div>
        <h1>header</h1>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/code.svg"
            alt="logo"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
          <a href="/">
            <span className="pl-2">gause.dev</span>
          </a>
        </div>
      </div>
    </main>
  );
}
