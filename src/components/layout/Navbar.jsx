import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import DarkMode from "../utilities/DarkMode";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="py-8 bg-third font-primary relative dark:bg-gray-900 ">
      <div className="container">
        <div className="flex flex-col gap-3 sm:gap-7 sm:flex-row items-center sm:justify-between md:justify-center lg:justify-between ">
          <h1 className="text-primary font-bold text-5xl">
            <a href="#home">Anil Howa.</a>
          </h1>
          <div>
            <ul
              className={`w-full lg:w-auto ${
                showMenu ? "-translate-x-full" : "-translate-x-0"
              } transition-all flex flex-col lg:flex-row items-center gap-6 font-primary text-lg dark:text-white font-semibold text-secondary absolute lg:static top-32 left-0 mt-3 sm:mt-0 h-screen bg-primary lg:bg-third pt-3 sm:pt-0 lg:h-auto`}
            >
              <li>
                <Link
                  to="/"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonial"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center dark:text-white text-2xl gap-6 text-secondary">
              <li>
                <Link to="https://www.linkedin.com/in/anil-howa-profile1/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/AnilHowaFdr">
                  <FaGithub />
                </Link>
              </li>
              <li className="block lg:hidden">
                <HiMenu
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-2xl cursor-pointer"
                />
              </li>
            </ul>
            <div className="dark:bg-white text-secondary dark:rounded-xl">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
