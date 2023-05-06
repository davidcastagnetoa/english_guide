import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { cameras } from "../constants/cameras";
import { MdArrowForwardIos } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import CameraDB from "../screens/Dashboard/CameraDB";
import BackgroundPatron from "../components/BackgroundPatron.jsx"
import AppDemo from "../components/AppDemo";

const CamerasScreen = () => {
  // console.log(cameras);
  const { language } = useContext(LanguageContext);

  // Toggle Dropdownmenu
  const [menuVisible, setMenuVisible] = useState(
    cameras[0].models.map(() => false)
  );
  const toggleMenu = (index) => {
    setMenuVisible((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value))
    );
  };

  // Camera Model Button
  const [selectedCamara, setSelectedCamara] = useState(cameras[0].models[0].submodels[0]);
  const handleSubmodelClick = (submodel) => {
    console.log(submodel);
    setSelectedCamara(submodel);
  };

  return (
    <div className="w-full flex flex-row h-full font-titillium">
      {/* Left Side Options banner */}
      <div className="hscreen font-titillium z-10">
        <div className="pt-[3rem] rounded-md py-0 px-2 flex flex-col w-max h-full items-center text-black dark:text-white justify-start mr-3">
          <h4 className="my-6 font-bold">
            {language === "english"
              ? "Choose a camera model"
              : "Escoja un modelo de cámara"}
          </h4>
          {/* Buttons */}
          {/* Button Body */}
          <div className="divide-y divide-[#00000030] dark:divide-[#333] text-sm 4xl:text-base font-light tracking-wider ">
            {cameras[0].models.map((item, index) => (
              <div key={index}>
                <button
                  className="w-[220px] dark:active:text-[#00d0ff] active:text-[#0072d3] active:font-bold hover:bg-[#8181812e] hover:transform hover:scale-106 flex flex-row items-center cursor-pointer border-t border-[#00000030] dark:border-[#333]"
                  onClick={() => toggleMenu(index)}
                >
                  <MdArrowForwardIos />
                  <div className="w-full flex flex-row justify-start">
                    <h4 className="ml-3 mr-1 my-4">
                      {language === "english"
                        ? item.model.english
                        : item.model.español}
                    </h4>
                  </div>
                </button>
                {/* Submenu Dropdown button */}
                {/* {menuVisible && ( */}
                <div
                  className={`submenu_body py-1 text-sm ${
                    menuVisible[index] ? "" : "hidden"
                  }`}
                >
                  {/* Submenu Button */}
                  {item.submodels.map((submodel, index) => (
                    <button
                      key={index}
                      className="my-0.5 dark:bg-[#111] dark:hover:bg-[#333] dark:text-white dark:hover:text-white bg-white text-black hover:bg-black hover:text-white px-[0.7rem] py-[0.2rem] rounded hover:transform cursor-pointer w-full flex flex-row items-start "
                      onClick={() => handleSubmodelClick(submodel)}
                    >
                      <GiCctvCamera />
                      <span className="ml-2">{submodel.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full flex flex-row justify-evenly">
        {/* Green Top Patron */}
        <BackgroundPatron />
        <CameraDB cameraData={selectedCamara} />
        <AppDemo/>
      </div>
    </div>
  );
};

export default CamerasScreen;
