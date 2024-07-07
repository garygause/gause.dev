import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.jadeandlotus.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'http',
        hostname: 'api.jadeandlotus.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/static/**',
      },
      {
        protocol: 'http',
        hostname: 'jade-api',
        port: '3001',
        pathname: '/static/**',
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
