import React, { useContext, useCallback, useRef, useState } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import ReactCanvasConfetti from "react-canvas-confetti";
import { maintenances } from "../constants/maintenances";

const RobberyScreen = () => {
  const { language } = useContext(LanguageContext);
  //Gathering data from maintenances using context
  // Find in the object the array which has 'title' in  "english"
  const maintenance = maintenances.find(
    (m) => m.title.english === "Burglared Maintenances"
  );
  // Find in the object the array 'encoding' which has 'reason' in  "english"
  // const reason = maintenance.encoding.find((e) => e.reason.english);

  const [selectedMaintenance, setSelectedMaintenance] = useState(
    maintenances[0].encoding.find((item) => item.subtype === "501")
  );
  const handleClick = (key) => {
    setSelectedMaintenance(maintenances[0].encoding[key]);
  };

  // Text Copy Button
  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedMaintenance.text);
  };

  // Fire Function
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -10,
  };
  const refAnimationInstance = useRef(null);
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);
  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(280 * particleRatio),
      });
  }, []);
  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      scalar: 0.4,
    });

    makeShot(0.2, {
      spread: 60,
      scalar: 0.5,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.5,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.5,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      scalar: 0.4,
    });
  }, [makeShot]);

  // Slider Function
  const questions = [
    {
      english: "1.- Are you OK? Have you suffered any harm?",
      español: "1.- ¿Se encuentra bien?. ¿Ha sufrido algún daño?",
    },
    {
      english:
        "2.- Should we inform the authorities about the intrusion or you already informed them about it?",
      español:
        "2.- ¿Debemos informar a las autoridades sobre la intrusion o ya han sido avisados por usted?",
    },
    {
      english:
        "3.- Did the forensic police has already been there? Do they plan to go?",
      español: "3.- ¿Ha acudido la científica?. ¿Le han dicho si van a acudir?",
    },
    {
      english: "4.- Around what time do you think the intrussion took place?",
      español: "4.- ¿Sobre qué momento calcula que se produjo la intrusión?",
    },
    {
      english:
        "5.- Did they break a window or door? Did they get in through the roof?",
      español:
        "5.- ¿Rompieron alguna puerta o ventana?. ¿Accedieron a través del tejado?",
    },
    {
      english:
        "6.- Is there any damage on the alarm system? which sensors have been damaged?",
      español:
        "6.- ¿Existe algún daño en su alarma?. ¿Que sensores se encuentran averiados?",
    },
    {
      english:
        "7.- Could you please tell me which path you think intruders took around your installation?",
      español:
        "7.- ¿Podría decirnos que ruta tomaron los intrusos para acceder?",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextClick = () => {
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };
  const handlePrevClick = () => {
    setCurrentQuestionIndex(
      (currentQuestionIndex - 1 + questions.length) % questions.length
    );
  };

  return (
    <div className="w-full flex flex-row h-full font-titillium">
      {/* Left Side Options banner */}
      <div className="hscreen font-titillium">
        <div className="rounded-md dark:bg-black py-0 px-2 flex flex-col w-max h-full items-center text-black dark:text-white justify-center mr-3">
          <h4 className="my-6 font-bold">
            {language === "english"
              ? maintenance.title.english
              : maintenance.title.español}
          </h4>
          {/* Buttons */}
          <div className="divide-y divide-[#00000030] dark:divide-[#333] text-sm 4xl:text-base font-light tracking-wider ">
            {maintenances[0].encoding.map((item, index) => (
              <button
                key={index}
                className="w-[220px] dark:active:text-[#00d0ff] active:text-[#0072d3] active:font-bold hover:bg-[#8181812e] hover:transform hover:scale-106 flex flex-row items-center cursor-pointer border-t border-[#00000030] dark:border-[#333]"
                onClick={() => handleClick(index)}
              >
                <MdArrowForwardIos />
                <div className="w-full flex flex-row justify-start">
                  <h4 className="ml-3 mr-1 my-4">
                    {language === "english"
                      ? item.reason.english
                      : item.reason.español}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full flex 4xl:flex-col flex-row justify-evenly">
        {/* Key Questions Card */}
        <div className="carousel-container 4xl:w-full w-max">
          <div className="carousel flex flex-row 4xl:flex-row 4xl justify-center items-center 4xl:h-[180px] h-full">
            <button
              className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white bg-black text-white hover:bg-white hover:text-black font-bold text-center uppercase align-middle cursor-pointer leading-normal text-sm transition-all inner_card px-4 h-full border-[1px] border-r-0 rounded-l-lg dark:border-[#333]"
              onClick={handlePrevClick}
            >
              <RiArrowLeftSFill />
              Prev
            </button>
            <div className="inner_card dark:bg-black question h-full w-[800px] maxteams:w-[450px] p-2 flex flex-col items-center justify-center border-[1px] dark:border-[#333] text-center">
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white pb-4">
                {language === "english" ? "Questions" : "Preguntas"}
              </span>
              <span>
                {language === "english"
                  ? questions[currentQuestionIndex].english
                  : questions[currentQuestionIndex].español}
              </span>
            </div>
            <button
              className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white bg-black text-white hover:bg-white hover:text-black font-bold text-center uppercase align-middle cursor-pointer leading-normal text-sm transition-all inner_card px-4 h-full border-[1px] border-l-0 rounded-r-lg dark:border-[#333]"
              onClick={handleNextClick}
            >
              <RiArrowRightSFill />
              Next
            </button>
          </div>
        </div>
        <div className="flex 4xl:flex-row flex-col ml-2.5">
          {/* Maintenance Cards */}
          <div className="items-center flex flex-col h-full w-full 4xl:justify-center justify-start">
            <div className="h-max flex flex-col w-max">
              <div className="items-center flex flex-col h-full w-full justify-center">
                {/* top div */}
                <div className="dark:text-white inner_card bg-[#f6f8fa] dark:border-[#333] p-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center w-[36rem]">
                  {/* Title */}
                  <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                    {language === "english" ? "Maintenances" : "Mantenimientos"}
                  </span>
                  {/* Subtitle */}
                  <p className="mt-0 4xl:mt-1 text-base font-light text-black dark:text-white">
                    {language === "english"
                      ? "Kindly ensure that all relevant information is obtained from the customer"
                      : "Asegúrate de obtener todos la información del cliente :"}
                  </p>
                </div>
                {/* bottom div */}
                <div className="h-[285px] inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-between items-center w-[36rem]">
                  {/* Subtitle */}
                  <div className="justify-between flex flex-row m-2 px-3 w-full items-center">
                    {language === "english"
                      ? "Open maintenances or ticket"
                      : "Abre el mantenimiento o aviso"}
                    <div className="flex flex-row">
                      <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-l-md p-0.5 px-1">
                        {language === "english" ? "Type: " : "Tipo: "}
                      </div>

                      <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-none p-0.5 px-1">
                        {selectedMaintenance && selectedMaintenance.type}
                      </div>
                      <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] rounded-r-md p-0.5 px-1">
                        {selectedMaintenance && selectedMaintenance.subtype}
                      </div>
                    </div>
                  </div>
                  {/* Maintenance Text */}
                  <p className="dark:text-[#7e7e7e] text-[#606060] text-[0.85rem] m-2 p-3 border-dashed border border-[#30363d] rounded-md">
                    {selectedMaintenance && selectedMaintenance.text}
                  </p>
                  <p className="text-xs">
                    {language === "english"
                      ? "Press the button to copy"
                      : "Pulsa para copiar el texto"}
                  </p>
                  {/* Button */}
                  <div>
                    <ReactCanvasConfetti
                      refConfetti={getInstance}
                      style={canvasStyles}
                    />
                    <button
                      onClick={() => {
                        fire();
                        handleCopyClick();
                      }}
                      id="copyBtn"
                      className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-[#ffffff73] bg-black text-white hover:bg-white hover:text-black hover:border-black border inline-flex font-bold text-center uppercase align-middle px-4 py-2 rounded-lg cursor-pointer leading-normal text-sm transition-all"
                    >
                      <TbCopy className="text-lg" />
                      {language === "english" ? "Copy" : "Copiar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Robbery Advices */}
          <div className="items-center flex flex-col h-full w-full 4xl:justify-center justify-end">
            {/* "What to say" card */}
            <div className="h-max flex flex-col w-max">
              {/* top div */}
              <div className="w-[36rem] inner_card bg-[#f6f8fa] dark:border-[#333] p-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center">
                {/* Title */}
                <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                  {language === "english" ? "Important!" : "Importante!"}
                </span>
                {/* Subtitle */}
                <p className="mt-0 4xl:mt-1 text-base font-light text-black dark:text-white">
                  {language === "english"
                    ? "Before to start:"
                    : "Antes de empezar:"}
                </p>
              </div>
              {/* bottom div */}
              <div className="h-[285px] w-[36rem] inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-center items-center">
                {/* title form wrapper */}
                <div className="w-full flex flex-row items-center justify-around mt-0 4xl:mt-2.5 ">
                  <div className="flex flex-row items-center justify-center">
                    <BsCheckCircleFill className="text-2xl text-green-600 dark:text-green-500" />
                    <h2 className="ml-2 text-md text-black dark:text-white">
                      {language === "english" ? "What to say" : "Que decir"}
                    </h2>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <BsFillXCircleFill className="text-2xl text-red-600 dark:text-red-400" />
                    <h2 className="ml-2 text-md text-black dark:text-white">
                      {language === "english"
                        ? "What to NO say"
                        : "Que NO decir"}
                    </h2>
                  </div>
                </div>
                {/* div form wrapper */}
                <div className="mt-2 flex flex-row items-center justify-between font-titillium text-[500] font-light text-neutral-600 dark:text-neutral-400">
                  {/* What to say wrapper */}
                  <div className="h-full flex flex-col items-center justify-center basis-1/2">
                    <ul className="dark:text-[#00b900] text-[#006000] flex flex-col gap-0 4xl:gap-1 justify-between items-center text-center">
                      <li>
                        {language === "english"
                          ? "Intrussion signals"
                          : "Señales de intrusion"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Tamper Signals"
                          : "Señales tamper"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Jamming Signals"
                          : "Señales inhibición"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Power cuts"
                          : "Cortes de corriente"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Central Low/Dead battery"
                          : "Batería baja/agotada de Central"}
                      </li>
                      <li>
                        {language === "english"
                          ? "O/C Authenticated"
                          : "O/C Controlados"}
                      </li>
                      <li>
                        {language === "english"
                          ? "What the customer can watch on his App"
                          : "Lo que el cliente pueda ver en la App"}
                      </li>
                    </ul>
                  </div>
                  {/* What to NOT say wrapper */}
                  <div className="h-full flex flex-col items-center justify-center basis-1/2">
                    <ul className="dark:text-[#ff2e2e] text-[#870000] flex flex-col gap-0 4xl:gap-1 justify-between items-center text-center">
                      <li>
                        {language === "english"
                          ? "Missing Test"
                          : "Fallos de comunicaciones"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Detectors' Low/Dead battery"
                          : "Batería baja/agotada detectores"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Informative signs in mustard"
                          : "Señales informativas en mostaza"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Pending maintenance"
                          : "Mantenimientos pendientes"}
                      </li>
                      <li>
                        {language === "english"
                          ? "Comlogs that differ from what is stated in the theft report"
                          : "Comlogs que difieran con lo indicado en el informe de robo"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobberyScreen;
