'use client';

import React, { useState } from 'react';
import { updateCacheAndRedirect } from '@/app/lib/actions';

import { saveProject } from '@/app/lib/api-client';

type ProjectProps = {
  project?: {
    _id: string;
    title: string;
    stack: string;
    description: string;
  };
};

export function ProjectForm(props: ProjectProps) {
  const [title, setTitle] = useState(props.project?.title || '');
  const [stack, setStack] = useState(props.project?.stack || '');
  const [description, setDescription] = useState(
    props.project?.description || ''
  );
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const _id = props.project?._id;

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const project = {
      title,
      stack,
      description,
    };
    const { msg, success } = await saveProject(project, _id);
    setError(msg);
    setSuccess(success);
    if (success) {
      setTitle('');
      setStack('');
      setDescription('');
      updateCacheAndRedirect(
        ['/admin/projects', '/admin/projects/edit/[id]'],
        '/admin/projects'
      );
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="title">
            Title: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">
            Stack: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="stack"
            value={stack}
            placeholder="Stack"
            onChange={(e) => setStack(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">
            Description: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-32"
            id="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
      <div className="flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`px-5 py-2 mt-5 ${
                success ? 'text-white' : 'text-palette-red-700'
              }`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}

export default ProjectForm;
