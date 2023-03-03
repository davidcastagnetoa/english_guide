import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoSupport from "../assets/images/support_logo.png";

const SupportBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/suport" className="flex flex-col justify-between items-center w-max my-0 mx-auto">
            <div className="mt-3">
                <img src={logoSupport} alt="soporte" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "SUPPORT" : "VALIDACIONES"}
                </h3>
            </div>
        </Link>
    );
}

export default SupportBtn;