import React from 'react';
import ContentLoader from 'react-content-loader';
import useDarkSide from '../../components/hook/DarkSide'; // Asegúrese de utilizar la ruta correcta al archivo donde está definido useDarkSide

const MyLoader = (props) => {
  const [colorTheme] = useDarkSide();
  const isDarkMode = colorTheme === 'light';

  return (
    <ContentLoader
      speed={2}
      width={370}
      height={336}
      viewBox="0 0 370 336"
      backgroundColor={isDarkMode ? '#040404' : '#e6e6e6'}
      foregroundColor={isDarkMode ? '#141414' : '#fafafa'}
      {...props}
    >
      <rect x="0" y="0" rx="3" ry="3" width="370" height="336" />
    </ContentLoader>
  );
};

export default MyLoader;