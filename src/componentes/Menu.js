import React from "react";
import "../componentes/pelicula.css"
export default class Menu extends React.Component {

    render(){
        return (
            <div className="oscuro">
                    <div class="gap-2 d-md-flex justify-content-md-end ">
                                <button type="button" class="btn btn-outline-Danger"><a href="/">Login</a></button>
                                <button type="button" class="btn btn-outline-Success"><a href="/Peliculas">Peliculas</a></button>
                                <button type="button" class="btn btn-outline-Success"><a href="/Api">Usuarios</a></button>
                    </div>
            </div>
        )

    }





}