import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectSection, CurrentLocation } from '@/components';
import data from '@/data.json';

const decentProjects = data.projects.decent;
const smallProjects = data.projects.small;

export default function ProjectsPage() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <CurrentLocation pathname={pathname} description='All of my projects' />

      <ProjectSection title='decent' projects={decentProjects} />

      <ProjectSection title='small' projects={smallProjects} />
    </Fragment>
  );
}
