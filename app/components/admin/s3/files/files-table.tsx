import React from 'react';
import Image from 'next/image';

import { S3File } from '@jade-and-lotus/jade-api-client';
import { UpdateButton, DeleteButton } from '@jade-and-lotus/jade-ui';
import { PATHS } from '@/app/lib/constants';
import Link from 'next/link';

export default async function FilesTable({ files }: { files: S3File[] }) {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {files?.map((file) => (
                <div
                  key={file.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">{file?.fileName}</p>
                      <p>{file?.name}</p>
                      <p>{file?.alt}</p>
                      <p>
                        {file?.url && (
                          <Link
                            href={file?.url.replace(/jade-api/, 'localhost')}
                            target="_blank"
                          >
                            File
                          </Link>
                        )}
                      </p>
                      <p>{file?.bucket?.name}</p>
                      <p>{file?.size}</p>
                      <p>{file?.type}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateButton url={`${PATHS.s3FilesEdit}/${file.id}`} />
                      <DeleteButton url={`${PATHS.s3FilesDelete}/${file.id}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    File
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Alt
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Bucket
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Size
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Type
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {files?.map((file) => (
                  <tr
                    key={file.id}
                    className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {file?.url && (
                        <Link href={file?.url} target="_blank" className="">
                          <div className="rounded-md bg-white text-center">
                            {(file?.type === 'jpg' || file?.type === 'png') && (
                              <Image
                                src={file?.url || ''}
                                width={Number(file?.width) * 0.25}
                                height={Number(file?.height) * 0.25}
                                alt={file?.alt || 'default image'}
                                className="rounded-md"
                              />
                            )}
                            File
                          </div>
                        </Link>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{file.name}</td>
                    <td className="whitespace-nowrap px-3 py-3">{file?.alt}</td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {file.bucket?.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{file.size}</td>
                    <td className="whitespace-nowrap px-3 py-3">{file.type}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton url={`${PATHS.s3FilesEdit}/${file.id}`} />
                        <DeleteButton
                          url={`${PATHS.s3FilesDelete}/${file.id}`}
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
