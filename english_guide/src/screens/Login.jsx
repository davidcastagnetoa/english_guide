import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { LanguageContext } from "../components/context/LanguageContext";
import Switcher from "../components/Switcher";

const Login = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado del formulario
    // Verificar las credenciales
    if (username === "TIRIRI" && password === "rocilito") {
      // Almacenar las credenciales en localStorage si se ha seleccionado "Recordar usuario y contraseña"
      if (rememberMe) {
        localStorage.setItem("TIRIRI", username);
        localStorage.setItem("rocilito", password);
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.clear();
      }
      // Redirigir al usuario a la página principal
      navigate("/");
    } else {
      localStorage.clear();
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Recuperar las credenciales almacenadas en localStorage si se ha seleccionado "Recordar usuario y contraseña"
  useEffect(() => {
    const storedUsername = localStorage.getItem("TIRIRI");
    const storedPassword = localStorage.getItem("rocilito");
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <main className="dark:bg-slate-900 bg-gray-50 text-slate-900 dark:text-white h-screen flex flex-col justify-center">
      {showAlert && <Alert showAlert={showAlert} onClose={closeAlert} />}
      <div className="flex flex-wrap justify-center ">
        <div className="px-6 mx-auto flex-0">
          {/* Card with Shadow */}
          <div className="relative">
            {/* White Shadow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
            {/* Login Card */}
            <div className="relative z-0 flex flex-col justify-between w-[23rem] h-[30rem] min-w-0 break-words card ">
              <Switcher />
              <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6    ">
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:bg-gradient-to-r bg-black dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display tracking-tight text-transparent">
                  {language === "english" ? "English Guide" : "Guía Inglés"}
                </span>
              </div>
              <div className="p-8 pt-0 pb-6 text-center">
                <div className="text-center text-slate-500 mb-1">
                  <small>
                    {language === "english"
                      ? "Log in with credentials"
                      : "Inicia sesión con tus credenciales"}
                  </small>
                </div>
                {/* Login Form */}
                <form role="form text-left" onSubmit={handleLogin}>
                  <div className="mb-4">
                    {/* username input */}
                    <input
                      type="text"
                      className="text-sm focus:shadow-primary-outline placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg bg-white bg-clip-padding py-2.5 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow     items-center justify-center ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500"
                      placeholder={
                        language === "english"
                          ? "Username"
                          : "Nombre de usuario"
                      }
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    {/* password input */}
                    <input
                      type="password"
                      className="text-sm focus:shadow-primary-outline placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg bg-white bg-clip-padding py-2.5 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow     items-center justify-center ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500"
                      placeholder={
                        language === "english" ? "Password" : "Contraseña"
                      }
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Remmeber me Toggle */}
                  <div className="min-h-6 mb-0.5 block pl-12 text-left">
                    <input
                      id="rememberMe"
                      className="mt-0.5 rounded-full duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleCheckboxChange}
                    />
                    <label className="ml-1 text-sm font-normal cursor-pointer select-none text-slate-700 dark:text-slate-400">
                      {language === "english"
                        ? "Remember me"
                        : "Recordar acceso"}
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-block w-full px-5 py-2.5 mt-6 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 hover:text-white  bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600"
                    >
                      {language === "english" ? "Log in" : "Inicia sesión"}
                    </button>
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
