import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const MoonshotScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Moonshot" : "Moonshot"}
        </div>
    );
}

export default MoonshotScreen;
