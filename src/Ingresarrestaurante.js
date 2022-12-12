import React from 'react';

import {Restaurantes} from './Restaurantes';
import {CabeceraBusqueda} from './CabeceraBusqueda';

const Ingresarrestaurante = () => {

    return (  
        <>
        <main>
            <section className="banner_contenedor contenedor">
                <div className="ingresar_inputs">
                        <p className="ingresar_paragraph">Nombre</p>    
                        <input type="text" placeholder="Sazón doña Carmen" className="ingresar_input"/>
                        <p className="ingresar_paragraph">Descripción</p>
                        <input type="text" placeholder="Comida caribeña, mariscos" className="ingresar_input"/>
                        <p className="ingresar_paragraph">Dirección</p>
                        <input type="text" placeholder="Calle Bolivar # 1 - 5" className="ingresar_input"/>
                        <p className="ingresar_paragraph">Correo electronico</p>
                        <input type="text" placeholder="carmen@sazon.com" className="ingresar_input"/>
                        <p className="ingresar_paragraph">Inserta una imagen</p>

                        <div className="ingresar_input ingresar_imgs">
                            <input type="file" className="ingresar_img"/>
                        </div>

                        <input type="submit" value="Enviar" className="ingresar_submit"/>
                    </div>
            </section>
        </main>    
        </>  
    );
}

export {
    Ingresarrestaurante
}