import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import about from './about.png';

export const About = () => (
  <div className="App">
    <div className="new-line"><img src={about} alt="pic" /></div>
    <h1>Sobre este Sitio</h1>
    <div className="container">
      <p>Este sitio ha sido creado con el propósito de reunir todos los trabajos realizados para los cursos de Desarrollo Web y Arquitectura de Software, a modo de demo. Este es publicado por azure, desde el repositorio en github programado en React. Si bien, al principio me ha costado agarrar el hilo de los cursos, puedo decir que el llevar a cabo la creación de este sitio demo ha resultado una tarea sumamente divertida, además de interesante. Siempre es bonito conocer algo más alla de html, php y sus frameworks. Espero disfrutes el recorrido por este sitio, tanto como yo disfruté el crearlo, seguro será mucho más efímero que la creación en sí, pero con que hayas llegado hasta este mensaje, ¡hace que valga la pena!</p>
      <div className="centering">
        <p> Comparto lo enlaces de las cuentas y herramientas involucradas en este recorrido: </p>
          <a href="https://hub.docker.com/r/makarenasilva/mi-validador-dw" className="App-link"> Docker Hub </a>| 
          <a href="https://dev.azure.com/ArquitecturaSW/Docker%20y%20React" className="App-link"> Azure DevOps </a>|
          <a href="https://github.com/MakarenaSilvaB" className="App-link"> GitHub </a>|
          <a href="https://makarena-silva.me" className="App-link"> Curso (Draft Personal) </a>
      </div>
    </div>
  </div>
)