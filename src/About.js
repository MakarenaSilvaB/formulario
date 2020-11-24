import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import about from './about.png';

export const About = () => (
  <div className="App">
        <img src={about} alt="pic" />
        <h1>Sobre este Sitio</h1>
        <p>Este sitio ha sido creado con el propósito de reunir todos los trabajos realizados para los</p>
        <p>cursos de Desarrollo Web y Arquitectura de Software, en la Universidad de Valparaíso, 2020</p>
        <p>¡Ojalá disfrutes tu recorrido así como yo disfruté creándola!</p>
        <a href="https://hub.docker.com/r/makarenasilva/mi-validador-dw" className="App-link"> Docker Hub </a>| 
        <a href="https://dev.azure.com/ArquitecturaSW/Docker%20y%20React" className="App-link"> Azure DevOps </a>|
        <a href="https://github.com/MakarenaSilvaB" className="App-link"> GitHub </a>|
        <a href="https://makarena-silva.me" className="App-link"> Curso (Draft Personal) </a>
    </div>
)