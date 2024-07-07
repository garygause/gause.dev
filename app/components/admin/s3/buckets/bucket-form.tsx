import React from 'react';
import Image from 'next/image';
import { S3Bucket } from '@jade-and-lotus/jade-api-client';
import { saveBucketForm } from './actions';

import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  PhotoIcon,
  UserCircleIcon,
  DocumentTextIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import Button from '@ui/button';
import { PATHS } from '@/app/lib/constants';

export default async function BucketForm({
  bucket,
}: {
  bucket: S3Bucket | null;
}) {
  const id = bucket?.id || '';

  return (
    <form action={saveBucketForm.bind(null, id)}>
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
                defaultValue={bucket?.name}
                placeholder="Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="isPublic" className="mb-2 block font-medium">
            isPublic:
          </label>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublic"
                  name="isPublic"
                  defaultChecked={bucket?.isPublic}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
        <Link
          href={PATHS.s3Buckets}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Bucket</Button>
      </div>
    </form>
  );
}
