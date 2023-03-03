import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoTechnician from "../assets/images/technician_logo.png";

const TechnicianBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/technician" className="flex flex-col justify-between items-center w-max my-0 mx-auto">
            <div className="mt-3">
                <img src={logoTechnician} alt="tecnicos" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "TECHNICIAN" : "TECNICOS"}
                </h3>
            </div>
        </Link>
    );
}

export default TechnicianBtn;