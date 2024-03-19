import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <AnimatedRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
