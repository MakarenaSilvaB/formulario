import React from 'react';
import './App.css';
import home from './images/home.png';

export const Home = (props) => (
  <div className="App">
      <div className="new-line"><img src={home} alt="pic" className="line-jump"/></div>
      <h1 className="new-line">Bienvenido</h1>
      <div className="container">
        <p>Actualmente estás visitando mi pequeño sitio de demo de los ejercicios realizados para las asignaturas de Arquitectura de Software y Desarrollo Web. Navega en el menú en la superior izquierda, para comprobar cada uno de ellos. ¡Gracias por tu visita!</p>
      </div>
  </div>
)
