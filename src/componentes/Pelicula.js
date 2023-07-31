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
                <div class='col-2 '>
                    <div className="card agrandar">
                        <img src={this.props.archivo} class="card-img-top" alt={this.props.Nombre}/>
                        <div class="card-body">
                            <h5 class="card-title tamaño">{this.props.Nombre}</h5>
                            <h6 class="card-title tamaño">{this.props.Categoria}</h6>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-outline-info"><a href="/Contacto">Comprar</a></button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}