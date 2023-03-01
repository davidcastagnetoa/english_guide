import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logosp from "../assets/images/sp-img.jpg";
import logoen from "../assets/images/us-img.jpg";

const DropdownMenu = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("english");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (language) => {
    props.onLanguageChange(language);
    setLanguage(language);
    console.log(language)
  }

  const menuClassName = isOpen ? "flex " : "hidden";
  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  return (
    <div className="relative text-gray-700 dark:text-gray-300">
      <button onClick={handleClick} type="button" className="hidden md:flex w-max items-center justify-between gap-x-1 mr-3">
        <img src={language === 'english' ? logoen : logosp} className="w-6" alt="language" />
        {language === 'english' ? 'English' : 'Español'}
      </button>
      <div className={menuClassName}>
        <div className="border border-slate-400 dark:border-[#9c704c5b] z-10 w-[8rem] bg-l_gold_default rounded divide-y divide-slate-400 shadow dark:bg-gh-bg-default dark:divide-[#9c704c5b] absolute mt-1 right-0 left-auto top-auto">
          {/* List Data */}
          <ul
            className="py-1 text-sm text-gray-700 dark:text-slate-400"
          >
            <li>
              <button
                onClick={() => changeLanguage('english')}
                className="w-full text-sm font-normal block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('español')}
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