import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const FastScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Fast" : "Fast"}
        </div>
    );
}

export default FastScreen;
