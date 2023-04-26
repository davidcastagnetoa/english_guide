import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { pages } from "../constants/index";
import { Link } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";
import HomeLoader from "../assets/skeleton/HomeLoader";

const HomeSection = ({ setShowCopiedAlert }) => {
  const { language } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate component loading for a few seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 justify-center items-center h-auto w-[70rem] gap-4 4xl:gap-8 mt-5 4x:mt-0 mx-auto maxminiteams:gap-2">
        {/* Render the Skeleton component while components are loading */}
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <HomeLoader key={index} />
            ))
          : pages.map((page, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center w-max my-0 mx-auto"
              >
                {/* Card */}
                <div className="card p-0 h-[19rem] max3xl:h-fit maxminiteams:h-[18rem] dark:bg-[#151618]">
                  {/* Image Logo */}
                  <Link to={page.to}>
                    <img
                      src={page.icon}
                      alt={page.title[language]}
                      className="rounded-t-lg w-60 h-auto object-cover"
                    />
                  </Link>
                  <div className="px-5 py-3 w-60 flex flex-col justify-between h-[10.5rem] max3xl:h-[9.5rem] maxminiteams:h-[9.25rem] maxminiteams:p-4">
                    <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                      {page.title[language]}
                    </h5>
                    <p className="mb-1 text-xs font-normal text-gray-700 dark:text-gray-400">
                      {page.description[language]}
                    </p>
                    {/* Divider */}
                    <hr className="h-px my-3 dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
                    {/* Access Button */}
                    <div className="flex flex-row justify-between">
                      <Link
                        to={page.to}
                        className="inline-flex items-center px-2 py-1 text-sm text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 hover:text-white  bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600"
                      >
                        {language === "english" ? "Read more" : "Acceder"}
                      </Link>
                      {/* Copy extension button */}
                      <button
                        id="copyButtonTxt"
                        onClick={() => {
                          navigator.clipboard.writeText(page.ext[language]);
                          setShowCopiedAlert(true);
                          setTimeout(() => setShowCopiedAlert(false), 1500);
                        }}
                        className="flex items-center bg-transparent px-2 py-1 border border-solid shadow-none rounded-lg dark:border-slate-700 border-slate-300 bg-clip-border  ease-in-out group text-slate-500 "
                      >
                        <IoMdCopy />
                        <span className="ml-1 text-xs leading-normal">
                          {page.ext[language]}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default HomeSection;
