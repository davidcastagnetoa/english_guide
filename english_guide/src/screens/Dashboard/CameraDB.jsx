import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";
import ImageLoader from "../../assets/skeleton/ImageLoader";
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
  const [selectedMaintenance, setSelectedMaintenance] = useState("");
  useEffect(() => {
    if (cameraData && cameraData.encoding) {
      setSelectedMaintenance(
        cameraData.encoding.find((item) => item.subtype === "501") || cameraData.encoding[0]
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
    <div className="flex flex-col justify-start w-[60%] pr-5 z-100">
      <div className="topside flex flex-row items-center w-full h-[50%] justify-between gap-1 pb-1">
        {/* Image Camera */}
        <div className="rounded-lg">
          {cameraData?.icon ? (
            <img
              src={cameraData.icon}
              alt={cameraData.name}
              className="h-96 w-[418px] max-w-[418px] object-contain p-6 max3xl:max-w-[300px] max3xl:w-[300px] max3xl:h-fit maxminiteams:w-[250px]"
            />
          ) : (
            <ImageLoader className="p-2 rounded-[1.5rem]" />
          )}
        </div>
        {/* Info Data Camera */}
        <Card
          shadow
          type="default"
          width="50%"
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
            // minWidth: "16rem",
            height: "-webkit-fill-available"
          }}
        >
          <Text
            h4
            my={0}
            style={{
              fontWeight: "bold"
            }}
          >
            Modelo: {cameraData?.name}
          </Text>
          <Text
            h4
            my={0}
            style={{
              fontWeight: "bold"
            }}
          >
            Designación SBN: {cameraData?.sbn_zone}
          </Text>
          <Spacer h={0.5} />
          <Text p>
            <ol className="w-fit h-full flex flex-col justify-center items-stretch gap-0.5 text-sm max3xl:text-[0.78rem] max3xl:gap-0.5">
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
      </div>
      <div className="bottomside flex flex-row items-center w-full h-[50%] justify-between gap-1 pt-1">
        {/* Maintenances Camera Card */}
        <Card
          shadow
          type="default"
          width="50%"
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
            height: "-webkit-fill-available",
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
          <Card.Content height="calc(19.5rem - 58px)">
            <div className="flex flex-col h-full justify-between">
              <div className="border-dashed border border-[#30363d] rounded-md maxminiteams:m-1 maxminiteams:p-1.5 max3xl:p-2 m-auto p-3">

                <Text
                  p
                  font="1rem"
                >
                  Texto: {selectedMaintenance && selectedMaintenance.text}
                </Text>
              </div>
              <Button
                width="30%"
                auto
                type="default"
                style={{
                  background: theme === "light" ? "black" : "white",
                  color: theme === "light" ? "white" : "black",
                }}
                onClick={() => {
                  handleCopyClick();
                }}>
                {language === "english" ? "Copy" : "Copiar"}
              </Button>
            </div>
          </Card.Content>
        </Card>
        {/* Select Maintenances Card */}
        <Card shadow
          type="dark"
          height="19.5rem"
          width="50%"
          style={{
            background: theme === "light" ? "#fafafa" : "black",
            color: theme === "light" ? "black" : "white",
            border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
            height: "-webkit-fill-available",
          }}>
          <Card.Content>
            <Text
              h4
              font="1rem"
              style={{
                fontWeight: "bold"
              }}>
              {language === "english" ? "Select the type of failure" : "Seleccione el tipo de averia"}
            </Text>
            <Text p
              font="0.8rem"
            >
              {language === "english" ? "Copy the text and open the corresponding maintenance." : "Copie el texto y abra el correspondiente mantenimiento"}
            </Text>
          </Card.Content>
          <Card.Content height="calc(19.5rem - 94px)">
            <ButtonGroup
              vertical
              scale={0.75}
              type="default"
              width="100%"
              style={{
                background: theme === "light" ? "#fafafa" : "black",
                color: theme === "light" ? "black" : "white",
                border: theme === "light" ? "1px solid #eaeaea" : "1px solid #333",
              }}>
              {cameraData?.encoding.map((item, index) => (
                <Button
                  type="default"
                  key={index}
                  style={{
                    background: theme === "light" ? "black" : "white",
                    color: theme === "light" ? "white" : "black"
                  }}
                  onClick={() => handleClick(index)}
                >
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
