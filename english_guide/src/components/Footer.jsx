import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const containerRef = useRef(null);
  const gradients = [
    "linear-gradient(45deg, #00dfd8, #007cf0)",
    "linear-gradient(45deg, #ff4d4d, #f9cb28)",
    "linear-gradient(45deg, #ff0080, #7928ca)"
  ];
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients]);

  return (
    <footer className="py-3.5 px-5 md:flex md:items-center md:justify-between dark:bg-black">
      {/* Return Back Button */}
      <button
        className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-[#ffffff73]  bg-black text-white hover:bg-white hover:text-black hover:border-black border inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all  "
        onClick={() => window.history.back()}
      >
        <IoArrowBack fontSize={19.5} className="mr-2" />
        {language === "english" ? "Back" : "Volver"}
      </button>
      <div
        className="search-container"
        style={{ background: gradients[gradientIndex] }}
      >
        <Link
          to="/"
          className="search-input dark:bg-black bg-white dark:hover:bg-transparent hover:bg-transparent dark:text-white dark:hover:text-white text-black hover:text-white inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all"
        >
          <IoArrowBack fontSize={19.5} className="mr-2" />
          {language === "english" ? "Home" : "Inicio"}
        </Link>
      </div>
    </footer>
  );
};

export default Header;
