import Hero from '@ui/hero';
import Expertise from '@ui/expertise';
import PortfolioTeaser from '@ui/portfolio-teaser';
import { BlogTeaser } from '@ui/blog';

import { getJadeClient } from '@lib/client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const client = getJadeClient();
  const { data: posts, meta } = await client.blogs.searchPosts(
    'limit=3&status=published'
  );
  return (
    <>
      <Hero />
      <BlogTeaser posts={posts} />
      <Expertise />
      <PortfolioTeaser />
    </>
  );
}
