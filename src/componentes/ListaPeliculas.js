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
                    <Pelicula titulo={pelicula.título} año={pelicula.año} lanzamiento={pelicula.lanzamiento}genero={pelicula.géneros[0]}/>
                ))}
                
                
                
               
            </>

        );
    }



}