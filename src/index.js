import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Lottie from '@amelix/react-lottie';
import * as skeleton from './animation/skeleton.json'

import AppNavbar from './components/AppNavbar/AppNavbar';
import Footer from './components/Footer/Footer';
import App from './App';

// Language swapping tool
i18n
  .use(Backend)
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

//Loading Marckup for Suspense component
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
      <Lottie options={skeletonOption} width="60%"/>
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
