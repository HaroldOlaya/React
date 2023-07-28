import React,{setState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'react-bootstrap';

const data=[
    {id:1,personaje:'Naruto',anime: 'Naru'},
    {id:2,personaje:'Naruto',anime: 'Naru'},
    {id:3,personaje:'Naruto',anime: 'Naru'},
    {id:4,personaje:'Naruto',anime: 'Naru'},
    {id:5,personaje:'Naruto',anime: 'Naru'},
    {id:6,personaje:'Naruto',anime: 'Naru'},
    {id:7,personaje:'Naruto',anime: 'Naru'},
];


export default class Movies extends React.Component{
    
        state={
            data:data,
            form:{
                id:'',
                personaje:'',
                anime:''
            },
            modalInsertar:false,
        };
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,[e.target.name]:e.target.value,

            }
        });

    }
    
      
    mostrarModalInsertar=()=>{
        this.setState({modalInsertar:true});
        console.log(this.state.modalInsertar)
    }
    cerrarModalInsertar=()=>{
        this.setState({modalInsertar:false});
    }

    render(){
        return(
            <>  
                <Container>
                    <br/>
                    <Button onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo personaje</Button>
                    <br/><br/>
                <Table>
                    <thead><tr>
                    <th>id</th>
                    <th>personaje</th>
                    <th>Anime</th>
                    <th>Acciones</th></tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.personaje}</td>
                                <td>{elemento.anime}</td>
                                <td><Button class='primary'>Editar</Button>{"  "}
                                <Button variant='danger'>Eliminar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>
               
                <Modal isOpen={this.state.modalInsertar} >
                    <ModalHeader>
                        <div>
                            <h3>Insertar registro</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control"readOnly type="text" value={this.state.data.length+1}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Personaje:</label>
                            <input className="form-control" name="personaje" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Anime:</label>
                            <input className="form-control" name="anime" type="text" onChange={this.handleChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary'>Insertar</Button>
                        <Button variant='danger'onClick={()=>this.cerrarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                
            </>
        )
    }

}