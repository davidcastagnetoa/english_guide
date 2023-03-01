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
      <div className="pt-16 pb-16">
        <Routes>
          <Route path="/*" element={<HomeSection />} />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
          <Route path="/robbery" element={<RobberyScreen />} />
          <Route path="/mails" element={<MailsScreen />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
