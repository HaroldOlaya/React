import React,{setState,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'react-bootstrap';

const data=[
    {id:1,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:2,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:3,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:4,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:5,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:6,personaje:'Naruto',anime: 'Naru',archivo:" "},
    {id:7,personaje:'Naruto',anime: 'Naru',archivo:" "},
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
    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var extension="./img/";
        valorNuevo.archivo=extension+valorNuevo.archivo;
        var lista=this.state.data;
        lista.push(valorNuevo);
        this.setState({data:lista});
    }
    editar=(dato)=>{
        this.setState({form:dato});
        var contador=0;
        var lista=this.state.data;
        lista.map((registro)=>{
            if(dato.id==registro.id){
                lista[contador].personaje=dato.personaje;
                lista[contador].anime=dato.anime;
                lista[contador].archivo=dato.archivo;
            }
            contador++;
        });
        this.setState({data:lista});
    }
    eliminar=(dato)=>{
  
        var opcion=window.confirm("Desea eliminar el id:"+dato.id);
        if(opcion){
            var contador=0;
            var lista=this.state.data;
            lista.map((registro)=>{
            if(dato.id==registro.id){
                lista.splice(contador,1)
            }
            contador++;
        });
        this.setState({data:lista});
        }
        
    }
    render(){
        return(
            <>  
                <Container>
                    <br/>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Insertar nueva
                    </button>                    <br/><br/>
                <Table>
                    <thead><tr>
                    <th>id</th>
                    <th>personaje</th>
                    <th>Anime</th>
                    <th>Pelicula</th>
                    <th>Acciones</th></tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.personaje}</td>
                                <td>{elemento.anime}</td>
                                <td>{elemento.archivo}</td>
                                <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#example" onClick={()=>this.editar(elemento)}>Editar</button> {"  "}
                                <Button variant='danger' onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>               

               
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Registrar nueva pelicula</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                             <label >Id</label>
                            <div class="form-floating mb-3">
                            <div class="alert alert-primary" role="alert" >
                                {this.state.data.length+1}
                            </div>
                            <br/>
                            </div>
                            <div class="form-floating">
                                <input type="text" name="personaje"class="form-control" id="floatingPassword" onChange={this.handleChange}/>
                                <label for="floatingPassword">Personaje</label>
                            </div>
                            <br/>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="anime" id="floatingInput" onChange={this.handleChange}/>
                                <label for="floatingInput">anime</label>
                            </div>
                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">./img/</span>
                            <input type="text" class="form-control" placeholder="Nombre del archivo" aria-label="Username" aria-describedby="basic-addon1"name="archivo" onChange={this.handleChange}/>
                            </div>
   
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" onClick={()=>this.insertar()}data-bs-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>



                <div class="modal fade " id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar pelicula</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label >Id</label>
                            <div class="alert alert-primary" role="alert" >
                                {this.state.form.id}
                            </div>
                            <div class="form-floating">
                                <input type="text" name="personaje"class="form-control"  onChange={this.handleChange} value={this.state.form.personaje} />
                                <label for="floatingPassword">Personaje</label>
                            </div>
                            <br/>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="anime"  onChange={this.handleChange} value={this.state.form.anime} />
                                <label for="floatingInput">anime</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="archivo"  onChange={this.handleChange} value={this.state.form.archivo} />
                                <label for="floatingInput">Ruta del archivo</label>
                            </div>  
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"onClick={()=>this.editar(this.state.form)}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }

}
