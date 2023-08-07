import React,{ useEffect, useState } from "react";
import '../componentes/api.css';

export default class Api extends React.Component {
    constructor(props){
        super(props)
        this.state={
            usuarios: []
        }
        
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (res => res.json())
        .then ((result)=> {
            this.setState({
                usuarios : result
            });
        })
    }
    render(){  
        return(
            <>
            <div className="posicion">
                <div className="col-12">
                    {this.state.usuarios.map((usuario)=>( 
                    <div className="card usuarios">
                        <h3 class="text-center">{usuario.name}</h3>
                        <div class="card-body">
                            <h5 class="card-title ">Id:{usuario.id}</h5>
                            <h5 class="card-title ">Usuario:{usuario.username}</h5>
                            <h5 class="card-title ">Email:{usuario.email}</h5>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
            </>
            )   
        
    
    
}

}
