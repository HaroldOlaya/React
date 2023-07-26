import React from "react";
import '../App.css';
import Pelicula from '../componentes/Pelicula';
import ListaPeliculas from "../componentes/ListaPeliculas";

export default class Peliculas extends React.Component {
    peliculas=[
        {
            nombre:"Halloween",
            img:"https://i.blogs.es/a033c7/halloween-1978-1534923465/1366_2000.jpg"
        },
        {
            nombre:"La cosa",
            img:"https://i.blogs.es/9a6d58/the-thing-1200-1200-675-675-crop-000000/1366_2000.jpg"
        },
        {
            nombre:"Psycho",
            img:"https://i.blogs.es/2ed508/psycho-1960-ievenn-2/1366_2000.jpg"
        },
        {
            nombre:"Scream",
            img:"./img/terror.jpg"
        },
        {
            nombre:"Pantera negra",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Spider man",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Son como niños",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Elementos",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Rapidos y furiosos",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Top gun",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"La noche del demonio",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Freddy krueger",
            img:"./img/pendiente.jpg"
        },
        {
            nombre:"Avengers",
            img:"./img/avengers.jpg"
        }

    ]
    render(){
        return (
            <>  
          
                <ListaPeliculas peliculas={this.peliculas}/>
              
          </>
            )

    }

}