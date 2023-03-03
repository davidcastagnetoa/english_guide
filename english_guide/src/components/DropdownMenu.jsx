import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logosp from "../assets/images/es-img.svg";
import logoen from "../assets/images/uk-img.svg";
import { LanguageContext } from "./context/LanguageContext";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const changeLanguageHandler = (language) => {
    changeLanguage(language);
  };

  const menuClassName = isOpen ? "flex " : "hidden";
  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  return (
    <div className="relative text-gray-700 dark:text-gray-300">
      <button
        onClick={handleClick}
        type="button"
        className="hidden md:flex w-max items-center justify-between gap-x-1 mr-3"
      >
        <img
          src={language === "english" ? logoen : logosp}
          className="w-7"
          alt="language"
        />
        {/* {language === 'english' ? 'EN' : 'ES'} */}
      </button>
      <div
        className={menuClassName}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="absolute z-10 top-full mt-3 w-fit left-1/2 -translate-x-24 space-y-1 rounded-xl divide-y divide-slate-400 bg-white p-1 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5 ">
          {/* List Data */}
          <ul className="py-1 text-sm text-gray-700 dark:text-slate-400">
            <li>
              <button
                onClick={() => changeLanguageHandler("english")}
                className="w-full text-sm font-normal block py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguageHandler("español")}
                className="w-full text-sm font-normal block py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                Español
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
