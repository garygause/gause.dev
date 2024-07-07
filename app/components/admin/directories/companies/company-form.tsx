import React from 'react';
import {
  CheckIcon,
  ClockIcon,
  PhotoIcon,
  UserCircleIcon,
  DocumentTextIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { COMPANYSTATUS, Company } from '@jade-and-lotus/jade-api-client';
import { saveCompanyForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';
import { MetaFields } from '@ui/meta-fields';

export default async function CompanyForm({
  company,
}: {
  company: Company | null;
}) {
  const id = company?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveCompanyForm.bind(null, id)}
      >
        <div>
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={company?.name}
            placeholder="Name"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
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
            defaultValue={company?.url}
            placeholder="URL"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="jobsUrl">Jobs URL:</label>
          <input
            type="text"
            id="jobsUrl"
            name="jobsUrl"
            defaultValue={company?.jobsUrl}
            placeholder="Jobs URL"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="slug">
            Slug: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            defaultValue={company?.slug}
            placeholder="Slug"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={company?.keywords}
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
              defaultValue={company?.phone}
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
              defaultValue={company?.email}
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
              defaultValue={company?.address}
              placeholder="Address"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="numEmployees" className="mb-2 block font-medium">
            Employees:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="numEmployees"
              name="numEmployees"
              type="text"
              defaultValue={company?.numEmployees}
              placeholder="Number Employees"
              className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="valuation" className="mb-2 block font-medium">
            Valuation:
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="valuation"
              name="valuation"
              type="text"
              defaultValue={company?.valuation}
              placeholder="Valuation"
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
              defaultValue={company?.stack}
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
              defaultValue={company?.summary}
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
                defaultValue={company?.content}
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
                defaultValue={company?.notes}
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
                  defaultChecked={company?.isFeatured}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
              </div>
            </div>
          </div>
        </div>
        <MetaFields
          url={company?.metaUrl}
          title={company?.metaTitle}
          keywords={company?.metaKeywords}
          description={company?.metaDescription}
        />
        <fieldset>
          <legend className="mb-2 block font-medium">Status:</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="status"
                  type="radio"
                  value={COMPANYSTATUS.inactive}
                  defaultChecked={
                    company?.status === COMPANYSTATUS.inactive ||
                    !company?.status
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
                  value={COMPANYSTATUS.active}
                  defaultChecked={company?.status === COMPANYSTATUS.active}
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
                  value={COMPANYSTATUS.hidden}
                  defaultChecked={company?.status === COMPANYSTATUS.hidden}
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
                  value={COMPANYSTATUS.deleted}
                  defaultChecked={company?.status === COMPANYSTATUS.deleted}
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
            href={PATHS.directoriesCompanies}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Company</Button>
        </div>
      </form>
    </>
  );
}
