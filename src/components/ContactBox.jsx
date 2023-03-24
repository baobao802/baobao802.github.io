import React from 'react';
import Icon from './Icon';

export default function ContactBox({ infos = [] }) {
  return (
    <div className='frame border-dracula-comment w-fit p-4'>
      <h3 className='mb-3'>Message me here</h3>
      <ul>
        {infos.map(({ icon, link, label }) => (
          <li
            key={label}
            className='mb-2 text-dracula-purple flex items-center'
          >
            <a className='flex items-center' href={link} aria-label={label}>
              <Icon className='w-6 h-6 mr-2' code={icon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
