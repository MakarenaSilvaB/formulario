import React from 'react';
import './App.css';
import home from './home.png';

export const Home = (props) => (
  <div className="App">
    <img src={home} alt="pic" className="new-line"/>
    <h1 className="new-line">Bienvenido</h1>
    <p>Actualmente estás visitando mi pequeño portfolio sobre los trabajos</p>
    <p>realizados para las asignaturas de Arquitectura de Software y Desarrollo Web.</p>
    <p>Navega en el menú lateral, para comprobar cada uno de ellos.</p>
  </div>
)