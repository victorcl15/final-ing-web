import React from 'react';

import itamarrestobar from './images/itamarrestobar.jpg';
import pescaye from './images/pescaye.jpg';
import labota from './images/labota.jpg';
import sarab from './images/sarab.jpg';



const Restaurantes = () => {

    // let saludo = 'hola mundo';
    const Restaurantes = [

        {
            key: '1',
            nombre:'Itamar Restobar' ,
            rangoPrecios: 'Precios $ 49.505 - $ 148.515',
            img: itamarrestobar ,
            detalles: 'Comida Peruana, Latina, Saludable, Mariscos, Española, Apto para vegetarianos.'
        }
        ,
        {
            key: '2',
            nombre: 'Pescaye' ,
            rangoPrecios: 'Precios $ 34.999 - $ 59.000',
            img: pescaye,
            detalles: 'Comida Caribeña, mariscos, colombiana, opciones sin gluten.'
        }
        ,
        {
            key: '3',
            nombre:'LaBota' ,
            rangoPrecios: 'Precios $ 14.000 - $ 35.450',
            img: labota,
            detalles: 'Comida Italiana, Delicatessen, Saludable, Pizzería, Mediterránea., Apto para vegetarianos.'
        }
        ,
        {
            key: '4',
            nombre: 'Sarab' ,
            rangoPrecios: 'Precios $ 20.000 - $ 40.000',
            img: sarab,
            detalles: 'Comida Libanesa, Árabe, opciones veganas, opciones sin gluten, almuerzo, cena.'
        }
    ];

    return ( 

            <main>
                <section className = "container">
                    {
                    
                        Restaurantes.map(function (rest) {
                            
                            return <article key = {rest.key} className="contenedor restaurantes"> 
                                        <img src = {rest.img} className ="restaurantes_icons"/>
                                        <h3 className="restaurantes_title"> {rest.nombre} </h3> 
                                        <p className="restaurantes_paragraph"> {rest.rangoPrecios} </p>
                                        <a href="" className="restaurantes_cta cta"> Mas detalles</a>'
                                    </article>
                        })
                    
                    }
                    
                </section>
            </main>   
    );
}

export default Restaurantes;

export{
    Restaurantes
}
    
