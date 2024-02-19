import React from 'react';

import LibraryImagesTable from '@ui/admin/library-images';
import { getLibraryImages } from '@/app/lib/mongodb';

export default async function LibraryImagePage() {
  //const { msg, success, data } = await getLibraryImages();
  const data = await getLibraryImages();
  if (!data) {
    return <div>Loading...</div>;
  }

  return <LibraryImagesTable images={data} />;
}
