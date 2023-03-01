import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import MaintenanceScreen from "./MaintenanceScreen";
import RobberyScreen from "./RobberyScreen";
import MailsScreen from "./MailsScreen";

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Body */}
      <div className="flex-grow dark:bg-gradient-to-t from-st2_secondary_eg1 to-st2_secondary_eg2 text-slate-900 dark:text-white ">
        <Routes>
          <Route path="/*" element={<HomeSection />} />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
          <Route path="/robbery" element={<RobberyScreen />} />
          <Route path="/mails" element={<MailsScreen />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeScreen;
