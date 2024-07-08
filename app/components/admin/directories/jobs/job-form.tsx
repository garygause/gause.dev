import React from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Company, JOBSTATUS, Job } from '@jade-and-lotus/jade-api-client';
import { saveJobForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';

export default async function JobForm({
  job,
  companies,
}: {
  job: Job | null;
  companies: Company[];
}) {
  const id = job?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveJobForm.bind(null, id)}
      >
        <div className="mb-4">
          <label htmlFor="companyId">
            Company: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative">
            <select
              defaultValue={job?.companyId}
              id="companyId"
              name="companyId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
            >
              {companies?.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="name">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={job?.title}
            placeholder="Title"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            defaultValue={job?.url}
            placeholder="URL"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="companyUrl">Company URL:</label>
          <input
            type="text"
            id="companyUrl"
            name="companyUrl"
            defaultValue={job?.companyUrl}
            placeholder="Company URL"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={job?.keywords}
            placeholder="Keywords"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block font-medium">
            Phone:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="phone"
              name="phone"
              type="text"
              defaultValue={job?.phone}
              placeholder="Phone"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-medium">
            Email:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="email"
              name="email"
              type="text"
              defaultValue={job?.email}
              placeholder="Email"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block font-medium">
            Address:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="address"
              name="address"
              type="text"
              defaultValue={job?.address}
              placeholder="Address"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="stack" className="mb-2 block font-medium">
            Stack:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="stack"
              name="stack"
              type="text"
              defaultValue={job?.stack}
              placeholder="Stack"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="mb-2 block font-medium">
            Summary:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="summary"
              name="summary"
              type="text"
              defaultValue={job?.summary}
              placeholder="Summary"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="mb-2 block font-medium">
            Content:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="content"
                name="content"
                defaultValue={job?.content}
                placeholder="Content"
                className="h-96 w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="mb-2 block font-medium">
            Notes:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="notes"
                name="notes"
                defaultValue={job?.notes}
                placeholder="Notes"
                className="h-96 w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="isFeatured" className="mb-2 block font-medium">
            Featured:
          </label>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  name="isFeatured"
                  defaultChecked={job?.isFeatured}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
              </div>
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
                  value={JOBSTATUS.inactive}
                  defaultChecked={
                    job?.status === JOBSTATUS.inactive || !job?.status
                  }
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
                  value={JOBSTATUS.active}
                  defaultChecked={job?.status === JOBSTATUS.active}
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
                  id="hidden"
                  name="status"
                  type="radio"
                  value={JOBSTATUS.hidden}
                  defaultChecked={job?.status === JOBSTATUS.hidden}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="hidden"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                >
                  Hidden <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="deleted"
                  name="status"
                  type="radio"
                  value={JOBSTATUS.deleted}
                  defaultChecked={job?.status === JOBSTATUS.deleted}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="deleted"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                >
                  Deleted <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.directoriesJobs}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Job</Button>
        </div>
      </form>
    </>
  );
}
