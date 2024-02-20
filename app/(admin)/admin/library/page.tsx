import React from 'react';
import Link from 'next/link';

import LibraryImagesTable from '@ui/admin/library-images';
import LibraryGallery from '@ui/admin/library-gallery';

//import { getLibraryImages } from '@/app/lib/mongodb';
import { getLibraryImages } from '@/app/lib/api-client';

// NOTE: prevents build errors from trying to fetch data from api during build
export const dynamic = 'force-dynamic';

export default async function LibraryImagePage() {
  const { msg, success, data } = await getLibraryImages();
  //const data = await getLibraryImages();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl px-6 py-10 flex">
      <div className="w-full">
        <div className="flex flex-row space-x-4 mb-10">
          <h1 className="text-xl md:text-2xl">Library Images</h1>
          <Link className="text-lg" href="/admin/library/edit">
            [+]
          </Link>
        </div>
        <LibraryGallery images={data} />
      </div>
    </div>
  );
}
