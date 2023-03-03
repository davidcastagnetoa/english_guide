import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoMoonshot from "../assets/images/moonshot_logo.png";

const MoonshotBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/moonshot" className="flex flex-col justify-between items-center w-max my-0 mx-auto">
            <div className="mt-3">
                <img src={logoMoonshot} alt="moonshot" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "MOONSHOT" : "MOONSHOT"}
                </h3>
            </div>
        </Link>
    );
}

export default MoonshotBtn;