import React from "react";
import ContentLoader from "react-content-loader";
import useDarkSide from "../../components/hook/DarkSide"; // Asegúrese de utilizar la ruta correcta al archivo donde está definido useDarkSide

const MyLoader = (props) => {
  const [colorTheme] = useDarkSide();
  const isDarkMode = colorTheme === "light";

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={267}
      backgroundColor={isDarkMode ? "#040404" : "#e6e6e6"}
      foregroundColor={isDarkMode ? "#141414" : "#fafafa"}
      {...props}
    >
      <rect x="2" y="0" rx="3" ry="3" width="100%" height="15" />
      <rect x="2" y="20" rx="3" ry="3" width="98%" height="15" />
      <rect x="2" y="40" rx="3" ry="3" width="95%" height="15" />
      <rect x="2" y="60" rx="3" ry="3" width="90%" height="15" />
      <rect x="2" y="80" rx="3" ry="3" width="98%" height="15" />
      <rect x="2" y="100" rx="3" ry="3" width="95%" height="15" />
      <rect x="2" y="120" rx="3" ry="3" width="97%" height="15" />
      <rect x="2" y="140" rx="3" ry="3" width="90%" height="15" />
      <rect x="2" y="160" rx="3" ry="3" width="100%" height="15" />
      <rect x="2" y="180" rx="3" ry="3" width="98%" height="15" />
      <rect x="2" y="200" rx="3" ry="3" width="98%" height="15" />
    </ContentLoader>
  );
};

export default MyLoader;
