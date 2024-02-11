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
    const description = formData.get('description') as string;

    const project: Project = {
      title: title,
      stack: stack,
      description: description,
    };
    const { msg, success, data } = await saveProject(project, _id);
    console.log(msg);
    console.log(success);
    if (success) {
      revalidatePath('/admin/projects');
      revalidatePath('/admin/projects/edit/[id]', 'page');
      redirect('/admin/projects');
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
          <label htmlFor="description">
            Description: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-32"
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
