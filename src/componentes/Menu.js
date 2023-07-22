import React from "react";

export default class Menu extends React.Component {

    render(){
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="..."></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn btn-outline-primary"><a href="/">Inicio</a></button>
                                <button type="button" class="btn btn-outline-primary"><a href="/Peliculas">Peliculas</a></button>
                                <button type="button" class="btn btn-outline-primary"><a href="/Contacto">Contacto</a></button>

                    </div>
                </nav>
            </div>
        )

    }





}