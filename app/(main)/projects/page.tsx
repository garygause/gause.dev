import React from 'react';
import type { Metadata } from 'next';

import ProjectList from '@ui/project-list';
import ProjectHero from '@ui/project-hero';

import { searchProjects } from '@/app/lib/mongodb';
import { Project } from '@/app/lib/definitions';

export const metadata: Metadata = {
  metadataBase: new URL('https://gause.dev'),
  title: 'gause.dev - Portfolio',
  description: 'Some of the projects I have done over the last 25+ years.',
  keywords:
    'freelance, web, mobile, development, next.js, react.js, javascript, typescript, tailwind css, css, html, react native, wordpress, enterprise, aws, architecture',
  creator: 'Gary Gause',
  robots: 'index follow',
  alternates: { canonical: 'https://gause.dev/portfolio' },
  openGraph: {
    title: 'gause.dev - Portfolio',
    description: 'Some of the projects I have done over the last 25+ years. ',
    url: 'https://gause.dev/portfolio',
    siteName: 'gause.dev',
    type: 'website',
    images: [
      {
        url: 'https://gause.dev/images/site-preview.png',
        secureUrl: 'https://gause.dev/images/site-preview.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for gause.dev',
      },
    ],
  },
};

export default async function ProjectsPage() {
  const data = await searchProjects({ status: 'published' });
  const featuredProject: Project = data?.shift();

  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
      <div className="mr-auto place-self-center ">
        <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
          Portfolio
        </h1>
        <div className="mb-10">
          Some of the projects I have done over the last 25+ years.
        </div>
        {(!data || data.length === 0) && <div>No results found.</div>}
        {data && data.length > 0 && (
          <div className="flex flex-col space-y-10">
            <ProjectHero project={featuredProject} />
            <ProjectList projects={data} />
          </div>
        )}
      </div>
    </div>
  );
}
