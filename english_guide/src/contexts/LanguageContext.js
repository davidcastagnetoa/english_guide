import React from "react";

const languages = ["english", "español"];


const LanguageContext = React.createContext({
  language: "english",
  changeLanguage: () => {},
});

export { LanguageContext };
