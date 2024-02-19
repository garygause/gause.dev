import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import fs from 'fs/promises';

import { deleteLibraryImage } from '@/app/lib/mongodb';
import DeleteButton from '@ui/delete-button';

async function DeleteLibraryImagePage({ params }: { params: { id: string } }) {
  if (!params || !params.id) {
    return <div>Invalid input.</div>;
  }
  async function deleteHandler() {
    'use server';
    try {
      const deletedImage = await deleteLibraryImage(params.id);
      if (deletedImage.path) {
        await fs.unlink(`public${deletedImage.path}`);
        console.log(`File ${deletedImage.path} has been deleted.`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      revalidatePath('/admin/library-images');
      redirect('/admin/library');
    }
  }
  return (
    <div className="space-y-8">
      <h1 className="text-xl mb-8">Delete Library Image</h1>
      <div>Really delete image?</div>
      <DeleteButton
        deleteHandler={deleteHandler}
        buttonText="Yes, Delete Library Image"
      />
    </div>
  );
}

export default DeleteLibraryImagePage;
