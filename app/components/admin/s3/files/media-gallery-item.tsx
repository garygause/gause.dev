import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//import { MediaFile } from '@prisma/client';

type Props = {
  //media: MediaFile;
  variant?: 'small' | 'medium' | 'large';
};

export default function MediaGalleryItem(props: Props) {
  // console.log(props.media);
  // const { id, title, path, width, height, alt, size } = props.media;

  const small = props.variant && props.variant === 'small';

  // return (
  //   <Link
  //     href={`/admin/media/edit/${id}`}
  //     className="border border-palette-brown rounded-md hover:border-palette-red"
  //   >
  //     <div className="p-0 w-full list-container-transtion">
  //       <div className="h-full flex flex-col justify-start overflow-hidden mx-auto max-w-6xl relative">
  //         <div className="mb-5 pt-70p relative w-full h-full basis-0 grow-0 flex shrink justify-center overflow-hidden items-center">
  //           <div>
  //             <div className="overflow-hidden">
  //               <div className="img-container">
  //                 <Image
  //                   src={path || ''}
  //                   width={Number(width) || 500}
  //                   height={Number(height) | 500}
  //                   alt={alt || ''}
  //                   className="rounded-t-md"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="px-4 pb-4 flex flex-col justify-center items-center">
  //           <h3 className="relative m-0 p-0 font-medium mb-4">{title}</h3>
  //           <div className="flex flex-row space-x-8">
  //             <Link
  //               className="hover:text-palette-brown"
  //               href={`media/edit/${id}`}
  //             >
  //               Edit
  //             </Link>
  //             <Link
  //               className="hover:text-palette-brown"
  //               href={`media/delete/${id}`}
  //             >
  //               Delete
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Link>
  // );
  return 'Media';
}
