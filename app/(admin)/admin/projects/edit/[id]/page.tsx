import React from 'react';

import ProjectForm from '@ui/admin/project-form';
import { getProject } from '@/app/lib/mongodb';

export default async function ProjectEditPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProject(params.id);
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Edit Project</h1>
          <ProjectForm project={data} />
        </div>
      </div>
    </div>
  );
}
