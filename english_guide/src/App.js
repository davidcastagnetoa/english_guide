import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/Home";
import HomeSection from "./screens/HomeSection";
import Login from "./screens/Login";

import { LanguageProvider } from "./components/context/LanguageContext";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    console.log(user)
    // user or admin page route
    if(user !== 'userAdmin') navigate('/login');
  }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
        <Route path="/*" element={<HomeSection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;
