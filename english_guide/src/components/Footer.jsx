import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack, IoHome } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";
import { gsap } from "gsap";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const gradients = useMemo(
    () => [
      { name: "Gradient 1", colors: ["#4b6cb7", "#182848"] },
      { name: "Gradient 2", colors: ["#f857a6", "#ff5858"] },
      { name: "Gradient 3", colors: ["#00c6ff", "#0072ff"] },
    ],
    []
  );

  const [gradientIndex, setGradientIndex] = useState(0);

  const backgroundRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex(prevIndex => (prevIndex + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [gradients]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(backgroundRef.current, { duration: 4, keyframes: [
      {
        background: `linear-gradient(to right, ${gradients[0].colors.join(", ")})`,
      },
      {
        background: `linear-gradient(to right, ${gradients[1].colors.join(", ")})`,
      },
      {
        background: `linear-gradient(to right, ${gradients[2].colors.join(", ")})`,
      },
      {
        background: `linear-gradient(to right, ${gradients[0].colors.join(", ")})`,
      }
    ] });
  }, [gradients]);

  return (
    <footer className="font-titillium py-2.5 4xl:py-3.5 px-5 md:flex md:items-center md:justify-between dark:bg-black">
      {/* Home Button */}
      <div
        className="search-container"
        ref={backgroundRef}
        style={{ background: `linear-gradient(to right, ${gradients[gradientIndex].colors.join(", ")})` }}
      >
        <Link
          to="/"
          className="search-input dark:bg-black bg-white dark:hover:bg-transparent hover:bg-transparent dark:text-white dark:hover:text-white text-black hover:text-white inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all"
        >
          <IoHome fontSize={16} className="mr-2" />
          {language === "english" ? "Home" : "Inicio"}
        </Link>
      </div>
      {/* Return Back Button */}
      <button
        className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-[#ffffff73]  bg-black text-white hover:bg-white hover:text-black hover:border-black border inline-flex px-3 py-2.5 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all  "
        onClick={() => window.history.back()}
      >
        <IoArrowBack fontSize={16} className="mr-2" />
        {language === "english" ? "Back" : "Volver"}
      </button>
    </footer>
  );
};

export default Footer;
