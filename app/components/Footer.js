import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="h-8 w-8 mr-2" src="/logo.svg" alt="Logo" />
            <h2 className="text-xl font-semibold">HackScribe</h2>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Nur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
