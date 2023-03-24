import React from 'react';
import Image from './Image';

export default function ProjectCard({ project = {} }) {
  const {
    name = '',
    image = '',
    url = '',
    description = '',
    technologies = [],
  } = project;

  return (
    <div className='frame text-dracula-comment'>
      <Image
        className='w-full aspect-video object-cover object-center'
        src={image}
        alt={name}
      />
      <ul className='border-y border-current flex items-center gap-x-4 px-4 py-2'>
        {technologies.map((tech) => (
          <li key={tech} className='text-dracula-green'>
            {tech}
          </li>
        ))}
      </ul>
      <div className='text-dracula-white p-4'>
        <h3 className='text-2xl mb-3'>{name}</h3>
        <p className='text-dracula-comment mb-3 max-h-40 overflow-y-auto'>
          /* {description} */
        </p>
        <a className='button' href={url} target='_blank'>
          Live
        </a>
      </div>
    </div>
  );
}
