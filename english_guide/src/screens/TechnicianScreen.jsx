import React, { useContext } from 'react'
import { LanguageContext } from '../components/context/LanguageContext';

const TechnicianScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Technician on call" : "Tecnicos de Guardia"}
        </div>
    )
}

export default TechnicianScreen
