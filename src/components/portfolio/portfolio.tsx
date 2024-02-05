import React from 'react';
import Image from 'next/image';

export function Portfolio() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-10 mx-auto grid">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3>Project 1</h3>
              <div>
                <Image
                  src="/projects/powerline-1.png"
                  alt="Powerline project"
                  height="600"
                  width="600"
                  className="shadow-lg max-w-full  h-auto align-middle border-none"
                />
              </div>
            </div>
            <div>
              <h3>Project 2</h3>
              <div>
                <Image
                  src="/projects/powerline-1.png"
                  alt="Powerline project"
                  height="600"
                  width="600"
                  className="shadow-lg max-w-full  h-auto align-middle border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
