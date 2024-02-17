import React from 'react';

import ProjectItem from '@ui/project-item';
import { Project } from '@/app/lib/definitions';

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section>
      <div className="max-w-screen-xl px-6 py-10 mx-auto flex">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div>
            <div className="w-full">
              <div className="container mx-auto space-y-10">
                {projects &&
                  projects.map((project) => {
                    return <ProjectItem key={project._id} project={project} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
