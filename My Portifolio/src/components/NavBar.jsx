import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-1 lg:px-6 py-4 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                My Portfolio
              </span>
            </a>

      
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
              
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zM3 10h14a1 1 0 110 2H3a1 1 0 110-2zM3 15h14a1 1 0 110 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                </svg>
              
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

        
            <div
              className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1 mx-4`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                      lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0
                      dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                      lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                      lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0
                      dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                      lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                      lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0
                      dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                      lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
