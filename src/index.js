import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './app.css'
import GlobalContextProvider from './contexts/GlobalContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalContextProvider>
      <App tab="home" />
    </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

