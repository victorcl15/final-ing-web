import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Restaurantes} from './Restaurantes';
import {Inicio} from './Inicio';
import {Busqueda} from './Busqueda';
import {Ingresarrestaurante} from './Ingresarrestaurante';
import {Cabecera} from './CabeceraInicio';
import {CabeceraBusqueda} from './CabeceraBusqueda';
import {CabeceraIngresar} from './CabeceraIngresar';

const Ruta = () => {


    return ( 
        <>
            
                <Routes>
                    <Route path="/" element = { <div> <Cabecera/> <Inicio/> </div>} />
                    <Route path="/busqueda" element = { <div> <CabeceraBusqueda/> <Busqueda/> </div>} />
                    <Route path="/ingresarrestaurante" element = { <div> <CabeceraIngresar/> <Ingresarrestaurante/></div>} />
                </Routes>
           
        </>
    );
}

export{
    Ruta
} 