import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const ClassicScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Classics" : "Classics"}
        </div>
    );
}

export default ClassicScreen;
