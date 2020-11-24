import React from 'react';
import './App.css';
import MiValidador from './MiValidador';
import imagen from './index.png';


function validate() {
  return (
    <div className="App">Validat-E™ V2.0
      <header className="App-header">
        <img src={imagen} alt="pic"/>
        <p>Ingrese su rut</p>
        <MiValidador  placeholder="00000000-0" />
      </header>
    </div>
  );
}

export default validate;
