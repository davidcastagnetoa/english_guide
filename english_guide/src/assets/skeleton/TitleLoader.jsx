import React from "react";
import ContentLoader from "react-content-loader";
import useDarkSide from "../../components/hook/DarkSide"; // Asegúrese de utilizar la ruta correcta al archivo donde está definido useDarkSide

const MyLoader = (props) => {
  const [colorTheme] = useDarkSide();
  const isDarkMode = colorTheme === "light";

  return (
    <ContentLoader
      speed={2}
      width="80%"
      height={28}
      backgroundColor={isDarkMode ? "#040404" : "#e6e6e6"}
      foregroundColor={isDarkMode ? "#141414" : "#fafafa"}
      {...props}
    >
      <rect x="0" y="0" rx="3" ry="3" width="80%" height="28" />
    </ContentLoader>
  );
};

export default MyLoader;
