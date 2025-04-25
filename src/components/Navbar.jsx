import React, { useEffect, useState } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav id="Home" className="font-kodchasan-regular w-full z-20 top-0 start-0 bg-white font-display">
        <div className="border-b-2 border-red-700 text-red-700 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
          {/* Centered links - anchors */}
          <div
            className={`order-1 text-xl items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-red-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 md:hover:text-red-900 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="AboutMe"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:hover:text-red-900 md:p-0 cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="Projects"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:hover:text-red-900 md:p-0 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="CV"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:hover:text-red-900 md:p-0 cursor-pointer"
                >
                  CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered logo */}
          <div
            className={`order-2 md:order-2 mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
              isMenuOpen ? 'hidden' : 'flex'
            }`}
          >
            <a href="/" className="flex items-center space-x-3">
              <img src="images/RedTomato.jpg" className="h-20" alt="Tomato" />
            </a>
          </div>

          {/* Hamburger menu button */}
          <div className="order-3 flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <p aria-expanded={isMenuOpen} className="text-black text-xl text-bold px-4 py-2 text-center font-bold">
              Estrada<span className="text-red-700">ROJO</span>
            </p>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* Scroll-to-Top Button */}
          <ScrollToTopButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;