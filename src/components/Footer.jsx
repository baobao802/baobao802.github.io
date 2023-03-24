import React from 'react';
import Logo from './Logo';
import Icon from './Icon';
import { Link } from 'react-router-dom';

export default function Footer({ mediaLinks, email }) {
  return (
    <footer className='layout-footer'>
      <div className='mb-10 md:flex md:justify-between'>
        <div className='mb-8 max-w-xl'>
          <div className='flex space-x-10 mb-4'>
            <Link to='/'>
              <Logo />
            </Link>
            <a
              className='text-dracula-purple'
              href={email.link}
              aria-label={email.label}
            >
              {email.label}
            </a>
          </div>
          <p className=''>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <h3 className='text-2xl font-medium mb-2'>Media</h3>
          <ul className='flex flex-nowrap space-x-2'>
            {mediaLinks.map(({ id, link, icon, label }) => (
              <li key={id}>
                <a
                  className='text-dracula-purple'
                  href={link}
                  aria-label={label}
                >
                  <Icon className='w-6 h-6' code={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className='text-center text-dracula-comment leading-5'>
          © Copyright 2022. Made by <a href='https://elias-dev.ml/'>Elias</a>
        </p>
      </div>
    </footer>
  );
}
