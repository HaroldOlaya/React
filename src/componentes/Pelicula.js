import React from "react";
import './pelicula.css';
export default class Pelicula extends React.Component {
    constructor(props){
        super(props);
        this.state={
            escondido:false
        }
    }
    toggleEsconder(){
        var resultado = window.confirm('Estas seguro?');
        if (resultado == true) {
            window.alert('Okay, si estas seguro.');
        } else { 
            window.alert('Pareces indeciso');
        }
    }
    render(){
        return(   
                <div class='col-2 '>
                    <div className="card agrandar">
                        <img src={this.props.img} class="card-img-top" alt={this.props.nombre}/>
                        <div class="card-body">
                            <h5 class="card-title tamaño">{this.props.nombre}</h5>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-outline-info"><a href="/Contacto">Comprar</a></button>
                                <button class="btn btn-outline-danger" onClick={this.toggleEsconder}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

