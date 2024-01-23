import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes/app.routes'

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import GlobalStyles from './styles/global';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppRoutes />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
