import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5'

const Header = () => {
    return (
        <footer className= "p-4 bg-l_gold_default dark:bg-gold-bg-default shadow md:flex md:items-center md:justify-between md:p-6">
            {/* Return Back Button */}
            <button className="w-36 
                        h-10 
                        flex 
                        items-center 
                        justify-center 
                        px-3 py-2 
                        outline-none 
                        
                        bg-gh-bg-secondary
                        border-gh-bg-secondary
                        
                        text-white
                        text-base
                        hover:bg-gh-bg-primary
                        active:shadow-active 
                        shadow-primary 
                        border-default 
                        border-solid 
                        dark:border-transparent 
                        rounded-lg
                          
                        dark:bg-gold_btn_alternative
                        dark:hover:bg-gold_btn_alternative_hover
                        dark:text-white"
            >
                <IoArrowBack fontSize={19.5} className="mr-2" />
                Return Back
            </button>
        </footer>
    );
};

export default Header;
