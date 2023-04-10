import React, { useContext } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";

const CameraDB = ({ cameras }) => {
  console.log(cameras);
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col w-full z-10">
      <div className="topside">
        {/* Image Camera */}
        <img src={cameras?.icon} alt={cameras?.nombre} />
        {/* <img src={cameras?.imagen} alt={cameras?.nombre} /> */}
        {/* Features Card */}
        <div className="h-max flex flex-col w-fill_available mx-4 my-2">
          {/* top div */}
          <div className="bg-white dark:bg-black w-[36rem] border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-lg flex flex-col justify-center items-center">
            {/* Title */}
            <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
              {language === "english" ? "Features" : "Caracteristicas"}
            </span>
          </div>
          {/* bottom div */}
          <div className="bg-white dark:bg-black w-[36rem] border border-black border-opacity-30 h-[285px] dark:border-[#333] border-t-0 p-2 rounded-b-lg flex flex-col justify-center items-center"></div>
        </div>
      </div>
      {/* Process Card */}
      <div className="h-max flex flex-col w-fill_available mx-4 my-2">
        {/* top div */}
        <div className="w-full inner_card bg-[#f6f8fa] dark:border-[#333] p-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center">
          {/* Title */}
          <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
            {language === "english" ? "Process" : "Procesos"}
          </span>
        </div>
        {/* bottom div */}
        <div className="w-full h-[285px] inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default CameraDB;
