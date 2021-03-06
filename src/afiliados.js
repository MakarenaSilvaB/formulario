import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import afiliados from './images/afiliados.png';
import belmingo from './images/pancho.png';
import monteblack from './images/monteblack.png';
import curso from './images/curso.png';

export const Afiliados = () => (
  <div className="App">
    <div className="new-line"><img src={afiliados} alt="pic" className="line-jump"/></div>
    <h1>Sitios afiliados con éste. ¡Visítalos!</h1>
    <div className="container">
      <div className="centering">
        <div new-line>
            <a href="https://validador.belmingo.me/"> <img src={belmingo} alt="pic" /></a>
        </div>
        <div new-line>
            <a href="https://pag-web.rodrigo-montenegro.me/"> <img src={monteblack} alt="pic" /></a> 
        </div>
        <div new-line>
            <a href="https://uv.trifenix.io/"> <img src={curso} alt="pic" /></a> 
        </div>
      </div>
    </div>
  </div>
)