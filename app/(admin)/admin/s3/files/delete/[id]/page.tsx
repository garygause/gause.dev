import React from 'react';

import { DeleteForm } from '@jade-and-lotus/jade-ui';
import { deleteFileForm } from '@admin/s3';

export default async function DeleteFilePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  if (!id) {
    return <div>Invalid input.</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete File</h1>
      <div>Really delete file?</div>
      <DeleteForm
        deleteHandler={deleteFileForm.bind(null, id)}
        buttonText="Yes, Delete File"
      />
    </div>
  );
}
