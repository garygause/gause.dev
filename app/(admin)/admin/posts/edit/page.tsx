import React from 'react';

import PostForm from '@ui/admin/post-form';

export default function PostCreatePage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a Post</h1>
          <PostForm />
        </div>
      </div>
    </div>
  );
}
