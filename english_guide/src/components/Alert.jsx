import React, { useContext } from "react";
import { LanguageContext } from "../components/context/LanguageContext";

const Alert = ({ showAlert, onClose }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {showAlert && (
        <div className="fixed z-10 inset-0 bg-zinc-900 bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center">
          <div className="mx-auto w-[22rem] flex items-center justify-center dark:bg-[#0c0c0c] ring-1 ring-white/10 backdrop-blur flex flex-col alert fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 dark:shadow-dark-xl bg-gray-50 text-slate-900 dark:text-white text-red-800 rounded-lg">
            <div className="flex items-center my-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="text-lg font-semibold">
                {language === "english" ? "Access denied" : "Acceso denegado"}
              </h3>
            </div>
            <div className="mt-2 mb-4 text-sm text-center leading-tight">
              {language === "english"
                ? "Contact to the master chief to request your login credentials"
                : "Contacte con el administrador para solicitar sus credenciales de acceso"}
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={onClose}
                className="inline-block w-full px-5 py-2.5 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 hover:text-white  bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600"
              >
                {language === "english" ? "Close" : "Cerrar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
