import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../components/context/LanguageContext";
import Switcher from "../components/Switcher";
import BackgroundPatron from "../components/BackgroundPatron.jsx"
import { FaUserTie, FaLock } from "react-icons/fa";
import {
  Text,
  Card,
  Input,
  Toggle,
  Modal,
  useModal,
  CssBaseline,
  GeistProvider,
} from "@geist-ui/core";

const Login = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { visible, setVisible, bindings } = useModal();

  const handleLogin = (e) => {
    // Evitar comportamiento predeterminado del formulario
    e.preventDefault();
    // Verify credencials
    if (username === "TIRIRI" && password === "rocilito") {
      // Store the credencials in localStorage if "remember me" toogle is activated
      if (rememberMe === true) {
        localStorage.setItem("TIRIRI", username);
        localStorage.setItem("rocilito", password);
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.clear();
      }
      // Redirect the user to the home page
      navigate("/");
    } else {
      localStorage.clear();
      setVisible(true);
    }
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Retrieve credentials stored in localStorage if "Remember me" is selected
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

  //Theme colors
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const htmlElement = document.documentElement;
      if (htmlElement.classList.contains("light")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    const observer = new MutationObserver(updateTheme);
    const htmlElement = document.documentElement;

    observer.observe(htmlElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <main
        style={{
          background: theme === "light" ? "#fafafa" : "black",
          color: theme === "light" ? "black" : "white",
        }}
        className="dark:bg-black bg-gray-50 text-slate-900 dark:text-white h-screen flex flex-col justify-center"
      >
        <div className="flex flex-wrap justify-center ">
          {/* Green Top Patron */}
          <BackgroundPatron />
          <div className="px-6 mx-auto flex-0">
            {/* Card with Shadow */}
            <div className="relative">
              <Card
                shadow
                type="default"
                style={{
                  background: theme === "light" ? "#fafafa" : "black",
                  color: theme === "light" ? "black" : "white",
                  width: "23rem",
                  maxHeight: "fit-content",
                  position: "relative",
                  zIndex: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "30rem",
                  borderRadius: "1rem",
                }}
              >
                {/* Login Card */}
                {/* Dark/night toggle button */}
                <Switcher />
                <div className="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:bg-gradient-to-r bg-black dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 bg-clip-text font-display tracking-tight text-transparent">
                    <Text
                      h2
                      style={{ color: theme === "light" ? "black" : "white" }}
                    >
                      {language === "english" ? "English Guide" : "Guía Inglés"}
                    </Text>
                  </span>
                </div>
                <div className="p-6 pb-4 text-center rounded-b-2xl">
                  <div className="text-center dark:text-slate-300 text-slate-500 mb-2">
                    <small>
                      {language === "english"
                        ? "Log in with credentials"
                        : "Inicia sesión con tus credenciales"}
                    </small>
                  </div>
                  {/* Login Form */}
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      {/* username input */}
                      <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        width="100%"
                        scale={1.125}
                        icon={<FaUserTie />}
                        placeholder={
                          language === "english"
                            ? "Username"
                            : "Nombre de usuario"
                        }
                      />
                    </div>
                    <div className="mb-4">
                      {/* password input */}
                      <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        width="100%"
                        scale={1.125}
                        icon={<FaLock />}
                        placeholder={
                          language === "english" ? "Password" : "Contraseña"
                        }
                      />
                    </div>
                    {/* Remmeber me Toggle */}
                    <div className="min-h-6 mb-0.5 block text-left flex items-stretch justify-start">
                      {/* <input type="checkbox" onChange={handleCheckboxChange} checked={rememberMe} className="w-[1rem] h-[1rem]"/> */}
                      <Toggle
                        onChange={handleCheckboxChange}
                        checked={rememberMe}
                      ></Toggle>

                      <label className="ml-2 text-sm font-normal cursor-pointer select-none text-slate-700 dark:text-slate-400">
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
              </Card>
            </div>
          </div>
        </div>
        <Modal
          {...bindings}
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
          }}
          className="dark:bg-[#0029A9] bg-[#894880]"
        >
          <Modal.Title>
            {language === "english" ? "Access denied" : "Acceso denegado"}
          </Modal.Title>
          <Modal.Content>
            <Text p>
              {language === "english"
                ? "Contact to the master chief to request your login credentials"
                : "Contacte con el administrador para solicitar sus credenciales de acceso"}
            </Text>
          </Modal.Content>
          <Modal.Action onClick={() => setVisible(false)}>Cancel</Modal.Action>
        </Modal>
      </main>
    </GeistProvider>
  );
};

export default Login;
