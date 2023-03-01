import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import HomeSection from "./screens/HomeSection";

import { LanguageProvider } from "./components/context/LanguageContext";

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  //   console.log(user)
  //   // user or admin page route
  //   if(user === 'userAdmin') navigate('/login');
  // }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
        <Route path="/*" element={<HomeSection />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;
