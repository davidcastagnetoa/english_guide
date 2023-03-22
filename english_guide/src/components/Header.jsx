import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_securitas.webp";
import { IoMdSearch } from "react-icons/io";
import Switcher from "./Switcher";
import DropdownMenu from "./DropdownMenu";
import { LanguageContext } from "./context/LanguageContext";

const Header = (props) => {
  const { searchTerm, setSearchTerm } = props;
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const { language } = useContext(LanguageContext);

  function handleClick() {
    setToggleSidebar((prevState) => !prevState);
  }

  const handleWindowResize = () => {
    if (window.innerWidth >= 1024) {
      setToggleSidebar(true);
    } else {
      setToggleSidebar(false);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header>
      <nav className="font-titillium border-gray-200 px-4 lg:px-6 py-3.5 dark:bg-black text-slate-900 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            {/* Securitas Direct Logo */}
            <img
              src={document.documentElement.classList === "dark" ? logo : logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <div className="flex flex-col">
              <span className="text-sm font-light text-slate-400">CTA</span>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:bg-gradient-to-r bg-black dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display tracking-tight text-transparent">
                {language === "english" ? "English Guide" : "Guía Inglés"}
              </span>
            </div>
          </div>
          <div className="flex items-center lg:order-2 lg:w-96 w-full space-x-1 ">
            {/* Language Toggle Button */}
            <DropdownMenu />
            {/* input search */}
            <div className="flex w-full mr-2 p-2  rounded-md items-center justify-center text-sm ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-zinc-800 dark:ring-inset dark:ring-white/5 dark:hover:bg-zinc-800 dark:hover:ring-zinc-500">
              <IoMdSearch fontSize={25} className="ml-1" />
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder={language === "english" ? "Search" : "Buscar"}
                onFocus={() => navigate("/search")}
                className="ml-2 w-full dark:bg-zinc-800 outline-none"
              />
            </div>
            {/* Toggle dark/light button */}
            <Switcher />
            {/* Hamburger Toggle */}
            {/* <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>
          {/* Toggle Hambuerger Button SideBar Elements */}
          {/* {toggleSidebar && (
            <div
              className="justify-between items-center w-full space-between lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col justify-between w-[33rem] maxdesktop:w-full mt-4 font-medium lg:flex-row lg:space-x-4 gap-x-2 lg:mt-0 text-sm">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 font-medium text-gray-700 dark:text-[#67b1c5] hover:text-black dark:hover:text-white"
                  >
                    {language === "english" ? "HOME" : "INICIO"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/maintenance"
                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 font-medium text-gray-700 dark:text-[#67b1c5] hover:text-black dark:hover:text-white"
                  >
                    {language === "english" ? "MAINTENANCES" : "MANTENIMIENTOS"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/robbery"
                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 font-medium text-gray-700 dark:text-[#67b1c5] hover:text-black dark:hover:text-white"
                  >
                    {language === "english" ? "ROBBERY" : "ROBOS"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mails"
                    className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 font-medium text-gray-700 dark:text-[#67b1c5] hover:text-black dark:hover:text-white"
                  >
                    {language === "english" ? "MAILS" : "EMAILS"}
                  </Link>
                </li>
              </ul>
            </div>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
