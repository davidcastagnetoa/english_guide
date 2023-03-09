import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import bgRobbery from "../assets/images/burglar.jpg";
import CopyButton from "./CopyButton";

const RobberyBtn = () => {
  const { language } = useContext(LanguageContext);
  const [copied, setCopied] = useState(false);
  // Copy Alert
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {setCopied(false);}, 2000);
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center w-max my-0 mx-auto">
      <div className="relative">
        {/* White Shadow */}
        {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div> */}
        <div className="card p-0">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <img src={bgRobbery} alt="robbery" className="rounded-t-lg w-60" />
          <div class="p-5 w-60">
            <h5 class="mb-2 font-semibold text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {language === "english" ? "ROBBERY" : "ROBOS"}
            </h5>
            <p class="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              Process, speechs, tickets and maintenances.
            </p>
            {/* Divider */}
            <hr class="h-px my-4 dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
            <div className="flex flex-row justify-between">
              <Link
                to="/robbery"
                className="inline-flex items-center px-2 py-1 text-sm text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 hover:text-white  bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600"
              >
                Read more
              </Link>
              <CopyButton textToCopy="66065" onCopy={handleCopy} />
            </div>
            {/* Copied Alert */}
            {copied && (
                <span class="fixed bottom-[3.5rem] left-[5.5rem]   bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  {language === "english" ? "copied" : "copiado"}
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobberyBtn;
