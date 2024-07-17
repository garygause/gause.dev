import React from 'react';

import { BLOGSTATUS, Blog } from '@jade-and-lotus/jade-api-client';
import { saveBlogForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';
import { Status } from '@jade-and-lotus/jade-ui';
import { MetaFields } from '@ui/meta-fields';

export default async function BlogForm({ blog }: { blog: Blog | null }) {
  const id = blog?.id || '';

  return (
    <form action={saveBlogForm.bind(null, id)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={blog?.name}
            placeholder="Name"
            className="w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
          />
        </div>
        <MetaFields
          title={blog?.metaTitle}
          url={blog?.metaUrl}
          keywords={blog?.metaKeywords}
          description={blog?.metaDescription}
          isVisible={true}
        />
        <Status
          statuses={Object.values(BLOGSTATUS)}
          selectedStatus={blog?.status || BLOGSTATUS.active}
        />
      </div>
      <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
        <Link
          href={PATHS.home}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Blog</Button>
      </div>
    </form>
  );
}
