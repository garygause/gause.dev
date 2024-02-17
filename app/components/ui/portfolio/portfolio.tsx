import React from 'react';

import {
  PortfolioItem,
  MultiImagePortfolioItem,
} from '@/app/components/ui/portfolio-item';

export function Portfolio() {
  return (
    <section>
      <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl md:mb-10 mb-8 text-4xl tracking-tight md:text-5xl dark:text-white">
            Portfolio
          </h1>
          <div className="mb-10">
            Some of the projects I have done over the last 25+ years. More
            available on request.
          </div>
          <div>
            <div className="w-full">
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
                <MultiImagePortfolioItem
                  imageSrc="/projects/fanwide-android.jpg"
                  imageHeight={500}
                  imageWidth={250}
                  imageAlt="fanwide project"
                  imageSrc2="/projects/fanwide-android2.jpg"
                  imageHeight2={500}
                  imageWidth2={250}
                  imageAlt2="fanwide project"
                  title="Project: FanWide Android App"
                  stack="Android, Java"
                  description="For this project, I developed an Android app that allows
                        fans to find and join sporting watch parties at local
                        venues."
                />
                <MultiImagePortfolioItem
                  imageSrc="/projects/vendscreen-1.jpg"
                  imageHeight={500}
                  imageWidth={250}
                  imageAlt="vendscreen project"
                  imageSrc2="/projects/vendscreen-2.jpg"
                  imageHeight2={500}
                  imageWidth2={250}
                  imageAlt2="vendscreen project"
                  title="Project: VendScreen Realize App"
                  stack="Android, Java, C, NFC, Cellular, Payment Processing"
                  description="Android app that interfaced directly with vending machine
                    hardware to allow shopping cart selection of products and
                    multiple item checkout with credit card. Communicated via
                    cellular with cloud services to track inventory levels,
                    sales, and payment processing."
                >
                  <p>Winner of the Gold Innovation Award.</p>
                </MultiImagePortfolioItem>
                <PortfolioItem
                  imageSrc="/projects/pflag.png"
                  imageHeight={600}
                  imageWidth={550}
                  imageAlt="pflag project"
                  title="Project: PFLAG Website"
                  stack="HTML, CSS, Git, Apache, Linode."
                  description="For this project, I developed a website for the Stanwood-Camano chapter of PFLAG, an LGBTQIA+ support organization. I also host and maintain the site on an ongoing basis."
                />
                <PortfolioItem
                  imageSrc="/projects/freedompark.png"
                  imageHeight={600}
                  imageWidth={550}
                  imageAlt="freedompark project"
                  title="Project: Freedom Park Website"
                  stack="Wordpress, HTML, CSS, Git, Apache, Linode."
                  description="For this project, I developed a website for the Freedom Park Assocation, a group that supports and maintains the privately funded Freedom Park on Camano Island. I also host and maintain the site on an ongoing basis."
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
