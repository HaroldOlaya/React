import React from "react";
import '../App.css';
import Pelicula from '../componentes/Pelicula';
import ListaPeliculas from "../componentes/ListaPeliculas";
import Movies from "./movies";

export default class Peliculas extends React.Component {
    peliculas=[
        {
            "título": "Nyckeln hasta el viernes",
            "año": "1994",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9, 5 , 4, 4, 2, 4, 6, 9, 10],
            "duración": "PT142M",
            "lanzamiento": "1995-03-03",
            "originalTitle": "La redención de Shawshank",
            "argumento": "Narra las experiencias de un banquero anteriormente exitoso como prisionero en la sombría cárcel de Shawshank después de ser declarado culpable de un crimen que no cometió. La película retrata la forma única del hombre de lidiar con su nueva y tortuosa vida; en el camino se hace amigo de varios compañeros de prisión, sobre todo de un sabio preso llamado Red. Escrito por\nJ-S-Golden",
            "actores": [
                "Tim Robbins",
                "Morgan Freeman",
                "Bob Guntón"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg"
        },
        {
            "título": "Gudfadern",
            "año": "1972",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9, 9 , 10, 4, 6, 2, 9, 7, 7],
            "duración": "PT175M",
            "lanzamiento": "27-09-1972",
            "originalTitle": "El Padrino",
            "storyline": "Cuando el anciano jefe de una famosa familia criminal decide transferir su puesto a uno de sus subalternos, una serie de eventos desafortunados comienzan a sucederle a la familia y comienza una guerra entre todas las familias conocidas que conduce a la insolencia. , deportación, asesinato y venganza, y termina con la elección definitiva del sucesor favorable. Escrito por\nJ. S. Golden",
            "actores": [
                "Marlon Brando",
                "Al Pacino",
                "James Caan"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500 _CR0,0,352,500_AL_.jpg"
        },
        {
            "título": "Gudfadern del II",
            "año": "1974",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [2, 5, 1, 1, 8, 4, 2, 3, 10, 10, 4, 9, 8, 9, 7, 6, 6, 9, 9, 4, 1, 8, 4 , 5, 7, 7, 7, 1, 10, 6],
            "duración": "PT202M",
            "lanzamiento": "1975-07-28",
            "originalTitle": "El Padrino: Parte II",
            "storyline": "La saga continua de la familia criminal Corleone cuenta la historia de un joven Vito Corleone que creció en Sicilia y en la década de 1910 en Nueva York; y sigue a Michael Corleone en la década de 1950 mientras intenta expandir el negocio familiar a Las Vegas, Hollywood y Cuba. Escrito por\nKeith Loh <loh@sfu.ca>",
            "actores": [
                "Al Pacino",
                "Robert de Niro",
                "Roberto Duvall"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY5 00_CR0,0,351,500_AL_.jpg"
        },
        {
            "título": "12 edsvurna m\u00e4n",
            "año": "1957",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [3, 5, 3, 3, 10, 3, 4, 1, 6, 10, 2, 8, 4, 6, 8, 6, 1, 10, 4, 5, 9, 3, 2 , 4, 8, 10, 10, 7, 9, 6],
            "duración": "PT96M",
            "lanzamiento": "29-07-1957",
            "originalTitle": "12 hombres enojados",
            "storyline": "La defensa y la acusación han descansado y el jurado se presenta en la sala del jurado para decidir si un joven es culpable o inocente de asesinar a su padre. Lo que comienza como un caso abierto y cerrado de asesinato pronto se convierte en una historia de detectives que presenta una sucesión de pistas que crean dudas, y un minidrama de cada uno de los prejuicios y preconceptos de los miembros del jurado sobre el juicio, los acusados ​​y entre ellos.Basado en la obra, toda la acción se desarrolla en el escenario de la sala del jurado. Escrito por\npjk <PETESID@VNET.IBM.COM>",
            "actores": [
                "Henry Fonda",
                "Lee J. Cobb",
                "Martin Bálsamo"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "La lista de Schindler",
            "año": "1993",
            "géneros": [
                "Biografía",
                "Drama",
                "Historia"
            ],
            "puntuaciones": [2, 6, 7, 8, 8, 6, 2, 4, 6, 2, 3, 3, 5, 9, 5, 10, 9, 5, 5, 2, 10, 4, 8 , 7, 4, 10, 2, 10, 4, 10],
            "duración": "PT195M",
            "lanzamiento": "1994-03-04",
            "titulo original": "",
            "storyline": "Oskar Schindler es un hombre de negocios alemán vanaglorioso y codicioso que se convierte en un filántropo improbable en medio del bárbaro reinado nazi alemán cuando se siente obligado a convertir su fábrica en un refugio para judíos. Basada en la historia real de Oskar Schindler, quien logró salvar a unos 1100 judíos de ser gaseados en el campo de concentración de Auschwitz, es un testimonio de lo bueno que hay en todos nosotros. Escrito por\nHarald Mayr <marvin@bike.augusta.de>",
            "actores": [
                "Liam Neeson",
                "Ralph Fiennes",
                "Ben Kingsley"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_ AL_.jpg"
        },
        {
            "título": "Pulp Fiction",
            "año": "1994",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [2, 9, 7, 7, 7, 2, 2, 4, 1, 9, 6, 3, 4, 10, 8, 6, 7, 5, 9, 4, 3, 5, 9 , 3, 8, 2, 6, 7, 4, 4],
            "duración": "PT154M",
            "lanzamiento": "1994-11-25",
            "titulo original": "",
            "argumento": "Jules Winnfield (Samuel L. Jackson) y Vincent Vega (John Travolta) son dos asesinos a sueldo que buscan recuperar una maleta robada a su empleador, el jefe de la mafia Marsellus Wallace (Ving Rhames). Wallace también le ha pedido a Vincent para salir con su esposa Mia (Uma Thurman) unos días más tarde cuando el propio Wallace estará fuera de la ciudad. Butch Coolidge (Bruce Willis) es un boxeador envejecido a quien Wallace le paga para que pierda peso. Las vidas de estas personas aparentemente no relacionadas están entretejidos y comprenden una serie de incidentes divertidos, extraños e innecesarios. Escrito por\nSoumitra",
            "actores": [
                "John Travolta",
                "Uma Thurman",
                "Samuel L. Jackson"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg"
        },
        {
            "título": "Sagan om konungens \u00e5terkomst",
            "año": "2003",
            "géneros": [
                "Aventura",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [6, 3, 2, 7, 5, 2, 10, 10, 4, 5, 7, 1, 8, 4, 8, 7, 2, 8, 5, 5, 6, 3, 3 , 10, 10, 2, 1, 8, 3, 5],
            "duración": "PT201M",
            "lanzamiento": "2003-12-17",
            "originalTitle": "El Señor de los Anillos: El Retorno del Rey",
            "storyline": "La confrontación final entre las fuerzas del bien y del mal que luchan por el control del futuro de la Tierra Media. Los hobbits Frodo y Sam llegan a Mordor en su búsqueda para destruir el \"anillo único\", mientras que Aragorn lidera las fuerzas. del bien contra el ejército del mal de Sauron en la ciudad de piedra de Minas Tirith. Escrito por\nJwelch5742",
            "actores": [
                "Elijah Wood",
                "Viggo Mortensen",
                "Ian McKellen"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX334_AL_.jpg"
        },
        {
            "título": "El club de la lucha",
            "año": "1999",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [6, 5, 10, 10, 6, 6, 6, 7, 2, 8, 10, 2, 3, 5, 1, 3, 10, 3, 6, 2, 6, 2, 10 , 4, 4, 8, 9, 10, 10, 5],
            "duración": "PT139M",
            "lanzamiento": "1999-12-25",
            "titulo original": "",
            "storyline": "Un narrador anónimo en primera persona (Edward Norton) asiste a grupos de apoyo en un intento de dominar su estado emocional y aliviar su estado de insomnio. Cuando conoce a Marla (Helena Bonham Carter), otra asistente falsa de grupos de apoyo, su vida parece para volverse un poco más soportable. Sin embargo, cuando se asocia con Tyler (Brad Pitt), se ve arrastrado a un club de lucha clandestino y a un esquema de fabricación de jabón. Juntos, los dos hombres pierden el control y se involucran en una rivalidad competitiva por el amor y el poder. Cuando el narrador está expuesto a la agenda oculta del club de lucha de Tyler, debe aceptar la terrible verdad de que Tyler puede no ser quien dice ser. Escrito por\nRhiannon",
            "actores": [
                "Brad Pitt",
                "Edward Norton",
                "Pastel de carne"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX290_CR0,0,290,429_AL _.jpg"
        },
        {
            "título": "Sagan om ringen: H\u00e4rskarringen",
            "año": "2001",
            "géneros": [
                "Aventura",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [1, 2, 4, 3, 2, 4, 7, 5, 9, 3, 5, 1, 10, 4, 2, 2, 10, 7, 5, 9, 10, 4, 3 , 5, 8, 3, 2, 5, 5, 4],
            "duración": "PT178M",
            "lanzamiento": "2001-12-19",
            "originalTitle": "El Señor de los Anillos: La Comunidad del Anillo",
            "storyline": "Se ha encontrado un antiguo Anillo que se creía perdido durante siglos, y a través de un extraño giro en el destino se le ha dado a un pequeño Hobbit llamado Frodo. Cuando Gandalf descubre que el Anillo es de hecho el Anillo Único del Señor Oscuro Sauron, ¡Frodo debe hacer una búsqueda épica a las Grietas del Destino para destruirlo! Sin embargo, no va solo. Se le unen Gandalf, Legolas el elfo, Gimli el Enano, Aragorn, Boromir y sus tres amigos hobbits, Merry, Pippin y Samwise. A través de montañas, nieve, oscuridad, bosques, ríos y llanuras, enfrentando el mal y el peligro en cada esquina, la Comunidad del Anillo debe ir. ¡Su búsqueda para destruir el Anillo Único es la única esperanza para el final del reinado de los Señores Oscuros! Escrito por\nPaul Twomey <toomsp@hotmail.com>",
            "actores": [
                "Elijah Wood",
                "Ian McKellen",
                "Orlando Bloom"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX342_AL_.jpg"
        },
        {
            "título": "Rymdimperiet sl\u00e5r tillbaka",
            "año": "1980",
            "géneros": [
                "Acción",
                "Aventura",
                "Fantasía"
            ],
            "puntuaciones": [2, 3, 10, 2, 7, 8, 1, 4, 1, 5, 8, 5, 8, 2, 8, 4, 3, 6, 10, 3, 5, 2, 9 , 7, 3, 1, 10, 6, 7, 10],
            "duración": "PT124M",
            "lanzamiento": "1980-08-15",
            "originalTitle": "Star Wars: Episodio V - El Imperio Contraataca",
            "storyline": "Luke Skywalker, Han Solo, la princesa Leia y Chewbacca se enfrentan al ataque de las fuerzas imperiales y sus caminantes AT-AT en el planeta helado Hoth. Mientras Han y Leia escapan en el Halcón Milenario, Luke viaja a Dagobah en busca de Yoda. Solo con la ayuda del maestro Jedi Luke sobrevivirá cuando el lado oscuro de la Fuerza lo llame al duelo definitivo con Darth Vader. Escrito por\nJwelch5742",
            "actores": [
                "Mark Hamill",
                "Harrison Ford",
                "Carrie Fisher"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,322,500_AL _.jpg"
        },
        {
            "título": "Forrest Gump",
            "año": "1994",
            "géneros": [
                "Comedia",
                "Drama",
                "Romance"
            ],
            "puntuaciones": [9, 1, 10, 10, 10, 6, 3, 7, 1, 3, 4, 9, 2, 4, 10, 8, 7, 4, 8, 8, 9, 5, 4 , 2, 5, 5, 6, 3, 1, 4],
            "duración": "PT142M",
            "lanzamiento": "1994-10-14",
            "titulo original": "",
            "storyline": "Forrest Gump es un hombre sencillo con un coeficiente intelectual bajo pero con buenas intenciones. Pasa la infancia con su mejor y única amiga, Jenny. Su 'mamá' le enseña los caminos de la vida y lo deja elegir su destino. Forrest se une al ejército para el servicio en Vietnam, encontrando nuevos amigos llamados Dan y Bubba, gana medallas, crea una famosa flota pesquera de camarones, inspira a la gente a trotar, comienza una locura de ping-pong, crea el emoticón, escribe calcomanías y canciones, dona a la gente y se encuentra con el presidente varias veces. Sin embargo, todo esto es irrelevante para Forrest, quien solo puede pensar en su novia de la infancia, Jenny Curran, quien ha arruinado su vida. Aunque al final lo único que quiere demostrar es que cualquiera puede amar. cualquiera. Escrito por\naliw135",
            "actores": [
                "Tom Hanks",
                "robin wright",
                "Gary Sinise"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,378,500_AL _.jpg"
        },
        {
            "título": "Sagan om de tv\u00e5 tornen",
            "año": "2002",
            "géneros": [
                "Aventura",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [8, 2, 2, 3, 10, 9, 1, 8, 4, 7, 1, 7, 5, 7, 9, 3, 9, 9, 10, 3, 4, 1, 10 , 8, 10, 1, 8, 10, 9, 8],
            "duración": "PT179M",
            "lanzamiento": "2002-12-18",
            "originalTitle": "El Señor de los Anillos: Las Dos Torres",
            "storyline": "Mientras Frodo y Sam, ahora acompañados por un nuevo guía, continúan su desesperado viaje hacia la tierra de las sombras para destruir el Anillo Único, cada miembro de la fraternidad rota juega su papel en la batalla contra el malvado mago Saruman y sus ejércitos de Isengard.",
            "actores": [
                "Elijah Wood",
                "Ian McKellen",
                "Viggo Mortensen"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg"
        },
        {
            "título": "G\u00f6kboet",
            "año": "1975",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [2, 8, 4, 8, 7, 9, 2, 8, 5, 9, 3, 5, 6, 8, 7, 9, 2, 7, 9, 9, 7, 3, 7 , 8, 7, 1, 10, 10, 3, 3],
            "duración": "PT133M",
            "lanzamiento": "1976-02-26",
            "originalTitle": "Alguien voló sobre el nido del cuco",
            "storyline": "McMurphy tiene un pasado criminal y una vez más se ha metido en problemas y es sentenciado por la corte. Para escapar de los deberes laborales en prisión, McMurphy se declara loco y es enviado a una sala para personas mentalmente inestables. Una vez aquí, McMurphy ambos soportan y son testigos del abuso y la degradación de la opresiva enfermera Ratched, quien gana superioridad y poder a través de los defectos de los otros reclusos. McMurphy y los otros reclusos se unen para tomar una postura rebelde contra la atroz enfermera. Escrito por\nJacob Oberfrank",
            "actores": [
                "Jack Nicholson",
                "Louise Fletcher",
                "Michael Berryman"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY5 00_CR0,0,336,500_AL_.jpg"
        },
        {
            "título": "Maffiabr\u00f6der",
            "año": "1990",
            "géneros": [
                "Biografía",
                "Delito",
                "Drama"
            ],
            "puntuaciones": [5, 9, 10, 10, 8, 4, 10, 4, 2, 1, 10, 9, 5, 5, 7, 7, 3, 7, 6, 5, 9, 6, 1 , 3, 3, 9, 9, 3, 5, 5],
            "duración": "PT146M",
            "lanzamiento": "1990-09-14",
            "originalTitle": "Buenos muchachos",
            "storyline": "Henry Hill podría ser un gángster de poca monta, que pudo haber participado en un robo con Jimmy Conway y Tommy De Vito, otros dos gánsteres que podrían haber puesto sus miras un poco más altas. Sus dos socios podrían matar a todos otra persona involucrada en el robo, y poco a poco comienza a pensar en ascender en la jerarquía de la Mafia. Henry, sin embargo, podría verse gravemente afectado por el éxito de sus socios, pero ¿considerará rebajarse lo suficiente como para provocar la caída de Jimmy y ¿Tommy? Escrito por\nColin Tinto <cst@imdb.com>",
            "actores": [
                "Robert de Niro",
                "Ray Liotta",
                "Joe Pesci"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,334,500_AL_. jpg"
        },
        {
            "título": "Matriz",
            "año": "1999",
            "géneros": [
                "Acción",
                "Ciencia ficción"
            ],
            "puntuaciones": [10, 10, 5, 1, 8, 8, 10, 9, 6, 2, 1, 9, 3, 1, 5, 1, 8, 5, 8, 8, 5, 7, 6 , 5, 8, 6, 3, 6, 6, 10],
            "duración": "PT136M",
            "lanzamiento": "1999-07-14",
            "originalTitle": "Matrix",
            "storyline": "Thomas A. Anderson es un hombre que vive dos vidas. De día es un programador de computadoras promedio y de noche un hacker conocido como Neo. Neo siempre ha cuestionado su realidad, pero la verdad está mucho más allá de su imaginación. Neo se encuentra en el punto de mira de la policía cuando es contactado por Morpheus, un pirata informático legendario tildado de terrorista por el gobierno.Morpheus despierta a Neo al mundo real, un páramo devastado donde la mayor parte de la humanidad ha sido capturada por una raza de máquinas que viven de del calor corporal y la energía electroquímica de los humanos y que aprisionan sus mentes dentro de una realidad artificial conocida como Matrix. Como rebelde contra las máquinas, Neo debe regresar a Matrix y enfrentarse a los agentes: programas informáticos superpoderosos dedicados a apagar Neo y toda la rebelión humana.Escrito por\nredcommander27",
            "actores": [
                "Keanu Reeves",
                "Laurence Fishburne",
                "Carrie-Anne Moss"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332 ,500_AL_.jpg"
        },
        {
            "título": "De sju samurajerna",
            "año": "1954",
            "géneros": [
                "Aventura",
                "Drama"
            ],
            "puntuaciones": [1, 9, 9, 6, 6, 1, 3, 1, 6, 1, 9, 6, 1, 7, 7, 10, 5, 3, 9, 4, 6, 6, 9 , 10, 6, 10, 7, 1, 6, 10],
            "duración": "PT207M",
            "lanzamiento": "1965-09-20",
            "originalTitle": "Shichinin no samurái",
            "storyline": "Un samurái veterano, que ha atravesado tiempos difíciles, responde a la solicitud de protección de un pueblo contra los bandidos. Reúne a otros 6 samuráis para que lo ayuden, les enseñan a la gente del pueblo cómo defenderse y les proporcionan a los samuráis tres comidas pequeñas al día. La película culmina en una gran batalla cuando 40 bandidos atacan el pueblo. Escrito por\nColin Tinto <cst@imdb.com>",
            "actores": [
                "Toshir\u00f4 Mifune",
                "Takashi Shimura",
                "Keiko Tsushima"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY500_CR0,0,356,500_AL_.jpg"
        },
        {
            "título": "Stj\u00e4rnornas krig",
            "año": "1977",
            "géneros": [
                "Acción",
                "Aventura",
                "Fantasía"
            ],
            "puntuaciones": [6, 3, 3, 4, 2, 10, 7, 4, 1, 5, 7, 8, 6, 4, 2, 7, 9, 3, 4, 4, 7, 7, 7 , 4, 8, 2, 7, 5, 2, 9],
            "duración": "PT121M",
            "lanzamiento": "1977-12-16",
            "originalTitle": "Guerra de las Galaxias",
            "storyline": "Las Fuerzas Imperiales, bajo las órdenes del cruel Darth Vader, retienen a la Princesa Leia como rehén en sus esfuerzos por sofocar la rebelión contra el Imperio Galáctico. Luke Skywalker y Han Solo, capitán del Halcón Milenario, trabajan junto con el droide acompañante el dúo R2-D2 y C-3PO para rescatar a la hermosa princesa, ayudar a la Alianza Rebelde y restaurar la libertad y la justicia en la Galaxia. Escrito por\nJwelch5742",
            "actores": [
                "Mark Hamill",
                "Harrison Ford",
                "Carrie Fisher"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY5 00_CR0,0,332,500_AL_.jpg"
        },
        {
            "título": "Guds stad",
            "año": "2002",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [1, 2, 5, 10, 1, 2, 6, 10, 2, 9, 7, 9, 7, 9, 4, 8, 7, 7, 7, 7, 10, 9, 9 , 2, 6, 6, 6, 2, 1, 8],
            "duración": "PT130M",
            "lanzamiento": "2003-10-17",
            "originalTitle": "Cidade de Deus",
            "storyline": "Brasil, 1960, Ciudad de Dios. El Tender Trio roba moteles y camiones de gasolina. Los niños más pequeños miran y aprenden bien... demasiado bien. 1970: Li'l Z\u00e9 ha prosperado mucho y es dueño de la ciudad Causa violencia y miedo mientras acaba con las bandas rivales sin piedad. Su mejor amigo, Ben\u00e9, es el único que lo mantiene en el lado bueno de la cordura. Rocket ha visto a estos dos ganar poder durante años, y no quiere saber nada. Sin embargo, sigue siendo arrastrado por la locura. Todo lo que quiere hacer es tomar fotografías. Década de 1980: las cosas están fuera de control entre las dos últimas pandillas que quedan... ¿alguna vez terminará? Bienvenido a la Ciudad de Dios. Escrito por\nJeff Mellinger <jeffmellinger@astound.net>",
            "actores": [
                "Alejandro Rodrigues",
                "Matheus Nachtergaele",
                "Leandro Firmino"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg"
        },
        {
            "título": "De mist\u00e4nkta",
            "año": "1995",
            "géneros": [
                "Delito",
                "Drama",
                "Misterio"
            ],
            "puntuaciones": [5, 8, 6, 6, 4, 2, 1, 9, 6, 2, 5, 1, 6, 10, 1, 8, 7, 6, 10, 3, 7, 7, 5 , 1, 8, 8, 6, 4, 10, 9],
            "duración": "PT106M",
            "lanzamiento": "1995-11-03",
            "originalTitle": "Los sospechosos habituales",
            "storyline": "Tras el secuestro de un camión en Nueva York, cinco estafadores son arrestados y reunidos para ser interrogados. Como ninguno de ellos es culpable, planean una operación de venganza contra la policía. La operación sale bien, pero luego la influencia de un Se hace sentir al legendario criminal intelectual llamado Keyser S\u00f6ze. Queda claro que cada uno de ellos ha agraviado a S\u00f6ze en algún momento y debe pagar ahora. El trabajo de venganza deja a 27 hombres muertos en la explosión de un barco, pero surge la verdadera pregunta. ahora: ¿Quién es en realidad Keyser S\u00f6ze? Escrito por\nSoumitra",
            "actores": [
                "Kevin Spacey",
                "Gabriel Byrne",
                "Chazz Palminteri"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "Livet \u00e4r underbart",
            "año": "1997",
            "géneros": [
                "Comedia",
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [4, 1, 9, 3, 3, 9, 3, 3, 6, 1, 4, 1, 1, 8, 3, 6, 10, 8, 4, 6, 2, 7, 2 , 10, 7, 5, 4, 3, 1, 10],
            "duración": "PT116M",
            "lanzamiento": "1999-01-22",
            "originalTitle": "La vida \u00e8 bella",
            "storyline": "En la Italia de la década de 1930, un librero judío despreocupado llamado Guido comienza una vida de cuento de hadas cortejando y casándose con una mujer encantadora de una ciudad cercana. Guido y su esposa tienen un hijo y viven felices juntos hasta la ocupación de Italia por Fuerzas alemanas. En un intento por mantener unida a su familia y ayudar a su hijo a sobrevivir los horrores de un campo de concentración judío, Guido imagina que el Holocausto es un juego y que el gran premio por ganar es un tanque. Escrito por\nAnthony Hughes <husnock31 @hotmail.com>",
            "actores": [
                "Roberto Benigni",
                "Nicoletta Braschi",
                "Giorgio Cantarini"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg"
        },
        {
            "título": "L\u00e9on",
            "año": "1994",
            "géneros": [
                "Delito",
                "Drama",
                "Suspenso"
            ],
            "puntuaciones": [2, 7, 5, 9, 7, 10, 5, 2, 7, 6, 10, 2, 6, 4, 1, 1, 7, 8, 1, 9, 7, 2, 10 , 4, 7, 9, 5, 6, 2, 8],
            "duración": "PT110M",
            "lanzamiento": "1995-02-24",
            "titulo original": "",
            "storyline": "Después de que su padre, su madre, su hermana mayor y su hermano pequeño fueran asesinados por los empleadores de su padre, la hija de 12 años de un abyecto traficante de drogas se ve obligada a refugiarse en el apartamento de un sicario profesional que a su solicitud le enseña los métodos de su trabajo para que pueda vengarse del agente corrupto de la DEA que arruinó su vida al matar a su amado hermano. Escrito por\nJ. S. Golden",
            "actores": [
                "Jean Reno",
                "Viejo Gary",
                "Natalie Portman"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjdjMGU3MGYtN2Y5ZC00MTE4LWE4YWQtMTBhMjc3MTk0ZDUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX332_AL_.jpg"
        },
        {
            "título": "R\u00e4dda menige Ryan",
            "año": "1998",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [9, 7, 9, 3, 1, 7, 7, 9, 8, 3, 8, 3, 3, 10, 4, 5, 8, 8, 10, 7, 5, 3, 2 , 5, 6, 5, 9, 6, 10, 6],
            "duración": "PT169M",
            "lanzamiento": "1998-10-09",
            "originalTitle": "Salvando al soldado Ryan",
            "argumento": "Iniciando con la invasión aliada de Normandía el 6 de junio de 1944, los miembros del 2.º batallón de guardabosques al mando del capitán Miller luchan en tierra para asegurar una cabeza de playa. En medio de la lucha, dos hermanos mueren en acción. Anteriormente en Nueva Guinea, un tercer hermano es KIA. Su madre, la Sra. Ryan, recibirá los tres telegramas graves el mismo día. El Jefe de Estado Mayor del Ejército de los Estados Unidos, George C. Marshall, tiene la oportunidad de aliviar parte de su dolor. cuando se entera de la existencia de un cuarto hermano, el soldado James Ryan, y decide enviar a 8 hombres (Capitán Miller y miembros selectos del 2.° Rangers) para encontrarlo y llevarlo de vuelta a casa con su madre... Escrito por\nJ.Zelman ",
            "actores": [
                "Tom Hanks",
                "Matt Damon",
                "Tom Sizemore"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_ AL_.jpg"
        },
        {
            "título": "Armónica - En h\u00e4mnare",
            "año": "1968",
            "géneros": [
                "Occidental"
            ],
            "puntuaciones": [8, 4, 9, 3, 5, 7, 1, 4, 2, 7, 5, 7, 3, 9, 6, 1, 9, 10, 6, 6, 8, 10, 6 , 3, 4, 4, 1, 5, 3, 10],
            "duración": "PT175M",
            "lanzamiento": "1969-08-04",
            "originalTitle": "C'era una volta il West",
            "storyline": "La historia de una mujer joven, la Sra. McBain, que se muda de Nueva Orleans a la frontera de Utah, en el límite del oeste de Estados Unidos. Llega y descubre que su nuevo esposo y su familia fueron masacrados, pero ¿a manos de quién? El sospechoso Cheyenne, amante del café, se hace amigo de ella y se ofrece a perseguir al verdadero asesino, el líder de la banda de asesinos Frank, en su honor. Está acompañado por Harmonica, un hombre que ya está en una búsqueda para vengarse. Escrito por\nDrGoodBeat / editado por statmanjeff",
            "actores": [
                "Henry Fonda",
                "Charles Bronson",
                "Claudia Cardinale"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjFiOTlmMzgtOGZlYi00NjY0LThmMzEtNmQ0OTgxNGViOTZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,329,500_AL _.jpg"
        },
        {
            "título": "Historia Americana X",
            "año": "1998",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [10, 4, 10, 1, 10, 6, 5, 5, 3, 1, 3, 1, 9, 5, 3, 9, 7, 8, 5, 9, 6, 8, 1 , 4, 3, 3, 10, 9, 1, 7],
            "duración": "PT119M",
            "lanzamiento": "26-02-1999",
            "titulo original": "",
            "argumento": "Derek Vineyard está en libertad condicional después de cumplir 3 años de prisión por matar brutalmente a dos hombres negros que intentaron entrar/robar su camión. A través de la narración de su hermano, Danny Vineyard, nos enteramos de que antes de ir a prisión, Derek era un cabeza rapada y líder de una violenta pandilla de supremacistas blancos que cometió actos de crímenes raciales en todo Los Ángeles y sus acciones influyeron mucho en Danny. Reformado y recién salido de prisión, Derek corta el contacto con la pandilla y está decidido a evitar que Danny caiga en la misma situación violenta. como lo hizo. Escrito por\nNitesh D.(nmxpa7@msn.com)",
            "actores": [
                "Edward Norton",
                "Edward Furlong",
                "Beverly D'Angelo"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2E2MWU5ZDktOTQ0OS00NGIzLTg4YTgtYjFhNTRlMjA1NzFjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_SX340 _AL_.jpg"
        },
        {
            "título": "Interestelar",
            "año": 2014,
            "géneros": [
                "Aventura",
                "Drama",
                "Ciencia ficción"
            ],
            "puntuaciones": [7, 9, 10, 9, 2, 10, 10, 3, 9, 4, 1, 7, 9, 8, 4, 6, 7, 6, 7, 9, 9, 4, 6 , 8, 2, 8, 3, 10, 2, 5],
            "duración": "PT169M",
            "lanzamiento": "2014-11-07",
            "titulo original": "",
            "storyline": "El futuro de la Tierra ha estado plagado de desastres, hambrunas y sequías. Solo hay una forma de garantizar la supervivencia de la humanidad: los viajes interestelares. Un agujero de gusano recién descubierto en los confines de nuestro sistema solar permite que un equipo de astronautas viaje donde ningún hombre ha ido antes, un planeta que puede tener el entorno adecuado para sustentar la vida humana",
            "actores": [
                "Matthew McConaughey",
                "Anne Hathaway",
                "Jessica Chastain"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg"
        },
        {
            "título": "Casablanca",
            "año": "1942",
            "géneros": [
                "Drama",
                "Romance",
                "Guerra"
            ],
            "puntuaciones": [2, 10, 7, 10, 9, 1, 10, 2, 10, 6, 6, 5, 9, 1, 10, 2, 6, 9, 7, 3, 5, 6, 7 , 4, 2, 10, 5, 6, 10, 10],
            "duración": "PT102M",
            "lanzamiento": "1943-10-11",
            "titulo original": "",
            "storyline": "En Casablanca durante la Segunda Guerra Mundial, Rick Blaine, un estadounidense exiliado y exluchador por la libertad, dirige el local nocturno más popular de la ciudad. El cínico lobo solitario Blaine se apodera de dos valiosas cartas de tránsito. Cuando llega el comandante nazi Strasser En Casablanca, el adulador Capitán Renault de la policía hace lo que puede para complacerlo, incluida la detención de un líder clandestino checoslovaco, Víctor Laszlo. contra él en París, pero cuando se entera de que ella tenía una buena razón para hacerlo, planean fugarse juntos de nuevo usando las letras de tránsito. Bueno, ese era su plan original... Escrito por\nGary Jackson <garyjack5@cogeco.ca >",
            "actores": [
                "Humphrey Bogart",
                "Ingrid Bergman",
                "Paul Henreid"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg"
        },
        {
            "título": "Psicópata",
            "año": "1960",
            "géneros": [
                "Horror",
                "Misterio",
                "Suspenso"
            ],
            "puntuaciones": [1, 6, 3, 4, 9, 5, 7, 1, 4, 7, 10, 4, 3, 9, 5, 2, 2, 7, 2, 8, 8, 10, 10 , 4, 3, 5, 8, 5, 1, 1],
            "duración": "PT109M",
            "releaseDate": "1960-10-31",
            "titulo original": "",
            "storyline": "La oficinista de Phoenix, Marion Crane, está harta de la forma en que la vida la ha tratado. Tiene que encontrarse con su amante Sam en la hora del almuerzo y no pueden casarse porque Sam tiene que dar la mayor parte de su dinero en pensión alimenticia. Un viernes Su empleador confía en Marion para depositar $ 40,000. Al ver la oportunidad de tomar el dinero y comenzar una nueva vida, Marion deja la ciudad y se dirige a la tienda de Sam's en California. Cansada después del largo viaje y atrapada en una tormenta, se sale de la carretera principal. y se detiene en The Bates Motel. El motel es administrado por un joven tranquilo llamado Norman que parece estar dominado por su madre. Escrito por\nCoronel Needham <col@imdb.com>",
            "actores": [
                "Anthony Perkins",
                "Janet Leigh",
                "Vera Millas"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,331,500_AL _.jpg"
        },
        {
            "título": "Estadios ljus",
            "año": "1931",
            "géneros": [
                "Comedia",
                "Drama",
                "Romance"
            ],
            "puntuaciones": [1, 5, 5, 10, 4, 10, 6, 6, 4, 5, 7, 1, 6, 3, 3, 9, 10, 2, 7, 9, 3, 3, 4 , 5, 1, 4, 8, 7, 10, 6],
            "duración": "PT87M",
            "lanzamiento": "1931-04-20",
            "originalTitle": "Luces de la ciudad",
            "storyline": "Un vagabundo se enamora de una hermosa niña ciega. Su familia tiene problemas económicos. La amistad intermitente del vagabundo con un hombre rico le permite ser el benefactor y pretendiente de la niña. Escrito por\nJohn J .Magee <magee@helix.mgh.harvard.edu>",
            "actores": [
                "Carlos Chaplin",
                "Virginia Cherrill",
                "Florencia Lee"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRjMmI3ZjgtMGE3Mi00NjY5LTg0NWMtMmU3YzgyMjhmMjIzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_CR0,0, 330,500_AL_.jpg"
        },
        {
            "título": "Den gr\u00f6na milen",
            "año": "1999",
            "géneros": [
                "Delito",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [3, 3, 5, 2, 3, 4, 7, 6, 7, 1, 10, 10, 9, 8, 9, 4, 5, 8, 1, 9, 3, 2, 8 , 8, 6, 9, 7, 10, 4, 2],
            "duración": "PT189M",
            "lanzamiento": "2000-02-11",
            "originalTitle": "La Milla Verde",
            "storyline": "Los guardias del corredor de la muerte en una penitenciaría, en la década de 1930, tienen un dilema moral con su trabajo cuando descubren que uno de sus prisioneros, un asesino convicto, tiene un don especial. Escrito por\nGuy Johns",
            "actores": [
                "Tom Hanks",
                "Michael Clarke Duncan",
                "David Morse"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg"
        },
        {
            "título": "En ov\u00e4ntad v\u00e4nskap",
            "año": "2011",
            "géneros": [
                "Biografía",
                "Comedia",
                "Drama"
            ],
            "puntuaciones": [4, 6, 6, 10, 2, 7, 7, 3, 6, 7, 4, 10, 7, 4, 2, 4, 5, 4, 1, 9, 4, 3, 9 , 10, 1, 9, 7, 3, 5, 8],
            "duración": "PT112M",
            "lanzamiento": "2012-09-21",
            "originalTitle": "Intocables",
            "storyline": "En París, el aristocrático e intelectual Philippe es un millonario tetrapléjico que está entrevistando candidatos para el puesto de su cuidador, con su secretaria pelirroja Magalie. De la nada, el rudo africano Driss corta la fila de candidatos y trae un documento de la Seguridad Social y le pide a Phillipe que lo firme para demostrar que está buscando un puesto de trabajo para poder recibir su prestación por desempleo. Philippe desafía a Driss, ofreciéndole un período de prueba de un mes para ganar experiencia ayudándolo. Entonces Driss puede decidir si quiere quedarse con él o no. Driss acepta el desafío y se muda a la mansión, cambiando la aburrida vida de Phillipe y sus empleados. Escrito por\nClaudio Carvalho, Río de Janeiro, Brasil",
            "actores": [
                "Fran\u00e7ois Cluzet",
                "Omar Si",
                "Anne Le Ny"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Tider de Moderna",
            "año": "1936",
            "géneros": [
                "Comedia",
                "Drama",
                "Familia"
            ],
            "puntuaciones": [8, 2, 6, 5, 9, 8, 4, 2, 3, 8, 4, 9, 7, 1, 1, 4, 1, 4, 6, 4, 9, 5, 3 , 1, 1, 2, 8, 7, 1, 2],
            "duración": "PT87M",
            "lanzamiento": "1936-04-16",
            "originalTitle": "Tiempos modernos",
            "storyline": "La última película 'muda' de Chaplin, llena de efectos de sonido, se hizo cuando todos los demás hacían cine sonoro. Charlie se vuelve contra la sociedad moderna, la era de las máquinas (¿el uso del sonido en las películas?) y el progreso. En primer lugar, nosotros véalo tratando frenéticamente de mantenerse al día con una línea de producción, ajustando los pernos. Lo seleccionan para un experimento con una máquina de alimentación automática, pero varios percances llevan a su jefe a creer que se ha vuelto loco, y Charlie es enviado a un hospital psiquiátrico. . Cuando sale, lo confunden con un comunista mientras ondea una bandera roja, lo envían a la cárcel, frustran una fuga y lo dejan salir nuevamente. Seguimos a Charlie a través de muchas aventuras más antes de que se estrene la película. Escrito por\nColin Tinto <cst@imdb.com>",
            "actores": [
                "Carlos Chaplin",
                "Paullette Goddard",
                "Henry Bergmann"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY4 50_SX289_AL_.jpg"
        },
        {
            "título": "Cinema Paradiso",
            "año": "1988",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [5, 2, 2, 8, 1, 8, 3, 4, 3, 6, 8, 7, 2, 1, 8, 8, 6, 5, 9, 4, 4, 3, 6 , 1, 7, 7, 1, 4, 1, 6],
            "duración": "PT155M",
            "lanzamiento": "1990-01-19",
            "originalTitle": "Nuevo Cinema Paradiso",
            "argumento": "Un famoso director de cine recuerda su infancia en Cinema Paradiso, donde Alfredo, el proyeccionista, despertó por primera vez su amor por el cine. Regresa a su pueblo siciliano por primera vez después de casi 30 años y recuerda su primer amor, Elena, que desapareció de su vida antes de irse a Roma. Escrito por\nGraeme Roy <gsr@cbmamiga.demon.co.uk>",
            "actores": [
                "Philippe Noiret",
                "Enzo Cannavale",
                "Antonella Atili"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMTgzOTEwOF5BMl5BanBnXkFtZTgwNTUxNjcxMTE@._V1_SY249_CR0,0,168,249_AL_.jpg"
        },
        {
            "título": "De andras liv",
            "año": "2006",
            "géneros": [
                "Drama",
                "Suspenso"
            ],
            "puntuaciones": [10, 2, 1, 3, 7, 6, 3, 8, 9, 9, 1, 2, 1, 4, 3, 2, 2, 8, 8, 6, 3, 7, 4 , 9, 9, 9, 10, 1, 2, 2],
            "duración": "PT137M",
            "lanzamiento": "2006-11-10",
            "originalTitle": "Das Leben der Anderen",
            "almacenamientoyline": "Gerd Wiesler es un oficial de la Stasi, la policía secreta de Alemania Oriental. La película comienza en 1984 cuando Wiesler asiste a una obra de teatro escrita por Georg Dreyman, quien es considerado por muchos como el máximo ejemplo del ciudadano leal. Wiesler tiene el presentimiento de que Dreyman no puede ser tan ideal como parece y cree que se requiere vigilancia. El Ministro de Cultura está de acuerdo, pero solo más tarde Wiesler se entera de que el Ministro ve a Dreyman como un rival y desea a su compañera Christa-Maria. Cuanto más tiempo pasa escuchándolos, más se preocupa por ellos. El otrora rígido oficial de la Stasi comienza a intervenir en sus vidas, de manera positiva, protegiéndolos siempre que sea posible. Eventualmente, las actividades de Wiesler lo alcanzan y, aunque no hay pruebas de irregularidades, se encuentra en trabajos de baja categoría, hasta que sucede lo increíble. Escrito por\ngarykmcd",
            "actores": [
                "Ulrich M\u00fche",
                "Martina Gedeck",
                "Sebastián Koch"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX225_CR0,0,225,337_AL_.jpg"
        },
        {
            "título": "Eldflugornas grav",
            "año": "1988",
            "géneros": [
                "Animación",
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [7, 1, 5, 7, 3, 2, 8, 9, 2, 1, 8, 1, 9, 8, 8, 8, 5, 2, 1, 2, 4, 10, 3 , 10, 9, 2, 4, 10, 5, 4],
            "duración": "PT89M",
            "lanzamiento": "1988-04-16",
            "originalTitle": "Hotaru no haka",
            "storyline": "La historia de Seita y Satsuko, dos jóvenes hermanos japoneses, que viven en los últimos días de la Segunda Guerra Mundial. Cuando un bombardeo estadounidense separa a los dos niños de sus padres, los dos hermanos deben confiar completamente el uno en el otro mientras luchar para luchar por su supervivencia. Escrito por\nKyle Perez",
            "actores": [
                "Tsutomu Tatsumi",
                "Ayano Shiraishi",
                "Akemi Yamaguchi"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,50 0_AL_.jpg"
        },
        {
            "título": "\u00c4rans v\u00e4g",
            "año": "1957",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [5, 10, 5, 7, 6, 8, 7, 7, 4, 9, 8, 6, 8, 9, 9, 4, 7, 10, 7, 10, 10, 3, 10 , 2, 6, 10, 9, 4, 10, 8],
            "duración": "PT88M",
            "lanzamiento": "1958-05-08",
            "originalTitle": "Senderos de Gloria",
            "storyline": "La inutilidad y la ironía de la guerra en las trincheras en la Primera Guerra Mundial se muestra cuando un comandante de unidad en el ejército francés debe lidiar con el motín de sus hombres y un general que busca la gloria después de que parte de su fuerza cae bajo fuego en un ataque imposible. Escrito por\nKeith Loh <loh@sfu.ca>",
            "actores": [
                "Kirk Douglas",
                "Ralph Meeker",
                "Adolfo Menjou"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326, 500_AL_.jpg"
        },
        {
            "título": "Django desencadenado",
            "año":2012,
            "géneros": [
                "Drama",
                "Occidental"
            ],
            "puntuaciones": [8, 4, 8, 6, 9, 10, 10, 6, 2, 8, 2, 10, 9, 7, 6, 5, 9, 5, 2, 9, 3, 9, 6 , 1, 1, 7, 4, 2, 10, 10],
            "duración": "PT165M",
            "lanzamiento": "2013-01-18",
            "titulo original": "",
            "argumento": "Un dentista alemán compra la libertad de un esclavo y lo entrena con la intención de convertirlo en su cazarrecompensas adjunto. En cambio, lo llevan al sitio de la esposa del esclavo que pertenece al despiadado propietario de una plantación. Escrito por \nBenLobel",
            "actores": [
                "Jamie Foxx",
                "Christoph Vals",
                "Leonardo Di Caprio"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "El Resplandor",
            "año": "1980",
            "géneros": [
                "Drama",
                "Horror"
            ],
            "puntuaciones": [1, 6, 8, 4, 6, 4, 8, 2, 7, 4, 5, 9, 9, 1, 10, 3, 2, 4, 8, 2, 9, 8, 3 , 9, 10, 3, 7, 5, 5, 9],
            "duración": "PT146M",
            "lanzamiento": "1980-09-26",
            "titulo original": "",
            "storyline": "Al firmar un contrato, Jack Torrance, un escritor normal y ex maestro, acepta hacerse cargo de un hotel que tiene un pasado largo y violento que pone a todos en el hotel en una situación nerviosa. Mientras que Jack se vuelve cada vez más violento y enojado por su vida, su hijo, Danny, intenta usar un talento especial, el \"Resplandor\", para informar a la gente de afuera sobre lo que está pasando en el hotel. Escrito por\nJ. S. Golden",
            "actores": [
                "Jack Nicholson",
                "Shelley Duvall",
                "Danny Lloyd"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,4 76_AL_.jpg"
        },
        {
            "título": "La La Land",
            "año": "2016",
            "géneros": [
                "Comedia",
                "Drama",
                "Musical"
            ],
            "puntuaciones": [1, 1, 4, 8, 9, 5, 9, 8, 2, 3, 3, 10, 2, 6, 9, 1, 5, 9, 7, 9, 1, 5, 1 , 9, 5, 2, 2, 3, 1, 1],
            "duración": "PT128M",
            "lanzamiento": "2017-01-27",
            "titulo original": "",
            "argumento": "Mia, una aspirante a actriz, sirve café con leche a las estrellas de cine entre audiciones y Sebastian, un músico de jazz, se las arregla tocando en cócteles en bares lúgubres, pero a medida que aumenta el éxito, se enfrentan a decisiones que comienzan a deshilachar el el frágil tejido de su historia de amor, y los sueños que tanto trabajaron para mantener el uno en el otro amenazan con desgarrarlos. Escrito por\nEirini",
            "actores": [
                "Ryan Gosling",
                "Emma Stone",
                "Rosemarie DeWitt"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "title": "Réquiem por un sueño",
            "año": "2000",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [7, 4, 5, 7, 5, 10, 9, 8, 6, 10, 9, 2, 4, 6, 3, 5, 5, 1, 3, 3, 7, 10, 5 , 2, 3, 2, 4, 8, 5, 7],
            "duración": "PT102M",
            "lanzamiento": "2001-09-14",
            "titulo original": "",
            "storyline": "Sara Goldfarb (Ellen Burstyn) es una viuda jubilada que vive en un apartamento pequeño. Pasa la mayor parte de su tiempo viendo televisión, especialmente un programa de autoayuda en particular. Tiene delirios de superar su aburrida existencia actual ser un invitado en ese programa. Su hijo, Harry (Jared Leto) es un adicto, pero junto con su amigo Tyrone (Marlon Wayans) tiene visiones de triunfar convirtiéndose en traficante de drogas. La novia de Harry, Marion (Jennifer Connelly), podría ser moda diseñadora o artista, pero se ve arrastrada por el mundo centrado en las drogas de Harry. Mientras tanto, Sara ha desarrollado su propia adicción. Quiere perder peso desesperadamente, por lo que se embarca en un curso acelerado de píldoras, píldoras que resultan ser muy adictivas y perjudicial para su estado mental. Escrito por\ngrantss",
            "actores": [
                "Ellen Burstyn",
                "Jared Leto",
                "Jennifer Connelly"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,50 0_AL_.jpg"
        },
        {
            "título": "La naranja mecánica",
            "año": "1971",
            "géneros": [
                "Delito",
                "Drama",
                "Ciencia ficción"
            ],
            "puntuaciones": [4, 7, 2, 6, 4, 3, 8, 3, 8, 5, 2, 10, 10, 6, 6, 10, 6, 2, 7, 1, 5, 7, 4 , 10, 9, 8, 8, 4, 5, 10],
            "duración": "PT136M",
            "lanzamiento": "26-04-1972",
            "originalTitle": "La naranja mecánica",
            "storyline": "El protagonista Alex DeLarge es un joven \"ultraviolento\" en la Gran Bretaña futurista. Como con toda suerte, finalmente se le acaba y es arrestado y condenado por asesinato y violación. Mientras está en prisión, Alex se entera de un programa experimental en qué convictos están programados para detestar la violencia. Si pasa por el programa, su sentencia se reducirá y volverá a las calles antes de lo esperado. Pero las pruebas de Alex están lejos de terminar una vez que llega a las calles de Gran Bretaña que había tenido. una mano en la creación. Escrito por\nNikki Carlyle",
            "actores": [
                "Malcom McDowell",
                "Patrick Magee",
                "Michael Bates"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Lawrence av Arabien",
            "año": "1962",
            "géneros": [
                "Aventura",
                "Biografía",
                "Drama"
            ],
            "puntuaciones": [3, 4, 2, 5, 5, 8, 6, 9, 6, 1, 5, 5, 1, 5, 8, 8, 1, 4, 7, 9, 5, 10, 6 , 6, 10, 4, 3, 8, 5, 6],
            "duración": "PT216M",
            "lanzamiento": "1963-03-22",
            "originalTitle": "Lorenzo de Arabia",
            "argumento": "Debido a su conocimiento de las tribus beduinas nativas, el teniente británico TE Lawrence es enviado a Arabia para encontrar al Príncipe Faisal y servir como enlace entre los árabes y los británicos en su lucha contra los turcos. Con la ayuda de nativos Sherif Ali, Lawrence se rebela contra las órdenes de su oficial superior y emprende un audaz viaje en camello por el duro desierto para atacar un puerto turco bien protegido. Escrito por\nJwelch5742",
            "actores": [
                "Peter O'Toole",
                "Alec Guiness",
                "Anthony Quinn"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346 ,500_AL_.jpg"
        },
        {
            "título": "Kvinna utan samvete",
            "año": "1944",
            "géneros": [
                "Delito",
                "Drama",
                "Cine negro"
            ],
            "puntuaciones": [1, 8, 9, 1, 7, 3, 4, 10, 9, 9, 7, 6, 2, 8, 1, 7, 10, 10, 4, 4, 7, 1, 10 , 7, 2, 9, 7, 9, 8, 7],
            "duración": "PT107M",
            "lanzamiento": "1944-11-27",
            "originalTitle": "Doble Indemnización",
            "storyline": "En 1938, Walter Neff, un vendedor experimentado de Pacific All Risk Insurance Co., conoce a la seductora esposa de uno de sus clientes, Phyllis Dietrichson, y tienen una aventura. Phyllis propone matar a su marido para recibir el producto de una póliza de seguro de accidentes y Walter diseña un plan para recibir el doble de la cantidad basada en una cláusula de doble indemnización. Cuando el Sr. Dietrichson es encontrado muerto en una vía de tren, la policía acepta la determinación de muerte accidental. Sin embargo, el analista de seguros y el mejor amigo de Walter, Barton Keyes, no cree en la historia y sospecha que Phyllis ha asesinado a su esposo con la ayuda de otro hombre. Escrito por\nClaudio Carvalho, Río de Janeiro, Brasil",
            "actores": [
                "Fred MacMurray",
                "Bárbara Stanwyck",
                "Edward G. Robinson"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmRmYmZkZTktZDc5ZC00ZjZmLTg4NWMtYjM3MjcyNTVjNGQ5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_ SY500_CR0,0,332,500_AL_.jpg"
        },
        {
            "title": "Eterno resplandor de una mente sin recuerdos",
            "año": "2004",
            "géneros": [
                "Drama",
                "Romance",
                "Ciencia ficción"
            ],
            "puntuaciones": [2, 2, 2, 4, 1, 1, 3, 7, 1, 2, 5, 1, 5, 3, 3, 1, 3, 8, 2, 10, 10, 9, 4 , 3, 5, 9, 1, 2, 10, 3],
            "duración": "PT108M",
            "lanzamiento": "2004-08-20",
            "titulo original": "",
            "storyline": "Un hombre, Joel Barish, con el corazón roto porque su novia Clementine se sometió a un procedimiento para borrarlo de su memoria, decide hacer lo mismo. Sin embargo, mientras ve cómo se desvanecen sus recuerdos de ella, se da cuenta de que todavía ama ella, y puede ser demasiado tarde para corregir su error. Escrito por\nanónimo",
            "actores": [
                "Jim Carrey",
                "Kate Winslet",
                "Tom Wilkinson"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Skuggor \u00f6ver s\u00f6dern",
            "año": "1962",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [7, 10, 10, 3, 9, 10, 5, 1, 3, 2, 10, 3, 2, 10, 1, 3, 8, 3, 5, 2, 7, 7, 10 , 9, 9, 3, 6, 1, 3, 2],
            "duración": "PT129M",
            "lanzamiento": "1964-03-02",
            "originalTitle": "Matar a un ruiseñor",
            "argumento": "Un pequeño pueblo de Alabama, 1932. Atticus Finch (interpretado por Gregory Peck) es abogado y viudo. Tiene dos hijos pequeños, Jem y Scout. Atticus Finch actualmente defiende a Tom Robinson, un hombre negro acusado de violando a una mujer blanca. Mientras tanto, Jem y Scout están intrigados por sus vecinos, los Radley, y el misterioso, raramente visto, Boo Radley en particular. Escrito por Grantss",
            "actores": [
                "Gregorio Peck",
                "Juan Megna",
                "Franco Overton"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SY250_SX164_AL_.jpg"
        },
        {
            "título": "Amadeus",
            "año": "1984",
            "géneros": [
                "Biografía",
                "Drama",
                "Historia"
            ],
            "puntuaciones": [1, 2, 7, 7, 3, 6, 1, 1, 9, 10, 1, 4, 8, 8, 9, 8, 1, 6, 8, 5, 5, 5, 10 , 5, 5, 8, 8, 3, 3, 4],
            "duración": "PT160M",
            "lanzamiento": "1984-10-12",
            "titulo original": "",
            "storyline": "Antonio Salieri cree que la música de Wolfgang Amadeus Mozart es divina y milagrosa. Él desearía ser tan buen músico como Mozart para poder alabar al Señor a través de la composición. Comenzó su carrera como un hombre devoto que cree que su el éxito y el talento como compositor son las recompensas de Dios por su piedad. También está contento como el respetado compositor de la corte del emperador austríaco José II, económicamente acomodado. Pero se sorprende al saber que Mozart es una criatura tan vulgar y no puede entender por qué Dios favoreció a Mozart para que fuera su instrumento. La envidia de Salieri lo ha convertido en enemigo de Dios cuya grandeza era evidente en Mozart. Él está listo para vengarse de Dios y de Mozart por su propia mediocridad musical. Escrito por\nKhaled Salem",
            "actores": [
                "F. Murray Abraham",
                "Tom Hulce",
                "Elizabeth Berridge"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg"
        },
        {
            "título": "Toy Story 3",
            "año": "2010",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [10, 5, 5, 1, 10, 10, 8, 3, 4, 6, 7, 4, 5, 7, 10, 2, 9, 2, 4, 7, 1, 1, 3 , 9, 3, 3, 2, 5, 1, 5],
            "duración": "PT103M",
            "lanzamiento": "2010-08-27",
            "titulo original": "",
            "storyline": "Woody, Buzz y toda la pandilla están de regreso. Mientras su dueño, Andy, se prepara para irse a la universidad, sus juguetes leales se encuentran en una guardería donde los niños indómitos con sus pequeños dedos pegajosos no juegan bien. Entonces, es todo por uno para todos mientras se unen a la contraparte de Barbie, Ken, un erizo actor llamado Mr. Pricklepants y un oso de peluche rosa con aroma a fresa llamado Lots-o'-Huggin' Bear para planear su gran escape. Escrito por\nWalt Disney Studios" ,
            "actores": [
                "Tom Hanks",
                "Tim Allen",
                "Joan Cusack"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg"
        },
        {
            "título": "Chaqueta metálica completa",
            "año": "1987",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [9, 9, 7, 1, 4, 9, 3, 6, 3, 3, 7, 8, 5, 10, 7, 3, 2, 5, 6, 2, 8, 7, 7 , 5, 10, 7, 10, 3, 3, 2],
            "duración": "PT116M",
            "lanzamiento": "1987-10-02",
            "titulo original": "",
            "argumento": "Una mirada de dos segmentos al efecto de la mentalidad militar y la guerra misma en los marines de la era de Vietnam. La primera mitad sigue a un grupo de reclutas en un campo de entrenamiento bajo el mando del sargento de artillería Hartman. La segunda mitad muestra uno de esos reclutas, Joker, cubriendo la guerra como corresponsal de Stars and Stripes, centrándose en la ofensiva Tet. Escrito por\nScott Renshaw <as.idc@forsythe.stanford.edu>",
            "actores": [
                "Mateo Modine",
                "R. Lee Ermey",
                "Vicent D'Onofrio"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,5 00_AL_.jpg"
        },
        {
            "título": "Dangal",
            "año": "2016",
            "géneros": [
                "Acción",
                "Biografía",
                "Drama"
            ],
            "puntuaciones": [3, 9, 6, 8, 2, 4, 5, 1, 9, 6, 1, 3, 2, 1, 10, 4, 4, 2, 5, 9, 6, 5, 10 , 8, 8, 1, 7, 10, 9, 1],
            "duración": "PT161M",
            "lanzamiento": "2016-12-23",
            "titulo original": "",
            "argumento": "Película biográfica de Mahavir Singh Phogat, quien enseñó lucha libre a sus hijas Babita Kumari y Geeta Phogat. Geeta Phogat fue la primera luchadora de la India en ganar en los Juegos de la Commonwealth de 2010, donde ganó la medalla de oro (55 kg) mientras su la hermana Babita Kumari ganó la plata (52 kg). Escrito por\nDibyayan_Chakravorty",
            "actores": [
                "Aamir Khan",
                "Sakshi Tanwar",
                "Fátima Sana Shaikh"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg"
        },
        {
            "título": "Bl\u00e5sningen",
            "año": "1973",
            "géneros": [
                "Comedia",
                "Delito",
                "Drama"
            ],
            "puntuaciones": [2, 1, 9, 3, 9, 9, 5, 1, 1, 9, 5, 1, 2, 9, 10, 1, 8, 5, 1, 2, 9, 10, 4 , 4, 5, 4, 5, 6, 1, 5],
            "duración": "PT129M",
            "lanzamiento": "25-02-1974",
            "originalTitle": "El aguijón",
            "storyline": "Cuando un amigo en común es asesinado por un jefe de la mafia, dos estafadores, uno experimentado y otro joven, intentan vengarse realizando la gran estafa contra el jefe de la mafia. La historia se desarrolla con varios giros y alteraciones de última hora. Escrito por\nJohn Vogel <jlvogel@comcast.net>",
            "actores": [
                "Paul Newman",
                "Roberto Redford",
                "Roberto Shaw"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MjM1OTAyOV5BMl5BanBnXkFtZTgwMDkwODg4MDE@._V1._CR52,57,915,1388_SY500_CR0,0,329,500_AL_.jpg"
        },
        {
            "título": "\u00c5r 2001 - Ett rymd\u00e4ventyr",
            "año": "1968",
            "géneros": [
                "Aventura",
                "Ciencia ficción"
            ],
            "puntuaciones": [8, 5, 10, 2, 8, 1, 1, 1, 2, 3, 5, 2, 5, 2, 5, 7, 7, 1, 6, 4, 9, 4, 9 , 1, 3, 4, 4, 5, 9, 9],
            "duración": "PT149M",
            "lanzamiento": "27-08-1968",
            "originalTitle": "2001: Una odisea del espacio",
            "storyline": "\"2001\" es una historia de evolución. En algún momento del pasado lejano, alguien o algo empujó la evolución al colocar un monolito en la Tierra (presumiblemente también en otras partes del universo). La evolución permitió entonces a la humanidad llegar a la superficie de la luna, donde se encuentra otro monolito, uno que indica a los placeres de monolitos que la humanidad ha evolucionado tanto. Ahora comienza una carrera entre computadoras (HAL) y humanos (Bowman) para llegar a los placeres de monolitos. El ganador logrará el siguiente paso. en evolución, sea lo que sea. Escrito por\nLarry Cousins",
            "actores": [
                "Keir Dullea",
                "Gary Lockwood",
                "Guillermo Silvestre"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_ .jpg"
        },
        {
            "título": "Babam ve Oglum",
            "año": "2005",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [8, 3, 4, 8, 4, 3, 2, 7, 1, 4, 1, 10, 2, 3, 8, 2, 2, 1, 8, 10, 3, 5, 9 , 2, 5, 1, 1, 7, 7, 7],
            "duración": "PT108M",
            "lanzamiento": "2005-11-18",
            "titulo original": "",
            "storyline": "Sadik es uno de los jóvenes rebeldes que ha sido políticamente activo como estudiante universitario y se convirtió en periodista de izquierda en los años 70, a pesar de las expectativas de su padre de que se convirtiera en ingeniero agrónomo y tomara el control de la granja familiar en un pueblo del Egeo. En la madrugada del 12 de septiembre de 1980, cuando un golpe militar despiadado golpea el país, no pueden encontrar acceso a ningún hospital o un médico y su esposa muere mientras da a luz a su único hijo, Deniz. Después de una larga Después de un largo período de tortura, juicios y tiempo en la cárcel, Sadik regresa a su pueblo con Deniz, de 7 u 8 años, sabiendo que será difícil corregir las cosas con su padre, Huseyin. Escrito por\nAli Riza Bolukbasi",
            "actores": [
                "Fikret Kuskan",
                "\u00c7etin Tekindor",
                "H\u00fcmeyra"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg"
        },
       
        {
            "título": "Historia del juguete",
            "año": "1995",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [10, 8, 5, 3, 4, 2, 8, 3, 3, 7, 3, 9, 5, 7, 5, 5, 8, 7, 1, 3, 4, 3, 4 , 10, 9, 1, 4, 2, 1, 1],
            "duración": "PT81M",
            "lanzamiento": "1996-03-08",
            "titulo original": "",
            "storyline": "A un niño pequeño llamado Andy le encanta estar en su habitación, jugar con sus juguetes, especialmente con su muñeco llamado \"Woody\". Pero, ¿qué hacen los juguetes cuando Andy no está con ellos? Cobran vida. Woody cree que tiene la vida (como un juguete) bien. Sin embargo, debe preocuparse por la mudanza de la familia de Andy, y lo que Woody no sabe es sobre la fiesta de cumpleaños de Andy. Woody no se da cuenta de que la madre de Andy le regaló una figura de acción conocida como Buzz Lightyear, que no cree que sea un juguete, se convierte rápidamente en el nuevo juguete favorito de Andy. Woody, que ahora está consumido por los celos, intenta deshacerse de Buzz. Entonces, tanto Woody como Buzz están perdidos. Deben encontrar una forma de volver a Andy antes de que se mude sin ellos, pero tendrán que pasar por un despiadado asesino de juguetes, Sid Phillips.Escrito por\nJohn Wiggins",
            "actores": [
                "Tom Hanks",
                "Tim Allen",
                "Don Rickles"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg"
        },
        {
            "título": "Cykeltjuven",
            "año": "1948",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [1, 9, 5, 1, 4, 3, 5, 6, 10, 9, 5, 9, 1, 2, 7, 4, 4, 6, 5, 4, 3, 2, 2 , 8, 6, 3, 7, 7, 4, 9],
            "duración": "PT89M",
            "lanzamiento": "27-02-1950",
            "originalTitle": "Ladri di biciclette",
            "storyline": "Ricci, un hombre desempleado en la deprimida economía de Italia posterior a la Segunda Guerra Mundial, finalmente consigue un buen trabajo, para el cual necesita una bicicleta, colgando carteles. Pero pronto le roban la bicicleta. Él y su hijo caminan por las calles de Roma en busca de la bicicleta. Ricci finalmente logra localizar al ladrón pero sin pruebas, tiene que abandonar su causa. Pero él y su hijo saben perfectamente que sin una bicicleta, Ricci no podrá seguir adelante. su trabajo. Escrito por\njolusoma",
            "actores": [
                "Lamberto Maggiorani",
                "Enzo Staiola",
                "Lianella Carrell"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI3NTcwNzEtNDA1MS00ZjE0LThkNDEtMmU4MjVmNTQ1ZDBmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY450_SX312_AL_.jpg"
        },
        {
            "título": "LA konfidentiellt",
            "año": "1997",
            "géneros": [
                "Delito",
                "Drama",
                "Misterio"
            ],
            "puntuaciones": [7, 8, 9, 10, 8, 9, 1, 1, 5, 6, 3, 8, 5, 9, 1, 2, 4, 6, 5, 9, 10, 4, 6 , 2, 3, 9, 10, 1, 1, 2],
            "duración": "PT138M",
            "lanzamiento": "1997-10-17",
            "originalTitle": "LA Confidencial",
            "storyline": "Los Ángeles de la década de 1950 es el sórdido telón de fondo de esta intrincada historia noir-ish de corrupción policial y sordidez de Hollywood. Tres policías muy diferentes buscan la verdad, cada uno con su propio estilo: Ed Exley, el chico dorado de la fuerza policial, dispuesto a hacer casi cualquier cosa para salir adelante, excepto venderse; Bud White, dispuesto a romper las reglas para buscar justicia, pero apenas capaz de mantener bajo control su furiosa violencia; y Jack Vincennes, siempre en busca de la celebridad y una rápida dinero hasta que su conciencia lo lleve a unirse a Exley y White en el camino de un solo sentido para encontrar la verdad detrás del oscuro mundo del crimen de Los Ángeles. Escrito por\nGreg Bole <bole@life.bio.sunysb.edu>",
            "actores": [
                "Kevin Spacey",
                "Russell Crowe",
                "Guy Pearce"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDBlYzAwZDktNzM2MS00YzBlLWI4ODQtZTlkNmMxZDc3NGRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY429_SX290_AL_.jpg"
        },
        {
            "título": "F\u00f6r n\u00e5gra f\u00e5 dollar mer",
            "año": "1965",
            "géneros": [
                "Occidental"
            ],
            "puntuaciones": [8, 9, 9, 5, 2, 4, 3, 6, 7, 1, 3, 9, 5, 2, 6, 5, 5, 8, 2, 2, 3, 7, 10 , 6, 10, 5, 4, 8, 6, 10],
            "duración": "PT132M",
            "lanzamiento": "1966-11-17",
            "originalTitle": "Por qualche dollaro en pi\u00f9",
            "storyline": "Monco es un asesino a sueldo que persigue a El Indio y su pandilla. Durante su cacería, conoce al Coronel Douglas Mortimer, otro asesino a sueldo, y deciden asociarse, perseguir a los malos juntos y dividir la recompensa. Durante su empresa, habrá muchas balas y situaciones divertidas. Al final, uno de los cazarrecompensas muestra la verdadera intención de su caza. Escrito por\nClaudio Carvalho, Río de Janeiro, Brasil",
            "actores": [
                "Clint Eastwood",
                "Lee Van Cleef",
                "Gian María Volont\u00e8"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "Caracortada",
            "año": "1983",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [7, 5, 1, 10, 9, 1, 8, 10, 10, 3, 9, 3, 6, 9, 1, 4, 8, 5, 5, 4, 5, 7, 4 , 8, 5, 6, 5, 6, 6, 3],
            "duración": "PT170M",
            "lanzamiento": "1984-03-23",
            "titulo original": "",
            "storyline": "Tony Montana logra salir de Cuba durante el éxodo del Mariel de 1980. Se encuentra en un campo de refugiados de Florida, pero su amigo Manny tiene una salida para ellos: emprender un asesinato a sueldo y se harán los arreglos para conseguir un verde Pronto estará trabajando para el narcotraficante Frank López y muestra su valor cuando un trato con narcotraficantes colombianos sale mal. También trae un nuevo nivel de violencia a Miami. Tony protege a su hermana menor, pero su madre sabe lo que él hace por ella. Sin embargo, Tony está impaciente y lo quiere todo, incluido el imperio de Frank y su amante Elvira Hancock. Sin embargo, una vez en la cima, las escandalosas acciones de Tony lo convierten en un objetivo y todo se desmorona. Escrito por\ngarykmcd",
            "actores": [
                "Al Pacino",
                "Michelle Pfeiffer",
                "Steven Bauer"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Jakten",
            "año": 2012,
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [6, 2, 4, 1, 10, 5, 2, 9, 10, 4, 9, 8, 4, 4, 5, 7, 3, 7, 10, 6, 9, 7, 6 , 1, 1, 8, 6, 3, 7, 7],
            "duración": "PT115M",
            "lanzamiento": "2013-04-12",
            "originalTitle": "Jagten",
            "storyline": "Lucas es un maestro de jardín de infantes que cuida mucho a sus alumnos. Desafortunadamente para él, la joven Klara tiene una imaginación desbocada e inventa una mentira sobre su maestro. Antes de que Lucas sea capaz de comprender las consecuencias, tiene convertirse en el marginado de la ciudad. La búsqueda está en marcha para demostrar su inocencia antes de que se lo quiten para siempre. Escrito por\nnapierslogs",
            "actores": [
                "Mads Mikkelsen",
                "Thomas Bo Larsen",
                "Annika Wedderkopp"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg"
        },
        {
            "título": "Will Hunting",
            "año": "1997",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [3, 5, 8, 9, 9, 9, 10, 4, 4, 3, 9, 3, 9, 8, 1, 9, 6, 4, 9, 10, 9, 7, 7 , 6, 2, 10, 10, 1, 4, 4],
            "duración": "PT126M",
            "lanzamiento": "1998-03-13",
            "originalTitle": "Buena voluntad de caza",
            "storyline": "Una historia conmovedora de un joven descarriado que lucha por encontrar su identidad, viviendo en un mundo donde puede resolver cualquier problema, excepto el que se está gestando en lo más profundo de sí mismo, hasta que un día conoce a su alma gemela que abre su mente y su corazón. Escrito por\nDima & Danielle",
            "actores": [
                "robin williams",
                "Matt Damon",
                "Ben Affleck"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,50 0_AL_.jpg"
        },
        {
            "título": "Nader och Simin - En separación",
            "año": "2011",
            "géneros": [
                "Drama",
                "Misterio"
            ],
            "puntuaciones": [10, 3, 5, 7, 8, 3, 5, 7, 5, 8, 6, 10, 2, 10, 4, 1, 5, 6, 4, 5, 2, 4, 1 , 2, 9, 3, 3, 8, 4, 6],
            "duración": "PT123M",
            "lanzamiento": "2011-09-30",
            "originalTitle": "Jodaeiye Nader az Simin",
            "storyline": "Nader (Peyman Moaadi) y Simin (Leila Hatami) discuten sobre vivir en el extranjero. Simin prefiere vivir en el extranjero para brindarle mejores oportunidades a su única hija, Termeh. Sin embargo, Nader se niega a ir porque cree que debe quedarse en Irán y cuidar de su padre (Ali-Asghar Shahbazi), que sufre de Alzheimer. Sin embargo, Simin está decidida a divorciarse y dejar el país con su hija. Escrito por\nAmin Davoodi",
            "actores": [
                "Peyman Moadi",
                "Leila Hatami",
                "Sare Bayat"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Indiana Jones y su hermana korst\u00e5get",
            "año": "1989",
            "géneros": [
                "Acción",
                "Aventura",
                "Fantasía"
            ],
            "puntuaciones": [1, 1, 4, 9, 1, 6, 7, 9, 5, 4, 8, 4, 4, 6, 9, 7, 5, 8, 6, 3, 9, 3, 1 , 4, 9, 3, 6, 6, 5, 1],
            "duración": "PT127M",
            "lanzamiento": "1989-09-15",
            "originalTitle": "Indiana Jones y la última cruzada",
            "storyline": "Un coleccionista de arte le pide a Jones que se embarque en la búsqueda del Santo Grial. Se entera de que otro arqueólogo ha desaparecido mientras buscaba el preciado cáliz, y el hombre desaparecido es su propio padre, el Dr. Henry Jones. El El artefacto es mucho más difícil de encontrar de lo que esperaban, y sus poderes son demasiado para aquellos de corazón impuro. Escrito por\nJwelch5742",
            "actores": [
                "Harrison Ford",
                "Sean Connery",
                "Alison Doody"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500 _AL_.jpg"
        },
        {
            "título": "Allt om Eva",
            "año": "1950",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [9, 7, 2, 5, 8, 2, 8, 4, 2, 5, 4, 10, 6, 7, 2, 4, 3, 2, 5, 2, 4, 2, 8 , 9, 10, 2, 4, 3, 5, 3],
            "duración": "PT138M",
            "lanzamiento": "1951-01-15",
            "originalTitle": "Todo sobre Eva",
            "storyline": "Eve (Anne Baxter) está esperando entre bastidores para conocer a su \"ídolo\" envejecida, la estrella de Broadway, Margo Channing (Bette Davis). Todo parece bastante inocente cuando Eve explica que ha visto a Margo en CADA actuación de la la obra actual en la que se encuentra. Solo el crítico de Playright DeWitt (George Sanders) ve a través del malvado plan de Eve, que consiste en tomar sus papeles y su novio, Bill Simpson (Gary Merrill). Cuando el novio no muestra ningún interés, ella intenta convertirse en dramaturga. Hugh Marlowe (Lloyd Richards), pero DeWitt la detiene. Después de aceptar su premio, decide saltarse la fiesta posterior y se va a su habitación, donde encontramos a una joven llamada Phoebe, que se coló en su habitación y se quedó dormida. es donde el \"Círculo de la vida\" ahora llega a buen término, ya que Eve va a ser interpretada de la misma manera que lo hizo con Margo",
            "actores": [
                "Bette Davis",
                "Anne Baxter",
                "George Sanders"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "Yojimbo (Livvakten)",
            "año": "1961",
            "géneros": [
                "Acción",
                "Drama",
                "Suspenso"
            ],
            "puntuaciones": [10, 9, 8, 9, 9, 1, 1, 2, 6, 4, 8, 2, 2, 9, 7, 10, 2, 7, 3, 5, 9, 3, 8 , 6, 6, 3, 2, 10, 1, 3],
            "duración": "PT110M",
            "lanzamiento": "1964-10-28",
            "título original": "Y\u00f4jinb\u00f4",
            "storyline": "Sanjuro, un samurái errante entra en un pueblo rural en el Japón del siglo XIX. Después de enterarse por el posadero de que el pueblo está dividido entre dos gánsteres, enfrenta a uno contra el otro. Sus esfuerzos se ven complicados por la llegada de el astuto Unosuke, el hijo de uno de los gánsteres, que posee un revólver. Unosuke hace que golpeen a Sanjuro después de que reúne a una mujer secuestrada con su esposo e hijo, y luego masacra a los oponentes de su padre. Durante la matanza, el samurái escapa con la ayuda de el posadero; pero mientras se recupera en un templo cercano, se entera del secuestro del posadero por Unosuke, y regresa a la ciudad para enfrentarse a él. Escrito por\nBernard Keane <BKeane2@email.dot.gov.au>",
            "actores": [
                "Toshir\u00f4 Mifune",
                "Eijir\u00f4 T\u00f4no",
                "Tatsuya Nakadai"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,50 0_AL_.jpg"
        },
        {
            "título": "Batman comienza",
            "año": "2005",
            "géneros": [
                "Acción",
                "Aventura"
            ],
            "puntuaciones": [2, 5, 2, 8, 1, 2, 9, 5, 10, 3, 7, 7, 7, 4, 8, 2, 10, 6, 6, 3, 7, 8, 3 , 7, 10, 5, 8, 2, 9, 4],
            "duración": "PT140M",
            "lanzamiento": "2005-07-27",
            "titulo original": "",
            "storyline": "Cuando sus padres son asesinados, el playboy multimillonario Bruce Wayne se muda a Asia, donde Henri Ducard y Ra's Al Ghul lo asesoran sobre cómo luchar contra el mal. Al enterarse del plan para acabar con el mal en Gotham City por Ducard, Bruce evita que este plan avance más y regresa a su casa. De vuelta en su entorno original, Bruce adopta la imagen de un murciélago para infundir miedo a los criminales y corruptos como el ícono conocido como 'Batman'. No me quedaré callado por mucho tiempo. Escrito por\nkonstantinwe",
            "actores": [
                "Christian Bale",
                "Michael Caine",
                "Ken Watanabe"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SY360_CR0,0,242,360_AL_.jpg"
        },
        {
            "título": "Arriba",
            "año": "2009",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [4, 1, 7, 1, 5, 7, 9, 9, 10, 2, 9, 7, 10, 9, 7, 2, 6, 1, 6, 6, 1, 2, 3 , 5, 2, 7, 5, 10, 7, 5],
            "duración": "PT96M",
            "lanzamiento": "2009-10-16",
            "originalTitle": "Arriba",
            "storyline": "Carl Fredricksen cuando era niño quería explorar América del Sur y encontrar las Cataratas del Paraíso prohibidas. Aproximadamente 64 años después, comienza su viaje junto con un Boy Scout llamado Russel con la ayuda de 500 globos. En su viaje descubren muchos nuevos amigos, incluido un perro que habla y Carl y Russel descubren que alguien tiene planes malvados. Carl pronto se da cuenta de que este malhechor es su ídolo de la infancia. ¿Serán capaces de derrotarlo y encontrarán Paradise Falls?",
            "actores": [
                "Eduardo Asner",
                "Jordan Nagai",
                "John Ratzenberger"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY500_CR0,0,332,500_AL_.jpg"
        },
        {
            "título": "Pruebo el laget",
            "año": "1959",
            "géneros": [
                "Comedia",
                "Romance"
            ],
            "puntuaciones": [5, 5, 7, 5, 2, 7, 2, 8, 4, 6, 2, 1, 4, 5, 2, 8, 2, 1, 1, 8, 5, 8, 9 , 8, 4, 4, 10, 7, 6, 2],
            "duración": "PT120M",
            "lanzamiento": "28-09-1959",
            "originalTitle": "A algunos les gusta lo caliente",
            "storyline": "Cuando dos músicos de Chicago, Joe y Jerry, son testigos de la masacre del Día de San Valentín, quieren salir de la ciudad y alejarse del gángster responsable, Spats Colombo. Están desesperados por conseguir un concierto de la ciudad, pero el único trabajo que conocen es en una banda de chicas que se dirige a Florida. Aparecen en la estación de tren como Josephine y Daphne, las bajistas y saxofonistas de reemplazo. Sin duda, disfrutan estar cerca de las chicas, especialmente de Sugar Kane. Kowalczyk, que canta y toca el ukelele. Joe, en particular, se propone cortejarla, mientras que Jerry/Daphne es cortejada por un millonario, Osgood Fielding III. Se produce caos cuando los dos hombres intentan mantener ocultas sus verdaderas identidades y Spats Colombo y su equipo muestran para una reunión con varios otros señores del crimen. Escrito por\ngarykmcd",
            "actores": [
                "Marilyn Monroe",
                "Tony Curtis",
                "Jack Lemmon"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_ .jpg"
        },
        {
            "título": "Sierra Madres skatt",
            "año": "1948",
            "géneros": [
                "Aventura",
                "Drama",
                "Occidental"
            ],
            "puntuaciones": [8, 9, 7, 6, 9, 3, 8, 6, 9, 5, 5, 6, 7, 10, 5, 1, 3, 1, 3, 9, 10, 8, 3 , 7, 9, 7, 3, 7, 5, 9],
            "duración": "PT126M",
            "lanzamiento": "29-04-1948",
            "originalTitle": "El Tesoro de la Sierra Madre",
            "storyline": "Fred C. Dobbs y Bob Curtin, ambos con mala suerte en Tampico, México en 1925, se encuentran con un prospector canoso llamado Howard y deciden unirse a él en busca de oro en las tierras salvajes del centro de México. A través de enormes dificultades, finalmente logran encontrar oro, pero los bandidos, los elementos y, sobre todo, la codicia amenazan con convertir su éxito en un desastre. Escrito por\nJim Beaver <jumblejim@prodigy.net>",
            "actores": [
                "Humphrey Bogart",
                "Walter Houston",
                "Tim Holt"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzUzOTYwOV5BMl5BanBnXkFtZTgwNDA4MzgyMjE@._V1_SY250_SX169_AL_.jpg"
        }
        
    ];
   
    render(){
        return (
            <>  
                <ListaPeliculas peliculas={this.peliculas}/>
                
          </>
            )

    }

}