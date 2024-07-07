import React from 'react';

import { UpdateButton, DeleteButton } from '@jade-and-lotus/jade-ui';
import { Website } from '@jade-and-lotus/jade-api-client';
import { PATHS } from '@/app/lib/constants';

export default async function WebsitesTable({
  websites,
}: {
  websites: Website[];
}) {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {websites?.map((website) => (
                <div
                  key={website.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">{website?.name}</p>
                    </div>
                    <div>
                      <p className="text-xl font-medium">{website?.url}</p>
                    </div>
                    <div>
                      <p className="text-xl font-medium">{website?.slug}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateButton
                        url={`${PATHS.directoriesWebsitesEdit}/${website.id}`}
                      />
                      <DeleteButton
                        url={`${PATHS.directoriesWebsitesDelete}/${website.id}`}
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
                    Name
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    URL
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Slug
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {websites?.map((website) => (
                  <tr
                    key={website.id}
                    className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {website.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {website.url}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {website.slug}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton
                          url={`${PATHS.directoriesWebsitesEdit}/${website.id}`}
                        />
                        <DeleteButton
                          url={`${PATHS.directoriesWebsitesDelete}/${website.id}`}
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
