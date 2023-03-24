import React from 'react';

export default function SkillBoard({ name = '', skills = [] }) {
  return (
    <div className='frame text-dracula-comment'>
      <h3 className='px-4 py-2 font-bold text-dracula-white'>{name}</h3>
      <hr className='border-current' />
      <ul className='px-4 py-2 flex flex-wrap gap-4'>
        {skills.map((skill) => (
          <li key={skill} className='text-dracula-green'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
