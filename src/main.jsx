import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.jsx';
document.documentElement.classList.add('js-ready');
hydrateRoot(document.getElementById('root'),<App/>);
