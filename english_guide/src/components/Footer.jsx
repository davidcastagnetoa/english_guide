import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="py-3.5 px-5 md:flex md:items-center md:justify-between dark:bg-slate-900">
      {/* Return Back Button */}
      <button
        className="inline-flex px-3 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600  leading-normal text-xs ease-in tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md"
        onClick={() => window.history.back()}
      >
        <IoArrowBack fontSize={19.5} className="mr-2" />
        {language === "english" ? "Back" : "Volver"}
      </button>
    </footer>
  );
};

export default Header;
