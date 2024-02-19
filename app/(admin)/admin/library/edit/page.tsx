import React from 'react';

import LibraryImageForm from '@ui/admin/library-image-form';

export default function LibraryImageCreatePage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a Library Image</h1>
          <LibraryImageForm />
        </div>
      </div>
    </div>
  );
}
