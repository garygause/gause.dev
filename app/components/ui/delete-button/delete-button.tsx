import React from 'react';
import { FormEventHandler } from 'react';

export default function DeleteButton({
  deleteHandler,
  buttonText,
}: {
  deleteHandler: any;
  buttonText: string;
}) {
  return (
    <form action={deleteHandler}>
      <button className="p-4 font-medium bg-palette-red text-white hover:bg-palette-brown">
        {buttonText}
      </button>
    </form>
  );
}
