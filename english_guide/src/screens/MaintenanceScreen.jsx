import React, { useContext } from 'react';
import { LanguageContext } from "../components/context/LanguageContext";

const MaintenanceScreen = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      {language === "english" ? "Maintenance" : "Mantenimientos"}
    </div>
  );
}

export default MaintenanceScreen;
