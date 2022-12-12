import React from 'react';
import { NavLink } from 'react-router-dom';
import './estilos.css';
import './normalize.css';


const CabeceraBusqueda = () => {

    return ( 
        <header className ="banner_busqueda banner">
        <nav className ="nav contenedor">
            <div className ="nav_logo">
                <p className ="nav_title"> Directorio de Restaurantes</p>
            </div>

            <ul className ="nav_link nav_link--menu">
                <li className ="nav_items">
                    <NavLink to="/" className="nav_links">Inicio</NavLink>
                </li>
                <li className ="nav_items">
                    <NavLink to="/busqueda" className="nav_links">Búsqueda</NavLink>
                </li>
                <li className ="nav_items">
                    <NavLink to="/ingresarrestaurante" className ="nav_links">Ingresar restaurante</NavLink>
                </li>
            </ul>        
        </nav> 

        <section className ="banner_contenedor contenedor">
            <h1 className ="banner_title">Estas en la sección de búsqueda.</h1>
            <p className ="banner_paragraph">Te aparecerán por orden alfabético y más visitados.</p>
            <div className ="nav_inputs">
            <input type="text" id="nav_input" name="nav_input" placeholder="El restaurante de mis sueños"/>
            <button id="nav_submit"> Buscar </button>
            </div>
        </section>
        </header> 
             
    );
}

export {
    CabeceraBusqueda
}