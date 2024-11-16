import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import DarkMode from "../utilities/DarkMode";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
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
                className="px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
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
            <li className="dark:bg-white text-secondary dark:rounded-xl">
              <DarkMode />
            </li>
          </ul>
          <div className="flex gap-3 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-fifth focus:outline-none"
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
                to="/"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="block px-3 py-2 duration-300 text-lg font-bold cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
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

    // <nav className="py-8 bg-fifth font-primary relative dark:bg-gray-950 ">
    //   <div className="container">
    //     <div className="flex flex-col gap-3 sm:gap-7 sm:flex-row justify-center items-center lg:justify-between">
    //       <h1 className="text-primary font-bold text-3xl lg:text-5xl">
    //         <Link to="/">Anil Howa.</Link>
    //       </h1>
    //       <div>
    //         <ul
    //           className={`w-full lg:w-auto ${
    //             showMenu ? "-translate-x-full" : "-translate-x-0"
    //           } transition-all flex flex-col lg:flex-row gap-4 font-primary text-lg font-semibold text-secondary items-center dark:text-fifth absolute lg:static top-32 left-0 mt-3 sm:mt-0 bg-primary lg:bg-third dark:lg:bg-gray-950 h-screen pt-3 lg:h-auto`}
    //         >
    //           <li>
    //             <Link
    //               to="/"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-fifth lg:hover:border-b-primary hover:border-b-4 lg:hover:text-primary"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/about"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
    //             >
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/service"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
    //             >
    //               Service
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/portfolio"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
    //             >
    //               Portfolio
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/testimonial"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
    //             >
    //               Testimonial
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/contact"
    //               className="duration-300 text-lg font-bold  inline-block px-2 cursor-pointer hover:border-b-white md:hover:border-b-primary hover:border-b-4 md:hover:text-primary"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="flex items-center gap-6">
    //         <ul className="flex items-center dark:text-white text-2xl gap-6 text-secondary">
    //           <li>
    //             <Link to="https://www.linkedin.com/in/anil-howa-profile1/">
    //               <FaLinkedin />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="https://github.com/AnilHowaFdr">
    //               <FaGithub />
    //             </Link>
    //           </li>
    //           <li className="block lg:hidden">
    //             <HiMenu
    //               onClick={() => setShowMenu(!showMenu)}
    //               className="text-2xl cursor-pointer"
    //             />
    //           </li>
    //         </ul>
    //         <div className="dark:bg-white text-secondary dark:rounded-xl">
    //           <DarkMode />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
