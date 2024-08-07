import React from 'react';
import {
  COMPANYSTATUS,
  COMPANYTYPE,
  JLCompany,
} from '@jade-and-lotus/jade-api-client';
import { saveCompanyForm } from './actions';
import Link from 'next/link';
import { PATHS } from '@/app/lib/constants';
import Button from '@ui/button';
import { Status } from '@jade-and-lotus/jade-ui';

export default async function CompanyForm({
  company,
}: {
  company: JLCompany | null;
}) {
  const id = company?.id || '';

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveCompanyForm.bind(null, id)}
      >
        <div className="mb-4">
          <label htmlFor="companyType">
            Company Type: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative">
            <select
              defaultValue={company?.companyType}
              id="companyType"
              name="companyType"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
            >
              <option key="noid" value=""></option>
              {Object.values(COMPANYTYPE).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
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
          <label htmlFor="linkedIn">LinkedIn:</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            defaultValue={company?.linkedIn}
            placeholder="LinkedIn"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="instagram">Instagram:</label>
          <input
            type="text"
            id="instagram"
            name="uinstagramrl"
            defaultValue={company?.instagram}
            placeholder="Instagram"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="facebook">Facebook:</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            defaultValue={company?.facebook}
            placeholder="Facebook"
            className="w-full rounded-md border border-gray-200 outline-2 placeholder:text-gray-500 dark:bg-white dark:text-palette-black"
          />
        </div>
        <div>
          <label htmlFor="otherSocial">Other Social:</label>
          <input
            type="text"
            id="otherSocial"
            name="otherSocial"
            defaultValue={company?.otherSocial}
            placeholder="Other Social"
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
        <Status
          statuses={Object.values(COMPANYSTATUS)}
          selectedStatus={company?.status || COMPANYSTATUS.active}
        />
        <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
          <Link
            href={PATHS.joblogsCompanies}
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
