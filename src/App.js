import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Pestana from './Components/Pestana';

function App() {
  return (
    <div className="App">
      <Navigation mainname="Archivo" titulo="Nuevo" titulo2="Guardar" titulo3="Cerrar"/>
      <Pestana n_file="archivo.algo" contenido="Contenido..." />
    </div>
  );
}

export default App;
