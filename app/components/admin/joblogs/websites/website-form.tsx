import React from 'react';

import { JLWebsite, STATUS } from '@jade-and-lotus/jade-api-client';
import { Status } from '@jade-and-lotus/jade-ui';
import { saveWebsiteForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';

export default async function WebsiteForm({
  website,
}: {
  website: JLWebsite | null;
}) {
  const id = website?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveWebsiteForm.bind(null, id)}
      >
        <div>
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={website?.name}
            placeholder="Name"
            className="dark:bg-palette-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="url">
            URL: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="url"
            name="url"
            defaultValue={website?.url}
            placeholder="URL"
            className="dark:bg-palette-white dark:text-palette-black"
          />
        </div>
        <Status
          statuses={Object.values(STATUS)}
          selectedStatus={website?.status || STATUS.active}
        />
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.joblogsWebsites}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Website</Button>
        </div>
      </form>
    </>
  );
}
