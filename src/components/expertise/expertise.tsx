import React from 'react';
import Link from 'next/link';

export function Expertise() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 pt-10 mx-auto">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
            Expertise
          </h1>
          <h3 className="text-3xl mb-6 font-light">Frontend</h3>
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10 mb-10">
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown hover:bg-palette-brown hover:text-white"
            >
              Next
            </Link>
            <Link
              href="https://react.dev/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown hover:bg-palette-brown hover:text-white"
            >
              React
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Typescript
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Javascript
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Tailwind CSS
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              CSS
            </Link>
          </div>
          <h3 className="text-3xl mb-6 font-light">Backend</h3>
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10 mb-10 w-full">
            <Link
              href="https://www.python.org/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown hover:bg-palette-brown hover:text-white"
            >
              Python
            </Link>
            <Link
              href="https://fastapi.tiangolo.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              FastAPI
            </Link>
            <Link
              href="https://www.mongodb.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              MongoDB
            </Link>
            <Link
              href="https://www.postgresql.org/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              PostgreSQL
            </Link>
          </div>
          <h3 className="text-3xl mb-6 font-light">Architecture</h3>
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10 mb-10">
            <Link
              href="https://en.wikipedia.org/wiki/Systems_design#:~:text=Systems%20design%20is%20therefore%20the,subsequent%20interaction%20with%20one%20another."
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown hover:bg-palette-brown hover:text-white"
            >
              System Design
            </Link>
            <Link
              href="https://aws.amazon.com/what-is/iac/#:~:text=Infrastructure%20as%20code%20(IaC)%20is,%2C%20database%20connections%2C%20and%20storage."
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Iac
            </Link>
            <Link
              href="https://www.pulumi.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Pulumi
            </Link>
            <Link
              href="https://aws.amazon.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              AWS
            </Link>
          </div>
          <h3 className="text-3xl mb-6 font-light">Mobile</h3>
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10 mb-10">
            <Link
              href="https://developer.android.com/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown hover:bg-palette-brown hover:text-white"
            >
              Android
            </Link>
            <Link
              href="https://developer.apple.com/ios/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              iOS
            </Link>
            <Link
              href="https://reactnative.dev/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              React Native
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Java_(programming_language)"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Java
            </Link>
            <Link
              href="https://developer.apple.com/swift/"
              target="_blank"
              className="border rounded px-6 py-2 border-palette-brown  hover:bg-palette-brown hover:text-white"
            >
              Swift
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
