import React, { useContext, useState } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";
import ImageLoader from "../../assets/skeleton/ImageLoader";
import TitleLoader from "../../assets/skeleton/TitleLoader";
import TextLoader from "../../assets/skeleton/TextLoader";

const CameraDB = ({ cameraData }) => {
  const { language } = useContext(LanguageContext);
  // const [selectedMaintenance, setSelectedMaintenance] = useState(
  //   cameraData[0].encoding.find((item) => item.subtype === "501")
  // );
  // const handleClick = (key) => {
  //   setSelectedMaintenance(cameraData[0].encoding[key]);
  // };
  // Text Copy Button
  // const handleCopyClick = () => {
  //   navigator.clipboard.writeText(selectedMaintenance.text);
  // };

  return (
    <div className="flex flex-col w-full">
      <div className="topside flex flex-row items-center w-full justify-between z-100">
        {/* Image Camera */}
        <div className="rounded-lg">
          {cameraData?.icon ? (
            <img
              src={cameraData.icon}
              alt={cameraData.name}
              className="h-96 w-[418px] max-w-[418px] object-contain p-6"
            />
          ) : (
            <ImageLoader className="p-2 rounded-[1.5rem]" />
          )}
        </div>
        {/* Features Card */}
        <div className="h-max flex flex-col mx-4 my-2 w-fit">
          {/* top div */}
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-md flex flex-col justify-center items-start">
            {/* Title */}
            {cameraData?.name ? (
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                Modelo: {cameraData?.name}
              </span>
            ) : (
              <TitleLoader className="rounded-lg" />
            )}
            {cameraData?.sbn_zone ? (
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                Designación SBN: {cameraData?.sbn_zone}
              </span>
            ) : (
              <TitleLoader className="rounded-lg" />
            )}
          </div>
          {/* bottom div */}
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 h-[285px] dark:border-[#333] border-t-0 p-2 rounded-b-md flex flex-col justify-center items-start">
            <ol className="w-fit h-full flex flex-col justify-center items-stretch gap-1 text-sm">
              {cameraData?.icon ? (
                cameraData?.features.map((Camfeature, index) => (
                  <li
                    value={Camfeature?.index}
                    key={index}
                    className="flex flex-row"
                  >
                    {language === "english"
                      ? Camfeature?.english
                      : Camfeature?.español}
                  </li>
                ))
              ) : (
                <TextLoader className="rounded-lg" />
              )}
            </ol>
          </div>
        </div>
        {/* Features Card */}
        {/* <div className="h-max flex flex-col mx-4 my-2 w-fit">

          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-md flex flex-col justify-center items-start">

            <span className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-none p-0.5 px-1">
              Mantenimiento:{" "}
              {selectedMaintenance && selectedMaintenance.subtype}
            </span>
            <span className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-none p-0.5 px-1">
              Tipo: {selectedMaintenance && selectedMaintenance.subtype}
            </span>
          </div>

          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 h-[285px] dark:border-[#333] border-t-0 p-2 rounded-b-md flex flex-col justify-center items-start">
            <div className="w-fit h-full flex flex-col justify-center items-stretch gap-1 text-sm">
              Texto: {selectedMaintenance && selectedMaintenance.text}
            </div>
          </div>
        </div> */}
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
        <div className="w-full h-[285px] inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-center items-center">
          <TextLoader className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CameraDB;
