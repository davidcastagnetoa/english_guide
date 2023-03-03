import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import MaintenanceScreen from "./MaintenanceScreen";
import RobberyScreen from "./RobberyScreen";
import MailsScreen from "./MailsScreen";
import CamerasScreen from "./CamerasScreen.jsx";
import ClassicScreen from "./ClassicScreen.jsx";
import MoonshotScreen from "./MoonshotScreen.jsx";
import BillingScreen from "./BillingScreen.jsx";
import FastScreen from "./FastScreen.jsx";
import TechnicianScreen from "./TechnicianScreen.jsx";
import SupportScreen from "./SupportScreen.jsx";

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Body */}
      <div className="flex flex-grow items-center dark:bg-gradient-to-t from-slate-900 to-slate-900 text-slate-500 dark:text-white ">
        <Routes>
          <Route path="/*" element={<HomeSection />} />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
          <Route path="/mails" element={<MailsScreen />} />
          <Route path="/robbery" element={<RobberyScreen />} />
          <Route path="/cameras" element={<CamerasScreen />} />
          <Route path="/classic" element={<ClassicScreen />} />
          <Route path="/moonshot" element={<MoonshotScreen />} />
          <Route path="/billings" element={<BillingScreen />} />
          <Route path="/fast" element={<FastScreen />} />
          <Route path="/technician" element={<TechnicianScreen />} />
          <Route path="/suport" element={<SupportScreen />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeScreen;
