'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export type ImageOption = {
  id?: string;
  value?: string;
  label?: string;
  path?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
};

export type ImageSelectProps = {
  name: string;
  id: string;
  defaultValue?: string;
  options: ImageOption[];
};

function ImageSelect({ id, name, defaultValue, options }: ImageSelectProps) {
  const [imageId, setImageId] = useState(defaultValue);

  const image = options.find((image) => {
    return image.id === imageId;
  });

  return (
    <>
      {image && (
        <Image
          src={image.path || '/images/blog/default.png'}
          width={Number(image.width)}
          height={Number(image.height)}
          alt={image.alt || 'default image'}
          className="round-md"
        />
      )}
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className="p-3 "
        onChange={(e) => setImageId(e.target.value)}
      >
        <option value="">Select an Image</option>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default ImageSelect;
