import React from 'react';
import Image from 'next/image';

import ShareButton from '../share-button/share-button';
import facebookIcon from '@/public/facebook.svg';
import twitterIcon from '@/public/twitter.svg';

type ShareProps = {
  shares: number;
  url: string;
};

function ShareList({ shares, url }: ShareProps) {
  return (
    <div className=" p-0 mr-0 mt-1 w-full md:w-auto">
      <div className="md:h-32 mt-0 md:mt-5 flex flex-row justify-end space-x-6 md:space-x-0  md:flex-col md:w-14 md:justify-center items-center">
        <div className="flex ml-4 md:ml-1 flex-col justify-center items-center text-xs mb-5">
          <h5 className="font-medium">{shares}</h5>
          <h6>{shares === 1 ? 'Share' : 'Shares'}</h6>
        </div>
        <div className="flex justify-center items-center">
          <button className="mr-0 mb-5">
            <Image className="" priority src={facebookIcon} alt="facebook" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="mr-0 mb-5">
            <Image className="" priority src={twitterIcon} alt="twitter" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareList;
