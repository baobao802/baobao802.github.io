import React from 'react';
import { Link } from 'react-router-dom';

export default function Section({ title = '', viewAll = '', children }) {
  return (
    <section className='section'>
      {title && (
        <div className='flex justify-between items-center mb-10'>
          <h2 className="text-3xl flex items-center before:content-['#'] before:text-dracula-purple before:mr-0.5 after:w-20 after:h-[1px] after:inline-block after:bg-dracula-comment after:ml-4">
            {title}
          </h2>

          {viewAll && (
            <Link className='underline text-dracula-purple' to={viewAll}>
              View all
            </Link>
          )}
        </div>
      )}

      <div>{children}</div>
    </section>
  );
}
