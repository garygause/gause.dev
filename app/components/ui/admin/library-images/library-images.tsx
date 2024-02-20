import React from 'react';
import Link from 'next/link';

import { FormattedLibraryImagesTable } from '@/app/lib/definitions';

async function LibraryImagesTable({
  images,
}: {
  images: FormattedLibraryImagesTable[];
}) {
  return (
    <div className="w-full">
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
                      Alt
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Path
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Size
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
                  {images?.map((image) => (
                    <tr key={image._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{image._id}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{image.title}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {image.alt}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {image.path}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {image.size}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {image.status}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm space-x-5">
                        <Link href={`library/edit/${image._id}`}>Edit</Link>
                        <Link href={`library/delete/${image._id}`}>Delete</Link>
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

export default LibraryImagesTable;
