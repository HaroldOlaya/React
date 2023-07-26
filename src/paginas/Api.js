import React,{ useEffect, useState } from "react";

export default class Api extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lanzamientos: []
        }
        
    }
    componentDidMount(){
        fetch("https://api.frankfurter.app/latest?to=USD,GBP")
        .then (res => res.json())
        .then ((result)=> {
            this.setState({
                lanzamientos : result
            });
        })
    }
    render(){  
            return(
                <>
                    {this.state.lanzamientos.map((array:lanzamiento)=>( 
                        <span>{lanzamiento}</span>
                    ))}
                    <h1>hola</h1>
                </>
                )   
            
        
        
    }
  
}


