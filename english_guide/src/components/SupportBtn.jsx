import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import logoSupport from "../assets/images/support_logo.png";

const SupportBtn = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <Link
      to="/support"
      className="flex flex-col justify-between items-center w-max my-0 mx-auto"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
        <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur px-6 py-3.5">
          <div className="w-40 h-48 flex flex-col justify-between">
            <div className="flex items-center flex-row justify-between">
              <svg
                aria-hidden="true"
                viewBox="0 0 42 10"
                fill="none"
                className="h-2.5 w-auto stroke-slate-500/30"
              >
                <circle cx="5" cy="5" r="4.5"></circle>
                <circle cx="21" cy="5" r="4.5"></circle>
                <circle cx="37" cy="5" r="4.5"></circle>
              </svg>
              <div className="flex h-6 rounded-full text-slate-500">
                <div className="flex items-center rounded-full text-xs">
                  {language === "english" ? "process.data" : "procesos.data"}
                </div>
              </div>
            </div>
            <div className="my-3 mx-auto">
              <img src={logoSupport} alt="support" className="h-24" />
            </div>
            <div className="flex space-x-2 text-sm">
              <div className="flex h-6 rounded-full bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300">
                <div className="flex items-center rounded-full px-2.5 bg-slate-800">
                  {language === "english" ? "SUPPORT" : "VALIDACIONES"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SupportBtn;
