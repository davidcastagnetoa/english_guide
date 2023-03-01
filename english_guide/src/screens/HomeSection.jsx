import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const HomeSection = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div>
    {language === "english" ? "Home" : "Inicio"}
  </div>
  );
}

export default HomeSection;
