import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoFast from "../assets/images/fast_logo.png";

const FastBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/fast" className="flex flex-col justify-between items-center w-max my-0 mx-auto">
            <div className="mt-3">
                <img src={logoFast} alt="fast" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "FAST" : "FAST"}
                </h3>
            </div>
        </Link>
    );
}

export default FastBtn;