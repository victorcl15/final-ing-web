import React from 'react';


import {Ruta} from './Ruta';
import {Cabecera} from './CabeceraInicio';
import { BrowserRouter } from 'react-router-dom';

const MainApp = () => {

    return (
        <BrowserRouter>
            <Ruta/>
        </BrowserRouter>     
    );
}

export {
    MainApp
}