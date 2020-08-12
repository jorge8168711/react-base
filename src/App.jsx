import React from 'react';
import logo from './assets/img/logo.svg';

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-900'>
      <header className='text-white'>
        <img src={logo} className='w-64' alt='logo' />

        <p className='font-bold'>Initial react app with the following:</p>

        <ul className='p-8 my-4 text-gray-700 bg-white rounded'>
          <li>- eslint config airbnb</li>
          <li>- prettier</li>
          <li>- tailwindcss</li>
          <li>- MaterialUI</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
