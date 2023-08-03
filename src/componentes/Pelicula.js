import React from "react";
import './pelicula.css';
export default class Pelicula extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(   
            <>
            <div className="col-4">
                <div class='agrandar '>
                    <div class="myCard ">
                    <div class="innerCard ">
                        <div class="frontSide">
                            <img src={this.props.imagen} class="card-img-top" alt={this.props.titulo}/>
                        </div>
                        <div class="backSide ">
                            <h1 class="title ">{this.props.titulo}</h1>
                            <h4 class="tamaño2 ">Genero:{this.props.genero}</h4>
                            <p class="title ">Fecha de lanzamiento</p>
                            <p class="title ">{this.props.lanzamiento}</p>
                            <button type="button" class="btn btn-outline-info "><a href="/Contacto">Comprar</a></button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}