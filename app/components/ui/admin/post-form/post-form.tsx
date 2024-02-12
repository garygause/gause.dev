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
    const summary = formData.get('summary') as string;
    const content = formData.get('content') as string;
    const image = formData.get('image') as string;
    const imageAlt = formData.get('imageAlt') as string;
    const slug = formData.get('slug') as string;
    const featured = formData.get('featured') as string;
    const status = formData.get('status') as string;

    const post: Post = {
      title: title,
      author: author,
      keywords: keywords,
      summary: summary,
      content: content,
      image: image,
      imageAlt: imageAlt,
      slug: slug,
      featured: featured,
      status: status,
    };
    console.log(post);
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
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            name="summary"
            defaultValue={props.post?.summary}
            placeholder="Summary"
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
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={props.post?.image}
            placeholder="Image"
          />
        </div>
        <div>
          <label htmlFor="imageAlt">Image Alt:</label>
          <input
            type="text"
            id="imageAlt"
            name="imageAlt"
            defaultValue={props.post?.imageAlt}
            placeholder="Image Alt"
          />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            defaultValue={props.post?.slug}
            placeholder="Slug"
          />
        </div>
        <div>
          <label htmlFor="featured">Featured:</label>
          <select
            id="featured"
            name="featured"
            defaultValue={props.post?.featured}
            className="p-3 "
          >
            <option value="">Featured</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            defaultValue={props.post?.status}
            className="p-3 "
          >
            <option value="">Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
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
