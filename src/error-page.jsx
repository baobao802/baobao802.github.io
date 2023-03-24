import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  const goBackHome = () => navigate('/portfolio');

  return (
    <section className='container mx-auto min-h-screen flex justify-center items-center'>
      <div className='text-center'>
        <div className='text-xl mb-3'>
          Sorry, an unexpected error has occurred
        </div>
        <div className='text-dracula-red mb-3'>{error.toString()}</div>
        <button onClick={goBackHome}>Back to home</button>
      </div>
    </section>
  );
}
