import React from 'react';
import Image from 'next/image';

type ShareButtonProps = {
  icon: any;
  alt: string;
};

function ShareButton({ icon, alt }: ShareButtonProps) {
  return (
    <button className="mr-0 mb-5">
      <Image priority src={icon} alt={alt} />
    </button>
  );
}

export default ShareButton;
