import React, { useContext } from 'react';
import { LanguageContext } from '../components/context/LanguageContext';
import RobberyBtn from '../components/RobberyBtn.jsx';
import CamerasBtn from '../components/CamerasBtn.jsx';
import MoonshotBtn from '../components/MoonshotBtn.jsx';
import FastBtn from '../components/FastBtn.jsx';
import BillingsBtn from '../components/BillingsBtn.jsx';
import SupportBtn from '../components/SupportBtn.jsx';
import TechnicianBtn from '../components/TechnicianBtn.jsx';
import ClassicsBtn from '../components/ClassicsBtn.jsx';

const HomeSection = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='grid grid-cols-4 grid-rows-2 justify-center items-center h-[35rem] w-[70rem] gap-6 mx-auto'>
      <RobberyBtn />
      <CamerasBtn />
      <MoonshotBtn />
      <FastBtn />
      <BillingsBtn />
      <SupportBtn />
      <TechnicianBtn />
      <ClassicsBtn />
    </div>
  );
}

export default HomeSection;
