import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/app/lib/definitions';

function ProjectHero({ project }: { project: Project }) {
  const {
    title,
    stack,
    keywords,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    summary,
    description,
    slug,
  } = project;
  return (
    <Link
      href={`/projects/${slug}`}
      className="border border-transparent rounded-md hover:border-palette-red"
    >
      <div className="mb-10 p-6">
        <h1 className="text-6xl text-palette-red/10 md:pl-10">Featured</h1>
        <div className="flex w-full flex-wrap-reverse flex-col md:flex-row md:flex-nowrap md:gap-2 gap-6 md:justify-center rounded-lg">
          <div className="lg:w-1/3 py-10 space-y-4">
            <h3 className="text-2xl">{title}</h3>
            <div>
              Stack: <span className="text-palette-brown">{stack}</span>
            </div>
            <p>{summary}</p>
          </div>
          <div className="lg:w-2/3 flex items-center">
            <div className=" pl-100p pt-70p relative w-full h-full basis-0 grow-0 flex shrink justify-center overflow-hidden items-center">
              <div className="lg:w-1/2 flex items-center justify-center">
                <Image
                  src={project.imageSrc}
                  width={+project.imageWidth}
                  height={+project.imageHeight}
                  alt={project.imageAlt}
                  className="border-palette-red border-2 rounded-xl shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50"
                />
              </div>
              <div className="overflow-hidden">
                <div className="img-container">
                  <Image
                    src={imageSrc}
                    width={+imageWidth}
                    height={+imageHeight}
                    alt={imageAlt}
                    className="rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectHero;
