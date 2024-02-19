import React from 'react';

import ProjectForm from '@ui/admin/project-form';

export default function ProjectCreatePage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a Project</h1>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}
