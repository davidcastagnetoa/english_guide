import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { cameras } from "../constants/cameras";
import { MdArrowForwardIos } from "react-icons/md";
import { SiArlo, SiSamsung } from "react-icons/si";
import { GiCctvCamera } from "react-icons/gi";

const CamerasScreen = () => {
  const { language } = useContext(LanguageContext);
  const [menuVisible, setMenuVisible] = useState(
    cameras[0].models.map(() => false)
  );

  const [selectedCamera, setSelectedCamera] = useState(
    cameras[0].models.find((item) => item.model === "samsung")
  );

  const toggleMenu = (index) => {
    setMenuVisible((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleSubmodelClick = (submodelName) => {
    console.log(submodelName);
  };

  const handleModelClick = (key) => {
    setSelectedCamera(cameras[0].models.find((item) => item.model === key));
    setMenuVisible(true);
  };

  //Text Copy Button
  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedCamera.text);
  };

  return (
    <div className="w-full flex flex-row h-full font-titillium">
      {/* Left Side Options banner */}
      <div className="hscreen font-titillium">
        <div className="pt-[3rem] rounded-md dark:bg-black py-0 px-2 flex flex-col w-max h-full items-center text-black dark:text-white justify-start mr-3">
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
                  // onClick={() => handleModelClick(index)}
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
                  {item.submodels.map((submodel) => (
                    <button
                      key={submodel.id}
                      className="my-0.5 dark:bg-[#111] dark:hover:bg-[#333] dark:text-white dark:hover:text-white bg-white text-black hover:bg-black hover:text-white px-[0.7rem] py-[0.2rem] rounded hover:transform cursor-pointer w-full flex flex-row items-start "
                      onClick={() => handleSubmodelClick(submodel.name)}
                    >
                      <GiCctvCamera />
                      <span className="ml-2">{submodel.name}</span>
                    </button>
                  ))}
                </div>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full flex 4xl:flex-col flex-row justify-evenly"></div>
    </div>
  );
};

export default CamerasScreen;
