import React, { useContext } from 'react'
import { LanguageContext } from '../components/context/LanguageContext';

const CamerasScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Cameras" : "Camaras"}
        </div>
    )
}

export default CamerasScreen
