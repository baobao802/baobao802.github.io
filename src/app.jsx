import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/home';
import ProjectsPage from '@/pages/projects';
import AboutMePage from '@/pages/about-me';
import Root from './root';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'about-me', element: <AboutMePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
