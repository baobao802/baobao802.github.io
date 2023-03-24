import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function ProjectSection({
  title = 'projects',
  viewAll,
  projects = [],
}) {
  return (
    <Section title={title} viewAll={viewAll}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
