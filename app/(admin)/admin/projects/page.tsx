import React from 'react';

import { ProjectsTable } from '@/app/components/projects';
import { getProjects } from '@/app/lib/api-client';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <ProjectsTable projects={projects} />
    </div>
  );
}
