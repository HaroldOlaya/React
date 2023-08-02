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
                <div class='col-3 '>
                    <div className="card agrandar">
                        <img src={this.props.archivo} class="card-img-top" alt={this.props.titulo}/>
                        <div class="card-body">
                            <h5 class="card-title tamaño">{this.props.titulo}</h5>
                            <h6 class="card-title tamaño">Genero:{this.props.genero}</h6>
                            <h6 class="card-title tamaño">Año de grabacion:{this.props.año}</h6>
                            <h6 class="card-title tamaño">Lanzamiento:{this.props.lanzamiento}</h6>

                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-outline-info"><a href="/Contacto">Comprar</a></button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}