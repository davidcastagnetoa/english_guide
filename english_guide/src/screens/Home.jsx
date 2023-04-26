import React, { useEffect, useState } from "react";
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
import CopiedAlert from "../components/CopiedAlert";

const HomeScreen = () => {
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  return (
    <div
      className="flex flex-col min-h-screen bg-white dark:bg-black"
      // style={{
      //   background: theme === "light" ? "#fafafa" : "black",
      //   color: theme === "light" ? "black" : "white",
      // }}
    >
      <Header />
      {/* Copied Alert */}
      {showCopiedAlert && <CopiedAlert />}
      {/* Body */}
      <div
        // style={{
        //   background: theme === "light" ? "#fafafa" : "black",
        //   color: theme === "light" ? "black" : "white",
        // }}
        className="flex flex-grow flex-col justify-center items-center dark:bg-gradient-to-t from-black to-black text-slate-500 dark:text-white "
      >
        <Routes>
          <Route
            path="/*"
            element={<HomeSection setShowCopiedAlert={setShowCopiedAlert} />}
          />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
          <Route path="/mails" element={<MailsScreen />} />
          <Route path="/robbery" element={<RobberyScreen />} />
          <Route path="/cameras" element={<CamerasScreen />} />
          <Route path="/classic" element={<ClassicScreen />} />
          <Route path="/moonshot" element={<MoonshotScreen />} />
          <Route path="/billings" element={<BillingScreen />} />
          <Route path="/fast" element={<FastScreen />} />
          <Route path="/technician" element={<TechnicianScreen />} />
          <Route path="/support" element={<SupportScreen />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
