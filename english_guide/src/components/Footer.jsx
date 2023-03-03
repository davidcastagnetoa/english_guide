import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="py-3.5 px-5 md:flex md:items-center md:justify-between dark:bg-slate-900">
      {/* Return Back Button */}
      <button className="flex items-center justify-center py-2 px-4 outline-none bg-gh-bg-secondary dark:hover:bg-sky-200 dark:active:bg-sky-500 border-gh-bg-secondary active:bg-[#1e293b] ease-linear transition-all duration-150 text-white text-base hover:bg-gh-bg-primary active:shadow-active shadow-primary border-default border-solid rounded-full dark:bg-sky-300  dark:text-slate-900 dark:border-transparent" onClick={() => window.history.back()}>
        <IoArrowBack fontSize={19.5} className="mr-2" />
        {language === "english" ? "Back" : "Volver"}
      </button>
    </footer>
  );
};

export default Header;
