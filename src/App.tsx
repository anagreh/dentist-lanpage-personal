import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/App.css';

import { lightTheme } from './styles/themes/theme';
// import ScrollRangePercent from './components/ScrollRangePercent';
// import useScrollRangePercent from './hooks/useScrollRangePercent';
import { LineOnScroll } from './components/LineOnScroll/LineOnScroll';
import ScrollRangePercent, {
  percentageContext,
} from './components/ScrollRangePercent/ScrollRangePercent';
import { Svg } from './components/LineOnScroll/Svg';
import { Path } from './components/LineOnScroll/Path';

function App() {
  // const [percentage, setPercentage] = useState(0);
  // const { ScrollRangePercent, propsScrollRangePercent, percentage } =
  //   useScrollRangePercent();

  const percentage = useContext(percentageContext); //! will not work because it is not inside context provider

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <div className="block">
          {/* <Flip hStartOffset={100} height="500px" setPercentage={setPercentage} /> */}
          <ScrollRangePercent height={'800px'} hStartOffset={400}>
            {/* <div
            className="block"
            style={{
              backgroundColor: 'blueviolet',
              position: 'sticky',
              top: '100px',
              opacity: 1 - percentage,
            }}
          ></div> */}
            <Svg
              width="233"
              height="842"
              viewBox="0 0 233 842"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M117 -1C76.1973 136.641 87.7732 294.358 118.775 355.511C132.443 397.345 169.279 469.421 207.281 423.054C254.784 365.095 234.283 233.204 141.777 264.694C49.2707 296.183 -3.23278 297.096 1.26752 367.377C5.76782 437.657 34.2697 464.127 67.7719 515.696C101.274 567.266 67.7719 591.007 67.7719 612C67.7719 628.794 59.5 638 90 714C120.5 790 116 842 116 842"
                stroke="black"
              />
            </Svg>
          </ScrollRangePercent>
          <ScrollRangePercent
            height={'800px'}
            hStartOffset={400}
            hEndOffsetExtra={260}
          >
            <Svg
              width="233"
              height="842"
              viewBox="0 0 233 842"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M117 -1C76.1973 136.641 87.7732 294.358 118.775 355.511C132.443 397.345 169.279 469.421 207.281 423.054C254.784 365.095 234.283 233.204 141.777 264.694C49.2707 296.183 -3.23278 297.096 1.26752 367.377C5.76782 437.657 34.2697 464.127 67.7719 515.696C101.274 567.266 67.7719 591.007 67.7719 612C67.7719 628.794 59.5 638 90 714C120.5 790 116 842 116 842"
                stroke="black"
              />
            </Svg>
          </ScrollRangePercent>
        </div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
