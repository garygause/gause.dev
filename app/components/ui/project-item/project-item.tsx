import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/app/lib/definitions';

function ProjectItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-transparent rounded-md hover:border-palette-red"
    >
      <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6  justify-center">
        <div className="lg:w-1/2 flex items-center justify-center">
          <Image
            src={project.imageSrc}
            width={+project.imageWidth}
            height={+project.imageHeight}
            alt={project.imageAlt}
            className="border-palette-red border-2 rounded-xl shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50"
          />
        </div>
        <div className="lg:w-1/2 lg:px-6 space-y-6">
          <h3 className="text-2xl ">{project.title}</h3>
          <div className="space-y-6">
            <p>
              Stack:{' '}
              <span className="text-palette-red dark:text-palette-brown">
                {project.stack}
              </span>
            </p>
            <p>{project.summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
