import React from 'react';

import ProjectList from '@ui/project-list';
import ProjectHero from '@ui/project-hero';

import { getProjects } from '@/app/lib/api-client';
import { Project } from '@/app/lib/definitions';

export default async function ProjectsPage() {
  const { msg, success, data } = await getProjects();
  const featuredProject: Project = data.shift();
  console.log(featuredProject);
  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
      <div className="mr-auto place-self-center ">
        <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
          Projects
        </h1>
        <div className="mb-10">
          Some of the projects I have done over the last 25+ years.
        </div>
        <div className="flex flex-col space-y-10">
          <ProjectHero project={featuredProject} />
          <ProjectList projects={data} />
        </div>
      </div>
    </div>
  );
}
