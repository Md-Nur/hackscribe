import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 bg-gray-900 text-white">
      <div className="pl-16">
        <Link href="/" className="text-xl font-bold">My Blog
        </Link>
      </div>
      <div className="pr-16">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">About
            </Link>
          </li>
          <li>
            <Link href="/contact"className="text-white hover:text-gray-300">Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
