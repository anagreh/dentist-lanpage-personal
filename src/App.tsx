import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/App.css';

import { lightTheme } from './styles/themes/theme';
// import ScrollRangePercent from './components/ScrollRangePercent';
import useScrollRangePercent from './hooks/useScrollRangePercent';
import { LineOnScroll } from './components/LineOnScroll/LineOnScroll';

function App() {
  // const [percentage, setPercentage] = useState(0);
  const { ScrollRangePercent, propsScrollRangePercent, percentage } =
    useScrollRangePercent();

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <div className="block"></div>
        {/* <Flip hStartOffset={100} height="500px" setPercentage={setPercentage} /> */}
        <ScrollRangePercent
          {...propsScrollRangePercent}
          height={'800px'}
          hStartOffset={100}
          hEndOffsetExtra={100}
        >
          <div
            className="block"
            style={{
              backgroundColor: 'blueviolet',
              position: 'sticky',
              top: '100px',
              opacity: 1 - percentage,
            }}
          ></div>
          <LineOnScroll percentage={percentage}>
            <svg
              width="187"
              height="509"
              viewBox="0 0 187 509"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89 1C39 130 -17 71 57 196C131 321 143 317 116 350C89 383 67 347 69 315C71 283 156 375 154 325C152 275 189 261 146 261C103 261 107 253 78 284C49 315 2 305 40 350C78 395 210 391 163 424C116 457 116 453 116 471C116 485.4 116 502.333 116 509"
                stroke="black"
              />
              <path
                d="M14 294C-5.33334 270.667 -17.2 229.6 90 252L102 302L14 294Z"
                stroke="black"
              />
              <path
                d="M139 348C142 332 153 323 186 348V372L153 378C147.333 373.333 136.6 360.8 139 348Z"
                stroke="black"
              />
            </svg>
          </LineOnScroll>

          <p>HI</p>
        </ScrollRangePercent>
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
