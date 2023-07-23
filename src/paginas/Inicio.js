import React from "react";
import Form from 'react-bootstrap/Form';
import "../inicio.css"

export default class Inicio extends React.Component {

    render(){
        return (
            <div id="contenedorPadre">
                <div id="contenedorHijo" class="col-4  posicion">
                    <div className="col-12">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Guardar" />
                                </Form.Group>
                                <div className="col-auto inicio">
                                    <div><button type="button" class="btn btn-outline-primary">Iniciar sesión</button></div>
                                    <br></br>
                                    <div><a href="#">Olvide mi contraseña</a></div>
                                </div>
                            </Form>
                    </div>
                </div>
            </div>    
            )

    }

}