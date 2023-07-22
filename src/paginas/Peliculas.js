import React from "react";
import '../App.css';
import Pelicula from '../componentes/Pelicula';

export default class Peliculas extends React.Component {

    render(){
        return (
            <>  
            <div className='col-12'>
              <div className="row my-4 col-12">
                <Pelicula nombre="Terror" img="/img/terror.jpg"/>
                <Pelicula nombre="Comedia" img="/img/comedia.jpg"/>
                <Pelicula nombre="Accion" img="/img/accion.jpg"/>
                <Pelicula nombre="Infantil"/>
                <Pelicula nombre="Terror" img="/img/terror.jpg"/>
                <Pelicula nombre="Comedia" img="/img/comedia.jpg"/>
                <Pelicula nombre="Accion" img="/img/accion.jpg"/>
                <Pelicula nombre="Infantil"/>
                <Pelicula nombre="Terror" img="/img/terror.jpg"/>
                <Pelicula nombre="Comedia" img="/img/comedia.jpg"/>
                <Pelicula nombre="Accion" img="/img/accion.jpg"/>
                <Pelicula nombre="Infantil"/>
                <Pelicula nombre="Terror" img="/img/terror.jpg"/>
                <Pelicula nombre="Comedia" img="/img/comedia.jpg"/>
                <Pelicula nombre="Accion" img="/img/accion.jpg"/>
                <Pelicula nombre="Infantil"/>
              </div>
            </div>
          </>
            )

    }

}