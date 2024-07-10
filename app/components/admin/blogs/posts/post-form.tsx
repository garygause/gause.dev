import React from 'react';

import { MetaFields } from '@ui/meta-fields';
import { Post, S3File, POSTSTATUS } from '@jade-and-lotus/jade-api-client';
import { ImageSelect, ImageOption } from '@ui/image-select';
import { savePostForm } from './actions';

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
import { PATHS } from '@lib/constants';
import { Status } from '@jade-and-lotus/jade-ui';

export default function PostForm({
  post,
  images,
}: {
  post: Post | null;
  images: S3File[];
}) {
  const id = post?.id || '';

  const imageOptions: ImageOption[] = images.map((image: S3File) => {
    const imageOption: ImageOption = {
      id: image.id,
      value: image.id,
      label: image.name,
      path: image.url,
      title: image.name,
      alt: image.alt,
      width: Number(image.width),
      height: Number(image.height),
    };
    return imageOption;
  });

  return (
    <form action={savePostForm.bind(null, id)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="imageId" className="mb-2 block font-medium">
            Image: <span className="text-palette-red-500">*</span>
          </label>
          <ImageSelect
            defaultValue={post?.imageId || undefined}
            options={imageOptions}
            id="imageId"
            name="imageId"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block font-medium">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={post?.title}
              placeholder="Title"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="mb-2 block font-medium">
            Summary: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="summary"
              name="summary"
              type="text"
              defaultValue={post?.summary}
              placeholder="Summary"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="keywords" className="mb-2 block font-medium">
            Keywords: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="keywords"
              name="keywords"
              type="text"
              defaultValue={post?.keywords}
              placeholder="Keywords"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="slug" className="mb-2 block font-medium">
            Slug: <span className="text-palette-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="slug"
              name="slug"
              type="text"
              defaultValue={post?.slug}
              placeholder="Slug"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
            />
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
                  defaultChecked={post?.isFeatured}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
              </div>
            </div>
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
                defaultValue={post?.content}
                placeholder="Content"
                className="h-96 peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
              ></textarea>
            </div>
          </div>
        </div>
        <MetaFields
          url={post?.metaUrl}
          title={post?.metaTitle}
          keywords={post?.metaKeywords}
          description={post?.metaDescription}
        />
        <Status
          statuses={Object.values(POSTSTATUS)}
          selectedStatus={post?.status || POSTSTATUS.draft}
        />
      </div>
      <div className="mt-6 mr-6 flex flex-row justify-end gap-4">
        <Link
          href={PATHS.blogPosts}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Post</Button>
      </div>
    </form>
  );
}
