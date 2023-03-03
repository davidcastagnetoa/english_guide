import React, { useContext } from 'react'
import { LanguageContext } from '../components/context/LanguageContext';

const BillingScreen = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            {language === "english" ? "Billing" : "Facturación"}
        </div>
    )
}

export default BillingScreen
