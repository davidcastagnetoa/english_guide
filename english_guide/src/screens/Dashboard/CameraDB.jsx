import React, { useContext } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";
import { Button } from "@vercel/examples-ui";
import ImageLoader from "../../assets/skeleton/ImageLoader";
import TitleLoader from "../../assets/skeleton/TitleLoader";
import TextLoader from "../../assets/skeleton/TextLoader";

const CameraDB = ({ cameraData }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col w-full">
      <div className="topside flex flex-row items-center w-full justify-between">
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
        <div className="h-max flex flex-col mx-4 my-2 w-full">
          {/* top div */}
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-md flex flex-col justify-center items-start">
            {/* Title */}
            {cameraData?.name ? (
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white ml-2">
                {cameraData?.name}
              </span>
            ) : (
              <TitleLoader className="rounded-lg" />
            )}
          </div>
          {/* bottom div */}
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 h-[285px] dark:border-[#333] border-t-0 p-2 rounded-b-md flex flex-col justify-center items-center">
            <ol className="w-full h-full flex flex-col justify-center items-stretch gap-1">
              {cameraData?.icon ? (
                cameraData?.features.map((Camfeature, index) => (
                  <li
                    value={Camfeature?.index}
                    key={index}
                    className="py-1 flex flex-row"
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
