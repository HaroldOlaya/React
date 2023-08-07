import React from "react";
import Form from 'react-bootstrap/Form';
import "../inicio.css"

export default class Inicio extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            contraseña:""
        }
        this.submmited=this.submmited.bind(this);
        this.changed=this.changed.bind(this);
        this.chang=this.chang.bind(this);
    }
    chang(event){
        this.setState({
            contraseña: event.target.value
        })
    }
    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }
    submmited(event){
        alert("Ingresando el usuario: "+this.state.nombre+"\n"+"Contraseña: "+this.state.contraseña);
        
        event.preventDefault();
    }
    render(){
        return (
            <div id="contenedorPadre">
                <div id="contenedorHijo" class="col-4  posicionlogin">
                    <div className="col-12">
                            <Form onSubmit={this.submmited}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={this.changed}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={this.chang} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Guardar" />
                                </Form.Group>
                                <div className="col-auto inicio">
                                    <div><button type="submit" class="btn btn-outline-primary">Iniciar sesión</button></div>
                                    <br></br>
                                    <div><a href="https://media.licdn.com/dms/image/D4E12AQFFVOY1I0Tg-Q/article-cover_image-shrink_720_1280/0/1682442548296?e=2147483647&v=beta&t=yF14KZTIxtroqnR14__HTEcan_jd2MrL66YHCprquPM">Olvide mi contraseña</a></div>
                                </div>
                            </Form>
                    </div>
                </div>
            </div>    
            )

    }

}