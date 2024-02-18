import React, { useState } from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { saveProject } from '@/app/lib/api-client';
import { Project } from '@/app/lib/definitions';

type ProjectProps = {
  project?: Project;
};

export function ProjectForm(props: ProjectProps) {
  const _id = props.project?._id || '';

  async function saveProjectForm(_id: string, formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const stack = formData.get('stack') as string;
    const keywords = formData.get('keywords') as string;
    const summary = formData.get('summary') as string;
    const description = formData.get('description') as string;
    const imageSrc = formData.get('imageSrc') as string;
    const imageHeight = formData.get('imageHeight') as string;
    const imageWidth = formData.get('imageWidth') as string;
    const imageAlt = formData.get('imageAlt') as string;
    const slug = formData.get('slug') as string;
    const status = formData.get('status') as string;
    const featured = formData.get('featured') as string;

    const project: Project = {
      title: title,
      stack: stack,
      keywords: keywords,
      summary: summary,
      description: description,
      imageSrc: imageSrc,
      imageHeight: imageHeight,
      imageWidth: imageWidth,
      imageAlt: imageAlt,
      slug: slug.toLocaleLowerCase(),
      status: status,
      featured: featured,
    };
    const { msg, success, data } = await saveProject(project, _id);
    if (success) {
      revalidatePath('/admin/projects');
      revalidatePath('/admin/projects/edit/[id]', 'page');
      redirect('/admin/projects');
    } else {
      console.log(msg);
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveProjectForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="title">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={props.project?.title}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="stack">
            Stack: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="stack"
            name="stack"
            defaultValue={props.project?.stack}
            placeholder="Stack"
          />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            defaultValue={props.project?.keywords}
            placeholder="Keywords"
          />
        </div>
        <div>
          <label htmlFor="imageSrc">Image:</label>
          <input
            type="text"
            id="imageSrc"
            name="imageSrc"
            defaultValue={props.project?.imageSrc}
            placeholder="Image Src"
          />
        </div>
        <div>
          <label htmlFor="imagWidth">Image Width:</label>
          <input
            type="text"
            id="imageWidth"
            name="imageWidth"
            defaultValue={props.project?.imageWidth}
            placeholder="Image Width"
          />
        </div>
        <div>
          <label htmlFor="imageHeight">Image Height:</label>
          <input
            type="text"
            id="imageHeight"
            name="imageHeight"
            defaultValue={props.project?.imageHeight}
            placeholder="Image Height"
          />
        </div>
        <div>
          <label htmlFor="imageAlt">Image Alt:</label>
          <input
            type="text"
            id="imageAlt"
            name="imageAlt"
            defaultValue={props.project?.imageAlt}
            placeholder="Image Alt"
          />
        </div>
        <div>
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            defaultValue={props.project?.slug}
            placeholder="Slug"
          />
        </div>
        <div>
          <label htmlFor="featured">Featured:</label>
          <select
            id="featured"
            name="featured"
            defaultValue={props.project?.featured}
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
            defaultValue={props.project?.status}
            className="p-3 "
          >
            <option value="">Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div>
          <label htmlFor="summary">
            Summary: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="summary"
            name="summary"
            maxLength={200}
            defaultValue={props.project?.summary}
            placeholder="Summary"
          />
        </div>
        <div>
          <label htmlFor="description">
            Description: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-96"
            id="description"
            name="description"
            defaultValue={props.project?.description}
            placeholder="Description"
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

export default ProjectForm;
