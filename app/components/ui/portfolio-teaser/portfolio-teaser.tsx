import React from 'react';
import Link from 'next/link';

import ProjectList from '@ui/project-list';
import { PortfolioItem, MultiImagePortfolioItem } from '../portfolio-item';
import { getPublishedProjects } from '@/app/lib/api-client';

export default async function PortfolioTeaser() {
  // this is cached by next fetch caching so it is quick enough to get all posts
  // TODO: limit posts as the number grows
  const { data } = await getPublishedProjects();
  const projects = data?.slice(0, 3);
  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div>
        <h1 className="md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl">
          Portfolio
        </h1>
        <div className="container mx-auto space-y-10">
          <PortfolioItem
            imageSrc="/projects/powerline-1.png"
            imageHeight={600}
            imageWidth={800}
            imageAlt="powerline project"
            title="Project: Powerline Analytics"
            stack="AWS ECS, Docker, AWS PostgreSQL RDS, Python/Flask API, Python ETL, React Web, Jupyter, Pandas, Matplotlib, Numpy"
            description="Advanced data science, data engineering, hardware and
                    software engineering project. Powerline brought smart sensor
                    technology to utilities and power line segments on a massive
                    scale with the goal of detecting line failure before it
                    happens in order to prevent forest fires."
          />
          <MultiImagePortfolioItem
            imageSrc="/projects/tvsupplier-1.png"
            imageHeight={500}
            imageWidth={250}
            imageAlt="tvsupplier project"
            imageSrc2="/projects/tvsupplier-2.png"
            imageHeight2={500}
            imageWidth2={250}
            imageAlt2="tvsupplier project"
            title="Project: TVSupplier App"
            stack="React Native, Android, Java, Python/Django, API"
            description="Written in React Native, this Android app allows a supplier to scan a QR code on an asset tracking tag and enter information about the asset being delivered to the job site. The asset tracking tag then communicates with remote boxes on the job site and notifies users when the asset has arrived on site and what dock it is at."
          />
          <MultiImagePortfolioItem
            imageSrc="/projects/jennylife-android.png"
            imageHeight={500}
            imageWidth={250}
            imageAlt="jennylife project"
            imageSrc2="/projects/jennylife-web.png"
            imageHeight2={500}
            imageWidth2={250}
            imageAlt2="jennylife project"
            title="Project: Jenny Life Mobile & Web"
            stack="AWS, NGINX, PostgreSQL, Lambda, Android, Java, RxJava2, Dagger2, Retrofit, React, Python, Django."
            description="For this project, I developed a native Android mobile app, a React web app, a Python/Django ReST API, interfaces to insurance carrier backends using SOAP/XML and Json, as well as an AWS architecture to support the business."
          />
        </div>
        <div className="mx-auto flex justify-center items-center w-full my-10">
          <Link
            className="text-2xl mb-10 border py-4 px-10 rounded-lg border-palette-red hover:bg-palette-brown hover:text-white"
            href="/portfolio"
          >
            Discover more
          </Link>
        </div>
      </div>
    </div>
  );
  {
    /* 
  return (
    <div className="max-w-screen-xl px-4 pt-10 mx-auto">
      <div>
        <h1 className="md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
          Portfolio
        </h1>
        <ProjectList projects={projects} />
      </div>
      <div className="mx-auto flex justify-center items-center w-full">
        <Link
          className="text-2xl mb-10 border py-4 px-10 rounded-lg border-palette-red hover:bg-palette-brown hover:text-white"
          href="/portfolio"
        >
          Discover more
        </Link>
      </div>
    </div>
  ); */
  }
}
