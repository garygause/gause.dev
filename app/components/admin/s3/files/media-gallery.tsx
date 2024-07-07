import React from 'react';

// import { MediaFile } from '@prisma/client';
// import MediaGalleryItem from './media-gallery-item';

export default async function MediaGallery({
  //media,
  variant,
}: {
  //media: MediaFile[];
  variant?: 'small' | 'medium' | 'large';
}) {
  // let listClass = 'list-container-grid';
  // if (variant && variant === 'small') {
  //   listClass = 'list-container-grid-small';
  // } else if (variant && variant === 'medium') {
  //   listClass = 'list-container-grid-medium';
  // }
  // return (
  //   <div>
  //     <div className="flex flex-col mx-auto mt-0 mb-10 items-center">
  //       <div className="mx-auto mt-0  overflow-visible max-w-7xl w-full">
  //         <div
  //           className={`gap-x-12 gap-10 ${listClass} pt-0 pl-0 overflow-visible w-full`}
  //         >
  //           {media &&
  //             media.map((mediaFile) => {
  //               return (
  //                 <MediaGalleryItem
  //                   key={mediaFile.id}
  //                   media={mediaFile}
  //                   variant={variant}
  //                 />
  //               );
  //             })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <h1>Media</h1>;
}
