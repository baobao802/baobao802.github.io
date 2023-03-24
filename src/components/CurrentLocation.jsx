import React from 'react';

export default function CurrentLocation({ pathname = '', description = '' }) {
  const currentPathname = pathname.replace('/', '');

  return (
    <div className='my-10'>
      <h1 className="text-3xl flex items-center mb-5 before:content-['/'] before:text-dracula-purple before:mr-0.5">
        {currentPathname}
      </h1>
      <p className='text-dracula-comment'>/* {description} */</p>
    </div>
  );
}
