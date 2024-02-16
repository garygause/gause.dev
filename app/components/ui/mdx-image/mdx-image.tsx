import React, { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';

export type ExtendedImageProps = ImageProps & {
  classes: string;
};

export default function MDXImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} />;
}

// export const MDX = {
//   H1: ({ classes, children }: { classes: string; children: ReactNode }) => (
//     <h1 className="text-2xl font-bold">{children}</h1>
//   ),
//   H2: ({ classes, children }: { classes: string; children: ReactNode }) => (
//     <h2 className="text-xl font-bold">{children}</h2>
//   ),
//   P: ({ classes, children }: { classes: string; children: ReactNode }) => (
//     <p className={classes}>{children}</p>
//   ),
//   Image: (props: ExtendedImageProps) => (
//     <Image {...props} className={props.classes} alt={props.alt} />
//   ),
// };
