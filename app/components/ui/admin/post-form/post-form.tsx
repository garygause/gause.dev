import React from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { savePost, getLibraryImages } from '@/app/lib/api-client';
import { Post, LibraryImage } from '@/app/lib/definitions';
import ImageSelect, { ImageOption } from '@ui/image-select';

type PostProps = {
  post?: Post;
};

async function PostForm(props: PostProps) {
  const _id = props.post?._id || '';

  const { data: images } = await getLibraryImages();
  const imageOptions: ImageOption[] = images.map((image: LibraryImage) => {
    const imageOption: ImageOption = {
      id: image._id,
      value: image._id,
      label: image.title,
      path: image.path,
      title: image.title,
      alt: image.alt,
      width: Number(image.width),
      height: Number(image.height),
    };
    return imageOption;
  });
  console.log(imageOptions);

  async function savePostForm(_id: string, formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const keywords = formData.get('keywords') as string;
    const summary = formData.get('summary') as string;
    const content = formData.get('content') as string;
    const libraryImage = formData.get('libraryImage') as string;

    const slug = formData.get('slug') as string;
    const featured = formData.get('featured') as string;
    const status = formData.get('status') as string;

    const post: Post = {
      title: title,
      author: author,
      keywords: keywords,
      summary: summary,
      content: content,
      libraryImage: libraryImage,
      slug: slug.toLowerCase(),
      featured: featured,
      status: status,
    };
    const { msg, success, data } = await savePost(post, _id);

    if (success) {
      revalidatePath('/admin/posts');
      revalidatePath('/admin/posts/edit/[id]', 'page');
      redirect('/admin/posts');
    } else {
      console.log(msg);
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={savePostForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="libraryImage">Image:</label>
          <ImageSelect
            defaultValue={props.post?.libraryImage}
            options={imageOptions}
            id="libraryImage"
            name="libraryImage"
          />
        </div>
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
            defaultValue="Gary Gause" // {props.post?.author}
            placeholder="Author"
          />
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            name="summary"
            maxLength={200}
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
        <div>
          <label htmlFor="content">
            Content: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-96"
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
