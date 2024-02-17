import Hero from '@ui/hero';
import Expertise from '@ui/expertise';
import PortfolioTeaser from '@ui/portfolio-teaser';
import BlogTeaser from '@ui/blog-teaser';

export default async function Home() {
  return (
    <>
      <Hero />
      <BlogTeaser />
      <Expertise />
      <PortfolioTeaser />
    </>
  );
}

/**
 * hero section
 * services
 * featured projects
 * partners
 * testimonials
 * contact
 */
