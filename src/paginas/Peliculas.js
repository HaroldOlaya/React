import React from "react";
import '../App.css';
import Pelicula from '../componentes/Pelicula';
import ListaPeliculas from "../componentes/ListaPeliculas";

export default class Peliculas extends React.Component {
    peliculas=[
        {id:1,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:2,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:3,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:4,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:5,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:6,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
        {id:7,Nombre:'Naruto',Categoria: 'Naru',archivo:" "},
    ];
   
    render(){
        return (
            <>  
                <ListaPeliculas peliculas={this.peliculas}/>
              
          </>
            )

    }

}