import React, { useContext } from "react";
import { LanguageContext } from "../components/context/LanguageContext";

const CopiedAlert = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
        <span className="absolute top-[72px] 4xl:top-20 text-center tracking-wider bg-green-200 text-green-800 w-full text-xs font-bold mr-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300">
          {language === "english" ? "COPIED!" : "COPIADO!"}
        </span>
    </>
  );
};

export default CopiedAlert;
