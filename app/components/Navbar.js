import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sm:hidden bg-blue-500">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6">
          <Link href="/" className="text-white font-bold text-xl">HackScribe
          </Link>
          <button
            className="text-white focus:outline-none sm:hidden"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className={isOpen ? 'hidden' : 'block'}
                fillRule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                d="M4.293 6.293a1 1 0 0 1 1.414 0L12 11.586l6.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } sm:hidden bg-blue-700 py-4 px-6`}
        >
          <Link href="/about" className="block text-white font-medium text-lg mb-4">About
          </Link>
          <Link href="/services" className="block text-white font-medium text-lg mb-4">Services
          </Link>
          <Link href="/create" className="block text-white font-medium text-lg">Create
          </Link>
        </div>



      </nav>
      {/* for desktop */}

      <nav className="hidden sm:flex bg-blue-500 py-4">
        <div className="container mx-auto px-10 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">HackScribe
          </Link>
          <div className="flex space-x-4">
            <Link href="/about" className="text-white hover:underline">About
            </Link>
            <Link href="/services" className="text-white hover:underline">Services
            </Link>
            <Link href="/create" className="text-white hover:underline">Create
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
