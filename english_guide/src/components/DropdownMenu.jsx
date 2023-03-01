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
        <div className="z-10 w-[6rem] bg-l_gold_default rounded divide-y divide-slate-400 shadow dark:bg-st2_btn1 dark:divide-[#9c704c5b] absolute mt-1 right-0 left-auto top-auto">
          {/* List Data */}
          <ul className="py-1 text-sm text-gray-700 dark:text-slate-400">
            <li>
              <button
                onClick={() => changeLanguageHandler("english")}
                className="w-full text-sm font-normal block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguageHandler("español")}
                className="w-full text-sm font-normal block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
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
