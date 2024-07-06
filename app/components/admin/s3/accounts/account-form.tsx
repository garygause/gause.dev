import React from 'react';

import { S3Account, S3STATUS } from '@jade-and-lotus/jade-api-client';
import { saveS3AccountForm } from './actions';
import { PATHS } from '@/app/lib/constants';

import Link from 'next/link';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import Button from '@ui/button';

export default async function S3AccountForm({
  account,
}: {
  account: S3Account | null;
}) {
  const id = account?.id || '';

  return (
    <form action={saveS3AccountForm.bind(null, id)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-medium">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={account?.name}
                placeholder="Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="mb-2 block font-medium">Status:</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="status"
                  type="radio"
                  value={S3STATUS.inactive}
                  defaultChecked={account?.status === S3STATUS.inactive}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                >
                  Inactive <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="active"
                  name="status"
                  type="radio"
                  value={S3STATUS.active}
                  defaultChecked={account?.status === S3STATUS.active}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-sm font-medium text-white"
                >
                  Active <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="deleted"
                  name="status"
                  type="radio"
                  value={S3STATUS.deleted}
                  defaultChecked={account?.status === S3STATUS.deleted}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="deleted"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-palette-red px-3 py-1.5 text-sm font-medium text-white"
                >
                  Deleted <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
        <Link
          href={PATHS.dashboard}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Account</Button>
      </div>
    </form>
  );
}
