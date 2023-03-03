import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from "./context/LanguageContext";
import logoBillings from "../assets/images/billings_logo.png";

const BillingsBtn = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    return (
        <Link to="/billings" className="flex flex-col justify-between items-center w-max my-0 mx-auto rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur p-6">
            <div className="mt-3">
                <img src={logoBillings} alt="robos" className='h-20' />
            </div>
            <div className="">
                <h3 className="my-4">
                    {language === "english" ? "BILLING" : "FACTURACIÓN"}
                </h3>
            </div>
        </Link>
    );
}

export default BillingsBtn;