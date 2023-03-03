import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';

const MailsScreen = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div>
      {language === "english" ? "Mails" : "Emails"}
    </div>
  );
}

export default MailsScreen;
