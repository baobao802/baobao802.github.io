import React from 'react';
import ContactBox from './ContactBox';
import Section from './Section';

export default function ContactSection({ title = 'contacts', contacts = {} }) {
  const { brief, list } = contacts;

  return (
    <Section title={title}>
      <div className='flex flex-col gap-10 md:flex-row'>
        <div className='flex-1'>
          <p>{brief}</p>
        </div>

        <div className='flex-1'>
          <div className='w-fit ml-auto'>
            <ContactBox infos={list} />
          </div>
        </div>
      </div>
    </Section>
  );
}
