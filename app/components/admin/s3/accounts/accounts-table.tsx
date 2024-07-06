import React from 'react';

import { DeleteButton, UpdateButton } from '@jade-and-lotus/jade-ui';
import { S3Account } from '@jade-and-lotus/jade-api-client';
import { PATHS } from '@/app/lib/constants';

export default async function S3AccountsTable({
  accounts,
}: {
  accounts: S3Account[];
}) {
  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {accounts?.map((account) => (
                <div
                  key={account.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p>{account.id}</p>
                      <p className="text-xl font-medium">{account.name}</p>
                      <p>{account.apiKey?.key}</p>
                      <p>{account.status}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <UpdateButton
                        url={`${PATHS.s3AccountsEdit}/${account.id}`}
                      />
                      <DeleteButton
                        url={`${PATHS.s3AccountsDelete}/${account.id}`}
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
                    Id
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    ApiKey
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Status
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {accounts?.map((account) => (
                  <tr
                    key={account.id}
                    className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {account.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {account.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {account.apiKey?.key}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {account.status}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateButton
                          url={`${PATHS.s3AccountsEdit}/${account.id}`}
                        />
                        <DeleteButton
                          url={`${PATHS.s3AccountsDelete}/${account.id}`}
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
