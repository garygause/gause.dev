import React from 'react';

import { UpdateButton, DeleteButton } from '@jade-and-lotus/jade-ui';
import { JLApplication } from '@jade-and-lotus/jade-api-client';
import { PATHS } from '@/app/lib/constants';
import Link from 'next/link';
import { formatDateToLocal } from '@/app/lib/utils';

export default async function ApplicationsTable({
  applications,
}: {
  applications: JLApplication[];
}) {
  const formattedDate = '';

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {applications?.map((app) => (
              <div key={app.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{app?.title}</p>
                  </div>
                  <div>
                    <p className="">{app?.job?.company?.name}</p>
                  </div>
                  <div>
                    <Link
                      href={app.jobUrl || app.job?.url || ''}
                      target="_blank"
                    >
                      <p className="">Listing</p>
                    </Link>
                  </div>
                  <div>{formatDateToLocal(app.dateApplied)}</div>
                  <div>{formatDateToLocal(app.dateInterviewed)}</div>
                  <div>{app.status}</div>
                  <div className="flex justify-end gap-2">
                    <UpdateButton url={`${PATHS.joblogsAppsEdit}/${app.id}`} />
                    <DeleteButton
                      url={`${PATHS.joblogsAppsDelete}/${app.id}`}
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
                  Company
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Listing
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Date Applied
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Date Interviewed
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
              {applications?.map((app) => (
                <tr
                  key={app.id}
                  className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{app.title}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {app.job?.company?.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Link
                      href={app.jobUrl || app.job?.url || ''}
                      target="_blank"
                    >
                      <p className="whitespace-nowrap px-3 py-3">Listing</p>
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(app.dateApplied)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(app.dateInterviewed)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{app.status}</td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateButton
                        url={`${PATHS.joblogsAppsEdit}/${app.id}`}
                      />
                      <DeleteButton
                        url={`${PATHS.joblogsAppsDelete}/${app.id}`}
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
  );
}
