import React from 'react';
import aboutMeImg from '@/assets/about-me.png';
import Section from './Section';
import { Link } from 'react-router-dom';

export default function AboutSection({
  title = 'about-me',
  viewAll,
  reversed,
  aboutMe = {},
}) {
  const { bio = [], photo } = aboutMe;

  return (
    <Section title={title}>
      <div
        className={`flex ${
          reversed
            ? 'flex-col-reverse md:flex-row-reverse'
            : 'flex-col md:flex-row'
        } items-center gap-10`}
      >
        <div className='flex-1'>
          {bio.map((paragraph, index) => (
            <p key={'paragraph_' + index} className='pb-5'>
              {paragraph}
            </p>
          ))}

          {viewAll && (
            <Link className='button' to={viewAll}>
              View all
            </Link>
          )}
        </div>

        <div className='flex-1'>
          <img
            className='object-contain w-full max-w-md ml-auto aspect-[3/4]'
            src={photo || aboutMeImg}
            alt=''
          />
        </div>
      </div>
    </Section>
  );
}
