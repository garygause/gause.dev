import React from 'react';
import Image from 'next/image';
import { S3Bucket, S3File } from '@jade-and-lotus/jade-api-client';
import { saveFileForm } from './actions';

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

export default async function FileForm({
  file,
  buckets,
}: {
  file: S3File | null;
  buckets: S3Bucket[];
}) {
  const id = file?.id || '';

  return (
    <form action={saveFileForm.bind(null, id)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="bucketId">
            Bucket: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative">
            <select
              defaultValue={file?.bucketId}
              id="bucketId"
              name="bucketId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
            >
              {buckets?.map((bucket) => (
                <option key={bucket.id} value={bucket.id}>
                  {bucket.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
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
                defaultValue={file?.name}
                placeholder="Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="credit" className="mb-2 block font-medium">
            Credit:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="credit"
                name="credit"
                type="text"
                defaultValue={file?.credit}
                placeholder="Credit"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="creditUrl" className="mb-2 block font-medium">
            Credit Url:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="creditUrl"
                name="creditUrl"
                type="text"
                defaultValue={file?.creditUrl}
                placeholder="Credit Url"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="alt" className="mb-2 block font-medium">
            Alt: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="alt"
                name="alt"
                type="text"
                defaultValue={file?.alt}
                placeholder="Alt"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        {file?.id && false ? (
          <div className="mb-4">
            <label htmlFor="s3file" className="mb-2 block font-medium">
              File:
            </label>
            <div className="relative mt-2 rounded-md">
              <div>
                <Image
                  src={file?.url!}
                  alt={file?.alt || ''}
                  width={Number(file?.width) * 0.25}
                  height={Number(file?.height) * 0.25}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="file" className="mb-2 block font-medium">
              File: <span className="text-palette-red-500">*</span>
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  type="file"
                  id="s3file"
                  name="s3file"
                  placeholder="File"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
        <Link
          href={PATHS.s3Files}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save File</Button>
      </div>
    </form>
  );
}
