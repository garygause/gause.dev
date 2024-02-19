import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { saveLibraryImage } from '@/app/lib/api-client';
import { LibraryImage } from '@/app/lib/definitions';

type Props = {
  image?: LibraryImage;
};

export function LibraryImageForm(props: Props) {
  const _id = props.image?._id || '';

  async function saveLibraryImageForm(_id: string, formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const credit = formData.get('credit') as string;
    const keywords = formData.get('keywords') as string;
    const alt = formData.get('alt') as string;
    const path = formData.get('path') as string;
    const width = formData.get('width') as string;
    const height = formData.get('height') as string;
    const size = formData.get('size') as string;
    const status = formData.get('status') as string;

    const image: LibraryImage = {
      title: title,
      credit: credit,
      keywords: keywords,
      alt: alt,
      path: path,
      width: width,
      height: height,
      size: size,
      status: status,
    };
    const { msg, success, data } = await saveLibraryImage(image, _id);
    if (success) {
      revalidatePath('/admin/library');
      revalidatePath('/admin/library/edit/[id]', 'page');
      redirect('/admin/library');
    } else {
      console.log(msg);
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveLibraryImageForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="title">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={props.image?.title}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="stack">
            Credit: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="credit"
            name="credit"
            defaultValue={props.image?.credit}
            placeholder="Credit"
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={props.image?.keywords}
            placeholder="Keywords"
          />
        </div>
        <div>
          <label htmlFor="alt">Alt:</label>
          <input
            type="text"
            id="alt"
            name="alt"
            defaultValue={props.image?.alt}
            placeholder="Alt"
          />
        </div>
        <div>
          <label htmlFor="path">Path:</label>
          <input
            type="text"
            id="path"
            name="path"
            defaultValue={props.image?.path}
            placeholder="Path"
          />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            name="width"
            defaultValue={props.image?.width}
            placeholder="Width"
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            defaultValue={props.image?.height}
            placeholder="Height"
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            name="size"
            defaultValue={props.image?.size}
            placeholder="Size"
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            defaultValue={props.image?.status}
            className="p-3 "
          >
            <option value="">Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default LibraryImageForm;
