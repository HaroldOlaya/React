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
                    <Pelicula nombre={pelicula.nombre}img={pelicula.img}/>
                ))}
            </>

        );
    }



}