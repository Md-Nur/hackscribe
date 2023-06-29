import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#32445d] p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-[#c8ebf5] mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold">Stay Connected</h3>
            <p className="mt-2">Follow us on social media for updates and news.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Md.Nur9211/" target="_blank" className="text-[#c8ebf5] hover:text-gray-300 transition duration-300">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/MdNur9211" target="_blank" className="text-[#c8ebf5] hover:text-gray-300 transition duration-300">
              <FaTwitter className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/md_nur_e_alam/" target="_blank" className="text-[#c8ebf5] hover:text-gray-300 transition duration-300">
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; 2023 Muhammad Nur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


