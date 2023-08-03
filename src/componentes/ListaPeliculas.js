import React from "react";
import Pelicula from "./Pelicula";
import Movies from "../paginas/movies";
export default class ListaPeliculas extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {this.props.peliculas.map((pelicula)=>(
                    <Pelicula titulo={pelicula.título} año={pelicula.año} lanzamiento={pelicula.lanzamiento}genero={pelicula.géneros[0]}imagen={pelicula.posterurl}/>
                ))}
                {this.props.peliculas.map((pelicula)=>(
                    <Movies titulo={pelicula.título} año={pelicula.año} lanzamiento={pelicula.lanzamiento}genero={pelicula.géneros[0]}imagen={pelicula.posterurl}/>
                ))}
                
                
                
               
            </>

        );
    }



}