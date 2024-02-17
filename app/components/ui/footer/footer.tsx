import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full text-palette-white bg-palette-gray dark:bg-palette-matte py-6 px-8">
      <div className="container mx-auto flex flex-col justify-center items-center space-y-4 md:space-y-0 md:flex-row md:justify-start">
        <div className="">&copy; Gary Gause 2024</div>
        <div className="grow flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <div className="pr-2">
              <Image src="/code.svg" width="24" height="24" alt="logo" />
            </div>
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-palette-brown"
            target="_blank"
            href="https://github.com/garygause/gause.dev"
          >
            Source Code
          </Link>
        </div>
      </div>
    </footer>
  );
}
