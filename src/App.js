import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu'
import Pelicula from './componentes/Pelicula'
import Peliculas from './paginas/Peliculas';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Api from './paginas/Api';
import {Routes, Route,BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
  <>  
    <Menu/>
    <div className='col-12'>
      <div className="row my-4 col-12">
        <Router>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Peliculas' element={<Peliculas/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Api' element={<Api/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  </>
  );
}

export default App;
