import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoRobbery from "../assets/images/robberies_logo.png";

const RobberyBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/robbery" className="flex flex-col justify-between items-center w-max my-0 mx-auto rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur p-6">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
            <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" class="h-2.5 w-auto stroke-slate-500/30"><circle cx="5" cy="5" r="4.5"></circle><circle cx="21" cy="5" r="4.5"></circle><circle cx="37" cy="5" r="4.5"></circle></svg>
            <div className="mt-3">
                <img src={logoRobbery} alt="robos" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-2">
                    {language === "english" ? "BURGLARIES" : "ROBOS"}
                </h3>
            </div>
        </Link>
    );
}

export default RobberyBtn;
