import React from 'react';

import { STATUS, JLPerson } from '@jade-and-lotus/jade-api-client';
import { savePersonForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';
import { Status } from '@jade-and-lotus/jade-ui';

export default async function PersonForm({
  person,
}: {
  person: JLPerson | null;
}) {
  const id = person?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={savePersonForm.bind(null, id)}
      >
        <div>
          <label htmlFor="firstName">
            First Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={person?.firstName}
            placeholder="First Name"
            className="dark:bg-palette-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={person?.lastName}
            placeholder="Last Name"
            className="dark:bg-palette-white dark:text-palette-black"
          />
        </div>
        <Status
          statuses={Object.values(STATUS)}
          selectedStatus={person?.status || STATUS.active}
        />
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.joblogsPeople}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Person</Button>
        </div>
      </form>
    </>
  );
}
