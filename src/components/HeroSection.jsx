import React from 'react';
import { BLogo } from '@/components/icons';
import heroImg from '@/assets/hero.png';
import dotsSvg from '@/assets/dots.svg';

export default function HeroSection({ hero }) {
  const { title = '', description = '', photo, current = {} } = hero;

  return (
    <section className='section'>
      <div className='mb-10 md:flex md:gap-10 md:items-center'>
        <div className='h-fit md:flex-1'>
          <h1
            className='text-4xl mb-5'
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p className='text-dracula-comment mb-5'>/* {description} */</p>

          <button className='button'>Contact Me</button>
        </div>

        <div className='relative my-8 max-w-xl mx-auto md:flex-1'>
          <BLogo className='text-dracula-comment absolute top-8 left-0 z-0 w-72 h-72 md:w-80 md:h-80' />
          <img
            className='absolute top-10 right-10 z-0 w-20 h-20'
            src={dotsSvg}
            alt=''
          />
          <img
            className='w-full aspect-square object-cover relative z-10 border-b border-dracula-comment'
            src={photo || heroImg}
            alt="It's me"
          />
          <div className='frame text-dracula-comment bg-dracula-dark px-4 py-2 w-fit mx-auto relative -top-[1px] flex items-center gap-x-2'>
            <BLogo className='w-5 h-5' />
            <p className='text-dracula-white'>
              Currently working on{' '}
              <a
                className='text-dracula-purple'
                href={current.url}
                target='_blank'
              >
                {current.company}
              </a>
            </p>
          </div>
        </div>
      </div>

      <figure className='quote mb-10'>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatibus corrupti.
        </blockquote>

        <figcaption>
          -{' '}
          <abbr className='decoration-transparent' title='Master'>
            Mr.
          </abbr>{' '}
          Who
        </figcaption>
      </figure>
    </section>
  );
}
