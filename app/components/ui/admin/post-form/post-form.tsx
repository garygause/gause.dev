import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { savePost } from '@/app/lib/api-client';
import { Post } from '@/app/lib/definitions';

type PostProps = {
  post?: Post;
};

function PostForm(props: PostProps) {
  const _id = props.post?._id || '';

  async function savePostForm(_id: string, formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const keywords = formData.get('keywords') as string;
    const content = formData.get('content') as string;

    const post: Post = {
      title: title,
      author: author,
      keywords: keywords,
      content: content,
    };
    const { msg, success, data } = await savePost(post, _id);
    console.log(msg);
    console.log(success);
    if (success) {
      revalidatePath('/admin/posts');
      revalidatePath('/admin/posts/edit/[id]', 'page');
      redirect('/admin/posts');
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={savePostForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="title">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={props.post?.title}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="author">
            Author: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={props.post?.author}
            placeholder="Author"
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={props.post?.keywords}
            placeholder="Keywords"
          />
        </div>
        <div>
          <label htmlFor="content">
            Content: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-32"
            id="content"
            name="content"
            defaultValue={props.post?.content}
            placeholder="Content"
          ></textarea>
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default PostForm;
