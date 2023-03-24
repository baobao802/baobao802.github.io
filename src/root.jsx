import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer, MediaDecoration } from '@/components';
import data from '@/data.json';

const navLinks = data.pages.map((page) => ({
  id: page.id,
  path: page.path,
  name: page.name,
}));

const mediaLinks = data.media_links;
const email = data.contacts.email;

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='overall-layout'>
      <MediaDecoration mediaLinks={mediaLinks} />
      <Header navLinks={navLinks} />
      <main className='layout-body'>
        <Outlet />
      </main>
      <Footer mediaLinks={mediaLinks} email={email} />
    </div>
  );
}
