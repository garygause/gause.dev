import React from 'react';

import { LibraryImage } from '@/app/lib/definitions';
import LibraryGalleryItem from '../library-gallery-item';

async function LibraryGallery({
  images,
  variant,
}: {
  images: LibraryImage[];
  variant?: 'small' | 'medium' | 'large';
}) {
  let listClass = 'list-container-grid';
  if (variant && variant === 'small') {
    listClass = 'list-container-grid-small';
  } else if (variant && variant === 'medium') {
    listClass = 'list-container-grid-medium';
  }
  return (
    <div>
      <div className="flex flex-col mx-auto mt-0 mb-10 items-center">
        <div className="mx-auto mt-0  overflow-visible max-w-7xl w-full">
          <div
            className={`gap-x-12 gap-10 ${listClass} pt-0 pl-0 overflow-visible w-full`}
          >
            {images &&
              images.map((image) => {
                return (
                  <LibraryGalleryItem
                    key={image._id}
                    image={image}
                    variant={variant}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryGallery;
