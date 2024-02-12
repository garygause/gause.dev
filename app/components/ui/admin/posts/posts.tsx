import React from 'react';
import Link from 'next/link';

import { FormattedPostsTable } from '@/app/lib/definitions';

async function PostsTable({ posts }: { posts: FormattedPostsTable[] }) {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-start items-center md:space-x-5">
        <h1 className=" text-xl md:text-2xl">Posts</h1>
        <div className="flex">
          <Link className="text-lg" href="posts/edit">
            [+]
          </Link>
        </div>
      </div>{' '}
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Id
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Summary
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Slug
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Featured
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      &nbsp;
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {posts?.map((post) => (
                    <tr key={post._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{post._id}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{post.title}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{post.summary}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {post.slug}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {post.featured}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {post.status}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm space-x-5">
                        <Link href={`posts/edit/${post._id}`}>Edit</Link>
                        <Link href={`posts/delete/${post._id}`}>Delete</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsTable;
