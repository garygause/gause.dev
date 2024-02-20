import React from 'react';
import Image from 'next/image';

import LibraryImageForm from '@ui/admin/library-image-form';
import { getLibraryImage } from '@/app/lib/api-client';

export default async function LibraryImageEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getLibraryImage(params.id);
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Edit Library Image</h1>
          {data.path && (
            <Image
              src={data.path}
              width={data.width}
              height={data.height}
              alt={data.alt}
              className="round-md"
            />
          )}
          <LibraryImageForm image={data} />
        </div>
      </div>
    </div>
  );
}
