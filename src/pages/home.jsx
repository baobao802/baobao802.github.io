import React, { Fragment } from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from '@/components';
import data from '@/data.json';

const hero = data.hero;
const projects = data.projects.decent.slice(0, 3);
const skills = data.skills;
const aboutMe = data.about_me;
const contacts = data.contacts;

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection hero={hero} />
      <ProjectSection projects={projects} viewAll={'/projects'} />
      <SkillSection skills={skills} />
      <AboutSection aboutMe={aboutMe} viewAll={'/about-me'} />
      <ContactSection contacts={contacts} />
    </Fragment>
  );
}
