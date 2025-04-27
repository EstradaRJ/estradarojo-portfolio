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
        <div className="border-b-2 border-red-600 text-red-600 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 sm:p-10">
          {/* Centered links - anchors */}
          <div
            className={`order-1 text-xl items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
              }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-red-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 cursor-pointer"
                >
                  <p class="group relative w-max">
                    <span>Home</span>
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600 group-hover:w-full"></span>
                  </p>

                </Link>
              </li>
              <li>
                <Link
                  to="AboutMe"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:p-0 cursor-pointer"
                >
                  <p class="group relative w-max">
                    <span>About Me</span>
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600 group-hover:w-full"></span>
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="Projects"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:p-0 cursor-pointer"
                >
                  <p class="group relative w-max">
                    <span>Projects</span>
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600 group-hover:w-full"></span>
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  to="CV"
                  smooth={true}
                  duration={1000}
                  className="block py-2 px-3 rounded-sm md:p-0 cursor-pointer"
                >
                  <p class="group relative w-max">
                    <span>CV</span>
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600 group-hover:w-full"></span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered logo */}
          <div
            className={`order-2 md:order-2 mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${isMenuOpen ? 'hidden' : 'flex'
              }`}
          >
            <a href="/" className="flex items-center space-x-3 transition duration-500 hover:scale-125 cursor-auto">
              <img src="images/RedTomato.jpg" className="h-20" alt="Tomato" />
            </a>
          </div>

          {/* Hamburger menu button */}
          <div className="order-3 font-bold text-lg flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <p class="group relative w-max">
              <span class="text-black">Estrada</span>
              <span class="text-red-600 absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600 group-hover:w-full"></span>
              <span class="text-red-600">ROJO</span>
            </p>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-600 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200"
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

        </div>
      </nav >
    </div >
  );
};

export default Navbar;