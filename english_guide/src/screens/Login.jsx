import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../components/context/LanguageContext";
import Switcher from "../components/Switcher";

const Login = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <main className="dark:bg-slate-900 bg-gray-50 text-slate-900 dark:text-white h-screen flex flex-col justify-center">
      <div className="flex flex-wrap justify-center ">
        <div className="w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
          {/* Card with Shadow */}
          <div className="relative">
            {/* White Shadow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
            {/* Login Card */}
            <div className="relative z-0 flex flex-col justify-between h-[30rem] min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border  dark:bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur px-6 py-3.5">
              <Switcher />
              <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6    ">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:bg-gradient-to-r bg-black dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display tracking-tight text-transparent">
                  {language === "english" ? "English Guide" : "Guía Inglés"}
                </span>
              </div>
              <div className="p-12 pt-0 pb-6 text-center">
                <div className="mb-6 text-center text-slate-500">
                  <small>{language === "english" ? "Log in with credentials" : "Inicia sesión con tus credenciales"}</small>
                </div>
                <form role="form text-left">
                  <div className="mb-4">
                    <input
                      type="email"
                      className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg bg-white bg-clip-padding py-2.5 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow     items-center justify-center ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500"
                      placeholder={language === "english" ? "Username" : "Nombre de usuario"}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg bg-white bg-clip-padding py-2.5 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow     items-center justify-center ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500"
                      placeholder={language === "english" ? "Password" : "Contraseña"}
                    />
                  </div>
                  <div className="min-h-6 mb-0.5 block pl-12 text-left">
                    <input
                      id="rememberMe"
                      className="mt-0.5 rounded-full duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                      type="checkbox"
                    />
                    <label
                      className="ml-1 text-sm font-normal cursor-pointer select-none text-slate-700 dark:text-slate-400"
                    >
                      {language === "english" ? "Remember me" : "Recordar acceso"}
                    </label>
                  </div>
                  <div className="text-center">
                    <Link
                    to="/"
                      className="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      {language === "english" ? "Log in" : "Inicia sesión"}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
