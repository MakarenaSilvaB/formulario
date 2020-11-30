import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import demo from './images/flow.png';
import deploy from './images/deploy.png';
import production from './images/produccion.png';

export const Flow = () => (
  <div className="App">
    <div className="new-line"><img src={demo} alt="pic" className="line-jump"/></div>
    <p>A continuación, puedes ver los deploy generados para las etapas de producción y desarrollo de la forma versionada de éste sitio:</p>
    <div className="container">
      <div className="centering">
        <div new-line>
            <a href="https://develop.makarena-silva.me"> <img src={deploy} alt="pic" /></a>
        </div>
        <div new-line>
            <a href="https://production.makarena-silva.me"> <img src={production} alt="pic" /></a> 
        </div>
      </div>
    </div>
  </div>
)