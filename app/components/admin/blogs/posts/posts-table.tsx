import React from 'react';

import { UpdateButton, DeleteButton } from '@jade-and-lotus/jade-ui';
import { Post } from '@jade-and-lotus/jade-api-client';
import { PATHS } from '@/app/lib/constants';

export default async function PostsTable({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {posts?.map((post) => (
                <div
                  key={post.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">{post?.title}</p>
                      <p className="text-xl font-medium">{post?.slug}</p>
                      <p className="text-xl font-medium">{post?.keywords}</p>
                    </div>
                    <div>
                      <p className="text-xl font-medium">
                        {post?.isFeatured ? 'Featured' : ''}
                      </p>
                      <p className="text-xl font-medium">{post?.viewsCount}</p>
                      <p className="text-xl font-medium">{post?.sharesCount}</p>
                    </div>
                    <div>
                      <p className="text-xl font-medium">{post?.status}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateButton url={`${PATHS.blogPostsEdit}/${post.id}`} />
                      <DeleteButton
                        url={`${PATHS.blogPostsDelete}/${post.id}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Slug
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Keywords
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Featured
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Views
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Shares
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Status
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {posts?.map((post) => (
                  <tr
                    key={post.id}
                    className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{post.slug}</td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.keywords}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post?.isFeatured ? 'Featured' : ''}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.viewsCount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.sharesCount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.status}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton
                          url={`${PATHS.blogPostsEdit}/${post.id}`}
                        />
                        <DeleteButton
                          url={`${PATHS.blogPostsDelete}/${post.id}`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
