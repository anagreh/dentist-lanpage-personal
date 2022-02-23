import React from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/App.css';

import Flip from './components/FlipULOE';
import { lightTheme } from './styles/themes/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <div className="block"></div>
        <Flip />
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
