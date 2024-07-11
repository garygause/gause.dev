import React from 'react';
import {
  JOBSTATUS,
  APPLICATIONSTATUS,
  JLJob,
  JLApplication,
} from '@jade-and-lotus/jade-api-client';
import { saveApplicationForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';
import { Status } from '@jade-and-lotus/jade-ui';
import { formatDateToLocal } from '@/app/lib/utils';

export default async function ApplicationForm({
  application,
  jobs,
}: {
  application: JLApplication | null;
  jobs: JLJob[];
}) {
  const id = application?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveApplicationForm.bind(null, id)}
      >
        <div className="mb-4">
          <label htmlFor="jobId">
            Job: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative">
            <select
              defaultValue={application?.jobId}
              id="jobId"
              name="jobId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 outline-2 placeholder:text-gray-500"
            >
              <option key="noid" value=""></option>
              {jobs?.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title + ' - ' + job.company?.name}
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
            defaultValue={application?.title}
            placeholder="Title"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="jobUrl">Job URL:</label>
          <input
            type="text"
            id="jobUrl"
            name="jobUrl"
            defaultValue={application?.jobUrl}
            placeholder="Job URL"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="companyUrl">Company URL:</label>
          <input
            type="text"
            id="companyUrl"
            name="companyUrl"
            defaultValue={application?.companyUrl}
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
            defaultValue={application?.keywords}
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
              defaultValue={application?.phone}
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
              defaultValue={application?.email}
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
              defaultValue={application?.address}
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
              defaultValue={application?.stack}
              placeholder="Stack"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block font-medium">
            Description:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="description"
                name="description"
                defaultValue={application?.description}
                placeholder="Description"
                className="h-96 w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="coverLetter" className="mb-2 block font-medium">
            Cover Letter:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="coverLetter"
                name="coverLetter"
                defaultValue={application?.coverLetter}
                placeholder="Cover Letter"
                className="h-96 w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="mb-2 block font-medium">
            Resume:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="resume"
                name="resume"
                defaultValue={application?.resume}
                placeholder="Resume"
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
                defaultValue={application?.notes}
                placeholder="Notes"
                className="h-96 w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="datePublished">Date Published:</label>
          <input
            type="text"
            id="datePublished"
            name="datePublished"
            defaultValue={formatDateToLocal(application?.datePublished)}
            placeholder="e.g. Jul 10, 2024, 3:43 PM"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="dateApplied">Date Applied:</label>
          <input
            type="text"
            id="dateApplied"
            name="dateApplied"
            defaultValue={formatDateToLocal(application?.dateApplied)}
            placeholder="e.g. Jul 10, 2024, 3:43 PM"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="dateInterviewed">Date Interviewed:</label>
          <input
            type="text"
            id="dateInterviewed"
            name="dateInterviewed"
            defaultValue={formatDateToLocal(application?.dateInterviewed)}
            placeholder="e.g. Jul 10, 2024, 3:43 PM"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="dateComplete">Date Complete:</label>
          <input
            type="text"
            id="dateComplete"
            name="dateComplete"
            defaultValue={formatDateToLocal(application?.dateComplete)}
            placeholder="e.g. Jul 10, 2024, 3:43 PM"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
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
                  defaultChecked={application?.isFeatured}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
              </div>
            </div>
          </div>
        </div>
        <Status
          statuses={Object.values(APPLICATIONSTATUS)}
          selectedStatus={application?.status || APPLICATIONSTATUS.active}
        />
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.joblogsApps}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Application</Button>
        </div>
      </form>
    </>
  );
}
