import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner';
import reportWebVitals from './reportWebVitals';
import './i18n'
import Translate from './components/languages';
import ResponsiveAppBar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Banner />
  </React.StrictMode>
);

reportWebVitals();
