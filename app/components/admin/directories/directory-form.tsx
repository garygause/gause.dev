import React from 'react';

import { Directory } from '@jade-and-lotus/jade-api-client';
import { saveDirectoryForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '../../ui/button';

export default async function DirectoryForm({
  directory,
}: {
  directory: Directory | null;
}) {
  const id = directory?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveDirectoryForm.bind(null, id)}
      >
        <div>
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={directory?.name}
            placeholder="Name"
            className="dark:bg-palette-white dark:text-palette-black"
          />
        </div>
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.home}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Directory</Button>
        </div>
      </form>
    </>
  );
}
