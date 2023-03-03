import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const SupportScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Support" : "Validaciones"}
        </div>
    );
}

export default SupportScreen;
