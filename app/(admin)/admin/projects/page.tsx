import React from 'react';

import { ProjectsTable } from '@ui/admin/projects';
import { getProjects } from '@/app/lib/mongodb';

export default async function ProjectsPage() {
  const data = await getProjects();

  if (!data) {
    return <div>Loading...</div>;
  }
  return <ProjectsTable projects={data} />;
}
