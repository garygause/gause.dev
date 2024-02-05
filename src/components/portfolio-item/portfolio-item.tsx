import React from 'react';
import Image from 'next/image';

export function PortfolioItem(props) {
  const {
    imageSrc,
    imageWidth,
    imageHeight,
    imageAlt,
    title,
    stack,
    description,
    children,
  } = props;

  return (
    <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6  justify-center">
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          className="border-palette-red border-2 rounded-xl shadow-lg shadow-palette-red/50  dark:shadow-palette-white/50"
        />
      </div>
      <div className="lg:w-1/2 lg:px-6 space-y-6">
        <h3 className="text-2xl ">{title}</h3>
        <div className="space-y-6">
          <p>
            Stack:{' '}
            <span className="text-palette-red dark:text-palette-brown">
              {stack}
            </span>
          </p>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
