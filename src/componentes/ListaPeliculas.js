import React from "react";
import Pelicula from "./Pelicula";

export default class ListaPeliculas extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {this.props.peliculas.map((pelicula)=>(
                    <Pelicula Nombre={pelicula.Nombre}Categoria={pelicula.Categoria}archivo={pelicula.archivo}/>
                ))}
            </>

        );
    }



}