import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoCamaras from "../assets/images/cameras_logo.png";

const CamerasBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/cameras" className="flex flex-col justify-between items-center w-max my-0 mx-auto">
            <div className="mt-3">
                <img src={logoCamaras} alt="camaras" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "CAMERAS" : "CAMARAS"}
                </h3>
            </div>
        </Link>
    );
}

export default CamerasBtn;