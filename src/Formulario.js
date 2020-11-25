import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import muro from './muro.png';

export const Formulario = () => (
  <div className="App">
    <div className="new-line"><img src={muro} alt="pic" /></div>
    <h1>Registro de Visitas</h1>
    <p>Ejemplo de Formulario con Semantic UI</p>
    <div className="centering">
      <div class="ui form" className="container">
        <div className="new-line">
          <div className="tag"><label>Nickname </label></div>
        </div>
        <div className="new-line">
          <input type="text" placeholder="John Doe" className="field"></input>
        </div>
        <div className="new-line">
          <div className="tag"><label>Curso </label></div>
        </div>
        <div className="new-line">
          <select multiple="" class="ui dropdown" className="field">
            <option value="" disabled selected hidden>Selecciona el que estés cursando...</option>
            <option value="DW">Desarrollo Web</option>
            <option value="ASW">Arquitectura de Software</option>
            <option value="Ambos">Ambos</option>
            <option value="Ninguno">Ninguno</option>
          </select>
        </div>
        <div className="new-line">
          <div className="tag"><label>Mensaje </label></div>
            <textarea rows="5" placeholder="Promociona tu sitio o deja un mensaje de visita" className="field"></textarea>    
        </div>
        <div className="centering">
          <button class="ui button" type="submit" className="btn">Enviar</button> 
        </div> 
      </div>
    </div>
  </div>
)