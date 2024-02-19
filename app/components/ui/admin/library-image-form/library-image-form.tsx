import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from 'fs/promises';
import sharp from 'sharp';
import { saveLibraryImage } from '@/app/lib/api-client';
import { LibraryImage } from '@/app/lib/definitions';
import { EmptyImageError } from '@/app/lib/exceptions';

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
    const status = formData.get('status') as string;

    const image: LibraryImage = {
      title: title,
      credit: credit,
      keywords: keywords,
      alt: alt,
      status: status,
    };
    const { msg, success, data } = await saveLibraryImage(image, _id);
    let fileName = `image-${data._id}`;
    let id = data._id;

    // save file
    const imageFile: File = formData.get('imageFile') as unknown as File;
    if (imageFile) {
      try {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        if (!buffer) {
          throw new EmptyImageError('No image data');
        }
        const sharpImage = await sharp(buffer);
        const metadata = await sharpImage.metadata();
        console.log(metadata);
        let fileName = `image-${id}-${metadata.width}x${metadata.height}`;
        if (metadata.format && metadata.format === 'jpeg') {
          fileName += '.jpg';
        } else {
          fileName += '.png';
        }
        const filePath = `public/images/library/${fileName}`;

        await writeFile(filePath, buffer);

        const image: LibraryImage = {
          title: title,
          path: `/images/library/${fileName}`,
          width: metadata.width?.toString() || '500',
          height: metadata.height?.toString() || '500',
          size: metadata.size?.toString() || '0',
          status: status,
        };
        const { msg, success, data } = await saveLibraryImage(image, id);
      } catch (error) {
        console.log(error);
      }
    }

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
          <label htmlFor="imageFile">File:</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            placeholder="File"
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
