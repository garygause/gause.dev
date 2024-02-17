import type { MDXComponents } from 'mdx/types';

// this only works for .mdx pages, not mdxremote
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h3: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    ...components,
  };
}
