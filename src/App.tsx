import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { lightTheme } from './styles/themes/lightTheme';

import { HomePage } from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
