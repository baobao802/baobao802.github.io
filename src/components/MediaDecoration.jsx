import React from 'react';
import Icon from './Icon';

export default function MediaDecoration({ mediaLinks = [] }) {
  return (
    <div className='fixed top-0 left-5 z-[60] w-fit invisible lg:visible'>
      <span className='block h-[33vh] border-l border-dracula-comment w-0 mx-auto' />
      <ul className='flex flex-col gap-y-2 bg-dracula-dark p-2'>
        {mediaLinks.map(({ id, link, icon, label }) => (
          <li key={id}>
            <a className='text-dracula-purple' href={link} aria-label={label}>
              <Icon className='w-6 h-6' code={icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
