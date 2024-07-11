import React from 'react';

import { UpdateButton, DeleteButton } from '@jade-and-lotus/jade-ui';
import { JLJob } from '@jade-and-lotus/jade-api-client';
import { PATHS } from '@/app/lib/constants';
import Link from 'next/link';
import { formatDateToLocal } from '@/app/lib/utils';

export default async function JobsTable({ jobs }: { jobs: JLJob[] }) {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {jobs?.map((job) => (
                <div
                  key={job.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">{job?.title}</p>
                    </div>
                    <div>
                      <Link href={job?.url || ''} target="_blank">
                        <p className="text-xl font-medium">{job?.url}</p>
                      </Link>
                    </div>
                    <div>
                      <Link href={job?.company?.url || ''} target="_blank">
                        <p className="text-xl font-medium">
                          {job?.company?.name || 'Company'}
                        </p>
                      </Link>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateButton
                        url={`${PATHS.joblogsJobsEdit}/${job.id}`}
                      />
                      <DeleteButton
                        url={`${PATHS.joblogsJobsDelete}/${job.id}`}
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
                    URL
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Company
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Date Published
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
                {jobs?.map((job) => (
                  <tr
                    key={job.id}
                    className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">{job.title}</td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link href={job?.url || ''} target="_blank">
                        Listing
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link href={job?.company?.url || ''} target="_blank">
                        {job?.company?.name || 'Company'}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(job.datePublished)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {job.status}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton
                          url={`${PATHS.joblogsJobsEdit}/${job.id}`}
                        />
                        <DeleteButton
                          url={`${PATHS.joblogsJobsDelete}/${job.id}`}
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
