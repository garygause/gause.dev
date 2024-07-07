'use client';

import { useState } from 'react';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';

export default function MetaFields({
  title,
  url,
  keywords,
  description,
  isVisible,
}: {
  title?: string | null | undefined;
  url?: string | null | undefined;
  keywords?: string | null | undefined;
  description?: string | null | undefined;
  isVisible?: boolean | undefined;
}) {
  isVisible = isVisible || false;
  const [isMetaVisible, setIsMetaVisible] = useState(isVisible);

  return (
    <div>
      <div
        className="mb-4 flex flex-row gap-2 items-center"
        onClick={() => setIsMetaVisible(!isMetaVisible)}
      >
        {isMetaVisible ? (
          <SlArrowDown className="h-4" />
        ) : (
          <SlArrowRight className="h-4" />
        )}
        <span className="text-xl">Meta Fields</span>
      </div>
      {isMetaVisible && (
        <>
          <div className="mb-4">
            <label htmlFor="metaUrl" className="mb-2 block font-medium">
              Meta URL:
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="metaUrl"
                name="metaUrl"
                type="text"
                defaultValue={url || ''}
                placeholder="Meta URL"
                className="block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="metaTitle" className="mb-2 block font-medium">
              Meta Title:
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="metaTitle"
                name="metaTitle"
                type="text"
                defaultValue={title || ''}
                placeholder="Meta Title"
                className="block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="metaKeywords" className="mb-2 block font-medium">
              Meta Keywords:
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="metaKeywords"
                name="metaKeywords"
                type="text"
                defaultValue={keywords || ''}
                placeholder="Meta Keywords"
                className="block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="metaDescription" className="mb-2 block font-medium">
              Meta Description:
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="metaDescription"
                name="metaDescription"
                type="text"
                defaultValue={description || ''}
                placeholder="Meta Description"
                className="block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
