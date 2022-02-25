import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/App.css';

import { lightTheme } from './styles/themes/theme';
// import ScrollRangePercent from './components/ScrollRangePercent';
import useScrollRangePercent from './hooks/useScrollRangePercent';

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
          offsetMaxChild
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
          <p>HI</p>
          <div
            className="block"
            style={{
              backgroundColor: 'blueviolet',
              position: 'sticky',
              top: '0px',
              opacity: 1 - percentage,
            }}
          ></div>
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
