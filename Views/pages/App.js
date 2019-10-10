import React from 'react';
//import './App.css';

import Navigation from './Components/Navigation';
import Pestana from './Components/Pestana';


function App() {
  return (
    <div className="App">
      <Navigation mainname="Archivo" titulo="Nuevo" titulo2="Guardar" titulo3="Cerrar" />
      <Pestana n_file="archivo.algo" contenido="Contenido..." />

      <style jsx global>{`
    .App {
      text-align: center;
      background: #0F2027;
      background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
      background: linear-gradient(to left, #2C5364, #203A43, #0F2027);
  }
  
  .App-logo {
      height: 40vmin;
  }
  
  .App-header {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
  }
  
  .App-link {
      color: #09d3ac;
  }

  #blockWhite {
    background: #373737;
    width: 175px;
    height: 100px;
    z-index: 3;
    display: block;
    position: absolute;
    margin-left: 15px;

}
    `}</style>
    </div>
  );
}

export default App;
