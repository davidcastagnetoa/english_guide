import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";
import ImageLoader from "../../assets/skeleton/ImageLoader";
import TitleLoader from "../../assets/skeleton/TitleLoader";
import TextLoader from "../../assets/skeleton/TextLoader";
import { Text, Card, Spacer, ButtonGroup, Button } from "@geist-ui/core";

const CameraDB = ({ cameraData }) => {
  //Theme colors
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const htmlElement = document.documentElement;
      if (htmlElement.classList.contains("dark")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    const observer = new MutationObserver(updateTheme);
    const htmlElement = document.documentElement;

    observer.observe(htmlElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);
  // Language Context
  const { language } = useContext(LanguageContext);
  // Data debugger
  console.log(cameraData);

  //Maintenance Buttons
  const [selectedMaintenance, setSelectedMaintenance] = useState(null);
  useEffect(() => {
    if (cameraData && cameraData.length > 0) {
      setSelectedMaintenance(
        cameraData.encoding.find((item) => item.subtype === "501")
      );
    }
  }, [cameraData]);

  if (!cameraData || cameraData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleClick = (key) => {
    setSelectedMaintenance(cameraData.encoding[key]);
  };
  // Text Copy Button
  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedMaintenance.text);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="topside flex flex-row items-center w-full justify-start z-100">
        {/* Image Camera */}
        <div className="rounded-lg">
          {cameraData?.icon ? (
            <img
              src={cameraData.icon}
              alt={cameraData.name}
              className="h-96 w-[418px] max-w-[418px] object-contain p-6 max3xl:max-w-[300px] max3xl:w-[300px] max3xl:h-fit"
            />
          ) : (
            <ImageLoader className="p-2 rounded-[1.5rem]" />
          )}
        </div>
        {/* Features Card */}
        {/* <div className="h-max flex flex-col mx-4 my-2 w-fit">
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-md flex flex-col justify-center items-start">
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
        </div> */}

        <Card
          shadow
          type="default"
          width="286px"
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
            width: "max-content",
            maxHeight: "fit-content",
          }}
        >
          {cameraData?.name ? (
            <Text h4 my={0}>
              Modelo: {cameraData?.name}
            </Text>
          ) : (
            <TitleLoader className="rounded-lg" />
          )}
          {cameraData?.sbn_zone ? (
            <Text h4 my={0}>
              Designación SBN: {cameraData?.sbn_zone}
            </Text>
          ) : (
            <TitleLoader className="rounded-lg" />
          )}
          <Spacer h={1} />
          <Text p>
            <ol className="w-fit h-full flex flex-col justify-center items-stretch gap-1 text-sm max3xl:text-[0.78rem] max3xl:gap-0.5">
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
          </Text>
        </Card>

        {/* Maintenance Card */}
        {/* <div className="h-max flex flex-col mx-4 my-2 w-fit">
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 dark:border-[#333] p-2 border-b-0 rounded-t-md flex flex-row justify-between items-start">
            <p>Mantenimientos:</p>
            <div>
              <span className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-l-lg p-0.5 px-1">
                {selectedMaintenance && selectedMaintenance.type}
              </span>
              <span className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] rounded-r-lg p-0.5 px-1">
                {selectedMaintenance && selectedMaintenance.subtype}
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-transparent w-full border border-black border-opacity-30 h-[285px] dark:border-[#333] border-t-0 p-2 rounded-b-md flex flex-col justify-center items-start">
            <div className="w-96 h-full flex flex-col justify-center items-stretch gap-1 text-sm mx-auto my-0">
              Texto: {selectedMaintenance && selectedMaintenance.text}
            </div>
            <div className="flex flex-row justify-between items-center">
              {cameraData?.encoding.map((item, index) => (
                <button
                  key={index}
                  className="w-[9rem] dark:active:text-[#00d0ff] active:text-[#0072d3] active:font-bold hover:bg-[#8181812e] hover:transform hover:scale-106 flex flex-row items-center cursor-pointer border-t border-[#00000030] dark:border-[#333]"
                  onClick={() => handleClick(index)}
                >
                  <div className="w-[9rem] h-[40px] text-sm flex flex-row justify-center items-center">
                    <h4 className="">
                      {language === "english"
                        ? item?.reason?.english
                        : item?.reason?.español}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div> */}
        <Card
          shadow
          type="default"
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
            width: "max-content",
            maxHeight: "fit-content",
            maxWidth: "30rem",
          }}
        >
          <Card.Content>
            <div className="flex flex-row justify-between items-start">
              <Text b my={0}>
                {language === "english" ? "Maintenances" : "Mantenimientos"}
              </Text>
              <div className="flex">
                <Text
                  p
                  style={{
                    border:
                      theme === "light"
                        ? "1px solid #eaeaea"
                        : "1px solid #333",
                    paddingLeft: "0.25rem",
                    paddingRight: "0.25rem",
                    borderTopLeftRadius: "0.375rem",
                    borderBottomLeftRadius: "0.375rem",
                  }}
                >
                  {selectedMaintenance && selectedMaintenance.type}
                </Text>
                <Text
                  p
                  style={{
                    border: "1px solid transparent",
                    borderColor: theme === "light" ? "#eaeaea" : "#333",
                    paddingLeft: "0.25rem",
                    paddingRight: "0.25rem",
                    borderLeftWidth: "0px",
                    borderTopRightRadius: "0.375rem",
                    borderBottomRightRadius: "0.375rem",
                  }}
                >
                  {selectedMaintenance && selectedMaintenance.subtype}
                </Text>
              </div>
            </div>
          </Card.Content>
          <Card.Content>
            <Text p>
              Texto: {selectedMaintenance && selectedMaintenance.text}
            </Text>
            <ButtonGroup>
              {cameraData?.encoding.map((item, index) => (
                <Button
                  type="default"
                  key={index}
                  // className="w-[9rem] dark:active:text-[#00d0ff] active:text-[#0072d3] active:font-bold hover:bg-[#8181812e] hover:transform hover:scale-106 flex flex-row items-center cursor-pointer border-t border-[#00000030] dark:border-[#333]"
                  onClick={() => handleClick(index)}
                >
                  {/* <div className="w-[9rem] h-[40px] text-sm flex flex-row justify-center items-center"> */}
                  <Text h4>
                    {language === "english"
                      ? item?.reason?.english
                      : item?.reason?.español}
                  </Text>
                  {/* </div> */}
                </Button>
              ))}
            </ButtonGroup>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default CameraDB;
