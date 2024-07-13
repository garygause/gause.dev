import Hero from '@ui/hero';
import Expertise from '@ui/expertise';
import PortfolioTeaser from '@ui/portfolio-teaser';
import { BlogTeaser } from '@ui/blog';

import { getJadeClient } from '@lib/client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const client = getJadeClient();
  const { data: posts, meta } = await client.blogs.searchPosts(
    'status=published&limit=3&orderby=isFeatured desc'
  );
  console.log('SEARCH POSTS: ', meta);
  return (
    <>
      <Hero />
      <BlogTeaser posts={posts} />
      <Expertise />
      <PortfolioTeaser />
    </>
  );
}
