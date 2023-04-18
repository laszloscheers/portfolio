import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Lottie from '@amelix/react-lottie';
import * as skeleton from './animation/skeleton.json'

import AppNavbar from './components/AppNavbar/AppNavbar';
import Footer from './components/Footer/Footer';
import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en', 'es'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });
 
const skeletonOption = {
  loop: true,
  autoplay: true, 
  animationData: skeleton.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const loadingMarkup = (
  <div>
    <AppNavbar />
    <Lottie options={skeletonOption} height="30%" width="80%"/>
    <Footer />
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();
