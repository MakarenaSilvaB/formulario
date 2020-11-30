import React from 'react';
import './App.css';
import MiValidador from './MiValidador';
import imagen from './images/index.png';


function validate() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagen} alt="pic"/>
        <p>Ingrese su rut</p>
        <MiValidador placeholder="00000000-0" />
      </header>
    </div>
  );
}

export default validate;
