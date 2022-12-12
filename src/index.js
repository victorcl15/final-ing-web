import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainApp} from './MainApp';


import './estilos.css';
import './normalize.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <MainApp/>
    </React.StrictMode>
);

