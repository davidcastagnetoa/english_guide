import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_securitas.webp";
import { IoMdSearch } from "react-icons/io";
import Switcher from './Switcher';
import DropdownMenu from "./DropdownMenu";

const Header = (props) => {
  const { searchTerm, setSearchTerm } = props;
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [language, setLanguage] = useState("english");
  
  function handleClick() {
    setToggleSidebar((prevState) => !prevState);
  }

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
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
      <nav className="border-gray-200 px-6 lg:px-8 py-2.5 bg-l_gold_default dark:bg-gold-bg-default">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <img
              src={document.documentElement.classList === "dark" ? logo : logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900  dark:text-white">
            {language === 'english' ? 'TTCTA English Team Guide' : 'Guía equipo TTCTA Ingles'} 
            </span>
          </div>
          <div className="flex items-center lg:order-2 lg:w-96 w-full space-x-1 space-y-2 ">
            <DropdownMenu onLanguageChange={handleLanguageChange}/>
            {/* input search */}
            <div className="flex justify-start items-center w-full mr-2 px-2 rounded-md bg-l_gold_primary dark:bg-gh-bg-primary border-none outline-none focus-within:shadow-sm">
              <IoMdSearch fontSize={25} className="ml-1" />
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder={language === 'english' ? 'Search' : 'Buscar'} 
                onFocus={() => navigate('/search')}
                className='p-2 w-full bg-l_gold_primary dark:bg-gh-bg-primary outline-none'
              />
            </div>
            {/* Toggle dark/light button */}
            <Switcher />
            <button
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
            </button>
          </div>
          {/* Toggle Hambuerger Button SideBar Elements */}
          {toggleSidebar && (
            <div
              className="justify-between items-center w-full space-between lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col justify-between w-[33rem] maxdesktop:w-full mt-4 mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                <li>
                <Link to="/"
                  className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 hover:font-bold text-gray-700 dark:text-gray-300 hover:text-black  dark:hover:text-white border-gray-700"
                  >
                    {language === 'english' ? 'Home' : 'Inicio'}
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance"
                  className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 hover:font-bold text-gray-700 dark:text-gray-300 hover:text-black  dark:hover:text-white border-gray-700"
                  >
                    {language === 'english' ? 'Maintenances' : 'Mantenimientos'}
                  </Link>
                </li>
                <li>
                <Link to="/robbery"
                  className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 hover:font-bold text-gray-700 dark:text-gray-300 hover:text-black  dark:hover:text-white border-gray-700"
                  >
                    {language === 'english' ? 'Robbery' : 'Robos'}
                  </Link>
                </li>
                <li>
                <Link to="/mails"
                  className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:p-0 hover:font-bold text-gray-700 dark:text-gray-300 hover:text-black  dark:hover:text-white border-gray-700"
                  >
                    {language === 'english' ? 'Mails' : 'Emails'}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
