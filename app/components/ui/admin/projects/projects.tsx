import React from 'react';
import Link from 'next/link';

import {
  ProjectsTableType,
  FormattedProjectsTable,
} from '@/app/lib/definitions';

export async function ProjectsTable({
  projects,
}: {
  projects: FormattedProjectsTable[];
}) {
  return (
    <div className="w-full">
      <div className="mb-8 flex justify-start items-center md:space-x-5">
        <h1 className=" text-xl md:text-2xl">Projects</h1>
        <div className="flex">
          <Link className="text-lg" href="projects/edit">
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
                      Stack
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      &nbsp;
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {projects?.map((project) => (
                    <tr key={project._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{project._id}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{project.title}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {project.stack}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm space-x-5">
                        <Link href={`projects/edit/${project._id}`}>Edit</Link>
                        <Link href={`projects/delete/${project._id}`}>
                          Delete
                        </Link>
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

export default ProjectsTable;
