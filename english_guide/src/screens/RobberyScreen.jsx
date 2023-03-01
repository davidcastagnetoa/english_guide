import React, { useContext } from 'react';
import { LanguageContext } from "../components/context/LanguageContext";

const RobberyScreen = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "english" ? "Robbery" : "Robos"}
    </div>
  );
}

export default RobberyScreen;
