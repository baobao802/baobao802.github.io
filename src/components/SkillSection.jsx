import React from 'react';
import { BLogo } from '@/components/icons';
import dotsSvg from '@/assets/dots.svg';
import Section from './Section';
import SkillBoard from './SkillBoard';

export default function SkillSection({ title = 'skills', skills = [] }) {
  return (
    <Section title={title}>
      <div className='flex flex-col gap-8 md:flex-row lg:gap-20'>
        <div className='relative min-h-[360px] flex-1'>
          <img
            className='absolute top-0 left-0 z-0 w-20 h-20'
            src={dotsSvg}
            alt=''
          />
          <img
            className='absolute top-0 right-0 z-0 w-20 h-20'
            src={dotsSvg}
            alt=''
          />
          <BLogo className='text-dracula-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-72 h-72 md:w-80 md:h-80' />
          <img
            className='absolute bottom-0 left-0 z-0 w-20 h-20'
            src={dotsSvg}
            alt=''
          />
          <img
            className='absolute bottom-0 right-0 z-0 w-20 h-20'
            src={dotsSvg}
            alt=''
          />
        </div>

        <div className='flex-1 masonry'>
          {skills.map(({ category, list }) => (
            <div key={category} className='masonry-brick'>
              <SkillBoard name={category} skills={list} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
