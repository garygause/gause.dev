import React from 'react';

export default function DeleteButton({ deleteHandler, buttonText }) {
  return (
    <form action={deleteHandler}>
      <button className="pl-4 flex h-[48px] w-full grow items-center justify-center gap-2 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start">
        <div className="hidden md:block">{buttonText}</div>
      </button>
    </form>
  );
}
