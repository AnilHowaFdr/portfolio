import { useState } from "react";
import DarkMode from "../utilities/DarkMode";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-fifth fixed w-full z-10 shadow-lg dark:bg-gray-950">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-5xl">
              <Link to="/">Anil Howa.</Link>
            </h1>
          </div>
          <ul className=" hidden md:flex space-x-2 lg:space-x-4 text-secondary dark:text-fifth">
            <li>
              <Link
                to="/"
                className="px-3 py-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="px-3 py-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="px-3 py-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="px-3 py-2 duration-300 text-base font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="duration-300 text-base font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li className="dark:bg-white text-secondary dark:rounded-xl">
              <DarkMode />
            </li>
          </ul>
          <div className="flex gap-3 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-fifth focus:outline-hidden"
            >
              {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div className="block dark:bg-white text-secondary dark:rounded-xl">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col justify-center items-center bg-third">
            <li>
              <Link
                onClick={toggleMenu}
                to="/"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/about"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/service"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/portfolio"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/testimonial"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/contact"
                className="block duration-300 text-lg font-bold px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
