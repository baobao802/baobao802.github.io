import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AboutSection,
  Section,
  CurrentLocation,
  SkillBoard,
} from '@/components';
import data from '@/data.json';

const skills = data.skills;
const aboutMe = data.about_me;

export default function AboutMePage() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <CurrentLocation pathname={pathname} description='Who am i' />

      <AboutSection title={null} reversed={true} aboutMe={aboutMe} />

      <Section title='skills'>
        <div className='columns-2 gap-4 sm:columns-3 md:columns-4'>
          {skills.map(({ category, list }) => (
            <div key={category} className='box-border break-inside-avoid mb-4'>
              <SkillBoard name={category} skills={list} />
            </div>
          ))}
        </div>
      </Section>
    </Fragment>
  );
}
