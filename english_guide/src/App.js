import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import HomeSection from "./screens/HomeSection";

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  //   console.log(user)
  //   // user or admin page route
  //   if(user === 'userAdmin') navigate('/login');
  // }, []);

  return (
    <Routes>
      <Route path="/*" element={<HomeScreen />} />
      <Route path="/*" element={<HomeSection />} />

    </Routes>
  );
};

export default App;
