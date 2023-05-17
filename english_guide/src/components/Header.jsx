import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_securitas.webp";
import { IoMdSearch } from "react-icons/io";
import Switcher from "./Switcher";
import DropdownMenu from "./DropdownMenu";
import { LanguageContext } from "./context/LanguageContext";

const Header = (props) => {
  const { searchTerm, setSearchTerm } = props;
  const { language } = useContext(LanguageContext);

  const navigate = useNavigate();

  return (
    <header className="z-[200]">
      <nav className="font-titillium border-gray-200 px-4 lg:px-6 py-2.5 4xl:py-3.5 text-slate-900 dark:text-white">
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
          <div className="flex items-center lg:order-2 lg:w-96 w-full space-x-1 z-50">
            {/* Language Toggle Button */}
            <DropdownMenu />
            {/* input search */}
            <div className="flex w-full mr-2 p-2 rounded-md items-center justify-center text-sm ring-1 ring-slate-300 hover:ring-slate-30 dark:ring-inset dark:ring-white/25 dark:hover:ring-zinc-500">
              <IoMdSearch fontSize={25} className="ml-1" />
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                placeholder={language === "english" ? "Search" : "Buscar"}
                onFocus={() => navigate("/search")}
                className="ml-2 w-full bg-transparent outline-none"
              />
            </div>
            {/* Toggle dark/light button */}
            <Switcher />
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
