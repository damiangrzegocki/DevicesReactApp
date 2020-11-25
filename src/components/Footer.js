import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='py-4 bg-dark text-white-50'>
      <div className='container text-center'>
        <p className='mb-0'>Created by Damian Grzegocki @ {year}</p>
      </div>
  </footer>
  );
}

export default Footer;