import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from './templates/Admin.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
        <Admin></Admin>
    </React.StrictMode>
);

reportWebVitals();
