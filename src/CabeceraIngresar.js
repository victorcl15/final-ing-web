import React from 'react';
import { NavLink } from 'react-router-dom';
import './estilos.css';
import './normalize.css';


const CabeceraIngresar = () => {

    return ( 
        <header className="banner_ingresar banner">
        <nav className="nav contenedor">
            <div className="nav_logo">
                <p className="nav_title"> Directorio de Restaurantes</p>
            </div>

            <ul className="nav_link nav_link--menu">
                <li className="nav_items">
                    <NavLink to="/" className="nav_links">Inicio</NavLink>
                </li>
                <li className="nav_items">
                    <NavLink to="/busqueda" className="nav_links">Búsqueda</NavLink>
                </li>
                <li className="nav_items">
                    <NavLink to="/ingresarrestaurante" className="nav_links">Ingresar restaurante</NavLink>
                </li>
            </ul>        
        </nav> 

        <section className="banner_contenedor contenedor">
            <h1 className="banner_title">Diligencia los datos del nuevo integrante de la familia.</h1>
            <p className="banner_paragraph">La solicitud de aprobación te llegará en menos de 24 horas.</p>
        </section> 

        </header>  
    );
}
export {
    CabeceraIngresar
}
