import React from 'react';
import Image from 'next/image';

import PortfolioItem from '@/components/portfolio-item';

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
                <PortfolioItem
                  imageSrc="/projects/vendscreen-1.jpg"
                  imageHeight={500}
                  imageWidth={300}
                  imageAlt="vendscree project"
                  title="Project: VendScreen Realize App"
                  stack="Android, Java, C, NFC, Cellular, Payment Processing"
                  description="Android app that interfaced directly with vending machine
                    hardware to allow shopping cart selection of products and
                    multiple item checkout with credit card. Communicated via
                    cellular with cloud services to track inventory levels,
                    sales, and payment processing."
                >
                  <p>Winner of the Gold Innovation Award.</p>
                </PortfolioItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
